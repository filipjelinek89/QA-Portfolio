# BUG-008 – Product Sorting by Price (Low to High) Triggers JavaScript Error

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](05_Bug_Reports.md)

---

## Environment

| Field | Value |
|-------|-------|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Browser | Google Chrome |
| Browser Version | 149.0.7827.197 |
| Operating System | Windows 11 |
| Test User | error_user |

---

## Related Test Case

**TC037 – Verify Product Sorting by Price (Low to High)**

---

## Affected User

**error_user**

---

## Severity

**Medium**

---

## Priority

**Medium**

---

## Preconditions

- User is logged in as **error_user**.
- User is on the **Products (Inventory)** page.

---

## Steps to Reproduce

1. Log in as **error_user**.
2. Navigate to the **Products** page.
3. Open the sorting dropdown.
4. Select **Price (Low to High)**.

---

## Expected Result

Products are sorted in ascending order by price without errors.

---

## Actual Result

After selecting **Price (Low to High)**, a JavaScript alert is displayed with the message **"Sorting is broken! This error has been reported to Backtrace."** The products are not sorted, and the sorting operation is interrupted.

---

## Impact

Users cannot sort products by price, making it more difficult to browse products according to their preferences. The unexpected error dialog interrupts the user experience and indicates a client-side application failure.

---

## Attachments

**Screenshot:**

[BUG-008 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-008_Product_Sorting_Low_To_High_JavaScript_Error.png)

---

## QA Assessment

The defect is consistently reproducible using the **error_user** account. Selecting the **Price (Low to High)** sorting option triggers a JavaScript error dialog instead of executing the sorting operation. The functionality is unavailable until the issue is resolved.

---

## Test Evidence

- Test Case: **TC037 – Verify Product Sorting by Price (Low to High)**
- Test User: **error_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**

---

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports.md)
