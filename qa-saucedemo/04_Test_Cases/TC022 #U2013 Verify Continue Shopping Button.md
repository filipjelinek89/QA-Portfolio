# TC022 – Verify "Continue Shopping" Button

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC022                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-010                |
| **Priority**         | Medium                |
| **Severity**         | Minor                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that clicking the **Continue Shopping** button redirects the user from the Shopping Cart page to the Inventory page without modifying the shopping cart contents.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.
- The Shopping Cart page is displayed.

---

## Test Data

| Username      | Password     | Product             |
| ------------- | ------------ | ------------------- |
| standard_user | secret_sauce | Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                            | Expected Result                           |
| ---: | ------------------------------------------------- | ----------------------------------------- |
|    1 | Log in using valid credentials.                   | User is redirected to the Inventory page. |
|    2 | Add **Sauce Labs Backpack** to the shopping cart. | Product is successfully added.            |
|    3 | Open the **Shopping Cart** page.                  | The Shopping Cart page is displayed.      |
|    4 | Click the **Continue Shopping** button.           | User is redirected to the Inventory page. |
|    5 | Verify the Inventory page.                        | The product list is displayed correctly.  |
|    6 | Verify the shopping cart badge.                   | The badge still displays **1**.           |

---

## Expected Result

- The user is redirected to the Inventory page.
- The shopping cart contents remain unchanged.
- The shopping cart badge retains the correct item count.
- The user session remains active.
- No error messages are displayed.

---

## Actual Result

The **Continue Shopping** button successfully redirected the user from the Shopping Cart page back to the Inventory page. The Inventory page loaded correctly, and the shopping cart contents remained unchanged.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/inventory.html`.
- The previously added product remains in the shopping cart.
- The shopping cart badge displays the correct number of items.
- Product information is displayed correctly on the Inventory page.
- No data is lost during navigation.
- No visual or functional issues occur after returning to the Inventory page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)