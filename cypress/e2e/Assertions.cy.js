


describe ('Xpath',()=>{
    it('fImplicits assertions ',() => {
        cy.visit("https://qa.engati.com/admin/login")

        //cy.url().should('include','qa.engati.com')
        //cy.url().should('eq','https://qa.engati.com/admin/login')
        //cy.url().should('contain','qa.engati')


        //cy.url().should('include','qa.engati.com')
        //.should('eq','https://qa.engati.com/admin/login')
        //.should('contain','qa.engati')
        // positive assertions 

        cy.url().should('include','qa.engati.com')
        .and('eq','https://qa.engati.com/admin/login')
        .and('contain','qa.engati')
        //negative assertions
        .and('not.contain','ejhbje')


    })

})