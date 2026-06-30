# TC036 – Verify Product Sorting by Name (A–Z)

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC036                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-006                |
| **Related Scenario** | TS-018                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that selecting **Name (A to Z)** from the sorting dropdown arranges all products in ascending alphabetical order.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.

---

## Test Data

| Sort Option   |
| ------------- |
| Name (A to Z) |

---

## Test Steps

| Step | Action                               | Expected Result                                 |
| ---: | ------------------------------------ | ----------------------------------------------- |
|    1 | Log in using valid credentials.      | User is redirected to the Inventory page.       |
|    2 | Locate the product sorting dropdown. | The sorting dropdown is visible.                |
|    3 | Open the sorting dropdown.           | All available sorting options are displayed.    |
|    4 | Select **Name (A to Z)**.            | The product list is reordered.                  |
|    5 | Observe the displayed product list.  | Products are sorted alphabetically from A to Z. |

---

## Expected Result

The products are displayed in the following order:

1. Sauce Labs Backpack
2. Sauce Labs Bike Light
3. Sauce Labs Bolt T-Shirt
4. Sauce Labs Fleece Jacket
5. Sauce Labs Onesie
6. Test.allTheThings() T-Shirt (Red)

- The sorting is applied immediately.
- No products are missing or duplicated.
- No page refresh occurs.

---

## Actual Result

The products were successfully sorted in ascending alphabetical order (A–Z) after selecting the **Name (A to Z)** sorting option. All displayed products appeared in the correct sequence, and no sorting or display issues were observed.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The selected sorting option remains **Name (A to Z)** after sorting.
- All six products are displayed.
- The alphabetical order is correct.
- Product prices and descriptions remain unchanged.
- The shopping cart contents are not affected by sorting.
- The shopping cart badge remains unchanged.
- No visual or functional issues occur after sorting.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)