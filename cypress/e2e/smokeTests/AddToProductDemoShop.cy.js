/// <reference types="cypress"/>
describe('Add product to cart', () => {
  
    before(()=>{
        // run the code once before all test cases
        cy.visit("https://demowebshop.tricentis.com/login")
        cy.get("#Email").type("eng.razanbalatiah96@gmail.com")
        cy.get("#Password").type("test@123")
        cy.get(".login-button").click()
    })

    // beforeEach(()=>{
    //     // run the code before each test case
    //     cy.visit("https://demowebshop.tricentis.com/login")
    // })

    it('Validate that the user can add a product to the cart successfully', () => {
        cy.contains('a','Books').click()
        cy.get(".item-box").contains('a','Computing and Internet').parents('.details').find("input[value='Add to cart']").click()
        cy.get(".cart-qty").should('contain','1')
        cy.get(".content").should('be.visible').and('contain','The product has been added')

    });

    // it('TC2', () => {
        
    // });

    // it('TC3', () => {
        
    // });


});