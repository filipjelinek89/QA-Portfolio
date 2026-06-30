# TC032 – Verify Successful Order Completion

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC032                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-016                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / End-to-End |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the user can successfully complete the checkout process by clicking the **Finish** button and that the order confirmation page is displayed.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `error_user`.
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

| Step | Action                                                               | Expected Result                                               |
| ---: | -------------------------------------------------------------------- | ------------------------------------------------------------- |
|    1 | Complete the checkout process up to the **Checkout: Overview** page. | The order summary is displayed.                               |
|    2 | Verify the order information.                                        | Product details and totals are correct.                       |
|    3 | Click the **Finish** button.                                         | The application processes the order.                          |
|    4 | Observe the displayed page.                                          | The **Checkout: Complete!** page is displayed.                |
|    5 | Verify the confirmation message.                                     | A success message confirms that the order has been completed. |

---

## Expected Result

- The order is successfully completed.
- The **Checkout: Complete!** page is displayed.
- The confirmation header displays:

```text
Thank you for your order!
```

- A confirmation message is displayed below the header.
- The **Back Home** button is available.
- No error messages are displayed.

---

## Actual Result

On the Checkout Overview page, clicking the Finish button has no effect. The order is not completed, and the user remains on the same page without being redirected to the Checkout Complete page.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The URL contains `/checkout-complete.html`.
- The confirmation header displays **"Thank you for your order!"**.
- The confirmation image is displayed.
- The confirmation message is visible and readable.
- The **Back Home** button is displayed and enabled.
- The shopping cart is emptied after the order is completed.
- The shopping cart badge is no longer displayed.
- No visual or functional issues occur on the confirmation page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)