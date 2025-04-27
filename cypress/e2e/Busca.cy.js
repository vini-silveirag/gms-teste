/// <reference types="cypress" />

describe('US-001-Funcionalidades: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })
});

it('Deve buscar filmes com sucesso', () => {
  cy.get('#search-input').type('Inception')
  cy.get('#search-button').click()
  cy.get('#results-section').should('contain', 'Inceptiton')
});

it('Deve buscar filmes com sucesso de uma lista', () => {
  cy.fixture('Filmes').then((Filmes) =>{
    cy.get('#search-input').type(Filmes[1].título)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', Filmes[1].título)
  })
});