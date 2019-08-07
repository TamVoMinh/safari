const env = require('./src/env');
exports.config = {
  tests: './src/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: env.targetSite,
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      desiredCapabilities: {
        chromeOptions: {
          'w3c' : false
        }
      }
    }
  },
  include: {
    I: './src/steps_file.js',
    logInPage: './src/pages/login.js',
    animalGroupPage: './src/pages/animal-group.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'safari-e2e',
  restart: false,
  keepBrowserState: true,
  keepCookies: true
}