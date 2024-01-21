Feature: Download and View a Newspaper

#    Background:
#        Given the user is on the Welcome Screen
#        And the user navigates to Home Screen

    Scenario: Verify the Newspaper edition is downloadable
        Given the user is on the Welcome Screen
        And the user navigates to Home Screen
        And the user selects the Newspaper tab
        And the user scrolls to Recent Issues
        Then the user clicks on SEE MORE section
        And the user selects the Archive tab
        And the user scrolls to find 6 January 2024 edition
        Then the user sign in on the paywall carousel
        Then the user verifies the edition is displayed and the title is correct

    Scenario: Verify the Images on Gallery section
        When the user navigates back to Home Screen
        And the user navigates to Archived screen
        Then the user selects the Archive tab
        And the user scrolls to find 6 January 2024 edition
        Then user navigates to page 3 on PDF View
        And the user opens on Image Gallery on the story and traverses till End

