const dataLocator = require ('../../datalocator/exercise/registerDataLocator')

class login {

    async verifLogin(textLogin){
        cy.get(dataLocator.locatorId.verifTextLogin)
        .should('have.text', textLogin)
    }

    async typeEmailLogin(inputEmailSignup){
        cy.get(dataLocator.locatorId.fieldEmailLogin).type(inputEmailSignup)
    } 

    async typePasswordLogin(inputPassword){
        cy.get(dataLocator.locatorId.fieldPasswordLogin).type(inputPassword)
    }

    async clickLoginButton(){
        cy.get(dataLocator.locatorId.loginButton).click()
    }


}

module.exports = login