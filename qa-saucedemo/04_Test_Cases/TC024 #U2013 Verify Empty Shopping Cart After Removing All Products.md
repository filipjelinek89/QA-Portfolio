# TC024 – Verify Empty Shopping Cart After Removing All Products

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC024                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-009                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Shopping Cart becomes empty after all products have been removed.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The shopping cart contains two products:

  - Sauce Labs Backpack
  - Sauce Labs Bike Light

---

## Test Data

| Username      | Password     | Products                                   |
| ------------- | ------------ | ------------------------------------------ |
| standard_user | secret_sauce | Sauce Labs Backpack, Sauce Labs Bike Light |

---

## Test Steps

| Step | Action                                                                          | Expected Result                                 |
| ---: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
|    1 | Log in using valid credentials.                                                 | User is redirected to the Inventory page.       |
|    2 | Add **Sauce Labs Backpack** and **Sauce Labs Bike Light** to the shopping cart. | Both products are added successfully.           |
|    3 | Open the **Shopping Cart** page.                                                | The Shopping Cart page is displayed.            |
|    4 | Click **Remove** for **Sauce Labs Backpack**.                                   | The product is removed from the cart.           |
|    5 | Click **Remove** for **Sauce Labs Bike Light**.                                 | The second product is removed from the cart.    |
|    6 | Observe the Shopping Cart page.                                                 | No products are displayed in the cart.          |
|    7 | Observe the shopping cart badge.                                                | The shopping cart badge is no longer displayed. |

---

## Expected Result

- All products are removed from the Shopping Cart.
- The Shopping Cart is empty.
- The shopping cart badge disappears.
- The **Continue Shopping** and **Checkout** buttons remain available.
- No error messages are displayed.

---

## Actual Result

All products were successfully removed from the Shopping Cart. The shopping cart became empty, the shopping cart badge disappeared, and no removed products were displayed. The Shopping Cart page remained fully functional.

---

## Status

✅ Pass

---

## Notes

Verify that:

- No products remain in the Shopping Cart.
- The shopping cart badge is removed when the cart becomes empty.
- The Shopping Cart page remains fully functional.
- The **Continue Shopping** button is still available.
- The **Checkout** button remains visible.
- No layout or formatting issues occur after removing all products.
- The user can continue shopping without refreshing the page.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
