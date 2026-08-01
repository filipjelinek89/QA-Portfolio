# 03_Automation_Strategy

> **Playwright-ParaBank-Automation – Automation Strategy**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Automation Strategy  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document defines the overall automation testing strategy for the Playwright-ParaBank-Automation project.

Its purpose is to describe what will be automated, how tests will be organized, and which engineering principles will guide the framework throughout its lifecycle.

---

# Automation Objectives

- Automate critical business workflows
- Reduce repetitive manual regression testing
- Improve test consistency
- Detect regressions quickly
- Produce reliable execution reports
- Support maintainable automation architecture

---

# Scope

## In Scope

- User Registration
- Login & Logout
- Account Overview
- Open New Account
- Transfer Funds
- Bill Payment
- Request Loan
- Navigation
- Validation
- Negative Testing
- Boundary Testing

## Out of Scope

- Performance Testing
- Load Testing
- Accessibility Testing
- Security Penetration Testing
- Mobile Automation

---

# Test Pyramid

```text
            UI Automation
         (Playwright Tests)

               ▲

     Critical Business Flows

               ▲

      Manual Test Design
```

This project focuses on end-to-end UI automation while using the Manual QA project as the foundation for test design.

---

# Automation Priorities

Priority 1
- Login
- Registration
- Transfer Funds
- Bill Payment

Priority 2
- Account Overview
- Open New Account
- Request Loan

Priority 3
- Navigation
- Session Validation
- Boundary Testing

---

# Test Types

- Functional Testing
- Smoke Testing
- Regression Testing
- Negative Testing
- Validation Testing
- Boundary Testing
- Session Testing
- Cross-Browser Testing

---

# Browser Strategy

Supported:

- Chromium
- Firefox

Future:

- WebKit

Every critical workflow should execute successfully on supported browsers.

---

# Test Organization

```text
tests/

registration/

login/

account-overview/

open-account/

transfer-funds/

bill-payment/

request-loan/

navigation/

validation/
```

Tests are grouped by business module rather than by Playwright feature.

---

# Test Case Mapping

Every automated test maps to a manual test case.

Example:

| Manual Test | Automation |
|-------------|------------|
| TC009 | TC009_Login_Valid_Credentials.spec.ts |
| TC031 | TC031_Transfer_Funds.spec.ts |

This provides complete traceability between the manual and automation projects.

---

# Execution Strategy

```text
Developer Commit

↓

Playwright Execution

↓

Assertions

↓

Generate Reports

↓

Screenshots

↓

Traces

↓

CI/CD
```

---

# Reporting Strategy

The framework will generate:

- HTML Report
- Screenshots on Failure
- Trace Viewer
- Videos (where enabled)
- Test Execution Summary

---

# Design Principles

- Business-oriented automation
- Stable locators
- Minimal code duplication
- Readable tests
- Reusable Page Objects
- Maintainable framework
- Clear documentation

---

# Future Improvements

- Parallel execution
- Data-driven testing
- Environment profiles
- Docker execution
- Scheduled CI pipelines
- Advanced reporting

---

_End of Automation Strategy_
