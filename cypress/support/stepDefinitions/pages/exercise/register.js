const dataLocator = require ('../../datalocator/exercise/registerDataLocator')

class register {

    async visitUrl(){
        cy.viewScreen()
        cy.visitExercise()
        cy.wait (500)
    }

    async verifHomePage(textSignupLogin){
        cy.get(dataLocator.locatorId.linkTextSignupLogin)
        .should('have.text' , textSignupLogin, {timeout: 15000})
    }

    async clickSignupText(){
        cy.get(dataLocator.locatorId.linkTextSignupLogin).click()
    }

    async verifSignup(textSignup){
        cy.get(dataLocator.locatorId.titleFormSignUp)
        .should('have.text', textSignup)
    }

    async typeSignupName(inputNameSignup){
        cy.get(dataLocator.locatorId.fieldName).type(inputNameSignup)
    }

    async typeSignupEmail(inputEmailSignup){
        cy.get(dataLocator.locatorId.fieldEmail).type(inputEmailSignup)
    }

    //register flow checkout product
    async inputNameAndEmail_CO(){
        cy.get(dataLocator.locatorId.fieldName).type(dataLocator.dataId.inputNameSignupCheckout)
        cy.get(dataLocator.locatorId.fieldEmail).type(dataLocator.dataId.inputEmailSignupCheckout)
    }

    async clickSignupButton(){
        cy.get(dataLocator.locatorId.buttonSignup).click()
    }

    async verifTitleAccount(textTitleFormSignup){
        cy.get(dataLocator.locatorId.titleAccountInformation)
        .should('have.text', textTitleFormSignup)
    }

    async selectTitleName(){
        cy.get(dataLocator.locatorId.genderFemale).click()
    }

    async typePassword(inputPassword){
        cy.get(dataLocator.locatorId.textFieldPassword).type(inputPassword)
    }
    async selectDOB(){
        cy.get(dataLocator.locatorId.dobDay).select(dataLocator.dataId.inputDay)
        cy.get(dataLocator.locatorId.dobMonth).select(dataLocator.dataId.inputMonth)
        cy.get(dataLocator.locatorId.dobYear).select(dataLocator.dataId.inputYear)
    }

    async typeFirstName(inputFirstName){
        cy.get(dataLocator.locatorId.firstName).type(inputFirstName)
    }

    async typeLastName(inputLastName){
        cy.get(dataLocator.locatorId.lastName).type(inputLastName)
    }

    async typeCompany(inputCompany){
        cy.get(dataLocator.locatorId.company).type(inputCompany)
    }

    async typeAddress(inputAddress1){
        cy.get(dataLocator.locatorId.address1).type(inputAddress1)
    }

    async selectCountry(inputCountry){
        cy.get(dataLocator.locatorId.country).select(inputCountry)
    }

    async typeState(inputState){
        cy.get(dataLocator.locatorId.state).type(inputState)
    }

    async typeCity(inputCity){
        cy.get(dataLocator.locatorId.city).type(inputCity)
    }

    async typeZipCode(inputZipCode){
        cy.get(dataLocator.locatorId.zipCode).type(inputZipCode)
    }

    async typeMobileNumber(inputMobileNumber){
        cy.get(dataLocator.locatorId.mobileNumber).type(inputMobileNumber)
    }

    async clickCreateButton(){
        cy.get(dataLocator.locatorId.createButton).click()
    }

    async verifAccountCreated(textAccountCreated){
        cy.get(dataLocator.locatorId.verifText)
        .should('have.text', textAccountCreated)
    }

    async clickContinueButton(){
        cy.get(dataLocator.locatorId.buttonContinue).click()
    }

    async verifLoginAs(){
        cy.get(dataLocator.locatorId.verifUsername)
        .contains(dataLocator.dataId.verifUsernameText + dataLocator.dataId.inputNameSignup)
    }

    //flow from checkout product
    async verifLogin_CO(){
        cy.get(dataLocator.locatorId.verifUsername)
        .contains(dataLocator.dataId.verifUsernameText + dataLocator.dataId.inputNameSignupCheckout)
    }
    
    async clickLinkTextDelete(){
        cy.get(dataLocator.locatorId.linkTextDelete).click()
    }

    async verifAccountDeleted(textAccountDeleted){
        cy.get(dataLocator.locatorId.verifText)
        .should('have.text', textAccountDeleted)   
    }

    async verifTextExistingData(textFailedSignupWarning){
        cy.get(dataLocator.locatorId.failedSignupWarning)
        .should('have.text', textFailedSignupWarning)
    }

}

module.exports = register