
import Home from '../src/pages/Home';

const homePage = new Home();

describe('Check product on site', () => {
    it('Check item discount', () => {
        homePage
            .visit()
            .checkPageUrl()
            .productList.openQuickViewModalForFirstProductWithPriceSalary();
    });
});