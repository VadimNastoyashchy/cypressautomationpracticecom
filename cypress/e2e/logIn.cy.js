import Home from '../src/pages/Home';

const homePage = new Home();

it('Sign in page (Valid data)', () => {
    homePage
        .visit()
        .checkPageUrl()
        .header.clickOnSignInButton()
        .alreadyRegisteredComponent
        .enterUsername(Cypress.config('account')['username'])
        .enterPassword(Cypress.config('account')['password'])
        .clickOnLoginButton()
        .checkPageUrl()
        .checkTextIsPresent('Welcome to your account. Here you can manage all of your personal information and orders.')
        .header.checkUserNameIsPresent('John Wick');
});