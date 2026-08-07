import { test, expect } from '@playwright/test';

test('shows validation errors for empty checkout fields', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('input[data-test="username"]').fill('standard_user');
  await page.locator('input[data-test="password"]').fill('secret_sauce');
  await page.locator('input[data-test="login-button"]').click();

  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a[data-test="shopping-cart-link"]').click();
  await page.locator('button[data-test="checkout"]').click();

  await page.locator('input[data-test="continue"]').click();

  await expect(page.locator('h3[data-test="error"]').first()).toBeVisible();
});
