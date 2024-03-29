import Home from '../src/pages/Home';

const homePage = new Home();

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
    homePage
      .visit()
      .checkPageUrl()
      .header.clickOnSignInButton()
      .checkPageUrl();
  });

  it('Check links on Follow us section in footer', () => {
    homePage
      .visit()
      .checkPageUrl()
      .footer.checkFollowUsSectionLinks();
  });
});