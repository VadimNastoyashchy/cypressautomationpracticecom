import QuickView from '../modals/QuickView';

export default class ProductList {
    homeTabsContainerLocator = '#home-page-tabs'
    bestSellersBtnLocator = '.blockbestsellers'
    productsContainerLocator = '.tab-content';
    productContainerLocator = '.product-container';
    productDiscountLocator = '#blockbestsellers .right-block .price-percent-reduction';
    quickViewButtonLocator = '.quick-view';

    get bestSellersButton() {
        return cy.get(this.bestSellersBtnLocator).contains('a', 'Best Sellers');
    }

    get firstProductWithPriceDiscount() {
        return cy.get(this.productsContainerLocator)
            .find(this.productDiscountLocator).eq(0)
            .parents(this.productContainerLocator);
    }

    get firstProductWithPriceDiscountQuickModalButton() {
        return this.firstProductWithPriceDiscount.find(this.quickViewButtonLocator);
    }

    clickOnBestSellersBtn() {
        this.bestSellersButton.click();
        return this;
    }

    openQuickViewModalForFirstProductWithPriceDiscount() {
        this.firstProductWithPriceDiscountQuickModalButton.click({ force: true });
        return new QuickView();
    }
}