# BUG-002 – Incorrect Product Information Displayed

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](05_Bug_Reports.md)

---

# Bug Summary

| Field | Value |
|--------|--------|
| **Bug ID** | BUG-002 |
| **Title** | Incorrect Product Information Displayed |
| **Related Test Case** | TC-009 – Verify Product Information |
| **Affected User** | problem_user |
| **Module** | Inventory |
| **Severity** | High |
| **Priority** | High |
| **Status** | Open |

---

# Description

When logged in using the **problem_user** account, the displayed product information is incorrect. The selected product shows an invalid product name, incorrect description, incorrect price, and an unrelated product image.

Instead of displaying the correct product details, the page displays placeholder or unrelated information.

This issue may mislead users into purchasing the wrong product.

---

# Environment

| Item | Value |
|------|-------|
| **Application** | SauceDemo |
| **URL** | https://www.saucedemo.com/ |
| **Browser** | Google Chrome |
| **Browser Version** | 149.0.7827.197 |
| **Operating System** | Windows 11 |
| **Test User** | problem_user |

---

# Preconditions

- User is logged in as **problem_user**.
- User is on the Inventory page.

---

# Steps to Reproduce

1. Open https://www.saucedemo.com/
2. Login using:
   - **Username:** `problem_user`
   - **Password:** `secret_sauce`
3. Navigate to the Inventory page.
4. Observe the displayed product information.

---

# Expected Result

Each product should display:

- Correct product image
- Correct product name
- Correct product description
- Correct product price

The displayed information should accurately represent the selected product.

---

# Actual Result

The product displays incorrect information, including:

- Incorrect product image
- Invalid product name ("ITEM NOT FOUND")
- Incorrect product description
- Invalid product price ($-1)

The displayed information does not correspond to the actual product.

---

# Impact

- Users cannot identify the correct product.
- Product information is misleading.
- Incorrect pricing may confuse users.
- High risk of purchasing an unintended product.
- Significantly degrades the shopping experience.

---

# Attachments

### Screenshot

`BUG-002_Incorrect_Product_Information.png`

> Screenshot showing invalid product name, incorrect description, wrong price, and incorrect product image.

---

# Notes

This issue is reproducible every time when logged in as **problem_user**.

The defect affects the accuracy of product information displayed to users.

---

# QA Assessment

| Category | Value |
|----------|-------|
| **Reproducibility** | Always (100%) |
| **Regression** | Unknown |
| **Workaround** | None |
| **Reported By** | Filip Jelínek |
| **Date** | 2026-06-30 |

---

# Test Evidence

| Test Case | Result |
|-----------|--------|
| **TC-009 – Verify Product Information** | ❌ Fail |

---