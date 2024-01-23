import { Given, When, Then } from '@wdio/cucumber-framework';
import { videoPage } from '../../pageObjects/VideoPage.js';
import { homepage } from '../../pageObjects/HomePage.js';
import { premierLeague } from '../../pageObjects/PremierLeagueTable.js';

class HomePageSpecs {
    public async verifyUserIsOnVideoPage() {
        let title = await videoPage.navigateToVideoPage();
        await expect(title).toBe('Mail Online Videos: Top News & Viral Videos, Clips & Footage | Daily Mail Online');
    }

    public async userAcceptsCookies() {
        await homepage.acceptCookies();
        await homepage.waitForHomePageLoad();
    }

    async userNavigatesToSportsSection() {
        await homepage.clickOnSportsMenu();
    }

    async userNavigatesToPremierLeague() {
        await homepage.clickOnTables();
        return premierLeague.verifyUserIsOnPLPage();
    }

    async getTeamPositionAndPointsBy(teamName: string) {
        console.info(`Team Position : ${await premierLeague.getPositionBy(teamName)}`);
        console.info(`Team Points : ${await premierLeague.getPointsBy(teamName)}`);
    }

    async userNavigatesToHomePage() {
        let title = await homepage.userNavigatesToHomePage();
        await expect(title).toBe('UK Home | Daily Mail Online');
    }
}

const homepageSpecs = new HomePageSpecs();

Given(/^the user is on homepage$/, { timeout: 1000000 }, async () => {
    await homepageSpecs.userNavigatesToHomePage();
});

Given(/^the user accepts the cookies on homepage$/, { timeout: 1000000 }, async () => {
    await homepageSpecs.userAcceptsCookies();
});

Given(/^the user clicks on Sport menu and scroll down to the Premier League table$/,
    { timeout: 1000000 }, async () => {
        await homepageSpecs.userNavigatesToSportsSection();
    });

When(/^click on the View all tables$/, { timeout: 1000000 }, async () => {
    await expect(await homepageSpecs.userNavigatesToPremierLeague()).toBeTruthy();
});

Then(/^Retrieve the Position and PTS for the '(.*)' team$/, { timeout: 1000000 }, async (teamName: string) => {
    await homepageSpecs.getTeamPositionAndPointsBy(teamName);
});
