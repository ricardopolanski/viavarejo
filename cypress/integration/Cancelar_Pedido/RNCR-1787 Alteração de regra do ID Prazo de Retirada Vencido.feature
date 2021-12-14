Feature: Feature name



    Feature Description
        Eu enquanto gestão de clientes,
        Gostaria que os protocolos com entrega sem status estorno encontrassem o ID: Reativo\Retira\Prazo de Retirada Vencido
        Para os protocolos não ficarem na fila erro validador
        
        Scenario: Scenario name
            Given que o operador crie um protocolo novo com a categoria Informação/Financeiro/Informações sobre devolução de valores*
            And Start to type your And step here o pedido tenha 2 SKUs onde 1 sku esteja cancelado e o operador selecione o SKU que NÃO está cancelado
            And Start to type your And step here a entrega selecionada esteja no ponto de controle PRV
            And o tipo de entrega seja Retira Loja
            Then o protocolo deve encontrar o ID:  Reativo\Retira\Prazo de Retirada Vencido