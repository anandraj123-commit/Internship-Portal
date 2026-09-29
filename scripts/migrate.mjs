import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";
const source = "itagency.in";
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
};
// Keep original stylesheet contents and asset directories. Remove download query suffixes.
function copy(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) copy(p);
    else if (!e.name.endsWith(".html") && !e.name.startsWith(".")) {
      const dest = "public/" + path.relative(source, p).split("?")[0];
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(p, dest);
    }
  }
}
copy(source);
function url(s) {
  return s
    .replaceAll("https://itagency.in/wp-content/", "/wp-content/")
    .replaceAll("https://itagency.in/wp-includes/", "/wp-includes/")
    .replace(/(?<![\w/])(?:wp-content|wp-includes)\//g, (m) => "/" + m)
    .replace(/(?:%3F|\?)ver=[^\s"'<>)]*/gi, "")
    .replaceAll("index.html%3Fp=1133.html", "/about-us")
    .replaceAll("index.html?p=1133.html", "/about-us")
    .replace(/(?<![\w/])index\.html(?=[#"']|$)/g, "/");
}
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const all = (n, p) => [
  ...(p(n) ? [n] : []),
  ...(n.childNodes || []).flatMap((c) => all(c, p)),
];
const attrsMap = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  novalidate: "noValidate",
  httpEquiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  charset: "charSet",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  viewbox: "viewBox",
  fillrule: "fillRule",
  cliprule: "clipRule",
};
const bool = new Set([
  "disabled",
  "checked",
  "selected",
  "multiple",
  "required",
  "readonly",
  "autoplay",
  "loop",
  "muted",
  "controls",
  "allowfullscreen",
  "novalidate",
  "hidden",
]);
const voids = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
function style(s) {
  const o = {};
  for (const v of s.split(/;(?![^()]*\))/)) {
    const i = v.indexOf(":");
    if (i < 0) continue;
    const k = v.slice(0, i).trim();
    o[
      k.startsWith("--") ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    ] = v.slice(i + 1).trim();
  }
  return o;
}
const replacements = new Map();
function jsx(n) {
  if (replacements.has(n)) return `<${replacements.get(n)} />`;
  if (n.nodeName === "#text")
    return n.value.trim() ? "{" + JSON.stringify(n.value) + "}" : "";
  if (!n.tagName || n.tagName === "script") return "";
  const tag = n.tagName;
  const at = (n.attrs || [])
    .filter((a) => !a.name.startsWith("on"))
    .map((a) => {
      let k = attrsMap[a.name] || a.name;
      let v = url(a.value);
      if (k === "style") return ` style={${JSON.stringify(style(v))}}`;
      if (tag === "input" && k === "value") k = "defaultValue";
      if (k === "checked") k = "defaultChecked";
      if (bool.has(a.name)) return ` ${k}={true}`;
      return ` ${k}={${JSON.stringify(v)}}`;
    })
    .join("");
  if (voids.has(tag)) return `<${tag}${at} />`;
  if (tag === "style")
    return `<style${at} dangerouslySetInnerHTML={{__html:${JSON.stringify(url(n.childNodes.map((c) => c.value || "").join("")))}}} />`;
  return `<${tag}${at}>${(n.childNodes || []).map(jsx).join("")}</${tag}>`;
}
const component = (name, node, imports = "") =>
  write(
    `components/${name}.jsx`,
    `${imports}\nexport default function ${name.split("/").at(-1)}() {\n return (<>${jsx(node)}</>);\n}\n`,
  );
const manifests = {};
for (const [key, file] of [
  ["home", "index.html"],
  ["about", "index.html?p=1133.html"],
]) {
  const doc = parse(fs.readFileSync(`${source}/${file}`, "utf8"));
  const head = all(doc, (n) => n.tagName === "head")[0],
    body = all(doc, (n) => n.tagName === "body")[0];
  const scripts = all(doc, (n) => n.tagName === "script")
    .filter((n) => !["speculationrules"].includes(attr(n, "type")))
    .map((n) => ({
      src: attr(n, "src") ? url(attr(n, "src")) : null,
      code: url((n.childNodes || []).map((c) => c.value || "").join("")),
      id: attr(n, "id"),
      type: attr(n, "type"),
    }));
  manifests[key] = { bodyClass: attr(body, "class"), scripts };
  component(`${key}/PageStyles`, {
    tagName: "fragment",
    nodeName: "fragment",
    childNodes: [],
  });
  write(
    `components/${key}/PageStyles.jsx`,
    `export default function PageStyles(){return <>${head.childNodes
      .filter(
        (n) =>
          n.tagName === "style" ||
          (n.tagName === "link" && attr(n, "rel") === "stylesheet"),
      )
      .map(jsx)
      .join("")}</>}`,
  );
  const imports = [];
  function extract(n, name) {
    component(name, n);
    replacements.set(n, name.split("/").at(-1));
    imports.push(
      `import ${name.split("/").at(-1)} from './${name.split("/").at(-1)}';`,
    );
  }
  let navs = all(
    body,
    (n) =>
      attr(n, "class") === "menu-main-menu-container" || n.tagName === "nav",
  );
  const navVariants = navs.map((n) => jsx(n));
  write(
    key === "home" ? "components/Navbar.jsx" : "components/about/Navbar.jsx",
    key === "home"
      ? `export default function Navbar({variant=0}){return [${navVariants.map((s) => `<>${s}</>`).join(",")}][variant]}`
      : `export { default } from "../Navbar";`,
  );
  navs.forEach((n, i) => replacements.set(n, `Navbar variant={${i}}`));
  const header = all(body, (n) => n.tagName === "header")[0];
  if (key === "home") {
    component(
      "Header",
      header,
      "import Navbar from './Navbar';\nimport HeaderStyles from './HeaderStyles';",
    );
    const headerPath = "components/Header.jsx";
    fs.writeFileSync(
      headerPath,
      fs
        .readFileSync(headerPath, "utf8")
        .replace("return (<>", "return (<><HeaderStyles />"),
    );
    write(
      "components/home/Header.jsx",
      'export { default } from "../Header";\n',
    );
    write(
      "components/home/Navbar.jsx",
      'export { default } from "../Navbar";\n',
    );
  } else {
    write(
      "components/about/Header.jsx",
      'export { default } from "../Header";\n',
    );
  }
  replacements.set(header, "Header");
  const footer = all(body, (n) => n.tagName === "footer")[0];
  extract(footer, `${key}/Footer`);
  const content = all(
    body,
    (n) => attr(n, "data-elementor-type") === "wp-page",
  )[0];
  const names =
    key === "home"
      ? [
          "HeroSection",
          "ProcessSection",
          "ServicesSection",
          "PartnersSection",
          "TeamSection",
          "CaseStudiesSection",
          "FunFactsSection",
          "TestimonialsSection",
          "BlogSection",
          "ContactSection",
        ]
      : [
          "IntroductionSection",
          "ServicesSection",
          "TeamSection",
          "FunFactsSection",
          "CaseStudiesSection",
        ];
  let i = 0;
  for (const n of content.childNodes.filter((n) => n.tagName === "section"))
    extract(n, `${key}/${names[i++]}`);
  const main = all(body, (n) => attr(n, "id") === "pxl-main")[0];
  component(
    `${key}/PageContent`,
    main,
    imports.filter((s) => s.includes("Section")).join("\n"),
  );
  replacements.set(main, "PageContent");
  component(`${key}/Page`, body, "");
  write(
    `components/${key}/Page.jsx`,
    `import Footer from './Footer';\nimport PageContent from './PageContent';\nexport default function Page({ header }){return <>${body.childNodes.map(jsx).join("").replace("<Header />", "{header}")}</>}`,
  );
}
write("data/pages.json", JSON.stringify(manifests, null, 2));
