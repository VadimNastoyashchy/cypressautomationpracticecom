import BasePage from '../base/BasePage';

export default class SignIn extends BasePage{
    constructor() {
        super('index.php?controller=authentication&back=my-account');
    }
}