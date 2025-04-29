/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/') // Visita a página antes de cada teste
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.PreencherCadastro('Vinicius', 'Silveira', email, '11999999999', 'Teste@!teste1234')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.PreencherCadastro('Vinicius1', 'Silveira', 'teste@teste.com', '11999999999', 'Teste@!teste1234')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
});