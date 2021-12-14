/* global Given, Then, When */

import PageObjects from "../pageObjects/pageObjects"
const pageObjects = new PageObjects



Given(/^que o usuário acesso o website "([^"]*)"$/, (webSite) => {
	pageObjects.accessSite('https://carrinho.pontofriointegracaooffline.net/?idSku=2532525')
});

Then(/^insira o CEP "([^"]*)"$/, (cepField) => {
	pageObjects.insertCep(cepField)
});

Then(/^clique no botão Concluir Compra$/, () => {
	pageObjects.buttonConcluir()
});

Then(/^insira o usuário "([^"]*)" e senha "([^"]*)"$/, (email,senha) => {
	pageObjects.login(email, senha)
});

Then(/^clique no botão Continuar$/, () => {
	pageObjects.buttonContinuar()
});

Then(/^clique no botão Concluir$/, () => {
    //pageObjects.buttonConcluirCompra()
	
});

