@login
Feature: Validate Resource Page
    Background:
        Given user clicks on master module and on resource option
    @TC-01
    @Resource
    Scenario: Verify Add Resource Page
        When user clicks on add resource 
        Then a new add resource form to be displayed 
        When user clicks on close option of the page window
        Then a confirmation message box appears to close or cancel it
        Then user clicks on close or cancel option on the message window

    @TC-02
    @Resource
    Scenario: Verify next button on the resource page 
        When user clicks on add resource 
        And enter details in the fields and clicks on next button 
       
     #  Then a validation message to be displayed for mandatory fields of that page
     #  Then user should be redirected to the next page

    @TC-03
    @Resource
    Scenario: Verify back button on the resource page 
         When user clicks on add resource
         And enter details in fields and clicks on back button
         Then user should be redirected to the previously opened page        

    @TC-04
    @Resource
    Scenario: Verify Role option on the resource page 
        When user clicks on add resource
        And enter details in fields
        When user selects Vendor Admin in the role option
        Then options related to vendor admin have to be displayed on the page

    @TC-05
    @Resource
    Scenario: Verify that a new resource is added and the resource list is refreshed with the newly added resource 
        When user clicks on add resource
        And enter details in fields
        When the user clicks on add resource button 
        Then new resource should be registered successfully
        When user clicks on refresh button
        Then the newly registered resource should be added to the resource list

    @TC-06
    @Resource
    Scenario: Verify resource can be saved as draft without completing mandatory fields
        When user clicks on add resource
        When the user enters partial resource details
        And the user clicks on the Save as Draft button
        Then the resource should be saved successfully as a draft
        #And the resource status should be displayed as "Draft"

    @TC-07
    Scenario: Verify resource list download in PDF format
        When user downloads the PDF file
        Then verify the file contents of downloaded pdf file

    @TC-08
    Scenario: Verify resource list download in Excel formats
        When user downloads the Excel file
        Then verify the file contents of downloaded excel file
        
    @TC-09
    Scenario Outline: Display resources based on selected resource status
        When the user clicks on the Resource Status dropdown
        And the user selects "<status>" status
        Then only resources with "<status>" status should be displayed

        Examples:
         | status   |
         | Active   |
         | Inactive |  
    
    @TC-10
    Scenario Outline: Validate resource search by name or email or mobile number
        When the user enters "<searchValue>" in the search field
        Then only records matching "<searchValue>" should be displayed

        Examples:
         | searchValue      |
         | John             |
         | john@example.com |
         | 9452312345       |
    
    @TC-11
    @Resource
    Scenario: Verify view button on the list
        When user clicks on view button on the page
        Then resource details should be displayed 

    @TC-12
    @Resource
    Scenario: Verify edit button on the list   
        When user clicks on edit button on the page
        Then resource details should be displayed

    @TC-13
    @Resource
    Scenario: Verify project mapping button on the list   
        When user clicks on project mapping button on the page
        Then resource details should be displayed and editable

    @TC-14
    @Resource
    Scenario: Verify inactive button on the list   


    @TC-15
    @Resource
    Scenario: Verify sync button on the list   
                
    
    @TC-16
    @Resource
    Scenario: Verify lock button on the list   
       


    @TC-NEG-01
    @Negative @Resource
    Scenario: Add New Resource with empty fields 
        When user clicks on add resource 
        And user clicks on save button without entering details in mandatory fields
        Then validation message should be displayed for mandatory fields

    @TC-NEG-02
    @Negative @Resource
    Scenario Outline: Verify validation for mandatory fields
        When user clicks on add resource
        And user enters valid details in all mandatory fields except "<field>"
        And the user clicks on save button
        Then a validation message should be displayed for "<field>"

        Examples:
            |field                  |
            |First Name             |
            |Last Name              |
            |Email ID               |
            |Mobile NUmber          |
            |Department             |
            |Role                   |
            |Select Engagement Type |
            |Select Country         |
            |Bank Name              |
            |Account Number         |

    @TC-NEG-03
    @Negative @Resource
    Scenario Outline: Verify validation for invalid email and mobile values
        When user clicks on add resource
        And the user enters valid details in all mandatory fields
        When the user enters "<invalidValue>" in the field
        And the user clicks on save button 
        Then the validation message should be displayed for the field 
        
        Examples:
            | field          |  invalidValue |
            | Email ID       |  kishore      |
            | Email ID       |  kishore@     |
            | Email ID       |  @gmail.com   |
            | Email ID       |  kishore@gmail|
            | Mobile Number  |  12345        |
            | Mobile Number  |  abcdefghij   |
            | Mobile Number  |  !@#$%^&*()   |
            | Mobile Number  |  123456789012 |
    
    @TC-NEG-04
    @Negative @Resource
    Scenario Outline: Verify validation for invalid first name and last name
        When user clicks on add resource
        And the user enters valid details in all mandatory fields
        When the user enters "<invalidValue>" in the name field 
        And the user clicks on save button 
        Then the validation message should be displayed for the First Name field 

        Examples:
            |field       | invalidValue  |
            |First Name  | 123456        |
            |First Name  | !@#$%^&       |
            |First Name  | abcde1234     |
            |First Name  | K             |
            |Last Name   | 123456        |
            |Last Name   | !@#$%^&       |
            |Last Name   | abcde1234     |
        
        
    @TC-NEG-06
    @Negative @Resource
    Scenario: Verify validation of resource with existing Email ID 
       When user clicks on add resource
       And the user enters valid details in all mandatory fields 
       And the user enters existing email ID "<>" in the Email ID field
       And the user clicks on save button
       Then a validation message should be displayed 
    
    @TC-NEG-07
    @Negative @Resource
    Scenario: Verify resource details are not saved when the form is closed
      When user clicks on add resource
      And the user enters resource details in the form
      When the user clicks on the Close button
      And the user opens the Add New Resource form again
      Then the previously entered resource details should not be displayed
    
            

        


            





