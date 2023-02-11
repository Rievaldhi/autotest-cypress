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

}

module.exports = product