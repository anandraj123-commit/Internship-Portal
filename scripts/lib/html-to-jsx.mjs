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

function url(s) {
  return s
    .replace(/(?:\.\.\/)*blog\/index\.html/g, "/blog")
    .replace(/https?:\/\/itagency\.in\/(wp-content|wp-includes)\//g, "/$1/")
    .replace(/(?:\.\.\/)+(wp-content|wp-includes)\//g, "/$1/")
    .replace(/(?<![\w/])(wp-content|wp-includes)\//g, "/$1/")
    .replace(/(?:%3F|\?)ver=[^\s"'<>)]*/gi, "")
    .replace(
      /(?:\.\.\/)*index\.html(?:%3F|\?)p=(\d+)\.html/g,
      (m, id) => routes[id] || "/" + m.replace(/^(?:\.\.\/)+/, ""),
    )
    .replace(/(?:\.\.\/)*service\/index\.html/g, "/service")
    .replace(/(?:\.\.\/)+index\.html/g, "/")
    .replace(/(?<![\w/])index\.html(?=[#"']|$)/g, "/");
}
const routes = {
  709: "/blog/double-down-on-marketing-spend-think-again",
  707: "/blog/private-blog-network-what-is-pbn-how-can-you-build-one",
  705: "/blog/what-we-like-about-teamwork-during-big-projects",
  703: "/blog/how-does-marketing-automation-help-lead-generation",
  1210: "/blog/10-digital-marketing-stats-that-will-impact-your-business",
  1208: "/blog/how-to-protect-your-brand-using-reputation-management",
  1206: "/blog/what-is-the-best-frequency-for-sending-marketing-emails",
  1204: "/blog/perfect-from-beginning-to-end-faster-and-more-efficiently",
  1202: "/blog/creating-a-winning-content-marketing-strategy",
  1145: "/faqs",
  1141: "/testimonial",
  35: "/contact-us",
  1133: "/about-us",
  1135: "/service",
  735: "/service/we-mobile-development",
  733: "/service/motion-branding-design",
  731: "/service/international-seo-services",
  2133: "/service/ui-ux-product-design",
  2135: "/service/mobile-application-design",
  2137: "/service/branding-and-illustration",
};
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

export { jsx, all, attr, url, write, replacements };
