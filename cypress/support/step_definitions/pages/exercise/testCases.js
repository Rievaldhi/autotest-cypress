const dataLocator = require ('../../datalocator/exercise/testDataLocator')

class testCases {

    async verifLinktext_TC(textTC){
        cy.get(dataLocator.locatorId.linkTextTC)
        .should('have.text', textTC)
    }

    async clickLinkText_TC(){
        cy.get(dataLocator.locatorId.linkTextTC).click().wait(500)
    }

    async verifTitleTC(titleTC){
        cy.get(dataLocator.locatorId.textTitleTC)
        .should('have.text', titleTC)
    }

}

module.exports = testCases