# TC012 – Verify Shopping Cart Badge Update

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC012                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-011                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the shopping cart badge accurately reflects the number of products added to the cart.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.
- The shopping cart is empty.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                                | Expected Result                                |
| ---: | ----------------------------------------------------- | ---------------------------------------------- |
|    1 | Log in using valid credentials.                       | User is redirected to the Inventory page.      |
|    2 | Verify that the shopping cart badge is not displayed. | No badge is visible because the cart is empty. |
|    3 | Click **Add to Cart** for one product.                | The selected product is added to the cart.     |
|    4 | Observe the shopping cart badge.                      | The badge displays **1**.                      |
|    5 | Click **Add to Cart** for a second product.           | The second product is added to the cart.       |
|    6 | Observe the shopping cart badge again.                | The badge updates to **2**.                    |

---

## Expected Result

- The shopping cart badge is hidden when the cart is empty.
- The badge appears after the first product is added.
- The badge count increases correctly as additional products are added.
- The displayed number matches the actual number of products in the cart.

---

## Actual Result

The shopping cart badge was updated immediately after adding a product to the cart. The displayed item count accurately reflected the current number of products in the shopping cart.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The badge is displayed only when at least one product is in the cart.
- The badge count updates immediately without refreshing the page.
- The badge displays the correct quantity.
- The badge is clearly visible and does not overlap other UI elements.
- No visual or functional issues occur while updating the badge.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
