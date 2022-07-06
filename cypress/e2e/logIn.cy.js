import Home from '../src/pages/Home';

const homePage = new Home();

it('Sign in page (Valid data)', () => {
    homePage
        .visit()
        .checkPageUrl()
        .header.clickOnSignInButton()
        .alreadyRegisteredComponent
        .enterUsername(Cypress.config('account')['username']);
});