# TC035 – Verify "Back Home" Button After Order Completion

## Test Information

| Field                | Value                              |
| -------------------- | ---------------------------------- |
| **Test Case ID**     | TC035                              |
| **Module**           | Checkout                           |
| **Requirement**      | FR-005                             |
| **Related Scenario** | TS-016                             |
| **Priority**         | Medium                             |
| **Severity**         | Minor                              |
| **Test Type**        | Positive / Functional / Navigation |
| **Execution Type**   | Manual                             |

---

## Objective

Verify that clicking the **Back Home** button on the **Checkout: Complete!** page redirects the user to the Inventory page after a successful order.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- A purchase has been completed successfully.
- The **Checkout: Complete!** page is displayed.

---

## Test Data

| Product             |
| ------------------- |
| Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                           | Expected Result                                       |
| ---: | ------------------------------------------------ | ----------------------------------------------------- |
|    1 | Complete a purchase successfully.                | The **Checkout: Complete!** page is displayed.        |
|    2 | Verify that the **Back Home** button is visible. | The button is displayed and enabled.                  |
|    3 | Click the **Back Home** button.                  | The user is redirected to the Inventory page.         |
|    4 | Verify the Inventory page.                       | The product list is displayed correctly.              |
|    5 | Verify the shopping cart status.                 | The shopping cart is empty and no badge is displayed. |

---

## Expected Result

- The user is redirected to the Inventory page.
- The Inventory page loads successfully.
- The shopping cart is empty.
- The shopping cart badge is not displayed.
- The user remains logged in.
- No error messages are displayed.

---

## Actual Result

The **Back Home** button successfully redirected the user from the **Checkout: Complete!** page to the **Products (Inventory)** page. The Inventory page loaded correctly, allowing the user to continue shopping without any errors.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL contains `/inventory.html`.
- The Inventory page displays all available products.
- The shopping cart badge is not displayed.
- The previously completed order is not restored.
- The user can start a new shopping session.
- The navigation menu remains functional.
- No visual or layout issues occur after returning to the Inventory page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)