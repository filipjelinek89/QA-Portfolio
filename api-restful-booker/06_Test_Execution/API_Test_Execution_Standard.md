# API Test Execution Standard

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Execution Standard  
**Version:** 2.1  
**Prepared by:** Filip Jelinek  
**Testing Type:** REST API Testing

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Scope](#2-scope)
- [3. Sprint-Based Execution Workflow](#3-sprint-based-execution-workflow)
- [4. Execution Status Definitions](#4-execution-status-definitions)
- [5. Execution Record Structure](#5-execution-record-structure)
- [6. Execution Metrics](#6-execution-metrics)
- [7. Defect Linking](#7-defect-linking)
- [8. Execution Evidence](#8-execution-evidence)
- [9. Traceability](#9-traceability)
- [10. Definition of Done](#10-definition-of-done)
- [11. Document Maintenance](#11-document-maintenance)
- [12. Revision History](#12-revision-history)

---

# 1. Purpose

This document defines the project standard for recording API Test Execution throughout the Restful Booker API Testing Project.

Its purpose is to ensure consistent documentation of execution results, execution metrics, testing evidence, and complete traceability across all project sprints.

This document defines the execution standard only.

Project-specific execution records are maintained separately in:

```text
05_Test_Execution/
└── API_Test_Execution.md
```

---

# 2. Scope

This standard applies to every executed API Test Case within the project.

Execution may include:

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

# 3. Sprint-Based Execution Workflow

Test execution is performed incrementally throughout the project.

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
Test Execution
        ↓
Evidence Collection
        ↓
Bug Reporting
```

Each sprint maintains its own execution records.

Completed execution records remain unchanged unless a Test Case is re-executed due to requirement changes, bug fixes, or regression testing.

---

# 4. Execution Status Definitions

The following execution statuses are used throughout the project.

| Status | Meaning |
|---------|---------|
| ✅ PASS | Actual result matches the expected result |
| ❌ FAIL | Actual result differs from the expected result |
| ⏸️ BLOCKED | Test execution cannot continue due to a dependency or environment issue |
| ⬜ NOT EXECUTED | Test Case has not yet been executed |

---

## ✅ PASS

A Test Case is marked **PASS** when:

- The request executes successfully.
- Expected behaviour is verified.
- All relevant Postman assertions pass.
- Actual Result matches the Expected Result.

---

## ❌ FAIL

A Test Case is marked **FAIL** when:

- The request executes.
- Actual behaviour differs from the Expected Result.
- The behaviour is reproducible.

A FAIL status does **not automatically indicate a software defect**. Requirements, documentation, and the test implementation should be verified before creating a Bug Report.

---

## ⏸️ BLOCKED

A Test Case is marked **BLOCKED** when execution cannot continue because of:

- Endpoint unavailable
- Authentication dependency
- Missing test data
- Environment issue
- External dependency
- Service outage

---

## ⬜ NOT EXECUTED

Used before execution begins or when execution has been intentionally postponed.

---

# 5. Execution Record Structure

Every execution record should contain the following information.

| Field | Description |
|--------|-------------|
| Test Case ID | Executed Test Case |
| Related Scenario | Associated Test Scenario |
| Status | PASS / FAIL / BLOCKED / NOT EXECUTED |
| Actual Result | Observed API behaviour |
| Defect ID | Related Bug Report (if applicable) |
| Execution Date | Date of execution |
| Tester | Person executing the test |

---

# 6. Execution Metrics

Execution metrics are calculated after each sprint.

## Execution Progress

```text
Executed Test Cases
-------------------
Total Test Cases
×100
```

---

## Pass Rate

```text
Passed Test Cases
-----------------
Executed Test Cases
×100
```

---

## Fail Rate

```text
Failed Test Cases
-----------------
Executed Test Cases
×100
```

---

## Blocked Rate

```text
Blocked Test Cases
------------------
Total Test Cases
×100
```

Execution metrics provide an overview of sprint quality and testing progress.

---

# 7. Defect Linking

Failed execution records should reference a related Bug Report whenever appropriate.

Example:

```text
TC-CREATE-006
        ↓
BUG-API-001
```

Before reporting a software defect, the tester should verify:

- Requirements
- API documentation
- Expected behaviour
- Test implementation

Only confirmed issues should result in a Bug Report.

---

# 8. Execution Evidence

Execution evidence provides proof that testing was completed.

Evidence may include:

- Postman request screenshots
- Response body screenshots
- Response header screenshots
- Collection Runner results
- Newman reports
- CI/CD execution reports

Recommended naming convention:

```text
TC-ID_Description.png
```

Examples:

```text
TC-PING-001_Response.png

TC-PING-001_PostmanTests.png

TC-AUTH-003_InvalidPassword.png
```

Evidence should clearly support the recorded execution result.

---

# 9. Traceability

Every execution record should remain fully traceable.

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

Example (PASS):

```text
REQ-PING-001
      ↓
TS-PING-001
      ↓
TC-PING-001
      ↓
GET - Health Check
      ↓
PASS
```

Example (FAIL):

```text
REQ-CREATE-005
      ↓
TS-CREATE-005
      ↓
TC-CREATE-006
      ↓
POST - Create Booking
      ↓
FAIL
      ↓
BUG-API-004
```

Complete traceability simplifies maintenance, defect investigation, and regression testing.

---

# 10. Definition of Done

A Test Execution is considered complete when:

- Execution Status assigned
- Actual Result documented
- Postman assertions executed
- Execution Evidence captured
- Defects linked (if applicable)
- Execution reviewed

Sprint metrics are updated separately after all Test Cases have been executed.

---

# 11. Document Maintenance

This document defines the project standard for recording API Test Execution.

It should only be modified when the execution methodology or documentation standard changes.

Routine sprint activities must not modify this document.

Project execution records are maintained separately in:

```text
05_Test_Execution/
└── API_Test_Execution.md
```

---

# 12. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 2.0 | Initial version | Sprint-based execution standard |
| 2.1 | Documentation refinement | Improved workflow consistency, traceability, Definition of Done, execution evidence, and defect validation guidance |