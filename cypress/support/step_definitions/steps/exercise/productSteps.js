import {When, Then} from "@badeball/cypress-cucumber-preprocessor"
import dataLocator from "../../datalocator/exercise/productDataLocator"
import product from "../../pages/exercise/product"

let callProduct = new product

Then ('Verify that home page is visible successfully',()=>{
    callProduct.verifTextHomePage(dataLocator.dataId.textInHomePage)
})

When ('User click on Products link text',()=>{
    callProduct.clickLinkTextProduct(dataLocator.dataId.textProduct)
})

Then ('Verify user is navigated to ALL PRODUCTS page successfully',()=>{
    callProduct.verifProductPage(dataLocator.dataId.titleProduct)
})

Then ('Verify first product is visible',()=>{
    callProduct.verifFirstProduct(dataLocator.dataId.firstProduct)
})

When ('User click on View Product of first product',()=>{
    callProduct.clickViewFirstProduct(dataLocator.dataId.textViewProduct)
})

Then ('User is landed to product detail page',()=>{
    callProduct.verifFirstProductDetailPage(dataLocator.dataId.urlFirstProductDetail)
})

Then ('Verify that detail detail is visible: product name, category, price, availability, condition, brand',()=>{
    callProduct.verifProductName(dataLocator.dataId.productName)
    callProduct.verifCategory(dataLocator.dataId.categoryProduct)
    callProduct.verifPrice(dataLocator.dataId.priceProduct)
    callProduct.verifAvailProduct(dataLocator.dataId.availProduct)
    callProduct.verifConditionProduct(dataLocator.dataId.conditionProduct)
    callProduct.verifBrandProduct(dataLocator.dataId.brandProduct)
})