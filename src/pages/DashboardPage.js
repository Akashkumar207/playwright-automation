import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

    constructor(page) {
        super(page);

        this.dashboardHeader = "//h1[contains(text(),'Dashboard')]";
    }

    async verifyDashboardLoaded() {
        await this.page.locator(this.dashboardHeader).waitFor({ state: "visible" });
    }
}
