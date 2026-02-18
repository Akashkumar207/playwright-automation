import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("testuser", "password123");

    await dashboardPage.verifyDashboardLoaded();
});
