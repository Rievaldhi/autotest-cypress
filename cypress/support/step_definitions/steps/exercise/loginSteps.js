import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
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
When ('I input invalid email address',()=>{
    callLogin.typeInvalidEmail(dataLocator.dataId.invalidEmail)
})
Then ('The error warning should be visible and contains information login failed',()=>{
    callLogin.verifLoginFailed
})
When ('I click linktext logout',()=>{
    callLogin.verifTextLogout(dataLocator.dataId.textLogout)
})