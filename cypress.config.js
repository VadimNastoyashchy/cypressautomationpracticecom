const {defineConfig} = require('cypress');
module.exports = defineConfig({
  projectId: '8jtx9u',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    baseUrl: 'http://automationpractice.com/',
  },
});

