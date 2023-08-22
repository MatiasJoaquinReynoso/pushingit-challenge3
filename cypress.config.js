const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    "baseUrl" : 'https://pushing-front.vercel.app/',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000
  },
  env: {
    username: 'pushingit',
    password: '123456!',
  },
});