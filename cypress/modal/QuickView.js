export default class QuickView {
  modulWindow = '.primary_block row';
  priceWithoutDiscountLocator = '#old_price_display';
  priceWithDiscountPriceLocator = ' #our_price_display';
  discountPercentageLocator = ' #reduction_percent_display';

  get pastPrice() {
    return cy.get(this.modulWindow).find(this.priceWithoutDiscountLocator);
  }
  get presentPrice() {
    return cy.get(this.modulWindow).find(this.priceWithDiscountPriceLocator);
  }
  get discount() {
    return cy.get(this.modulWindow).find(this.discountPercentageLocator);
  }
  discountPrice(){
    return (this.pastPrice/100)* this.discount;
  }
  discountDeduction(){
    return (this.pastPrice - this.discountPrice);
  }
  priceComparison(){
    this.presentPrice.eq(this.discountDeduction);
    return this;
  }
}
