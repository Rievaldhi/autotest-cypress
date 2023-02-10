Feature: User Access Test Cases Page

    User Access Test Cases Page

    Scenario: Access Test Cases Page
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Link text Test Cases should be visible
        When I click link text Test Cases
        Then I should be directed to Test Cases page
