/// <reference types="cypress" />

describe('US-015-Funcionalidades: Recomendações', () => {
  it('Deve verificar as recomendações', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations-section').should('exist') , ('Recomendações do dia')
    cy.get(':nth-child(2) > img').click()
  })
})