import AppScreen from './AppScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

const SELECTORS = {
    RECENT_ISSUES: 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Recent issues"))',
    HORIZONTAL_SCROLL_VIEW: '(//android.view.ViewGroup[@class="android.view.ViewGroup"])[36]',
    SEE_MORE: 'new UiSelector().text("SEE MORE")',
    ARCHIVE_ICON: '(//android.view.ViewGroup[@class="android.view.ViewGroup"])[17]'

};

class HomeScreen extends AppScreen {
    get seeMoreCard() {
        return $(`android=${SELECTORS.SEE_MORE}`);
    }

    async navigateToRecentIssues() {
        const element = await $(`android=${SELECTORS.RECENT_ISSUES}`);
        return element.waitForDisplayed();
    }

    async clickOnArchiveIcon() {
        await this.waitForIsShown(SELECTORS.ARCHIVE_ICON);
        await $(SELECTORS.ARCHIVE_ICON).click();
    }

    async swipeLeftToSeeMore() {
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await $(SELECTORS.HORIZONTAL_SCROLL_VIEW),
            searchableElement: await this.seeMoreCard,
            maxScrolls: 50,
            direction: DIRECTIONS.LEFT,
            percentage: 0.89,
        });

        await this.seeMoreCard.waitForDisplayed();
        await this.seeMoreCard.click();
    }
}

export const homeScreen = new HomeScreen();