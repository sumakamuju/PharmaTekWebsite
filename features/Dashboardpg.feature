@login
Feature: Dashboard page
  @TC-1
  Scenario: verify dashboard page is displayed
    Then user should be redirected to dashboard page
    Then user should see the "DASHBOARD" text
  @TC-2
  Scenario: validate the profile option
    Then user clicks on admin pharmatek dropdown
    Then user clicks on profile option
  @TC-3
  Scenario: validate the change password option
    Then user clicks on admin pharmatek dropdown 
    Then user clicks on change password option
  @TC-4
  Scenario: validate the log out option
    Then user clicks on admin pharmatek dropdown
    Then user clicks on log out option
