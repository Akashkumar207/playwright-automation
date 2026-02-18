import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage.js';

test('Verify Dashboard Page', async ({ page }) => {

    const dashboard = new DashboardPage(page);

    await page.goto("YOUR_URL");

    await dashboard.verifyDashboardPage();

});
