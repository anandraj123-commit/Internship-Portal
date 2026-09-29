import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import os from "node:os";
import { chromium } from "@playwright/test";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--port", "3200"],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let browser;
try {
  await new Promise((resolve, reject) => {
    server.stdout.on("data", (d) => {
      if (d.toString().includes("Ready")) resolve();
    });
    server.on("exit", (c) => reject(new Error(`Preview exited ${c}`)));
    setTimeout(() => reject(new Error("Preview timed out")), 15000).unref();
  });
  browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      (process.platform === "darwin"
        ? os.homedir() +
          "/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
        : undefined),
  });
  for (const width of [1440, 1024, 390]) {
    let expected;
    for (const route of [
      "/about-us",
      "/service",
      "/service/ui-ux-product-design",
    ]) {
      const page = await browser.newPage({ viewport: { width, height: 950 } });
      await page.goto("http://localhost:3200" + route, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForSelector("#pxl-cookie-js", { state: "attached" });
      await page.waitForTimeout(600);
      await page.evaluate(() => document.fonts.ready);
      const snapshots = [];
      for (const state of ["normal", "sticky"]) {
        if (state === "sticky") {
          await page.evaluate(() => window.scrollTo(0, 850));
          await page.waitForTimeout(150);
          await page.evaluate(() => window.scrollTo(0, 600));
          await page.waitForTimeout(600);
        }
        snapshots.push(
          await page.locator("header").evaluate((header) =>
            [...header.querySelectorAll("*")].flatMap((el) => {
              const r = el.getBoundingClientRect(),
                s = getComputedStyle(el);
              if (
                !r.width ||
                !r.height ||
                r.bottom <= 0 ||
                r.top >= 250 ||
                s.visibility === "hidden" ||
                s.display === "none"
              )
                return [];
              return [
                {
                  tag: el.tagName,
                  classes: el.className,
                  rect: [r.x, r.y, r.width, r.height].map((v) => Math.round(v)),
                  color: s.color,
                  background: s.backgroundColor,
                  font: s.font,
                  padding: s.padding,
                  borderRadius: s.borderRadius,
                },
              ];
            }),
          ),
        );
        if (state === "normal")
          await page.screenshot({
            path: `/tmp/header-${route.replaceAll("/", "-")}-${width}.png`,
            clip: { x: 0, y: 0, width, height: 250 },
          });
      }
      if (!expected) expected = snapshots;
      else
        assert.deepEqual(
          snapshots,
          expected,
          `${route} header differs from About at ${width}px`,
        );
      await page.close();
    }
    console.log(
      `About, Services and service details match at ${width}px (normal and sticky).`,
    );
  }
} finally {
  await browser?.close();
  server.kill();
}
