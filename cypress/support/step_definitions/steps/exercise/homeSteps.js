import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/homeDataLocator"
import home from "../../pages/exercise/home"

let callHome = new home

When ('User scroll down to footer',()=>{
    callHome.scrollToFooter()
})

Then ('Verify text SUBSCRIPTION',()=>{
    callHome.verifSubsHome(dataLocator.dataId.textSubscription)
})

When ('User enter email address in input and click arrow button',()=>{
    callHome.inputEmailSubs(dataLocator.dataId.emailSubs)
    callHome.clickSubsEmailButton()
})

Then ('Verify success message You have been successfully subscribed! is visible',()=>{
    callHome.verifSuccessSubs(dataLocator.dataId.successSubs)
})