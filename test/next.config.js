/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: 'AIzaSyBe3CmXgsH_zDtgpMkqNj-lg-AIOtQ'
  }
}

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};