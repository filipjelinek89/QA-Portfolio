# TC015 – Verify "Add to Cart" Button on Product Details Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC015                 |
| **Module**           | Product Details       |
| **Requirement**      | FR-003                |
| **Related Scenario** | TS-007                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a product can be added to the shopping cart directly from the Product Details page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Product Details page is displayed.
- The shopping cart is empty.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                         | Expected Result                                              |
| ---: | ---------------------------------------------- | ------------------------------------------------------------ |
|    1 | Log in using valid credentials.                | User is redirected to the Inventory page.                    |
|    2 | Open the Product Details page for any product. | The Product Details page is displayed.                       |
|    3 | Click the **Add to Cart** button.              | The selected product is added to the shopping cart.          |
|    4 | Observe the action button.                     | The button label changes from **Add to Cart** to **Remove**. |
|    5 | Observe the shopping cart badge.               | The badge displays **1**.                                    |

---

## Expected Result

- The selected product is successfully added to the shopping cart.
- The **Add to Cart** button changes to **Remove**.
- The shopping cart badge displays the correct number of items.
- No error messages are displayed.

---

## Actual Result

The selected product was successfully added to the shopping cart from the Product Details page. The action button changed from **Add to cart** to **Remove**, and the shopping cart badge updated immediately to reflect the correct number of items.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The correct product is added to the shopping cart.
- The shopping cart badge updates immediately.
- The button state changes to **Remove**.
- The product remains selected after the action.
- No unexpected page refresh occurs.
- The cart contents remain consistent when navigating back to the Inventory page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)