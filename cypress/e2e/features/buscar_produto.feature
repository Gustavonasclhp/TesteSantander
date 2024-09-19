Feature: Buscar e adicionar produto no carrinho

  Scenario: Realiar a busca de um produto e adicioná-lo ao carrinho

    Given que eu estou na página inicial
    When eu buscar por "headphone"
    And eu selecionar o produto "HP H2310 In-Ear Headset"
    And eu adicionar o produto no carrinho
    Then o produto deve ser adicionado ao carrinho com sucesso