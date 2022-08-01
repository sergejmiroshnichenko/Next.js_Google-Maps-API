/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: "AIzaSyAsW5FrSSKKgEwnEiOGJBSHu4RlMvMD5fg"
  }
}

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};