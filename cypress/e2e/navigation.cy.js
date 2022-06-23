describe('Navigation tests', () => {
  it('Navigate to the home page and verify url', () => {
    cy.visit('/');
    cy.url().should('eq', Cypress.env('baseUrl'));
  
  });
});
