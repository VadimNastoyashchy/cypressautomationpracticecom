import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class Account extends BasePage {
  header = new Header();

  constructor() {
    super('index.php?controller=my-account');
  }
  pageContainContainerLocator = '#center_column';

  get accountInfo() {
    return cy
      .get(this.pageContainContainerLocator)
      .contains('Welcome to your account. Here you can manage all of your personal information and orders.');
  }

  checkTextIsPresent() {
    this.accountInfo;
    return this;
  }
}
