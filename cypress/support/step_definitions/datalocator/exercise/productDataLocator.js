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
        brandProduct : ' Polo'
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
        textBrandProduct : '.product-information > :nth-child(8)' //.contains
    }
}