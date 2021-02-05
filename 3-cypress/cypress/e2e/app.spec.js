import mockData from '../db/data.json';

describe('movies', () => {
  it('display movies', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://sometimes-maybe-flaky-api.gdshive.io',
      status: 200,
      response: mockData,
    })
    cy.visit('/')
    cy.get(':nth-child(1) > .card-body > .btn').click()
    cy.url().should('include', `${Cypress.config().baseUrl}/movie/`)
    cy.get('.card-title').should('have.text', 'Deadpool')
  })
}) 
