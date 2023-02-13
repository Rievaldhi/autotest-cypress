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

}

module.exports = product