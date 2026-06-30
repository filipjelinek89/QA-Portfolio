# TC021 – Verify Remove Product from Shopping Cart

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC021                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-009                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a product can be successfully removed from the Shopping Cart.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The shopping cart contains **Sauce Labs Backpack**.

---

## Test Data

| Username      | Password     | Product             |
| ------------- | ------------ | ------------------- |
| standard_user | secret_sauce | Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                                   | Expected Result                                                 |
| ---: | -------------------------------------------------------- | --------------------------------------------------------------- |
|    1 | Log in using valid credentials.                          | User is redirected to the Inventory page.                       |
|    2 | Add **Sauce Labs Backpack** to the shopping cart.        | Product is successfully added.                                  |
|    3 | Open the **Shopping Cart** page.                         | The Shopping Cart page is displayed.                            |
|    4 | Verify that **Sauce Labs Backpack** is listed.           | The product is visible in the cart.                             |
|    5 | Click the **Remove** button for **Sauce Labs Backpack**. | The product is removed from the shopping cart.                  |
|    6 | Verify the Shopping Cart page.                           | The removed product is no longer displayed.                     |
|    7 | Verify the shopping cart badge.                          | The badge updates correctly or disappears if the cart is empty. |

---

## Expected Result

- **Sauce Labs Backpack** is removed from the Shopping Cart.
- The removed product is no longer displayed.
- The shopping cart badge is updated correctly.
- No unexpected error messages are displayed.
- The Shopping Cart page remains functional after the removal.

---

## Actual Result

The selected product was successfully removed from the Shopping Cart after clicking the **Remove** button. The product no longer appeared in the cart, and the shopping cart badge was updated immediately to reflect the correct number of remaining items.

---

## Status

✅ Pass

---

## Notes

Verify that:

- Only the selected product is removed.
- Other products (if any) remain in the shopping cart.
- The shopping cart badge decreases by one.
- The product can be added again from the Inventory page.
- No page refresh is required for the cart to update.
- The Shopping Cart page layout remains unchanged after removing the product.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)