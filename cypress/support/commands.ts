declare namespace Cypress {
  interface Chainable {
    logInApi(email: string, password: string): void;
  }
}

Cypress.Commands.add('logInApi', (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('loginAPIUrl'),
    form: true,
    body: {
      email: email,
      passwd: password,
      back: 'my-account',
      SubmitLogin: ''
    }
  });
});