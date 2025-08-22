import LoginPage from '../support/pages/loginPage';
import RegistrationPage from '../support/pages/registrationPage';

describe('Login Functionality', () => {
  beforeEach(() => {
          cy.visit('/')
          RegistrationPage.clickSignInButton()
      })

  it('should login successfully with valid credentials', () => {
    LoginPage.typeEmail('lobodaalina99+1@gmail.com')
    LoginPage.typePassword('123456Test')
    LoginPage.loginButton.should('not.be.disabled')
  });

  it('should login successfully with valid credentials', () => {
    cy.login('lobodaalina99+1@gmail.com', '123456Test')
  });
});