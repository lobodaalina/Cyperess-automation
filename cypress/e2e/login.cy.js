import LoginPage from '../support/pages/loginPage';
import RegistrationPage from '../support/pages/registrationPage';

describe('Login Functionality', () => {

   beforeEach(() => {
        cy.visit('/')
          RegistrationPage.clickSignInButton()
      })

  it('should login successfully with valid credentials', () => {
    LoginPage.typeEmail(Cypress.env('login'))
    LoginPage.typePassword(Cypress.env('password'))
    LoginPage.loginButton.should('not.be.disabled')
  });

  it('should login successfully with valid credentials', () => {
    cy.login(Cypress.env('login'), Cypress.env('password'))
  });
});