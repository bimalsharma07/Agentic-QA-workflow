# SauceDemo Checkout Test Plan

## Objective
Validate the checkout workflow for SauceDemo, including happy path, validation errors, and navigation behavior.

## Scope
- Login
- Inventory selection
- Cart updates
- Checkout form validation
- Order confirmation

## Test Environment
- Application URL: https://www.saucedemo.com/
- Credentials: standard_user / secret_sauce

## Test Scenarios

### 1. Successful checkout with one item
**Steps**
1. Open the SauceDemo login page.
2. Log in with valid credentials.
3. Add one product to the cart.
4. Open the cart and click Checkout.
5. Enter a valid first name, last name, and postal code.
6. Continue to the overview page and click Finish.

**Expected Results**
- The user is redirected to the inventory page after login.
- The cart badge shows one item.
- The checkout form accepts valid input.
- The confirmation page displays a success message.

### 2. Validation error for empty checkout form
**Steps**
1. Log in successfully.
2. Add a product to the cart.
3. Open the cart and start checkout.
4. Leave the first name, last name, and postal code empty.
5. Click Continue.

**Expected Results**
- The user remains on the checkout step.
- Error messages are displayed for the missing fields.

### 3. Cart total and item count remain accurate
**Steps**
1. Log in successfully.
2. Add two products to the cart.
3. Open the cart.
4. Confirm the item count and total reflect the selected products.

**Expected Results**
- The item count matches the number of selected products.
- The total reflects the products in the cart.

### 4. User can cancel checkout flow
**Steps**
1. Log in successfully.
2. Add a product to the cart.
3. Start checkout.
4. Click Cancel.

**Expected Results**
- The user returns to the cart page.
- The cart contents remain intact.
