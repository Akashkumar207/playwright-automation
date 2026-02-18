import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/Login';

// import { HomePage } from '../pages/HomePage.js';
// import { CartPage } from '../pages/CartPage.js';
// import { CommonUtils } from '../utils/CommonUtils.js';


test('Login Test', async ({ page }) => {

    //Login test
    const login = new Loginpage1(page);

    await login.gotoLoginPage();
    await login.login("YMI000050522", "YMI000050522");
    await page.waitForTimeout(5000)
    

    // C:\Users\DELL\OneDrive\Desktop\playwrightautomation\tests\test\login.spec.js
    // C:\Users\DELL\OneDrive\Desktop\playwrightautomation\tests\pages\LoginPage.js
    //C:\Users\DELL\OneDrive\Desktop\playwrightautomation\tests\pages\LoginPage.js

  //HomePage test
    //  const homePage=  new HomePage(page)
    //     await homePage.addProductToCart("Nexus 6")
    //     await page.waitForTimeout(5000)
    //     await homePage.gotoCart()


   //Cart Test
   
//    const cart=new CartPage(page)
//    await page.waitForTimeout(5000)
//    const status= cart.checkProductInCart("Nexus 6")
//    expect(await status).toBe(true)
   

});
