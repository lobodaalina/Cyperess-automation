import GaragePage from '../support/pages/garagePage';
import ExpensesPage from '../support/pages/expensesPage';

describe('Garage Functionality', () => {

   beforeEach(() => {
        cy.visit('/')
        cy.login(Cypress.env('login'), Cypress.env('password'));
      })

  it('should add car with valid info', () => {
    GaragePage.clickAddCarButton();
    GaragePage.selectCarBrand(1);
    GaragePage.selectCarModel(0);
    GaragePage.typeMileage('3000');
    GaragePage.clickAddButton();
    GaragePage.carList.should('exist')
  });

  it('should add fuel expenses', () => {
    cy.visit('/panel/expenses')
    ExpensesPage.clickAddExpenseButton();
    ExpensesPage.typeMileage();
    ExpensesPage.typeLiters(200);
    ExpensesPage.typeTotalCost(300);
    ExpensesPage.clickAddButton()

  })



});