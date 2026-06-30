# Test Data

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Functional Testing

**Prepared By:** Filip Jelinek

---

## 📑 In-page Navigation

- [Overview](#overview)
- [Objectives](#objectives)
- [Login Test Data](#login-test-data)
- [Checkout Test Data](#checkout-test-data)
- [Invalid Test Data](#invalid-test-data)
- [Boundary Test Data](#boundary-test-data)
- [Summary](#summary)

---

# Overview

This document contains the test data used during manual functional testing of the SauceDemo web application.

The documented datasets support consistent and repeatable test execution across authentication, inventory, shopping cart, checkout, and navigation test scenarios. The test data includes valid credentials, invalid inputs, boundary values, and validation datasets used throughout the testing process.

Maintaining test data separately from test cases improves test repeatability, simplifies regression testing, and ensures consistent execution across multiple testing cycles.

---

# Objectives

The prepared test data supports verification of the following functional areas:

- User authentication (Login)
- Product inventory and product details
- Shopping cart functionality
- Checkout process
- Input validation
- Positive and negative test scenarios
- Boundary value testing
- Error handling and validation messages

---

# Login Test Data

| Test Data ID | Description | Username | Password | Expected Result |
|--------------|-------------|----------------|--------------|----------------|
| TD-001 | Standard User | `standard_user` | `secret_sauce` | Successful login |
| TD-002 | Locked Out User | `locked_out_user` | `secret_sauce` | Login blocked with error message |
| TD-003 | Problem User | `problem_user` | `secret_sauce` | Successful login with simulated UI defects |
| TD-004 | Error User | `error_user` | `secret_sauce` | Successful login with simulated application errors |
| TD-005 | Performance Glitch User | `performance_glitch_user` | `secret_sauce` | Successful login (slow response) |
| TD-006 | Invalid Username | `invalid_user` | `secret_sauce` | Error message displayed |
| TD-007 | Invalid Password | `standard_user` | `invalid_password` | Error message displayed |
| TD-008 | Empty Credentials | *(blank)* | *(blank)* | Validation error displayed |

---

# Checkout Test Data

| Test Data ID | First Name | Last Name | ZIP / Postal Code | Purpose |
|--------------|------------|-----------|-------------------|---------|
| TD-101 | John | Smith | 90210 | Valid checkout |
| TD-102 | Alice | Brown | 10001 | Valid checkout |
| TD-103 | Michael | Johnson | 75001 | Valid checkout |
| TD-104 | *(blank)* | Smith | 90210 | Empty First Name validation |
| TD-105 | John | *(blank)* | 90210 | Empty Last Name validation |
| TD-106 | John | Smith | *(blank)* | Empty Postal Code validation |
| TD-107 | John | Smith | ABCDE | Invalid Postal Code validation |
| TD-108 | John | Smith | 1234567890 | Long Postal Code validation |

---

# Invalid Test Data

| Test Data ID | Input | Test Scenario |
|--------------|-------|---------------|
| TD-201 | `"   "` | Whitespace validation |
| TD-202 | `ABCDE` | Invalid Postal Code validation |
| TD-203 | `12345678901234567890` | Input length validation |
| TD-204 | `!@#$%^&*` | Special character validation |
| TD-205 | `<script>alert()</script>` | Invalid text input validation |
| TD-206 | `123ABC` | Alphanumeric Postal Code validation |

---

# Boundary Test Data

| Test Data ID | Field | Value | Test Scenario |
|--------------|-------|-------|---------------|
| TD-301 | First Name | `A` | Minimum length validation |
| TD-302 | Last Name | `Z` | Minimum length validation |
| TD-303 | ZIP / Postal Code | `1` | Minimum numeric value |
| TD-304 | First Name | `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX` | Maximum length validation (50 characters) |
| TD-305 | ZIP / Postal Code | `99999` | Maximum valid postal code value |

---

# Summary

The prepared test datasets support positive, negative, validation, and boundary testing scenarios executed during manual functional testing of the SauceDemo web application.

The documented data was used throughout the testing process to verify authentication, inventory functionality, product details, shopping cart behavior, checkout validation, and navigation features.

Maintaining test data separately from test cases improves test repeatability, simplifies regression testing, and ensures consistent execution across multiple testing cycles. The structured datasets also support clear traceability between test data, test cases, test execution results, and reported defects.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/qa-saucedemo-README.md)
