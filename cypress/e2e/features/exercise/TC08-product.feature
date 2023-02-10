Feature: Verify Products and product detail page

    User Access Products and product detail page

    Scenario: User Access Products and product detail page
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify user is navigated to ALL PRODUCTS page successfully
        Then Verify first product is visible
        When User click on View Product of first product
        Then User is landed to product detail page
        Then Verify that detail detail is visible: product name, category, price, availability, condition, brand

