export default class ProductList{
productContainerLocator = '.tab-content';
productSalaryLocator = '.price-percent-reduction';
productWindowLocator = '.product_img_link';

get priceSalary(){
    return cy.get(this.productContainerLocator).find(this.productSalaryLocator);
}
openWindowProduct(){
    this.priceSalary.click(this.productWindowLocator);
    return this;
}
}