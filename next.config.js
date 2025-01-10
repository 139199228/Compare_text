/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS 
    ? '/Compare_text'  // 移除 /out
    : process.env.NODE_ENV === 'production' 
      ? '/out'
      : '',
  assetPrefix: process.env.GITHUB_ACTIONS 
    ? '/Compare_text/'  // 移除 /out/
    : process.env.NODE_ENV === 'production' 
      ? '/out/'
      : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
