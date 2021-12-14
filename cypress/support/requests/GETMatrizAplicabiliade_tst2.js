/* Método - endpoint - motivo {request} Extensão*/

/// <reference types="cypress"/>

function getAplicabilidade(param, idCategoria, idPedido, idEntrega){
    return cy.request({
                
        method: 'GET', 
        //url: `aplicabilidade?param.idUnidadeNegocio=${param}&param.idCategoria=${idCategoria}&param.idPedido=${idPedido}&param.idEntrega=${idEntrega}&param.habilitarLog=true`,
        url: `http://rightnow-hlg.novapontocom.com.br:85/integrador-tst2/api/v1.0/aplicabilidade?param.idUnidadeNegocio=${param}&param.idCategoria=${idCategoria}&param.idPedido=${idPedido}&param.idEntrega=${idEntrega}&param.habilitarLog=true
        `,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic NzcwMDE2NTA0MjpDbm92YUAxMjM0'
        },
    })
}

/* function parametros(){
    const nomeAplicabilidade = 'AP24824'
    const idProduto = '2867'
    const nomeProduto = '500296962'
    const idEntrega = '50029696202'
} */

export { getAplicabilidade }