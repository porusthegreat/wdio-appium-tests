import AppScreen from './AppScreen.js';

const SELECTORS = {
    FRONT_PAGE: '//android.widget.TextView[@text="Front page" and @class="android.widget.TextView"]',
    NEWSPAPER_NAME: '//android.widget.TextView[@text="Saturday, 6 January" and @class="android.widget.TextView"]'
};

class NewspaperScreen extends AppScreen {
    get frontPageTabElement() {
        return $(SELECTORS.FRONT_PAGE);
    }

    get newspaperTitleElement() {
        return $(SELECTORS.NEWSPAPER_NAME);
    }

    async verifyNewspaperTitleIsDisplayed() {
        await this.newspaperTitleElement.waitForDisplayed();
        return this.newspaperTitleElement.isDisplayed();
    }

    async verifyFrontPageIsDisplayed() {
        await this.frontPageTabElement.waitForDisplayed();
        return this.frontPageTabElement.isDisplayed();
    }
}

export const newspaper = new NewspaperScreen();