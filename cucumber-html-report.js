// const report = require("multiple-cucumber-html-reporter");
// report.generate({
//     jsonDir: "cypress/reports/html/.jsons", // ** Path of .json file **//
//     reportPath: "cypress/reports/cucumber/cucumber-htmlreport.html",
//     metadata: {
//         browser: {
//             name: "chrome",
//         },
//         device: "Local test machine",
//         platform: {
//             name: "Windows",
//             version: "10",
//         },
//     },
// });

const reporter = require('multiple-cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/reports/html/.jsons',
  output: 'cypress/reports/cucumber/cucumber-htmlreport.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);