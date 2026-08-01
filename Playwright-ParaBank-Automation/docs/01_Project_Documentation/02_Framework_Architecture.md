# 02_Framework_Architecture

> **Playwright-ParaBank-Automation – Framework Architecture**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Framework Architecture  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document describes the architecture of the Playwright automation framework.

The goal is to build a clean, scalable, maintainable and reusable automation framework that follows modern QA Automation best practices.

The framework will continuously evolve as new modules and automation features are introduced.

---

# Architecture Overview

```text
                 Tester

                    │

                    ▼

           Playwright Test

                    │

                    ▼

             Page Objects

                    │

                    ▼

           Playwright API

                    │

                    ▼

        Chromium / Firefox

                    │

                    ▼

         ParaBank Web Application
```

Each layer has a single responsibility.

---

# Framework Layers

## 1. Test Layer

Responsible for:

- Executing business scenarios
- Calling Page Objects
- Performing assertions
- Organising automation suites

Examples:

```text
TC009_Login_Valid_Credentials.spec.ts

TC031_Transfer_Funds.spec.ts
```

---

## 2. Page Object Layer

Responsible for:

- Locating page elements
- User interactions
- Reusable page methods
- Hiding implementation details

Examples:

```text
LoginPage.ts

RegistrationPage.ts

TransferFundsPage.ts
```

---

## 3. Playwright Layer

Responsible for:

- Browser communication
- Element interaction
- Waiting strategies
- Assertions
- Screenshots
- Tracing
- Reporting

---

## 4. Browser Layer

Supported browsers:

- Chromium
- Firefox

Future:

- WebKit

---

## 5. Application Layer

Target Application:

ParaBank Demo Banking Application

Business Modules:

- Registration
- Login
- Accounts
- Transfers
- Bill Payment
- Loans
- Navigation

---

# Folder Architecture

```text
Playwright-ParaBank-Automation/

docs/
pages/
tests/
fixtures/
utils/
test-data/

playwright.config.ts
README.md
```

---

# Planned Framework Components

## Page Objects

Encapsulate page behaviour and UI interactions.

---

## Fixtures

Provide reusable setup and teardown logic.

---

## Utilities

Reusable helper functions shared across tests.

---

## Test Data

External JSON files for reusable and maintainable test data.

---

## Reports

Generated automatically by Playwright.

Includes:

- HTML Reports
- Screenshots
- Videos
- Traces

---

# Execution Flow

```text
Start Test

↓

Load Test Data

↓

Launch Browser

↓

Navigate to ParaBank

↓

Execute Page Object Methods

↓

Verify Expected Results

↓

Generate Report

↓

Close Browser
```

---

# Framework Design Principles

- Separation of Concerns
- Reusability
- Maintainability
- Readability
- Scalability
- Minimal Code Duplication
- Stable Locators
- Business-Oriented Tests

---

# Future Architecture

The framework will gradually evolve to include:

- Data-driven testing
- Parallel execution
- CI/CD integration
- Environment profiles
- Docker execution
- Advanced reporting
- Custom Playwright fixtures
- Helper libraries

---

# Benefits

This architecture provides:

- Easier maintenance
- Cleaner test code
- Better scalability
- Faster debugging
- Reusable components
- Professional project structure

---

_End of Framework Architecture_
