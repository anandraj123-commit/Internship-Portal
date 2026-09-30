import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import { chromium } from "@playwright/test";
const data = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
const base = process.env.CATEGORY_TEST_URL || "http://localhost:3230";
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
      if (
        r.status() >= 400 &&
        r.url().startsWith(base) &&
        r.url().includes("/wp-")
      )
        missing.push(r.url());
    });
    await page.goto(base + "/blog");
    for (const category of data.categories) {
      await page
        .locator(`#categories-1 a[href="/category/${category.slug}"]`)
        .click();
      assert.equal(new URL(page.url()).pathname, `/category/${category.slug}`);
      assert.equal(await page.locator("h1").innerText(), category.name);
      assert.equal(
        await page.locator(".pxl-breadcrumb .breadcrumb-entry").innerText(),
        category.name,
      );
      const active = page.locator("#categories-1 .current-cat a");
      assert.equal(await active.count(), 1);
      assert.equal(await active.innerText(), category.name);
      assert.equal(await active.getAttribute("aria-current"), "page");
      assert.deepEqual(
        await page
          .locator("#pxl-content-main article")
          .evaluateAll((nodes) =>
            nodes.map((n) => Number(n.id.replace("post-", ""))),
          ),
        data.posts
          .filter((p) => p.categories.includes(category.id))
          .map((p) => p.id),
      );
      assert.equal(await page.locator("header").count(), 1);
      assert.equal(await page.locator("footer").count(), 1);
    }
    await page.goto(base + "/category/branding");
    await page.waitForTimeout(1500);
    const color = await page
      .locator("#categories-1 .current-cat a")
      .evaluate((n) => getComputedStyle(n).color);
    assert.equal(color, "rgb(255, 255, 255)");
    const colors = await page.evaluate(() => {
      const s = getComputedStyle(document.documentElement);
      return [
        "--primary-color",
        "--gradient-color-from",
        "--gradient-color-to",
      ].map((k) => s.getPropertyValue(k).trim());
    });
    assert.deepEqual(colors, ["#fb593b", "#fde306", "#fb593b"]);
    await page.screenshot({
      path: `/tmp/category-${width}.png`,
      fullPage: true,
    });
    await page.locator('#search-1 input[name="s"]').fill("unmatched-query");
    await page.locator("#search-1 button").click();
    assert.equal(new URL(page.url()).pathname, "/category/branding");
    assert.match(
      await page.locator("#pxl-content-main").innerText(),
      /No posts found/,
    );
    assert.deepEqual(errors, []);
    assert.deepEqual(missing, []);
    console.log(
      `All six category links, post lists, titles, active highlights, and scoped search passed at ${width}px`,
    );
    await page.close();
  }
  const page = await browser.newPage();
  assert.equal(
    (await page.goto(base + "/category/not-a-category")).status(),
    404,
  );
  await page.goto(base + "/category/branding/index.html");
  assert.equal(new URL(page.url()).pathname, "/category/branding");
} finally {
  await browser.close();
}
