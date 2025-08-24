class ExpensesPage {

    get addExpenseButton() {
        return cy.contains('button', 'Add an expense');
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