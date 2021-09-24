module.exports = {
 
    configureWebpack: {
      module: {
        rules: [
          {
            resourceQuery: /blockType=docs/,
            loader: require.resolve('./docs-loader.js')
          },
          {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
         
        ]
      }
    },
  
  }
  