import Account from '../pages/Account';

export default class AlreadyRegistered {
    alreadyRegisteredContainerLocator = '#login_form';

    loginFieldLocator = '#email';
    signInPage_password = 'input[type="password"]';
    signInPage_loginButtom = '#SubmitLogin';

    get inputEmailField() {
        return cy.get(this.alreadyRegisteredContainerLocator)
            .find(this.loginFieldLocator);
    }

    enterUsername(username) {
        this.inputEmailField.type(username);
        return this;
    }

    enterPassword(password) {
        cy.get(this.signInPage_password).type(password);
        return this;
    }

    clickOnLoginButton() {
        cy.get(this.signInPage_loginButtom).click();
        return new Account();
    }
}