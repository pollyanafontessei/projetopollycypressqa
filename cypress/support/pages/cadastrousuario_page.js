

/// <reference types="cypress" />

// tudo que tiver dentro do export pode ser chamado


export default {
  clicarCadastrar() {
    cy.get('#btnRegister')
      .click()
  },
  validarMensagemErro() {
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')

  },

  preencherNome(nome) {
    cy.get('#user')
      .type(nome)

  },

  validarMensagemerroEmail() {
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  },
  validarEmail(email) {
    cy.get('#email')
      .type(email)


  },

  validarCamposenha() {
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  },

  validarEmail(email) {
    cy.get('#email')
      .type(email)


  },
  validarSenha(senha) {
    cy.get('#password')
      .type(senha)
    
  },
  cadastroSucesso(nome) {
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${nome} `)
  },


  //.then((element)=>{
  //expect (Element).to.be.visible
  //expect(element.text()). eq('O campo nome deve estar preenchido')
}

