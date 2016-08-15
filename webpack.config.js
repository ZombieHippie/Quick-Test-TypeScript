const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const indexHTML = path.join(__dirname, './src/index.html')

var config = {
  entry:{
    'polyfills': ['./src/polyfills.ts'],
    'app': ['./src/main.ts']
  },
  devtool: 'eval-inline-sourcemap',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: './src/index.html'
    }
  },
  output: {
    path: __dirname,
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "css!sass" },
      { test: /\.pug$/, loader: "raw!pug" },
      { test: /\.css$/, loader: "css" },
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
