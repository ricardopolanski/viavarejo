import Elements from "../elements/elements"
const elements = new Elements

class criarPedidosBoleto {
    accessSite(webSite) {
        cy.viewport('macbook-13')
        cy.visit(webSite)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        //expect(webSite).to.eq("https://carrinho.pontofriointegracaooffline.net/?idSku=3614060&idLojista=10497")
    }

    insertCep(cepField) {
        cy.get(elements.cepField()).type(cepField);
        cy.get(elements.buttonConsultaCep()).should('be.visible').click()
    }

    login(email, senha) {
        cy.get(elements.inputEmail()).type(email);
        cy.get(elements.inputPassword()).type(senha)
    }


    buttonContinuar() {
        cy.get(elements.buttonContinuar(), {
            timeout: 30000
        }).should('be.visible').click()

        expect(cy.url().should('include', 'endereco'))
        //cy.get(elements.buttonConcluir()).should('be.visible').click()
        cy.wait(10000)

        cy.get(elements.buttonResumoCompra()).click()

        cy.get(elements.buttonConcluirVale()).should('be.visible', {
            timeout: 30000
        }).first().click()
        cy.wait(10000)

        cy.get(elements.buttonBoleto(), {
            timeout: 30000
        }).should('be.visible').click()

        cy.get(elements.buttonConcluirCompra()).should('be.visible').first().click()


        cy.wait(60000)
        cy.url().should('contains', '/CompraFinalizada', {
            timeout: 90000
        })
        cy.url().then(url => {
            const currentURL = url.split('/')
            const pedido = currentURL[5]
            cy.log(pedido)
        });
    }

    buttonConcluir() {
        cy.wait(10000)
        cy.get(elements.buttonConcluir()).should('be.visible').first().click()
        expect(cy.url().should('include', 'Checkout#login'))
    }

}

export default criarPedidosBoleto