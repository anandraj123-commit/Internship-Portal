import { chromium } from "@playwright/test";
import os from "node:os";
import fs from "node:fs";
import assert from "node:assert/strict";
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ||
    `${os.homedir()}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`,
});
const urls = [
  ...fs
    .readFileSync("public/sitemap.xml", "utf8")
    .matchAll(/<loc>(.*?)<\/loc>/g),
].map((m) => new URL(m[1]).pathname);
const failures = [];
try {
  for (let i = 0; i < urls.length; i += 3) {
    await Promise.all(
      urls.slice(i, i + 3).map(async (route) => {
        const page = await browser.newPage();
        const errors = [];
        page.on("pageerror", (e) => errors.push(e.message));
        page.on("console", (m) => {
          if (m.type() === "error" && /unique.*key/i.test(m.text()))
            errors.push(m.text());
        });
        page.on("response", (r) => {
          if (
            r.status() >= 400 &&
            /\/wp-content\/(plugins\/elementor|uploads\/elementor)\//.test(r.url())
          )
            errors.push(`${r.status()} ${r.url()}`);
        });
        try {
          await page.goto(`http://localhost:3000${route}`, {
            waitUntil: "domcontentloaded",
            timeout: 30000,
          });
          await page.waitForFunction(
            () => window.elementorFrontend?.elementsHandler,
            { timeout: 20000 },
          );
          await page.waitForTimeout(1500);
          if (route.startsWith("/service/")) {
            const faq = page
              .locator(".pxl-accordion .pxl-accordion--title")
              .last();
            const target = await faq.getAttribute("data-target");
            assert(target && target !== "#undefined");
            assert.equal(await page.locator(target).count(), 1);
            await faq.click();
            await page.waitForTimeout(500);
            assert(await page.locator(target).isVisible());
            await page.evaluate(() =>
              Promise.race([
                window.elementorFrontend.utils.lightbox,
                new Promise((_, reject) =>
                  setTimeout(
                    () =>
                      reject(new Error("Lightbox initialization timed out")),
                    10000,
                  ),
                ),
              ]),
            );
          }
        } catch (e) {
          errors.push(e.message);
        }
        if (errors.length)
          failures.push({ route, errors: [...new Set(errors)] });
        console.log(JSON.stringify({ route, errors: [...new Set(errors)] }));
        await page.close();
      }),
    );
  }
} finally {
  await browser.close();
}
assert.equal(failures.length, 0, JSON.stringify(failures, null, 2));
console.log(
  `Passed runtime checks on ${urls.length} pages, including service FAQ interactions and lightbox loading.`,
);
