const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gn4fqu',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto curso de Cypress',
      reportPageTitle: 'Projeto curso de Cypress' // Removi o ponto final desnecessário
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    }
  }
});
