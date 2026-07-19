# API Test Execution Standard

**Project:** Restful Booker API Testing Project

**Document Type:** API Test Execution Standard

**Version:** 2.0

**Prepared by:** Filip Jelinek

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

This document defines the standard for recording API test execution throughout the Restful Booker API Testing Project.

It establishes a consistent approach for documenting execution results, calculating execution metrics and maintaining traceability.

Actual execution records are maintained separately in:

```
API_Test_Execution.md
```

---

# 2. Scope

This standard applies to every executed API test case regardless of sprint.

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
- Performance Checks

---

# 3. Sprint-Based Execution Workflow

Execution is performed incrementally.

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

Each sprint contains its own execution records.

Previously completed execution records remain unchanged unless a test is re-executed.

---

# 4. Execution Status Definitions

The following execution statuses are used.

| Status | Meaning |
|---------|---------|
| ✅ PASS | Actual result matches expected result |
| ❌ FAIL | Actual result differs from expected result |
| ⏸️ BLOCKED | Test cannot be completed because of dependency or environment issue |
| ⬜ NOT EXECUTED | Test has not yet been executed |

---

## PASS

A test case is marked PASS when:

- request executed successfully
- expected behaviour verified
- expected assertions passed

---

## FAIL

A test case is marked FAIL when:

- request executed
- actual result differs from expected result
- behaviour is reproducible

---

## BLOCKED

A test case is BLOCKED when execution cannot continue because of:

- unavailable endpoint
- authentication dependency
- unavailable test data
- environment issue
- execution dependency

---

## NOT EXECUTED

Used before execution begins.

---

# 5. Execution Record Structure

Each execution record should contain:

| Field | Description |
|--------|-------------|
| Test Case ID | Executed test case |
| Scenario ID | Related scenario |
| Status | PASS / FAIL / BLOCKED / NOT EXECUTED |
| Actual Result | Observed behaviour |
| Defect ID | Related bug report (if applicable) |
| Execution Date | Date executed |
| Tester | Person executing the test |

---

# 6. Execution Metrics

The following metrics are calculated after execution.

## Execution Progress

```
Executed Test Cases
-------------------
Total Test Cases
×100
```

---

## Pass Rate

```
Passed Test Cases
-----------------
Executed Test Cases
×100
```

---

## Fail Rate

```
Failed Test Cases
-----------------
Executed Test Cases
×100
```

---

## Blocked Rate

```
Blocked Test Cases
------------------
Total Test Cases
×100
```

---

# 7. Defect Linking

Failed execution records should reference a bug report.

Example

```
TC-CREATE-006
      ↓
BUG-API-001
```

Not every failed test immediately confirms a software defect.

Investigation should be completed before creating a bug report.

---

# 8. Execution Evidence

Execution evidence may include:

- Postman screenshots
- Response body screenshots
- Response headers
- Newman reports
- Collection Runner reports
- CI/CD results

Recommended naming convention:

```
TC-ID_Description.png
```

Example

```
TC-PING-001_Response.png

TC-AUTH-003_InvalidPassword.png
```

---

# 9. Traceability

Every execution record must remain traceable.

```
Requirement
      ↓
Scenario
      ↓
Test Case
      ↓
Execution
      ↓
Bug Report
```

Example

```
REQ-PING-001
      ↓
TS-PING-001
      ↓
TC-PING-001
      ↓
PASS
```

or

```
REQ-CREATE-005
      ↓
TS-CREATE-005
      ↓
TC-CREATE-006
      ↓
FAIL
      ↓
BUG-API-004
```

---

# 10. Definition of Done

A test execution is considered complete when:

- execution status assigned
- actual result recorded
- evidence collected (when required)
- defects linked (if applicable)
- execution reviewed

---

# 11. Document Maintenance

This standard changes only when the execution methodology changes.

Actual execution results are maintained in:

```
API_Test_Execution.md
```

New sprints extend the execution document without modifying this standard.

---

# 12. Revision History

| Version | Description |
|----------|-------------|
| 2.0 | Redesigned execution standard using sprint-based methodology |