import fs from "node:fs";
import os from "node:os";
import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
const data = JSON.parse(fs.readFileSync("data/blogs.json"));
const base = process.env.POST_TEST_URL || "http://localhost:3231";
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
    await page.locator("#pxl-content-main .btn--readmore").first().click();
    assert.equal(new URL(page.url()).pathname, data.posts[0].url);
    await page.waitForTimeout(1800);
    assert.equal(
      await page.locator("#pxl-content-main article > h2").innerText(),
      data.posts[0].title,
    );
    assert.equal(await page.locator("header").count(), 1);
    assert.equal(await page.locator("footer").count(), 1);
    assert.equal(
      await page.locator("#comments .comment-list .comment").count(),
      3,
    );
    assert.ok(
      (
        await page.locator("#pxl-content-main .pxl-item--content").innerText()
      ).includes("Ultimate Business Marketing Solution"),
    );
    for (let y = 0; y < 7000; y += 800) {
      await page.evaluate((y) => scrollTo(0, y), y);
      await page.waitForTimeout(100);
    }
    await page.screenshot({ path: `/tmp/post-${width}.png`, fullPage: true });
    await page.locator("#pxl_recent_posts-1 h4 a").nth(1).click();
    assert.equal(new URL(page.url()).pathname, data.posts[1].url);
    assert.equal(
      await page.locator("#pxl-content-main article > h2").innerText(),
      data.posts[1].title,
    );
    assert.equal(await page.locator("#comments .comment-list").count(), 0);
    assert.equal(
      await page.locator("#comment_post_ID").inputValue(),
      String(data.posts[1].id),
    );
    assert.deepEqual(errors, []);
    assert.deepEqual(missing, []);
    console.log(
      `Read More and recent-post navigation, article layout and assets passed at ${width}px`,
    );
    await page.close();
  }
  const page = await browser.newPage();
  for (const post of data.posts) {
    await page.goto(base + post.url);
    assert.equal(
      await page.locator("#pxl-content-main article > h2").innerText(),
      post.title,
    );
    assert.ok(
      fs.existsSync("public" + post.image.replace("980x512", "1200x672")),
    );
  }
  assert.equal((await page.goto(base + "/blog/not-a-post")).status(), 404);
  await page.goto(base + "/index.html?p=709.html");
  assert.equal(new URL(page.url()).pathname, data.posts[0].url);
  console.log("All nine article routes and legacy redirect passed");
} finally {
  await browser.close();
}
