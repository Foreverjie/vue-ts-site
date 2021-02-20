module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
