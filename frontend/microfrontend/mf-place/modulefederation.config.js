const deps = require("./package.json").dependencies;

module.exports = {
  name: "mf_place",
  exposes: {
    "./MfPlaceApp": "./src/components/MfPlaceApp",
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