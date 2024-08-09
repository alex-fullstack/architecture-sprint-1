const deps = require("./package.json").dependencies;

module.exports = {
  name: "mf-host",
  remotes: {
    mf_profile: "mf_profile@http://localhost:3001/remoteEntry.js",
    mf_place: "mf_place@http://localhost:3002/remoteEntry.js",
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
    }
  },
};