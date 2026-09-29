import Head from "next/head";
import LegacyScripts from "./LegacyScripts";
import pageData from "../data/pages.json";
import servicePageData from "../data/service-pages.json";
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
            applyJobPageData[pageKey]
          ).scripts
        }
      />
    </>
  );
}
