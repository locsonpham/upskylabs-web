/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
