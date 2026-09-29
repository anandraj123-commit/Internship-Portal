import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import os from "node:os";
import { chromium } from "@playwright/test";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--port", "3220"],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let browser;
try {
  await new Promise((resolve, reject) => {
    server.stdout.on("data", (d) => {
      if (d.toString().includes("Ready")) resolve();
    });
    server.on("exit", (c) => reject(new Error(`Preview exited ${c}`)));
    setTimeout(() => reject(new Error("Preview timeout")), 15000).unref();
  });
  browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      (process.platform === "darwin"
        ? os.homedir() +
          "/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
        : undefined),
  });
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [],
      missing = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400 && r.url().includes("/wp-")) missing.push(r.url());
    });
    await page.goto("http://localhost:3220/apply-job", {
      waitUntil: "domcontentloaded",
    });
    await page.waitForSelector("#pxl-cookie-js", { state: "attached" });
    await page.waitForTimeout(900);
    const palette = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      return ["--primary-color", "--gradient-color-from", "--gradient-color-to", "--link-color"].map(key => root.getPropertyValue(key).trim());
    });
    assert.deepEqual(palette, ["#fb593b", "#fde306", "#fb593b", "#fb593b"]);
    const breadcrumbBackground = await page.locator(".pxl-breadcrumb").first().evaluate(el => getComputedStyle(el).backgroundImage);
    assert.ok(breadcrumbBackground.includes("253, 227, 6") && breadcrumbBackground.includes("251, 89, 59"));
    assert.equal(await page.locator("header").count(), 1);
    assert.equal(
      await page
        .locator('header a[href="/apply-job"]')
        .filter({ hasText: /^Apply$/ })
        .count(),
      3,
    );
    await page.screenshot({ path: `/tmp/apply-job-header-${width}.png` });
    const form = page.locator("#pxl-main form");
    await form.locator('[name="fname"]').fill("UI");
    await form.locator('[name="lname"]').fill("Check");
    await form.locator('[name="email"]').fill("ui-check@example.test");
    const select = form.locator('select[name="position"]');
    assert.equal(await select.locator("option").count(), 6);
    await form.locator(".pxl-select-higthlight").click();
    await form
      .locator(".pxl-select-options li")
      .filter({ hasText: /^HTML\/CSS$/ })
      .click();
    assert.equal(await select.inputValue(), "HTML/CSS");
    const file = form.locator('input[type="file"]');
    await file.setInputFiles({
      name: "ui-check.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Local UI test file. Not submitted."),
    });
    assert.equal(await file.evaluate((el) => el.files[0].name), "ui-check.txt");
    await form.locator("textarea").fill("Local UI check only.");
    await form.evaluate((el) => el.scrollIntoView({ block: "center" }));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/apply-job-form-${width}.png` });
    assert.deepEqual(errors, []);
    assert.deepEqual(missing, []);
    const redirect = await page.request.get(
      "http://localhost:3220/index.html?p=1151",
      { maxRedirects: 0 },
    );
    assert.equal(redirect.status(), 308);
    assert.ok(redirect.headers().location.startsWith("/apply-job"));
    console.log(
      `${width}px: shared header, Apply links, original fields, position dropdown, CV selection and legacy redirect pass. No submission sent.`,
    );
    await page.close();
  }
} finally {
  await browser?.close();
  server.kill();
}
