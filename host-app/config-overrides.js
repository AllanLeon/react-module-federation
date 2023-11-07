const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = function (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "host_app",
        remotes: {
          Mfe1: `Mfe1@http://localhost:3001/remoteEntry.js`,
          Mfe2: `Mfe2@http://localhost:3002/remoteEntry.js`,
          Mfe3: `Mfe3@http://localhost:3003/remoteEntry.js`,
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      })
    )
  );

  config.output.publicPath = "auto";
  return config;
};