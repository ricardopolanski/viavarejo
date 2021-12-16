import {
    expect
} from "chai";


Given(/^que seja acessado o LF Cancelamento$/, () => {
    cy.viewport(1360, 768)
    cy.visit("http://rightnow-sit.viavarejo.com.br:8084/lookfeel-restituicao-tst3/cancelamento?idContato=8515177&idIncidenteOrigem=27651250&unidadeNegocio=1&idPedido=500579621&idEntrega=50057962101&origem=AddIn&skus=&idCategoria=3632&indicadorRestituicaoTotalProRata=False")
    cy.get('button[class="btn lf-button-padrao next-step"]').should('be.visible').first().click()
});

Then(/^selecione o produto e a quantidade$/, () => {
    cy.get('input[type="checkbox"]').should('be.visible').click()
    cy.get('select[class="quantidade-sku form-control input-xs obrigatorio"]').should('be.visible').select(1)

    cy.screenshot('Seleciona produto para cancelar', {overwrite: true})
    cy.get('[class="tab-pane active"][id^="step"]', {
        timeout: 12000
    }).find('.btn.lf-button-padrao.next-step').click({
        force: true
    })
    expect(cy.get('section[id="restituicaoincentivovale"]', {
        timeout: 6000000
    }).should('be.visible'))
    
});










/* Given(/^que seja acessado o LF Cancelamento$/, () => {
    cy.viewport('macbook-15')
    cy.visit("http://rightnow-sit.viavarejo.com.br:8084/lookfeel-restituicao-tst3/cancelamento?idContato=8515177&idIncidenteOrigem=27651250&unidadeNegocio=1&idPedido=500579621&idEntrega=50057962101&origem=AddIn&skus=&idCategoria=3632&indicadorRestituicaoTotalProRata=False")
    cy.get('button[class="btn lf-button-padrao next-step"]').should('be.visible').first().click()
    cy.get('input[type="checkbox"]').should('be.visible').click()
    cy.get('select[class="quantidade-sku form-control input-xs obrigatorio"]').should('be.visible').select(1)

    cy.get('[class="tab-pane active"][id^="step"]', {
        timeout: 12000
    }).find('.btn.lf-button-padrao.next-step').click({
        force: true
    })
    expect(cy.get('section[id="restituicaoincentivovale"]', {
        timeout: 6000000
    }).should('be.visible')) */

Then(/^selecione Restituição Simpes$/, () => {

    /* Verifica se existe botão Restituição Simples */
    expect(cy.get('button[onclick="restituicaoSimplesMaisOpcoes()"]', {
        timeout: 30000
    }).contains('Restituição Simples').should('be.visible'))

    /* Verifica se existe botão Restituição Mista */
    //expect(cy.get('button[onclick="restituicaoMistaMaisOpcoes()"]').contains('Restituição Mista').should('not.exist'))

    /* Verifica se existe botão ??? */
    expect(cy.get('button[class="bgwhite border radius flag-color margin pad flex frow fcenter grow"]', {
        timeout: 30000
    }).contains('Oferecer Vale Multicanal').should('be.visible'))
    cy.wait(2000)
    //cy.screenshot('Modos de Restituições', {overwrite: true})
    

    /* Seleciona Restituição Simples */
    cy.get('button[onclick="restituicaoSimplesMaisOpcoes()"]', {
        timeout: 30000
    }).click({
        force: true
    })
});

Then(/^selecione Crédito em Conta Corrente$/, () => {

    /* Verifica se os botões tem o mesmo tamanho */

    /*         cy.get('label[class="hideradio slick-slide slick-active"]').contains('Crédito em Conta')
                .invoke('height').should('be.eq', 64)

            cy.get('label[class="hideradio slick-slide slick-active"]').contains('Ordem de Pagamento')
                .invoke('height').should('be.eq', 64)

            cy.get('label[class="hideradio slick-slide slick-active"]').contains('Crédito em Conta Poupança').invoke('height').should('be.eq', 64)

            cy.get('label[class="hideradio slick-slide slick-current slick-active"]').contains('Oferecer Vale Multicanal').invoke('height').should('be.eq', 64) */



    /* Seleciona Crédito em Conta Corrente*/
    cy.wait(2000)
    
    cy.get('label[class="hideradio slick-slide slick-active"]').contains('Crédito em Conta').click()
    cy.wait(2000)
    cy.screenshot('Tela Restituição Conta Corrente', {overwrite: true})
});

Then(/^selecione um conta do Histórico de Dados Bancários com Restituição Confirmada$/, () => {


    /* Verifica se há histórico de restituição confirmada */
    expect(cy.get('input[name="dadosBancarios"]').should('be.visible'))

    cy.get('strong[data-original-title]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    cy.get('td[name="agencia+1"]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    cy.get('td[name="conta+1"]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    /* Seleciona banco do histórico de restituições confirmadas */
    cy.get('input[id="1"]').first().click()


    /* Seleciona conta do dropdown - force temporário*/
    cy.get('fieldset[id="banco-0"]')
        .find('.btn.dropdown-toggle.bs-placeholder.btn-default').click()

    cy.get('li[data-original-index="1"]').first().contains('341 - BANCO ITAU S/A').click()


    /* Verifica se os campos foram preenchidos corretamente */
    /*     cy.get('fieldset[id="banco-0"]')
            .find('div[class="btn-group bootstrap-select form-control obrigatorio"]')
            .should('contain', '341 - BANCO ITAU S/A') */


    /* Verifica se os dados preenchidos são os mesmos da conta selecionada do histórico de restituições confirmadas */
    cy.get('strong[data-toggle="tooltip"]').first().invoke('text').then((text) => {
        cy.get('div[class="btn-group bootstrap-select form-control obrigatorio"]')
            .should('contain', text)
    })
    cy.get('input[name="agencia"]').first().should('have.value', '4534')
    cy.get('input[name="conta"]').first().should('have.value', '0272')
    cy.get('input[name="digito"]').first().should('be.empty')
    cy.wait(5000)
    cy.screenshot({overwrite: true})

});

When(/^clicar em Continuar$/, () => {
    cy.get('[class="tab-pane active"][id="step3"]', {
        timeout: 12000
    }).find('.btn.lf-button-padrao.next-step').click({
        force: true
    })
    cy.get('#divDevolucao', {
        timeout: 5000
    }).should('be.visible')
    //cy.screenshot({overwrite: true})
});

When(/^inserir os dados obrigatórios e clicar em Continuar$/, () => {
    return true;
});

Then(/^será exibido os dados referente ao cancelamento$/, () => {
    return true;
});

When(/^clicar em Finalizar$/, () => {
    return true;
});

Then(/^o pedido será cancelado$/, () => {
    return true;
});