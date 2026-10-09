import fs from "node:fs";
import { parse } from "parse5";
import {
  all,
  attr,
  url,
  jsx,
  write,
  replacements,
} from "./lib/html-to-jsx.mjs";

const doc = parse(fs.readFileSync("index.html?p=709.html", "utf8"));
const head = all(doc, (n) => n.tagName === "head")[0];
const body = all(doc, (n) => n.tagName === "body")[0];
// Match the site's warm palette while retaining the Blog layout.
const home = parse(fs.readFileSync("legacy-site/index.html", "utf8"));
const palette = all(
  home,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
const blogPalette = all(
  doc,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
blogPalette.childNodes = palette.childNodes.map((n) => ({
  ...n,
  parentNode: blogPalette,
}));
const warmColors = (css) =>
  css
    .replace(/#006cff|#01f1f4|#6ec1e4/gi, "#fb593b")
    .replace(/#00f1f4/gi, "#fde306")
    .replace(/0,108,255/g, "251,89,59")
    .replace(/0,241,244/g, "253,227,6");
for (const style of all(doc, (n) => n.tagName === "style")) {
  for (const node of style.childNodes)
    if (node.value) node.value = warmColors(node.value);
}
for (const node of all(doc, (n) => !!attr(n, "style"))) {
  const style = node.attrs.find((a) => a.name === "style");
  style.value = warmColors(style.value);
}
const render = (n) => jsx(n);
const emit = (name, node, imports = "") =>
  write(
    `components/post/${name}.jsx`,
    `${imports}\nexport default function ${name}(){return <>${render(node)}</>}`,
  );
// The shared header supplies its own divider styling, as on About Us.
write(
  "components/post/PageStyles.jsx",
  `import FooterStyles from "../contact/FooterStyles";\nexport default function PageStyles(){return <>${head.childNodes
    .filter(
      (n) =>
        n.tagName === "style" ||
        (n.tagName === "link" &&
          attr(n, "rel") === "stylesheet" &&
          !attr(n, "href").includes("widget-divider.min.css")),
    )
    .map(render)
    .join("")}<FooterStyles /></>}`,
);
replacements.set(all(body, (n) => n.tagName === "header")[0], "Header");
replacements.set(all(body, (n) => n.tagName === "footer")[0], "Footer");
const title = all(body, (n) => attr(n, "id") === "pxl-page-title-elementor")[0];
const categoryLink = all(
  title,
  (n) => n.tagName === "a" && (attr(n, "href") || "").includes("category/"),
)[0];
categoryLink.attrs.find((a) => a.name === "href").value = "__CATEGORY_URL__";
for (const text of all(categoryLink, (n) => n.nodeName === "#text"))
  if (text.value.trim()) text.value = "__CATEGORY_NAME__";
write(
  "components/post/PageTitle.jsx",
  `import usePost from "./usePost";
import data from "../../data/blogs.json";
export default function PageTitle(){const post=usePost();const category=data.categories.find(c=>post.categories.includes(c.id));return <>${render(title).replaceAll('"__CATEGORY_URL__"', '"/category/" + category.slug').replaceAll('"__CATEGORY_NAME__"', "category.name").replaceAll("blog-standard/index.html", "/blog")}</>}`,
);
replacements.set(title, "PageTitle");
const main = all(body, (n) => attr(n, "id") === "pxl-main")[0];
// PageContent renders the archive and sidebar from data/blogs.json.
replacements.set(main, "PageContent");
write(
  "components/post/Page.jsx",
  `import Header from '../Header';\nimport Footer from '../about/Footer';\nimport PageTitle from './PageTitle';\nimport PageContent from './PageContent';\nexport default function PostPage(){return <>${body.childNodes.map(render).join("")}</>}`,
);
write(
  "data/post-page.json",
  JSON.stringify(
    {
      post: {
        bodyClass: attr(body, "class").replace(/postid-709/g, ""),
        scripts: all(
          doc,
          (n) =>
            n.tagName === "script" && attr(n, "type") !== "speculationrules",
        ).map((n) => ({
          id: attr(n, "id"),
          type: attr(n, "type"),
          src: attr(n, "src") ? url(attr(n, "src")) : null,
          code: url((n.childNodes || []).map((c) => c.value || "").join("")),
        })),
      },
    },
    null,
    2,
  ),
);
