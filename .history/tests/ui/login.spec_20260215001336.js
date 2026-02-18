import { test, expect } from '@playwright/test';   
test('Login Test', async ({ page }) => {

    // Login Test
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("akashpal", "akashpal@123#");

    // // Home Page Test
    // const homePage = new HomePage(page);
    // await homePage.addProductToCart("Nexus 6");
    // await homePage.gotoCart();

    // // Cart Test
    // const cart = new CartPage(page);
    // const status = await cart.checkProductInCart("Nexus 6");

    // await expect(status).toBe(true);

});
