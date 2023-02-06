Feature: Register User

    Register Proccess With a Valid Credential

    Scenario: Register With Valid Credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I Click on link text Signup or Login
        When I directed to new page the sign up form should be visible
        When I enter a valid Name
        When I enter valid email
        When I click button sign up
        When I will see form to complete sign up proccess
        When I complete the sign up form
        When I already fill in the sign up form and click create
        When I Validate Account Already Created
        When I Already Login and See My Username
        # When I will delete my account
        # Then I Validate My Account Already Deleted