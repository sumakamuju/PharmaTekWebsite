Feature: Dashboard page
    Background:
        Given user logged in 
        @TC-1
     Scenario: verify dashboard page is displayed
       Then user should be redirected to dashboard page
        Then user should see the "DASHBOARD" text
       @TC-2 
     Scenario: validate the options on the page
         Then user clicks on admin pharmatek dropdown and options within it
        