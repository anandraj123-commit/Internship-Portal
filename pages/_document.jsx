import Document, { Html, Head, Main, NextScript } from "next/document";
import pageData from "../data/pages.json";

export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      pageKey: ctx.pathname === "/about-us" ? "about" : "home",
    };
  }
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body className={pageData[this.props.pageKey].bodyClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
