const { dependencies } = require("./package.json");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    // devServer: {
    //   port: 3002,
    // },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "Mfe2",
          exposes: {
            "./Title": "./src/components/Title",
          },
          filename: "remoteEntry.js",
          shared: {
            ...dependencies,
            react: {
              singleton: true,
              requiredVersion: dependencies["react"],
              eager: true,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: dependencies["react-dom"],
              eager: true,
            },
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
        globalObject: 'self',
      },
    //   optimization: {
    //     ...webpackConfig.optimization,
    //     runtimeChunk: "single",
    //   },
    }),
  },
};
