import Head from "next/head";
import { brandLogo } from "./LoaderLogo";
import seo from "../data/seo.json";
import site from "../data/site.json";
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
  canonicalPath,
  image,
  ogType = "website",
  publishedTime,
  noIndex = false,
}) {
  const pageTitle = seo[pageKey]?.title || title;
  const pageDescription = description || seo[pageKey]?.description;
  const defaultCanonicalPaths = {
    home: "/",
    about: "/about-us",
    services: "/service",
    applyJob: "/apply-job",
    faqs: "/faqs",
    contact: "/contact-us",
    blog: "/blog",
    testimonial: "/testimonial",
  };
  const canonicalUrl = new URL(
    canonicalPath || defaultCanonicalPaths[pageKey] || "/",
    site.url,
  ).toString();
  const socialImagePath = image || seo[pageKey]?.image || "/images/internship-hero.jpg";
  const socialImageUrl = new URL(socialImagePath, site.url).toString();
  const robotsContent = noIndex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large";

  return (
    <>
      <Head>
        <link rel="icon" type="image/jpeg" href={brandLogo} key="favicon" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <title>{pageTitle}</title>
        {pageDescription && (
          <meta name="description" content={pageDescription} key="description" />
        )}
        <meta name="robots" content={robotsContent} key="robots" />
        <meta property="og:title" content={pageTitle} key="og:title" />
        {pageDescription && (
          <meta
            property="og:description"
            content={pageDescription}
            key="og:description"
          />
        )}
        <meta property="og:type" content={ogType} key="og:type" />
        <meta property="og:url" content={canonicalUrl} key="og:url" />
        <meta property="og:site_name" content="Radhika SkillForge" key="og:site_name" />
        <meta property="og:locale" content="en_IN" key="og:locale" />
        <meta property="og:image" content={socialImageUrl} key="og:image" />
        <meta
          property="og:image:alt"
          content={`${pageTitle} - Radhika SkillForge`}
          key="og:image:alt"
        />
        {publishedTime && (
          <meta
            property="article:published_time"
            content={publishedTime}
            key="article:published_time"
          />
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
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
