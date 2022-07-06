import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class Account extends BasePage {
  header = new Header();
  accountInfoContainerLocator = '#center_column';

  constructor() {
    super('index.php?controller=my-account');
  }

  get accountInfo() {
    return cy.get(this.accountInfoContainerLocator);
  }
  checkTextIsPresent(expectedText) {
    this.accountInfo.contains(expectedText);
    return this;
  }
}
