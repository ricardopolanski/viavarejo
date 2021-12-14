import * as getMatriz from '../../requests/GETMatrizAplicabiliade_tst2'

const idUnidadeNegocio= '8'
//const idCategoria = '2851'
const idPedido = '304258681'
const idEntrega = '30425868102'




Given(/^que o operador crie um protocolo novo com a categoria "([^"]*)"$/, () => {
	
});

And(/^o pedido tenha sido pago com CDC e boleto$/, () => {
	return true;
});

And(/^o status seja Cancelado e ponto de controle = DVC$/, () => {
	return true;
});


Then(/^o protocolo deve encontrar o ID "([^"]*)" para a "([^"]*)"$/, (ID, idCategoria) => {
	getMatriz.getAplicabilidade(idUnidadeNegocio, idCategoria, idPedido, idEntrega).should((response) =>{
        expect(response.status).to.eq(200);
        
        //expect(response.body.nomeAplicabilidade).to.eq('AP24824');
        //expect(response.body.idProduto).to.eq(3497);
        cy.log(response.body.nomeProduto)
        cy.log(ID)
        cy.log(idCategoria)
        expect(response.body.nomeProduto).to.eq(ID)
    })
});
