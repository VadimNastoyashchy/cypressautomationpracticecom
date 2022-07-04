const {defineConfig} = require('cypress');
module.exports = defineConfig({
    projectId: '8jtx9u',
    reporter: 'mochawesome',
    reporterOptions: {
        charts: false,
        html: true,
        json: false,
        reportDir: 'reports',
        reportFilename: 'report'
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        video: false,
        baseUrl: 'http://automationpractice.com/',
    },
});

