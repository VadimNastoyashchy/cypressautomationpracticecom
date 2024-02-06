export default class Footer {
  private footerContainerLocator: string = '#footer';

  private get followUsSectionLinksList(): Cypress.Chainable {
    return cy.get(this.footerContainerLocator).find('#social_block a');
  }

  public checkFollowUsSectionLinks(): void {
    this.followUsSectionLinksList.each((element) => {
      cy.request({
        method: 'GET',
        url: element.attr('href'),
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status === 200) {
          expect(response.status).eq(200);
        } else if (response.status === 404) {
          expect(response.status).eq(404);
        } else {
          console.log(`${element.attr('href')}${response.status}`);
        }
      });
    });
  }
}