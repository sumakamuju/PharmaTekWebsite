@login
Feature: Validate Resource Page
    Background:
        Given user clicks on master module and on resource option
    @TC-1
    Scenario: Verify Add Resource
        When user clicks on add resource 
        Then a new add resource form to be displayed 
        When user clicks on close option of the page window
        Then a confirmation message box appears to close or cancel it
        Then user clicks on close or cancel option on the message window

    @TC-2
    Scenario: Verify resource list download in PDF and Excel formats
        When user downloads the PDF file
        Then verify the file contents of downloaded pdf file
       # When user downloads the Excel file
       # Then verify the file contents of downloaded excel file
        
    @TC-3
    Scenario Outline: Display resources based on selected resource status
        When the user clicks on the Resource Status dropdown
        And the user selects "<status>" status
        Then only resources with "<status>" status should be displayed

        Examples:
         | status   |
         | Active   |
         | Inactive |  
    @TC-4
    Scenario Outline: Validate resource search by name or email or mobile number
        When the user enters "<searchValue>" in the search field
        Then only records matching "<searchValue>" should be displayed

        Examples:
         | searchValue      |
         | John             |
         | john@example.com |
         | 9452312345       |
    @TC-5
    Scenario: Verify resource list refresh functionality
        When the user clicks on the Refresh button
        Then the resource list should be refreshed successfully
        And the latest resource records should be displayed
   
    @TC-NEG-01
    @Negative
    @Resource
    Scenario: Add New Resource with empty fields 
        When user clicks on add resource 
        And user clicks on save button without entering details in mandatory fields
        Then validation message should be displayed for mandatory fields



