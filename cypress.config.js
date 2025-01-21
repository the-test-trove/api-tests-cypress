import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    specPattern: 'cypress/integration/API/*.js',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "https://fakerestapi.azurewebsites.net",
    $schema: "https://on.cypress.io/cypress.schema.json",
    video: true,
  },
};

