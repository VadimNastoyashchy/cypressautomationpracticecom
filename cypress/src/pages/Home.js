import Header from '../components/Header';

export default class Home {
    url = 'index.php';
    header = new Header();

    visit() {
        cy.visit('/');
        return this;
    }

    checkPageUrl() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}${this.url}`);
        return this;
    }
}