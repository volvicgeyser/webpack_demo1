var path = require('path')
module.exports = {
    entry: './source/main.jsx',
    output: {
      filename: './public/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
    { test: /\.jsx$/, loader: 'jsx-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    //vagrantからアクセスできるようにする
    devServer: {
      contentBase: __dirname + '/public',
      host: "0.0.0.0"
    }
};
