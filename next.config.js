/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/scan-express-site',         // important !
  assetPrefix: '/scan-express-site/',     // important !
  images: {
    unoptimized: true,                    // pour GitHub Pages
  },
};

module.exports = nextConfig;

