import fs from "node:fs";
import { parse } from "parse5";
import { all, attr, jsx, write, replacements } from "./lib/html-to-jsx.mjs";
const doc = parse(fs.readFileSync("index.html?p=709.html", "utf8"));
const has = (n, c) => (attr(n, "class") || "").split(/\s+/).includes(c);
const article = all(doc, (n) => n.tagName === "article")[0];
const text = (node, value) => {
  node.childNodes = [{ nodeName: "#text", value, parentNode: node }];
};
text(all(article, (n) => n.tagName === "h2")[0], "__TITLE__");
const image = all(article, (n) => n.tagName === "img")[0];
for (const key of ["src", "alt", "title"])
  image.attrs.find((a) => a.name === key).value =
    key === "src" ? "__IMAGE__" : "__ALT__";
article.attrs.find((a) => a.name === "id").value = "__ID__";
article.attrs.find((a) => a.name === "class").value = "__CLASS__";
const date = all(article, (n) => has(n, "pxl-item--date"))[0];
for (const n of date.childNodes)
  if (n.nodeName === "#text" && n.value.trim()) n.value = "__DATE__";
const commentLink = all(article, (n) => has(n, "pxl-item--comment"))[0];
commentLink.attrs.find((a) => a.name === "href").value = "#comments";
for (const n of commentLink.childNodes)
  if (n.nodeName === "#text" && n.value.trim()) n.value = "__COMMENTS__";
for (const a of all(
  article,
  (n) => n.tagName === "a" && attr(n, "rel") === "author",
)) {
  a.attrs.find((a) => a.name === "href").value = "__AUTHOR_URL__";
  text(a, "__AUTHOR__");
}
for (const [css, name] of [
  ["pxl-item--content", "PostBody"],
  ["pxl--tags", "PostTags"],
  ["pxl--social", "PostShare"],
  ["pxl-post--navigation", "PostNavigation"],
])
  replacements.set(all(article, (n) => has(n, css))[0], name);
let markup = jsx(article);
for (const [token, expression] of Object.entries({
  TITLE: "post.title",
  IMAGE: 'post.image.replace("980x512", "1200x672")',
  ALT: "post.imageAlt",
  ID: '"pxl-post-" + post.id',
  CLASS: 'post.className.replace("pxl-item--archive pxl-item--standard", "")',
  DATE: "post.displayDate",
  COMMENTS: 'post.comments === null ? "Comments" : post.comments + " Comments"',
  AUTHOR_URL: "post.authorUrl",
  AUTHOR: "post.author",
}))
  markup = markup.replaceAll(JSON.stringify(`__${token}__`), expression);
write(
  "components/post/Article.jsx",
  `import usePost from './usePost';\nimport {PostBody,PostTags,PostShare,PostNavigation} from './PostParts';\nexport default function Article(){const post=usePost();return <>${markup}</>}`,
);
const comments = all(doc, (n) => attr(n, "id") === "comments")[0];
const list = all(comments, (n) => has(n, "comment-list-wrap"))[0];
for (const link of all(
  list,
  (n) => n.tagName === "a" && has(n, "comment-reply-link"),
))
  link.attrs.find((a) => a.name === "href").value = "#respond";
replacements.set(list, "OriginalComments");
write(
  "components/post/OriginalComments.jsx",
  `export default function OriginalComments(){return <>${jsx({ ...list })}</>}`,
);
let commentsJSX = jsx(comments)
  .replace("<OriginalComments />", "{post.id === 709 && <OriginalComments />}")
  .replace('defaultValue={"709"}', "defaultValue={post.id}")
  .replace(/href=\{[^}]*#respond[^}]*\}/g, 'href={"#respond"}');
commentsJSX = commentsJSX.replace(
  'id={"email"} name={"phone"}',
  'id={"phone"} name={"phone"}',
);
write(
  "components/post/Comments.jsx",
  `import usePost from './usePost';\nimport OriginalComments from './OriginalComments';\nexport default function Comments(){const post=usePost();return <>${commentsJSX}</>}`,
);
