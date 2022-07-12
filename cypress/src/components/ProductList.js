export default class ProductList {
    productsContainerLocator = '.tab-content';
    productContainerLocator = '.product-container';
    productSalaryLocator = '#homefeatured .right-block .price-percent-reduction';
    quickViewButtonLocator = '.quick-view';

    get firstProductWithPriceSalary() {
        return cy.get(this.productsContainerLocator)
            .find(this.productSalaryLocator).eq(0)
            .parents(this.productContainerLocator);
    }

    get firstProductWithPriceSalaryQuickModalButton() {
        return this.firstProductWithPriceSalary.find(this.quickViewButtonLocator);
    }

    openQuickViewModalForFirstProductWithPriceSalary() {
        this.firstProductWithPriceSalaryQuickModalButton.click({force: true});
        return new QuickView();
    }
}