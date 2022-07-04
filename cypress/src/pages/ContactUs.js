import BasePage from '../base/BasePage';

export default class ContactUs extends BasePage{
    constructor() {
        super('index.php?controller=contact', 'Contact Us');
    }
}