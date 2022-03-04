module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Twitter-by-ALPHA-Camp/'
    : '/' ,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/styles/variables.scss";
        `
      }
    }
  }
}


