import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('Login Test', async ({ page }) => {
   
    const dashboardPage = new DashboardPage(page);
    await loginPage.login("testuser", "password123");

    await dashboardPage.verifyDashboardLoaded();
});
