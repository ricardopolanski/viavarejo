@Aplicabilidades @T1783
Feature: Analises de aplicabilidade do fluxo financeiro - RNCR-1783
    
    
    Scenario Outline: Teste de Aplicabilidade - <NOMECATEGORIA>
        Given que o operador abra um incidente novo com a categoria "<IDCATEGORIA>"
        And o pedido está com o status da restituição = Erro no Processamento
        And a forma de restituição é Ordem de pagamento
        Then deve encontrar o ID "<ID>"

    Examples:
|       NOMECATEGORIA                 | IDCATEGORIA	|        ID         |
|Preventivo > Retira                  |     2851    |Atraso no reembolso|
|Preventivo > Entrega                 |     1087    |Atraso no reembolso|
|Preventivo > Reversa (Coleta)        |     1091    |Atraso no reembolso|
|Preventivo > Separação de Pedidos    |     1092    |Atraso no reembolso|
|Preventivo > Crédito                 |     1086    |Atraso no reembolso|