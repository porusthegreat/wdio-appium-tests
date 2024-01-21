import { Given, When } from '@wdio/cucumber-framework';
import { welcomeScreen } from '../screenObjects/WelcomeScreen.js';

//
class WelcomeScreenSteps {
    async verifyUserIsOnHomeScreen() {
        await welcomeScreen.dismissUpdateAppAlertIfVisible();
        return welcomeScreen.isContinueButtonVisible();
    }

    async navigateToHomeScreen() {
        for (let i = 0; i < 5; i++) {
            await welcomeScreen.tapOnContinue();
        }
    }
}

const welcomeScreenSteps = new WelcomeScreenSteps();

Given(/^the user is on the Welcome Screen$/,  { timeout: 1000000 }, async () => {
    await welcomeScreenSteps.verifyUserIsOnHomeScreen().then(result => expect(result).toBe(true));
});

When(/^the user navigates to Home Screen$/,  { timeout: 1000000 }, async () => {
    await welcomeScreenSteps.navigateToHomeScreen();
});