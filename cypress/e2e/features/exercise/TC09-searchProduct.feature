Feature: User Search Product by Product Name

    User able to Search Product by Product Name

    Scenario: User Search Product by Product Name
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify user is navigated to ALL PRODUCTS page successfully
        When User enter product name in search input and click search button
        Then Verify text title SEARCHED PRODUCTS is visible
        Then Verify the products related to search are visible
