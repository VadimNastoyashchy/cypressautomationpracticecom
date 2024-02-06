import QuickView from '../modals/QuickView';

export default class ProductList {
  private bestSellersBtnLocator: string = '.blockbestsellers';
  private productsContainerLocator: string = '.tab-content';
  private productContainerLocator: string = '.product-container';
  private productDiscountLocator: string = '#blockbestsellers .right-block .price-percent-reduction';
  private quickViewButtonLocator: string = '.quick-view';

  private get bestSellersButton(): Cypress.Chainable {
    return cy.get(this.bestSellersBtnLocator).contains('a', 'Best Sellers');
  }

  private get firstProductWithPriceDiscount(): Cypress.Chainable {
    return cy.get(this.productsContainerLocator)
      .find(this.productDiscountLocator).eq(0)
      .parents(this.productContainerLocator);
  }

  private get firstProductWithPriceDiscountQuickModalButton(): Cypress.Chainable {
    return this.firstProductWithPriceDiscount.find(this.quickViewButtonLocator);
  }

  public clickOnBestSellersBtn(): this {
    this.bestSellersButton.click();
    return this;
  }

  public openQuickViewModalForFirstProductWithPriceDiscount(): QuickView {
    this.firstProductWithPriceDiscountQuickModalButton.click({ force: true });
    return new QuickView();
  }
}