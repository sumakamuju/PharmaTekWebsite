@login
Feature: Security page

    Background: :
        Given user clicks on Security
    @TC-1
    Scenario: validate Resource Screen Mapping option
        Then user clicks on Resource Screen Mapping
        Then user redirected to Resource Screen Mapping page