const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const indexHTML = path.join(__dirname, './index.html')

var config = {
	entry: './webpack-entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.ts$/, loader: "ts-loader" },
    ]
  },
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  plugins: [
    /**
     * Host an index.html file. Important for local builds when using webpack dev server. This can stay here even for
     * prod builds.
     */
    new HtmlWebpackPlugin({
      template: indexHTML,
      chunksSortMode: 'auto'
    }),
    //new ExtractTextPlugin("dist/styles.css", { allChunks: true })
  ]
};

if (/^(1|yes|true)$/i.test(process.env.MINIFY)) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$', 'exports', 'require']
      }
    })
  )
}

module.exports = config;