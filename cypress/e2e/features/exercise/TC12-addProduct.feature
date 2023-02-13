Feature: Verify User Able to Add Products in Cart

    User Able to Add Products in Cart More Than 1 Product

    Scenario: Verify User Able to Add Products in Cart
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify user is navigated to ALL PRODUCTS page successfully
        Then Verify first product is visible
        When User hover over first product and click Add to cart
        Then Verify alert success added product should be visible
        When User click continue shopping button
        When User hover over second product and click Add to cart
        Then Verify alert success added product should be visible
        When User click View Cart button
        Then Verify both products are added to Cart and Verify their prices, quantity and total price
