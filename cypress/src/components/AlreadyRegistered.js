import BasePage from '../base/BasePage';
import Account from '../pages/Account';

export default class AlreadyRegistered extends BasePage {
  constructor() {
    super('index.php?controller=authentication&back=my-account');
  }
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
  enterUsername(username) {
    this.inputEmailField.type(username);
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