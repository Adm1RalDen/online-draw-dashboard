describe('Home testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('include', '/authorization')
    cy.get('button').contains(/send/i).first().as('submitButton')
    cy.get('input[type=email]').first().as('emailInput')
    cy.get('input[type=password]').first().as('passwordInput')
    cy.get('@emailInput').type('yuraborisov19@gmail.com')
    cy.get('@passwordInput').type('123456')
    cy.get('@submitButton').click()
    cy.url().should('include', '/')
  })

  it('Access visit', () => {
    cy.url().should('include', '/')
    cy.intercept('/api/user/*').as('getUser')
    cy.wait('@getUser')
    cy.get('#root').children().get('section>div').children().should('have.length', 5)
  })

  it('Logout', () => {
    cy.intercept('/api/user/*').as('getUser')
    cy.wait('@getUser')
    cy.get('#root')
      .find('header')
      .contains(/logout/i)
      .click()
    cy.url().should('include', '/authorization')
  })

  it.only('User cabinet', () => {
    cy.intercept('/api/user/*').as('getUser')
    cy.wait('@getUser')
    cy.get('#root').find('header').contains(/link/i).click()
    cy.url().should('include', '/cabinet')
    cy.get('button').contains(/edit/i).click()
    cy.get('input[type=text]').should('have.attr', 'name')
  })
})
