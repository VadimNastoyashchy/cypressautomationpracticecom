import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class Account extends BasePage {
  header = new Header();

  constructor() {
    super('index.php?controller=my-account');
  }
  pageContainContainerLocator = '#center_column';

  get accountInfo() {
    return cy.get(this.pageContainContainerLocator);
  }

  checkTextIsPresent(receivedText) {
    this.accountInfo.contains(receivedText);
    return this;
  }
}
