import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';

export default class Header {

    headerContainerLocator = '#header';

    get contactUsButton() {
        return cy.get(this.headerContainerLocator).contains('a', 'Contact us');
    }
    clickOnContactUsButton() {
        this.contactUsButton.click();
        return new ContactUs();
    }
    get signInButton(){
        return cy.get(this.headerContainerLocator).contains('a','Sign in');
    }
    clickOnSignInButton(){
        this.signInButton.click();
        return new SignIn();
    }
}