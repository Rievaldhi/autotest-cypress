const dataLocator = require ('../../datalocator/exercise/contactDataLocator')

class ContactUs {

    async clickContactUs(){
        cy.get(dataLocator.locatorId.linkTextContactUs).click({multiple: true })
    }

    async verifContactUsPage(textGetInTouch){
        cy.get(dataLocator.locatorId.textFormGetInTouch)
        .should('have.text', textGetInTouch)
    }

    async typeName_CU(name_CU){
        cy.get(dataLocator.locatorId.fieldName_CU).type(name_CU)
    }

    async typeEmail_CU(email_CU){
        cy.get(dataLocator.locatorId.fieldEmail_CU).type(email_CU)
    }

    async typeSubject_CU(subject_CU){
        cy.get(dataLocator.locatorId.fieldSubject_CU).type(subject_CU)
    }

    async typeMsg_CU(msg_CU){
        cy.get(dataLocator.locatorId.fieldMsg_CU).type(msg_CU)
    }

    async uploadFile_CU(file_CU){
        cy.get(dataLocator.locatorId.fieldUpload_CU)
        .attachFile(file_CU).wait(5000)
    }

    async clickSubmit_CU(){
        cy.get(dataLocator.locatorId.submitButton_CU).click().wait(3000)
    }

    async verifSubmitSuccess_CU(successSubmit_CU){
        cy.get(dataLocator.locatorId.fieldSuccessSubmit_CU)
        .should('have.text', successSubmit_CU)
    }

    async clickHomeButton_CU(){
        cy.get(dataLocator.locatorId.homeButton_CU).click()
    }

}

module.exports = ContactUs