describe('First tests', () => {
  it('Open Google', () => {
    cy.visit('https://www.google.com/')
  });

  it('URL should be https://www.google.com/', function(){
      cy.url().should('eq','https://www.google.com/')
  })

});