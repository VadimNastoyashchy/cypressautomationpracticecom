import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';

export default class Header {
  headerContainerLocator = '#header';
  nameAccountLocator = '.account';

  get contactUsButton() {
    return cy.get(this.headerContainerLocator).contains('a', 'Contact us');
  }
  get signInButton() {
    return cy.get(this.headerContainerLocator).contains('a', 'Sign in');
  }
  get nameAccount() {
    return cy.get(this.nameAccountLocator);
  }
  clickOnContactUsButton() {
    this.contactUsButton.click();
    return new ContactUs();
  }
  clickOnSignInButton() {
    this.signInButton.click();
    return new SignIn();
  }
  checkUserNameIsPresent(userName) {
    this.nameAccount.contains(userName);
    return this;
  }
}