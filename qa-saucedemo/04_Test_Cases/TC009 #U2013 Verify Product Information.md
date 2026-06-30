# TC009 – Verify Product Information

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC009                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-002                |
| **Related Scenario** | TS-006                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that each product displayed on the Inventory page contains all required product information.

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

| Step | Action                                  | Expected Result                                                  |
| ---: | --------------------------------------- | ---------------------------------------------------------------- |
|    1 | Log in using valid credentials.         | User is redirected to the Inventory page.                        |
|    2 | Observe the list of available products. | Product list is displayed.                                       |
|    3 | Verify each product card.               | Every product contains all required information.                 |
|    4 | Compare multiple product cards.         | Product information is displayed consistently for every product. |

---

## Expected Result

Each product displayed on the Inventory page includes:

- Product image
- Product name
- Product description
- Product price
- **Add to Cart** button

All product information is readable, correctly aligned, and displayed without formatting issues.

---

## Actual Result

The Inventory page displayed incorrect product information. The selected product contained an incorrect product name, invalid description, incorrect price, and an unrelated product image. The displayed information did not correspond to the expected product details.

---

## Status

❌ Fail

---

## Notes

Verify that:

- Every product has a unique name.
- Every product displays a description.
- Every product displays a price.
- Every product has an **Add to Cart** button.
- No product information overlaps or is truncated.
- Product cards have a consistent layout across the page.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)