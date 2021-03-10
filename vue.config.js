/* eslint-disable */
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/index.less')],
    },
  },
};
