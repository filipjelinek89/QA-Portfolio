# TC031 – Verify Checkout: Overview Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC031                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-015                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the **Checkout: Overview** page displays the correct order summary before the purchase is completed.

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

| Step | Action                                              | Expected Result                                                                      |
| ---: | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
|    1 | Complete the checkout information using valid data. | The **Checkout: Overview** page is displayed.                                        |
|    2 | Verify the listed products.                         | The correct product(s) are displayed.                                                |
|    3 | Verify the product information.                     | Product name, description, quantity, and price are correct.                          |
|    4 | Verify the order summary.                           | Payment Information, Shipping Information, Item Total, Tax, and Total are displayed. |
|    5 | Verify the available actions.                       | The **Finish** and **Cancel** buttons are displayed and enabled.                     |

---

## Expected Result

- The **Checkout: Overview** page is displayed successfully.
- The correct product(s) are included in the order summary.
- The following information is displayed:

  - Payment Information
  - Shipping Information
  - Item Total
  - Tax
  - Total
- The **Finish** and **Cancel** buttons are available.
- No error messages are displayed.

---

## Actual Result

The **Checkout: Overview** page loaded successfully after completing the checkout information. The page correctly displayed the selected product(s), payment information, shipping information, item total, tax, total amount, and the **Cancel** and **Finish** buttons. No visual or functional issues were observed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/checkout-step-two.html`.
- Product information matches the Shopping Cart.
- The item total is calculated correctly.
- The displayed tax value is present.
- The final total equals **Item Total + Tax**.
- The **Finish** and **Cancel** buttons are enabled.
- No visual or layout issues occur on the page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)