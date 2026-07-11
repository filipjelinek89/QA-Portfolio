# TC034 – Verify Order Confirmation Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC034                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-016                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the **Checkout: Complete!** page displays all required confirmation elements after a successful order.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- A purchase has been successfully completed.
- The **Checkout: Complete!** page is displayed.

---

## Test Data

| Product             |
| ------------------- |
| Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                                | Expected Result                                          |
| ---: | ----------------------------------------------------- | -------------------------------------------------------- |
|    1 | Complete a purchase using valid checkout information. | The **Checkout: Complete!** page is displayed.           |
|    2 | Verify the page title.                                | The title **Checkout: Complete!** is displayed.          |
|    3 | Verify the confirmation header.                       | The header **"Thank you for your order!"** is displayed. |
|    4 | Verify the confirmation message.                      | A confirmation message is displayed below the header.    |
|    5 | Verify the confirmation image.                        | The confirmation image is displayed correctly.           |
|    6 | Verify the **Back Home** button.                      | The button is visible and enabled.                       |

---

## Expected Result

- The **Checkout: Complete!** page loads successfully.
- The confirmation header displays:

```text
Thank you for your order!
```

- A confirmation message is displayed.
- The confirmation image is visible.
- The **Back Home** button is available.
- No error messages or layout issues are present.

---

## Actual Result

The **Checkout: Complete!** page was displayed successfully after completing the checkout process. The page showed the order confirmation message, confirmation image, thank-you message, and the **Back Home** button. All confirmation elements were displayed correctly without any visual or functional issues.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/checkout-complete.html`.
- The confirmation header is displayed correctly.
- The confirmation message is readable and not truncated.
- The confirmation image loads correctly.
- The **Back Home** button is enabled.
- The shopping cart badge is no longer displayed.
- No visual or formatting issues are present.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
