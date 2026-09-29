import os from "node:os";
import { chromium } from "@playwright/test";
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ||
    (process.platform === "darwin"
      ? os.homedir() +
        "/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
      : undefined),
});
for (const route of ["/", "/about-us"]) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  const failed = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`);
  });
  await page.goto("http://localhost:3000" + route);
  await page.waitForTimeout(12000);
  console.log(
    JSON.stringify(
      {
        route,
        title: await page.title(),
        hero: await page
          .locator("rs-module")
          .first()
          .boundingBox()
          .catch(() => null),
        errors,
        failed,
        header: await page.locator("header").count(),
        footer: await page.locator("footer").count(),
        height: await page.evaluate(() => document.body.scrollHeight),
      },
      null,
      2,
    ),
  );
  await page.screenshot({
    path: "/tmp/agency-" + (route === "/" ? "home" : "about") + ".png",
    fullPage: true,
  });
  await page.close();
}
await browser.close();
