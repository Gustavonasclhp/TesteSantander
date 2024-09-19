import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('que um produto foi adicionado ao carrinho',() => {
    cy.visit('/');
    cy.get('#menuSearch').click();

    cy.get('#autoComplete').type('headphones');

    cy.get('.autoComplete').contains('headphones').click();
    cy.contains('HP H2310 In-Ear Headset').click();

    cy.get('button[name="save_to_cart"]').click();
    cy.get('#shoppingCartLink').click();
});

When('eu acessar a tela de pagamento',() => {
    cy.get('#shoppingCartLink').click();
});

Then('eu devo ver o produto {string} na lista de produtos do carrinho',(produto) => {
    cy.get('.cart').should('contain', produto);
});