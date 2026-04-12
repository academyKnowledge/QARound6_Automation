/// <reference types="cypress"/>
describe('Assertions lesson', () => {
    it('should', () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        
        cy.get("[placeholder='Type your name']").type("Razan")
        cy.get("[type=number]").type('30')
        cy.get("#country").select("Palestine")
        cy.get("#Banana").check()
        cy.get("[name=snack4]").check()
        cy.get("h1").should('contain','QA Course')
        cy.get("#hiddenElement").should("exist").and("not.be.visible")
        cy.get("#hiddenElement").should("exist").and("be.hidden")
        cy.get("#btn1").should('be.visible')
        cy.get("#country").find("option").first().should("be.selected")
        cy.get("[type=number]").should('have.value','30')
        cy.get("#Banana").should("be.checked")
        cy.get("[name=snack4]").should("be.checked")

    });

    it('Validate that the user can open google website', () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        cy.get(".google").click()
        cy.url().should('eq','https://www.google.com/')
    });

    it.only('tc3', () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        cy.get('#testField').should('be.empty')
        cy.get("[placeholder='Type your name']").type("Razan")
        cy.get("#trigger_btn").trigger("mouseover")
        cy.get("#trigger_btn").should('have.css','background-color','rgb(255, 255, 0)').and('exist').and('be.visible').and('contain','Trigger')
       // cy.get("[placeholder='Type your name']").clear()
        cy.reload()
        cy.get("[placeholder='Type your name']").should('be.empty')
        cy.get("#empty").should('be.empty').and('be.visible')

    });
});