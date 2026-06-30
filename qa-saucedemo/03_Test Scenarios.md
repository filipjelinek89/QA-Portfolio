# Test Scenarios

**Project:** SauceDemo Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation
- [1. Purpose](#1.-Purpose)
- [2. Test Scenarios](#2.-Test-Scenarios)
- [3. Scenario Coverage](#3.-Scenario-Coverage)
- [4. Traceability](#4.-Traceability)
- [5.Next Phase](#5.-Next-Phase)

---

# 1. Purpose

This document defines the high-level test scenarios for the SauceDemo web application.

The scenarios identify the major functional areas that will be verified during manual testing. Each scenario serves as the basis for one or more detailed test cases.

---

# 2. Test Scenarios

| ID     | Test Scenario                                                | Related Requirement |
| ------ | ------------------------------------------------------------ | ------------------- |
| TS-001 | Verify successful login with valid credentials               | FR-001              |
| TS-002 | Verify login validation with invalid credentials             | FR-001              |
| TS-003 | Verify login validation when required fields are empty       | FR-001              |
| TS-004 | Verify login behavior for a locked user                      | FR-001              |
| TS-005 | Verify successful logout                                     | FR-008              |
| TS-006 | Verify product inventory is displayed after login            | FR-002              |
| TS-007 | Verify product details page                                  | FR-003              |
| TS-008 | Verify adding products to the shopping cart                  | FR-004              |
| TS-009 | Verify removing products from the shopping cart              | FR-004              |
| TS-010 | Verify shopping cart contents                                | FR-004              |
| TS-011 | Verify cart badge updates correctly                          | FR-004              |
| TS-012 | Verify checkout with valid customer information              | FR-005              |
| TS-013 | Verify checkout validation for missing required fields       | FR-005              |
| TS-014 | Verify checkout overview page                                | FR-005              |
| TS-015 | Verify successful order completion                           | FR-005              |
| TS-016 | Verify product sorting by name (A–Z)                         | FR-006              |
| TS-017 | Verify product sorting by name (Z–A)                         | FR-006              |
| TS-018 | Verify product sorting by price (Low to High)                | FR-006              |
| TS-019 | Verify product sorting by price (High to Low)                | FR-006              |
| TS-020 | Verify navigation using the application menu                 | FR-007              |
| TS-021 | Verify browser Back and Forward navigation                   | FR-007              |
| TS-022 | Verify direct URL access without authentication              | FR-007              |
| TS-023 | Verify session behavior after logout                         | FR-008              |
| TS-024 | Verify application behavior during extended user interaction | FR-007              |
| TS-025 | Perform exploratory testing of the application               | Multiple            |

---

# 3. Scenario Coverage

The scenarios cover the application's primary user workflows, including:

- Authentication
- Product browsing
- Shopping cart management
- Checkout
- Navigation
- Session management
- Product sorting
- Exploratory testing

Together, these scenarios provide comprehensive coverage of the application's core functionality and serve as the foundation for detailed manual test cases.

---

# 4. Traceability

Each test scenario is linked to one or more functional requirements identified in the Requirements Analysis document.

The relationship between requirements, scenarios, and test cases will be documented in the Requirements Traceability Matrix (RTM) to ensure complete test coverage.

---

# 5. Next Phase

Each scenario listed in this document will be expanded into one or more detailed test cases, including:

- Preconditions
- Test Data
- Test Steps
- Expected Results
- Actual Results
- Execution Status

This ensures that every functional requirement is validated through structured and repeatable manual testing.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)

