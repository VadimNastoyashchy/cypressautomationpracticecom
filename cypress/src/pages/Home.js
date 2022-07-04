import BasePage from '../base/BasePage';

export default class Home extends BasePage {
    constructor() {
        super('index.php', 'HomePage');
    }

    visit() {
        cy.visit('/');
        return this;
    }
}