import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export default class Home extends BasePage {
  header: Header = new Header();
  footer: Footer = new Footer();
  productList: ProductList = new ProductList();

  constructor() {
    super('index.php');
  }

  public visit(): this {
    cy.visit('/');
    return this;
  }
}