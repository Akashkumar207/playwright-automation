const { test, expect } = require('@playwright/test');

test('My KYC Personal Details Validation', async ({ page }) => {

    // =========================
    // STEP 1 — Open Application
    // =========================
    await page.goto('https://associates.yoma.co.in/');

    // =========================
    // STEP 2 — Login
    // =========================
    await page.fill('input[type="text"]', 'YMI000050522');
    await page.fill('input[type="password"]', 'YOUR_PASSWORD');
    await page.click('button:has-text("Login")');

    await page.waitForLoadState('networkidle');

    // =========================
    // STEP 3 — Click Menu (if collapsible menu exists)
    // =========================
    // If hamburger menu present
    // await page.click('button:has-text("Menu")');

    // =========================
    // STEP 4 — Click My KYC
    // =========================
    await page.click('text=My Kyc');

    // Wait page load
    await page.waitForTimeout(3000);

    // =========================
    // STEP 5 — Validate Personal Details Fields
    // =========================

    // Name
    await expect(page.locator('input[value="Rani"]')).toBeVisible();

    // DOB
    await expect(page.locator('input[value="20/05/1994"]')).toBeVisible();

    // Gender Dropdown
    await expect(page.locator('select')).toContainText('Female');

    // Marital Status
    await expect(page.locator('select')).toContainText('Single');

    // =========================
    // STEP 6 — Click Edit Button
    // =========================
    await page.click('text=edit');

    // =========================
    // STEP 7 — Validate Edit Mode Opened
    // =========================
    await expect(page.locator('input[value="Rani"]')).toBeEditable();

});
