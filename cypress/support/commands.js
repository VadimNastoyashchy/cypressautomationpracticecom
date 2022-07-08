/**
 * user login using the request api.
 * @memberOf cy
 * @method logInApi
 * @param {string} email - The user email.
 * @param {string} password - The user password.
 * @returns set cookies
 * @example cy.logInApi('userName', 'userPassword);
 */
Cypress.Commands.add('logInApi', (email, password) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('loginAPIUrl'),
        form: true,
        body: {
            email: email,
            passwd: password,
            back: 'my-account',
            SubmitLogin: ''
        }
    });
});