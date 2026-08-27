@login
Feature: Validate New Resource Request Page
    Background:
        Given user clicks on master option and on new resource request option

    @TC-1
    Scenario: validate add resource request
        When user clicks on add resource request option
        Then new resource request form to be displayed
       # When user enters text fields
       # Then clicks on cancel or save option
        When user clicks on close option of the form page
        And message window to be displayed with options
        Then user clicks on close or yes, Cancel it option
   @TC-2
    Scenario: validate download option
        When user clicks on download option and selects excel or pdf format
       # Then verify the downloaded pdf file 
        Then verify the downloaded excel file
   @TC-3
    Scenario: Validate search option
        When user enters a name or email in the search field
        Then only the matching records should be displayed in the list