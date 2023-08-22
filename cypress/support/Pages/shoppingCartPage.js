export class ShoppingCartPage {

    getNameProduct(productName) {
        return cy.xpath(`//*[@name="${productName}"]`);

    };

    getPriceProduct(productName) {
        return cy.contains(productName).siblings('#productPrice');

    };

    showTotalPrice() {
        cy.xpath('//button[text()="Show total price"]').click();
    }

    totalPrice() {
        return cy.get('#price > b:nth-child(1)');
    }
}