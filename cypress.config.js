const {defineConfig} = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false
  },
});
