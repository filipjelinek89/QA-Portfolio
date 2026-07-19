# API Test Cases

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Cases  
**Version:** 2.0  
**Prepared by:** Filip Jelinek  
**Project Status:** Sprint 1 – Health Check (Completed)

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Test Case Summary](#3-test-case-summary)
- [4. Health Check Test Cases](#4-health-check-test-cases)
- [5. Sprint Progress](#5-sprint-progress)

---

# 1. Purpose

This document contains detailed API Test Cases created for the Restful Booker API Testing Project.

The project is developed incrementally using a sprint-based approach.

Each Test Case is linked to its corresponding Test Scenario and describes how the API functionality is verified using Postman.

Execution results are documented separately in:

```text
05_Test_Execution/
└── API_Test_Execution.md
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

# 3. Test Case Summary

| Test Case ID | Scenario ID | Title | Priority | Status |
|---------------|-------------|-------|----------|--------|
| TC-PING-001 | TS-PING-001 | Verify successful Health Check request (GET) | High | ✅ Completed |
| TC-PING-002 | TS-PING-002 | Verify Health Check response headers and response body | High | ✅ Completed |
| TC-PING-003 | TS-PING-003 | Verify unsupported HTTP methods are rejected | Medium | ✅ Completed |

---

# 4. Health Check Test Cases

---

## TC-PING-001 – Verify successful Health Check request (GET)

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-001 |
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Test Type | Positive |
| Priority | High |

### Preconditions

- Restful Booker API is available.
- `baseUrl` environment variable is configured.
- Postman environment is selected.

### Test Data

```http
GET {{baseUrl}}/ping
```

### Test Steps

1. Open the **GET - Health Check** request.
2. Verify the HTTP method is **GET**.
3. Send the request.
4. Review the response.
5. Verify the automated Postman assertions.

### Expected Result

- HTTP Status Code = **201 Created**
- Response Body = **Created**
- Content-Type contains **text/plain**
- Response time is below the project threshold.
- All Postman tests pass.

### Related Postman Request

```
GET - Health Check
```

---

## TC-PING-002 – Verify Health Check response headers and response body

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-002 |
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Test Type | Contract |
| Priority | High |

### Preconditions

- API is available.
- GET Health Check request is configured.

### Test Steps

1. Execute the GET request.
2. Verify the HTTP Status Code.
3. Verify the Response Body.
4. Verify the Content-Type header.
5. Verify the response matches the documented API contract.

### Expected Result

- Status Code = **201**
- Response Body = **Created**
- Content-Type contains **text/plain**
- Response format matches the documented API contract.

### Related Postman Request

```
GET - Health Check
```

---

## TC-PING-003 – Verify unsupported HTTP methods are rejected

| Field | Value |
|------|-------|
| Scenario ID | TS-PING-003 |
| Module | Health Check |
| Endpoint | /ping |
| HTTP Methods | POST, PUT, PATCH, DELETE |
| Test Type | Negative |
| Priority | Medium |

### Preconditions

- API is available.
- Negative requests are configured.

### Test Data

Execute:

```text
POST {{baseUrl}}/ping

PUT {{baseUrl}}/ping

PATCH {{baseUrl}}/ping

DELETE {{baseUrl}}/ping
```

### Test Steps

1. Execute each unsupported HTTP method.
2. Observe the server response.
3. Verify that the request is rejected.
4. Record the returned status code and response body.

### Expected Result

- Unsupported HTTP methods are rejected.
- The endpoint does not behave as a successful Health Check request.
- The API returns the expected error response.
- Results are documented in the Test Execution Report.

### Related Postman Requests

```text
POST - Health Check (Negative)

PUT - Health Check (Negative)

PATCH - Health Check (Negative)

DELETE - Health Check (Negative)
```

---

# 5. Sprint Progress

| Sprint | Planned | Completed |
|---------|---------|-----------|
| Sprint 1 | 3 Test Cases | 3 / 3 |

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Sprint 1 Test Cases |
| 2.0 | Sprint 1 completed | Updated traceability, merged performance validation into TC-PING-001, added HTTP Method, Postman mapping and completed Sprint 1 documentation |