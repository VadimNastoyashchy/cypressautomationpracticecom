import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class Home extends BasePage {
    header = new Header();
    constructor() {
        super('index.php');
    }

    visit() {
        cy.visit('/');
        return this;
    }
}