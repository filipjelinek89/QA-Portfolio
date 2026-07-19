# API Test Scenario Standard

**Project:** Restful Booker API Testing Project  
**Document Type:** Standard  
**Version:** 2.1  
**Prepared by:** Filip Jelinek  
**Testing Type:** REST API Testing  
**Purpose:** Defines the standard for creating, maintaining, and reviewing API Test Scenarios throughout the project.

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

This document defines the standard for creating API Test Scenarios used throughout the Restful Booker API Testing Project.

Its purpose is to ensure that every scenario follows a consistent structure, naming convention, level of detail, and traceability.

This document defines the project standard only.

It does **not** contain sprint-specific test scenarios.

Actual scenarios are maintained in:

```text
03_Test_Scenarios/
└── API_Test_Scenarios.md
```

---

# 2. Scope

This standard applies to every sprint completed within the project.

Each sprint introduces one functional API module together with its corresponding documentation:

- API Analysis
- Test Scenarios
- Test Cases
- Postman Collection
- Test Execution
- Bug Reports
- Test Evidence

All sprint documentation must comply with this standard.

---

# 3. Test Scenario Definition

A Test Scenario is a high-level description of **what should be tested**.

It defines a testing objective without describing the detailed execution steps.

Each Test Scenario is expanded into one or more Test Cases.

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
Bug Report
```

One Test Scenario may be covered by one or more Postman requests.

Likewise, a single Postman request may satisfy multiple Test Scenarios when validating different requirements.

---

# 4. Scenario Design Principles

Every Test Scenario should:

- Verify one business or functional objective.
- Have one clear testing purpose.
- Be independent whenever possible.
- Be reusable.
- Avoid implementation details.
- Be understandable without reading the Test Cases.
- Support complete traceability.

Test Scenarios describe **what** is tested.

Test Cases describe **how** it is tested.

---

# 5. Sprint-Based Workflow

Each sprint represents one functional API module.

Example roadmap:

```text
Sprint 1
Health Check

Sprint 2
Authentication

Sprint 3
Retrieve Booking IDs

Sprint 4
Retrieve Booking

Sprint 5
Create Booking
```

Every sprint follows the same lifecycle:

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
Test Execution
        ↓
Evidence Collection
        ↓
Bug Reporting
        ↓
Sprint Completion
```

---

# 6. Scenario ID Convention

Scenario IDs use the following format:

```text
TS-[MODULE]-###
```

Examples:

```text
TS-PING-001
TS-AUTH-001
TS-CREATE-001
```

Module prefixes:

| Prefix | Module |
|----------|-------------------------|
| PING | Health Check |
| AUTH | Authentication |
| GETIDS | Retrieve Booking IDs |
| GET | Retrieve Booking |
| CREATE | Create Booking |
| PUT | Update Booking |
| PATCH | Partial Update |
| DELETE | Delete Booking |
| E2E | End-to-End Workflow |

Scenario numbering is independent for each module.

Scenario IDs must never be reused.

---

# 7. Scenario Priority

| Priority | Description |
|-----------|-------------|
| Critical | Business-critical functionality |
| High | Core functionality |
| Medium | Important supporting functionality |
| Low | Minor functionality |

Priority defines the recommended execution order.

Priority is independent from defect severity.

---

# 8. Test Types

A Test Scenario may belong to one or more testing categories.

Examples include:

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
- Performance Validation

---

# 9. Scenario Template

Every Test Scenario should contain the following information:

| Field | Description |
|---------|-------------|
| Scenario ID | Unique identifier |
| Title | High-level testing objective |
| Module | Functional module |
| Endpoint | API endpoint |
| HTTP Method | Request method |
| Priority | Execution priority |
| Test Type | Testing category |
| Objective | Behaviour being verified |
| Related Requirement(s) | Requirement ID(s) |

Example:

| Field | Example |
|---------|---------|
| Scenario ID | TS-PING-001 |
| Title | Verify successful Health Check request (GET) |
| Module | Health Check |
| Endpoint | GET /ping |
| Priority | High |
| Test Type | Positive |
| Objective | Verify the Health Check endpoint responds successfully to a valid GET request |
| Related Requirement | REQ-PING-001 |

---

# 10. Traceability

Every Test Scenario must map to one or more requirements.

Complete traceability should follow this structure:

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

This structure ensures complete requirement coverage and simplifies maintenance.

---

# 11. Naming Conventions

Scenario titles should always begin with:

**Verify**

Examples:

```text
Verify successful Health Check request (GET)

Verify authentication using valid credentials

Verify booking creation with valid data
```

Avoid generic titles such as:

```text
Testing login

Health Check

Booking Test
```

Titles should clearly describe the behaviour being verified rather than the implementation.

---

# 12. Definition of Done

A Test Scenario is considered complete when:

- Scenario ID assigned
- Title defined
- Objective documented
- Module identified
- Endpoint specified
- HTTP Method specified
- Priority assigned
- Test Type assigned
- Related Requirement linked
- Test Cases created
- Postman Request implemented
- Execution completed
- Evidence captured
- Scenario reviewed

---

# 13. Document Maintenance

This document defines the project standard and should change only when the testing methodology or documentation standard evolves.

Routine sprint activities must **not** modify this document.

Sprint-specific Test Scenarios are maintained separately:

```text
03_Test_Scenarios/
└── API_Test_Scenarios.md
```

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Original standard |
| 2.0 | Sprint methodology | Introduced sprint-based organization |
| 2.1 | Documentation refinement | Improved traceability, workflow consistency, Definition of Done, and scenario structure |