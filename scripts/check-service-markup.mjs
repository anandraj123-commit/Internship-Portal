import fs from "node:fs";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import { parse } from "parse5";
import { all, attr } from "./lib/html-to-jsx.mjs";
const baseline = JSON.parse(
  fs.readFileSync("tests/fixtures/services-markup.json", "utf8"),
);
function normalize(n) {
  if (n.nodeName === "#text")
    return n.value.trim() ? n.value.replace(/\s+/g, " ").trim() : null;
  if (!n.tagName) return null;
  return {
    tag: n.tagName,
    attrs: Object.fromEntries(
      (n.attrs || [])
        .map((a) => [a.name, a.value])
        .sort(([a], [b]) => a.localeCompare(b)),
    ),
    children: (n.childNodes || []).map(normalize).filter((x) => x !== null),
  };
}
for (const [route, expected] of Object.entries(baseline)) {
  const doc = parse(
    fs.readFileSync(`.next/server/pages/${route}.html`, "utf8"),
  );
  for (const [id, digest] of Object.entries(expected)) {
    const node = all(doc, (n) => attr(n, "id") === id)[0];
    const actual = createHash("sha256")
      .update(JSON.stringify(normalize(node)))
      .digest("hex");
    assert.equal(
      actual,
      digest,
      `${route}: ${id} differs from the pre-JSON markup`,
    );
  }
}
console.log(
  "Listing and all six details preserve their content, DOM attributes, header, title and footer.",
);
