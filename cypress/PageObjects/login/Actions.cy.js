class loginActions{

    openLoginPage(){
        cy.visit("https://demowebshop.tricentis.com/login")
        return this;
    }

    typeEmailInEmailInputField(email){
        cy.get("#Email").type(email)
        return this
    }

    typePasswordInPasswordInputField(password){
        cy.get("#Password").type(password)
        return this
    }

    clickOnLoginButton(){
        cy.get(".login-button").click()
        return this;
    }
}
export default loginActions