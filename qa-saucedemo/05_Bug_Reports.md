# Bug Reports

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Version:** 2.0

**Prepared by:** Filip Jelinek

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Functional Testing

**Documentation Standard:** IEEE-inspired QA Documentation

---

# In-page Navigation

- [Overview](#overview)
- [Bug Report Structure](#bug-report-structure)
- [Severity Classification](#severity-classification)
- [Priority Classification](#priority-classification)
- [Environment](#environment)
- [Bug Reports](#bug-reports)
- [Summary](#summary)

---

# Overview

This section contains bug reports identified during manual functional testing of the SauceDemo web application.

The reported defects were discovered while testing different user accounts (`problem_user` and `error_user`) intentionally provided by SauceDemo to simulate application defects.

Each bug report follows a standardized documentation structure commonly used in software testing projects and includes all information required to reproduce, classify, and prioritize the issue.

This documentation demonstrates practical bug reporting skills and professional QA documentation practices.

---

# Bug Report Structure

Each bug report contains:

- Bug ID
- Related Requirement
- Related Test Case
- Title
- Severity
- Priority
- Status
- Environment
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Screenshot
- Additional Notes

---

# Severity Classification

| Severity | Description |
|-----------|-------------|
| 🔴 Critical | Application functionality is blocked or unusable. |
| 🟠 High | Core functionality is significantly affected. |
| 🟡 Medium | Functionality works incorrectly but workaround exists. |
| 🟢 Low | Cosmetic or minor usability issue. |

---

# Priority Classification

| Priority | Description |
|----------|-------------|
| P1 | Fix immediately |
| P2 | Fix in the next release |
| P3 | Normal priority |
| P4 | Low priority / Enhancement |

---

# Environment

All bug reports were documented using the following environment.

| Item | Value |
|------|-------|
| Operating System | Windows 11 Pro (64-bit) |
| Browser | Google Chrome |
| Browser Version | 149.0.7827.197 |
| Application | SauceDemo |
| Testing Type | Manual Functional Testing |

---

# Bug Reports

| Bug ID | Requirement | Related TC | Title | Severity | Priority | Status |
|--------|-------------|------------|-------|-----------|----------|--------|
| BUG-001 | FR-002 | TC008 | [All Product Images Display the Same Image on Inventory Page](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-001%20%23U2013%20Incorrect%20Product%20Images%20Displayed%20on%20Inventory%20Page.md) | 🟠 High | P2 | Open |
| BUG-002 | FR-002 | TC009 | [Product Information Is Missing on Inventory Page](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-002_Incorrect_Product_Information.md) | 🟠 High | P2 | Open |
| BUG-003 | FR-002 | TC010 | [Add to Cart and Remove Buttons Do Not Work for Specific Products](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-003%20%23U2013%20Add%20to%20Cart%20Button%20Does%20Not%20Work%20for%20Specific%20Products.md) | 🔴 Critical | P1 | Open |
| BUG-004 | FR-003 | TC016 | [Remove Button Does Not Work on Product Details Page](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-004%20%23U2013%20Remove%20Button%20Does%20Not%20Remove%20Product%20on%20Product%20Details%20Page.md) | 🟠 High | P2 | Open |
| BUG-005 | FR-005 | TC027 | [Last Name Field Does Not Accept Input During Checkout](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-005%20%23U2013%20Last%20Name%20Field%20Does%20Not%20Accept%20Input%20During%20Checkout.md) | 🟠 High | P2 | Open |
| BUG-006 | FR-005 | TC029 | [Checkout Allows User to Continue Without Required Last Name](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-006%20%23U2013%20Checkout%20Allows%20Progress%20Without%20Required%20Last%20Name.md) | 🔴 Critical | P1 | Open |
| BUG-007 | FR-005 | TC032 | [Finish Button Is Not Clickable on Checkout Overview Page](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-007%20%23U2013%20Finish%20Button%20Does%20Not%20Complete%20Order.md) | 🔴 Critical | P1 | Open |
| BUG-008 | FR-006 | TC037 | [Product Sorting by Price (Low to High) Displays Error Page](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-008%20%23U2013%20Product%20Sorting%20by%20Price%20(Low%20to%20High)%20Triggers%20JavaScript%20Error.md) | 🟠 High | P2 | Open |
| BUG-009 | FR-007 | TC041 | [About Link Returns 404 Page Not Found]([BUG-009_About_Link_Returns_404_Page_Not_Found.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports/BUG-009%20%23U2013%20About%20Link%20Redirects%20to%20404%20Page.md)) | 🟡 Medium | P3 | Open |

---

# Summary

## Bug Statistics

| Severity | Count |
|-----------|------:|
| 🔴 Critical | 3 |
| 🟠 High | 5 |
| 🟡 Medium | 1 |
| 🟢 Low | 0 |
| **Total Bug Reports** | **9** |

---

## Functional Areas Affected

- Login
- Inventory
- Product Details
- Shopping Cart
- Checkout
- Navigation

---

## Related Test Cases

The reported defects are linked to the following executed test cases:

- TC008
- TC009
- TC010
- TC016
- TC027
- TC029
- TC032
- TC037
- TC041

---

## Notes

All reported defects were identified during manual functional testing of SauceDemo.

Each issue was successfully reproduced and documented with detailed reproduction steps, expected and actual results, severity assessment, priority classification, and supporting screenshots.

The documentation demonstrates practical experience in identifying, reproducing, documenting, and communicating software defects using industry-standard QA documentation practices.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/qa-saucedemo-README.md)
