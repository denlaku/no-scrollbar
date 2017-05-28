var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    "no-scrollbar": "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "NoScrollbar"
  },
  devtool: "source-map",
  externals: {
    "react": {
      "commonjs": "react",
      "commonjs2": "react",
      "amd": "react",
      "root": "React"
    },
    "react-dom": {
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "amd": "react-dom",
      "root": "ReactDOM"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['react', 'es2015'],
          plugins: [
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, sourceMap: true})
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
};
