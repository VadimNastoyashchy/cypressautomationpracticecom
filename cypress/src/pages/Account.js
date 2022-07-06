import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class Account extends BasePage{
    header = new Header();

    constructor() {
        super('index.php?controller=my-account');
    }
}