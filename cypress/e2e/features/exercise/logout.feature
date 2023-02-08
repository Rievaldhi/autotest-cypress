Feature: Login User with valid credential and do logout proccess

    Login User with valid credential and do logout proccess

    Scenario: Login with valid credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I Click on link text Signup or Login
        Then I directed to new page the login form should be visible
        When I input valid email address
        When And I input valid password
        When And I click login button
        Then I Already Login and See My Username
        When I click linktext logout
        Then Web app already open the home page should be visible