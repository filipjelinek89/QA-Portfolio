# TC025 – Verify Shopping Cart Persistence After Browser Refresh

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC025                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-004                |
| **Related Scenario** | TS-010                |
| **Priority**         | Medium                |-
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Shopping Cart contents and user session are preserved after refreshing the browser.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The shopping cart contains:

  - Sauce Labs Backpack
  - Sauce Labs Bike Light
- The Shopping Cart page is displayed.

---

## Test Data

| Username      | Password     | Products                                   |
| ------------- | ------------ | ------------------------------------------ |
| standard_user | secret_sauce | Sauce Labs Backpack, Sauce Labs Bike Light |

---

## Test Steps

| Step | Action                                                                          | Expected Result                                        |
| ---: | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    1 | Log in using valid credentials.                                                 | User is redirected to the Inventory page.              |
|    2 | Add **Sauce Labs Backpack** and **Sauce Labs Bike Light** to the shopping cart. | Both products are successfully added.                  |
|    3 | Open the **Shopping Cart** page.                                                | The Shopping Cart page is displayed.                   |
|    4 | Refresh the browser (F5 or browser Refresh button).                             | The page reloads successfully.                         |
|    5 | Verify the Shopping Cart page.                                                  | The Shopping Cart page is displayed after the refresh. |
|    6 | Verify the shopping cart contents.                                              | Both products remain displayed.                        |
|    7 | Verify the shopping cart badge.                                                 | The badge displays **2**.                              |

---

## Expected Result

- The user remains logged in after refreshing the page.
- The Shopping Cart page reloads successfully.
- The shopping cart contents remain unchanged.
- Both previously added products are displayed.
- The shopping cart badge retains the correct value.
- No error messages or visual defects are present.

---

## Actual Result

The Shopping Cart retained all previously added products after the browser was refreshed. Product information, quantities, and the shopping cart badge remained unchanged, and no data was lost.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/cart.html`.
- The user session remains active.
- Product names, descriptions, prices, and quantities are preserved.
- The shopping cart badge remains synchronized with the cart contents.
- The **Continue Shopping** and **Checkout** buttons remain available.
- No duplicate products appear after the refresh.
- No layout or formatting issues occur after the page reload.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)