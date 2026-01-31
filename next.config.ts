/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
  basePath: "/locsopham.github.io/upskylabs-web",
  assetPrefix: "/locsopham.github.io/upskylabs-web",
};

module.exports = nextConfig;
