Feature: Verify User Able to Choose Specific Category Product

    User Able to Choose Specific Category Product

    Scenario: Verify User Able to Choose Specific Category Product
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User click on Products link text
        Then Verify that categories are visible on left side bar
        When User Click on Women category
        When User Click on sub category for example Dress
        Then Verify that category page is displayed and confirm text Women Dress Products
        Then Verify the Result From Dress Category
        When User Click on Man category
        When User Click on sub category for example Jeans
        Then Verify that category page is displayed and confirm text Man Jeans Products
        Then Verify the Result From Jeans Category
