import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import { chromium } from "@playwright/test";
const data = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
const base = process.env.BLOG_TEST_URL || "http://localhost:3229";
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
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [],
      missing = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400 && r.url().startsWith(base)) missing.push(r.url());
    });
    await page.goto(base + "/blog", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1800);
    assert.equal(await page.locator("#pxl-content-main article").count(), 4);
    assert.equal(await page.locator("#categories-1 li").count(), 6);
    assert.equal(
      await page.locator("#pxl_recent_posts-1 .pxl--item").count(),
      4,
    );
    assert.equal(await page.locator("header").count(), 1);
    assert.equal(await page.locator("footer").count(), 1);
    const colors = await page.evaluate(() => {
      const s = getComputedStyle(document.documentElement);
      return [
        "--primary-color",
        "--gradient-color-from",
        "--gradient-color-to",
      ].map((k) => s.getPropertyValue(k).trim());
    });
    assert.deepEqual(colors, ["#fb593b", "#fde306", "#fb593b"]);
    await page.screenshot({ path: `/tmp/blog-${width}.png`, fullPage: true });
    await page
      .locator("#categories-1 a")
      .filter({ hasText: "Branding", exact: true })
      .click();
    assert.equal(await page.locator("#pxl-content-main article").count(), 1);
    assert.match(
      await page.locator("#pxl-content-main").innerText(),
      /Best Frequency/,
    );
    await page.goto(base + "/blog?page=2");
    assert.equal(await page.locator("#pxl-content-main article").count(), 4);
    await page.locator('a[aria-label="Next page"]').click();
    assert.equal(await page.locator("#pxl-content-main article").count(), 1);
    await page.locator('#search-1 input[name="s"]').fill("Teamwork");
    await page.locator('button[aria-label="Search"]').click();
    assert.equal(await page.locator("#pxl-content-main article").count(), 1);
    assert.match(
      await page.locator("#pxl-content-main").innerText(),
      /Teamwork/,
    );
    await page.goto(base + "/blog?s=nonexistent-query");
    assert.match(
      await page.locator("#pxl-content-main").innerText(),
      /No posts found/,
    );
    assert.deepEqual(errors, []);
    assert.deepEqual(missing, []);
    console.log(
      `Blog layout, sidebar, pagination, search, and category filter passed at ${width}px`,
    );
    await page.close();
  }
  for (const post of data.posts)
    assert.ok(fs.existsSync("public" + post.image));
} finally {
  await browser.close();
}
