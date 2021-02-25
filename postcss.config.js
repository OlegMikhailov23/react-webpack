// It is handy to not have those transformations while we developing
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]
  }
}
