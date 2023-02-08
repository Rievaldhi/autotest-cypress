Feature: Register User

    Register Proccess With a Valid Credential

    Scenario: Register With Valid Credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I Click on link text Signup or Login
        Then I directed to new page the sign up form should be visible
        When I enter a valid Name
        When I enter valid email
        When I click button sign up
        Then Error warning data already exist should be visible