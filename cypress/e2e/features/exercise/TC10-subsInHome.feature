Feature: Verify Subscription in home page

    Verify User Able to Subscription in home page

    Scenario: Verify Subscription in home page
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User scroll down to footer
        Then Verify text SUBSCRIPTION
        When User enter email address in input and click arrow button
        Then Verify success message You have been successfully subscribed! is visible