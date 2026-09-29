import Document, { Html, Head, Main, NextScript } from "next/document";
import pageData from "../data/pages.json";
import servicePageData from "../data/service-pages.json";
import applyJobPageData from "../data/apply-job-page.json";

export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      pageKey:
        ctx.pathname === "/apply-job"
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
              applyJobPageData[this.props.pageKey]
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
