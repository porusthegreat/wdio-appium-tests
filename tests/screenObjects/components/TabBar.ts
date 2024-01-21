const SELECTORS = {
    NEWSPAPER_TAB: '~Newspaper',
};

class TabBar {
    async openNewsPaperTab() {
        await $(SELECTORS.NEWSPAPER_TAB).waitForDisplayed();
        await $(SELECTORS.NEWSPAPER_TAB).click();
    }
}

export const tabBar = new TabBar();
