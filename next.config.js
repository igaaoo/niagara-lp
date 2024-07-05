/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "niagara",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
