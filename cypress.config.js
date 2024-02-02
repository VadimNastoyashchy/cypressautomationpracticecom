const {defineConfig} = require('cypress');
module.exports = defineConfig({
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
        loginAPIUrl: 'http://automationpractice.com/index.php?controller=authentication',
        account: {
            userEmail: 'automationpractice@ukr.net',
            password: 'simple_automation_com_2021',
            userName: 'John Wick'
        },
    },
});

