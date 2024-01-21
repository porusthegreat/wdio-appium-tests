import AppScreen from './AppScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

const SELECTORS = {
    FRONT_PAGE: '//android.widget.TextView[@text="Front page"]',
    FEATURES: '//android.widget.TextView[@text="Features" and @class="android.widget.TextView"]',
    NEWSPAPER_NAME: '//android.widget.TextView[@text="Saturday, 6 January"]',
    CLOSE_BUTTON: '(//android.view.ViewGroup[@class="android.view.ViewGroup"])[37]',
    PDF_CONTAINER: '(//android.widget.LinearLayout[@class="android.widget.LinearLayout"])[3]',
    PAGE_3: '//android.widget.TextView[@text="3 of 232"]',
    IMAGE_GALLERY: '//android.widget.Image[@text="image" and @class="android.widget.Image"]',
    CLOSE_GALLERY: '//android.widget.TextView[@text="Close" and @class="android.widget.TextView"]',
    GALLERY_END: '//android.widget.TextView[@text="9 of 9" and @class="android.widget.TextView"]',
    GALLERY_CONTAINER: '//android.widget.LinearLayout[@class="android.widget.LinearLayout"]',
};

class NewspaperScreen extends AppScreen {
    get frontPageTabElement() {
        return $(SELECTORS.FRONT_PAGE);
    }

    get newspaperTitleElement() {
        return $(SELECTORS.NEWSPAPER_NAME);
    }
    async closeFailOverPopup() {
        try {
            await $(SELECTORS.CLOSE_BUTTON).click();
        } catch (err) {
            console.log('Failover pop can\'t be closed');
        }
    }

    async verifyNewspaperTitleIsDisplayed() {
        await this.newspaperTitleElement.waitForDisplayed();
        return this.newspaperTitleElement.isDisplayed();
    }

    async verifyFrontPageIsDisplayed() {
        await this.frontPageTabElement.waitForDisplayed();
        return this.frontPageTabElement.isDisplayed();
    }
    async swipeToPageNumberAndOpenIt() {
        let target = '//android.widget.TextView[@text="3 of 232"]';
        let target2 = '//android.widget.TextView[@text="2 of 232"]';
        await new Promise(resolve => setTimeout(resolve, 3000));
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await $(SELECTORS.PDF_CONTAINER),
            searchableElement: await $(target2),
            maxScrolls: 1,
            direction: DIRECTIONS.LEFT,
            percentage: 0.89,
        });
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await $(SELECTORS.PDF_CONTAINER),
            searchableElement: await $(target),
            maxScrolls: 1,
            direction: DIRECTIONS.LEFT,
            percentage: 0.89,
        });
        await $(SELECTORS.PDF_CONTAINER).click().then(await new Promise(resolve => setTimeout(resolve, 3000)));
        await $(SELECTORS.IMAGE_GALLERY).click().then(await new Promise(resolve => setTimeout(resolve, 3000)));
    }

    async swipeToTheEndInGalleryAndClose() {
        await $(SELECTORS.CLOSE_GALLERY).waitForDisplayed();
        await Gestures.checkIfDisplayedWithSwipe({
            scrollContainer: await $(SELECTORS.GALLERY_CONTAINER),
            searchableElement: await $(SELECTORS.GALLERY_END),
            maxScrolls: 8,
            direction: DIRECTIONS.LEFT,
            percentage: 0.89,
        });
        await $(SELECTORS.CLOSE_GALLERY).click();
    }
}

export const newspaper = new NewspaperScreen();