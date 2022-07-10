export default class Footer {
  constructor() {
    this.pages = ['Facebook', 'Twitter', 'Youtube', 'Google Plus'];
  }

  checkFooterLinks() {
    this.pages.forEach((page) => {
      cy.get('ul')
        .contains(page)
        .then((link) => {
          cy.request(link.prop('href'));
        });
    });
  }
}
