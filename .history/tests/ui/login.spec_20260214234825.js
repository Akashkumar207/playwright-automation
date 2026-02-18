import { test, expect } from '../../fixtures/baseTest';
import data from '../../test-data/loginData.json';

test('Valid Login Test', async ({ loginPage, page }) => {

  await loginPage.gotoLoginPage();

  await loginPage.login(
    data.validUser,
    data.validPassword
  );

  // Validation after login
//   await expect(page).toHaveURL(/dashboard|profile|home/);
});
