export class ProductsPage {

    constructor() {
        this.closeModal = '//footer//child::button[@id="closeModal"]';
        this.shoppingCart = '#goShoppingCart'

    };

    addProduct(product) {
        cy.xpath(`//p[text()="${product}"]//following-sibling::button`).click();

    };

    clickCloseModal() {
        cy.xpath(this.closeModal).click();
    };

    goTocart() {
        cy.get(this.shoppingCart).click();
    }
}