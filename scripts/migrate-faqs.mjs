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

const doc = parse(fs.readFileSync("index.html?p=1145.html", "utf8"));
const head = all(doc, (n) => n.tagName === "head")[0];
const body = all(doc, (n) => n.tagName === "body")[0];
// Match the site's warm palette while retaining the Faqs layout.
const home = parse(fs.readFileSync("itagency.in/index.html", "utf8"));
const palette = all(
  home,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
const faqsPalette = all(
  doc,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
faqsPalette.childNodes = palette.childNodes.map((n) => ({
  ...n,
  parentNode: faqsPalette,
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
    `components/faqs/${name}.jsx`,
    `${imports}\nexport default function ${name}(){return <>${render(node)}</>}`,
  );
// The shared header supplies its own divider styling, as on About Us.
write(
  "components/faqs/PageStyles.jsx",
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
emit("PageTitle", title);
replacements.set(title, "PageTitle");
const main = all(body, (n) => attr(n, "id") === "pxl-main")[0];
emit("PageContent", main);
replacements.set(main, "PageContent");
write(
  "components/faqs/Page.jsx",
  `import Header from '../Header';\nimport Footer from '../about/Footer';\nimport PageTitle from './PageTitle';\nimport PageContent from './PageContent';\nexport default function FaqsPage(){return <>${body.childNodes.map(render).join("")}</>}`,
);
write(
  "data/faqs-page.json",
  JSON.stringify(
    {
      faqs: {
        bodyClass: attr(body, "class"),
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
