Feature: Verify User Add Product to cart from Recommended items

    User Add Product to cart from Recommended items

    Scenario: Verify User Add Product to cart from Recommended items
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User Scroll to bottom of page at Recommend Items
        Then Verify RECOMMENDED ITEMS are visible
        When User select first product from recommend items
        Then Verify alert success added product should be visible
        When User click continue shopping button
        Then User select second product from recommend items
        When User click View Cart button
        Then Verify both products are added to Cart and Verify their prices, quantity and total price