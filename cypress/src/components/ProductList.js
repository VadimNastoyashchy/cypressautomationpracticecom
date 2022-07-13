import QuickView from '../../modal/QuickView';

export default class ProductList {
    productsContainerLocator = '.tab-content';
    productContainerLocator = '.product-container';
    productDiscountLocator = '#homefeatured .right-block .price-percent-reduction';
    quickViewButtonLocator = '.quick-view';

    get firstProductWithPriceDiscount() {
        return cy.get(this.productsContainerLocator)
            .find(this.productDiscountLocator).eq(0)
            .parents(this.productContainerLocator);
    }

    get firstProductWithPriceDiscountQuickModalButton() {
        return this.firstProductWithPriceDiscount.find(this.quickViewButtonLocator);
    }

    openQuickViewModalForFirstProductWithPriceDiscount() {
        this.firstProductWithPriceDiscountQuickModalButton.click({force: true})
        .intercept('POST',`http://automationpractice.com/index.php/rand=`)
        .as('createProgram')
        .wait('@createProgram');
        return new QuickView();
    }
}