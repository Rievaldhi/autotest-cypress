Feature: Flow Contact Us and Fill in the Contact Us Form 

    Flow Contact Us and Fill in the Contact Us Form

    Scenario: Register With Valid Credential
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        When I click link text Contact Us
        Then Contact Us form should be visible
        When I fill in the form
        When I finish fill in the form and I attach my file
        When I click button submit in the form Contact Us
        Then Alert message success submit should be visible
        When I click home button
        Then Web app already open the home page should be visible
