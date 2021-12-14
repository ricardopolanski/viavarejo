Feature: Realizar cancelamento do pedido



    
    Scenario: Cancelar pedido pago com boleto
        Given que seja acessado o LF Cancelamento
        And selecione o produto e a quantidade
        And selecione Restituição Simpes
        And selecione Crédito em Conta Corrente
        And selecione um conta do Histórico de Dados Bancários com Restituição Confirmada
        When clicar em Continuar
        And inserir os dados obrigatórios e clicar em Continuar
        Then será exibido os dados referente ao cancelamento
        When clicar em Finalizar
        Then o pedido será cancelado


        