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
const normalize = (s) =>
  url(s)
    .replaceAll("/index.html%3Fp=1151.html", "/apply-job")
    .replaceAll("/index.html?p=1151.html", "/apply-job");
const doc = parse(fs.readFileSync("index.html?p=1151.html", "utf8"));
const head = all(doc, (n) => n.tagName === "head")[0],
  body = all(doc, (n) => n.tagName === "body")[0];
// Reuse Home's warm palette; keep Job Apply free of blue/cyan accents,
// including link states and Elementor's explicitly configured hover colors.
const home = parse(fs.readFileSync("itagency.in/index.html", "utf8"));
const homePalette = all(
  home,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
const pagePalette = all(
  doc,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
pagePalette.childNodes = homePalette.childNodes.map((n) => ({
  ...n,
  parentNode: pagePalette,
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
for (const element of all(doc, (n) => !!attr(n, "style"))) {
  const style = element.attrs.find((a) => a.name === "style");
  style.value = warmColors(style.value);
}
// Match the shared header's widget styles; this optional stylesheet is unused
// in the job form and otherwise changes the header's separator spacing.
for (const n of all(
  doc,
  (n) =>
    n.tagName === "link" && attr(n, "href")?.includes("widget-divider.min.css"),
)) {
  n.parentNode.childNodes = n.parentNode.childNodes.filter((c) => c !== n);
}
const manifest = {
  applyJob: {
    bodyClass: attr(body, "class"),
    scripts: all(
      doc,
      (n) => n.tagName === "script" && attr(n, "type") !== "speculationrules",
    ).map((n) => ({
      id: attr(n, "id"),
      type: attr(n, "type"),
      src: attr(n, "src") ? normalize(attr(n, "src")) : null,
      code: normalize((n.childNodes || []).map((c) => c.value || "").join("")),
    })),
  },
};
const render = (n) => normalize(jsx(n));
const emit = (name, n, imports = "") =>
  write(
    `components/apply-job/${name}.jsx`,
    `${imports}\nexport default function ${name}(){return <>${render(n)}</>}`,
  );
write(
  "components/apply-job/PageStyles.jsx",
  `export default function PageStyles(){return <>${head.childNodes
    .filter(
      (n) =>
        n.tagName === "style" ||
        (n.tagName === "link" && attr(n, "rel") === "stylesheet"),
    )
    .map(render)
    .join("")}</>}`,
);
const header = all(body, (n) => n.tagName === "header")[0];
replacements.set(header, "Header");
const title = all(body, (n) => attr(n, "id") === "pxl-page-title-elementor")[0];
emit("PageTitle", title);
replacements.set(title, "PageTitle");
const main = all(body, (n) => attr(n, "id") === "pxl-main")[0];
const form = all(main, (n) => n.tagName === "form")[0];
emit("ApplicationForm", form);
replacements.set(form, "ApplicationForm");
emit("PageContent", main, "import ApplicationForm from './ApplicationForm';");
replacements.set(main, "PageContent");
const footer = all(body, (n) => n.tagName === "footer")[0];
emit("Footer", footer);
replacements.set(footer, "Footer");
write(
  "components/apply-job/Page.jsx",
  `import Header from '../Header';\nimport Footer from './Footer';\nimport PageTitle from './PageTitle';\nimport PageContent from './PageContent';\nexport default function ApplyJobPage(){return <>${body.childNodes.map(render).join("")}</>}`,
);
write("data/apply-job-page.json", JSON.stringify(manifest, null, 2));
