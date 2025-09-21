import GaragePage from '../support/pages/garagePage';
import ExpensesPage from '../support/pages/expensesPage';

describe('Garage Functionality', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login(Cypress.env('login'), Cypress.env('password'));
  })

  it('should add car and expenses', () => {
    cy.intercept('POST', '/api/cars').as('addCars');
    GaragePage.clickAddCarButton();
    GaragePage.selectCarBrand(1);
    GaragePage.selectCarModel(0);
    GaragePage.typeMileage('3000');
    GaragePage.clickAddButton();
    GaragePage.carList.should('exist');


    cy.wait('@addCars').then((req) => {
      expect(req.response.statusCode).to.eq(201)
      const responseBody = req.response.body;
      const carId = responseBody.data.id;
      cy.wrap(carId).as('carId');
      expect(carId).to.exist

      cy.addCarExpenses({
        carId,
        mileage: 3200,
        liters: 20,
        totalCost: 20,
        reportedAt: '2025-09-21',
      }).then((response3) => {
        console.log(response3.body)
        expect(response3.status).to.eq(200);
        expect(response3.body.data.carId).to.eq(carId)
        expect(response3.body.data.mileage).to.eq(3200)
      })

    })

  })

  it('should check fuel expense', () => {
    cy.visit('/panel/expenses');
    ExpensesPage.selectCar('BMW 3')
    ExpensesPage.table.should('contain.text', '3200')
    ExpensesPage.table.should('contain.text', '20L')
    ExpensesPage.table.should('contain.text', '21.09.2025')
    ExpensesPage.table.should('contain.text', '20.00 USD')


  })

})
