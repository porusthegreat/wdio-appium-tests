Feature: Web App Tests

    Scenario: Verify the video player functionality
        Given the user is on video page
        And the user accepts the cookies
        And click on Video in page to begin playback
        Then click the video again to pause playback
        And click on the forward arrow to change to the next video
        And click on the back arrow to navigate to the previous video
        And click on the speaker icon to mute the video
        Then click on the speaker icon again to unmute the video

    Scenario: Get the Position and Points for the given team from the Premier League table
        Given the user is on homepage
#        And the user accepts the cookies on homepage
        And the user clicks on Sport menu and scroll down to the Premier League table
        When click on the View all tables
        Then Retrieve the Position and PTS for the 'Aston Villa' team