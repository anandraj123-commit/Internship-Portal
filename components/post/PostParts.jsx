import data from "../../data/blogs.json";
import usePost from "./usePost";
export function PostBody() {
  const post = usePost();
  return (
    <div
      className="pxl-item--content clearfix"
      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    />
  );
}
export function PostTags() {
  const post = usePost();
  return (
    <div className="pxl--tags pxl-mr-15">
      <label className="label">Tags:</label>
      {data.tags
        .filter((tag) => post.tags.includes(tag.id))
        .map((tag) => (
          <a key={tag.id} href={`/blog?tag=${tag.slug}`} rel="tag">
            {tag.name}
          </a>
        ))}
    </div>
  );
}
export function PostShare() {
  const post = usePost();
  const url = encodeURIComponent(post.originalUrl);
  const title = encodeURIComponent(post.title);
  const links = [
    [
      "fb-social",
      "Facebook",
      "facebook",
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    ],
    [
      "tw-social",
      "Twitter",
      "twitter",
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    ],
    [
      "pin-social",
      "Pinterest",
      "pinterest",
      `https://pinterest.com/pin/create/button/?url=${url}&media=${encodeURIComponent("https://itagency.in" + post.image)}&description=${title}`,
    ],
    [
      "lin-social",
      "LinkedIn",
      "linkedIn",
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    ],
  ];
  return (
    <div className="pxl--social">
      <label>Share:</label>
      {links.map(([className, title, label, href]) => (
        <a
          key={className}
          className={className}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
export function PostNavigation() {
  const post = usePost();
  const index = data.posts.findIndex((item) => item.id === post.id);
  const previous = data.posts[index + 1],
    next = data.posts[index - 1];
  return (
    <div className="pxl-post--navigation pxl-flex">
      {previous && (
        <div className="pxl--item pxl--item-prev">
          <a className="pxl--label" href={previous.url}>
            <i className="caseicon-long-arrow-right-two ltr-reverse pxl-mr-16" />
            <span>Previous Post</span>
          </a>
        </div>
      )}
      {next && (
        <div className="pxl--item pxl--item-next">
          <a className="pxl--label" href={next.url}>
            <span>Next Post</span>
            <i className="caseicon-long-arrow-right-two pxl-ml-16" />
          </a>
        </div>
      )}
    </div>
  );
}
