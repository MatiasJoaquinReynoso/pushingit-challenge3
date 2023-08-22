/// <reference types="cypress" />
import { LoginPage } from "../support/Pages/loginPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage.js";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";

describe('Pre Entrega', () => {

    //POM Const//
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    //Fixtures//
    let product
    before('Fixtures', () => {
        //cy.fixture('login').then(login => {
        //loginCredentials = login; (No uso este fixture porque decidi usar variables de entorno para user y pw)

        cy.fixture('products').then(products => {
        product = products;
        });
    });

    beforeEach('Before Each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        loginPage.escribirUsuario(Cypress.env('username'));
        loginPage.escribirContraseña(Cypress.env('password'));
        loginPage.clickLoginButton();
    })

    it('Agregar items y verificar su valor', () => {
        homePage.clickOnlineShop();
        productsPage.addProduct(product.ProductOne.name)
        productsPage.clickCloseModal();
        productsPage.addProduct(product.ProductTwo.name)
        productsPage.clickCloseModal();
        productsPage.goTocart();
        shoppingCartPage.getNameProduct(product.ProductOne.name).should('exist')
        shoppingCartPage.getNameProduct(product.ProductTwo.name).should('exist')
        shoppingCartPage.getPriceProduct(product.ProductOne.name).should('have.text', `$${product.ProductOne.price}`);
        shoppingCartPage.getPriceProduct(product.ProductTwo.name).should('have.text', `$${product.ProductTwo.price}`);
        shoppingCartPage.showTotalPrice();
        shoppingCartPage.totalPrice().should('have.text', `${product.ProductOne.price + product.ProductTwo.price}`)
    })
});