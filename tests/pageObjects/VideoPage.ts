import WebPage from './WebPage.js';

const SELECTORS = {
    VIDEO_COMPONENT: 'video.vjs-tech',
    BIG_PLAY_BUTTON: '.vjs-big-play-button',
    PAUSE_CONTROL_BUTTON: '.vjs-play-control.vjs-control.vjs-playing',
    PLAY_CONTROL_BUTTON: '.vjs-play-control.vjs-control.vjs-paused',
    MUTE_VOLUME_BUTTON: 'div.vjs-volume-menu-button',
    PREVIOUS_VIDEO_BUTTON: '.mol-previous-control.vjs-control',
    NEXT_VIDEO_BUTTON: '.mol-skip-control.vjs-control',
    VIDEO_TITLE_ELEMENT: 'div.vjs-title-text',
    ADVERTISEMENT: '//div[text()="Advertisement"]'
};

class VideoPage extends WebPage {
    async navigateToVideoPage() {
        await browser.maximizeWindow();
        await browser.url('/video/index.html');
        return browser.getTitle();
    }

    async playVideoOnThePage() {
        await $(SELECTORS.VIDEO_TITLE_ELEMENT).scrollIntoView();
        await $(SELECTORS.BIG_PLAY_BUTTON).click();
        return $(SELECTORS.PAUSE_CONTROL_BUTTON).isDisplayed();
    }

    async pauseVideo() {
        await $(SELECTORS.PAUSE_CONTROL_BUTTON).waitForClickable();
        await $(SELECTORS.PAUSE_CONTROL_BUTTON).click();
        return $(SELECTORS.PLAY_CONTROL_BUTTON).isDisplayed();
    }

    async muteVideo() {
        await $(SELECTORS.MUTE_VOLUME_BUTTON).waitForClickable();
        await $(SELECTORS.MUTE_VOLUME_BUTTON).click();
        return $(SELECTORS.MUTE_VOLUME_BUTTON).getAttribute('aria-pressed');

    }

    async unmuteVideo() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await $(SELECTORS.MUTE_VOLUME_BUTTON).waitForClickable();
        await $(SELECTORS.MUTE_VOLUME_BUTTON).click();
        return $(SELECTORS.MUTE_VOLUME_BUTTON).getAttribute('aria-pressed');
    }

    async playNextVideo() {
        let currentTitle = await $(SELECTORS.VIDEO_TITLE_ELEMENT).getText();
        await $(SELECTORS.NEXT_VIDEO_BUTTON).waitForClickable();
        await $(SELECTORS.NEXT_VIDEO_BUTTON).click();
        await this.waitForElementToDisAppearByText(currentTitle);
        await this.waitForAdToBePlayed();
        await this.WaitForAdToFinish();
        let nextVideoTitle = await $(SELECTORS.VIDEO_TITLE_ELEMENT).getText();
        return currentTitle != nextVideoTitle;
    }

    async playPreviousVideo() {
        let currentTitle = await $(SELECTORS.VIDEO_TITLE_ELEMENT).getText();
        await $(SELECTORS.PREVIOUS_VIDEO_BUTTON).waitForClickable();
        await $(SELECTORS.PREVIOUS_VIDEO_BUTTON).click();
        await this.waitForElementToDisAppearByText(currentTitle);
        let previousVideoTitle = await $(SELECTORS.VIDEO_TITLE_ELEMENT).getText();
        return currentTitle != previousVideoTitle;
    }

    async waitForVideoPageLoad() {
        await this.waitUntilPageLoads(SELECTORS.BIG_PLAY_BUTTON);
    }

    private async WaitForAdToFinish() {
        await this.waitForElementToDisAppear(SELECTORS.ADVERTISEMENT);
    }

    private async waitForAdToBePlayed() {
        await $(SELECTORS.ADVERTISEMENT).waitForDisplayed();
    }
}

export const videoPage = new VideoPage();