Feature: Login User with invalid email and password

    Login User with invalid email and password

      Scenario: Login with valid credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I Click on link text Signup or Login
        Then I directed to new page the login form should be visible
        When I input invalid email address
        When And I input valid password
        When And I click login button
        Then The error warning should be visible and contains information login failed