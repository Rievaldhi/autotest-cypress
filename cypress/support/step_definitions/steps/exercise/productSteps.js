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

When ('User enter product name in search input and click search button',()=>{
    callProduct.inputSearchProductName(dataLocator.dataId.searchProductName)
    callProduct.clickSearchButton()
})

Then ('Verify text title SEARCHED PRODUCTS is visible',()=>{
    callProduct.verifSearchedTitle(dataLocator.dataId.titleSearchProduct)
})

Then ('Verify the products related to search are visible',()=>{
    callProduct.verifResultSearch1(dataLocator.dataId.resultSearch1)
})

When ('User hover over first product and click Add to cart',()=>{
    callProduct.clickAddProduct1()
})

Then ('Verify alert success added product should be visible',()=>{
    callProduct.verifyAlertProductAdded(dataLocator.dataId.textModalProductAdded)
})

When ('User click continue shopping button',()=>{
    callProduct.clickContinueShopping()
})

When ('User hover over second product and click Add to cart',()=>{
    callProduct.clickAddProduct2()
})

When ('User click View Cart button',()=>{
    callProduct.clickViewCart()
})

Then ('Verify both products are added to Cart and Verify their prices, quantity and total price',()=>{
    callProduct.verifFirstProductAdded()
    callProduct.verifSecondProductAdded()
})

When ('User increase quantity to 4',()=>{
    callProduct.inputQtyProductDetails1(dataLocator.dataId.addQtyProductDetail)
})

When ('User click Add to cart button',()=>{
    callProduct.clickAddToCart()
})

Then ('Verify that product is displayed in cart page with exact quantity',()=>{
    callProduct.verifInputedQty(dataLocator.dataId.addQtyProductDetail)
})

When ('User Click Proceed To Checkout',()=>{
    callProduct.clickProceedCheckout()
})

When ('User Click Register or Login button',()=>{
    callProduct.clickLinkTexRegisterLogin()
})

When ('User Click Cart button',()=>{
    callProduct.clickLinkTextCart()
})

Then ('Verify Address Details',()=>{
    callProduct.verifTitleAddressDetails(dataLocator.dataId.textAddressDetails)
})

Then ('Verify Review Order',()=>{
    callProduct.verifTitleReviewOrder(dataLocator.dataId.textReviewOrder)
})

When ('User enter description in comment text area',()=>{
    callProduct.inputCommentCart(dataLocator.dataId.inputComment)
})

When ('User click Place Order Button',()=>{
    callProduct.clickButtonPlaceOrder()
})

Then ('Verify User Already in Payment Page',()=>{
    callProduct.verifTitlePayment(dataLocator.dataId.textPayment)
})

When ('User enter payment details: Name on Card, Card Number, CVC, Expiration date',()=>{
    callProduct.inputFieldNameCard(dataLocator.dataId.inputNameCard)
    callProduct.inputFieldNumberCard(dataLocator.dataId.inputNumberCard)
    callProduct.inputFieldCVC(dataLocator.dataId.inputCVC)
    callProduct.inputFieldExpMonth(dataLocator.dataId.inputExpMonth)
    callProduct.inputFieldExpYear(dataLocator.dataId.inputExpYear)
})

When ('User Click Pay and Confirm Order button',()=>{
    callProduct.clickButtonPayConfirm()
})

Then ('Verify Alert Success is Visible',()=>{
    callProduct.verifAlertSuccessPayOrder(dataLocator.dataId.successPayOrder)
})

Then ('Verify User Directed to Payment Success Page',()=>{
    callProduct.verifOrderConfirmedPage(dataLocator.dataId.textOrderConfirmedPage)
})

When ('User Click Download Invoice Button',()=>{
    callProduct.clickDownloadInvoice()
})

When ('User Click Continue Button in Order Placed Page',()=>{
    callProduct.clickButtonContinueOrderConfirmed()
})
