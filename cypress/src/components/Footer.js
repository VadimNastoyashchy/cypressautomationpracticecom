export default class Footer {
    footerContainerLocator = '#footer';

    get followUsSectionLinksList() {
        return cy.get(this.footerContainerLocator)
            .find('#social_block a');
    }

    checkFollowUsSectionLinks() {
        this.followUsSectionLinksList.each((link) => {
            cy.request('GET', link.attr('href')).then((response) => {
                expect(response.status).eq(200);
            });
        });
    }
}