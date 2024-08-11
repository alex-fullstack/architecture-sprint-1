const deps = require("./package.json").dependencies;

module.exports = {
  name: "mf_profile",
  exposes: {
    "./MfProfileApp": "./src/components/MfProfileApp",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};