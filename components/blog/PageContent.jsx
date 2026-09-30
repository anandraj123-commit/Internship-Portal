import { useRouter } from "next/router";
import data from "../../data/blogs.json";
import PostCard from "./PostCard";

const scalar = (value) => (typeof value === "string" ? value : "");
function href(params) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value),
  );
  return `/blog${query.size ? `?${query}` : ""}`;
}
function Widget({ id, type, title, children }) {
  return (
    <section id={id} className={`widget ${type}`}>
      <h2 className="widget-title">
        <span>{title}</span>
      </h2>
      <div className="widget-content">{children}</div>
    </section>
  );
}
export default function PageContent({ children }) {
  const { query, pathname } = useRouter();
  const isSingle = pathname === "/blog/[slug]";
  const isCategory = pathname === "/category/[slug]";
  const search = scalar(query.s).trim();
  const category = isCategory ? scalar(query.slug) : scalar(query.category);
  const tag = scalar(query.tag);
  const categoryId = data.categories.find((item) => item.slug === category)?.id;
  const tagId = data.tags.find((item) => item.slug === tag)?.id;
  const filtered = data.posts.filter(
    (post) =>
      (!category || post.categories.includes(categoryId)) &&
      (!tag || post.tags.includes(tagId)) &&
      (!search ||
        `${post.title} ${post.excerpt}`
          .toLowerCase()
          .includes(search.toLowerCase())),
  );
  const pageSize = isCategory ? Math.max(1, filtered.length) : 4;
  const pageCount = Math.ceil(filtered.length / pageSize);
  const page = Math.min(
    Math.max(1, Math.floor(Number(scalar(query.page))) || 1),
    Math.max(1, pageCount),
  );
  const posts = filtered.slice((page - 1) * pageSize, page * pageSize);
  const filters = { s: search, category, tag };
  return (
    <div id="pxl-main">
      <div className="container">
        <div className="row pxl-content-wrap pxl-has-sidebar pxl-sidebar-right">
          <div
            id="pxl-content-area"
            className={`pxl-content-area ${isSingle ? "pxl-content-post" : "pxl-content-blog"} col-12 col-lg-8`}
          >
            <main id="pxl-content-main">
              {children || (
                <>
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                  {!posts.length && (
                    <div className="pxl-item--holder">
                      <h2>No posts found</h2>
                      <p>Try another search or category.</p>
                      <a href="/blog">View all posts</a>
                    </div>
                  )}
                  {!isCategory &&
                    (search || category || tag) &&
                    posts.length > 0 && (
                      <p>
                        <a href="/blog">View all posts</a>
                      </p>
                    )}
                  {pageCount > 1 && (
                    <nav
                      className="pxl-pagination-wrap"
                      aria-label="Blog pages"
                    >
                      <div className="pxl-pagination-links">
                        {page > 1 && (
                          <a
                            className="prev page-numbers"
                            aria-label="Previous page"
                            href={href({ ...filters, page: String(page - 1) })}
                          >
                            <i className="caseicon-double-chevron-left" />
                          </a>
                        )}
                        {Array.from(
                          { length: pageCount },
                          (_, index) => index + 1,
                        ).map((number) =>
                          number === page ? (
                            <span
                              key={number}
                              aria-label={`Page ${number}`}
                              aria-current="page"
                              className="page-numbers current"
                            >
                              {number}
                            </span>
                          ) : (
                            <a
                              key={number}
                              aria-label={`Page ${number}`}
                              className="page-numbers"
                              href={href({ ...filters, page: String(number) })}
                            >
                              {number}
                            </a>
                          ),
                        )}
                        {page < pageCount && (
                          <a
                            className="next page-numbers"
                            aria-label="Next page"
                            href={href({ ...filters, page: String(page + 1) })}
                          >
                            <i className="caseicon-double-chevron-right" />
                          </a>
                        )}
                      </div>
                    </nav>
                  )}
                </>
              )}
            </main>
          </div>
          <div
            id="pxl-sidebar-area"
            className={`pxl-sidebar-area ${isSingle ? "pxl-sidebar-post" : "pxl-sidebar-blog"} col-12 col-lg-4`}
          >
            <div className="pxl-sidebar-sticky">
              <Widget id="search-1" type="widget_search" title="Search">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action={isCategory ? `/category/${category}` : "/blog"}
                >
                  <div className="searchform-wrap">
                    <input
                      type="text"
                      placeholder="Search here..."
                      name="s"
                      className="search-field"
                      aria-label="Search posts"
                      defaultValue={search}
                    />
                    {category && !isCategory && (
                      <input type="hidden" name="category" value={category} />
                    )}
                    {tag && <input type="hidden" name="tag" value={tag} />}
                    <button
                      type="submit"
                      className="search-submit"
                      aria-label="Search"
                    >
                      <i className="flaticon flaticon-search" />
                    </button>
                  </div>
                </form>
              </Widget>
              <Widget
                id="categories-1"
                type="widget_categories"
                title="Categories"
              >
                <ul>
                  {data.categories.map((item) => (
                    <li
                      key={item.id}
                      className={`cat-item cat-item-${item.id}${item.slug === category ? " current-cat" : ""}`}
                    >
                      <a
                        href={`/category/${item.slug}`}
                        aria-current={
                          item.slug === category ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Widget>
              <Widget
                id="pxl_recent_posts-1"
                type="widget_pxl_recent_posts"
                title="Recent Posts"
              >
                <div className="pxl--items">
                  {data.posts.slice(0, 4).map((post) => (
                    <div className="pxl--item" key={post.id}>
                      <div className="pxl-item--img">
                        <img
                          loading="lazy"
                          src={post.recentImage}
                          width="600"
                          height="184"
                          alt={post.imageAlt}
                          title={post.imageAlt}
                        />
                        <a href={post.url} aria-label={post.title} />
                        <div className="pxl-item--date pxl-l-13">
                          {post.displayDate}
                        </div>
                        <div className="pxl-item--overlay" />
                      </div>
                      <div className="pxl-item--holder">
                        <h4 className="pxl-item--title">
                          <a href={post.url} title={post.title}>
                            {post.title}
                          </a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </Widget>
              <Widget id="tag_cloud-1" type="widget_tag_cloud" title="Tags">
                <div className="tagcloud">
                  {data.tags.map((item, index) => (
                    <a
                      key={item.id}
                      href={href({ tag: item.slug })}
                      className={`tag-cloud-link tag-link-${item.id} tag-link-position-${index + 1}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Widget>
              <div
                className="pxl-contact-info-widget bg-image"
                style={{
                  backgroundImage:
                    "url(/wp-content/uploads/2023/08/bg-contact-info.jpg)",
                }}
              >
                <div className="content-inner">
                  <div className="pxl-item--icon">
                    <i className="flaticon-telephone-1 el-effect-zigzag" />
                  </div>
                  <div className="pxl-phone--number">+215 5747 6654</div>
                  <div className="pxl-item--desc">
                    Monday – Friday: 7:00 am -8:00 pm24/7 Emergency Service
                  </div>
                  <a
                    href="tel:+21557476654"
                    className="pxl-phone--link"
                    aria-label="Call +215 5747 6654"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
