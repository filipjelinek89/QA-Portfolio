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

This document contains the test data used during manual testing of the SauceDemo web application.

The objective of maintaining test data separately is to ensure repeatable, consistent, and well-documented test execution. The datasets cover both positive and negative test scenarios, including valid credentials, invalid inputs, boundary values, and validation testing.

---

# Objectives

The prepared test data supports verification of:

- Login functionality
- Checkout process
- Input validation
- Boundary value testing
- Negative testing
- Error handling

---

# Login Test Data

| Test Data ID | Description             | Username                | Password         | Expected Result  |
| ------------ | ----------------------- | ----------------------- | ---------------- | ---------------- |
| TD-001       | Standard User           | standard_user           | secret_sauce     | Login Successful |
| TD-002       | Locked Out User         | locked_out_user         | secret_sauce     | Login Failed     |
| TD-003       | Problem User            | problem_user            | secret_sauce     | Login Successful |
| TD-004       | Performance Glitch User | performance_glitch_user | secret_sauce     | Login Successful |
| TD-005       | Invalid Username        | invalid_user            | secret_sauce     | Error Message    |
| TD-006       | Invalid Password        | standard_user           | invalid_password | Error Message    |
| TD-007       | Empty Credentials       | *(blank)*               | *(blank)*        | Validation Error |

---

# Checkout Test Data

| Test Data ID | First Name | Last Name | ZIP / Postal Code | Purpose          |
| ------------ | ---------- | --------- | ----------------- | ---------------- |
| TD-101       | John       | Smith     | 90210             | Valid Checkout   |
| TD-102       | Alice      | Brown     | 10001             | Valid Checkout   |
| TD-103       | Michael    | Johnson   | 75001             | Valid Checkout   |
| TD-104       | *(blank)*  | Smith     | 90210             | Empty First Name |
| TD-105       | John       | *(blank)* | 90210             | Empty Last Name  |
| TD-106       | John       | Smith     | *(blank)*         | Empty ZIP Code   |

---

# Invalid Test Data

| Test Data ID | Input                      | Purpose                     |
| ------------ | -------------------------- | --------------------------- |
| TD-201       | `"   "`                    | Whitespace Validation       |
| TD-202       | `ABCDE`                    | Alphabetic ZIP Code         |
| TD-203       | `12345678901234567890`     | Long Input                  |
| TD-204       | `!@#$%^&*`                 | Special Characters          |
| TD-205       | `<script>alert()</script>` | Invalid HTML / Script Input |
| TD-206       | `' OR '1'='1`              | SQL Injection Test Input    |

---

# Boundary Test Data

| Test Data ID | Field      | Value         | Purpose               |
| ------------ | ---------- | ------------- | --------------------- |
| TD-301       | First Name | A             | Minimum Length        |
| TD-302       | Last Name  | Z             | Minimum Length        |
| TD-303       | ZIP Code   | 1             | Minimum Numeric Value |
| TD-304       | First Name | 50 Characters | Maximum Length        |
| TD-305       | ZIP Code   | 99999         | Typical Maximum Value |

---

# Summary

The prepared datasets support positive, negative, validation, and boundary testing scenarios.

Maintaining structured test data separately from test cases improves test repeatability, simplifies regression testing, and enhances the overall quality of the testing documentation.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)