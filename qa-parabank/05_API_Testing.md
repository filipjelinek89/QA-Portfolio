# API Testing

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Testing Objectives](#2-testing-objectives)
* [3. Tools Used](#3-tools-used)
* [4. API Test Scope](#4-api-test-scope)
* [5. API Test Scenarios](#5-api-test-scenarios)
* [6. Expected Deliverables](#6-expected-deliverables)

---

# 1. Purpose

The purpose of API testing is to validate that the ParaBank application's backend services respond correctly, reliably, and consistently.

Unlike UI testing, API testing verifies the application's business logic directly by sending HTTP requests and validating responses.

---

# 2. Testing Objectives

The objectives of API testing are to:

* Verify successful API communication.
* Validate HTTP response codes.
* Verify response payloads.
* Validate request parameters.
* Verify error handling.
* Confirm API stability.
* Support functional UI testing.

---

# 3. Tools Used

| Tool                   | Purpose                     |
| ---------------------- | --------------------------- |
| Postman                | API requests and validation |
| Google Chrome DevTools | Network inspection          |
| GitHub                 | Documentation               |
| Markdown               | Test documentation          |

---

# 4. API Test Scope

The following API areas are planned for validation:

| Area                 | Status  |
| -------------------- | ------- |
| User Authentication  | Planned |
| Customer Information | Planned |
| Account Details      | Planned |
| Account Overview     | Planned |
| Transaction History  | Planned |
| Fund Transfers       | Planned |
| Bill Payments        | Planned |
| Loan Requests        | Planned |

---

# 5. API Test Scenarios

The following scenarios are planned:

| API-TC | Scenario                           | Status       |
| ------ | ---------------------------------- | ------------ |
| API001 | Verify successful GET request      | Not Executed |
| API002 | Verify successful POST request     | Not Executed |
| API003 | Verify response status code        | Not Executed |
| API004 | Verify response time               | Not Executed |
| API005 | Verify invalid request handling    | Not Executed |
| API006 | Verify authentication requirements | Not Executed |
| API007 | Verify JSON response structure     | Not Executed |
| API008 | Verify invalid parameters          | Not Executed |
| API009 | Verify missing parameters          | Not Executed |
| API010 | Verify server error handling       | Not Executed |

---

# 6. Expected Deliverables

This folder will contain:

* Postman Collection
* Environment File (if required)
* API Test Results
* Request and Response Examples
* Screenshots (if applicable)

---

## Folder Structure

```text
05_API_Testing/
│
├── 05_API_Testing.md
├── ParaBank_Postman_Collection.json
├── ParaBank_Environment.json
└── Screenshots/
```

---

# Notes

API testing will be performed after completion of the manual functional testing phase.

Results and observations will be documented as testing progresses.

---

# Document Version History

| Version | Date       | Author        | Changes         |
| ------- | ---------- | ------------- | --------------- |
| 1.0     | YYYY-MM-DD | Filip Jelinek | Initial version |
