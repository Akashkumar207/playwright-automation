import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/');
   console(await page.toHaveURL())
    const username= await page.locator("#UserName")
    username.isEnabled()

     const username= await page.locator("#UserName")
    username.isEnabled()

  await page.fill('#UserName', 'YMI000050522');

  await page.fill('#Password', 'YMI000050522');
  await page.click('#sign');

//   await expect(page).toHaveURL(/dashboard/);
});
