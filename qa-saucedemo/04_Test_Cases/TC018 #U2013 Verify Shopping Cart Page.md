# TC018 – Verify Shopping Cart Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC018                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-010                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Shopping Cart page opens successfully and displays the correct cart contents.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                         | Expected Result                                               |
| ---: | ---------------------------------------------- | ------------------------------------------------------------- |
|    1 | Log in using valid credentials.                | User is redirected to the Inventory page.                     |
|    2 | Add at least one product to the shopping cart. | The product is successfully added and the cart badge updates. |
|    3 | Click the **Shopping Cart** icon.              | The Shopping Cart page is displayed.                          |
|    4 | Verify the page title.                         | The title **"Your Cart"** is displayed.                       |
|    5 | Verify the cart contents.                      | The previously added product is displayed in the cart.        |

---

## Expected Result

- The Shopping Cart page loads successfully.
- The title **Your Cart** is displayed.
- The previously added product is listed in the cart.
- Product information is displayed correctly.
- No error messages or visual defects are present.

---

## Actual Result

The Shopping Cart page opened successfully and displayed all added products correctly. Product names, descriptions, prices, quantities, and action buttons were displayed as expected. No visual or functional issues were observed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/cart.html`.
- The correct product is displayed.
- Product name, description, quantity, and price are visible.
- The **Remove** button is available for the product.
- The **Continue Shopping** and **Checkout** buttons are displayed.
- The shopping cart badge matches the number of products in the cart.
- No layout or formatting issues are present.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
