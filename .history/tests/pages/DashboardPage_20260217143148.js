import { expect } from '@playwright/test';

export class DashboardPage {

    constructor(page) {
        this.page = page;

        // Dashboard menu locator
        this.dashboard = "//a[@class='text-muted']";
    }

    async verifyDashboardPage() {
        await expect(this.page.locator(this.dashboard)).toBeVisible();
        con
    }

}
