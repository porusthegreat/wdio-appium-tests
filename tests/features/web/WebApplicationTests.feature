Feature: Web App Tests

    Scenario: Verify the video player functionality.
        Given the user is on video page
        And the user accepts the cookies
        And click on Video in page to begin playback
        Then click the video again to pause playback
        And click on the forward arrow to change to the next video
        And click on the back arrow to navigate to the previous video
        And click on the speaker icon to mute the video
        Then click on the speaker icon again to unmute the video
