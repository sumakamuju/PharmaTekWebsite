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
    @TC-4
    Scenario: Search with mobile number
        When user searches with mobile number in search field
        Then no records should be displayed for an invalid search 


#repeat with existing name with diff mail and mobile
#repeat with existing mail with diff name and mobile
#repeat existing mobile with diff name and mail
#invalid mail format(wo domain, wo .com)
#checking with different mail domains
#mobile number limit
#long input string in name


   # @TC-5
    #Scenario Outline: Invalid inputs in Add Resource Request form
     #   When user clicks on add resource request
      #  And user enters "<firstname>" "<lastname>" "<email>" "<mobilecode>" "<mobilenumber>"
       # And user clicks on save option
        #Then validation error should be displayed

       # Examples:
       # | firstname | lastname | email                   | mobilecode | mobilenumber |
        #| Venkat    | Guttula  | venkatguttula@gmail.com | +91        | 9876543210   |    
        #| Venkat    | Kumar    | venkatg@gmail.com       | +91        | 9876543220   |
        #| Jeevan    | Kumar    | jeevank@gmail.com       | +1         | 0987654321   |
     #   | Sai       | V        | saivgmail.com           | +91        | 7345612345   |
      #  | Sai       | Krishna  | saik@gmailcom           | +91        | 7345562345   |
       # | Sandeep   | Krishna  | sandeepk@yahoo.com      | +91        | 7345563345   |
       # | Jaideep   | K        | jaideepk@rediff.com     | +91        | 9845563345   |
       # | Sujatha   | V        | sujathav@gmail.com      | +91        | 984556334545 |
       # | VeeraVenkataSatyanarayana123456789123456789123456789   | K        | veera@gmail.com     | +91        | 9845564444   |








