const nextConfig = {
  async redirects() {
    return [
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
