import BasePage from '../base/BasePage';

export default class SignIn extends BasePage {
  constructor() {
    super('index.php?controller=authentication&back=my-account');
  }
  signInPage_login = 'input[id="email"';
  signInPage_password = 'input[type="password"';
  signInPage_loginButtom = '#SubmitLogin';

  enterUsername(username) {
    cy.get(this.signInPage_login).type(username);
  }
  enterPassword(password) {
    cy.get(this.signInPage_password).type(password);
  }
  clickLogin() {
    cy.get(this.signInPage_loginButtom).click();
  }
  /*email(){
return cy.get('input[id="email"');
}
password(){
    return cy.get('input[type="password"');
}
SignInBtn(){
    return cy.get('#SubmitLogin').contains('Sign in');
}*/
}
