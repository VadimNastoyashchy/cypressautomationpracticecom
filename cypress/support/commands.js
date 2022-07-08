Cypress.Commands.add('logInApi', (email, pwd) => {
    cy.session([email, pwd], () => {
        cy.request({
            method: 'POST',
            url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
            body: {
                userEmail: email,
                password: pwd,

            }
        }).then(res => {
            expect(res.status).to.eq(200);
            window.localStorage.setItem('token', JSON.stringify(res.body));
        });
    },
        {
            validate() {
                cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');


            }
        }
    );
});