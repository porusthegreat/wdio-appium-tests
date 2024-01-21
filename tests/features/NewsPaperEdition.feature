Feature: Download and View a Newspaper

    Background:
        Given the user is on the Welcome Screen
        And the user navigates to Home Screen

    Scenario: Verify the Newspaper edition is downloadable
        When the user selects the Newspaper tab
        And the user scrolls to Recent Issues
        Then the user clicks on SEE MORE section
        And the user selects the Archive tab
        And the user taps on 6 January 2024 edition
        Then the user sign in on the paywall carousel
        Then the user verifies the edition is downloaded
#
#    Scenario: Verify the Images on Gallery section
#        When the user navigates to Archived screen
#        And the user selects the downloaded 6 January 2024 edition
#        Then user navigates to page 3 on PDF View
#        And the user opens on Image Gallery on the story
#        And the user opens the images in full screen
#        Then the user traverses through all the images and returns to article
#
#
#
