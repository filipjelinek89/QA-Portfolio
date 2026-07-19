# API Test Case Standard

**Project:** Restful Booker API Testing Project

**Document Type:** API Test Case Standard

**Version:** 2.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Scope](#2-scope)
- [3. Test Case Design Principles](#3-test-case-design-principles)
- [4. Sprint-Based Workflow](#4-sprint-based-workflow)
- [5. Test Case ID Convention](#5-test-case-id-convention)
- [6. Test Case Structure](#6-test-case-structure)
- [7. Test Types](#7-test-types)
- [8. Priority Classification](#8-priority-classification)
- [9. Writing Guidelines](#9-writing-guidelines)
- [10. Traceability](#10-traceability)
- [11. Definition of Done](#11-definition-of-done)
- [12. Document Maintenance](#12-document-maintenance)
- [13. Revision History](#13-revision-history)

---

# 1. Purpose

This document defines the standard used for designing API test cases within the Restful Booker API Testing Project.

It establishes a consistent format, naming convention, traceability model and design principles for all API test cases.

Actual project test cases are maintained separately in **API_Test_Cases.md**.

---

# 2. Scope

This standard applies to every API test case created during the project, including:

- Positive Testing
- Negative Testing
- Boundary Testing
- Contract Testing
- Authentication Testing
- Authorization Testing
- CRUD Testing
- Integration Testing
- End-to-End Testing
- Performance Checks

---

# 3. Test Case Design Principles

Each test case should validate one primary test condition.

General principles:

- One Test Case → One Primary Objective
- Clear expected result
- Repeatable execution
- Independent whenever practical
- Traceable to a Test Scenario
- Easy to automate

Where possible, only one request parameter or condition should change from the valid baseline.

---

# 4. Sprint-Based Workflow

Test cases are developed incrementally.

```
Requirements
      ↓
Test Scenarios
      ↓
Test Cases
      ↓
Postman Requests
      ↓
Execution
      ↓
Evidence
      ↓
Bug Reports
```

Each sprint introduces:

- new requirements
- new scenarios
- new test cases
- new execution records

Previously completed test cases remain unchanged unless requirements change.

---

# 5. Test Case ID Convention

Format:

```
TC-[MODULE]-###
```

Examples:

```
TC-PING-001
TC-AUTH-001
TC-GETIDS-001
TC-GET-001
TC-CREATE-001
TC-PUT-001
TC-PATCH-001
TC-DELETE-001
TC-E2E-001
```

Numbering restarts for every functional module.

---

# 6. Test Case Structure

Each test case should contain the following fields.

| Field | Description |
|--------|-------------|
| Test Case ID | Unique identifier |
| Scenario ID | Related test scenario |
| Title | Test objective |
| Module | Functional area |
| Endpoint | API endpoint |
| HTTP Method | Request method |
| Test Type | Testing category |
| Priority | Execution priority |
| Preconditions | Required setup |
| Test Data | Input values |
| Test Steps | Execution procedure |
| Expected Result | Expected API behaviour |

---

# 7. Test Types

The following categories may be used.

| Type | Purpose |
|------|---------|
| Positive | Verify expected behaviour |
| Negative | Verify invalid requests |
| Boundary | Verify limit values |
| Contract | Verify API schema |
| Authentication | Verify login/token creation |
| Authorization | Verify access control |
| Integration | Verify interaction between endpoints |
| Performance | Verify response time |
| Exploratory | Investigate undocumented behaviour |
| End-to-End | Validate complete workflow |

---

# 8. Priority Classification

| Priority | Description |
|----------|-------------|
| Critical | Business-critical functionality |
| High | Core API functionality |
| Medium | Secondary functionality |
| Low | Minor verification |

Priority defines execution importance.

It does not represent defect severity.

---

# 9. Writing Guidelines

Each test case should:

- have a descriptive title
- define a single objective
- include clear preconditions
- specify required test data
- contain reproducible execution steps
- define measurable expected results

Avoid combining multiple independent validations into a single test case.

---

# 10. Traceability

Every test case must be traceable.

```
Requirement
      ↓
Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Execution
      ↓
Bug Report
```

Example:

```
REQ-PING-001
      ↓
TS-PING-001
      ↓
TC-PING-001
```

---

# 11. Definition of Done

A test case is considered complete when:

- ID assigned
- linked to a scenario
- execution steps documented
- expected result defined
- reviewed
- ready for execution

Execution status is recorded separately.

---

# 12. Document Maintenance

This document changes only when the project testing standard changes.

Actual test cases are maintained in:

```
API_Test_Cases.md
```

New sprints extend the Test Cases document without modifying this standard.

---

# 13. Revision History

| Version | Description |
|----------|-------------|
| 2.0 | Redesigned standard using sprint-based methodology |