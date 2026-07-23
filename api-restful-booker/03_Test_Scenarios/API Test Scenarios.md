# API Test Scenarios

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Scenarios  
**Version:** 3.1  
**Prepared by:** Filip Jelinek  
**Project Status:** Sprint 2 – Authentication (In Progress)

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Scope](#2-scope)
- [3. Traceability Workflow](#3-traceability-workflow)
- [4. Sprint Overview](#4-sprint-overview)
- [5. Scenario Summary](#5-scenario-summary)
- [6. Sprint 1 – Health Check](#6-sprint-1--health-check)
- [7. Sprint 2 – Authentication](#7-sprint-2--authentication)
- [8. Sprint Progress](#8-sprint-progress)
- [9. Revision History](#9-revision-history)

---

# 1. Purpose

This document defines the high-level API Test Scenarios created for the Restful Booker API Testing Project.

The project follows a sprint-based QA workflow, where each sprint focuses on a specific API module and verifies its functional and non-functional behavior.

Each Test Scenario defines:

- Business objective
- Testing scope
- Validation focus
- Related requirements
- Related Postman requests

Detailed execution steps are documented separately in:

```text
04_Test_Cases/
└── API_Test_Cases.md
```

Test execution results are documented separately in:

```text
06_Test_Execution/
└── API_Test_Execution.md
```

---

# 2. Scope

This document provides high-level functional API Test Scenarios.

Detailed validation, execution results and supporting artefacts are maintained separately in:

- API Test Cases
- API Test Execution
- Postman Collection
- Test Evidence
- Bug Reports

---

# 3. Traceability Workflow

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
Test Evidence
        ↓
Bug Reports
```

Each Test Scenario is traceable to one or more project requirements and one or more Postman requests.

---

# 4. Sprint Overview

| Sprint | Module | Status |
|---------|---------|--------|
| Sprint 1 | Health Check | ✅ Completed |
| Sprint 2 | Authentication | 🚧 In Progress |
| Sprint 3 | Retrieve Booking IDs | ⏳ Planned |
| Sprint 4 | Retrieve Booking by ID | ⏳ Planned |
| Sprint 5 | Create Booking | ⏳ Planned |
| Sprint 6 | Update Booking | ⏳ Planned |
| Sprint 7 | Partial Update Booking | ⏳ Planned |
| Sprint 8 | Delete Booking | ⏳ Planned |
| Sprint 9 | End-to-End Workflow | ⏳ Planned |

---

# 5. Scenario Summary

| Scenario ID | Title | Priority | Type | Sprint | Status |
|-------------|-------|----------|------|--------|--------|
| TS-PING-001 | Verify successful Health Check request | High | Positive | Sprint 1 | ✅ Completed |
| TS-PING-002 | Verify Health Check response contract | High | Contract | Sprint 1 | ✅ Completed |
| TS-PING-003 | Verify unsupported HTTP methods are rejected | Medium | Negative | Sprint 1 | ✅ Completed |
| TS-AUTH-001 | Verify successful authentication using valid credentials | Critical | Positive | Sprint 2 | ✅ Completed |
| TS-AUTH-002 | Verify authentication fails with invalid credentials | Critical | Negative | Sprint 2 | 🚧 In Progress |
| TS-AUTH-003 | Verify required authentication fields | High | Validation | Sprint 2 | 🚧 In Progress |
| TS-AUTH-004 | Verify authentication request data type validation | High | Negative | Sprint 2 | ⏳ Planned |
| TS-AUTH-005 | Verify authentication request boundary values | Medium | Boundary | Sprint 2 | ⏳ Planned |
| TS-AUTH-006 | Verify authentication response contract | High | Contract | Sprint 2 | ⏳ Planned |
| TS-AUTH-007 | Verify authentication request headers | Medium | Header Validation | Sprint 2 | ⏳ Planned |
| TS-AUTH-008 | Verify authentication security behavior | High | Security | Sprint 2 | ⏳ Planned |

# 6. Sprint 1 – Health Check

Health Check testing verifies that the Restful Booker API is available, responds correctly to supported requests, and properly rejects unsupported HTTP methods.

---

## TS-PING-001 – Verify successful Health Check request

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Priority | High |
| Test Type | Positive |
| Related Requirement | REQ-PING-001 |

### Objective

Verify that the Health Check endpoint is available and returns a successful response.

### Validation Focus

- HTTP Status Code
- Response Body
- Content-Type
- Response Time

### Related Postman Request

```text
GET - Health Check
```

---

## TS-PING-002 – Verify Health Check response contract

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | GET |
| Priority | High |
| Test Type | Contract |
| Related Requirement | REQ-PING-001 |

### Objective

Verify that the Health Check response matches the documented API contract.

### Validation Focus

- Response Body
- Response Headers
- Content-Type
- Response Format

### Related Postman Request

```text
GET - Health Check
```

---

## TS-PING-003 – Verify unsupported HTTP methods are rejected

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| HTTP Method | POST / PUT / PATCH / DELETE |
| Priority | Medium |
| Test Type | Negative |
| Related Requirement | REQ-PING-002 |

### Objective

Verify that unsupported HTTP methods are rejected by the API.

### Validation Focus

- POST request
- PUT request
- PATCH request
- DELETE request
- Error response

### Related Postman Requests

```text
POST - Health Check

PUT - Health Check

PATCH - Health Check

DELETE - Health Check
```

---

# 7. Sprint 2 – Authentication

Authentication testing verifies that the API correctly authenticates valid users, rejects invalid authentication attempts, validates request data, and protects sensitive information according to the documented API contract.

---

## TS-AUTH-001 – Verify successful authentication using valid credentials

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | Critical |
| Test Type | Positive |
| Related Requirement | REQ-AUTH-001 |

### Objective

Verify that valid credentials successfully generate an authentication token.

### Validation Focus

- Valid username
- Valid password
- HTTP Status Code
- Authentication token generated
- Response time

### Related Postman Request

```text
POST - Valid Credentials
```

---

## TS-AUTH-002 – Verify authentication fails with invalid credentials

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | Critical |
| Test Type | Negative |
| Related Requirement | REQ-AUTH-002 |

### Objective

Verify that invalid authentication credentials are rejected.

### Validation Focus

- Invalid username
- Invalid password
- Invalid username and password
- No authentication token returned
- Generic error response

### Related Postman Requests

```text
POST - Invalid Username

POST - Invalid Password

POST - Invalid Username and Password
```

---

## TS-AUTH-003 – Verify required authentication fields

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | High |
| Test Type | Validation |
| Related Requirement | REQ-AUTH-003 |

### Objective

Verify that all required authentication fields are validated correctly.

### Validation Focus

- Missing username
- Missing password
- Empty request body

### Related Postman Requests

```text
POST - Missing Username

POST - Missing Password

POST - Empty Body
```
---

## TS-AUTH-004 – Verify authentication request data type validation

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | High |
| Test Type | Negative |
| Related Requirement | REQ-AUTH-003 |

### Objective

Verify that the API correctly validates the data types of authentication request fields.

### Validation Focus

- Number instead of string
- Boolean instead of string
- Array instead of string
- Object instead of string
- Null values

### Related Postman Requests

```text
POST - Invalid Username Data Type

POST - Invalid Password Data Type

POST - Null Credentials
```

---

## TS-AUTH-005 – Verify authentication request boundary values

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | Medium |
| Test Type | Boundary |
| Related Requirement | REQ-AUTH-003 |

### Objective

Verify that authentication fields correctly handle boundary values.

### Validation Focus

- Empty string
- One character
- Maximum supported length
- Very long strings
- Special characters
- Unicode characters
- Diacritic characters

### Related Postman Requests

```text
POST - Boundary Username

POST - Boundary Password

POST - Unicode Credentials
```

---

## TS-AUTH-006 – Verify authentication response contract

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | High |
| Test Type | Contract |
| Related Requirement | REQ-AUTH-004 |

### Objective

Verify that the authentication response matches the documented API contract.

### Validation Focus

- JSON structure
- Authentication token property
- Property data type
- Content-Type
- Response format

### Related Postman Request

```text
POST - Valid Credentials
```

---

## TS-AUTH-007 – Verify authentication request headers

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | Medium |
| Test Type | Header Validation |
| Related Requirement | REQ-AUTH-003 |

### Objective

Verify that the API correctly validates HTTP request headers.

### Validation Focus

- Missing Content-Type header
- Invalid Content-Type header
- Valid application/json header
- Unsupported media type

### Related Postman Requests

```text
POST - Missing Content-Type

POST - Invalid Content-Type
```

---

## TS-AUTH-008 – Verify authentication security behavior

| Field | Value |
|------|-------|
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Priority | High |
| Test Type | Security |
| Related Requirement | REQ-AUTH-002 |

### Objective

Verify that authentication failures do not expose sensitive security information.

### Validation Focus

- No authentication token after failed authentication
- Generic error message
- No username enumeration
- No sensitive information leakage

### Related Postman Requests

```text
POST - Invalid Username

POST - Invalid Password

POST - Invalid Username and Password
```
---

# 8. Sprint Progress

| Sprint | Module | Scenarios | Completed | Status |
|---------|---------|----------:|----------:|--------|
| Sprint 1 | Health Check | 3 | 3 | ✅ Completed |
| Sprint 2 | Authentication | 8 | 1 | 🚧 In Progress |
| Sprint 3 | Retrieve Booking IDs | Planned | 0 | ⏳ Planned |
| Sprint 4 | Retrieve Booking by ID | Planned | 0 | ⏳ Planned |
| Sprint 5 | Create Booking | Planned | 0 | ⏳ Planned |
| Sprint 6 | Update Booking | Planned | 0 | ⏳ Planned |
| Sprint 7 | Partial Update Booking | Planned | 0 | ⏳ Planned |
| Sprint 8 | Delete Booking | Planned | 0 | ⏳ Planned |
| Sprint 9 | End-to-End Workflow | Planned | 0 | ⏳ Planned |

> **Note:** Sprint progress is tracked at the **Test Scenario** level. Individual request execution progress is documented separately in **API_Test_Execution.md**.

---

# 9. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 19 July 2026 | Initial API Test Scenarios document created for Sprint 1 |
| 2.0 | 19 July 2026 | Completed Sprint 1 Health Check scenarios and improved document structure |
| 3.0 | 23 July 2026 | Added Sprint 2 Authentication scenarios |

---

# End of Document