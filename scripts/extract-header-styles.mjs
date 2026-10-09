import fs from "node:fs";
import { parse } from "parse5";
import postcss from "postcss";
import { all, attr } from "./lib/html-to-jsx.mjs";

// These Elementor templates are the shared main, sticky, and mobile headers.
// Keep media-query wrappers intact, so the About header's responsive rules travel
// with the Header component instead of depending on a page's exported styles.
const document = parse(
  fs.readFileSync("legacy-site/index.html?p=1133.html", "utf8"),
);
const isHeader = /\.elementor-(5517|5519|5892)\b/;
const rules = [];
for (const style of all(document, (node) => node.tagName === "style")) {
  const root = postcss.parse(
    style.childNodes.map((node) => node.value || "").join(""),
  );
  root.walkRules((rule) => {
    if (!isHeader.test(rule.selector)) rule.remove();
  });
  root.walkComments((comment) => comment.remove());
  root.walkAtRules((rule) => {
    if (
      !rule.nodes?.some(
        (node) => node.type === "rule" || node.type === "atrule",
      )
    )
      rule.remove();
  });
  if (root.toString().trim()) rules.push(root.toString());
}
const home = parse(fs.readFileSync("legacy-site/index.html", "utf8"));
const palette = all(
  home,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0];
const paletteCSS = postcss.parse(
  palette.childNodes.map((n) => n.value || "").join(""),
);
paletteCSS.walkRules((rule) => {
  if (rule.selector === ":root") {
    rule.selector = "#pxl-header-elementor";
    rules.push(rule.toString());
  }
});
const css = rules.join("\n");
if (!css.includes(".elementor-5517"))
  throw new Error("Main header styles missing");
fs.writeFileSync(
  "components/HeaderStyles.jsx",
  `// Original About Us header CSS, including desktop, sticky, and mobile breakpoints.\n// Regenerate with: node scripts/extract-header-styles.mjs\nexport default function HeaderStyles() {\n  return <style id="shared-header-styles" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />;\n}\n`,
);
console.log(`Extracted ${css.length} bytes of shared header styles.`);
