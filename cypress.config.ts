const {defineConfig} = require('cypress');
module.exports = defineConfig({
    projectId: '8jtx9u',
    reporter: 'mochawesome',
    reporterOptions: {
        charts: false,
        overwrite: false,
        html: true,
        json: false,
        reportDir: 'reports',
        reportFilename: 'report'
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        video: false,
        baseUrl: 'http://www.automationpractice.pl/',
        env:{
                userEmail: 'automationpractice@ukr.net',
                password: 'simple_automation_com_2021',
                userName: 'John Wick',
                loginAPIUrl: 'http://www.automationpractice.pl/index.php?controller=authentication',
        }
    },
});

