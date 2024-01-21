import AppScreen from './AppScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

const SELECTORS = {
    ARCHIVE_TAB: 'new UiSelector().text("Archive")',
    VERTICAL_SCROLL_VIEW: '(//android.view.ViewGroup[@class="android.view.ViewGroup"])[28]',
    NEWSPAPER_NAME: 'new UiSelector().text("6 January 2024")'
};

class AllIssuesScreen extends AppScreen {
    get archiveTab() {
        return $(`android=${SELECTORS.ARCHIVE_TAB}`);
    }
    get newsCard() {
        return $(`android=${SELECTORS.NEWSPAPER_NAME}`);
    }

    async selectArchiveTab() {
        await this.archiveTab.click();
    }

    async scrollToViewNewsLetter() {
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await $(SELECTORS.VERTICAL_SCROLL_VIEW),
            searchableElement: await this.newsCard,
            maxScrolls: 100,
            direction: DIRECTIONS.UP,
            percentage: 0.99,
        });
        await this.newsCard.waitForDisplayed();
        await this.newsCard.click();
    }
}

export const allIssuesScreen = new AllIssuesScreen();