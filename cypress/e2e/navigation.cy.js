import Verivy from './verifyUrl';
describe('Navigation tests', () => {
  const verify = new Verivy();
  it('Navigate to the home page and verify url', () => {
    verify.visit();
    verify.verification();
  });
});
