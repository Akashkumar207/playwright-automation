import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/');
   conawait page.toHaveURL()
    const username= await page.locator("#UserName")
    expect(page).toHaveURL

  await page.fill('#UserName', 'YMI000050522');

  await page.fill('#Password', 'YMI000050522');
  await page.click('#sign');

//   await expect(page).toHaveURL(/dashboard/);
});
