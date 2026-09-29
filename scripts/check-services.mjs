import assert from "node:assert/strict";
import os from "node:os";
import { chromium } from "@playwright/test";
import { services } from "../data/services.js";
const base = process.env.TEST_BASE_URL || "http://localhost:3100";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    (process.platform === "darwin"
      ? os.homedir() +
        "/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
      : undefined),
});
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 950 } });
    const errors = [];
    const failures = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400 && r.url().startsWith(base + "/wp-"))
        failures.push(r.url());
    });
    await page.goto(base + "/service", { waitUntil: "domcontentloaded" });
    await page
      .waitForFunction(
        () =>
          window.jQuery &&
          window.elementorFrontend &&
          document.querySelector("#pxl-cookie-js"),
      )
      .catch(() => {});
    await page.waitForTimeout(1000);
    assert.equal(await page.locator("header").count(), 1);
    assert.equal(
      await page.locator(".pxl-service-grid .pxl-grid-item").count(),
      6,
    );
    for (const s of services)
      assert.equal(
        await page
          .locator(`.pxl-service-grid a[href="/service/${s.slug}"]`)
          .count(),
        2,
      );
    await page.locator(".pxl-service-grid .pxl-grid-item").first().evaluate(el => el.scrollIntoView({block: "center"}));
    await page.waitForTimeout(1800);
    await page.screenshot({ path: `/tmp/services-${width}.png` });
    await page.locator(".pxl-service-grid .pxl-post--title a").first().click();
    await page.waitForURL("**/service/we-mobile-development");
    await page.waitForSelector("#pxl-cookie-js", { state: "attached" });
    await page.waitForTimeout(1000);
    assert.equal(await page.locator("header").count(), 1);
    assert.ok(
      await page
        .locator("#pxl-main")
        .innerText()
        .then((t) => t.includes(services[0].title)),
    );
    const faq = page.locator(".pxl-accordion--title").nth(0);
    await faq.scrollIntoViewIfNeeded();
    await faq.click();
    await page.waitForTimeout(500);
    assert.ok(await page.locator(".pxl-accordion--content").nth(0).isVisible());
    await page.screenshot({ path: `/tmp/service-detail-${width}.png` });
    for (const s of services) {
      const response = await page.request.get(base + "/service/" + s.slug);
      assert.equal(response.status(), 200);
      const html = await response.text();
      assert.ok(html.includes(s.slug));
      assert.ok(!html.includes("__TITLE__"));
    }
    assert.equal(
      (await page.request.get(base + "/service/not-a-service")).status(),
      404,
    );
    console.log(
      JSON.stringify({
        width,
        errors,
        failures,
        allSixDetails: true,
        accordion: true,
      }),
    );
    assert.deepEqual(errors, []);
    assert.deepEqual(failures, []);
    await page.close();
  }
} finally {
  await browser.close();
}
