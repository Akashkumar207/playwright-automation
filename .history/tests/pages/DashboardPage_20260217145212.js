import { expect } from '@playwright/test';

export class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboardMenu = page.locator('a.text-muted');
    }

    async verifyDashboardPage() {
        await expect(this.dashboardMenu).toBeVisible();
    }
}
