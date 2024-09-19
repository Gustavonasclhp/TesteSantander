import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página inicial',() => {
    cy.visit('/');
});

When('eu buscar por {string}',(produto) => {
    cy.get('#menuSearch').click();
    cy.get('#autoComplete').type(produto);

    cy.get('.autoComplete').contains(produto).click();
});

When('eu selecionar o produto {string}',(produto) => {
    cy.contains(produto).click();
})

When('eu adicionar o produto no carrinho',() => {
    cy.get('button[name="save_to_cart"]').click();
});

Then('o produto deve ser adicionado ao carrinho com sucesso',() => {
    cy.get('#shoppingCartLink').click();
    cy.get('.cart').should('contain', 'HP H2310 In-Ear Headset');
});