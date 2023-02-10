import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/testDataLocator"
import testCases  from "../../pages/exercise/testCases"

let callTC = new testCases

Then ('Link text Test Cases should be visible',()=>{
    callTC.verifLinktext_TC(dataLocator.dataId.textTC)
})

When ('I click link text Test Cases',()=>{
    callTC.clickLinkText_TC()
})

Then ('I should be directed to Test Cases page',()=>{
    callTC.verifTitleTC(dataLocator.dataId.titleTC)
})