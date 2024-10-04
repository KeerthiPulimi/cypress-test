
describe('My First Test', () => {


    it('verify title', () => {
       cy.visit("https://qa.engati.com/admin/login")
       cy.title().should('eq','Portal')
    }) 

    it('test1-negative', () => {
        cy.visit("https://qa.engati.com/admin/login")
        cy.title().should('eq','engatiii')
     }) 
  }) 