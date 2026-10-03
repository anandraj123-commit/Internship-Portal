self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/blog": [
    "static/chunks/pages/blog.js"
  ],
  "/blog/[slug]": [
    "static/chunks/pages/blog/[slug].js"
  ],
  "/category/[slug]": [
    "static/chunks/pages/category/[slug].js"
  ],
  "/service": [
    "static/chunks/pages/service.js"
  ],
  "/service/[slug]": [
    "static/chunks/pages/service/[slug].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about-us",
    "/apply-job",
    "/blog",
    "/blog/[slug]",
    "/category/[slug]",
    "/contact-us",
    "/faqs",
    "/service",
    "/service/[slug]",
    "/testimonial"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()