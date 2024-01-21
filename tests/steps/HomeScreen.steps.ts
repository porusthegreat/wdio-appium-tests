import { When, Then } from '@wdio/cucumber-framework';
import { homeScreen } from '../screenObjects/HomeScreen.js';
import { allIssuesScreen } from '../screenObjects/AllIssuesScreen.js';
import { signInScreen } from '../screenObjects/SignInPromtScreen.js';
import { loginScreen } from '../screenObjects/LoginScreen.js';
import { newspaper } from '../screenObjects/NewspaperScreen.js';
import * as klaw from 'klaw';
import { driver } from '@wdio/globals';

When(/^the user scrolls to Recent Issues$/,  { timeout: 1000000 }, async () => {
    await homeScreen.navigateToRecentIssues().then(result => expect(result).toBeTruthy());
});
Then(/^the user clicks on SEE MORE section$/, { timeout: 1000000 }, async () => {
    await homeScreen.swipeLeftToSeeMore();
});
Then(/^the user selects the Archive tab$/,  { timeout: 1000000 }, async () => {
    await allIssuesScreen.selectArchiveTab();
});
Then(/^the user scrolls to find 6 January 2024 edition$/,  { timeout: 1000000 }, async () => {
    await allIssuesScreen.scrollToViewNewsLetter();
});

Then(/^the user sign in on the paywall carousel$/, { timeout: 5000000 }, async () => {
    await signInScreen.clickOnSignIn();
    await loginScreen.signInWithCredentials();
});
Then(/^the user verifies the edition is displayed and the title is correct$/,  { timeout: 5000000 }, async () => {
    // await expect(await newspaper.verifyNewspaperTitleIsDisplayed()).toBeTruthy();
    await newspaper.verifyFrontPageIsDisplayed().then(result => expect(result).toBeTruthy());
    await newspaper.closeFailOverPopup();
});
When(/^the user navigates to Archived screen$/, { timeout: 9000000 }, async () => {
    await new Promise(resolve => setTimeout(resolve, 15000));
    await homeScreen.clickOnArchiveIcon();
});
When(/^the user navigates back to Home Screen$/, { timeout: 9000000 }, async function () {
    await driver.back();
    await driver.back();
});
Then(/^user navigates to page 3 on PDF View$/, { timeout: 9000000 }, async () => {
    await newspaper.swipeToPageNumberAndOpenIt();
});

Then(/^the user opens on Image Gallery on the story and traverses till End$/, { timeout: 9000000 }, async function () {
    await newspaper.swipeToTheEndInGalleryAndClose();
});