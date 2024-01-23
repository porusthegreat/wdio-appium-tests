const SELECTORS = {
    ACCEPT_COOKIES: '.button_cVc76.primary_vX6Hs'
};

export default class WebPage {
    async acceptCookies() {
        await $(SELECTORS.ACCEPT_COOKIES).click();
    }

    async waitForElementToDisAppearByText(text: string) {
        let element = '//div[text()="';
        await $(`${element}${text}"]`).waitForDisplayed({ reverse: true });
    }
    async waitForElementToDisAppear(element: string) {
        await $(element).waitForDisplayed({ reverse: true });
    }

    async waitUntilPageLoads(selector: string) {
        await browser.waitUntil(async () => {
            return (await $(selector).waitForClickable());
        }, {
            timeout: 5000,
            timeoutMsg: 'Page Load Timeout 5s'
        });
    }
}