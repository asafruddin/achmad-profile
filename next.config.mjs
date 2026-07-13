/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/achmad-safruddin-profile",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
