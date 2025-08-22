class LoginPage {

  get emailInput() {
    return cy.get('#signinEmail');
  }

  get passwordInput() {
    return cy.get('#signinPassword');
  }

   get loginButton() {
        return cy.contains('button', 'Login');
    }

    typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}

export default new LoginPage();