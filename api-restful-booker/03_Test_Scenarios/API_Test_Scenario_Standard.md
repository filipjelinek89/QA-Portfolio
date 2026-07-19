# API Test Scenario Standard

**Project:** Restful Booker API Testing Project  
**Document Type:** Standard  
**Version:** 2.0  
**Prepared by:** Filip Jelinek  
**Testing Type:** REST API Testing  
**Purpose:** Defines the standard used to create and maintain all API Test Scenarios throughout the project.

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Scope](#2-scope)
- [3. Test Scenario Definition](#3-test-scenario-definition)
- [4. Scenario Design Principles](#4-scenario-design-principles)
- [5. Sprint-Based Workflow](#5-sprint-based-workflow)
- [6. Scenario ID Convention](#6-scenario-id-convention)
- [7. Scenario Priority](#7-scenario-priority)
- [8. Test Types](#8-test-types)
- [9. Scenario Template](#9-scenario-template)
- [10. Traceability](#10-traceability)
- [11. Naming Conventions](#11-naming-conventions)
- [12. Definition of Done](#12-definition-of-done)
- [13. Document Maintenance](#13-document-maintenance)

---

# 1. Purpose

This document defines the standard used for creating API Test Scenarios within the Restful Booker API Testing Project.

It ensures that every scenario follows the same structure, naming convention, level of detail, and traceability throughout the project.

This document is a project standard.

It does **not** contain project-specific test scenarios.

Actual scenarios are maintained in:

```
03_Test_Scenarios/
└── API Test Scenarios.md
```

---

# 2. Scope

This standard applies to every sprint completed during the project.

Each sprint introduces new API functionality together with its corresponding:

- API Analysis
- Test Scenarios
- Test Cases
- Postman Requests
- Test Execution
- Bug Reports
- Test Evidence

---

# 3. Test Scenario Definition

A Test Scenario is a high-level description of **what should be tested**.

A scenario does not contain detailed execution steps.

Instead, it defines a testing objective that is later expanded into one or more Test Cases.

Relationship:

```
Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Execution
      ↓
Bug Report
```

---

# 4. Scenario Design Principles

Every scenario should:

- Verify one functional behaviour.
- Have one clear testing objective.
- Be independent whenever possible.
- Be reusable.
- Avoid implementation details.
- Be understandable without reading the test cases.
- Support traceability.

Scenarios describe **what** should be tested.

Test Cases describe **how** it is tested.

---

# 5. Sprint-Based Workflow

Each sprint completes one functional module.

Example:

Sprint 1

```
Health Check
```

Sprint 2

```
Authentication
```

Sprint 3

```
Retrieve Booking IDs
```

Sprint 4

```
Retrieve Booking
```

Sprint 5

```
Create Booking
```

Every sprint follows the same lifecycle:

```
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
Evidence
      ↓
Bug Reports
      ↓
Sprint Completion
```

---

# 6. Scenario ID Convention

Scenario IDs use the following format:

```
TS-[MODULE]-###
```

Examples:

```
TS-PING-001

TS-AUTH-001

TS-CREATE-001
```

Module prefixes:

| Prefix | Module |
|----------|------------------------|
| PING | Health Check |
| AUTH | Authentication |
| GETIDS | Retrieve Booking IDs |
| GET | Retrieve Booking |
| CREATE | Create Booking |
| PUT | Update Booking |
| PATCH | Partial Update |
| DELETE | Delete Booking |
| E2E | End-to-End Workflow |

Scenario numbering is independent for every module.

Scenario IDs must never be reused.

---

# 7. Scenario Priority

| Priority | Description |
|-----------|-------------|
| Critical | Core functionality |
| High | Important functionality |
| Medium | Secondary functionality |
| Low | Minor functionality |

Priority determines execution order.

Priority is independent from defect severity.

---

# 8. Test Types

Scenarios may belong to one or more testing categories.

Common types include:

- Positive Testing
- Negative Testing
- Boundary Testing
- Contract Testing
- Authentication Testing
- Authorization Testing
- Data Validation
- Integration Testing
- End-to-End Testing
- Exploratory Testing
- Regression Testing

---

# 9. Scenario Template

Every scenario should contain:

| Field | Description |
|---------|-------------|
| Scenario ID | Unique identifier |
| Title | High-level objective |
| Endpoint | API endpoint |
| HTTP Method | Request method |
| Module | Functional area |
| Priority | Execution priority |
| Test Type | Testing category |
| Objective | Behaviour being verified |
| Related Requirements | Requirement IDs |

Example:

| Field | Example |
|---------|---------|
| Scenario ID | TS-PING-001 |
| Title | Verify Health Check endpoint responds successfully |
| Endpoint | GET /ping |
| Priority | High |
| Test Type | Positive |
| Objective | Verify API availability |

---

# 10. Traceability

Every scenario should map to one or more requirements.

```
Requirement
        ↓
Scenario
        ↓
Test Case
        ↓
Execution
```

Example:

```
REQ-PING-001
      ↓
TS-PING-001
      ↓
TC-PING-001
```

This ensures complete test coverage.

---

# 11. Naming Conventions

Scenario titles should:

✅ Start with **Verify**

Examples:

```
Verify API availability

Verify authentication using valid credentials

Verify booking creation with valid data
```

Avoid:

```
Testing login

Health check

Booking test
```

Titles should clearly describe the expected behaviour.

---

# 12. Definition of Done

A Test Scenario is considered complete when:

- Scenario ID assigned
- Objective defined
- Endpoint identified
- Priority assigned
- Test Type assigned
- Requirement linked
- Test Cases created
- Scenario reviewed

---

# 13. Document Maintenance

This document is maintained throughout the project.

Changes should only occur when the testing methodology changes.

Routine sprint work must not modify this document.

Sprint-specific scenarios are maintained separately in:

```
03_Test_Scenarios/
└── API Test Scenarios.md
```

---

## Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Original standard |
| 2.0 | Sprint-based redesign | Introduced sprint methodology and standardized scenario design |