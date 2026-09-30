import Head from "next/head";
import LegacyScripts from "./LegacyScripts";
import pageData from "../data/pages.json";
import servicePageData from "../data/service-pages.json";
import postPageData from "../data/post-page.json";
import categoryPageData from "../data/category-page.json";
import blogPageData from "../data/blog-page.json";
import faqsPageData from "../data/faqs-page.json";
import testimonialPageData from "../data/testimonial-page.json";
import contactPageData from "../data/contact-page.json";
import applyJobPageData from "../data/apply-job-page.json";

export default function Root({
  children,
  pageKey,
  Styles,
  title = "IT Agency",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Styles />
      {children}
      <LegacyScripts
        scripts={
          (
            pageData[pageKey] ||
            servicePageData[pageKey] ||
            applyJobPageData[pageKey] ||
            contactPageData[pageKey] ||
            testimonialPageData[pageKey] ||
            faqsPageData[pageKey] ||
            blogPageData[pageKey] ||
            categoryPageData[pageKey] ||
            postPageData[pageKey]
          ).scripts
        }
      />
    </>
  );
}
