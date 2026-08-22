@login
Feature: Reports page

    Background: :
        Given user clicks on Reports
    @TC-1
    Scenario: validate PO Metrics option
        Then user clicks on PO Metrics
        Then user redirected to PO Metrics page
    @TC-2
    Scenario: validate Invoice Tracking option
        Then user clicks on Invoice Tracking
        Then user redirected to Invoice Tracking page
    @TC-3
    Scenario: validate Profitability By Project option
        Then user clicks on Profitability By Project
        Then user redirected to Profitability By Project page 
    @TC-4
    Scenario: validate Profitability By Resource option
        Then user clicks on Profitability By Resource
        Then user redirected to Profitability By Resource page
    @TC-5
    Scenario: validate Timesheet Tracking option
        Then user clicks on Timesheet Tracking
        Then user redirected to Timesheet Tracking page 
    @TC-6
    Scenario: validate Expenses Tracking option
        Then user clicks on Expenses Tracking
        Then user redirected to Expenses Tracking page 