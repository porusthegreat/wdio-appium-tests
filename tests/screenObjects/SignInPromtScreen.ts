import AppScreen from './AppScreen.js';
import { driver } from '@wdio/globals';

const SELECTORS = {
    // SIGN_IN: 'new UiSelector().text("Sign in")'
    SIGN_IN: '//android.widget.TextView[@text="Sign in"]'
};
class SignInPromptScreen extends AppScreen {
    get signInButton() {
        // return $(`android=${SELECTORS.SIGN_IN}`);
        return $(SELECTORS.SIGN_IN);
    }
    async clickOnSignIn() {
        await driver.hideKeyboard();
        await this.signInButton.click();
    }
}

export const signInScreen = new SignInPromptScreen();