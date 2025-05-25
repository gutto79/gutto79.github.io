/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的エクスポートを有効化
  images: {
    unoptimized: true, // GitHub Pages用に画像最適化を無効化
  },
};

module.exports = nextConfig;
