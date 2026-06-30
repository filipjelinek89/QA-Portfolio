# TC011 – Verify Product Details Navigation

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC011                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-003                |
| **Related Scenario** | TS-007                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that clicking a product name or product image opens the corresponding Product Details page.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                      | Expected Result                                                                     |
| ---: | ------------------------------------------- | ----------------------------------------------------------------------------------- |
|    1 | Log in using valid credentials.             | User is redirected to the Inventory page.                                           |
|    2 | Select any product from the inventory list. | Product information is visible.                                                     |
|    3 | Click the product name.                     | The Product Details page opens for the selected product.                            |
|    4 | Verify the displayed information.           | Product name, description, price, image, and action button are displayed correctly. |
|    5 | Click the **Back to Products** button.      | User is returned to the Inventory page.                                             |

---

## Expected Result

- Clicking a product name opens the correct Product Details page.
- Product information matches the selected product.
- The **Back to Products** button returns the user to the Inventory page.
- No data is lost during navigation.

---

## Actual Result

The product details page opened successfully after selecting a product. The displayed product information, including the product name, description, price, image, and action button, matched the selected product from the Inventory page.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL changes to the Product Details page.
- The displayed product matches the selected product.
- The product image, name, description, and price are displayed correctly.
- The **Add to Cart** or **Remove** button reflects the current cart state.
- The **Back to Products** button returns the user to the Inventory page without errors.
- No unexpected page refresh or visual issues occur during navigation.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
