# TC013 – Verify Inventory Page After Browser Refresh

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC013                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-002                |
| **Related Scenario** | TS-006                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Inventory page remains accessible and retains the user's session after refreshing the browser.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.
- At least one product has been added to the shopping cart.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                              | Expected Result                                     |
| ---: | --------------------------------------------------- | --------------------------------------------------- |
|    1 | Log in using valid credentials.                     | User is redirected to the Inventory page.           |
|    2 | Add one product to the shopping cart.               | Product is added and the cart badge displays **1**. |
|    3 | Refresh the browser (F5 or browser Refresh button). | The page reloads successfully.                      |
|    4 | Observe the Inventory page.                         | The Inventory page is displayed after the refresh.  |
|    5 | Verify the shopping cart badge.                     | The badge still displays **1**.                     |
|    6 | Verify the product list.                            | All products are displayed correctly.               |

---

## Expected Result

- The user remains logged in after refreshing the page.
- The Inventory page loads successfully.
- The shopping cart badge retains the correct item count.
- Previously added products remain in the shopping cart.
- No error messages or unexpected behavior occur.

---

## Actual Result

The Inventory page remained fully functional after refreshing the browser. All products were displayed correctly, previously loaded content remained accessible, and no visual or functional issues were observed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL remains `/inventory.html`.
- The user session is not interrupted.
- The shopping cart contents are preserved.
- The Inventory page loads without visual or functional issues.
- Product information is displayed correctly after the refresh.
- No duplicate items are added to the cart as a result of refreshing the page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)