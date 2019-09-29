/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";

Given('the user accesses Google', () => {
  cy.visit('https://google.com')
});

Then('the user sees Google', () => {
});