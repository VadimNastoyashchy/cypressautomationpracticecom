import BasePage from '../base/BasePage';
import AlreadyRegistered from '../components/AlreadyRegistered';

export default class SignIn extends BasePage {
    alreadyRegisteredComponent = new AlreadyRegistered();

    constructor() {
        super('index.php?controller=authentication&back=my-account');
    }
}