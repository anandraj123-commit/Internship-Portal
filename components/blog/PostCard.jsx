export default function PostCard({ post }) {
  return (
    <article id={`post-${post.id}`} className={post.className}>
      <div className="pxl-item--image">
        <a href={post.url}>
          <img
            src={post.image}
            width="980"
            height="512"
            alt={post.imageAlt}
            title={post.imageAlt}
          />
        </a>
      </div>
      <div className="pxl-item--holder">
        <div className="pxl-item--meta pxl-flex">
          <span className="pxl-item--author pxl-item--flexnw">
            <i className="flaticon-avatar color-primary pxl-mr-10" />
            <a href={post.authorUrl} rel="author">
              {post.author}
            </a>
          </span>
          <span className="pxl-item--date pxl-item--flexnw">
            <i className="flaticon-calendar color-primary pxl-mr-10" />
            {post.displayDate}
          </span>
          <a
            href={`${post.url}#comments`}
            className="pxl-item--comment pxl-item--flexnw"
          >
            <i className="flaticon-chat color-primary pxl-mr-10" />
            {post.comments === null ? "Comments" : `${post.comments} Comments`}
          </a>
        </div>
        <h2 className="pxl-item--title">
          <a href={post.url} title={post.title}>
            {post.title}
          </a>
        </h2>
        <div className="pxl-item--excerpt">{post.excerpt}</div>
        <div className="pxl-item--readmore">
          <a className="btn--readmore" href={post.url}>
            {["btn--front", "btn--backdrop"].map((className) => (
              <span className={className} key={className}>
                <span className="btn--text">Read More</span>
                <span className="btn--icon pxl-ml-10 rtl-reverse">
                  <i className="flaticon-arrow-right" />
                </span>
              </span>
            ))}
          </a>
        </div>
      </div>
    </article>
  );
}
