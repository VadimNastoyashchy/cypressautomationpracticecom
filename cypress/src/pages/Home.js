import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export default class Home extends BasePage {
    header = new Header();
    footer = new Footer();
    productList = new ProductList();


    constructor() {
        super('index.php');
    }

    visit() {
        cy.visit('/');
        return this;
    }
}