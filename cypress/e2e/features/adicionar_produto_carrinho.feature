Feature: Validação dos produtos no carrinho

  Scenario: Validar os produtos no carrinho na tela de pagamento

    Given que um produto foi adicionado ao carrinho
    When eu acessar a tela de pagamento
    Then eu devo ver o produto "HP H2310 In-Ear Headset" na lista de produtos do carrinho
