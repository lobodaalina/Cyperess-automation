// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('.header_signin').click()
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });
  cy.contains('button', 'Login').click();
  cy.url().should('include', '/panel/garage')
})

/*Cypress.Commands.add('addCarExpenses', (mileage, liters, cost) => {
  cy.request({
        method: 'GET',
        url: '/api/cars',
      }).then((response2) => {
        expect(response2.status).to.equal(200);
        console.log(response2.body)
        expect(response2.body.data[0].id).to.eq(carId);
        expect(response2.body.data[0].brand).to.eq('BMW');
      })

      cy.request({
        method: 'POST',
        url: '/api/expenses',
        body: {
          "carId": carId,
          "reportedAt": "2025-08-27",
          "mileage": mileage,
          "liters": liters,
          "totalCost": cost,

        }
  })
  })*/

Cypress.Commands.add('addCarExpenses', ({ carId, mileage, liters, totalCost, reportedAt }) => {
  expect(carId, 'carId is required').to.exist;
  return cy.request('GET', '/api/cars').then((response1) => {
    expect(response1.status).to.eq(200);

    return cy.request({
      method: 'POST',
      url: '/api/expenses',
      body: { carId, reportedAt, mileage, liters, totalCost }
    });
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})
