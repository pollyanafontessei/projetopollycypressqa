/// <reference types="cypress" />

// tudo que tiver dentro do export pode ser chamado
export default {
    acessarCadastroUsuario () {
      cy.visit('/')
      .get('#top_header')
          
          cy.get('.fa-lock') // clicar em cadastro
          .click()
      
    }


}