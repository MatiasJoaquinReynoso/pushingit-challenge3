export class HomePage {
    constructor() {
        this.shopLink = "//*[@id='onlineshoplink']";
    };

    clickOnlineShop() {
        cy.xpath(this.shopLink).click();
    }
};