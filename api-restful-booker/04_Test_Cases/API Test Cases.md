# API Test Cases

**Project:** Restful Booker API Testing Project

**Document Type:** API Test Cases

**Version:** 1.0

**Prepared by:** Filip Jelinek

**Project Status:** Sprint 1 – Health Check

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Test Case Summary](#3-test-case-summary)
- [4. Health Check Test Cases](#4-health-check-test-cases)
- [5. Sprint Progress](#5-sprint-progress)

---

# 1. Purpose

This document contains detailed API test cases created for the Restful Booker API Testing Project.

Test cases are implemented incrementally using a sprint-based approach.

Each test case is linked to a corresponding test scenario and provides detailed execution instructions for manual API testing.

Execution results are documented separately in **API_Test_Execution.md**.

---

# 2. Sprint Overview

| Sprint | Module | Status |
|---------|---------|--------|
| Sprint 1 | Health Check | 🟡 In Progress |
| Sprint 2 | Authentication | ⏳ Planned |
| Sprint 3 | Retrieve Booking IDs | ⏳ Planned |
| Sprint 4 | Retrieve Booking by ID | ⏳ Planned |
| Sprint 5 | Create Booking | ⏳ Planned |
| Sprint 6 | Update Booking | ⏳ Planned |
| Sprint 7 | Partial Update Booking | ⏳ Planned |
| Sprint 8 | Delete Booking | ⏳ Planned |
| Sprint 9 | End-to-End Workflow | ⏳ Planned |

---

# 3. Test Case Summary

| Test Case ID | Scenario ID | Title | Priority | Status |
|---------------|-------------|-------|----------|--------|
| TC-PING-001 | TS-PING-001 | Verify API Health Check endpoint responds successfully | High | ⏳ Planned |
| TC-PING-002 | TS-PING-002 | Verify Health Check response contract | High | ⏳ Planned |
| TC-PING-003 | TS-PING-003 | Verify unsupported HTTP methods | Medium | ⏳ Planned |
| TC-PING-004 | TS-PING-004 | Verify Health Check response performance | Medium | ⏳ Planned |

---

# 4. Health Check Test Cases

---

## TC-PING-001 – Verify API Health Check endpoint responds successfully

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-001 |
| Module | Health Check |
| Endpoint | GET /ping |
| Test Type | Positive |
| Priority | High |

### Preconditions

- Restful Booker API is available.
- `baseUrl` environment variable is configured.
- Postman environment is selected.

### Test Data

```
GET {{baseUrl}}/ping
```

### Test Steps

1. Open the Health Check request.
2. Verify the HTTP method is **GET**.
3. Send the request.
4. Review the response.

### Expected Result

- HTTP Status Code = **201 Created**
- Response Body = **Created**
- API responds successfully.

---

## TC-PING-002 – Verify Health Check response contract

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-002 |
| Module | Health Check |
| Endpoint | GET /ping |
| Test Type | Contract |
| Priority | High |

### Preconditions

- API is available.

### Test Steps

1. Send GET request to `/ping`.
2. Review status code.
3. Review response body.
4. Review response headers.

### Expected Result

- Status code equals **201**
- Response body equals **Created**
- Content-Type header exists
- Server returns valid HTTP response

---

## TC-PING-003 – Verify unsupported HTTP methods

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-003 |
| Module | Health Check |
| Endpoint | /ping |
| Test Type | Negative |
| Priority | Medium |

### Preconditions

- API is available.

### Test Data

Execute:

- POST /ping
- PUT /ping
- PATCH /ping
- DELETE /ping

### Test Steps

1. Change request method.
2. Send request.
3. Record response.
4. Repeat for each unsupported method.

### Expected Result

- API does not process unsupported methods as a successful Health Check request.
- Actual status codes and responses are recorded.

---

## TC-PING-004 – Verify Health Check response performance

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-004 |
| Module | Health Check |
| Endpoint | GET /ping |
| Test Type | Performance |
| Priority | Medium |

### Preconditions

- Stable internet connection.
- API available.

### Test Steps

1. Send GET request.
2. Record response time.
3. Repeat three times.
4. Compare results.

### Expected Result

- Endpoint responds successfully.
- Response time is consistent.
- No abnormal response delays observed.

---

# 5. Sprint Progress

| Sprint | Planned | Completed |
|---------|---------|-----------|
| Sprint 1 | 4 Test Cases | 0 / 4 |

---

## Revision History

| Version | Description |
|----------|-------------|
| 1.0 | Initial Sprint 1 test cases |