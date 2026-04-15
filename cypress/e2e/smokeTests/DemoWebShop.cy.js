/// <reference types="cypress"/>
describe('Practices', () => {

    const random = Date.now().toString().slice(-3);
    const newUser = {
    firstName:`Razan${random}`,
    lastName:`Test_${random}`,
    email: `CypressTest_${random}@mail.com`,
    password:'test@123',
    confirmPassword:'test@123'
    };
    it('Verify that all fields are visible in register form', () => {
        cy.visit("https://demowebshop.tricentis.com/register")

        cy.get("h1").should("be.visible")
        cy.contains("Your Personal Details").should("be.visible")
        cy.contains("Your Password").should("be.visible")
        cy.contains("Gender:").should('be.visible')
        
        cy.get("label[for=gender-male]").should("be.visible")
        cy.get("label[for=gender-female]").should("be.visible")
        cy.get("#gender-male").should('be.visible')
        cy.get("#gender-female").should('be.visible')

        cy.get("label[for=FirstName]").should("be.visible")
        cy.get("label[for=LastName]").should("be.visible")
        cy.get("label[for=Email]").should("be.visible")
        cy.get("label[for=Password]").should("be.visible")
        cy.get("label[for=ConfirmPassword]").should("be.visible")

        cy.get("#FirstName").should("be.visible")
        cy.get("#LastName").should("be.visible")
        cy.get("#Email").should("be.visible")
        cy.get("#Password").should("be.visible")
        cy.get("#ConfirmPassword").should("be.visible")

        cy.get("#register-button").should("be.visible")
        cy.get(".required").should("be.visible")
    });

    it.only('Validate that the user can create new account successfully', () => {
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get("#gender-female").check()
        cy.get("#FirstName").type(newUser.firstName)
        cy.get("#LastName").type(newUser.lastName)
        cy.get("#Email").type(newUser.email)
        cy.get("#Password").type(newUser.password)
        cy.get("#ConfirmPassword").type(newUser.confirmPassword)
        cy.get("#register-button").click()
        
        cy.get(".result").should('be.visible').and('contain','Your registration completed')
        cy.get("a.account").should('contain',newUser.email)
        cy.url().should('eq','https://demowebshop.tricentis.com/registerresult/1')
        cy.get(".ico-login").should("not.exist")
        cy.get(".ico-logout").should("be.visible")

    });

});