describe('template spec', () => {
  it('passes', () => {
    cy.visit('/contact')
    cy.get('#name').type("Vivi Veras")
    cy.get('#email').type("dveras2310@gmail.com")
    cy.get('#message').type("Testing contact by Cypress")
    cy.get('.btn').click()
  })
})
