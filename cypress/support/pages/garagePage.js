class GaragePage {

    get addCarButton() {
        return cy.contains('button', 'Add car');
    }

    get addButton() {
        return cy.get('[type="button"].btn-primary');
    }

    get brandList() {
        return cy.get('#addCarBrand')
    }

    get modelList() {
        return cy.get('#addCarModel')
    }

    get mileageInput() {
        return cy.get('#addCarMileage');
    }

    get carList() {
        return cy.get('li.car-item')
    }

    selectCarBrand(index) {
        this.brandList.select(index);
        return this;
    }

    selectCarModel(index) {
        this.modelList.select(index);
        return this;
    }

    typeMileage(mileage) {
        this.mileageInput.type(mileage);
        return this;
    }

    clickAddCarButton() {
        this.addCarButton.click();
    }

    clickAddButton() {
        this.addButton.click();
    }
}

export default new GaragePage();