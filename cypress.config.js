const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  // reporter: 'multiple-cucumber-html-reporter',
  reporter: 'cypress-mochawesome-reporter',
  // reporterEnabled: 'cypress-mochawesome-reporter, multiple-cucumber-html-reporter',
  // mochawesomeReporterOptions:{
  //   charts: false,
  //   html: true,
  //   json: true,
  //   reportFilename: "[status]_[name]-report.html",
  //   saveHtml: true,
  //   saveJson: true,
  //   reportDir: "cypress//reports//html",
  //   overwrite: false,
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
  // cucumberReporterOptions:{
  //   html: true,
  //   json: true,
  //   saveHtml: true,
  //   saveJson: true,
  //   reportDir: "cypress/cucumber-json"
  // },
  reporterOptions: {
    charts: false,
    html: true,
    json: true,
    reportFilename: "[status]_[name]-report.html",
    saveHtml: true,
    saveJson: true,
    reportDir: "cypress//reports//html",
    overwrite: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // mochawasome reporter
  e2e: {
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 100000,
    downloadsFolder	: 'cypress/downloads',
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
    on('task', {downloadFile});
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);

    return config;
    },
    specPattern: "cypress/e2e/**/*",
    chromeWebSecurity: false
  }

  
});