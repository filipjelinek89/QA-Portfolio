# TC010 – Verify "Add to Cart" Button Functionality

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC010                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-002                |
| **Related Scenario** | TS-006                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that clicking the **Add to Cart** button successfully adds a product to the shopping cart.

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
| problem_user  | secret_sauce |

---

## Test Steps

| Step | Action                                    | Expected Result                                              |
| ---: | ----------------------------------------- | ------------------------------------------------------------ |
|    1 | Log in using valid credentials.           | User is redirected to the Inventory page.                    |
|    2 | Locate any product on the Inventory page. | Product information is displayed correctly.                  |
|    3 | Click the **Add to Cart** button.         | The selected product is added to the shopping cart.          |
|    4 | Observe the button.                       | The button label changes from **Add to Cart** to **Remove**. |
|    5 | Observe the shopping cart badge.          | The badge displays the number **1**.                         |

---

## Expected Result

- The selected product is successfully added to the shopping cart.
- The **Add to Cart** button changes to **Remove**.
- The shopping cart badge is updated to **1**.
- No error messages are displayed.

---

## Actual Result

The Add to cart button does not function for three specific products. Clicking the button has no effect—the products are not added to the shopping cart, the button does not change to Remove, and the shopping cart badge is not updated. Other products can be added successfully.

---

## Status

❌ Fail

---

## Notes

Verify that:

- Only the selected product is added.
- The correct product is added to the cart.
- The cart badge updates immediately.
- The **Remove** button is displayed only for the added product.
- No page refresh occurs after clicking **Add to Cart**.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
