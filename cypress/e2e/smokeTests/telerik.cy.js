/// <reference types="cypress"/>
describe('Selectors in Telerik', () => {
    it('Find Best Selectors', () => {
        cy.visit("https://www.telerik.com/support/demos")
        cy.contains("h1","Demos")
        cy.get(".NavAlt-anchor").eq(3)
        cy.get("a[title=Search]").last()
        cy.get("#mobile")
        cy.get("[alt=Google-play-icon]")
        cy.get(".TK-Footer-List-Social").first().children()
        cy.get(".TK-Footer-List-Social").first().find("*").filter("li") 
    });
});