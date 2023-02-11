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
        resultSearch1 : 'Soft Stretch Jeans' //contains

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
        textResultSearch1 : ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p' 

    }
}