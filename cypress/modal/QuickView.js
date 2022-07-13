export default class QuickView {
    priceWithoutDiscountLocator = '#old_price_display';
    priceWithDiscountLocator = ' #our_price_display';
    discountPercentageLocator = ' #reduction_percent_display';
    loadingSpinnerLocator = '#fancybox-loading';

    get loadingSpinner() {
        return cy.get(this.loadingSpinnerLocator, {timeout: 20000});
    }

    waitForLoad() {
        this.loadingSpinner.should('not.exist');
        return this;
    }

    get modalWindow() {
        return cy.iframe('[class="fancybox-overlay fancybox-overlay-fixed"] iframe');
    }

    get  priceWithoutDiscount() {
        return this.modalWindow.find(this.priceWithoutDiscountLocator);
    }

    get priceWithDiscount() {
        return this.modalWindow.find(this.priceWithDiscountLocator);
    }

    get discountPercentage() {
        return this.modalWindow.find(this.discountPercentageLocator);
    }

    discountPrice() {
        return  (this.priceWithoutDiscount / 100) * this.discount;
    }

    discountDeduction() {
        return (this.priceWithoutDiscountLocator - this.discountPrice);
    }

    priceComparison() {
        this.discountDeduction === this.priceWithDiscountLocator;
        return this;
    }
}