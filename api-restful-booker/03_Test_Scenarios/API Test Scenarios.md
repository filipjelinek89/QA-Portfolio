# API Test Scenarios

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Scenarios  
**Version:** 2.0  
**Prepared by:** Filip Jelinek  
**Project Status:** Sprint 1 Completed

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Scenario Summary](#3-scenario-summary)
- [4. Health Check Test Scenarios](#4-health-check-test-scenarios)
- [5. Sprint Progress](#5-sprint-progress)

---

# 1. Purpose

This document contains the high-level API Test Scenarios executed during the Restful Booker API Testing Project.

The project is developed incrementally using a sprint-based approach.

Each sprint introduces a new API module together with its corresponding test scenarios.

Detailed execution steps are documented separately in:

```
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

# 3. Scenario Summary

| Scenario ID | Title | Priority | Type | Status |
|-------------|-------|----------|------|--------|
| TS-PING-001 | Verify successful Health Check request (GET) | High | Positive | ✅ Completed |
| TS-PING-002 | Verify Health Check response headers and response body | High | Contract | ✅ Completed |
| TS-PING-003 | Verify unsupported HTTP methods are rejected | Medium | Negative | ✅ Completed |

---

# 4. Health Check Test Scenarios

---

## TS-PING-001 – Verify successful Health Check request (GET)

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Priority | High |
| Test Type | Positive |
| Related Requirement | REQ-PING-001 |

### Objective

Verify that the Health Check endpoint is available and responds successfully to a valid GET request.

### Validation Focus

- Endpoint availability
- HTTP Status Code (201 Created)
- Response Time (within the project threshold)

### Related Postman Request

```
GET - Health Check
```

---

## TS-PING-002 – Verify Health Check response headers and response body

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Priority | High |
| Test Type | Contract |
| Related Requirement | REQ-PING-002 |

### Objective

Verify that the Health Check endpoint returns the expected response contract according to the API specification.

### Validation Focus

- Response Body
- Content-Type Header
- Response Format

### Related Postman Request

```
GET - Health Check
```

---

## TS-PING-003 – Verify unsupported HTTP methods are rejected

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | /ping |
| HTTP Method | POST, PUT, PATCH, DELETE |
| Priority | Medium |
| Test Type | Negative |
| Related Requirement | REQ-PING-003 |

### Objective

Verify that unsupported HTTP methods are rejected and do not behave as a valid Health Check request.

### Methods Covered

- POST
- PUT
- PATCH
- DELETE

### Expected Behaviour

Unsupported HTTP methods should be rejected by the API and must not return the successful Health Check response.

### Related Postman Requests

```
POST - Health Check (Negative)

PUT - Health Check (Negative)

PATCH - Health Check (Negative)

DELETE - Health Check (Negative)
```

---

# 5. Sprint Progress

| Sprint | Scenarios | Completed |
|---------|-----------|-----------|
| Sprint 1 | 3 | 3 / 3 |

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Sprint 1 Test Scenarios |
| 2.0 | Sprint 1 completed | Updated scenario structure, improved traceability, added HTTP methods, validation focus, Postman request mapping and completed Sprint 1 status |