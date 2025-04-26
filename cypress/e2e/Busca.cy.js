/// <reference types="cypress" />

describe('US-001-Funcionalidades: Busca', () => {
  it('Deve buscar os filmes', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Teste')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'Filmes encontrados')
  })
})