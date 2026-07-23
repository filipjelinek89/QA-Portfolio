# API Test Execution

**Project:** Restful Booker API Testing Project  
**Document Type:** API Test Execution  
**Version:** 3.0  
**Prepared by:** Filip Jelinek  
**Project Status:** Sprint 2 – Authentication (In Progress)

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Execution Environment](#3-execution-environment)
- [4. Execution Summary](#4-execution-summary)
- [5. Health Check Test Execution](#5-health-check-test-execution)
- [6. Authentication Test Execution](#6-authentication-test-execution)
- [7. Defect Summary](#7-defect-summary)
- [8. Sprint Progress](#8-sprint-progress)
- [9. Revision History](#9-revision-history)

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
| Sprint 2 | Authentication | ✅ Completed |
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
| Sprint | Sprint 1–2 |
| Module | Health Check, Authentication |
| Execution Date | 19–23 July 2026 |

---

# 4. Execution Summary

| Metric | Value |
|---------|------:|
| Planned Test Cases | 22 |
| Executed Test Cases | 22 |
| Passed | 22 |
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
10_Test_Evidence/
└── Health_Check/
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
10_Test_Evidence/
└── Health_Check/
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

| Method | Status | Response |
|---------|--------|----------|
| POST | 404 Not Found | Not Found |
| PUT | 404 Not Found | Not Found |
| PATCH | 404 Not Found | Not Found |
| DELETE | 404 Not Found | Not Found |

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Health_Check/
    ├── TC-PING-003_POST.png
    ├── TC-PING-003_PUT.png
    ├── TC-PING-003_PATCH.png
    └── TC-PING-003_DELETE.png
```

---

# 6. Authentication Test Execution

| Test Case ID | Status | Actual Result | Defect |
|---------------|--------|---------------|--------|
| TC-AUTH-001 | ✅ PASS | Authentication token successfully generated | — |
| TC-AUTH-002 | ✅ PASS | Invalid username rejected | — |
| TC-AUTH-003 | ✅ PASS | Invalid password rejected | — |
| TC-AUTH-004 | ✅ PASS | Invalid username and password rejected | — |
| TC-AUTH-005 | ✅ PASS | Missing username rejected | — |
| TC-AUTH-006 | ✅ PASS | Missing password rejected | — |
| TC-AUTH-007 | ✅ PASS | Empty request body rejected | — |
| TC-AUTH-008 | ✅ PASS | Username as number rejected | — |
| TC-AUTH-009 | ✅ PASS | Password as number rejected | — |
| TC-AUTH-010 | ✅ PASS | Username as boolean rejected | — |
| TC-AUTH-011 | ✅ PASS | Password as boolean rejected | — |
| TC-AUTH-012 | ✅ PASS | Username as array rejected | — |
| TC-AUTH-013 | ✅ PASS | Password as array rejected | — |
| TC-AUTH-014 | ✅ PASS | Username as object rejected | — |
| TC-AUTH-015 | ✅ PASS | Password as object rejected | — |
| TC-AUTH-016 | ✅ PASS | Null credentials rejected | — |
| TC-AUTH-017 | ✅ PASS | Empty username string rejected | — |
| TC-AUTH-018 | ✅ PASS | Empty password string rejected | — |
| TC-AUTH-019 | ✅ PASS | Single-character username rejected | — |
| TC-AUTH-020 | ✅ PASS | Single-character password rejected | — |
| TC-AUTH-021 | ✅ PASS | Very long username rejected | — |
| TC-AUTH-022 | ✅ PASS | Very long password rejected | — |

---

## TC-AUTH-001 – Verify successful authentication using valid credentials

**Execution Date:** 23 July 2026

**Status:** ✅ PASS

**Actual Result**

- HTTP Status Code = **200 OK**
- Valid authentication token returned
- Content-Type = **application/json**
- Response time within threshold
- Token stored in Postman Environment
- All 7 assertions passed

**Evidence**

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-001_Valid_Credentials_Request_and_Tests.png
```

---

## TC-AUTH-002 – Verify authentication fails with invalid username

**Execution Date:** 23 July 2026

**Status:** ✅ PASS

**Actual Result**

- HTTP Status Code = **200 OK**
- reason = "Bad credentials"
- No token returned
- All 7 assertions passed

**Evidence**

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-002_Invalid_Username_Request_and_Tests.png
```

---

## TC-AUTH-003 – Verify authentication fails with invalid password

**Execution Date:** 23 July 2026

**Status:** ✅ PASS

**Actual Result**

- HTTP Status Code = **200 OK**
- reason = "Bad credentials"
- No token returned
- All 7 assertions passed

**Evidence**

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-003_Invalid_Password_Request_and_Tests.png
```

---

## TC-AUTH-004 – Verify authentication fails with invalid username and password

**Execution Date:** 23 July 2026

**Status:** ✅ PASS

**Actual Result**

- HTTP Status Code = **200 OK**
- reason = "Bad credentials"
- No token returned
- All 7 assertions passed

**Evidence**

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-004_Invalid_Username_and_Password_Request_and_Tests.png
```

---

## TC-AUTH-005 – Verify authentication fails when the username field is missing

**Execution Date:** 23 July 2026

**Status:** ✅ PASS

**Actual Result**

- HTTP Status Code = **200 OK**
- reason = "Bad credentials"
- No token returned
- All 7 assertions passed

**Evidence**

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-005_Missing_Username_Request_and_Tests.png
```

---

## TC-AUTH-006 – Verify authentication fails when the password field is missing

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-006_Missing_Password_Request_and_Tests.png
```

---

## TC-AUTH-007 – Verify authentication fails when an empty request body is submitted

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-007_Empty_Body_Request_and_Tests.png
```
---

## TC-AUTH-008 – Verify authentication fails when the username is provided as a number

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-008_Username_as_Number_Request_and_Tests.png
```
---

## TC-AUTH-009 – Verify authentication fails when the password is provided as a number

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-009_Password_as_Number_Request_and_Tests.png
```
---

## TC-AUTH-010 – Verify authentication fails when the username is provided as a boolean

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-010_Username_as_Boolean_Request_and_Tests.png
```
---

## TC-AUTH-011 – Verify authentication fails when the password is provided as a boolean

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-011_Password_as_Boolean_Request_and_Tests.png
```
---

## TC-AUTH-012 – Verify authentication fails when the username is provided as an array

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-012_Username_as_Array_Request_and_Tests.png
```
---

## TC-AUTH-013 – Verify authentication fails when the password is provided as an array

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-013_Password_as_Array_Request_and_Tests.png
```
---

## TC-AUTH-014 – Verify authentication fails when the username is provided as an object

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-014_Username_as_Object_Request_and_Tests.png
```
---

## TC-AUTH-015 – Verify authentication fails when the password is provided as an object

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-015_Password_as_Object_Request_and_Tests.png
```
---

## TC-AUTH-016 – Verify authentication fails when null values are provided

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-016_Null_Credentials_Request_and_Tests.png
```
---

## TC-AUTH-017 – Verify authentication fails when the username is an empty string

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-017_Username_Empty_String_Request_and_Tests.png
```
---

## TC-AUTH-018 – Verify authentication fails when the password is an empty string

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-018_Password_Empty_String_Request_and_Tests.png
```
---

## TC-AUTH-019 – Verify authentication fails when the username consists of a single character

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-019_Username_One_Character_Request_and_Tests.png
```
---

## TC-AUTH-020 – Verify authentication fails when the password consists of a single character

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-020_Password_One_Character_Request_and_Tests.png
```
---

## TC-AUTH-021 – Verify authentication fails when the username is provided as a very long string

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-021_Username_Very_Long_String_Request_and_Tests.png
```
---

## TC-AUTH-022 – Verify authentication fails when the password is provided as a very long string

### Execution Date

23 July 2026

### Expected Result

- HTTP Status Code = **200 OK**
- Response Body contains the expected authentication error
- Content-Type contains **application/json**
- Response time below the project threshold
- No authentication token is returned
- All Postman assertions pass

### Actual Result

- HTTP Status Code = **200 OK**
- Response Body returned:
  **reason = "Bad credentials"**
- Content-Type = **application/json**
- Response time within the configured threshold
- No authentication token was returned
- All seven Postman assertions passed successfully

### Status

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-022_Password_Very_Long_String_Request_and_Tests.png
```

# 7. Defect Summary

No defects were identified during the executed Health Check and Authentication test cases.

Observed API behaviour matched the expected requirements for all executed scenarios.

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

---

# 8. Sprint Progress


| Sprint | Test Cases | Executed | Status |
|---------|-----------:|---------:|--------|
| Sprint 1 | 3 | 3 | ✅ Completed |
| Sprint 2 | 22 | 22 | ✅ Completed |
| Sprint 3 | Planned | 0 | ⏳ Planned |
| Sprint 4 | Planned | 0 | ⏳ Planned |
| Sprint 5 | Planned | 0 | ⏳ Planned |
| Sprint 6 | Planned | 0 | ⏳ Planned |
| Sprint 7 | Planned | 0 | ⏳ Planned |
| Sprint 8 | Planned | 0 | ⏳ Planned |
| Sprint 9 | Planned | 0 | ⏳ Planned |
---

# 9. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | 19 July 2026 | Initial Sprint 1 execution documentation |
| 2.0 | 19 July 2026 | Completed Sprint 1 Health Check execution |
| 3.0 | 23 July 2026 | Added Authentication execution results (TC-AUTH-001 to TC-AUTH-005), updated execution environment, execution summary, sprint progress and navigation |