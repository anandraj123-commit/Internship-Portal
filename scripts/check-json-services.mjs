import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import { chromium } from "@playwright/test";
const { services } = JSON.parse(fs.readFileSync("data/services.json", "utf8"));
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--port", "3210"],
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
  const base = "http://localhost:3210";
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 950 } });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base + "/service", { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#pxl-cookie-js", { state: "attached" });
    await page.waitForTimeout(600);
    const cards = page.locator(".pxl-service-grid .pxl-grid-item");
    assert.equal(await cards.count(), services.length);
    for (const [i, service] of services.entries()) {
      assert.equal(
        (await cards.nth(i).locator(".pxl-post--title").textContent()).trim(),
        service.title,
      );
      assert.equal(
        await cards.nth(i).locator(".btn-readmore-1").getAttribute("href"),
        service.href,
      );
      const response = await page.request.get(base + service.href);
      assert.equal(response.status(), 200);
      const html = await response.text();
      assert.ok(html.includes(service.overview));
      assert.ok(html.includes("shared-header-styles"));
    }
    const first = cards.first();
    await first.evaluate((el) => el.scrollIntoView({ block: "center" }));
    await page.waitForTimeout(1500);
    await first.hover();
    await page.waitForTimeout(500);
    const readMore = first.locator(".btn-readmore-1");
    assert.ok(await readMore.isVisible());
    await readMore.click();
    await page.waitForURL("**" + services[0].href);
    await page.waitForSelector("#pxl-cookie-js", { state: "attached" });
    await page.waitForTimeout(600);
    assert.equal(await page.locator("h1").innerText(), services[0].title);
    const faq = page.locator(".pxl-accordion--title").first();
    await faq.scrollIntoViewIfNeeded();
    await faq.click();
    await page.waitForTimeout(500);
    assert.ok(
      await page.locator(".pxl-accordion--content").first().isVisible(),
    );
    assert.deepEqual(errors, []);
    console.log(
      `${width}px: six JSON cards and routes verified; hover Read more, details, shared header and FAQ pass.`,
    );
    await page.close();
  }
} finally {
  await browser?.close();
  server.kill();
}
