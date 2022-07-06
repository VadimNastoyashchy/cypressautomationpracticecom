import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn';

const homePage = new Home();
const signInPage = new SignIn();

describe('Navigation tests', () => {
  it('Navigate to the Home page, and verify url', () => {
    homePage.visit().checkPageUrl();
  });

  it('Navigate to the Contact Us page via header, and verify url', () => {
    homePage
      .visit()
      .checkPageUrl()
      .header.clickOnContactUsButton()
      .checkPageUrl();
  });
  it('Navigate to the Sign In page via header, and verify url', () => {
    homePage.visit().checkPageUrl().header.clickOnSignInButton().checkPageUrl();
  });
  it('Sign in page (Valid data)', () => {
    homePage.visit().checkPageUrl().header.clickOnSignInButton();
    signInPage.enterUsername('automationpractice@ukr.net');
    signInPage.enterPassword('simple_automation_com_2021');
    signInPage.clickLogin();
    /*      login.email().type('automationpractice@ukr.net');
            login.password().type('simple_automation_com_2021');
            login.SignInBtn().should('be.visible').click();
*/
  });
});
