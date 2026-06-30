# Test Summary

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Functional Testing

**Prepared By:** Filip Jelinek

---

## 📑 In-page Navigation

- [Overview](#overview)
- [Test Scope](#test-scope)
- [Execution Summary](#execution-summary)
- [Defect Summary](#defect-summary)
- [Coverage Summary](#coverage-summary)
- [Key Findings](#key-findings)
- [Recommendations](#recommendations)
- [Conclusion](#conclusion)

---

# Overview

This document summarizes the results of the manual testing activities performed on the SauceDemo web application.

The testing process included requirement analysis, test scenario preparation, detailed test case execution, defect reporting, and documentation of the overall testing outcome.

The objective of this summary is to provide a high-level overview of the testing effort and the overall quality of the application at the time of testing.

---

# Test Scope

The following functional areas were included in testing:

- User Authentication
- Product Inventory
- Shopping Cart
- Checkout Process
- Navigation
- Session Management
- Input Validation
- User Interface
- Accessibility
- Browser Navigation

---

# Execution Summary

| Metric | Result |
|--------|------:|
| Total Test Cases | 42 |
| Executed | 42 |
| Passed | 33 |
| Failed | 9 |
| Blocked | 0 |
| Not Executed | 0 |
| Pass Rate | 78.6% |
| Fail Rate | 21.4% |

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

# Coverage Summary

| Testing Area           |    Status   |
| ---------------------- | :---------: |
| Login & Authentication | ✅ Completed |
| Inventory Management   | ✅ Completed |
| Shopping Cart          | ✅ Completed |
| Checkout               | ✅ Completed |
| Navigation             | ✅ Completed |
| Validation Testing     | ✅ Completed |
| Accessibility Testing  | ✅ Completed |
| Session Management     | ✅ Completed |

---

# Key Findings

Manual functional testing identified **9 unique defects** affecting several core areas of the SauceDemo application.

The most significant findings include:

- Product images displayed incorrectly on the Inventory page.
- Missing product information for selected products.
- "Add to Cart" and "Remove" buttons not functioning for specific products.
- Checkout validation issues, including an unresponsive Last Name field and the ability to continue without entering a required last name.
- The **Finish** button was not clickable, preventing successful order completion.
- Product sorting by **Price (Low to High)** resulted in an application error.
- The **About** link redirected users to a **404 Page Not Found**.

No unexpected application crashes were encountered during testing. All identified defects were successfully reproduced, documented, and linked to their corresponding test cases and bug reports, providing complete traceability throughout the testing process.

---

# Recommendations

Based on the executed test cases and the identified defects, the following improvements are recommended:

- Correct the Inventory page so that each product displays its corresponding image and complete product information.
- Fix the functionality of the **Add to Cart** and **Remove** buttons for affected products.
- Improve checkout form validation by ensuring all required fields accept valid input and prevent users from continuing with incomplete information.
- Resolve the issue preventing the **Finish** button from completing the checkout process.
- Fix the product sorting functionality to prevent application errors when sorting by **Price (Low to High)**.
- Update the **About** link to redirect users to the correct destination instead of returning a **404 Page Not Found**.
- Perform comprehensive regression testing after implementing the fixes to verify that resolved defects do not introduce new issues.

---

# Conclusion

A total of **42 manual test cases** were successfully executed during this testing cycle.

The testing identified **9 unique defects** affecting several core functional areas, including the Inventory page, Product Details, Shopping Cart, Checkout process, and Navigation. While the majority of the application functionality performed as expected, the reported issues highlight areas requiring improvement to ensure a consistent and reliable user experience.

Overall, the SauceDemo application demonstrates stable core functionality suitable for demonstration and learning purposes. The executed testing activities successfully identified and documented reproducible defects using structured manual testing techniques, providing complete traceability between **Requirements (FR)**, **Test Cases (TC)**, and **Bug Reports (BUG)**. The portfolio demonstrates a systematic approach to test planning, execution, defect reporting, and documentation in accordance with common QA best practices.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/qa-saucedemo-README.md)
