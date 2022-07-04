const {defineConfig} = require('cypress');
module.exports = defineConfig({
  projectId: '8jtx9u',
  e2e: {
    baseUrl: 'http://automationpractice.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },
});
