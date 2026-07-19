# API Test Execution

**Project:** Restful Booker API Testing Project

**Document Type:** API Test Execution

**Version:** 1.0

**Prepared by:** Filip Jelinek

**Project Status:** Sprint 1 – Health Check

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Execution Summary](#3-execution-summary)
- [4. Health Check Test Execution](#4-health-check-test-execution)
- [5. Defect Summary](#5-defect-summary)
- [6. Sprint Progress](#6-sprint-progress)
- [7. Revision History](#7-revision-history)

---

# 1. Purpose

This document records the execution results of API test cases created for the Restful Booker API Testing Project.

Execution is performed incrementally using a sprint-based approach.

Detailed test case definitions are maintained in:

```
API_Test_Cases.md
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

# 3. Execution Summary

| Metric | Value |
|---------|------:|
| Planned Test Cases | 4 |
| Executed Test Cases | 4 |
| Passed | 4 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |
| Pass Rate | 100% |
| Fail Rate | 0% |

---

# 4. Health Check Test Execution

| Test Case ID | Status | Actual Result | Defect |
|---------------|--------|---------------|--------|
| TC-PING-001 | ✅ PASS | API responded successfully | — |
| TC-PING-002 | ✅ PASS | Response matched expected contract | — |
| TC-PING-003 | ✅ PASS | Unsupported methods handled correctly | — |
| TC-PING-004 | ✅ PASS | Response time acceptable | — |

---

## TC-PING-001 – Verify API Health Check endpoint responds successfully

### Execution Date

19 July 2026

### Expected Result

- HTTP Status Code = 201 Created
- Response Body = Created

### Actual Result

- HTTP Status Code = 201 Created
- Response Body = Created

### Status

✅ PASS

### Evidence

```
10_Test_Evidence/
└── Sprint_01/
    └── TC-PING-001_PASS.png
```

---

## TC-PING-002 – Verify Health Check response contract

### Execution Date

19 July 2026

### Expected Result

- Status Code = 201
- Response Body = Created
- Content-Type present

### Actual Result

- Status Code = 201
- Response Body = Created
- Content-Type = text/plain

### Status

✅ PASS

### Evidence

```
10_Test_Evidence/
└── Sprint_01/
    └── TC-PING-002_PASS.png
```

---

## TC-PING-003 – Verify unsupported HTTP methods

### Execution Date

19 July 2026

### Expected Result

Unsupported methods are not processed as a successful Health Check request.

### Actual Result

POST, PUT, PATCH and DELETE requests did not behave as successful Health Check requests.

Observed responses were recorded during execution.

### Status

✅ PASS

### Evidence

```
10_Test_Evidence/
└── Sprint_01/
    └── TC-PING-003_PASS.png
```

---

## TC-PING-004 – Verify Health Check response performance

### Execution Date

19 July 2026

### Expected Result

Response time is consistent and within an acceptable range.

### Actual Result

Average response time remained below one second during repeated executions.

### Status

✅ PASS

### Evidence

```
10_Test_Evidence/
└── Sprint_01/
    └── TC-PING-004_PASS.png
```

---

# 5. Defect Summary

No defects were identified during Sprint 1 execution.

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

---

# 6. Sprint Progress

| Sprint | Test Cases | Executed | Status |
|---------|-----------:|---------:|--------|
| Sprint 1 | 4 | 4 | ✅ Completed |
| Sprint 2 | Planned | 0 | ⏳ Planned |
| Sprint 3 | Planned | 0 | ⏳ Planned |
| Sprint 4 | Planned | 0 | ⏳ Planned |
| Sprint 5 | Planned | 0 | ⏳ Planned |
| Sprint 6 | Planned | 0 | ⏳ Planned |
| Sprint 7 | Planned | 0 | ⏳ Planned |
| Sprint 8 | Planned | 0 | ⏳ Planned |
| Sprint 9 | Planned | 0 | ⏳ Planned |

---

# 7. Revision History

| Version | Description |
|----------|-------------|
| 1.0 | Initial Sprint 1 execution report |