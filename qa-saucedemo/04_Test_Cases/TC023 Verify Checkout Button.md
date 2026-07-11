# TC023 – Verify Checkout Button

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC023                 |
| **Module**           | Shopping Cart         |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-012                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that clicking the **Checkout** button redirects the user from the Shopping Cart page to the Checkout: Your Information page.

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

| Step | Action                                            | Expected Result                                       |
| ---: | ------------------------------------------------- | ----------------------------------------------------- |
|    1 | Log in using valid credentials.                   | User is redirected to the Inventory page.             |
|    2 | Add **Sauce Labs Backpack** to the shopping cart. | Product is successfully added.                        |
|    3 | Open the **Shopping Cart** page.                  | The Shopping Cart page is displayed.                  |
|    4 | Click the **Checkout** button.                    | The Checkout: Your Information page is displayed.     |
|    5 | Verify the displayed page.                        | The checkout form contains the required input fields. |

---

## Expected Result

- The user is redirected to the **Checkout: Your Information** page.
- The checkout form is displayed successfully.
- The following input fields are available:

  - First Name
  - Last Name
  - Postal Code
- The **Continue** and **Cancel** buttons are displayed.
- No error messages are shown.

---

## Actual Result

The **Checkout** button successfully redirected the user from the Shopping Cart page to the **Checkout: Your Information** page. The checkout form loaded correctly and all required input fields were displayed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/checkout-step-one.html`.
- The shopping cart contents remain unchanged.
- All checkout input fields are enabled and ready for data entry.
- The **Continue** button is enabled.
- The **Cancel** button is displayed and functional.
- The user session remains active during navigation.
- No visual or functional issues occur on the checkout page.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
