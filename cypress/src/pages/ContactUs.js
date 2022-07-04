export default class ContactUs {
    url = 'index.php?controller=contact';

    checkPageUrl() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}${this.url}`);
        return this;
    }
}