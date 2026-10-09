import os from "node:os";
import { chromium } from "@playwright/test";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const server = http.createServer((req, res) => {
  let file = decodeURIComponent(req.url.split("?")[0]);
  if (file === "/") file = "/index.html";
  file = path.join(process.cwd(), "legacy-site", file);
  try {
    let ext = path.extname(file.split("?")[0]);
    res.setHeader(
      "Content-Type",
      {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".woff2": "font/woff2",
      }[ext] || "application/octet-stream",
    );
    res.end(fs.readFileSync(file));
  } catch {
    res.statusCode = 404;
    res.end();
  }
});
await new Promise((r) => server.listen(3001, r));
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    (process.platform === "darwin"
      ? os.homedir() +
        "/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
      : undefined),
});
for (const width of [1440, 390])
  for (const [name, url] of [
    ["original", "http://localhost:3001/"],
    ["next", "http://localhost:3000/"],
  ]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);
    await page.locator(".elementor-element-e34bbb8").scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    const result = await page
      .locator(".elementor-element-e34bbb8")
      .evaluate((section) => {
        const slider = section.querySelector(".pxl-swiper-container");
        return {
          initialized: !!slider.swiper,
          slidesPerView: slider.swiper?.params.slidesPerView,
          section: { width: section.clientWidth, height: section.clientHeight },
          cards: [...section.querySelectorAll(".pxl-swiper-slide")]
            .slice(0, 3)
            .map((e) => ({ width: e.clientWidth, height: e.clientHeight })),
          imageCount: [...section.querySelectorAll("img")].filter(
            (i) => i.complete && i.naturalWidth > 0,
          ).length,
        };
      });
    console.log(name, width, JSON.stringify(result));
    await page
      .locator(".elementor-element-e34bbb8")
      .screenshot({ path: `/tmp/team-${name}-${width}.png` });
    if (name === "next") {
      if (!result.initialized) throw new Error("Team carousel not initialized");
      const slider = page.locator(
        ".elementor-element-e34bbb8 .pxl-swiper-container",
      );
      const before = await slider.evaluate((e) => e.swiper.activeIndex);
      await page
        .locator(".elementor-element-e34bbb8 .pxl-navigation-arrow-next")
        .first()
        .click();
      await page.waitForTimeout(600);
      const after = await slider.evaluate((e) => e.swiper.activeIndex);
      if (before === after) throw new Error("Team next arrow did not advance");
    }
    await page.close();
  }
await browser.close();
server.close();
