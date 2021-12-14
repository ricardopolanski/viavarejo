/* All page elements */

class Elements {

    /* Insere CEP */
    cepField = () => {
        return 'input#Cep'
    }
    /* Clica botão consultar cep */
    buttonConsultaCep = () => {
        return 'input[id="btnCalcularFrete"]'
    }

    /* Insere email */
    inputEmail = () => {
        return "input#Email.iEmail"
    }
    /* Insere password */
    inputPassword = () => {
        return "input#Senha.iPassword"
    }

    /* Clica no botão Continuar da tela de login para logar no sistema */
    buttonContinuar = () => {
        return "input#btnClienteLogin.bt.btLogin.lf_primaryBtn"
    }

    buttonConcluirCompra = () => {
        return 'input[data-id="btnFinalizar"]'
    }

    buttonResumoCompra = () => {
        return '[id="btSelecionarPagamento"]'
    }

    /* Clica no botão Concluir Compra após tela de login */
    buttonConcluir = () => {
        return 'a[data-id="btnComprar"]'
    }
    
    /* Insere valor de vale */
    fiedlVale = () => {
        return 'input[id="valorVale"]'
    }

    /* Clica no botão continuar para utilizar vale */
    buttonConcluirVale = () => {
        return 'button[data-id="btnContinuar"]'
    }

    /* Selecionar forma de pagamento Boleto */
    buttonBoleto = () => {
        return '[data-id="boleto"]'
    }
    
}

export default Elements