import Account from '../pages/Account';

export default class AlreadyRegistered  {
  alreadyRegisteredContainerLocator = '#login_form';
  loginFieldLocator = '#email';
  passwordFieldLocator = '#passwd';
  loginButtonLocator = '#SubmitLogin';

  get inputEmailField() {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.loginFieldLocator);
  }
  get inputPasswordField() {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.passwordFieldLocator);
  }
  get loginButton() {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.loginButtonLocator);
  }

  enterUserEmail(userEmail) {
    this.inputEmailField.type(userEmail);
    return this;
  }
  enterPassword(password) {
    this.inputPasswordField.type(password);
    return this;
  }
  clickOnLoginButton() {
    this.loginButton.click();
    return new Account();
  }
}