# API Test Execution

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Execution  
**Version:** 2.0  
**Prepared by:** Filip Jelinek  
**Project Status:** Sprint 1 – Health Check (Completed)

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Execution Environment](#3-execution-environment)
- [4. Execution Summary](#4-execution-summary)
- [5. Health Check Test Execution](#5-health-check-test-execution)
- [6. Defect Summary](#6-defect-summary)
- [7. Sprint Progress](#7-sprint-progress)
- [8. Revision History](#8-revision-history)

---

# 1. Purpose

This document records the execution results of API Test Cases created for the Restful Booker API Testing Project.

The project is executed incrementally using a sprint-based approach.

Detailed Test Cases are maintained separately in:

```text
04_Test_Cases/
└── API_Test_Cases.md
```

---

# 2. Sprint Overview

| Sprint | Module | Status |
|---------|---------|--------|
| Sprint 1 | Health Check | ✅ Completed |
| Sprint 2 | Authentication | ⏳ Planned |
| Sprint 3 | Retrieve Booking IDs | ⏳ Planned |
| Sprint 4 | Retrieve Booking by ID | ⏳ Planned |
| Sprint 5 | Create Booking | ⏳ Planned |
| Sprint 6 | Update Booking | ⏳ Planned |
| Sprint 7 | Partial Update Booking | ⏳ Planned |
| Sprint 8 | Delete Booking | ⏳ Planned |
| Sprint 9 | End-to-End Workflow | ⏳ Planned |

---

# 3. Execution Environment

| Item | Value |
|------|-------|
| Tester | Filip Jelinek |
| Tool | Postman |
| Environment | Restful Booker Demo API |
| Sprint | Sprint 1 |
| Module | Health Check |
| Execution Date | 19 July 2026 |

---

# 4. Execution Summary

| Metric | Value |
|---------|------:|
| Planned Test Cases | 3 |
| Executed Test Cases | 3 |
| Passed | 3 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |
| Pass Rate | 100% |
| Fail Rate | 0% |
| Blocked Rate | 0% |

---

# 5. Health Check Test Execution

| Test Case ID | Status | Actual Result | Defect |
|---------------|--------|---------------|--------|
| TC-PING-001 | ✅ PASS | Health Check request executed successfully | — |
| TC-PING-002 | ✅ PASS | Response contract matched expected values | — |
| TC-PING-003 | ✅ PASS | Unsupported HTTP methods rejected | — |

---

## TC-PING-001 – Verify successful Health Check request (GET)

### Execution Date

19 July 2026

### Expected Result

- HTTP Status Code = **201 Created**
- Response Body = **Created**
- Content-Type contains **text/plain**
- Response time below the project threshold
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **201 Created**
- Response Body = **Created**
- Content-Type = **text/plain**
- Response time within the configured threshold
- All Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
05_Test_Execution/
└── Evidence/
    ├── TC-PING-001_Request.png
    └── TC-PING-001_Tests.png
```

---

## TC-PING-002 – Verify Health Check response headers and response body

### Execution Date

19 July 2026

### Expected Result

- Status Code = **201**
- Response Body = **Created**
- Content-Type = **text/plain**
- Response matches the documented API contract

### Actual Result

- Status Code = **201**
- Response Body = **Created**
- Content-Type = **text/plain**
- Response contract verified successfully

### Status

✅ PASS

### Evidence

```text
05_Test_Execution/
└── Evidence/
    └── TC-PING-002_Contract.png
```

---

## TC-PING-003 – Verify unsupported HTTP methods are rejected

### Execution Date

19 July 2026

### Expected Result

Unsupported HTTP methods should be rejected and must not behave as a successful Health Check request.

### Actual Result

The API rejected unsupported HTTP methods.

Observed responses:

| Method | Status Code | Response |
|---------|-------------|----------|
| POST | 404 Not Found | Not Found |
| PUT | 404 Not Found | Not Found |
| PATCH | 404 Not Found | Not Found |
| DELETE | 404 Not Found | Not Found |

The observed behaviour was consistent across all unsupported methods.

### Status

✅ PASS

### Evidence

```text
05_Test_Execution/
└── Evidence/
    ├── TC-PING-003_POST.png
    ├── TC-PING-003_PUT.png
    ├── TC-PING-003_PATCH.png
    └── TC-PING-003_DELETE.png
```

---

# 6. Defect Summary

No defects were identified during Sprint 1 execution.

Observed API behaviour matched the expected requirements for all executed Test Cases.

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

---

# 7. Sprint Progress

| Sprint | Test Cases | Executed | Status |
|---------|-----------:|---------:|--------|
| Sprint 1 | 3 | 3 | ✅ Completed |
| Sprint 2 | Planned | 0 | ⏳ Planned |
| Sprint 3 | Planned | 0 | ⏳ Planned |
| Sprint 4 | Planned | 0 | ⏳ Planned |
| Sprint 5 | Planned | 0 | ⏳ Planned |
| Sprint 6 | Planned | 0 | ⏳ Planned |
| Sprint 7 | Planned | 0 | ⏳ Planned |
| Sprint 8 | Planned | 0 | ⏳ Planned |
| Sprint 9 | Planned | 0 | ⏳ Planned |

---

# 8. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Sprint 1 execution documentation |
| 2.0 | Sprint 1 completed | Updated execution summary, merged performance validation into TC-PING-001, documented actual negative test results, added execution environment and improved evidence structure |