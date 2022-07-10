import Home from '../src/pages/Home';
import Footer from '../src/components/Footer';

const homePage = new Home();
const footer = new Footer();

describe('Footer navigation tests', () => {
    it('Check links on Follow us section in footer', () => {
        homePage
            .visit()
            .checkPageUrl();
           footer.checkFooterLinks();
    });
});