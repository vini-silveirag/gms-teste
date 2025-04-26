/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Vinícius')
    cy.get('#signup-lastname').type('Silveira')
    cy.get('#signup-email').type('teste99@teste.com')
    cy.get('#signup-phone').type('198564789')
    cy.get('#signup-password').type('Teste@teste1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})