const { describe } = require("mocha")


describe ('Xpath',()=>{
    it('fImplicits assertions ',() => {
        cy.visit("https://qa.engati.com/admin/login")

        cy.url().should('include','qa.engati.com')
        cy.url().should('eq','https://qa.engati.com/admin/login')
        cy.url().should('contain','qa.engati')

    })

})