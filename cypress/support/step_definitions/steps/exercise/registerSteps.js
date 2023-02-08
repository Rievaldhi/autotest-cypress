import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/registerDataLocator"
import register  from "../../pages/exercise/register"

let callRegister = new register

Given ('Launch browser and Navigate to the web app', ()=> {
    callRegister.visitUrl()
})
When ('Web app already open the home page should be visible', ()=>{
    callRegister.verifHomePage(dataLocator.dataId.textSignupLogin)
})
When ('I Click on link text Signup or Login', ()=>{
    callRegister.clickSignupText()
})
Then ('I directed to new page the sign up form should be visible', ()=>{
    callRegister.verifSignup(dataLocator.dataId.textSignup)
})
When ('I enter a valid Name', ()=>{
    callRegister.typeSignupName(dataLocator.dataId.inputNameSignup)
})
When ('I enter valid email', ()=>{
    callRegister.typeSignupEmail(dataLocator.dataId.inputEmailSignup)
})
When ('I click button sign up', ()=>{
    callRegister.clickSignupButton()
})
Then ('I will see form to complete sign up proccess', ()=>{
    callRegister.verifTitleAccount(dataLocator.dataId.textTitleFormSignup)
})
When ('I complete the sign up form', ()=>{
    callRegister.selectTitleName()
    callRegister.typePassword(dataLocator.dataId.inputPassword)
    callRegister.selectDOB()
    callRegister.typeFirstName(dataLocator.dataId.inputFirstName)
    callRegister.typeLastName(dataLocator.dataId.inputLastName)
    callRegister.typeCompany(dataLocator.dataId.inputCompany)
    callRegister.typeAddress(dataLocator.dataId.inputAddress1)
    callRegister.selectCountry(dataLocator.dataId.inputCountry)
    callRegister.typeState(dataLocator.dataId.inputState)
    callRegister.typeCity(dataLocator.dataId.inputCity)
    callRegister.typeZipCode(dataLocator.dataId.inputZipCode)
    callRegister.typeMobileNumber(dataLocator.dataId.inputMobileNumber)
})
When ('I already fill in the sign up form and click create', ()=>{
    callRegister.clickCreateButton()
})
Then ('I Validate Account Already Created',()=>{
    callRegister.verifAccountCreated(dataLocator.dataId.textAccountCreated)
    callRegister.clickContinueButton()
})
Then ('I Already Login and See My Username',()=>{
    callRegister.verifLoginAs()
})
When ('I will delete my account',()=>{
    callRegister.clickLinkTextDelete()
})
Then ('I Validate My Account Already Deleted',()=>{
    callRegister.verifAccountDeleted(dataLocator.dataId.textAccountDeleted)
    callRegister.clickContinueButton()
    callRegister.verifHomePage(dataLocator.dataId.textSignupLogin)
})