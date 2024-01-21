import { When } from '@wdio/cucumber-framework';
import { tabBar } from '../screenObjects/components/TabBar.js';

class TabBarSteps {
    get openNewPaper() {
        return tabBar.openNewsPaperTab();
    }
}
const tabBarSteps = new TabBarSteps();

When(/^the user selects the Newspaper tab$/,  { timeout: 1000000 }, async () => {
    await tabBarSteps.openNewPaper;
});
