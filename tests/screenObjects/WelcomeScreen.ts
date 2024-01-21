import AppScreen from './AppScreen.js';

const SELECTORS = {
    CONTINUE_BUTTON: '//android.widget.TextView[@text="Continue"]',
    DISMISS_UPDATE: 'id=android:id/button2',
    CLOSE_BUTTON: '(//android.view.ViewGroup[@class="android.view.ViewGroup"])[20]'
};

class WelcomeScreen extends AppScreen {
    async dismissUpdateAppAlertIfVisible() {
        try {
            const cancelButton = await $(SELECTORS.DISMISS_UPDATE);
            await cancelButton.click(); // Dismiss the alert by clicking a button
            await this.closeFailOverPopup();
        } catch (error) {
            console.log('Update app alert not found.');
        }
    }

    async isContinueButtonVisible() {
        return this.waitForIsShown(SELECTORS.CONTINUE_BUTTON);
    }

    async tapOnContinue() {
        await this.waitForIsShown(SELECTORS.CONTINUE_BUTTON);
        await $(SELECTORS.CONTINUE_BUTTON).click().then(await new Promise(resolve => setTimeout(resolve, 500)));
    }

    async closeFailOverPopup() {
        await this.waitForIsShown(SELECTORS.CLOSE_BUTTON);
        await $(SELECTORS.CLOSE_BUTTON).click().then(await new Promise(resolve => setTimeout(resolve, 1000)));
    }
}

export const welcomeScreen = new WelcomeScreen();