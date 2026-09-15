module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
  async redirects() {
    return [
      {
        // The writing lives on Substack; /blog only exists so the nav can
        // point at a first-party path.
        source: "/blog",
        destination: "https://substack.vincentcavanna.com",
        permanent: false,
      },
    ];
  },
};
