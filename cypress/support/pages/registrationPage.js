class RegistrationPage {
    get signInButton() {
        return cy.get('.header_signin')
    }

    get registrationButton() {
        return cy.contains('button', 'Registration')
    }

    get nameInput() {
        return cy.get('#signupName');
    }

    get lastNameInput() {
        return cy.get('#signupLastName');
    }

    get emailInput() {
        return cy.get('#signupEmail');
    }

    get passwordInput() {
        return cy.get('#signupPassword');
    }

    get repeatPasswordInput() {
        return cy.get('#signupRepeatPassword');
    }

    get registerButton() {
        return cy.contains('button', 'Register');
    }

    // Методи для взаємодії з елементами
    typeName(name) {
        this.nameInput.type(name);
        return this;
    }

    typeLastName(lastName) {
        this.lastNameInput.type(lastName);
        return this;
    }

    typeEmail(email) {
        this.emailInput.type(email);
        return this;
    }

    typePassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    typeRepeatPassword(repeatPassword) {
        this.repeatPasswordInput.type(repeatPassword);
        return this;
    }

    clickRegisterButton() {
        this.registerButton.click();
    }

    clickSignInButton() {
        this.signInButton.click();
    }

    clickRegistrationButton() {
        this.registrationButton.click();
    }

}

export default new RegistrationPage()