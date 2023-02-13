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
        addQtyProductDetail : '4'


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




    }
}