Feature: Verify address details in checkout page

    Verify address details in checkout page

    Scenario: Verify address details in checkout page
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When I Click on link text Signup or Login
        Then I directed to new page the sign up form should be visible
        When User do signup or register proccess
        When I click button sign up
        Then I will see form to complete sign up proccess
        When I complete the sign up form
        When I already fill in the sign up form and click create
        Then I Validate Account Already Created
        Then User Will be Login Properly and See Their Username
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
        When User Click Proceed To Checkout
        Then Verify Address Details
        When I will delete my account
        Then I Validate My Account Already Deleted