@login
Feature: Invoices management page

    Background: :
        Given user clicks on Invoices management
    @TC-1
    Scenario: validate purchase order option
        Then user clicks on purchase order
        Then user redirected to purchase order page
    @TC-2
    Scenario: validate Customer Invoice option
        Then user clicks on Customer Invoice
        Then user redirected to Customer Invoice page
    @TC-3
    Scenario: validate vendor bill option
        Then user clicks on vendor bill
        Then user redirected to vendor bill page 
    @TC-4
    Scenario: validate expenses option
        Then user clicks on expenses
        Then user redirected to expenses page 