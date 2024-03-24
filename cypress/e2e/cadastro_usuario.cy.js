
/// <reference types="cypress" />
 
import {faker} from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'

import cadastrousuario_page from '../support/pages/cadastrousuario_page'

describe('Cadastro',() => {

    beforeEach('Acessar cadastro de usuario',() => {
            commum_page.acessarCadastroUsuario()
    })
   
    it('Campo nome vazio', () => {
        //os comandos de testes 
        cadastrousuario_page.validarEmail('pollysfontesseixas@gmail.com')
        cadastrousuario_page.validarSenha(123456)
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemErro('O campo nome deve ser prenchido corretamente')


    })

    it('Campo e-mail vazio',() => {
        cadastrousuario_page.preencherNome(faker.name.fullName())
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemerroEmail('O campo e-mail deve ser prenchido corretamente')



    })
    it('Campo e-mail inválido',() => {
        cadastrousuario_page.preencherNome(faker.name.fullName())
        cadastrousuario_page.validarEmail(faker.name.firstName())
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarMensagemerroEmail('O campo e-mail deve ser prenchido corretamente')

       
    })

    it('Campo senha vazio',() => {
        cadastrousuario_page.preencherNome('Pollyana')
        cadastrousuario_page.validarEmail('pollysfontesseixas@gmail.com')
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarCamposenha('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha inválido',() => {
        cadastrousuario_page.preencherNome('Pollyana')
        cadastrousuario_page.validarEmail('pollysfontesseixas@gmail.com')
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.validarSenha(1234)
        cadastrousuario_page.validarCamposenha('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async() => {
        const name = await faker.name.fullName()
        //Atenção!Faker ao gerar muda o nome, como chamei paramentro, ele verifica se está na tela e não encontra, gerar uma constante e armazenar mesma variavel.
        //está tentando pegar o nome antes dele ser gerado- transformar a função async e antes faço await,quando função for de fato armazenada, continua o teste.
        cadastrousuario_page.preencherNome(faker.name.fullName())
        cadastrousuario_page.validarEmail('pollysfontesseixas@gmail.com')
        cadastrousuario_page.validarSenha(123456)
        cadastrousuario_page.clicarCadastrar()
        cadastrousuario_page.cadastroSucesso()
        
    })
})

