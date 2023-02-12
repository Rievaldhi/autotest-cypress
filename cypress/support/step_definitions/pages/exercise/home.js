const dataLocator = require ('../../datalocator/exercise/homeDataLocator')

class home {

    async scrollToFooter(){
        cy.get(dataLocator.locatorId.idFooter).scrollIntoView()
    }

    async verifSubsHome(textSubscription){
        cy.get(dataLocator.locatorId.fieldTextSubscription)
        .should('have.text', textSubscription)
    }

    async inputEmailSubs(emailSubs){
        cy.get(dataLocator.locatorId.fieldSubsEmail)
        .type(emailSubs)
    }

    async clickSubsEmailButton(){
        cy.get(dataLocator.locatorId.buttonSubscribe).click()
    }

    async verifSuccessSubs(successSubs){
        cy.get(dataLocator.locatorId.alertSuccessSubs)
        .should('be.visible').should('have.text', successSubs)
    }

    async clickLinkTextCart(textCart){
        cy.get(dataLocator.locatorId.linkTextCart)
        .should('have.text', textCart).click()
    }

    async verifCartPage(textCartPage){
        cy.get(dataLocator.locatorId.fieldCartPage)
        .should('have.text', textCartPage)
    }
}

module.exports = home