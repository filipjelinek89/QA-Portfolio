# Test Execution

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Functional Testing

**Executed By:** Filip Jelinek

---

## 📑 In-page Navigation

- [Overview](#overview)
- [Execution Summary](#execution-summary)
- [Execution Environment](#execution-environment)
- [Test Execution Results](#test-execution-results)
- [Execution Statistics](#execution-statistics)
- [Defect Summary](#defect-summary)

---

# Overview

This section documents the execution results of the manual test cases prepared for the SauceDemo application.

Each executed test case records the final execution status together with references to any identified defects. This documentation demonstrates the practical execution phase of the testing lifecycle and provides traceability between test cases and reported bugs.

---

# Execution Summary

- **Total Test Cases:** 42
- **Executed:** 42
- **Passed:** 33
- **Failed:** 9
- **Blocked:** 0
- **Not Executed:** 0

---

# Execution Environment

| Item             | Value                     |
| ---------------- | ------------------------- |
| Operating System | Windows 11 Pro (64-bit)   |
| Browser          | Google Chrome             |
| Browser Version  | 149.0.7827.197            |
| Application      | SauceDemo                 |
| Testing Type     | Manual Functional Testing |

---

# Test Execution Results

| TC ID | Test Case | Module | Status | Related Bug Report |
|-------|-----------|--------|:------:|--------------------|
| TC001 | Successful Login | Login | ✅ Pass | — |
| TC002 | Login with Invalid Password | Login | ✅ Pass | — |
| TC003 | Login with Invalid Username | Login | ✅ Pass | — |
| TC004 | Login with Empty Username | Login | ✅ Pass | — |
| TC005 | Login with Empty Password | Login | ✅ Pass | — |
| TC006 | Login with Empty Credentials | Login | ✅ Pass | — |
| TC007 | Login with Locked User | Login | ✅ Pass | — |
| TC008 | Verify Inventory Page Display | Inventory | ❌ Fail | [BUG-001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-001%20Incorrect%20Product%20Images%20Displayed%20on%20Inventory%20Page.md) |
| TC009 | Verify Product Information | Inventory | ❌ Fail | [BUG-002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-002_Incorrect_Product_Information.md) |
| TC010 | Verify "Add to Cart" Button Functionality | Inventory | ❌ Fail | [BUG-003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-003%20Add%20to%20Cart%20Button%20Does%20Not%20Work%20for%20Specific%20Products.md) |
| TC011 | Verify Product Details Navigation | Inventory | ✅ Pass | — |
| TC012 | Verify Shopping Cart Badge Update | Inventory | ✅ Pass | — |
| TC013 | Verify Inventory Page After Browser Refresh | Inventory | ✅ Pass | — |
| TC014 | Verify Product Information on Product Details Page | Product Details | ✅ Pass | — |
| TC015 | Verify "Add to Cart" Button on Product Details Page | Product Details | ✅ Pass | — |
| TC016 | Verify "Remove" Button on Product Details Page | Product Details | ❌ Fail | [BUG-004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-004%20Remove%20Button%20Does%20Not%20Remove%20Product%20on%20Product%20Details%20Page.md) |
| TC017 | Verify "Back to Products" Navigation | Product Details | ✅ Pass | — |
| TC018 | Verify Shopping Cart Page | Shopping Cart | ✅ Pass | — |
| TC019 | Verify Single Product in Shopping Cart | Shopping Cart | ✅ Pass | — |
| TC020 | Verify Multiple Products in Shopping Cart | Shopping Cart | ✅ Pass | — |
| TC021 | Verify Remove Product from Shopping Cart | Shopping Cart | ✅ Pass | — |
| TC022 | Verify "Continue Shopping" Button | Shopping Cart | ✅ Pass | — |
| TC023 | Verify Checkout Button | Shopping Cart | ✅ Pass | — |
| TC024 | Verify Empty Shopping Cart After Removing All Products | Shopping Cart | ✅ Pass | — |
| TC025 | Verify Shopping Cart Persistence After Browser Refresh | Shopping Cart | ✅ Pass | — |
| TC026 | Verify Checkout: Your Information Page | Checkout | ✅ Pass | — |
| TC027 | Complete Checkout Information with Valid Data | Checkout | ❌ Fail | [BUG-005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-005%20Last%20Name%20Field%20Does%20Not%20Accept%20Input%20During%20Checkout.md) |
| TC028 | Verify Checkout with Empty First Name | Checkout | ✅ Pass | — |
| TC029 | Verify Checkout with Empty Last Name | Checkout | ❌ Fail | [BUG-006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-006%20Checkout%20Allows%20Progress%20Without%20Required%20Last%20Name.md) |
| TC030 | Verify Checkout with Empty Postal Code | Checkout | ✅ Pass | — |
| TC031 | Verify Checkout: Overview Page | Checkout | ✅ Pass | — |
| TC032 | Verify Successful Order Completion | Checkout | ❌ Fail | [BUG-007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-007%20Finish%20Button%20Does%20Not%20Complete%20Order.md)
) |
| TC033 | Verify Cancel Checkout from Checkout: Overview | Checkout | ✅ Pass | — |
| TC034 | Verify Order Confirmation Page | Checkout | ✅ Pass | — |
| TC035 | Verify "Back Home" Button After Order Completion | Checkout | ✅ Pass | — |
| TC036 | Verify Product Sorting by Name (A–Z) | Navigation & Session | ✅ Pass | — |
| TC037 | Verify Product Sorting by Price (Low to High) | Navigation & Session | ❌ Fail | [BUG-008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-008%20Product%20Sorting%20by%20Price%20(Low%20to%20High)%20Triggers%20JavaScript%20Error.md) |
| TC038 | Verify Burger Menu Opens | Navigation & Session | ✅ Pass | — |
| TC039 | Verify User Logout | Navigation & Session | ✅ Pass | — |
| TC040 | Verify Reset App State | Navigation & Session | ✅ Pass | — |
| TC041 | Verify About Link | Navigation & Session | ❌ Fail | [BUG-009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-009%20About%20Link%20Redirects%20to%20404%20Page.md) |
| TC042 | Verify Direct Access to Inventory Without Authentication | Navigation & Session | ✅ Pass | — |
---

# Execution Statistics

| Status          | Count |
| --------------- | ----: |
| ✅ Passed        |    33 |
| ❌ Failed        |    9 |
| ⛔ Blocked       |     0 |
| ⏸️ Not Executed |     0 |

**Execution Success Rate:** **78.6%**

---

# Defect Summary

| Severity | Count |
|-----------|------:|
| 🔴 Critical | 3 |
| 🟠 High | 5 |
| 🟡 Medium | 1 |
| 🟢 Low | 0 |
| **Total Defects** | **9** |

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/qa-saucedemo-README.md)
