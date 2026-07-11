# TC026 – Verify Checkout: Your Information Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC026                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-012                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the **Checkout: Your Information** page is displayed correctly and contains all required input fields and controls.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.
- The user has clicked the **Checkout** button from the Shopping Cart page.

---

## Test Data

| Username      | Password     | Product             |
| ------------- | ------------ | ------------------- |
| standard_user | secret_sauce | Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                            | Expected Result                                                |
| ---: | ------------------------------------------------- | -------------------------------------------------------------- |
|    1 | Log in using valid credentials.                   | User is redirected to the Inventory page.                      |
|    2 | Add **Sauce Labs Backpack** to the shopping cart. | Product is successfully added.                                 |
|    3 | Open the **Shopping Cart** page.                  | The Shopping Cart page is displayed.                           |
|    4 | Click the **Checkout** button.                    | The **Checkout: Your Information** page is displayed.          |
|    5 | Verify the checkout form.                         | The required input fields and buttons are displayed correctly. |

---

## Expected Result

The **Checkout: Your Information** page is displayed with:

- First Name input field
- Last Name input field
- Postal Code input field
- **Continue** button
- **Cancel** button

The form is fully functional and ready for user input.

---

## Actual Result

The **Checkout: Your Information** page loaded successfully after selecting the checkout option. All required input fields (First Name, Last Name, and ZIP/Postal Code) were displayed correctly along with the **Continue** and **Cancel** buttons. No visual or functional issues were observed.

---

## Status

✅ Pass
---

## Notes

Verify that:

- The URL contains `/checkout-step-one.html`.
- All input fields are visible and enabled.
- The **Continue** button is enabled.
- The **Cancel** button is displayed.
- The shopping cart contents are preserved.
- No validation messages are displayed before submitting the form.
- No visual or layout issues are present.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
