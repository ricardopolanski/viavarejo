@Aplicabilidades
Feature: Alteração no ponto de controle _RPA - RNCR-1802
    
    @T1802
    Scenario Outline: Teste de Aplicabilidade - <NOMECATEGORIA>
        Given que o operador abra um incidente novo com a categoria "<IDCATEGORIA>"
        And o pedido está com o status da restituição = Erro no Processamento
        And a forma de restituição é Ordem de pagamento
        Then deverá encontrar o ID "<ID>" para a "<IDCATEGORIA>"

    Examples:
|                                 NOMECATEGORIA                                     | IDCATEGORIA|              ID             |
|Solicitação > Troca ou cancelamento > Arrependimento		                        |     3632   |Pedido cancelado (Sistêmico)*|
|Solicitação > Reversa > (Coleta)	Código de postagem*                             |     3594   |Pedido cancelado (Sistêmico)*|
|Solicitação > Financeiro >	Comprovante de restituição*                             |     3593   |Pedido cancelado (Sistêmico)*|
|Reclamação > Entrega >	Desconhece entrega                                          |     2280   |Pedido cancelado (Sistêmico)*|
|Informação > Financeiro >	Informações sobre devolução de valores*                 |     3588   |Pedido cancelado (Sistêmico)*|
|Informação > Entrega >	Informações sobre a entrega*                                |     3587   |Pedido cancelado (Sistêmico)*|
|Reclamação > Análise de crédito e fraude* > Reclamação sobre análise de crédito*   |     3590   |Pedido cancelado (Sistêmico)*|
|Reclamação > Entrega >	Reclamação sobre atraso*                                    |     3592   |Pedido cancelado (Sistêmico)*|
|Reclamação > Financeiro > Reclamação sobre atraso na devolução de valores*         |     1417   |Pedido cancelado (Sistêmico)*|
|Informação > Reversa (Coleta) > Informações sobre a coleta*                        |     3598   |Pedido cancelado (Sistêmico)*|
|Informação > Análise de crédito e fraude* > Informações sobre a análise de crédito*|     3586   |Pedido cancelado (Sistêmico)*|
