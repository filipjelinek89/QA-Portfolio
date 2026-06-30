# TC033 – Verify Cancel Checkout from Checkout: Overview

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC033                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-017                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that clicking the **Cancel** button on the **Checkout: Overview** page cancels the checkout process and returns the user to the Inventory page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.
- Valid checkout information has been entered.
- The **Checkout: Overview** page is displayed.

---

## Test Data

| First Name | Last Name | Postal Code | Product             |
| ---------- | --------- | ----------- | ------------------- |
| John       | Tester    | 12345       | Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                                               | Expected Result                               |
| ---: | -------------------------------------------------------------------- | --------------------------------------------- |
|    1 | Complete the checkout process up to the **Checkout: Overview** page. | The order summary is displayed.               |
|    2 | Verify that the **Cancel** button is available.                      | The button is displayed and enabled.          |
|    3 | Click the **Cancel** button.                                         | The checkout process is cancelled.            |
|    4 | Observe the displayed page.                                          | The user is redirected to the Inventory page. |
|    5 | Verify the Inventory page.                                           | The product list is displayed correctly.      |

---

## Expected Result

- The user is redirected to the Inventory page.
- The checkout process is cancelled.
- The shopping cart contents remain unchanged.
- The shopping cart badge retains the correct number of items.
- No order is created.
- No error messages are displayed.

---

## Actual Result

The **Cancel** button successfully redirected the user from the **Checkout: Overview** page back to the **Products (Inventory)** page. The application remained stable, and the shopping cart contents were preserved.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/inventory.html`.
- The shopping cart still contains the previously added product(s).
- The shopping cart badge displays the correct item count.
- The user remains logged in.
- The order is **not** completed.
- The **Finish** action is no longer available after returning to the Inventory page.
- No visual or functional issues occur after navigation.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)