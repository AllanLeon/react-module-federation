const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = function (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
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
      })
    )
  );

  config.output.publicPath = "auto";
  // config.optimization.runtimeChunk = "single";
  return config;
};
