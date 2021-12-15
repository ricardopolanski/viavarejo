/* global Given, Then, When */

import * as getMatriz from '../../requests/GETMatrizAplicabiliade_tst3'
import * as getPedidos from '../../requests/Pedidos-Jtrach'

const param= '1'
const idCategoria = '2851'
const idPedido = 500296962
const idEntrega = 50029696202

Given(/^que o operador abra um incidente novo com a categoria "([^"]*)"$/, (args1) => {
	
	return true;
});

And(/^o pedido está com o status da restituição = Erro no Processamento$/, () => {
	return true;
});

And(/^a forma de restituição é Ordem de pagamento$/, () => {
	return true;
});

Then(/^deve encontrar o ID "([^"]*)"$/, (ID) => {

    getPedidos.getPedidos(idPedido).should((response) =>{
        expect(response.status).to.eq(200);   
/*          expect(response.body.trackings).to.eq("CAN") 
        cy.log(response.body.pedido.entregas.trackings)
        expect(response.body.pedido.idPedido).to.eq(idPedido) */
    })

	getMatriz.getAplicabilidade(param, idCategoria, idPedido, idEntrega).should((response) =>{
        expect(response.status).to.eq(200);
        cy.log(response.body.DataHora)
        
        expect(response.body.nomeAplicabilidade).to.eq('AP24824');
        expect(response.body.idProduto).to.eq(2867);
        expect(response.body.nomeProduto).to.eq(ID)
    })
});