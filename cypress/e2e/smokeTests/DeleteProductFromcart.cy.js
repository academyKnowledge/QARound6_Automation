/// <reference types="cypress"/>
describe('Delete product from cart', () => {
        before(()=>{
            // login
           cy.loginToDemoWebShop()
           // add product to cart
           cy.request('POST','https://demowebshop.tricentis.com/addproducttocart/catalog/13/1/1')  
        })

        it('Validate that the user can delete a product from the cart', () => {
            cy.get('.ico-cart').first().click()
            cy.get('[name=removefromcart]').check()
            cy.get('.update-cart-button').click()
            cy.get(".cart-qty").should('contain','0')
            cy.get('.order-summary-content').should('contain','Your Shopping Cart is empty!')
    });
});