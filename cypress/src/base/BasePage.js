export default class BasePage {
    url;

    constructor(url) {
        this.url = url;
    }

    checkPageUrl() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}${this.url}`);
        return this;
    }
}