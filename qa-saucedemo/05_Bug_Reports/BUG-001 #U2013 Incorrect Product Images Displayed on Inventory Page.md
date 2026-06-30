# BUG-001 – Incorrect Product Images on Inventory Page

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](05_Bug_Reports.md)

---

# Bug Summary

| Field | Value |
|--------|--------|
| **Bug ID** | BUG-001 |
| **Title** | Incorrect Product Images Displayed on Inventory Page |
| **Related Test Case** | TC-008 – Verify Inventory Page Display |
| **Affected User** | problem_user |
| **Module** | Inventory |
| **Severity** | Medium |
| **Priority** | Medium |
| **Status** | Open |

---

# Description

When logged in using the **problem_user** account, every product displayed on the Inventory page uses the same image, regardless of the actual product. Product names, descriptions, prices, and action buttons are correct, but the displayed images do not correspond to their respective products.

This issue makes it difficult for users to visually identify products and may lead to selecting the wrong item.

---

# Environment

| Item | Value |
|------|-------|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Browser | Google Chrome |
| Browser Version | 149.0.7827.197 |
| Operating System | Windows 11 |
| Test User | standard_user / problem_user / error_user / visual_user / performance_glitch_user |

---

# Preconditions

- User is logged in as **problem_user**.
- User has successfully reached the **Inventory** page.

---

# Steps to Reproduce

1. Open https://www.saucedemo.com/
2. Login using:
   - **Username:** `problem_user`
   - **Password:** `secret_sauce`
3. Wait for the Inventory page to load.
4. Observe the displayed product images.

---

# Expected Result

Each product should display its own corresponding image that accurately represents the product.

Example:

- Sauce Labs Backpack → Backpack image
- Sauce Labs Bike Light → Bike Light image
- Sauce Labs Bolt T-Shirt → T-Shirt image
- Sauce Labs Onesie → Onesie image

---

# Actual Result

All products display the exact same image despite representing different products.

Although product names, descriptions, prices, and buttons are correct, every product card uses an identical image.

---

# Impact

- Incorrect visual representation of products.
- Users cannot distinguish products by image.
- May reduce user confidence and cause incorrect product selection.
- Degrades overall user experience.

---

# Attachments

### Screenshot

`BUG-001_Incorrect_Product_Images.png` 

[BUG-001 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-001_Incorrect_Product_Images.png)

---

# Notes

This issue is reproducible every time when using the **problem_user** account.

The defect is intentionally present in SauceDemo to simulate a real-world product image mapping issue for testing purposes.

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
| **TC-008 – Verify Inventory Page Display** | ❌ Fail |

---

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports.md)
