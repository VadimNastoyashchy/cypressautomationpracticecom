import Account from '../pages/Account';

export default class AlreadyRegistered {
  private alreadyRegisteredContainerLocator: string = '#login_form';
  private loginFieldLocator: string = '#email';
  private passwordFieldLocator: string = '#passwd';
  private loginButtonLocator: string = '#SubmitLogin';

  private get inputEmailField(): Cypress.Chainable {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.loginFieldLocator);
  }

  private get inputPasswordField(): Cypress.Chainable {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.passwordFieldLocator);
  }

  private get loginButton(): Cypress.Chainable {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.loginButtonLocator);
  }

  public enterUserEmail(userEmail: any): this {
    this.inputEmailField.type(userEmail);
    return this;
  }

  public enterPassword(password: string): this {
    this.inputPasswordField.type(password);
    return this;
  }

  public clickOnLoginButton(): Account {
    this.loginButton.click();
    return new Account();
  }
}