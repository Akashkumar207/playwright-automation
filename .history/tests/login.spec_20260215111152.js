import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://associates.yoma.co.in/');
//    console(await page.toHaveURL())
    const username= await page.locator("#UserName")

    username.fill('YMI000050522')

     const password= await page.locator("#Password")
    username.isEnabled().fill('YMI000050522')
    username.isEnabled().fill('')

     await page.click('#sign');

//   await expect(page).toHaveURL(/dashboard/);
});
