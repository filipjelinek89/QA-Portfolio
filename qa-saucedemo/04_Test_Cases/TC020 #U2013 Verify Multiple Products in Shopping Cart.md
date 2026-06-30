# TC020 – Verify Multiple Products in Shopping Cart

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC020                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-010                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that multiple products added to the shopping cart are displayed correctly with accurate product information.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The shopping cart is empty.

---

## Test Data

| Username      | Password     | Products                                   |
| ------------- | ------------ | ------------------------------------------ |
| standard_user | secret_sauce | Sauce Labs Backpack, Sauce Labs Bike Light |

---

## Test Steps

| Step | Action                                              | Expected Result                                                                      |
| ---: | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
|    1 | Log in using valid credentials.                     | User is redirected to the Inventory page.                                            |
|    2 | Add **Sauce Labs Backpack** to the shopping cart.   | Product is successfully added.                                                       |
|    3 | Add **Sauce Labs Bike Light** to the shopping cart. | Second product is successfully added.                                                |
|    4 | Verify the shopping cart badge.                     | The badge displays **2**.                                                            |
|    5 | Click the **Shopping Cart** icon.                   | The Shopping Cart page is displayed.                                                 |
|    6 | Verify the displayed products.                      | Both selected products are listed in the shopping cart with the correct information. |

---

## Expected Result

- Both selected products are displayed in the shopping cart.
- The shopping cart contains exactly **two** products.
- Each product displays the correct:

  - Product name
  - Product description
  - Product price
  - Quantity
- A **Remove** button is available for each product.
- The shopping cart badge displays **2**.

---

## Actual Result

The selected products were successfully added to the Shopping Cart. All added products were displayed correctly with their respective names, descriptions, prices, quantities, and action buttons. The shopping cart badge accurately reflected the total number of items.

---

## Status

✅ Pass

---

## Notes

Verify that:

- Both products are displayed only once.
- The products appear with the correct information.
- The product prices match those shown on the Inventory page.
- The shopping cart badge remains synchronized with the cart contents.
- The order of the displayed products matches the order in which they were added.
- No duplicate or missing products are present.
- No visual or layout issues occur on the Shopping Cart page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)