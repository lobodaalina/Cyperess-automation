const { defineConfig } = require("cypress");
const fs = require("fs");

function getEnvFile(file) {
  const path = `cypress.env.${file}.json`;
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path));
  }
  return {};
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || "test1";
      const envConfig = getEnvFile(file);
      config.baseUrl = envConfig.baseUrl || config.baseUrl;
      config.env = { ...config.env, ...envConfig };

      console.log(">>> Running with:", file, "baseUrl:", config.baseUrl);

      return config;
    },
  },
});
