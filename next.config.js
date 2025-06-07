const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.resolve.alias['@/components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@/constants']  = path.resolve(__dirname, 'constants');
    config.resolve.alias['@/assets']     = path.resolve(__dirname, 'public/assets');
    return config;
  }
}
