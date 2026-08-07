import { test, expect } from '@playwright/test';

test('cart total and item count match selected items', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('input[data-test="username"]').fill('standard_user');
  await page.locator('input[data-test="password"]').fill('secret_sauce');
  await page.locator('input[data-test="login-button"]').click();

  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a[data-test="shopping-cart-link"]').click();

  await expect(page.locator('.shopping_cart_badge, [data-test="shopping-cart-badge"]')).toHaveText('2');
  await expect(page.locator('[data-test="item-quantity"]')).toHaveCount(2);
});
