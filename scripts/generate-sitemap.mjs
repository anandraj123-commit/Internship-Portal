import { readdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const readJson = async (path) =>
  JSON.parse(await readFile(new URL(path, root), "utf8"));
const site = await readJson("data/site.json");
const origin = new URL(site.url);
if (
  !["https:", "http:"].includes(origin.protocol) ||
  origin.pathname !== "/" ||
  origin.search ||
  origin.hash
) {
  throw new Error("data/site.json must contain an absolute website origin.");
}

async function pageRoutes(directory = "pages", prefix = "") {
  const routes = [];
  for (const entry of await readdir(new URL(`${directory}/`, root), {
    withFileTypes: true,
  })) {
    if (entry.name.startsWith("_") || entry.name === "api") continue;
    if (entry.isDirectory()) {
      routes.push(
        ...(await pageRoutes(
          `${directory}/${entry.name}`,
          `${prefix}/${entry.name}`,
        )),
      );
    } else if (/\.(jsx?|tsx?)$/.test(entry.name) && !entry.name.includes("[")) {
      const name = entry.name.replace(/\.(jsx?|tsx?)$/, "");
      if (["404", "500"].includes(name)) continue;
      routes.push(name === "index" ? prefix || "/" : `${prefix}/${name}`);
    }
  }
  return routes;
}

const [{ services }, { posts, categories }, pages] = await Promise.all([
  readJson("data/services.json"),
  readJson("data/blogs.json"),
  pageRoutes(),
]);
const routes = [
  ...new Set([
    ...pages,
    ...services.map(({ slug }) => `/service/${slug}`),
    ...posts.map(({ slug }) => `/blog/${slug}`),
    ...categories.map(({ slug }) => `/category/${slug}`),
  ]),
].sort();
const escapeXml = (text) =>
  text.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char],
  );
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((path) => `  <url><loc>${escapeXml(new URL(path, origin).href)}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /wp-admin/
Disallow: /wp-content/uploads/wc-logs/
Disallow: /wp-content/uploads/woocommerce_transient_files/
Disallow: /wp-content/uploads/woocommerce_uploads/

Sitemap: ${new URL("/sitemap.xml", origin).href}
`;
await writeFile(new URL("public/sitemap.xml", root), sitemap);
await writeFile(new URL("public/robots.txt", root), robots);
console.log(
  `Generated sitemap.xml with ${routes.length} pages and robots.txt for ${origin.origin}`,
);
