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

    get priceWithoutDiscount() {
        return this.modalWindow.find(this.priceWithoutDiscountLocator).invoke('text');
    }

    get priceWithDiscount() {
        return this.modalWindow.find(this.priceWithDiscountLocator).invoke('text');
    }

    get discountPercentage() {
        return this.modalWindow.find(this.discountPercentageLocator).invoke('text');
    }

    checkSumWithDiscountCalculatedCorrectly() {
        this.priceWithoutDiscount.then(priceWithoutDiscount => {
            this.priceWithDiscount.then(priceWithDiscount => {
                this.discountPercentage.then(discountPercentage => {
                    const priceWithoutDiscountFormatted = Number(priceWithoutDiscount.replace(/[^\d.]/g, ''));
                    const priceWithDiscountFormatted = Number(priceWithDiscount.replace(/[^\d.]/g, ''));
                    const discountPercentageFormatted = Number(discountPercentage.replace(/[^\d.]/g, ''));
                    const calculatedSumWithDiscount = Math.floor(priceWithoutDiscountFormatted - (priceWithoutDiscountFormatted / 100 * discountPercentageFormatted));
                    expect(priceWithDiscountFormatted).eq(calculatedSumWithDiscount);
                });
            });
        });
        return this;
    } 
}