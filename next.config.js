// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/scan-express-site' : '',
  assetPrefix: isProd ? '/scan-express-site/' : '',
};

module.exports = nextConfig;
