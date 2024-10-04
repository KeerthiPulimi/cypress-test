

describe('Css locator', () => {


    it("css locators" , () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        //cy.get("#search_query_top").type("T-Shirts") -id tag 
        //cy.get(".search_query").type("T-Shirts") -class tag
        //cy.get("[name='search_query']").type("T-Shirts") -attribute tag
        
        cy.get("input.search_query[name='search_query']").type("T-Shirts") // class and attribute
        
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")

    })

})