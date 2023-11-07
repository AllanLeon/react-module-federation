const { dependencies } = require("./package.json");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "Mfe3",
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
        publicPath: "http://localhost:3003/",
      },
    //   optimization: {
    //     ...webpackConfig.optimization,
    //     runtimeChunk: "single",
    //   },
    }),
  },
};
