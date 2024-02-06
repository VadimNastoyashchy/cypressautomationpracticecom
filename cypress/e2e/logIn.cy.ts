import Home from '../src/pages/Home';

const homePage = new Home();

describe('User Login  tests', () => {
  it('Sign in page (Valid data)', () => {
    homePage
      .visit()
      .checkPageUrl()
      .header.clickOnSignInButton()
      .alreadyRegisteredComponent
      .enterUserEmail(Cypress.env('userEmail'))
      .enterPassword(Cypress.env('password'))
      .clickOnLoginButton()
      .checkPageUrl()
      .checkTextIsPresent('Welcome to your account. Here you can manage all of your personal information and orders.')
      .header.checkUserNameIsPresent(Cypress.env('userName'));
  });

  it('Log In via API (Valid data)', () => {
    cy.logInApi(Cypress.env('userEmail'), Cypress.env('password'))
    homePage
      .visit()
      .checkPageUrl()
      .header.checkUserNameIsPresent(Cypress.env('userName'));
  });
});