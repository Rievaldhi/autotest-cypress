Feature: Verify Scroll Up using Arrow button and Scroll Down functionality

    Verify Scroll Up using Arrow button and Scroll Down functionality

    Scenario: Verify Scroll Up using Arrow button and Scroll Down functionality
        Given Launch browser and Navigate to the web app
        When Web app already open the home page should be visible
        Then Verify that home page is visible successfully
        When User scroll down to footer
        Then Verify text SUBSCRIPTION
        When User Click on arrow at bottom right side to move upward
        Then Verify that page is scrolled up and Full Fledged practice website for Automation Engineers text is visible on screen

