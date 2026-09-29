const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1151" }],
        destination: "/apply-job",
        permanent: true,
      },
      {
        source: "/job-apply/index.html",
        destination: "/apply-job",
        permanent: true,
      },
      {
        source: "/service/index.html",
        has: [{ type: "query", key: "p", value: "2133" }],
        destination: "/service/ui-ux-product-design",
        permanent: true,
      },
      {
        source: "/service/index.html",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/service/:slug/index.html",
        destination: "/service/:slug",
        permanent: true,
      },
      ...Object.entries({
        735: "we-mobile-development",
        733: "motion-branding-design",
        731: "international-seo-services",
        2133: "ui-ux-product-design",
        2135: "mobile-application-design",
        2137: "branding-and-illustration",
      }).map(([id, slug]) => ({
        source: "/index.html",
        has: [{ type: "query", key: "p", value: id }],
        destination: `/service/${slug}`,
        permanent: true,
      })),
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1133" }],
        destination: "/about-us",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/about-us/index.html",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
