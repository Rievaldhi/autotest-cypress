const dataLocator = require ('../../datalocator/exercise/productDataLocator')

class product {

    async verifTextHomePage(TextInHomePage){
        cy.get(dataLocator.locatorId.fieldTextInHomePage)
        .should('have.text', TextInHomePage)
    }

    async clickLinkTextProduct(textProduct){
        cy.get(dataLocator.locatorId.linkTextProduct)
        .wait(500).contains(textProduct).click()
    }

    async verifProductPage(titleProduct){
        cy.get(dataLocator.locatorId.textTitleProduct)
        .should('have.text', titleProduct)
    }

    async verifFirstProduct(firstProduct){
        cy.get(dataLocator.locatorId.textFirstProduct)
        .contains(firstProduct)
    }

    async clickViewFirstProduct(textViewProduct){
        cy.get(dataLocator.locatorId.linkTextViewProduct)
        .wait(500).should('have.text', textViewProduct).click()
    }

    async verifFirstProductDetailPage(urlFirstProductDetail){
        cy.url()
        .should('eq', urlFirstProductDetail)
    }

    async verifProductName(productName){
        cy.get(dataLocator.locatorId.textProductName)
        .contains(productName)
    }

    async verifCategory(categoryProduct){
        cy.get(dataLocator.locatorId.textCategoryProduct)
        .contains(categoryProduct)
    }

    async verifPrice(priceProduct){
        cy.get(dataLocator.locatorId.textPriceProduct)
        .contains(priceProduct)
    }

    async verifAvailProduct(availProduct){
        cy.get(dataLocator.locatorId.textAvailProduct)
        .contains(availProduct)
    }

    async verifConditionProduct(conditionProduct){
        cy.get(dataLocator.locatorId.textConditionProduct)
        .contains(conditionProduct)
    }

    async verifBrandProduct(brandProduct){
        cy.get(dataLocator.locatorId.textBrandProduct)
        .contains(brandProduct)
    }

    async inputSearchProductName(searchProductName){
        cy.get(dataLocator.locatorId.fieldSearchProduct)
        .type(searchProductName).wait(500)
    }

    async clickSearchButton(){
        cy.get(dataLocator.locatorId.buttonSeachProduct).click()
    }

    async verifSearchedTitle(titleSearchProduct){
        cy.get(dataLocator.locatorId.textTitleProduct)
        .wait(500).should('have.text', titleSearchProduct)
    }

    async verifResultSearch1(resultSearch1){
        cy.get(dataLocator.locatorId.textResultSearch1)
        .contains(resultSearch1)
    }

    async clickAddProduct1(){
        cy.get(dataLocator.locatorId.linkTextAddProduct1).click()
    }

    async verifyAlertProductAdded(textModalProductAdded){
        cy.get(dataLocator.locatorId.modalProductAdded)
        .should('have.text', textModalProductAdded)
    }

    async clickContinueShopping(){
        cy.get(dataLocator.locatorId.buttonContinueShop).click()
    }

    async clickAddProduct2(){
        cy.get(dataLocator.locatorId.linkTextAddProduct2).click()
    }

    async clickViewCart(){
        cy.get(dataLocator.locatorId.modalViewCart).click()
    }

    // only for test cases id 12
    async verifFirstProductAdded(){
        cy.get(dataLocator.locatorId.cartProductName1)
        .should('have.text', dataLocator.dataId.firstProduct)
        cy.get(dataLocator.locatorId.cartProductPrice1)
        .should('have.text', dataLocator.dataId.priceProduct)
        cy.get(dataLocator.locatorId.cartProductQty1)
        .should('have.text', dataLocator.dataId.qtyProduct)
        cy.get(dataLocator.locatorId.cartProductTotal1)
        .should('have.text', dataLocator.dataId.totalProduct)
    }
    async verifSecondProductAdded(){
        cy.get(dataLocator.locatorId.cartProductName2)
        .should('have.text', dataLocator.dataId.productName2)
        cy.get(dataLocator.locatorId.cartProductPrice2)
        .should('have.text', dataLocator.dataId.priceProduct2)
        cy.get(dataLocator.locatorId.cartProductQty2)
        .should('have.text', dataLocator.dataId.qtyProduct2)
        cy.get(dataLocator.locatorId.cartProductTotal2)
        .should('have.text', dataLocator.dataId.totalProduct2)
    }

