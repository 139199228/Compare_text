/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS 
    ? '/Compare_text/out'  // 恢复 /out，因为我们的 index.html 在 out 目录
    : process.env.NODE_ENV === 'production' 
      ? '/out'
      : '',
  assetPrefix: process.env.GITHUB_ACTIONS 
    ? '/Compare_text/out'  // 恢复 /out，确保静态资源路径正确
    : process.env.NODE_ENV === 'production' 
      ? '/out'
      : '',
  trailingSlash: true,  // 添加这行，确保路径一致性
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
