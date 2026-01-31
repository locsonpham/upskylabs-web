/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
  basePath: "/upskylabs-web",
  assetPrefix: "/upskylabs-web/",
};

module.exports = nextConfig;
