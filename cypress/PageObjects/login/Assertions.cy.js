class loginAssertions {
    checkURLIsEqual(){
        cy.url().should('eq','https://demowebshop.tricentis.com/')
        return this
    }

    checkAccountIsContainEmail(email){
        cy.get(".account").should('contain',email)
        return this
    }
}
export default loginAssertions