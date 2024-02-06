import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';

export default class Header {
  private headerContainerLocator: string = '#header';
  private nameAccountLocator: string = '.account';

  private get contactUsButton(): Cypress.Chainable {
    return cy.get(this.headerContainerLocator).contains('a', 'Contact us');
  }

  private get signInButton(): Cypress.Chainable {
    return cy.get(this.headerContainerLocator).contains('a', 'Sign in');
  }

  private get nameAccount(): Cypress.Chainable {
    return cy.get(this.nameAccountLocator);
  }

  public clickOnContactUsButton(): ContactUs {
    this.contactUsButton.click();
    return new ContactUs();
  }

  public clickOnSignInButton(): SignIn {
    this.signInButton.click();
    return new SignIn();
  }

  public checkUserNameIsPresent(userName: string): this {
    this.nameAccount.contains(userName);
    return this;
  }
}