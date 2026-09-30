import usePost from "./usePost";
import { PostBody, PostTags, PostShare, PostNavigation } from "./PostParts";
export default function Article() {
  const post = usePost();
  return (
    <>
      <article
        id={"pxl-post-" + post.id}
        className={post.className.replace(
          "pxl-item--archive pxl-item--standard",
          "",
        )}
      >
        <h2 className={"pxl-item--title"}>{post.title}</h2>
        <div className={"pxl-item--image"}>
          <img
            fetchpriority={"high"}
            className={""}
            src={post.image.replace("980x512", "1200x672")}
            width={"1200"}
            height={"672"}
            alt={post.imageAlt}
            title={post.imageAlt}
          />
        </div>
        <div className={"pxl-item--holder"}>
          <div className={"pxl-item--meta pxl-flex"}>
            <span className={"pxl-item--author pxl-item--flexnw"}>
              <i className={"flaticon-avatar color-primary pxl-mr-12"}></i>
              <a href={post.authorUrl} rel={"author"}>
                {post.author}
              </a>
            </span>
            <span className={"pxl-item--date pxl-item--flexnw"}>
              <i className={"flaticon-calendar color-primary pxl-mr-12"}></i>
              {post.displayDate}
            </span>
            <a
              href={"#comments"}
              className={"pxl-item--comment pxl-item--flexnw"}
            >
              <i className={"flaticon-chat color-primary pxl-mr-10"}></i>
              {post.comments === null
                ? "Comments"
                : post.comments + " Comments"}
            </a>
          </div>
          <PostBody />
        </div>
        <div className={"pxl--post-footer"}>
          <PostTags />
          <PostShare />
        </div>
        <div className={"pxl-post--author-info pxl-item--flexnw"}>
          <div className={"pxl-post--author-image pxl-mr-30"}>
            <img
              alt={""}
              src={
                "https://secure.gravatar.com/avatar/5a88f8d998d85d40c00216a3e6cca85a7dbcb536af527e752275b6d44be124c6?s=280&d=mm&r=g"
              }
              srcSet={
                "https://secure.gravatar.com/avatar/5a88f8d998d85d40c00216a3e6cca85a7dbcb536af527e752275b6d44be124c6?s=560&d=mm&r=g 2x"
              }
              className={"avatar avatar-280 photo"}
              height={"280"}
              width={"280"}
              decoding={"async"}
            />
          </div>
          <div className={"pxl-post--author-meta"}>
            <div className={"pxl-user--name"}>
              <a href={post.authorUrl} rel={"author"}>
                {post.author}
              </a>
            </div>
            <div className={"pxl-post--author-description"}></div>
            <div className={"pxl-post--author-social"}></div>
          </div>
        </div>
        <PostNavigation />
      </article>
    </>
  );
}
