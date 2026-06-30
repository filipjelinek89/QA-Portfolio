# TC016 – Verify "Remove" Button on Product Details Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC016                 |
| **Module**           | Product Details       |
| **Requirement**      | FR-003                |
| **Related Scenario** | TS-007                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a product can be removed from the shopping cart directly from the Product Details page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The selected product has already been added to the shopping cart.
- The Product Details page for the selected product is displayed.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| error_user    | secret_sauce |

---

## Test Steps

| Step | Action                                                                 | Expected Result                                                                |
| ---: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|    1 | Log in using valid credentials.                                        | User is redirected to the Inventory page.                                      |
|    2 | Open the Product Details page for a product already added to the cart. | The Product Details page is displayed.                                         |
|    3 | Verify that the **Remove** button is displayed.                        | The **Remove** button is visible.                                              |
|    4 | Click the **Remove** button.                                           | The product is removed from the shopping cart.                                 |
|    5 | Observe the action button.                                             | The button label changes from **Remove** to **Add to Cart**.                   |
|    6 | Observe the shopping cart badge.                                       | The badge count decreases accordingly or disappears if the cart becomes empty. |

---

## Expected Result

- The selected product is removed from the shopping cart.
- The **Remove** button changes to **Add to Cart**.
- The shopping cart badge is updated correctly.
- No error messages are displayed.

---

## Actual Result

After clicking the Remove button on the Product Details page, the selected product is not removed from the shopping cart. The Remove button remains displayed, and the product stays added to the cart. The shopping cart badge is not updated, indicating that the remove action failed.

---

## Status

❌ Fail
---

## Notes

Verify that:

- The correct product is removed from the shopping cart.
- The shopping cart badge updates immediately.
- The **Add to Cart** button is displayed after removal.
- The product remains visible on the Product Details page.
- No unexpected page refresh occurs.
- The product is also removed from the Shopping Cart page.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
