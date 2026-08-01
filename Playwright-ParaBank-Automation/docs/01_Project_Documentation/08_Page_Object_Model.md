# 08_Page_Object_Model

> **Playwright-ParaBank-Automation – Page Object Model (POM)**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Page Object Model  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document describes how the Page Object Model (POM) design pattern is implemented within the Playwright automation framework.

The objective is to separate test logic from user interface interactions, making the framework easier to maintain, extend, and understand.

---

# What is the Page Object Model?

The Page Object Model is a design pattern that represents each application page as a separate class.

Each Page Object contains:

- Page locators
- User actions
- Reusable methods
- Page-specific functionality

Tests interact with Page Objects instead of directly interacting with the UI.

---

# Architecture Overview

```text
Playwright Test

        │

        ▼

Page Object

        │

        ▼

Playwright API

        │

        ▼

Browser

        │

        ▼

ParaBank Application
```

This separation keeps business logic independent from UI implementation.

---

# Objectives

- Improve maintainability
- Reduce duplicated code
- Increase readability
- Centralize locators
- Simplify framework expansion
- Support reusable automation

---

# Project Structure

```text
pages/

BasePage.ts

LoginPage.ts

RegistrationPage.ts

AccountOverviewPage.ts

OpenAccountPage.ts

TransferFundsPage.ts

BillPaymentPage.ts

RequestLoanPage.ts
```

Each application page has its own dedicated Page Object.

---

# Responsibilities

## Test Files

Responsible for:

- Business scenarios
- Assertions
- Test flow
- Test data usage

---

## Page Objects

Responsible for:

- Element locators
- User interactions
- Navigation
- Reusable business actions

---

## Playwright

Responsible for:

- Browser communication
- Auto waiting
- Assertions
- Reporting

---

# Example Workflow

```text
Test

↓

LoginPage.login()

↓

Fill Username

↓

Fill Password

↓

Click Login

↓

Account Overview

↓

Assertions
```

Tests focus on **what** should happen.

Page Objects define **how** it happens.

---

# Locator Strategy

Locators should remain inside Page Objects.

Preferred priority:

1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. CSS selectors
7. XPath (only when necessary)

---

# Method Design

Methods should:

- Represent business actions
- Be reusable
- Return meaningful results when appropriate
- Avoid assertions
- Hide implementation details

Good examples:

```typescript
login()

logout()

transferFunds()

requestLoan()

openNewAccount()
```

Avoid methods such as:

```typescript
clickButton()

fillInput()

execute()
```

---

# Base Page

Future versions of the framework may include a BasePage.

Responsibilities:

- Shared navigation
- Common helper methods
- Generic waiting
- Shared utilities

Example:

```text
BasePage

↑

LoginPage

RegistrationPage

TransferFundsPage

BillPaymentPage
```

---

# Benefits

Using Page Objects provides:

- Easier maintenance
- Cleaner tests
- Better readability
- Reusable code
- Stable framework architecture
- Faster updates after UI changes

---

# Future Improvements

Planned enhancements include:

- BasePage implementation
- Component Objects
- Shared navigation objects
- Reusable dialogs
- Custom fixtures
- Generic page utilities

---

# Summary

The Page Object Model is one of the core architectural principles of the Playwright automation framework.

By separating business logic from UI interactions, the project remains scalable, maintainable, and suitable for real-world automation development.

---

_End of Page Object Model_
