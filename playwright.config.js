// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e-tests",
  fullyParallel: true,
  retries: 1,

  webServer: {
    command: "npm run start-prod",
    url: "http://localhost:5001",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
