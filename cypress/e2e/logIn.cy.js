import Home from '../src/pages/Home';

const homePage = new Home();

describe('User Login  tests', () => {
  it('Sign in page (Valid data)', () => {
    homePage
      .visit()
      .checkPageUrl()
      .header.clickOnSignInButton()
      .alreadyRegisteredComponent
      .enterUserEmail(Cypress.config('account')['userEmail'])
      .enterPassword(Cypress.config('account')['password'])
      .clickOnLoginButton()
      .checkPageUrl()
      .checkTextIsPresent(Cypress.config('account')['expectedText'])
      .header.checkUserNameIsPresent(Cypress.config('account')['userName']);
  });
});