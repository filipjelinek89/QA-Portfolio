# TC040 – Verify Reset App State

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC040                 |
| **Module**           | Navigation            |
| **Requirement**      | FR-007                |
| **Related Scenario** | TS-021                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that selecting **Reset App State** from the Burger Menu resets the application state by clearing the shopping cart and restoring product buttons to their default state.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.
- The Inventory page is displayed.

---

## Test Data

| Product             |
| ------------------- |
| Sauce Labs Backpack |

---

## Test Steps

| Step | Action                                            | Expected Result                                                      |
| ---: | ------------------------------------------------- | -------------------------------------------------------------------- |
|    1 | Log in using valid credentials.                   | User is redirected to the Inventory page.                            |
|    2 | Add **Sauce Labs Backpack** to the shopping cart. | The product is added successfully and the cart badge displays **1**. |
|    3 | Open the **Burger Menu**.                         | The navigation menu is displayed.                                    |
|    4 | Click **Reset App State**.                        | The application resets its current state.                            |
|    5 | Close the Burger Menu (if necessary).             | The Inventory page is displayed.                                     |
|    6 | Verify the Inventory page.                        | The product button displays **Add to Cart** instead of **Remove**.   |
|    7 | Open the Shopping Cart.                           | The Shopping Cart is empty and no products are displayed.            |

---

## Expected Result

- The application state is reset successfully.
- All **Remove** buttons revert to **Add to Cart**.
- The shopping cart is empty.
- The shopping cart badge is no longer displayed.
- The user remains logged in.
- No error messages are displayed.

---

## Actual Result

The **Reset App State** option successfully reset the application state. Products previously added to the shopping cart were removed, the shopping cart badge was cleared, and all **Remove** buttons reverted to **Add to cart**. The application remained stable without any errors.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The shopping cart badge disappears after the reset.
- All previously added products return to the default **Add to Cart** state.
- No products remain in the Shopping Cart.
- The Inventory page remains fully functional.
- The user session remains active after the reset.
- The Reset App State option does not redirect the user to another page.
- No visual or functional issues occur after resetting the application state.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
