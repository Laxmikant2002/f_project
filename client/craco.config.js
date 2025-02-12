module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules\/(web3|@ethersproject\/.*)/,
      });
      return webpackConfig;
    }
  }
};