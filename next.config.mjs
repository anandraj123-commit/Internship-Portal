const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "709(?:\\.html)?" }],
        destination: "/blog/double-down-on-marketing-spend-think-again",
        permanent: true,
      },
      {
        source: "/double-down-on-marketing-spend-think-again/index.html",
        destination: "/blog/double-down-on-marketing-spend-think-again",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "707(?:\\.html)?" }],
        destination:
          "/blog/private-blog-network-what-is-pbn-how-can-you-build-one",
        permanent: true,
      },
      {
        source:
          "/private-blog-network-what-is-pbn-how-can-you-build-one/index.html",
        destination:
          "/blog/private-blog-network-what-is-pbn-how-can-you-build-one",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "705(?:\\.html)?" }],
        destination: "/blog/what-we-like-about-teamwork-during-big-projects",
        permanent: true,
      },
      {
        source: "/what-we-like-about-teamwork-during-big-projects/index.html",
        destination: "/blog/what-we-like-about-teamwork-during-big-projects",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "703(?:\\.html)?" }],
        destination: "/blog/how-does-marketing-automation-help-lead-generation",
        permanent: true,
      },
      {
        source:
          "/how-does-marketing-automation-help-lead-generation/index.html",
        destination: "/blog/how-does-marketing-automation-help-lead-generation",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1210(?:\\.html)?" }],
        destination:
          "/blog/10-digital-marketing-stats-that-will-impact-your-business",
        permanent: true,
      },
      {
        source:
          "/10-digital-marketing-stats-that-will-impact-your-business/index.html",
        destination:
          "/blog/10-digital-marketing-stats-that-will-impact-your-business",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1208(?:\\.html)?" }],
        destination:
          "/blog/how-to-protect-your-brand-using-reputation-management",
        permanent: true,
      },
      {
        source:
          "/how-to-protect-your-brand-using-reputation-management/index.html",
        destination:
          "/blog/how-to-protect-your-brand-using-reputation-management",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1206(?:\\.html)?" }],
        destination:
          "/blog/what-is-the-best-frequency-for-sending-marketing-emails",
        permanent: true,
      },
      {
        source:
          "/what-is-the-best-frequency-for-sending-marketing-emails/index.html",
        destination:
          "/blog/what-is-the-best-frequency-for-sending-marketing-emails",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1204(?:\\.html)?" }],
        destination:
          "/blog/perfect-from-beginning-to-end-faster-and-more-efficiently",
        permanent: true,
      },
      {
        source:
          "/perfect-from-beginning-to-end-faster-and-more-efficiently/index.html",
        destination:
          "/blog/perfect-from-beginning-to-end-faster-and-more-efficiently",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1202(?:\\.html)?" }],
        destination: "/blog/creating-a-winning-content-marketing-strategy",
        permanent: true,
      },
      {
        source: "/creating-a-winning-content-marketing-strategy/index.html",
        destination: "/blog/creating-a-winning-content-marketing-strategy",
        permanent: true,
      },
      {
        source: "/category/:slug/index.html",
        destination: "/category/:slug",
        permanent: true,
      },
      {
        source: "/category/index.html",
        destination: "/category/branding",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/category/branding",
        permanent: true,
      },
      { source: "/blog/index.html", destination: "/blog", permanent: true },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1145(?:\\.html)?" }],
        destination: "/faqs",
        permanent: true,
      },
      { source: "/faqs/index.html", destination: "/faqs", permanent: true },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "1141(?:\\.html)?" }],
        destination: "/testimonial",
        permanent: true,
      },
      {
        source: "/testimonial/index.html",
        destination: "/testimonial",
        permanent: true,
      },
      {
        source: "/index.html",
        has: [{ type: "query", key: "p", value: "35(?:\\.html)?" }],
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact-us/index.html",
        destination: "/contact-us",
        permanent: true,
      },
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
