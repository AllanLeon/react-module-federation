const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = function (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "Mfe1",
        exposes: {
          "./Title": "./src/components/Title",
          "./Dogs": "./src/pages/Dogs",
          "./Capybaras": "./src/pages/Capybaras",
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
      })
    )
  );

  config.output.publicPath = "auto";
  return config;
};
