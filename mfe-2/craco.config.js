const { dependencies } = require("./package.json");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "Mfe2",
          exposes: {
            "./Title": "./src/components/Title",
            "./Pokemon": "./src/pages/Pokemon/Pokemon",
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
            "react-router-dom": {
              singleton: true,
              requiredVersion: dependencies["react-router-dom"],
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
