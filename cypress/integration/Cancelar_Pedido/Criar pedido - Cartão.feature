Feature: Criar pedido pago com cartão de crédito



    Scenario: Criar 1 pedido pago com cartão de crédito
        Given que o usuário acesso o website "https://carrinho.pontofriointegracaooffline.net/?idSku=3614060&idLojista=10497"
        And insira o CEP "05078-040"
        And clique no botão Concluir Compra
        And insira o usuário "isa.manfredini-ext@viavarejo.com.br" e senha "Isa@1234"
        And clique no botão Continuar
        And clique no botão Concluir


