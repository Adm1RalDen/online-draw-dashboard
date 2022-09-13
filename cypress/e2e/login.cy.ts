describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visit login page', () => {
    cy.url().should('include', '/authorization')
  })

  it('Success login in app', () => {
    cy.url().should('include', '/authorization')
    cy.get('button').contains(/send/i).first().as('submitButton')
    cy.get('@submitButton').should('be.disabled')
    cy.get('input[type=email]').first().as('emailInput')
    cy.get('@emailInput')
      .type('yuraborisov19@gmail.com')
      .should('have.value', 'yuraborisov19@gmail.com')
    cy.get('input[type=password]').first().as('passwordInput')
    cy.get('@passwordInput').type('123456').should('have.value', '123456')
    cy.get('@submitButton').and('not.be.disabled')
    cy.get('@submitButton').click()
    cy.url().should('include', '/')
  })

  it('Failde login in app', () => {
    cy.url().should('include', '/authorization')
    cy.get('button').contains(/send/i).first().as('submitButton')
    cy.get('@submitButton').should('be.disabled')
    cy.get('input[type=email]').first().as('emailInput')
    cy.get('@emailInput')
      .type('yuraborisov19@gmail.com')
      .should('have.value', 'yuraborisov19@gmail.com')
    cy.get('input[type=password]').first().as('passwordInput')
    cy.get('@passwordInput').type('1234567').should('have.value', '1234567')
    cy.get('@submitButton').and('not.be.disabled')
    cy.get('@submitButton').click()
    cy.get('body').contains(/invalid password/i)
    cy.url().should('include', '/authorization')
  })

  it('Disabled Login Button', () => {
    cy.get('button').contains(/send/i).first().as('submitButton')
    cy.get('@submitButton').should('be.disabled')
    cy.get('input[type=email]').first().as('emailInput')
    cy.get('@emailInput').type('123456').should('have.value', '123456').blur()
    cy.get('@emailInput').should('have.css', 'border', '2px solid rgb(255, 0, 0)')
    cy.get('span').first().should('have.attr', 'title', 'Not valid email')
    cy.get('input[type=password]').first().as('passwordInput')
    cy.get('@passwordInput').type('123456').should('have.value', '123456').blur()
    cy.get('@submitButton').should('be.disabled')
  })
})
