// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// import 'cypress-mochawesome-reporter/register';
// npx cypress run --spec (specific path of test case)
// npx cypress run --headed --spec (specific path of test case) --browser chrome
// npx mochawesome-merge "relativepath" > yournamefile.json
// USE IT FOR RUN REPORTER HTML MOCHAWASOME ------ npm run reportapi (your specific path of test case)
//npm run reportapi cypress\e2e\features\exercise\TC04-logout.feature  <--- example command
// npx marge yournamefile.json