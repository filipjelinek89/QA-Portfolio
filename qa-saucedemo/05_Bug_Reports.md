# Bug Reports

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Testing

**Documentation Standard:** IEEE-inspired QA Documentation

---

## 📑 In-page Navigation

* [Overview](#overview)
* [Bug Report Structure](#bug-report-structure)
* [Severity Classification](#severity-classification)
* [Priority Classification](#priority-classification)
* [Environment](#environment)
* [Bug Reports](#bug-reports)
* [Summary](#summary)

---

# Overview

This section contains bug reports identified during manual testing of the SauceDemo web application.

Each reported issue was documented using a structured bug report template commonly used in software testing projects. Every report includes essential information required for developers and stakeholders to understand, reproduce, and prioritize the defect.

The purpose of this section is to demonstrate practical defect reporting skills, including clear communication, accurate classification, and professional documentation.

---


# Bug Report Structure

Each bug report contains:

- Unique Bug ID
- Title
- Severity
- Priority
- Status
- Environment
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Attachments (Screenshot Placeholder)
- Additional Notes

---

# Severity Classification

| Severity    | Description                                                |
| ----------- | ---------------------------------------------------------- |
| 🔴 Critical | System failure or major functionality is unusable.         |
| 🟠 High     | Core functionality is significantly affected.              |
| 🟡 Medium   | Feature works incorrectly but has a workaround.            |
| 🟢 Low      | Minor issue with limited impact (UI, usability, cosmetic). |

---

# Priority Classification

| Priority | Description                |
| -------- | -------------------------- |
| P1       | Fix immediately            |
| P2       | Fix in the next release    |
| P3       | Normal priority            |
| P4       | Low priority / Enhancement |

---

# Environment

All bug reports were documented using the following environment:

| Item             | Value                     |
| ---------------- | ------------------------- |
| Operating System | Windows 11 Pro (64-bit)   |
| Browser          | Google Chrome             |
| Browser Version  | 149.0.7827.197            |
| Application      | SauceDemo                 |
| Testing Type     | Manual Functional Testing |

---

# Bug Reports

| Bug ID  | Title                                                                                                                 | Severity    | Status |
| ------- | --------------------------------------------------------------------------------------------------------------------- | ----------- | ------ |
| BUG-001 | [Login with Empty Credentials Displays Incorrect Validation](BUG-001_Login_With_Empty_Credentials.md)                 | 🟠 High     | Open   |
| BUG-002 | [Username Field Allows Leading Spaces](BUG-002_Username_Field_Allows_Leading_Spaces.md)                               | 🟡 Medium   | Open   |
| BUG-003 | [Shopping Cart Badge Not Updated After Removing Item](BUG-003_Shopping_Cart_Badge_Not_Updated.md)                     | 🟠 High     | Open   |
| BUG-004 | [Checkout Allows Whitespace in First Name](BUG-004_Checkout_Allows_Whitespace_First_Name.md)                          | 🟡 Medium   | Open   |
| BUG-005 | [Last Name Field Accepts Only Spaces](BUG-005_Last_Name_Field_Accepts_Only_Spaces.md)                                 | 🟡 Medium   | Open   |
| BUG-006 | [ZIP Code Field Allows Alphabetic Characters](BUG-006_Zip_Code_Field_Allows_Letters.md)                               | 🟠 High     | Open   |
| BUG-007 | [Product Image Is Not Clickable](BUG-007_Product_Image_Not_Clickable.md)                                              | 🟢 Low      | Open   |
| BUG-008 | [Browser Back Button Returns User to Checkout](BUG-008_Back_Button_Returns_To_Checkout.md)                            | 🟡 Medium   | Open   |
| BUG-009 | [Shopping Cart Persists After Logout](BUG-009_Cart_Persists_After_Logout.md)                                          | 🔴 Critical | Open   |
| BUG-010 | [Error Message Remains Visible After Successful Login](BUG-010_Error_Message_Not_Dismissed.md)                        | 🟢 Low      | Open   |
| BUG-011 | [Missing Alt Text on Product Images](BUG-011_Missing_Alt_Text_On_Product_Images.md)                                   | 🟢 Low      | Open   |
| BUG-012 | [Footer Link Uses HTTP Instead of HTTPS](BUG-012_Footer_Link_Opens_HTTP.md)                                           | 🟢 Low      | Open   |
| BUG-013 | [Burger Menu Is Not Fully Keyboard Accessible](BUG-013_Burger_Menu_Not_Keyboard_Accessible.md)                        | 🟡 Medium   | Open   |
| BUG-014 | [Double Click on Checkout Button Creates Duplicate Submission](BUG-014_Checkout_Button_Double_Click_Submits_Twice.md) | 🟠 High     | Open   |
| BUG-015 | [Product Sorting Resets After Browser Back Navigation](BUG-015_Product_Sorting_Resets_After_Back_Navigation.md)       | 🟡 Medium   | Open   |

---

# Summary

- **Total Bug Reports:** 15
- **Critical:** 1
- **High:** 4
- **Medium:** 6
- **Low:** 4

The reported issues represent a realistic mix of functional, validation, usability, accessibility, and user interface defects typically encountered during manual testing of a web application.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)
