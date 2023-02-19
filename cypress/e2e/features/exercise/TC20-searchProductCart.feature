Feature: User Search Products and Verify Cart After Login

    User able to Search Products and Verify Cart After Login

    Scenario: User Search Products and Verify Cart After Login
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify user is navigated to ALL PRODUCTS page successfully
        When User enter product name in search input and click search button
        Then Verify text title SEARCHED PRODUCTS is visible
        Then Verify the products related to search are visible
        When User Click Add to Cart For Product Id 33
        Then Verify alert success added product should be visible
        When User click View Cart button
        Then Verify Product Id 33 Should be Added to Cart
        When I Click on link text Signup or Login
        Then I directed to new page the login form should be visible
        When I input valid email address
        When And I input valid password
        When And I click login button
        Then I Already Login and See My Username
        When User Click Cart button
        Then Verify Product Id 33 Should be Added to Cart
