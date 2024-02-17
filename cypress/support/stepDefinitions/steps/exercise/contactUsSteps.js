import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/contactDataLocator"
import contactUs  from "../../pages/exercise/contactUs"

let callContact = new contactUs

When ('I click link text Contact Us',()=>{
    callContact.clickContactUs()
})

Then ('Contact Us form should be visible',()=>{
    callContact.verifContactUsPage(dataLocator.dataId.textGetInTouch)
})

When ('I fill in the form',()=>{
    callContact.typeName_CU(dataLocator.dataId.name_CU)
    callContact.typeEmail_CU(dataLocator.dataId.email_CU)
    callContact.typeSubject_CU(dataLocator.dataId.subject_CU)
    callContact.typeMsg_CU(dataLocator.dataId.msg_CU)
})

When ('I finish fill in the form and I attach my file',()=>{
    callContact.uploadFile_CU(dataLocator.dataId.file_CU)
})

When ('I click button submit in the form Contact Us',()=>{
    callContact.clickSubmit_CU()
})

Then ('Alert message success submit should be visible',()=>{
    callContact.verifSubmitSuccess_CU(dataLocator.dataId.successSubmit_CU)
})

When ('I click home button',()=>{
    callContact.clickHomeButton_CU()
})