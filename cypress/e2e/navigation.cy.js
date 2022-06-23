describe('Navigation on the site of clothes', () => {
  it('Access the page and verify the address', () => {
    cy.visit('/');
    cy.url().should('eq', 'http://automationpractice.com/index.php');
  });
});
