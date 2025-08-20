import registrationPage from '../support/pages/registrationPage';
import RegistrationPage from '../support/pages/registrationPage';

describe('Name Field', () => {

    beforeEach(() => {
        cy.visit('/')
        RegistrationPage.clickSignInButton()
        RegistrationPage.clickRegistrationButton()
    })

    it('shows error when field is empty', () => {
        RegistrationPage.nameInput.focus();
        RegistrationPage.lastNameInput.focus();
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('contain.text', 'Name required')
        RegistrationPage.nameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)') // Bug #1
    });

    it('shows error when name is too short', () => {
        RegistrationPage.typeName('a');
        RegistrationPage.lastNameInput.focus();
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('contain.text', 'Name has to be from 2 to 20 characters long')
        RegistrationPage.nameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when name is too long', () => {
        RegistrationPage.typeName('abcdskdlflefghijklfkf');
        RegistrationPage.lastNameInput.focus();
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('contain.text', 'Name has to be from 2 to 20 characters long')
        RegistrationPage.nameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when name is invalid', () => {
        RegistrationPage.typeName('3849');
        RegistrationPage.lastNameInput.focus();
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('contain.text', 'Name is invalid')
        RegistrationPage.nameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('should ignore space', () => {
        RegistrationPage
        .typeName('Ali na')
        .lastNameInput.focus() 
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('not.exist') //Bug #2
    })

    it('should use function trim', () => {
        RegistrationPage
        .typeName(' Alina ')
        .lastNameInput.focus()
        RegistrationPage.nameInput.should('have.value', 'Alina') //Bug #3
    })

    it('should accept valid name', () => {
        RegistrationPage
        .typeName('Alina')
        .lastNameInput.focus()
        RegistrationPage.nameInput.should('have.value', 'Alina')
        RegistrationPage.nameInput.parent().find('.invalid-feedback').should('not.exist')
    })


});

describe('Last Name Field', () => {

    beforeEach(() => {
        cy.visit('/')
        RegistrationPage.clickSignInButton()
        RegistrationPage.clickRegistrationButton()
    })

    it('shows error when field is empty', () => {
        RegistrationPage.lastNameInput.focus();
        RegistrationPage.emailInput.focus();
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('contain.text', 'Last name required')
        RegistrationPage.lastNameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)') //Bug #4
    });

    it('shows error when last name is invalid', () => {
        RegistrationPage.typeLastName('3490');
        RegistrationPage.emailInput.focus();
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('contain.text', 'Last name is invalid')
        RegistrationPage.lastNameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when last name is too short', () => {
        RegistrationPage.typeLastName('a');
        RegistrationPage.emailInput.focus();
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('contain.text', 'Last name has to be from 2 to 20 characters long')
        RegistrationPage.lastNameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when last name is too long', () => {
        RegistrationPage.typeLastName('abcdskdlflefghijklfkf');
        RegistrationPage.emailInput.focus();
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('contain.text', 'Last name has to be from 2 to 20 characters long')
        RegistrationPage.lastNameInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('should ignore space', () => {
        RegistrationPage
        .typeLastName('Bo bo')
        .emailInput.focus() 
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('not.exist') // bug #5
    })

    it('should use function trim', () => {
        RegistrationPage
        .typeLastName(' Johnson ')
        .emailInput.focus()
        RegistrationPage.lastNameInput.should('have.value', 'Johnson') // bug #6
    })

    it('should accept valid last name', () => {
        RegistrationPage
        .typeLastName('Johnson')
        .emailInput.focus()
        RegistrationPage.lastNameInput.should('have.value', 'Johnson')
        RegistrationPage.lastNameInput.parent().find('.invalid-feedback').should('not.exist')
    })

});

describe('Email Field', () => {

    beforeEach(() => {
        cy.visit('/')
        RegistrationPage.clickSignInButton()
        RegistrationPage.clickRegistrationButton()
    })

    it('shows error when field is empty', () => {
        RegistrationPage.emailInput.focus();
        RegistrationPage.passwordInput.focus();
        RegistrationPage.emailInput.parent().find('.invalid-feedback').should('contain.text', 'Email required')
        RegistrationPage.emailInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when email is without @', () => {
        RegistrationPage.typeEmail('john.mailcom');
        RegistrationPage.passwordInput.focus();
        RegistrationPage.emailInput.parent().find('.invalid-feedback').should('contain.text', 'Email is incorrect')
        RegistrationPage.emailInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when email is without domain', () => {
        RegistrationPage.typeEmail('john@gmail');
        RegistrationPage.passwordInput.focus();
        RegistrationPage.emailInput.parent().find('.invalid-feedback').should('contain.text', 'Email is incorrect')
        RegistrationPage.emailInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('accepts valid email', () => {
        RegistrationPage.typeEmail('johngmail@gmail.com');
        RegistrationPage.passwordInput.focus();
        RegistrationPage.emailInput.should('have.value', 'johngmail@gmail.com')
        RegistrationPage.emailInput.parent().find('.invalid-feedback').should('not.exist')
    });

    });

    describe('Password Field', () => {

    beforeEach(() => {
        cy.visit('/')
        RegistrationPage.clickSignInButton()
        RegistrationPage.clickRegistrationButton()
    })

    it('shows error when field is empty', () => {
        RegistrationPage.passwordInput.focus();
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password required')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });

    it('shows error when password is too short', () => {
        RegistrationPage.typePassword('12345Rk');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password has to be from')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('shows error when password is too long', () => {
        RegistrationPage.typePassword('123456789123456789Rf');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password has to be from')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('shows error when password does not have integer', () => {
        RegistrationPage.typePassword('abeksdffirK');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password has to be from')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('shows error when password does not have small letter', () => {
        RegistrationPage.typePassword('122343QWERT');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password has to be from')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('shows error when password does not have capital letter', () => {
        RegistrationPage.typePassword('122343qwert');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('contain.text', 'Password has to be from')
        RegistrationPage.passwordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('accepts valid password', () => {
        RegistrationPage.typePassword('123QWERTqwert');
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.should('have.value', '123QWERTqwert')
        RegistrationPage.passwordInput.parent().find('.invalid-feedback').should('not.exist')
    })

    });

    describe('Repeat Password Field', () => {

    beforeEach(() => {
        cy.visit('/')
        RegistrationPage.clickSignInButton()
        RegistrationPage.clickRegistrationButton()
        RegistrationPage
        .typeName('John')
        .typeLastName('Johnson')
        .typeEmail('lobodaalina99+1@gmail.com')
        .typePassword('123QWERTqwert')
    })

    it('shows error when field is empty', () => {
        RegistrationPage.repeatPasswordInput.focus();
        RegistrationPage.passwordInput.focus();
        RegistrationPage.repeatPasswordInput.parent().find('.invalid-feedback').should('contain.text', 'Re-enter password required')
        RegistrationPage.repeatPasswordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
        RegistrationPage.registerButton.should('be.disabled')
    });

    it('shows error when passwords do not match', () => {
        RegistrationPage.typeRepeatPassword('123QWERTqwer')
        RegistrationPage.passwordInput.focus();
        RegistrationPage.repeatPasswordInput.parent().find('.invalid-feedback').should('contain.text', 'Passwords do not match')
        RegistrationPage.repeatPasswordInput.should('have.css', 'border-color', 'rgb(220, 53, 69)')
        RegistrationPage.registerButton.should('be.disabled')
    });

     it('accepts matching password', () => {
        RegistrationPage.typeRepeatPassword('123QWERTqwert')
        RegistrationPage.passwordInput.focus();
        RegistrationPage.repeatPasswordInput.should('have.value', '123QWERTqwert')
        RegistrationPage.repeatPasswordInput.parent().find('.invalid-feedback').should('not.exist')
        RegistrationPage.registerButton.should('not.be.disabled')
    });


    });
