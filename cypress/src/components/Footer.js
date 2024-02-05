export default class Footer {
    footerContainerLocator = '#footer';

    get followUsSectionLinksList() {
        return cy.get(this.footerContainerLocator)
            .find('#social_block a');
    }

    checkFollowUsSectionLinks() {
        this.followUsSectionLinksList.each((element) => {
            cy.request({
                method: 'GET',
                url: element.attr('href'),
                failOnStatusCode: false
            }).then((response) => {
                if (response.status === 200) {
                    expect(response.status).eq(200);
                } else if (response.status === 404) {
                    expect(response.status).eq(404);
                }
                else {
                    console.log(`${element.attr('href')}${response.status}`);
                }
            });
        });
    }
}