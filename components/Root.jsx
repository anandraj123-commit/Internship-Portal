import Head from "next/head";
import LegacyScripts from "./LegacyScripts";
import pageData from "../data/pages.json";

export default function Root({ children, pageKey, Styles }) {
  return (
    <>
      <Head>
        <title>IT Agency</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Styles />
      {children}
      <LegacyScripts scripts={pageData[pageKey].scripts} />
    </>
  );
}
