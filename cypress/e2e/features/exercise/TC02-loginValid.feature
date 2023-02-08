Feature: Login User with correct email and password

    Login User with correct email and password

    Scenario: Login with valid credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I Click on link text Signup or Login
        Then I directed to new page the login form should be visible
        When I input valid email address
        When And I input valid password
        When And I click login button
        Then I Already Login and See My Username