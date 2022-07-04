import ContactUs from '../pages/ContactUs';

export default class Header {

    headerContainerLocator = '#header';

    get contactUsButton() {
        return cy.get(this.headerContainerLocator).contains('a', 'Contact Us');
    }

    clickOnContactUsButton() {
        this.contactUsButton.click();
        return new ContactUs();
    }
}