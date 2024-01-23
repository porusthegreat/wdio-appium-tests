import { Given, Then } from '@wdio/cucumber-framework';
import { videoPage } from '../../pageObjects/VideoPage.js';

class VideoPageSpecs {
    public async verifyUserIsOnVideoPage() {
        let title = await videoPage.navigateToVideoPage();
        await expect(title).toBe('Mail Online Videos: Top News & Viral Videos, Clips & Footage | Daily Mail Online');
    }

    public async userAcceptsCookies() {
        await videoPage.acceptCookies();
        await videoPage.waitForVideoPageLoad();
    }
}

const videoPageSpecs = new VideoPageSpecs();

Given(/^the user is on video page$/, { timeout: 1000000 }, async () => {
    await videoPageSpecs.verifyUserIsOnVideoPage();
});

Then(/^the user accepts the cookies$/, { timeout: 1000000 }, async () => {
    await videoPageSpecs.userAcceptsCookies();
});

Given(/^click on Video in page to begin playback$/, { timeout: 1000000 }, async () => {
    await expect(await videoPage.playVideoOnThePage()).toBeTruthy();
});

Then(/^click the video again to pause playback$/, { timeout: 1000000 }, async () => {
    await expect(await videoPage.pauseVideo()).toBeTruthy();
});

Then(/^click on the forward arrow to change to the next video$/, { timeout: 1000000 }, async function () {
    await expect(await videoPage.playNextVideo()).toBeTruthy();
});

Then(/^click on the back arrow to navigate to the previous video$/, { timeout: 1000000 }, async function () {
    await expect(await videoPage.playPreviousVideo()).toBeTruthy();
});

Then(/^click on the speaker icon to mute the video$/, { timeout: 1000000 }, async function () {
    await expect(await videoPage.muteVideo()).toBe('true');
});

Then(/^click on the speaker icon again to unmute the video$/, { timeout: 1000000 }, async function () {
    await expect(await videoPage.unmuteVideo()).toBe('false');
    await new Promise(resolve => setTimeout(resolve, 15000));
});