import WebPage from './WebPage.js';
const SELECTORS = {
    HOME: 'li.home',
    SPORT: 'li.sport',
    TABLES: '//a[text()="Tables"]',
};
class HomePage extends WebPage {
    async userNavigatesToHomePage() {
        await browser.url('/');
        await browser.maximizeWindow();
        return browser.getTitle();
    }

    async waitForHomePageLoad() {
        await this.waitUntilPageLoads(SELECTORS.HOME);
    }

    async clickOnSportsMenu() {
        await $(SELECTORS.SPORT).waitForClickable();
        await $(SELECTORS.SPORT).click();
    }
    async clickOnTables() {
        await $(SELECTORS.TABLES).scrollIntoView(true);
        await $(SELECTORS.TABLES).waitForClickable();
        await $(SELECTORS.TABLES).click();
    }
}

export const homepage = new HomePage();