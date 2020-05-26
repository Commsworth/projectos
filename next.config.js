// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   /* config options here */
// })

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};