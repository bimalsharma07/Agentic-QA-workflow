import { test, expect } from '@playwright/test';

test('successful checkout with one item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('input[data-test="username"]').fill('standard_user');
  await page.locator('input[data-test="password"]').fill('secret_sauce');
  await page.locator('input[data-test="login-button"]').click();

  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a[data-test="shopping-cart-link"]').click();
  await page.locator('button[data-test="checkout"]').click();

  await page.locator('input[data-test="firstName"]').fill('QA');
  await page.locator('input[data-test="lastName"]').fill('Automation');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await page.locator('button[data-test="finish"]').click();

  await expect(page.locator('h2')).toContainText('Thank you for your order!');
});
