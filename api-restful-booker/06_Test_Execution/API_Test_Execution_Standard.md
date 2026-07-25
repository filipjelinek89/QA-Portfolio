# API Test Execution Standard

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Execution Standard  
**Version:** 2.2  
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

Its purpose is to ensure consistent documentation of execution results, execution metrics, testing evidence, automated validation, and complete traceability across all project sprints.

This document defines the execution standard only.

Project-specific execution records are maintained separately in:

```text
06_Test_Execution/
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
- JSON Schema Validation
- Performance Validation
- Newman CLI Regression Execution

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
Automated Assertions
        ↓
Manual Test Execution
        ↓
Evidence Collection
        ↓
Bug Reporting
        ↓
Newman CLI Validation
```

Each sprint maintains its own execution records.

Completed execution records remain unchanged unless a Test Case is re-executed due to requirement changes, bug fixes, or regression testing.

---

# 4. Execution Status Definitions

(No changes required.)

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

Optional fields:

| Field | Description |
|--------|-------------|
| Newman Result | PASS / FAIL (when executed via Newman) |
| Evidence Reference | Screenshot or report filename |

---

# 6. Execution Metrics

(No calculation changes required.)

Additional recommended metric:

```text
Automation Pass Rate

Passed Newman Assertions
------------------------
Executed Newman Assertions
×100
```

---

# 7. Defect Linking

(No changes required.)

---

# 8. Execution Evidence

Evidence may include:

- Postman request screenshots
- Response body screenshots
- Response header screenshots
- Collection Runner results
- Newman HTML reports
- Newman JSON reports
- Newman JUnit reports

Evidence should clearly support the recorded execution result.

---

# 9. Traceability

```text
Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Automated Assertions
      ↓
Test Execution
      ↓
Evidence
      ↓
Bug Report (if applicable)
```

---

# 10. Definition of Done

A Test Execution is considered complete when:

- Execution Status assigned
- Actual Result documented
- Postman assertions executed
- Automated assertions passed (where applicable)
- Execution Evidence captured
- Defects linked (if applicable)
- Newman execution completed (where applicable)
- Execution reviewed

Sprint metrics are updated separately after all Test Cases have been executed.

---

# 11. Document Maintenance

This document defines the project standard for recording API Test Execution.

It should only be modified when the execution methodology or documentation standard changes.

Routine sprint activities must not modify this document.

Project execution records are maintained separately in:

```text
06_Test_Execution/
└── API_Test_Execution.md
```

---

# 12. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 2.0 | Initial version | Sprint-based execution standard |
| 2.1 | Documentation refinement | Improved workflow consistency, traceability, Definition of Done, execution evidence and defect validation guidance |
| 2.2 | July 2026 | Synchronized workflow with automated assertions, JSON Schema validation and Newman CLI execution |