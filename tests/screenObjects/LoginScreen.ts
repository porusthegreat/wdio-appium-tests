import { driver } from '@wdio/globals';
import AppScreen from './AppScreen.js';
import { newspaper } from './NewspaperScreen.js';

const SELECTORS = {
    EMAIL_FIELD: '//android.widget.EditText[@resource-id="login.email"]',
    PASSWORD: '//android.widget.EditText[@resource-id="login.password"]',
    SIGN_IN: 'new UiSelector().text("Sign in")',
    NO_ACCOUNT_CHROME: 'id=com.android.chrome:id/signin_fre_dismiss_button',
    NEGATIVE_BUTTON_CHROME: 'id=com.android.chrome:id/negative_button',
};

class LoginScreen extends AppScreen {

    get signInButton() {
        return $(`android=${SELECTORS.SIGN_IN}`);
    }
    async clickOnSignIn() {
        await driver.hideKeyboard();
        await this.signInButton.click();
    }
    async signInWithCredentials() {
        // await this.dismissFirstTimeFreChrome();
        await this.fillTextField(SELECTORS.EMAIL_FIELD, 'mailqatest94@gmail.com');
        await this.fillTextField(SELECTORS.PASSWORD, 'World123!');
        await this.SignAndHideKeyboard();
    }

    async dismissFirstTimeFreChrome() {
        try {
            const cancelButton = await $(SELECTORS.NO_ACCOUNT_CHROME);
            await cancelButton.click(); // Dismiss the alert by clicking a button
        } catch (error) {
            console.log('Fre already acknowledged or disabled');
        }

        try {
            const noThanksButton = await $(SELECTORS.NEGATIVE_BUTTON_CHROME);
            await noThanksButton.click(); // Dismiss the alert by clicking a button
        } catch (error) {
            console.log('Fre already acknowledged or disabled');
        }
    }
}

export const loginScreen = new LoginScreen();
