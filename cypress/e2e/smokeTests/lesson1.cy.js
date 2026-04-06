/// <reference types="cypress"/>
describe("Check login functionality",()=>{
    it("Validate that the user can login successfully using valid email and valid password",()=>{
        cy.visit("/")
        cy.get("[data-test=username]").type("standard_user")
        cy.get("#password").type("secret_sauce")
        // cy.get("[name=login-button]").click()
        // // cy.get(".classname")
        // cy.get("button")
        cy.contains("Login").click()
        
        // cy.contains("h4","user")
        cy.contains("Sauce Labs Backpack").next()
        cy.contains("div","Sauce Labs Backpack")

        // cy.get("#react-burger-menu-btn").click()
        cy.get(".menu-item").first()
        cy.get(".menu-item").last()
        cy.get(".menu-item").eq(2).prev()
        cy.get(".menu-item").eq(1).next()


        cy.get("a").filter(".menu-item")
        cy.get("a").not(".menu-item")

        cy.get(".pricebar").first().find("button").click()

        cy.get(".inventory_item_price").first().parent()
        cy.get(".inventory_item_price").first().parent(".pricebar")

        cy.get(".inventory_item_price").first().parents(".inventory_item")
        cy.get(".inventory_item_price").first().parents()

        cy.get(".inventory_item").first().children()

        
    })

    // it("Validate that the user cannot login successfully using valid email and invalid password",()=>{
    //     cy.visit("/")
    // }) 
    
    // how to make comment for multi lines once
    // ctrl + ظ

    /** 
     * 1. multi line of comments 
     * 2.
     * 3.
     * 4.
     * 
     */
  
})