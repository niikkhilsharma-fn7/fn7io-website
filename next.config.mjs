const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/scout",
        destination: "/",
        permanent: false,
      },
      {
        source: "/atlas-platform",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
