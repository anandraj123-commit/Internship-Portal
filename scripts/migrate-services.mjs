import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";
import {
  jsx,
  all,
  attr,
  url,
  write,
  replacements,
} from "./lib/html-to-jsx.mjs";
import { services } from "../data/services.js";
const text = (n) =>
  all(n, (c) => c.nodeName === "#text")
    .map((c) => c.value)
    .join("")
    .trim();
const setText = (n, value) => {
  n.childNodes = [{ nodeName: "#text", value, parentNode: n }];
};
const has = (n, c) => (attr(n, "class") || "").split(/\s+/).includes(c);
const slots = {
  TITLE: "service.title",
  OVERVIEW: "service.overview",
  APPROACH: "service.approach",
  DELIVERABLES: "service.deliverables",
  SUMMARY: "service.summary",
  HANDOVER: "service.handover",
  FAQHEADING: "service.faqHeading",
  DETAILICON: "service.detailIcon",
  LISTINGTITLE: "serviceListing.title",
  SERVICECOUNT: "services.length",
  LISTINGHEADING: "serviceListing.heading",
  LISTINGDESCRIPTION: "serviceListing.description",
};
services[3].features.forEach(
  (_, i) => (slots["FEATURE" + i] = `service.features[${i}].title`),
);
services[0].features.forEach((_, i) => {
  slots["FEATUREDESCRIPTION" + i] = `service.features[${i}].description`;
  slots["FEATUREICON" + i] = `service.features[${i}].icon`;
});
services[0].faqs.forEach((_, i) => {
  slots["QUESTION" + i] = `service.faqs[${i}].question`;
  slots["ANSWER" + i] = `service.faqs[${i}].answer`;
});
services[0].media.forEach(
  (_, i) => (slots["MEDIALINK" + i] = `service.media[${i}].href`),
);
function render(n) {
  return jsx(n).replace(
    /\{"__([A-Z0-9]+)__"\}/g,
    (_, key) => `{${slots[key]}}`,
  );
}
const emit = (name, node, imports = "") =>
  write(
    `components/services/${name}.jsx`,
    `${imports}\nexport default function ${name}({service}) {return <>${render(node)}</>}`,
  );
