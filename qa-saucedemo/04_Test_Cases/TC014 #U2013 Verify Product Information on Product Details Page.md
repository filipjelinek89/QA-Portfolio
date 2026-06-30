# TC014 – Verify Product Information on Product Details Page

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC014                 |
| **Module**           | Product Details       |
| **Requirement**      | FR-003                |
| **Related Scenario** | TS-007                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Product Details page displays complete and accurate information for the selected product.

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

| Step | Action                          | Expected Result                                                                                |
| ---: | ------------------------------- | ---------------------------------------------------------------------------------------------- |
|    1 | Log in using valid credentials. | User is redirected to the Inventory page.                                                      |
|    2 | Click the name of any product.  | The Product Details page opens.                                                                |
|    3 | Verify the product image.       | The correct product image is displayed.                                                        |
|    4 | Verify the product name.        | The correct product name is displayed.                                                         |
|    5 | Verify the product description. | The product description is displayed correctly.                                                |
|    6 | Verify the product price.       | The correct product price is displayed.                                                        |
|    7 | Verify the action button.       | The **Add to Cart** button is displayed (or **Remove** if the product is already in the cart). |

---

## Expected Result

The Product Details page displays:

- Correct product image
- Correct product name
- Correct product description
- Correct product price
- Appropriate action button (**Add to Cart** or **Remove**)

All displayed information matches the selected product from the Inventory page.

---

## Actual Result

The Product Details page displayed the correct product information. The product name, description, price, image, and action button matched the selected product from the Inventory page. No discrepancies or display issues were observed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- Product information matches the selected item from the Inventory page.
- No information is missing or truncated.
- Product image loads correctly.
- Price formatting is consistent.
- No visual defects or layout issues are present.
- The Product Details page loads without errors.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)