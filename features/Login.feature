Feature: Login functionality

 Background:
        Given user navigates to the login page

    @TC-1
    Scenario: Validate Login functionality using valid credentials
        When user enters accountid and email and password
        And user clicks on signin button
        Then user redirected to user dashboard page 
    @TC-2
    Scenario Outline: Validate login with invalid credentials
        When user enters "<accountid>" and "<email>" and "<password>"
        And user clicks on signin button
        Then user should stay in login page 
   
    Examples:
       | accountid    | email                      | password       |       
       |              |                            |                |      
       |              |admin@pharmatek.com         |Mek@123456      |
       |549403452497  |                            |Mek@123456      |
       |549403452497  |admin@pharmatek.com         |                |
       |5494034529    |admin@pharmatek.com         |Mek@123456      |
       |549403452497  |adm@pharmatek.com           |Mek@123456      |
       |549403452497  |admin@pharmatek.com         |mek@123456      |
       |549403452     |admin@pharma.com            |mek@13456       |
       |abcdefghijkl  |admin@pharmatek.com         |Mek@123456      |
       |549403452497  |sumatestingmail@gmail.com   |Mek@123456      |
       |549403452497  |admin@pharmatek.com         |mek0123456      |
       |54940345249789012345 |admin@pharmatek.com  |Mek@123456      |
       |549403        |admin@pharmatek.com         |Mek@123456      |
       |!@#$%^&*()!@  |admin@pharmatek.com         |Mek@123456      | 
       |549403452497  |!@#$%@pharmatek.com         |Mek@123456      |
       |549403452497  |admin@pharmatek.com         |)(*&^%$#@!)     |



       
   


    
    
    
    
    
