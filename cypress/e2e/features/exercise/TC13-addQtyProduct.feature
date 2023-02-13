Feature: Verify User Able to Increase Quantity Products in Product Details

    User Able to Increase Quantity Products in Product Details

    Scenario: Verify User Able to Increase Quantity Products in Product Details
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify user is navigated to ALL PRODUCTS page successfully
        Then Verify first product is visible        
        When User click on View Product of first product
        Then User is landed to product detail page
        Then Verify that detail detail is visible: product name, category, price, availability, condition, brand
        When User increase quantity to 4
        When User click Add to cart button
        Then Verify alert success added product should be visible
        When User click View Cart button
        Then Verify that product is displayed in cart page with exact quantity
        