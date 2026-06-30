# TC037 – Verify Product Sorting by Price (Low to High)

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC037                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-006                |
| **Related Scenario** | TS-018                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that selecting **Price (low to high)** from the sorting dropdown arranges all products in ascending price order.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `error_user`.
- The Inventory page is displayed.

---

## Test Data

| Sort Option         |
| ------------------- |
| Price (low to high) |

---

## Test Steps

| Step | Action                               | Expected Result                                                    |
| ---: | ------------------------------------ | ------------------------------------------------------------------ |
|    1 | Log in using valid credentials.      | User is redirected to the Inventory page.                          |
|    2 | Locate the product sorting dropdown. | The sorting dropdown is visible.                                   |
|    3 | Open the sorting dropdown.           | All available sorting options are displayed.                       |
|    4 | Select **Price (low to high)**.      | The product list is reordered.                                     |
|    5 | Observe the displayed product list.  | Products are sorted by price from the lowest to the highest value. |

---

## Expected Result

The products are displayed in the following order:

| Product                           |      Price |
| --------------------------------- | ---------: |
| Sauce Labs Onesie                 |  **$7.99** |
| Sauce Labs Bike Light             |  **$9.99** |
| Sauce Labs Bolt T-Shirt           | **$15.99** |
| Test.allTheThings() T-Shirt (Red) | **$15.99** |
| Sauce Labs Backpack               | **$29.99** |
| Sauce Labs Fleece Jacket          | **$49.99** |

- Products are sorted in ascending price order.
- Products with the same price remain grouped together.
- No products are missing or duplicated.

---

## Actual Result

After selecting the Price (Low to High) sorting option, the application displays a JavaScript error alert stating "Sorting is broken! This error has been reported to Backtrace." The products are not sorted, and the requested sorting operation is not performed.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The selected sorting option remains **Price (low to high)** after sorting.
- All six products are displayed.
- Product prices are displayed correctly.
- The displayed order matches ascending prices.
- Products with identical prices are displayed together.
- The shopping cart contents and badge remain unchanged.
- No visual or functional issues occur after sorting.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)