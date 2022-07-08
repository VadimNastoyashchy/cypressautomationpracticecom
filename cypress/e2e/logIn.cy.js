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
            .checkTextIsPresent('Welcome to your account. Here you can manage all of your personal information and orders.')
            .header.checkUserNameIsPresent(Cypress.config('account')['userName']);
    });

    it('Log In via API (Valid data)', () => {
        cy.logInApi(Cypress.config('account')['userEmail'],Cypress.config('account')['password']);
        homePage
            .visit()
            .checkPageUrl()
            .header.checkUserNameIsPresent(Cypress.config('account')['userName']);
    });
});