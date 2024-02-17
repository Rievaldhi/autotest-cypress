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

When ('User click link text cart',()=>{
    callHome.clickLinkTextCart(dataLocator.dataId.textCart)
})

Then ('Verify User Already in Cart Page', ()=>{
    callHome.verifCartPage(dataLocator.dataId.textCartPage)
})

When ('User Click on arrow at bottom right side to move upward',()=>{
    callHome.clickScrollUp()
})

Then ('Verify that page is scrolled up and Full Fledged practice website for Automation Engineers text is visible on screen',()=>{
    callHome.verifTopSection(dataLocator.dataId.textTopSection)
})

When ('User scroll up to header section',()=>{
    callHome.scrollToHeader()
})

