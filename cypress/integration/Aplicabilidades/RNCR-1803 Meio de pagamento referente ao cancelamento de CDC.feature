Feature: Analises de aplicabilidade do fluxo financeiro - RNCR-1783
    
    @TestCaseKey= 
    Scenario Outline: Teste de Aplicabilidade - <NOMECATEGORIA>
        Given que o operador crie um protocolo novo com a categoria "<IDCATEGORIA>"
        And o pedido tenha sido pago com CDC e boleto
        And o status seja Cancelado e ponto de controle = DVC
        Then o protocolo deve encontrar o ID "<ID>" para a "<IDCATEGORIA>"


Examples:
|                               NOMECATEGORIA                                       |   IDCATEGORIA	|           ID         |
|Reclamação > Financeiro > Reclamação sobre atraso na devolução de valores*         |       1417    |   Cancelamento CDC   |  
|Reclamação > Reversa (Coleta) > Transportador recusou coletar                      |       1456    |   Cancelamento CDC   |
|Reclamação > Financeiro > Cliente desconhece restituição                           |       1874    |   Cancelamento CDC   |
|Reclamação > Entrega > Desconhece entrega                                          |       2280    |   Cancelamento CDC   |
|Reclamação > Entrega > Divergência peça ou acessório                               |       2305    |   Cancelamento CDC   |
|Reclamação > Entrega > Embalagem vazia                                             |       2306    |   Cancelamento CDC   |
|Reclamação > Entrega > Volume duplicado                                            |       2307    |   Cancelamento CDC   |
|Reclamação > Entrega > Volume trocado                                              |       2308    |   Cancelamento CDC   |
|Reclamação > Entrega > Divergente vs Recebido                                      |       2744    |   Cancelamento CDC   |
|Reclamação > Entrega > Volume incompleto                                           |       2752    |   Cancelamento CDC   |
|Solicitação > Financeiro > Comprovante de cancelamento                             |       3485    |   Cancelamento CDC   |
|Informação > Análise de crédito e fraude* > Informações sobre a análise de crédito*|       3586    |   Cancelamento CDC   |
|Informação > Entrega > Informações sobre a entrega*                                |       3587    |   Cancelamento CDC   |
|Informação > Financeiro > Informações sobre devolução de valores*                  |       3588    |   Cancelamento CDC   |
|Informação > Reversa (Coleta) > Informações sobre a coleta*                        |       3589    |   Cancelamento CDC   |
|Reclamação > Análise de crédito e fraude* > Reclamação sobre análise de crédito*   |       3590    |   Cancelamento CDC   |
|Reclamação > Entrega > Reclamação sobre atraso*                                    |       3592    |   Cancelamento CDC   |
|Solicitação > Financeiro > Comprovante de restituição*                             |       3593    |   Cancelamento CDC   |
|Solicitação > Reversa (Coleta) > Código de postagem*                               |       3594    |   Cancelamento CDC   |
|Reclamação > Reversa (Coleta) > Reclamação sobre atraso*                           |       3595    |   Cancelamento CDC   |
|Solicitação > Troca ou Cancelamento* > Avaria*                                     |       3630    |   Cancelamento CDC   |
|Solicitação > Troca ou Cancelamento* > Defeito*                                    |       3631    |   Cancelamento CDC   |
|Solicitação > Troca ou Cancelamento* > Arrependimento*                             |       3632    |   Cancelamento CDC   |
|Preventivo lojista > Entrega > Ocorrência na Entrega                               |       3664    |   Cancelamento CDC   |