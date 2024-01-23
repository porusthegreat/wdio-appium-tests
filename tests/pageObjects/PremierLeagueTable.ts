import WebPage from './WebPage.js';

const SELECTORS = {
    PREMIER_LEAGUE_TABLE: '//div[text()="Premier League Table"]',
    POINTS: '//td[contains(@class, "score-pts_")]',
    POSITION: '//td[contains(@class, "pos_")]',
};

class PremierLeagueTable extends WebPage {
    async verifyUserIsOnPLPage() {
        await this.waitUntilPageLoads(SELECTORS.PREMIER_LEAGUE_TABLE);
        return $(SELECTORS.PREMIER_LEAGUE_TABLE).isDisplayed();
    }

    async getPositionBy(teamName: string) {
        // let teamColumn = `//td[contains(@class, "team-short") and contains(text(),"${teamName}")]`;
        let teamColumn = `//img[contains(@alt,"${teamName}")]`;
        return $(teamColumn).parentElement()
            .previousElement()
            .getText();
    }

    async getPointsBy(teamName: string) {
        let teamColumn = `//td[contains(@class, "team-short") and contains(text(),"${teamName}")]`;
        // let teamColumn = `//img[contains(@alt,"${teamName}")]`;
        return $(teamColumn).nextElement().nextElement().nextElement().nextElement().nextElement()
            .nextElement()
            .getText();
    }

}

export const premierLeague = new PremierLeagueTable();