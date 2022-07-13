export default class QuickView {
    priceWithoutDiscountLocator = '#old_price_display';
    priceWithDiscountPriceLocator = ' #our_price_display';
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

    get pastPrice() {
        return this.modalWindow.find(this.priceWithoutDiscountLocator);
    }

    get presentPrice() {
        return this.modalWindow.find(this.priceWithDiscountPriceLocator);
    }

    get discount() {
        return this.modalWindow.find(this.discountPercentageLocator);
    }

    discountPrice() {
        return (this.pastPrice / 100) * this.discount;
    }

    discountDeduction() {
        return (this.pastPrice - this.discountPrice);
    }

    priceComparison() {
        this.presentPrice.eq(this.discountDeduction);
        return this;
    }
}