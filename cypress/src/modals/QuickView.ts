export default class QuickView {
  private priceWithoutDiscountLocator: string = '#old_price_display';
  private priceWithDiscountLocator: string = ' #our_price_display';
  private discountPercentageLocator: string = ' #reduction_percent_display';
  private loadingSpinnerLocator: string = '#fancybox-loading';

  private get loadingSpinner(): Cypress.Chainable<JQuery> {
    return cy.get(this.loadingSpinnerLocator, { timeout: 20000 });
  }


  private get modalWindow(): Cypress.Chainable<JQuery> {
    return cy.iframe('[class="fancybox-overlay fancybox-overlay-fixed"] iframe');
  }

  private get priceWithoutDiscount(): Cypress.Chainable {
    return this.modalWindow.find(this.priceWithoutDiscountLocator).invoke('text');
  }

  private get priceWithDiscount(): Cypress.Chainable {
    return this.modalWindow.find(this.priceWithDiscountLocator).invoke('text');
  }

  private get discountPercentage(): Cypress.Chainable {
    return this.modalWindow.find(this.discountPercentageLocator).invoke('text');
  }
  public waitForLoad(): this {
    this.loadingSpinner.should('not.exist');
    return this;
  }

  public checkSumWithDiscountCalculatedCorrectly(): this {
    this.priceWithoutDiscount.then((priceWithoutDiscount) => {
      this.priceWithDiscount.then((priceWithDiscount) => {
        this.discountPercentage.then((discountPercentage) => {
          const priceWithoutDiscountFormatted = Number(priceWithoutDiscount.replace(/[^\d.]/g, ''));
          const priceWithDiscountFormatted = Number(priceWithDiscount.replace(/[^\d.]/g, ''));
          const discountPercentageFormatted = Number(discountPercentage.replace(/[^\d.]/g, ''));
          const calculatedSumWithDiscount = Math.floor(
            priceWithoutDiscountFormatted - (priceWithoutDiscountFormatted / 100) * discountPercentageFormatted
          );
          expect(priceWithDiscountFormatted).eq(calculatedSumWithDiscount);
        });
      });
    });
    return this;
  }
}