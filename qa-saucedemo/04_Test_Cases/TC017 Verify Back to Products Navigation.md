# TC017 – Verify "Back to Products" Navigation

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC017                 |
| **Module**           | Product Details       |
| **Requirement**      | FR-003                |
| **Related Scenario** | TS-007                |
| **Priority**         | Medium                |
| **Severity**         | Minor                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the **Back to Products** button correctly returns the user from the Product Details page to the Inventory page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Product Details page is displayed.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                          | Expected Result                                 |
| ---: | ----------------------------------------------- | ----------------------------------------------- |
|    1 | Log in using valid credentials.                 | User is redirected to the Inventory page.       |
|    2 | Open the Product Details page for any product.  | The Product Details page is displayed.          |
|    3 | Click the **Back to Products** button.          | User is redirected to the Inventory page.       |
|    4 | Verify the Inventory page.                      | The product list is displayed correctly.        |
|    5 | Verify the shopping cart badge (if applicable). | The badge displays the correct number of items. |

---

## Expected Result

- The **Back to Products** button redirects the user to the Inventory page.
- The Inventory page loads successfully.
- Product information is displayed correctly.
- The shopping cart badge retains its current value.
- The user session remains active.

---

## Actual Result

The **Back to products** button successfully redirected the user from the Product Details page to the Inventory page. The Inventory page loaded correctly, and all previously displayed products remained accessible.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The Inventory page URL contains `/inventory.html`.
- The product list is fully loaded after navigation.
- The shopping cart contents remain unchanged.
- Any previously added products remain in the cart.
- The user's authenticated session is maintained.
- No visual or functional issues occur during navigation.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
