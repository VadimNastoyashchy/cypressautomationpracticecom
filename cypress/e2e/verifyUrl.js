class Verivy {
  visit() {
    return cy.visit('/');
  }

  verification() {
    return cy.url().should('eq', Cypress.config('baseUrl'));
  }
}
export default Verivy;
