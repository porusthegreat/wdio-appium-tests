import { When, Then } from '@wdio/cucumber-framework';
import { homeScreen } from '../screenObjects/HomeScreen.js';
import { allIssuesScreen } from '../screenObjects/AllIssuesScreen.js';
import { signInScreen } from '../screenObjects/SignInPromtScreen.js';
import { loginScreen } from '../screenObjects/LoginScreen.js';
import { newspaper } from '../screenObjects/NewspaperScreen.js';

When(/^the user scrolls to Recent Issues$/,  { timeout: 1000000 }, async () => {
    await homeScreen.navigateToRecentIssues().then(result => expect(result).toBeTruthy());
});
Then(/^the user clicks on SEE MORE section$/, { timeout: 1000000 }, async () => {
    await homeScreen.swipeLeftToSeeMore();
});
Then(/^the user selects the Archive tab$/,  { timeout: 1000000 }, async () => {
    await allIssuesScreen.selectArchiveTab();
});
Then(/^the user taps on 6 January 2024 edition$/,  { timeout: 1000000 }, async () => {
    await allIssuesScreen.scrollToViewNewsLetter();
});

Then(/^the user sign in on the paywall carousel$/, { timeout: 5000000 }, async () => {
    await signInScreen.clickOnSignIn();
    await loginScreen.signInWithCredentials();
});
Then(/^the user verifies the edition is downloaded$/,  { timeout: 5000000 }, async () => {
    await expect(await newspaper.verifyNewspaperTitleIsDisplayed()).toBeTruthy();
    await expect(await newspaper.verifyFrontPageIsDisplayed()).toBeTruthy();
});