import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/');

  await page.fill('#username', 'YMI000050522');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/dashboard/);
});
