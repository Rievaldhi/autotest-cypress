module.exports = {
    dataId : {

        textInHomePage : 'Full-Fledged practice website for Automation Engineers',
        textProduct : ' Products',
        titleProduct : 'All Products',
        firstProduct : 'Blue Top',
        textViewProduct : 'View Product',
        urlFirstProductDetail : 'https://automationexercise.com/product_details/1',
        productName : 'Blue Top',
        categoryProduct : 'Category: Women > Tops',
        priceProduct : 'Rs. 500',
        availProduct : ' In Stock',
        conditionProduct : ' New',
        brandProduct : ' Polo',

        // search product
        searchProductName : 'jeans',
        titleSearchProduct : 'Searched Products',
        resultSearch1 : 'Soft Stretch Jeans', //contains

        // add product
        textModalProductAdded : 'Your product has been added to cart.',
        textContinueShop : 'Continue Shopping',
        totalProduct : 'Rs. 500',
        qtyProduct : '1',
        productName2 : 'Men Tshirt',
        priceProduct2 : 'Rs. 400',
        qtyProduct2 : '1',
        totalProduct2 : 'Rs. 400',
        addQtyProductDetail : '4',

        //checkout
        textButtonProceedCheckout : 'Proceed To Checkout',
        textRegisterLogin : 'Register / Login',
        textAddressDetails : 'Address Details',
        textReviewOrder : 'Review Your Order',
        inputComment : 'This is for and from text box comment',
        textPayment : 'Payment',
        inputNameCard : 'My Name',
        inputNumberCard : '0010-0020-0030-444',
        inputCVC : '212',
        inputExpMonth : '12',
        inputExpYear : '2030',
        successPayOrder : 'Your order has been placed successfully!', //contains
        textOrderConfirmedPage : 'Congratulations! Your order has been confirmed!',
        textDownloadInvoice : 'Download Invoice',

        // category product
        sideMenuCategory: 'Category',
        womenCategory : ' Women',
        subWomenCategory: 'Dress ',
        titleWomenDressCategory : 'Women - Dress Products',
        dressResultCategory1 : 'Sleeveless Dress',
        dressResultCategory2 : 'Stylish Dress',
        dressResultCategory3 : 'Rose Pink Embroidered Maxi Dress',
        manCategory : ' Men',
        subManCategory: 'Jeans ',
        titleManJeansCategory : 'Men - Jeans Products',
        jeansResultCategory1 : 'Soft Stretch Jeans',
        jeansResultCategory2 : 'Regular Fit Straight Jeans',
        jeansResultCategory3 : 'Grunt Blue Slim Fit Jeans',

        // brand product
        sideMenuBrands : 'Brands',
        poloBrands : 'Polo',
        hmBrands : 'H&M',
        madameBrands : 'Madame',
        mastBrands : 'Mast & Harbour',
        babyBrands : 'Babyhug',
        allenBrands : 'Allen Solly Junior',
        kookieBrands : 'Kookie Kids',
        bibaBrands : 'Biba',
        titlePoloBrands : 'Brand - Polo Products',
        titleHmBrands : 'Brand - H&M Products',
        titleMadameBrands : 'Brand - Madame Products',
        titleMastBrands : 'Brand - Mast & Harbour Products',
        titleBabyBrands : 'Brand - Babyhug Products',
        titleAllenBrands : 'Brand - Allen Solly Junior Products',
        titleKookieBrands : 'Brand - Kookie Kids Products',
        titleBibaBrands : 'Brand - Biba Products',
        kookieResultBrands1 : 'Full Sleeves Top Cherry - Pink',
        kookieResultBrands2 : 'Little Girls Mr. Panda Shirt',
        kookieResultBrands3 : 'Cotton Mull Embroidered Dress',

        // search product and add to cart then view cart
        productName33 : 'Soft Stretch Jeans',
        priceProduct33 : 'Rs. 799',
        qtyProduct33 : '1',
        totalProduct33 : 'Rs. 799',

        //write review
        textWriteReview : 'Write Your Review',
        textNameReview : 'try try yo',
        textEmailReview : 'email@review.com',
        textboxReview : 'This is my review, you can read my review at here',
        successReview : 'Thank you for your review.',

        // Add product from recommend items
        titleRecommend : 'recommended items'



    },

    locatorId : {

        fieldTextInHomePage : '.active > :nth-child(1) > h2',
        linkTextProduct : '.shop-menu > .nav > :nth-child(2)',
        textTitleProduct : '.title',
        textFirstProduct : ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
        linkTextViewProduct : ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
        textProductName : '.product-information > h2',
        textCategoryProduct : '.product-information > :nth-child(3)',
        textPriceProduct : ':nth-child(5) > span',
        textAvailProduct : '.product-information > :nth-child(6)', //.contains
        textConditionProduct : '.product-information > :nth-child(7)', //.contains
        textBrandProduct : '.product-information > :nth-child(8)', //.contains
    
        // search product
        fieldSearchProduct : '#search_product',
        buttonSeachProduct : '#submit_search',
        //use locator textTitleProduct
        textResultSearch1 : ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
        
        // add product
        linkTextAddProduct1 : ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn',
        modalProductAdded : '.modal-body > :nth-child(1)',
        buttonContinueShop : '.modal-footer > .btn',
        linkTextAddProduct2 : ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn',
        modalViewCart : 'u',
        cartProductName1 : '#product-1 > .cart_description > h4 > a',
        cartProductPrice1 : '#product-1 > .cart_price > p',
        cartProductQty1 : '#product-1 > .cart_quantity > .disabled',
        cartProductTotal1 : '#product-1 > .cart_total > .cart_total_price',
        cartProductName2 : '#product-2 > .cart_description > h4 > a',
        cartProductPrice2 : '#product-2 > .cart_price > p',
        cartProductQty2 : '#product-2 > .cart_quantity > .disabled',
        cartProductTotal2 : '#product-2 > .cart_total > .cart_total_price',
        fieldQtyProductDetails : '#quantity',
        buttonAddCartProductDetails : ':nth-child(5) > .btn',

        //checkout
        buttonProceedCheckout : '.col-sm-6 > .btn',
        linkTextRegisterLogin : '.modal-body > :nth-child(2) > a > u',
        linkTextCart : '.shop-menu > .nav > :nth-child(3)',
        titleAddressDetails : ':nth-child(2) > .heading',
        titleReviewOrder : ':nth-child(4) > .heading',
        fieldCommentCart : '.form-control',
        buttonPlaceOrder : ':nth-child(7) > .btn',
        titlePayment : '.heading',
        fieldNameCard : ':nth-child(2) > .col-sm-12 > .form-control',
        fieldCardNumber : ':nth-child(3) > .col-sm-12 > .form-control',
        fieldCVC : '.cvc > .form-control',
        fieldExpMonth : ':nth-child(2) > .form-control',
        fieldExpYear : ':nth-child(3) > .form-control',
        buttonPayConfirm : '#submit',
        alertSuccessPayment : '.alert-success',
        orderConfirmedPage : '.col-sm-9 > p',
        buttonDownloadInvoice : '.col-sm-9 > .btn-default',
        buttonContinueOrderConfirmed : '.pull-right > .btn',

        //delete product from cart
        deleteButtonCart2 : '#product-2 > .cart_delete > .cart_quantity_delete',

        //category product
        fieldSideMenuCategory : '.left-sidebar > :nth-child(1)',
        fieldWomenCategory : ':nth-child(1) > .panel-heading > .panel-title',
        fieldSubWomenCategory : '#Women > .panel-body > ul > :nth-child(1) > a',
        resultCategory1 : ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
        resultCategory2 : ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p',
        resultCategory3 : ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
        fieldManCategory : ':nth-child(2) > .panel-heading > .panel-title',
        fieldSubManCategory : '#Men > .panel-body > ul > :nth-child(2) > a',

        //brands product
        fieldSideMenuBrands : '.brands_products > h2',
        fieldPoloBrands : '.brands-name > .nav > :nth-child(1) > a',
        fieldHmBrands : '.brands-name > .nav > :nth-child(2) > a',
        fieldMadameBrands : '.brands-name > .nav > :nth-child(3) > a',
        fieldMastBrands : '.brands-name > .nav > :nth-child(4) > a',
        fieldBabyBrands : '.brands-name > .nav > :nth-child(5) > a',
        fieldAllenBrands : '.brands-name > .nav > :nth-child(6) > a',
        fieldKookieBrands : '.brands-name > .nav > :nth-child(7) > a',
        fieldBibaBrands : '.brands-name > .nav > :nth-child(8) > a',

        // search product and add to cart then view cart
        cartProductName33 : '#product-33 > .cart_description > h4 > a',
        cartProductPrice33 : '#product-33 > .cart_price > p',
        cartProductQty33 : '#product-33 > .cart_quantity > .disabled',
        cartProductTotal33 : '#product-33 > .cart_total > .cart_total_price',
        
        //write review
        fieldTextWriteReview : '.active > a',
        fieldTextNameReview : '#name',
        fieldTextEmailReview : '#email',
        fieldTextboxReview : '#review',
        buttonReview : '#button-review',
        alertSuccessReview : '.col-md-12 > .alert-success',

        // Add product from recommend items
        // need more attention to prevent flaky test at this case
        carouselSection : '#recommended-item-carousel',
        textTitleRecommend : '.recommended_items > .title',
        carouselToLeft : '#recommended-item-carousel > .right > .fa',
        firstImgItemRecommend : 'a[href*="get_product_picture/1"]',
        firstNameItemRecommend : '.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
        firstNameItemRecommend1 : '.next > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > p',
        firstButtonAddCart : '.next > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn',
        secondNameItemRecommend : '.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > p',
        secondButtonAddCart : '.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn',
        thirdNameItemRecommend : '.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
        thirdButtonAddCart : '.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn',
        


    }
}