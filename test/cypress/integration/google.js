/// <reference types="Cypress" />

context('Google', () => {
  it('should be possible to access Google', () => {
    cy.visit('https://www.google.com')
  });
});
