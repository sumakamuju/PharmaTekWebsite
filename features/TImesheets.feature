@login
Feature: Timesheets page

    Background:
        Given user clicks on Timesheets
    @TC-1
    Scenario: validate Roster option
        Then user clicks on Roster
        Then user redirected to Roster page
    @TC-2
    Scenario: validate Approvals option
        Then user clicks on Approvals
        Then user redirected to Approvals page