const homeDocument = parse(fs.readFileSync("legacy-site/index.html", "utf8"));
const homePalette = all(
  homeDocument,
  (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
)[0]
  .childNodes.map((n) => n.value)
  .join("");
const manifest = {};
for (const [key, file] of [
  ["services", "index.html"],
  ["serviceDetail", "index.html?p=2133.html"],
]) {
  replacements.clear();
  const sourceFile =
    key === "serviceDetail" && fs.existsSync(file) ? file : "service/" + file;
  const doc = parse(fs.readFileSync(sourceFile, "utf8"));
  const head = all(doc, (n) => n.tagName === "head")[0],
    body = all(doc, (n) => n.tagName === "body")[0];
  manifest[key] = {
    bodyClass: attr(body, "class"),
    scripts: all(
      doc,
      (n) => n.tagName === "script" && attr(n, "type") !== "speculationrules",
    ).map((n) => ({
      id: attr(n, "id"),
      type: attr(n, "type"),
      src: attr(n, "src") ? url(attr(n, "src")) : null,
      code: url((n.childNodes || []).map((c) => c.value || "").join("")),
    })),
  };
  const palette = all(
    head,
    (n) => n.tagName === "style" && attr(n, "id") === "pxl-style-inline-css",
  )[0];
  setText(palette, homePalette);
  const prefix = key === "services" ? "Listing" : "Detail";
  write(
    `components/services/${prefix}Styles.jsx`,
    `export default function ${prefix}Styles(){return <>${head.childNodes
      .filter(
        (n) =>
          n.tagName === "style" ||
          (n.tagName === "link" && attr(n, "rel") === "stylesheet"),
      )
      .map(render)
      .join("")}</>}`,
  );
  // About Us does not load the optional divider widget stylesheet. It is
  // unused in service content and would change the shared header separator.
  for (const link of all(
    doc,
    (n) =>
      n.tagName === "link" &&
      attr(n, "href")?.includes("widget-divider.min.css"),
  )) {
    link.parentNode.childNodes = link.parentNode.childNodes.filter(
      (node) => node !== link,
    );
  }
  const header = all(body, (n) => n.tagName === "header")[0];
  replacements.set(header, "Header");
  const footer = all(body, (n) => n.tagName === "footer")[0];
  if (key === "services") emit("Footer", footer);
  replacements.set(footer, "Footer");
  const main = all(body, (n) => attr(n, "id") === "pxl-main")[0];
  const title = all(
    body,
    (n) => attr(n, "id") === "pxl-page-title-elementor",
  )[0];
  if (key === "serviceDetail") {
    for (const n of all(body, (n) => n.nodeName === "#text")) {
      if (
        n.value.trim() === "UI/UX & Product Design" ||
        n.value.trim() === "Single Service"
      )
        n.value = "__TITLE__";
    }
    const editors = all(main, (n) => has(n, "pxl-text-editor"));
    const tokens = [
      "OVERVIEW",
      "APPROACH",
      "DELIVERABLES",
      "SUMMARY",
      "HANDOVER",
    ];
    editors.forEach((n, i) =>
      setText(all(n, (c) => has(c, "pxl-item--inner"))[0], `__${tokens[i]}__`),
    );
    all(main, (n) => n.tagName === "img").forEach((image, i) => {
      replacements.set(image, `ServiceImage image={service.media[${i}].image}`);
      if (image.parentNode.tagName === "a")
        image.parentNode.attrs.find((a) => a.name === "href").value =
          `__MEDIALINK${i}__`;
    });
    all(main, (n) => has(n, "pxl-service--icon"))[0]
      .childNodes.find((n) => n.tagName === "i")
      .attrs.find((a) => a.name === "class").value = "__DETAILICON__";
    all(main, (n) => has(n, "pxl-icon-box")).forEach((box, i) => {
      setText(
        all(box, (n) => has(n, "pxl-item--description"))[0],
        `__FEATUREDESCRIPTION${i}__`,
      );
      all(box, (n) => n.tagName === "i")[0].attrs.find(
        (a) => a.name === "class",
      ).value = `__FEATUREICON${i}__`;
    });
    setText(
      all(
        main,
        (n) => n.tagName === "h3" && text(n).includes("Frequently Asked"),
      )[0],
      "__FAQHEADING__",
    );
    const featureTitles = [
      "Mobile Application",
      "Web Development",
      "Digital Marketing",
      "Website Design",
    ];
    for (const n of all(main, (n) => n.nodeName === "#text")) {
      const i = featureTitles.indexOf(n.value.trim());
      if (i >= 0) n.value = `__FEATURE${i}__`;
      if (n.value.includes("With over a decade"))
        n.value =
          "Plan this part of the project around the agreed goals, audience and requirements.";
    }
    all(main, (n) => has(n, "pxl-accordion--title")).forEach((n, i) =>
      setText(all(n, (c) => has(c, "pxl-title--text"))[0], `__QUESTION${i}__`),
    );
    all(main, (n) => has(n, "pxl-accordion--content")).forEach((n, i) =>
      setText(n, `__ANSWER${i}__`),
    );
    replacements.set(
      all(main, (n) => has(n, "pxl-accordion"))[0],
      "ServiceFaqs service={service}",
    );
    const sidebar = all(
      main,
      (n) => has(n, "pxl-link-wrap") && text(n).startsWith("Main Services"),
    )[0];
    replacements.set(sidebar, "ServiceSidebar service={service}");
  } else {
    const grid = all(main, (n) => has(n, "pxl-service-grid"))[0];
    grid.attrs
      .filter((a) => ["data-total", "data-perpage"].includes(a.name))
      .forEach((a) => (a.value = "__SERVICECOUNT__"));
    replacements.set(
      all(grid, (n) => has(n, "pxl-grid-inner"))[0],
      "ServiceCards",
    );
    const heading = all(
      main,
      (n) => attr(n, "id") === "pxl-pxl_heading-16f259a-5821",
    )[0];
    setText(all(heading, (n) => n.tagName === "h3")[0], "__LISTINGHEADING__");
    const description = all(main, (n) => attr(n, "data-id") === "503a3ea")[0];
    setText(
      all(description, (n) => n.tagName === "p")[0],
      "__LISTINGDESCRIPTION__",
    );
    setText(all(title, (n) => n.tagName === "h1")[0], "__LISTINGTITLE__");
  }
  emit(
    prefix + "Title",
    title,
    key === "services"
      ? 'import { serviceListing, services } from "../../data/services";'
      : "",
  );
  replacements.set(title, prefix + "Title service={service}");
  if (key === "services") {
    const content = all(
      main,
      (n) => attr(n, "data-elementor-type") === "wp-page",
    )[0];
    const names = [
      "ServiceGrid",
      "SpacerSection",
      "TestimonialsSection",
      "BlogSection",
    ];
    const imports = [];
    content.childNodes
      .filter((n) => n.tagName === "section")
      .forEach((n, i) => {
        const name = names[i] || `ListingSection${i}`;
        emit(
          name,
          n,
          name === "ServiceGrid"
            ? 'import ServiceCards from "./ServiceCards";\nimport { serviceListing, services } from "../../data/services";'
            : "",
        );
        replacements.set(n, name);
        imports.push(`import ${name} from './${name}';`);
      });
    emit(prefix + "Content", main, imports.join("\n"));
  } else
    emit(
      prefix + "Content",
      main,
      "import ServiceSidebar from './ServiceSidebar';\nimport ServiceImage from './ServiceImage';\nimport ServiceFaqs from './ServiceFaqs';",
    );
  replacements.set(main, prefix + "Content service={service}");
  write(
    `components/services/${prefix}Page.jsx`,
    `import Header from '../Header';\nimport Footer from './Footer';\nimport ${prefix}Title from './${prefix}Title';\nimport ${prefix}Content from './${prefix}Content';\nexport default function ${prefix}Page({service}) {return <>${body.childNodes.map(render).join("")}</>}`,
  );
}
write("data/service-pages.json", JSON.stringify(manifest, null, 2));
// Reuse supplied public assets; copy only additional assets needed by this export.
for (const root of ["wp-content", "wp-includes"]) {
  function copy(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) copy(p);
      else if (!e.name.startsWith(".")) {
        const dest = "public/" + p.split("?")[0];
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.copyFileSync(p, dest);
        }
      }
    }
  }
  if (fs.existsSync(root)) copy(root);
}
