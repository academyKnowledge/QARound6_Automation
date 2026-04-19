/// <reference types="cypress"/>
describe('Add product to cart', () => {
  
    before(()=>{
        // run the code once before all test cases
        // cy.fixture("UserDemoWebShop").then((data)=>{
           cy.loginToDemoWebShop()
        // })
       
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

    after(()=>{
     // run once after finish execute all test cases 
    cy.get('.ico-cart').first().click()
     cy.get('[name=removefromcart]').check()
     cy.get('.update-cart-button').click()

    // cy.get('[name=removefromcart]').invoke('val').then((value)=>{
    //     cy.log(value)
    //     // cy.request({method: 'POST', url:'https://demowebshop.tricentis.com/cart',form: true, body:{removefromcart:value , itemquantity:1}})
    // })
    })

    //6595121

    afterEach(()=>{
    // run after finish execute each test case 
    })

});