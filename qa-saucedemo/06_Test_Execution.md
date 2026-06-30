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
| TC008 | Verify Inventory Page Display | Inventory | ❌ Fail | [BUG-001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-001_Incorrect_Product_Images.png) |
| TC009 | Verify Product Information | Inventory | ❌ Fail | [BUG-002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-002_Incorrect_Product_Information_Product_Details_Page.png) |
| TC010 | Verify "Add to Cart" Button Functionality | Inventory | ❌ Fail | [BUG-003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-003_Add_To_Cart_Button_Not_Working_Specific_Products.png) |
| TC011 | Verify Product Details Navigation | Inventory | ✅ Pass | — |
| TC012 | Verify Shopping Cart Badge Update | Inventory | ✅ Pass | — |
| TC013 | Verify Inventory Page After Browser Refresh | Inventory | ✅ Pass | — |
| TC014 | Verify Product Information on Product Details Page | Product Details | ✅ Pass | — |
| TC015 | Verify "Add to Cart" Button on Product Details Page | Product Details | ✅ Pass | — |
| TC016 | Verify "Remove" Button on Product Details Page | Product Details | ❌ Fail | [BUG-004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-004_Remove_Button_Not_Working_Product_Details_Page.png) |
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
| TC027 | Complete Checkout Information with Valid Data | Checkout | ❌ Fail | [BUG-005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-005_Last_Name_Field_Does_Not_Accept_Input_Checkout.png) |
| TC028 | Verify Checkout with Empty First Name | Checkout | ✅ Pass | — |
| TC029 | Verify Checkout with Empty Last Name | Checkout | ❌ Fail | [BUG-006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-006_Checkout_Allows_Empty_Last_Name.png) |
| TC030 | Verify Checkout with Empty Postal Code | Checkout | ✅ Pass | — |
| TC031 | Verify Checkout: Overview Page | Checkout | ✅ Pass | — |
| TC032 | Verify Successful Order Completion | Checkout | ❌ Fail | [BUG-007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-007_Finish_Button_Not_Working_Checkout_Overview.png)
) |
| TC033 | Verify Cancel Checkout from Checkout: Overview | Checkout | ✅ Pass | — |
| TC034 | Verify Order Confirmation Page | Checkout | ✅ Pass | — |
| TC035 | Verify "Back Home" Button After Order Completion | Checkout | ✅ Pass | — |
| TC036 | Verify Product Sorting by Name (A–Z) | Navigation & Session | ✅ Pass | — |
| TC037 | Verify Product Sorting by Price (Low to High) | Navigation & Session | ❌ Fail | [BUG-008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-008_Product_Sorting_Low_To_High_JavaScript_Error.png) |
| TC038 | Verify Burger Menu Opens | Navigation & Session | ✅ Pass | — |
| TC039 | Verify User Logout | Navigation & Session | ✅ Pass | — |
| TC040 | Verify Reset App State | Navigation & Session | ✅ Pass | — |
| TC041 | Verify About Link | Navigation & Session | ❌ Fail | [BUG-009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-009_About_Link_Redirects_To_404_Page.png) |
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
