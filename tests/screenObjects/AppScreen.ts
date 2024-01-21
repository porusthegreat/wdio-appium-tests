import { driver } from '@wdio/globals';
import { Key } from 'webdriverio';

export default class AppScreen {
    async waitForIsShown(selector: string, isShown = true): Promise<boolean | void> {
        return $(selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
    async isDisplayed(selector: string) {
        return $(selector).isDisplayed();
    }
    async fillTextField(selector: string, keys: string) {
        await $(selector).click();
        await $(selector).clearValue();
        await driver.keys(keys);
        await driver.hideKeyboard();
    }

    async SignAndHideKeyboard() {
        await driver.keys([Key.Enter]);
        await new Promise(resolve => setTimeout(resolve, 7000));
    }
}