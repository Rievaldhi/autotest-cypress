import { When } from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/registerDataLocator"
import login  from "../../pages/exercise/login"

let callLogin = new login

When ('I directed to new page the login form should be visible', ()=>{
    callLogin.verifLogin(dataLocator.dataId.textLogin)
})
When ('I input valid email address',()=>{
    callLogin.typeEmailLogin(dataLocator.dataId.inputEmailSignup)
})

When ('And I input valid password',()=>{
    callLogin.typePasswordLogin(dataLocator.dataId.inputPassword)
})

When ('And I click login button',()=>{
    callLogin.clickLoginButton()
})