    async inputQtyProductDetails1(addQtyProductDetail){
        cy.get(dataLocator.locatorId.fieldQtyProductDetails)
        .clear().type(addQtyProductDetail)
    }

    async clickAddToCart(){
        cy.get(dataLocator.locatorId.buttonAddCartProductDetails).click()
    }

    async verifInputedQty(addQtyProductDetail){
        cy.get(dataLocator.locatorId.cartProductQty1)
        .should('have.text', addQtyProductDetail)
    }

    async clickProceedCheckout(){
        cy.get(dataLocator.locatorId.buttonProceedCheckout)
        .should('have.text', dataLocator.dataId.textButtonProceedCheckout).click()
    }

    async clickLinkTexRegisterLogin(){
        cy.get(dataLocator.locatorId.linkTextRegisterLogin)
        .should('have.text', dataLocator.dataId.textRegisterLogin).click()
    }

    async clickLinkTextCart(){
        cy.get(dataLocator.locatorId.linkTextCart).click()
    }

    async verifTitleAddressDetails(textAddressDetails){
        cy.get(dataLocator.locatorId.titleAddressDetails)
        .should('have.text', textAddressDetails)
    }

    async verifTitleReviewOrder(textReviewOrder){
        cy.get(dataLocator.locatorId.titleReviewOrder)
        .should('have.text', textReviewOrder)
    }

    async inputCommentCart(inputComment){
        cy.get(dataLocator.locatorId.fieldCommentCart)
        .type(inputComment)
    }

    async clickButtonPlaceOrder(){
        cy.get(dataLocator.locatorId.buttonPlaceOrder).click()
    }

    async verifTitlePayment(textPayment){
        cy.get(dataLocator.locatorId.titlePayment)
        .should('have.text', textPayment)
    }

    async inputFieldNameCard(inputNameCard){
        cy.get(dataLocator.locatorId.fieldNameCard)
       .type(inputNameCard)
    }

    async inputFieldNumberCard(inputNumberCard){
        cy.get(dataLocator.locatorId.fieldCardNumber)
        .type(inputNumberCard)
    }

    async inputFieldCVC(inputCVC){
        cy.get(dataLocator.locatorId.fieldCVC)
        .type(inputCVC)
    }

    async inputFieldExpMonth(inputExpMonth){
        cy.get(dataLocator.locatorId.fieldExpMonth)
        .type(inputExpMonth)
    }

    async inputFieldExpYear(inputExpYear){
        cy.get(dataLocator.locatorId.fieldExpYear)
        .type(inputExpYear)
    }

    async clickButtonPayConfirm(){
        cy.get(dataLocator.locatorId.buttonPayConfirm).click()
    }

    async verifAlertSuccessPayOrder(successPayOrder){
        cy.get(dataLocator.locatorId.alertSuccessPayment)
        .should('be.visible').contains(successPayOrder)
    }

    async verifOrderConfirmedPage(textOrderConfirmedPage){
        cy.get(dataLocator.locatorId.orderConfirmedPage)
        .should('have.text', textOrderConfirmedPage)
    }

    async clickDownloadInvoice(){
        cy.get(dataLocator.locatorId.buttonDownloadInvoice)
        .should('have.text', dataLocator.dataId.textDownloadInvoice).click().wait(500)
        .readFile('cypress/downloads/invoice.txt').should('exist')
    }

    async clickButtonContinueOrderConfirmed(){
        cy.get(dataLocator.locatorId.buttonContinueOrderConfirmed).click()
    }



}

module.exports = product