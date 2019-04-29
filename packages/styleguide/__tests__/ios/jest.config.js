const jestConfigurator = require("@times-components/jest-configurator").default;
const path = require("path");

module.exports = jestConfigurator("ios", __dirname, {
  setupFilesAfterEnv: path.join(__dirname, "./serializers")
});
