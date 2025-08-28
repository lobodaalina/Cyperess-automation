class ExpensesPage {

    get addExpenseButton() {
        return cy.contains('button', 'Add an expense');
    }

    get carDropdown() {
        return cy.get('#carSelectDropdown')
    }

    get carList() {
        return cy.get('.car-select-dropdown_menu')
    }

    get litersInput() {
        return cy.get('#addExpenseLiters')
    }

    get totalCostInput() {
        return cy.get('#addExpenseTotalCost')
    }

    get addButton() {
        return cy.get('div.modal-footer').children().contains('button', 'Add')
    }

    get mileageInput() {
        return cy.get('#addExpenseMileage')
    } 

    get table() {
        return cy.get('td')
    }

    selectCar(brand) {
        this.carDropdown.click();
        cy.contains('li.car-select-dropdown_item:not(.disabled)', brand).click();
        return this;
    }

    typeMileage(miles) {
        this.mileageInput.type('{uparrow}');
        return this;
    }

    typeLiters(liters) {
        this.litersInput.type(liters);
        return this;
    }

    typeTotalCost(cost) {
        this.totalCostInput.type(cost)
        return this;
    }

    clickAddExpenseButton() {
        this.addExpenseButton.click();
    }

    clickAddButton() {
        this.addButton.click();
    }

    clickAddExpenseButton() {
        this.addExpenseButton.click();
    }
}

export default new ExpensesPage();