import Document, { Html, Head, Main, NextScript } from "next/document";
import pageData from "../data/pages.json";
import servicePageData from "../data/service-pages.json";
import postPageData from "../data/post-page.json";
import categoryPageData from "../data/category-page.json";
import blogPageData from "../data/blog-page.json";
import faqsPageData from "../data/faqs-page.json";
import testimonialPageData from "../data/testimonial-page.json";
import contactPageData from "../data/contact-page.json";
import applyJobPageData from "../data/apply-job-page.json";

export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      pageKey:
        ctx.pathname === "/blog/[slug]"
          ? "post"
          : ctx.pathname === "/category/[slug]"
            ? "category"
            : ctx.pathname === "/blog"
              ? "blog"
              : ctx.pathname === "/faqs"
                ? "faqs"
                : ctx.pathname === "/testimonial"
                  ? "testimonial"
                  : ctx.pathname === "/contact-us"
                    ? "contact"
                    : ctx.pathname === "/apply-job"
                      ? "applyJob"
                      : ctx.pathname === "/service/[slug]"
                        ? "serviceDetail"
                        : ctx.pathname === "/service"
                          ? "services"
                          : ctx.pathname === "/about-us"
                            ? "about"
                            : "home",
    };
  }
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body
          className={
            (
              pageData[this.props.pageKey] ||
              servicePageData[this.props.pageKey] ||
              applyJobPageData[this.props.pageKey] ||
              contactPageData[this.props.pageKey] ||
              testimonialPageData[this.props.pageKey] ||
              faqsPageData[this.props.pageKey] ||
              blogPageData[this.props.pageKey] ||
              categoryPageData[this.props.pageKey] ||
              postPageData[this.props.pageKey]
            ).bodyClass
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
