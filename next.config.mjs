/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : (isProd ? '/visionvisa-demo' : '');

const nextConfig = {
  output: 'export',

  ...(basePath ? { basePath } : {}),

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;