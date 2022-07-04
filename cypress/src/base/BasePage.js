import Header from '../components/Header';

export default class BasePage {
    _pageUrl;
    _pageName;
    _header;

    constructor(pageUrl, pageName) {
        this._pageUrl = pageUrl;
        this._pageName = pageName;
        this._header = new Header();
    }

    checkPageUrl() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}${this._pageUrl}`);
        return this;
    }
}