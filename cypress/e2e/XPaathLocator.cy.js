describe ('Xpath',()=>{
    it('find no of products',() => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.xpath("//ul[@class='product_list grid row']").should('be.visible');
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 7);
    })

})