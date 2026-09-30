import fs from "node:fs";
import { parse } from "parse5";
import { all, attr, url, write } from "./lib/html-to-jsx.mjs";
const doc = parse(fs.readFileSync("blog/index.html", "utf8"));
const has = (n, c) => (attr(n, "class") || "").split(/\s+/).includes(c);
const text = (n) =>
  all(n, (x) => x.nodeName === "#text")
    .map((x) => x.value)
    .join("")
    .trim();
const plain = (s) => text(parse(s));
const archives = new Map(
  all(doc, (n) => n.tagName === "article").map((n) => [
    Number(attr(n, "id").replace("post-", "")),
    n,
  ]),
);
// Prefer the original category archive image and metadata when supplied.
if (fs.existsSync("category/index.html")) {
  const categoryDoc = parse(fs.readFileSync("category/index.html", "utf8"));
  for (const article of all(categoryDoc, (n) => n.tagName === "article")) {
    archives.set(Number(attr(article, "id").replace("post-", "")), article);
  }
}
const readAll = (kind) =>
  fs
    .readdirSync(`wp-json/wp/v2/${kind}`)
    .sort((a, b) => Number(a) - Number(b))
    .map((f) => JSON.parse(fs.readFileSync(`wp-json/wp/v2/${kind}/${f}`)));
const categories = readAll("categories").map(({ id, name, slug }) => ({
  id,
  name,
  slug,
}));
const tags = readAll("tags").map(({ id, name, slug }) => ({ id, name, slug }));
const users = readAll("users");
const posts = readAll("posts")
  .map((p) => {
    const archive = archives.get(p.id);
    const image = archive && all(archive, (n) => n.tagName === "img")[0];
    const contentImage = all(
      parse(p.content.rendered),
      (n) => n.tagName === "img",
    )[0];
    const recent = all(doc, (n) => has(n, "pxl--item")).find(
      (n) =>
        all(
          n,
          (x) =>
            x.tagName === "a" &&
            (attr(x, "href") || "").includes(`p=${p.id}.html`),
        ).length,
    );
    const recentImage = recent && all(recent, (n) => n.tagName === "img")[0];
    return {
      id: p.id,
      slug: p.slug,
      title: plain(p.title.rendered),
      url: `/blog/${p.slug}`,
      originalUrl: p.link,
      date: p.date,
      displayDate: new Date(p.date + "Z").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }),
      author: users.find((u) => u.id === p.author)?.name || "dualclickofficial",
      authorUrl:
        users.find((u) => u.id === p.author)?.link ||
        "https://itagency.in/author/dualclickofficial/",
      categories: p.categories,
      tags: p.tags,
      excerpt: plain(p.excerpt.rendered),
      image: url(attr(image || contentImage, "src") || ""),
      imageAlt: attr(image || contentImage, "alt") || plain(p.title.rendered),
      recentImage: url(attr(recentImage || image || contentImage, "src") || ""),
      comments: archive
        ? Number(
            text(all(archive, (n) => has(n, "pxl-item--comment"))[0]).match(
              /\d+/,
            )?.[0] || 0,
          )
        : null,
      contentHtml: url(p.content.rendered),
      className: [
        "pxl---post pxl-item--archive pxl-item--standard",
        ...p.class_list,
      ].join(" "),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
write("data/blogs.json", JSON.stringify({ posts, categories, tags }, null, 2));
console.log(
  `Extracted ${posts.length} posts and ${categories.length} categories.`,
);
