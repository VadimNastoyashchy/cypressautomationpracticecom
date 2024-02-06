import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class Account extends BasePage {
  header: Header = new Header();
  private accountInfoContainerLocator: string = '#center_column';

  constructor() {
    super('index.php?controller=my-account');
  }

  private get accountInfo(): Cypress.Chainable<JQuery> {
    return cy.get(this.accountInfoContainerLocator);
  }

  public checkTextIsPresent(expectedText: string): this {
    this.accountInfo.contains(expectedText);
    return this;
  }
}