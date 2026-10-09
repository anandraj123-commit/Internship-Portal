import Head from "next/head";
import { brandLogo } from "./LoaderLogo";
import seo from "../data/seo.json";
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
  title = "Student Internship Programme in India | Radhika SkillForge",
  description,
}) {
  const pageTitle = seo[pageKey]?.title || title;
  const pageDescription = description || seo[pageKey]?.description;

  return (
    <>
      <Head>
        <link rel="icon" type="image/jpeg" href={brandLogo} key="favicon" />
        <title>{pageTitle}</title>
        {pageDescription && <meta name="description" content={pageDescription} key="description" />}
        <meta property="og:title" content={pageTitle} key="og:title" />
        {pageDescription && <meta property="og:description" content={pageDescription} key="og:description" />}
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
