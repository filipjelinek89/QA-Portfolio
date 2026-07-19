# API Test Case Standard

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Case Standard  
**Version:** 2.1  
**Prepared by:** Filip Jelinek  
**Testing Type:** REST API Testing

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Scope](#2-scope)
- [3. Test Case Definition](#3-test-case-definition)
- [4. Test Case Design Principles](#4-test-case-design-principles)
- [5. Sprint-Based Workflow](#5-sprint-based-workflow)
- [6. Test Case ID Convention](#6-test-case-id-convention)
- [7. Test Case Structure](#7-test-case-structure)
- [8. Test Types](#8-test-types)
- [9. Priority Classification](#9-priority-classification)
- [10. Writing Guidelines](#10-writing-guidelines)
- [11. Traceability](#11-traceability)
- [12. Definition of Done](#12-definition-of-done)
- [13. Document Maintenance](#13-document-maintenance)
- [14. Revision History](#14-revision-history)

---

# 1. Purpose

This document defines the project standard for designing API Test Cases within the Restful Booker API Testing Project.

Its purpose is to ensure that every Test Case follows a consistent structure, naming convention, level of detail, and traceability throughout the project.

This document defines the testing standard only.

Project-specific Test Cases are maintained separately in:

```text
04_Test_Cases/
└── API_Test_Cases.md
```

---

# 2. Scope

This standard applies to every API Test Case created during the project.

It covers all supported testing activities, including:

- Positive Testing
- Negative Testing
- Boundary Testing
- Contract Testing
- Authentication Testing
- Authorization Testing
- CRUD Testing
- Integration Testing
- End-to-End Testing
- Performance Validation

---

# 3. Test Case Definition

A Test Case is a detailed description of **how a specific testing objective is executed**.

Each Test Case defines:

- Preconditions
- Test Data
- Execution Steps
- Expected Results

A Test Case implements one Test Scenario and can be executed manually or automated.

Relationship:

```text
Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Test Execution
      ↓
Evidence
      ↓
Bug Report
```

---

# 4. Test Case Design Principles

Each Test Case should verify one primary behaviour.

General principles:

- One Test Case → One Primary Objective
- Clear expected result
- Repeatable execution
- Independent whenever practical
- Traceable to a Test Scenario
- Easy to automate
- Easy to maintain

Whenever possible, only one request parameter or testing condition should differ from the valid baseline.

---

# 5. Sprint-Based Workflow

Test Cases are developed incrementally throughout the project.

Every sprint follows the same workflow:

```text
Requirements Analysis
        ↓
API Analysis
        ↓
Test Scenarios
        ↓
Test Cases
        ↓
Postman Requests
        ↓
Execution
        ↓
Evidence Collection
        ↓
Bug Reporting
```

Each sprint introduces:

- New Requirements
- New Test Scenarios
- New Test Cases
- New Postman Requests
- New Execution Results

Completed Test Cases remain unchanged unless the underlying requirements change.

---

# 6. Test Case ID Convention

Test Case IDs use the following format:

```text
TC-[MODULE]-###
```

Examples:

```text
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

Test Case IDs must never be reused.

---

# 7. Test Case Structure

Every Test Case should contain the following fields.

| Field | Description |
|--------|-------------|
| Test Case ID | Unique identifier |
| Related Scenario | Test Scenario ID |
| Title | Test objective |
| Module | Functional module |
| Endpoint | API endpoint |
| HTTP Method | Request method |
| Priority | Execution priority |
| Test Type | Testing category |
| Preconditions | Required setup |
| Test Data | Request data |
| Test Steps | Execution procedure |
| Expected Result | Expected API behaviour |

---

# 8. Test Types

A Test Case may belong to one or more testing categories.

| Type | Purpose |
|------|---------|
| Positive | Verify expected behaviour |
| Negative | Verify invalid requests |
| Boundary | Verify limit values |
| Contract | Verify response contract |
| Authentication | Verify login/token creation |
| Authorization | Verify access permissions |
| Integration | Verify endpoint interaction |
| Performance | Validate response time |
| Exploratory | Investigate undocumented behaviour |
| End-to-End | Validate complete workflow |

---

# 9. Priority Classification

| Priority | Description |
|----------|-------------|
| Critical | Business-critical functionality |
| High | Core API functionality |
| Medium | Supporting functionality |
| Low | Minor verification |

Priority determines the recommended execution order.

Priority is independent from defect severity.

---

# 10. Writing Guidelines

Every Test Case should:

- Have a descriptive title.
- Verify one primary objective.
- Include clear preconditions.
- Define required test data.
- Contain reproducible execution steps.
- Define measurable expected results.
- Avoid combining unrelated validations.

Whenever possible, Expected Results should reference documented API behaviour rather than assumptions.

---

# 11. Traceability

Every Test Case must provide complete traceability.

```text
Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Test Execution
      ↓
Evidence
      ↓
Bug Report (if applicable)
```

Example:

```text
REQ-PING-001
      ↓
TS-PING-001
      ↓
TC-PING-001
      ↓
GET - Health Check
```

Complete traceability simplifies maintenance and ensures full requirement coverage.

---

# 12. Definition of Done

A Test Case is considered complete when:

- Test Case ID assigned
- Related Scenario linked
- Objective defined
- Endpoint specified
- HTTP Method specified
- Preconditions documented
- Test Data prepared
- Test Steps completed
- Expected Result documented
- Postman Request implemented
- Execution completed
- Evidence captured
- Reviewed

Execution status is documented separately within the Test Execution Report.

---

# 13. Document Maintenance

This document defines the project testing standard.

It should only be modified when the testing methodology or documentation standard changes.

Routine sprint activities must not modify this document.

Project Test Cases are maintained separately:

```text
04_Test_Cases/
└── API_Test_Cases.md
```

---

# 14. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 2.0 | Initial version | Sprint-based redesign |
| 2.1 | Documentation refinement | Improved traceability, workflow consistency, Definition of Done, and Test Case structure |