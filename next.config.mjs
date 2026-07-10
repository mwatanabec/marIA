/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/marIA",
  assetPrefix: "/marIA/",
};

export default nextConfig;
