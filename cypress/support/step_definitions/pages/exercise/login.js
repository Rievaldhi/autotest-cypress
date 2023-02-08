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

    async typeInvalidEmail(invalidEmail){
        cy.get(dataLocator.locatorId.fieldEmailLogin).type(invalidEmail)
    }

    async verifLoginFailed(textFailedLoginWarning){
        cy.get(dataLocator.locatorId.failedLoginWarning).type(textFailedLoginWarning)
    }

    async verifTextLogout(textLogout){
        cy.get(dataLocator.locatorId.linkTextLogout)
        .should('have.text', textLogout).wait(1000).click()
    }


}

module.exports = login