import BasePage from '../base/BasePage';
import Account from '../pages/Account';

export default class AlreadyRegistered extends BasePage {
    constructor() {
        super('index.php?controller=authentication&back=my-account');
    }
  alreadyRegisteredContainerLocator = '#login_form';
  pageContainContainerLocator = '#center_column';

  loginFieldLocator = '#email';
  passwordFieldLocator = '#passwd';
  loginButtomLocator = '#SubmitLogin';
  accountInfoLocator = '.info-account';

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
  get loginButtom() {
    return cy
      .get(this.alreadyRegisteredContainerLocator)
      .find(this.loginButtomLocator);
  }
  get accountInfo(){
    return cy
    .get(this.pageContainContainerLocator)
    .find(this.accountInfoLocator);
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
    this.loginButtom.click();
    return new Account();
  }
  textInfo(){
    this.accountInfo.contains('Welcome to your account. Here you can manage all of your personal information and orders.');
    return this;
  }
}