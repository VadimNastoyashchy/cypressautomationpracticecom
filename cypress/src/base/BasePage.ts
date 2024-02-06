export default class BasePage {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public checkPageUrl(): this {
    cy.url().should('eq', `${Cypress.config('baseUrl')}${this.url}`);
    return this;
  }
}
