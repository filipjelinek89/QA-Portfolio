# TC027 – Complete Checkout Information with Valid Data

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC027                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-013                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the user can successfully complete the **Checkout: Your Information** form using valid data and proceed to the **Checkout: Overview** page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `error_user`.
- At least one product has been added to the shopping cart.
- The **Checkout: Your Information** page is displayed.

---

## Test Data

| Field       | Value   |
| ----------- | ------- |
| First Name  | Filip   |
| Last Name   | Jelinek |
| Postal Code | 37001   |

---

## Test Steps

| Step | Action                                          | Expected Result                                    |
| ---: | ----------------------------------------------- | -------------------------------------------------- |
|    1 | Enter **Filip** into the **First Name** field.  | The value is accepted.                             |
|    2 | Enter **Jelinek** into the **Last Name** field. | The value is accepted.                             |
|    3 | Enter **37001** into the **Postal Code** field. | The value is accepted.                             |
|    4 | Click the **Continue** button.                  | The application processes the entered information. |
|    5 | Observe the displayed page.                     | The **Checkout: Overview** page is displayed.      |

---

## Expected Result

- The entered customer information is accepted.
- The user is redirected to the **Checkout: Overview** page.
- The selected product(s) are displayed in the order summary.
- No validation or error messages are displayed.

---

## Actual Result

During checkout, the Last Name input field does not accept keyboard input. The user can enter a valid first name and postal code, but it is impossible to type a surname, preventing completion of the checkout information form.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The URL contains `/checkout-step-two.html`.
- The customer information is accepted without validation errors.
- The selected product(s) are displayed correctly in the order overview.
- Product names, quantities, and prices are accurate.
- Payment Information, Shipping Information, and Total are displayed.
- The **Finish** and **Cancel** buttons are available.
- No visual or functional issues occur after navigation.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)