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
    callProduct.verifyDownloadedInvoice()
})

Then ('System will auto delete the file after downloaded the invoice',()=>{
    callProduct.deleteInvoiceFile()
})

When ('User Click Continue Button in Order Placed Page',()=>{
    callProduct.clickButtonContinueOrderConfirmed()
})

When ('User Click Delete Button at Second Product or Product Id = 2',()=>{
    callProduct.clickDeleteButtonCart()
})

Then ('Verify Product Id 2 Should be Deleted',()=>{
    callProduct.verifSecondProductDeleted()
})

Then ('Verify that categories are visible on left side bar',()=>{
    callProduct.verifSideMenuCategory(dataLocator.dataId.sideMenuCategory)
})

When ('User Click on Women category',()=>{
    callProduct.verifWomenCategoryAndClick(dataLocator.dataId.womenCategory)
})

When ('User Click on sub category for example Dress',()=>{
    callProduct.verifSubWomenCategoryAndClick(dataLocator.dataId.subWomenCategory)
})

Then ('Verify that category page is displayed and confirm text Women Dress Products',()=>{
    callProduct.verifTitleDressCategory(dataLocator.dataId.titleWomenDressCategory)
})

Then ('Verify the Result From Dress Category',()=>{
    callProduct.verifDressCategory()
})

When ('User Click on Man category',()=>{
    callProduct.verifManCategoryAndClick(dataLocator.dataId.manCategory)
})

When ('User Click on sub category for example Jeans',()=>{
    callProduct.verifSubManCategoryAndClick(dataLocator.dataId.subManCategory)
})

Then ('Verify that category page is displayed and confirm text Man Jeans Products',()=>{
    callProduct.verifTitleJeansCategory(dataLocator.dataId.titleManJeansCategory)
})

Then ('Verify the Result From Jeans Category',()=>{
    callProduct.verifJeansCategory()
})

Then ('Verify that brands are visible on left side bar',()=>{
    callProduct.verifSideMenuBrands(dataLocator.dataId.sideMenuBrands)
})

When ('User Click on Polo Brands',()=>{
    callProduct.verifPoloBrandsAndClick(dataLocator.dataId.poloBrands)
})

Then ('Verify that Polo Brands page is displayed',()=>{
    callProduct.verifTitlePoloBrands(dataLocator.dataId.titlePoloBrands)
})

When ('User Click on Any Brands Name',()=>{
    callProduct.verifHmBrandsAndClick(dataLocator.dataId.hmBrands)
    callProduct.verifTitleHmBrands(dataLocator.dataId.titleHmBrands)
    
    callProduct.verifMadameBrandsAndClick(dataLocator.dataId.madameBrands)
    callProduct.verifTitleMadameBrands(dataLocator.dataId.titleMadameBrands)
    
    callProduct.verifMastBrandsAndClick(dataLocator.dataId.mastBrands)
    callProduct.verifTitleMastBrands(dataLocator.dataId.titleMastBrands)
    
    callProduct.verifBabyBrandsAndClick(dataLocator.dataId.babyBrands)
    callProduct.verifTitleBabyBrands(dataLocator.dataId.titleBabyBrands)
    
    callProduct.verifAllenBrandsAndClick(dataLocator.dataId.allenBrands)
    callProduct.verifTitleAllenBrands(dataLocator.dataId.titleAllenBrands)
    
    callProduct.verifBibaBrandsAndClick(dataLocator.dataId.bibaBrands)
    callProduct.verifTitleBibaBrands(dataLocator.dataId.titleBibaBrands)
})

When ('User Cilck on Kookie Brands',()=>{
    callProduct.verifKookieBrandsAndClick(dataLocator.dataId.kookieBrands)
    callProduct.verifTitleKookieBrands(dataLocator.dataId.titleKookieBrands)
})

Then ('Verify the Result From Kookie Category',()=>{
    callProduct.verifKookieBrands()
})

When ('User Click Add to Cart For Product Id 33',()=>{
    callProduct.clickAddProduct33()
})

Then ('Verify Product Id 33 Should be Added to Cart',()=>{
    callProduct.verifProduct33Added()
})

Then ('Verify Write Your Review is visible',()=>{
    callProduct.verifTitleWriteReview(dataLocator.dataId.textWriteReview)
})

When ('User Enter name and email and review',()=>{
    callProduct.typeNameReview(dataLocator.dataId.textNameReview)
    callProduct.typeEmailReview(dataLocator.dataId.textEmailReview)
    callProduct.typeTextboxReview(dataLocator.dataId.textboxReview)
})

When ('User Click Button Submit Review',()=>{
    callProduct.clickSubmitReview()
})

Then ('Verify success message Thank you for your review',()=>{
    callProduct.verifAlertSuccessReview()
})

When ('User Scroll to bottom of page at Recommend Items',()=>{
    callProduct.scrollToRecommendItems()
})

Then ('Verify RECOMMENDED ITEMS are visible',()=>{
    callProduct.verifTitleRecommendItems(dataLocator.dataId.titleRecommend)
})

When ('User select first product from recommend items',()=>{
    callProduct.selectRecommendItems1()
})

When ('User select second product from recommend items',()=>{
    callProduct.selectRecommendItems2()
})