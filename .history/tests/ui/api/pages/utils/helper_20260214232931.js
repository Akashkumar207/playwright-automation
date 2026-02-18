export async function waitForLoader(page) {
  await page.waitForLoadState('networkidle');
}
