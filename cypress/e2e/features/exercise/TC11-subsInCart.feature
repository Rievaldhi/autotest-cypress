Feature: Verify Subscription in cart page

    Verify User Able to Subscription in cart page

    Scenario: Verify Subscription in cart page
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click link text cart
        Then Verify User Already in Cart Page
        Then Verify text SUBSCRIPTION
        When User enter email address in input and click arrow button
        Then Verify success message You have been successfully subscribed! is visible