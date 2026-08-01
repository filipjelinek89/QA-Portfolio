# 07_Test_Data_Strategy

> **Playwright-ParaBank-Automation – Test Data Strategy**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Test Data Strategy  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document defines how test data is created, managed, organized, and maintained within the Playwright automation framework.

A consistent test data strategy improves reliability, scalability, readability, and maintainability while reducing duplicated test logic.

---

# Objectives

- Centralize test data
- Reduce duplicated values
- Simplify maintenance
- Improve test readability
- Support reusable automation
- Enable future data-driven testing

---

# Test Data Principles

The framework follows these principles:

- Reusable
- Independent
- Predictable
- Maintainable
- Easy to update
- Environment independent

---

# Test Data Sources

The framework will use several sources of test data depending on the testing scenario.

## Static Test Data

Used for stable business scenarios.

Examples:

```text
test-data/

users.json

accounts.json

billPayment.json

loanRequests.json
```

---

## Dynamic Test Data

Generated during test execution.

Examples:

- Random usernames
- Random email addresses
- Unique account names
- Temporary values

Generated data prevents conflicts between repeated executions.

---

## Environment Data

Environment-specific values will be stored separately.

Examples:

```text
BASE_URL

USERNAME

PASSWORD

TIMEOUT
```

These values should not be hardcoded inside test files.

---

# Folder Structure

```text
test-data/

users.json

accounts.json

payments.json

loans.json

registration.json
```

Future versions may introduce additional folders for larger datasets.

---

# Test Data Usage

Preferred workflow:

```text
Load Test Data

↓

Pass Data to Page Object

↓

Execute Business Action

↓

Validate Expected Result
```

Tests should consume data rather than create hardcoded values whenever practical.

---

# Data Organization

Test data should be grouped by business module.

Examples:

- Registration
- Login
- Accounts
- Transfers
- Payments
- Loans

This mirrors the project structure and simplifies maintenance.

---

# Data Validation

Test data should be:

- Complete
- Valid
- Realistic
- Easy to understand
- Consistent across modules

Avoid unnecessary or meaningless values.

---

# Sensitive Data

Sensitive information should never be committed to the repository.

Examples:

- Passwords
- API keys
- Personal credentials
- Tokens
- Secrets

Future versions may use environment variables or secret management within CI/CD.

---

# Data Reusability

Whenever possible, reuse existing datasets instead of creating duplicates.

Examples:

- Shared user accounts
- Common payment data
- Standard transfer scenarios

This reduces maintenance effort and improves consistency.

---

# Future Strategy

Future enhancements include:

- Data-driven testing
- Parameterized tests
- Faker.js for realistic random data
- Environment profiles
- Multiple configuration files
- External data providers

---

# Benefits

A structured test data strategy provides:

- Cleaner test code
- Easier maintenance
- Better scalability
- More reliable execution
- Reduced duplication
- Improved framework quality

---

# Summary

The Playwright framework separates test logic from test data whenever possible.

This approach creates a flexible automation framework that is easier to maintain, extend, and execute across different environments.

---

_End of Test Data Strategy_
