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
    await page.goto(url);
    await page.waitForTimeout(8000);
    console.log(
      name,
      width,
      await page.evaluate(() => ({
        width: document.body.scrollWidth,
        hero: document
          .querySelector("rs-module")
          ?.getBoundingClientRect()
          .toJSON(),
        header: document
          .querySelector("header")
          ?.getBoundingClientRect()
          .toJSON(),
      })),
    );
    await page.screenshot({ path: `/tmp/${name}-${width}.png` });
    await page.close();
  }
await browser.close();
server.close();
