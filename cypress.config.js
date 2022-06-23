const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: 'http://automationpractice.com/index.php',

    "env": {
     "baseUrl":'http://automationpractice.com/index.php'
  },
}
});
