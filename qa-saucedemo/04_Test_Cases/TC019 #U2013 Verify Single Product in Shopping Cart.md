# TC019 – Verify Single Product in Shopping Cart

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC019                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-010                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a single product added to the shopping cart is displayed with the correct information.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The shopping cart is empty.

---

## Test Data

| Username      | Password     | Product             |
| ------------- | ------------ | ------------------- |
| standard_user | secret_sauce | Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                            | Expected Result                                                            |
| ---: | ------------------------------------------------- | -------------------------------------------------------------------------- |
|    1 | Log in using valid credentials.                   | User is redirected to the Inventory page.                                  |
|    2 | Add **Sauce Labs Backpack** to the shopping cart. | The product is added successfully.                                         |
|    3 | Click the **Shopping Cart** icon.                 | The Shopping Cart page is displayed.                                       |
|    4 | Locate the added product.                         | The product is listed in the cart.                                         |
|    5 | Verify the displayed product information.         | Product name, description, quantity, and price match the selected product. |

---

## Expected Result

- Exactly one product is displayed in the shopping cart.
- The displayed product is **Sauce Labs Backpack**.
- The product name, description, quantity, and price are correct.
- The **Remove** button is available.
- The shopping cart badge displays **1**.

---

## Actual Result

The selected product was successfully added to the Shopping Cart. The cart displayed the correct product name, description, price, quantity, and available action buttons. The displayed information matched the selected product from the Inventory page.

---

## Status

✅ Pass

---

## Notes

Verify that:

- Only one product is displayed in the shopping cart.
- The displayed product matches the product added from the Inventory page.
- The product quantity is **1**.
- The product price matches the Inventory page.
- The **Remove** button is displayed and enabled.
- The shopping cart badge remains synchronized with the cart contents.
- No duplicate products are displayed.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
