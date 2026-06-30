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
- **Passed:** 27
- **Failed:** 15
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


| TC ID  | Test Case                                                | Module             | Status | Bug Report                                                                                                  |
| ------ | -------------------------------------------------------- | ------------------ | :----: | ----------------------------------------------------------------------------------------------------------- |
| TC-001 | Verify Login with Empty Credentials                      | Login              | ❌ Fail | [BUG-001](../05_Bug_Reports/BUG-001_Login_With_Empty_Credentials.md)                                        |
| TC-002 | Verify Login with Invalid Username                       | Login              | ✅ Pass | —                                                                                                           |
| TC-003 | Verify Login with Invalid Password                       | Login              | ✅ Pass | —                                                                                                           |
| TC-004 | Verify Login with Leading Whitespace in Username         | Login              | ❌ Fail | [BUG-002](../05_Bug_Reports/BUG-002_Username_Field_Allows_Leading_Spaces.md)                                |
| TC-005 | Verify Login with Locked Out User                        | Login              | ✅ Pass | —                                                                                                           |
| TC-006 | Verify Login with Valid Credentials After Failed Attempt | Login              | ❌ Fail | [BUG-010](../05_Bug_Reports/BUG-010_Error_Message_Remains_Visible_After_Successful_Login.md)                |
| TC-007 | Verify Logout Functionality                              | Login              | ✅ Pass | —                                                                                                           |
| TC-008 | Verify Access Without Authentication                     | Login              | ✅ Pass | —                                                                                                           |
| TC-009 | Verify Display of Product Inventory                      | Inventory          | ✅ Pass | —                                                                                                           |
| TC-010 | Verify Product Details Page                              | Inventory          | ✅ Pass | —                                                                                                           |
| TC-011 | Verify Product Name Navigation                           | Inventory          | ✅ Pass | —                                                                                                           |
| TC-012 | Verify Add Single Product to Cart                        | Inventory          | ✅ Pass | —                                                                                                           |
| TC-013 | Verify Add Multiple Products to Cart                     | Inventory          | ✅ Pass | —                                                                                                           |
| TC-014 | Verify Remove Product from Inventory Page                | Inventory          | ✅ Pass | —                                                                                                           |
| TC-015 | Verify Navigation Menu Accessibility                     | Navigation         | ❌ Fail | [BUG-013](../05_Bug_Reports/BUG-013_Burger_Menu_Is_Not_Fully_Keyboard_Accessible.md)                        |
| TC-016 | Verify Navigation to Product Details                     | Inventory          | ❌ Fail | [BUG-007](../05_Bug_Reports/BUG-007_Product_Image_Is_Not_Clickable.md)                                      |
| TC-017 | Verify Product Sorting Functionality                     | Inventory          | ❌ Fail | [BUG-015](../05_Bug_Reports/BUG-015_Product_Sorting_Resets_After_Browser_Back_Navigation.md)                |
| TC-018 | Verify Product Image Accessibility                       | Inventory          | ❌ Fail | [BUG-011](../05_Bug_Reports/BUG-011_Product_Images_Missing_Alternative_Text.md)                             |
| TC-019 | Verify Sort Products by Name (A–Z)                       | Inventory          | ✅ Pass | —                                                                                                           |
| TC-020 | Verify Sort Products by Price (Low to High)              | Inventory          | ✅ Pass | —                                                                                                           |
| TC-021 | Verify Removing Products from Shopping Cart              | Shopping Cart      | ❌ Fail | [BUG-003](../05_Bug_Reports/BUG-003_Shopping_Cart_Badge_Not_Updated_After_Removing_Item.md)                 |
| TC-022 | Verify Continue Shopping from Cart                       | Shopping Cart      | ✅ Pass | —                                                                                                           |
| TC-023 | Verify Shopping Cart Badge Count                         | Shopping Cart      | ✅ Pass | —                                                                                                           |
| TC-024 | Verify Empty Shopping Cart                               | Shopping Cart      | ✅ Pass | —                                                                                                           |
| TC-025 | Verify Checkout Button Availability                      | Shopping Cart      | ✅ Pass | —                                                                                                           |
| TC-026 | Verify Cart Item Information                             | Shopping Cart      | ✅ Pass | —                                                                                                           |
| TC-027 | Verify Cancel Checkout                                   | Checkout           | ✅ Pass | —                                                                                                           |
| TC-028 | Verify Checkout with Valid Customer Information          | Checkout           | ✅ Pass | —                                                                                                           |
| TC-029 | Verify Shopping Cart Behavior After Logout               | Session Management | ❌ Fail | [BUG-009](../05_Bug_Reports/BUG-009_Shopping_Cart_Persists_After_Logout.md)                                 |
| TC-030 | Verify Checkout with Empty First Name                    | Checkout           | ✅ Pass | —                                                                                                           |
| TC-031 | Verify Checkout with Empty Last Name                     | Checkout           | ✅ Pass | —                                                                                                           |
| TC-032 | Verify Checkout with Empty ZIP Code                      | Checkout           | ✅ Pass | —                                                                                                           |
| TC-033 | Verify Checkout with Whitespace in First Name            | Checkout           | ❌ Fail | [BUG-004](../05_Bug_Reports/BUG-004_Checkout_Allows_Whitespace_in_First_Name.md)                            |
| TC-034 | Verify Checkout with Whitespace in Last Name             | Checkout           | ❌ Fail | [BUG-005](../05_Bug_Reports/BUG-005_Last_Name_Field_Accepts_Only_Spaces.md)                                 |
| TC-035 | Verify Checkout with Numeric First Name                  | Checkout           | ✅ Pass | —                                                                                                           |
| TC-036 | Verify Checkout with Alphabetic ZIP Code                 | Checkout           | ❌ Fail | [BUG-006](../05_Bug_Reports/BUG-006_ZIP_Code_Field_Accepts_Alphabetic_Characters.md)                        |
| TC-037 | Verify Order Completion                                  | Checkout           | ✅ Pass | —                                                                                                           |
| TC-038 | Verify Return to Products After Checkout                 | Checkout           | ✅ Pass | —                                                                                                           |
| TC-039 | Verify Checkout Overview Information                     | Checkout           | ✅ Pass | —                                                                                                           |
| TC-040 | Verify Browser Back Navigation After Checkout Completion | Checkout           | ❌ Fail | [BUG-008](../05_Bug_Reports/BUG-008_Browser_Back_Button_Returns_User_to_Checkout_After_Order_Completion.md) |
| TC-041 | Verify Multiple Click Handling During Checkout           | Checkout           | ❌ Fail | [BUG-014](../05_Bug_Reports/BUG-014_Double_Click_on_Checkout_Button_Creates_Duplicate_Submission.md)        |
| TC-042 | Verify External Footer Links                             | Footer             | ❌ Fail | [BUG-012](../05_Bug_Reports/BUG-012_Footer_Link_Uses_HTTP_Instead_of_HTTPS.md)                              |


---

# Execution Statistics

| Status          | Count |
| --------------- | ----: |
| ✅ Passed        |    27 |
| ❌ Failed        |    15 |
| ⛔ Blocked       |     0 |
| ⏸️ Not Executed |     0 |

**Execution Success Rate:** **64.3%**

---

# Defect Summary

| Severity    | Count |
| ----------- | ----: |
| 🔴 Critical |     1 |
| 🟠 High     |     4 |
| 🟡 Medium   |     6 |
| 🟢 Low      |     4 |

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)
