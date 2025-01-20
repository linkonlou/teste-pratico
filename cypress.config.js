const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://picpay.com/',
    video: true,
    screenshotOnRunFailure: true,
  },
});
