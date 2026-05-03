import { Given, When, Then , Before , After } from "@badeball/cypress-cucumber-preprocessor"; 
import loginActions from "../../../PageObjects/login/Actions.cy";
import loginAssertions from "../../../PageObjects/login/Assertions.cy";

// Before({tags:"@TC-1234"},()=>{
//     cy.log("Hello World")
// })
// Before({tags:"@TC-1234 or @TC-0000"},()=>{
//     cy.log("Hello World")
// })

const loginAc = new loginActions();
const loginAss = new loginAssertions();

Before({tags:"@test and @TC-1234"},()=>{
    cy.log("Hello World")
})

Given("The user open the website",()=>{
   loginAc.openLoginPage()
})

When("The user types {string} in email input field",(email)=>{
    loginAc.typeEmailInEmailInputField(email)
})

When("The user types {word} in password input field",(password)=>{
    loginAc.typePasswordInPasswordInputField(password)
})

When("The user clicks on login button",()=>{
    loginAc.clickOnLoginButton();
})

Then("{string} should be login successfully and redirected to home page",(email)=>{
    loginAss.checkURLIsEqual().checkAccountIsContainEmail(email)
})