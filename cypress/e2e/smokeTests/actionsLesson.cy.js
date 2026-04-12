/// <reference types="cypress"/>
describe('Actions Lesson', () => {
    it('Click command', () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        cy.get("#btn1").click()
        cy.get("#btn2").click("top")
        cy.get(".btn").click({multiple:true})
        cy.get("#btn0").click({force:true})
    });
    it('type command', () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        cy.get("[placeholder='Type your name']").type("Razan{home}{del}")
        cy.get("[name=input_0]").type("test",{force:true,delay:1000})
        cy.get("#myTextField").type("{pageDown}")
        cy.pause()
        cy.get("#testField").type("{pageUp}")
    });

    it('enter seq', () => {
        cy.visit("/")
        cy.get("[data-test=username]").type("standard_user")
        cy.get("#password").type("secret_sauce{enter}")
    });

    it.only('select command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("Jordan") // select by visible text 
        cy.get("#country").select("egypt_country") // select by value 
        cy.get("#country").select(0) // select by index 
        cy.get("#country").find("option").first().should("be.selected")
    });

    it('check and uncheck commands', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#Banana").check()
        cy.get("[name=snack4]").check().uncheck()
        cy.get("#Banana").uncheck()
        cy.get("[type=checkbox]").check(['Banana','Fries','le'])
        cy.get("#checkMe").check({force:true})

        cy.get("#developer").check()
        cy.get("#tester").check()
        cy.reload()
    });

    it('focus and blur commands', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#myTextField").focus().blur()

    });

    it('trigger elements command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#trigger_btn").trigger("mouseover")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseleave")
        cy.get("#btn1").trigger("mousedown")  // = click()
    });

    it('double click command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#dbClick").dblclick()
    });
});