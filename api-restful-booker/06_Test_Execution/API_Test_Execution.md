# API Test Execution

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Execution
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Execution Tool:** Postman
**Execution Status:** Not Started

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Execution Scope](#2-execution-scope)
* [3. Execution Environment](#3-execution-environment)
* [4. Execution Status Definitions](#4-execution-status-definitions)
* [5. Test Execution Summary](#5-test-execution-summary)
* [6. Execution Result](#6-execution-result)
* [7. Functional Area Execution Summary](#7-functional-area-execution-summary)
* [8. Health Check Test Execution](#8-health-check-test-execution)
* [9. Authentication Test Execution](#9-authentication-test-execution)
* [10. Get Booking IDs Test Execution](#10-get-booking-ids-test-execution)
* [11. Get Booking by ID Test Execution](#11-get-booking-by-id-test-execution)
* [12. Create Booking Test Execution](#12-create-booking-test-execution)
* [13. Update Booking Test Execution](#13-update-booking-test-execution)
* [14. Partial Update Booking Test Execution](#14-partial-update-booking-test-execution)
* [15. Delete Booking Test Execution](#15-delete-booking-test-execution)
* [16. End-to-End Workflow Test Execution](#16-end-to-end-workflow-test-execution)
* [17. Defect Execution Summary](#17-defect-execution-summary)
* [18. Blocked Test Analysis](#18-blocked-test-analysis)
* [19. Re-test and Regression Execution](#19-re-test-and-regression-execution)
* [20. Execution Evidence](#20-execution-evidence)
* [21. Execution Risks and Limitations](#21-execution-risks-and-limitations)
* [22. Execution Completion Criteria](#22-execution-completion-criteria)
* [23. Test Execution Summary](#23-test-execution-summary)

---

# 1. Purpose

The purpose of this document is to record and track the execution of API test cases defined for the **Restful Booker API Testing Project**.

The document provides a centralized execution record for:

* Test case execution status
* Functional area execution progress
* Passed test cases
* Failed test cases
* Blocked test cases
* Not executed test cases
* Defect linkage
* Re-test execution
* Regression execution
* Execution evidence
* Execution limitations

The execution process follows the project traceability model:

```text
API Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
Postman Request
      ↓
Automated Assertion
      ↓
Execution Result
      ↓
Defect Report
```

Only actual observed test results are recorded in this document.

No test case is classified as PASS, FAIL, or BLOCKED before execution.

---

# 2. Execution Scope

The API test execution scope contains **153 detailed API test cases**.

The execution covers the following functional areas:

```text
Health Check
Authentication
Get Booking IDs
Get Booking by ID
Create Booking
Update Booking
Partial Update Booking
Delete Booking
End-to-End Workflow
```

The execution includes:

* Positive testing
* Negative testing
* Boundary testing
* Contract testing
* Authentication testing
* Authorization testing
* Data validation
* Data type validation
* Request validation
* Response validation
* CRUD testing
* State transition testing
* Integration testing
* End-to-end testing
* Dynamic request chaining

## API Operations in Scope

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/ping`         |
| POST   | `/auth`         |
| GET    | `/booking`      |
| GET    | `/booking/{id}` |
| POST   | `/booking`      |
| PUT    | `/booking/{id}` |
| PATCH  | `/booking/{id}` |
| DELETE | `/booking/{id}` |

---

# 3. Execution Environment

| Attribute           | Value                                  |
| ------------------- | -------------------------------------- |
| API                 | Restful Booker                         |
| API Type            | REST API                               |
| Protocol            | HTTPS                                  |
| Base URL            | `https://restful-booker.herokuapp.com` |
| Primary Data Format | JSON                                   |
| Test Tool           | Postman                                |
| Environment         | Restful Booker - QA                    |
| Execution Type      | Manual and Automated API Testing       |
| Script Language     | JavaScript                             |
| CLI Tool            | Newman - Planned                       |
| CI/CD               | GitHub Actions - Planned               |

## Postman Environment Variables

| Variable    | Purpose                      |
| ----------- | ---------------------------- |
| `baseUrl`   | API base URL                 |
| `authToken` | Runtime authentication token |
| `bookingId` | Runtime booking ID           |
| `firstname` | Reusable booking test data   |
| `lastname`  | Reusable booking test data   |

## Dynamic Execution Values

The following values are generated during execution:

```text
POST /auth
      ↓
{{authToken}}

POST /booking
      ↓
{{bookingId}}
```

Dynamic values are reused by dependent API requests.

---

# 4. Execution Status Definitions

The following execution statuses are used.

| Status       | Symbol | Definition                                                            |
| ------------ | ------ | --------------------------------------------------------------------- |
| PASS         | ✅      | Actual result matches the expected result                             |
| FAIL         | ❌      | Actual result does not match the expected result                      |
| BLOCKED      | ⏸️     | Test cannot be completed because of a dependency or environment issue |
| NOT EXECUTED | ⬜      | Test has not yet been executed                                        |

## PASS Classification

A test case is marked PASS when:

* The request was executed successfully.
* The expected API behaviour was validated.
* Required assertions passed.
* No behaviour contradicting the expected result was observed.

## FAIL Classification

A test case is marked FAIL when:

* The request was executed.
* The actual result differs from the expected result.
* The difference is reproducible or sufficiently evidenced.
* The failure is not caused by incorrect test configuration.

A failed assertion alone does not automatically confirm an API defect.

## BLOCKED Classification

A test case is marked BLOCKED when execution cannot be completed because of:

* Required endpoint unavailable
* Required authentication dependency unavailable
* Required booking resource unavailable
* Public API environment instability
* API environment reset
* Upstream test dependency failure
* Tool or execution environment issue

## NOT EXECUTED Classification

A test case remains NOT EXECUTED until the required API request has been executed and evaluated.

---

# 5. Test Execution Summary

| Metric              | Count |
| ------------------- | ----: |
| Total Test Cases    |   153 |
| Executed Test Cases |     0 |
| Passed              |     0 |
| Failed              |     0 |
| Blocked             |     0 |
| Not Executed        |   153 |

## Current Execution Progress

```text
Executed:      0 / 153
Not Executed: 153 / 153
```

## Execution Completion

```text
0.0%
```

The API test execution has not started.

---

# 6. Execution Result

| Status         |   Count | Percentage |
| -------------- | ------: | ---------: |
| ✅ PASS         |       0 |       0.0% |
| ❌ FAIL         |       0 |       0.0% |
| ⏸️ BLOCKED     |       0 |       0.0% |
| ⬜ NOT EXECUTED |     153 |     100.0% |
| **TOTAL**      | **153** | **100.0%** |

## Execution Metrics

The following formulas are used during execution.

### Execution Progress

```text
Executed Test Cases / Total Test Cases × 100
```

### Pass Rate

```text
Passed Test Cases / Executed Test Cases × 100
```

### Fail Rate

```text
Failed Test Cases / Executed Test Cases × 100
```

### Blocked Rate

```text
Blocked Test Cases / Total Test Cases × 100
```

Pass rate and fail rate are not calculated while the executed test case count is zero.

---

# 7. Functional Area Execution Summary

| Functional Area        |   Total |  Pass |  Fail | Blocked | Not Executed |
| ---------------------- | ------: | ----: | ----: | ------: | -----------: |
| Health Check           |       4 |     0 |     0 |       0 |            4 |
| Authentication         |      20 |     0 |     0 |       0 |           20 |
| Get Booking IDs        |      18 |     0 |     0 |       0 |           18 |
| Get Booking by ID      |      10 |     0 |     0 |       0 |           10 |
| Create Booking         |      39 |     0 |     0 |       0 |           39 |
| Update Booking         |      23 |     0 |     0 |       0 |           23 |
| Partial Update Booking |      20 |     0 |     0 |       0 |           20 |
| Delete Booking         |      12 |     0 |     0 |       0 |           12 |
| End-to-End Workflow    |       7 |     0 |     0 |       0 |            7 |
| **TOTAL**              | **153** | **0** | **0** |   **0** |      **153** |

This table will be updated after each completed functional execution group.

---

# 8. Health Check Test Execution

**Test Case Group:** `TC-PING-*`
**Total Test Cases:** 4

| TC ID       | Test Case                                                 | Status         | Actual Result | Defect ID |
| ----------- | --------------------------------------------------------- | -------------- | ------------- | --------- |
| TC-PING-001 | Verify health-check endpoint with valid GET request       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PING-002 | Verify documented health-check success status             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PING-003 | Verify health-check response metadata                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PING-004 | Verify health-check endpoint with unsupported POST method | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |     4 |

---

# 9. Authentication Test Execution

**Test Case Group:** `TC-AUTH-*`
**Total Test Cases:** 20

| TC ID       | Test Case                                           | Status         | Actual Result | Defect ID |
| ----------- | --------------------------------------------------- | -------------- | ------------- | --------- |
| TC-AUTH-001 | Create token with valid credentials                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-002 | Authenticate with invalid username                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-003 | Authenticate with invalid password                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-004 | Authenticate with invalid username and password     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-005 | Authenticate without username                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-006 | Authenticate without password                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-007 | Authenticate with empty JSON object                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-008 | Authenticate with empty username                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-009 | Authenticate with empty password                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-010 | Authenticate with null username                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-011 | Authenticate with null password                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-012 | Authenticate with numeric username                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-013 | Authenticate with boolean password                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-014 | Authenticate with malformed JSON                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-015 | Authenticate with empty request body                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-016 | Authenticate without Content-Type header            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-017 | Authenticate with unsupported Content-Type          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-018 | Verify successful authentication response structure | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-019 | Verify token is a non-empty string                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-AUTH-020 | Verify generated token works on protected endpoint  | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    20 |

---

# 10. Get Booking IDs Test Execution

**Test Case Group:** `TC-GETIDS-*`
**Total Test Cases:** 18

| TC ID         | Test Case                                              | Status         | Actual Result | Defect ID |
| ------------- | ------------------------------------------------------ | -------------- | ------------- | --------- |
| TC-GETIDS-001 | Retrieve all booking IDs                               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-002 | Verify booking ID response is an array                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-003 | Verify each response item contains bookingid           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-004 | Verify bookingid is numeric                            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-005 | Filter bookings by valid firstname                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-006 | Filter bookings by valid lastname                      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-007 | Filter bookings by valid check-in date                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-008 | Filter bookings by valid checkout date                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-009 | Filter bookings by firstname and lastname              | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-010 | Filter bookings by check-in and checkout               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-011 | Filter using non-existing firstname                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-012 | Filter using empty firstname                           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-013 | Filter using invalid check-in date                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-014 | Filter firstname using different letter case           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-015 | Filter firstname using leading and trailing whitespace | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-016 | Filter firstname using Unicode characters              | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-017 | Filter firstname using special characters              | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GETIDS-018 | Send unknown query parameter                           | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    18 |

---

# 11. Get Booking by ID Test Execution

**Test Case Group:** `TC-GET-*`
**Total Test Cases:** 10

| TC ID      | Test Case                                        | Status         | Actual Result | Defect ID |
| ---------- | ------------------------------------------------ | -------------- | ------------- | --------- |
| TC-GET-001 | Retrieve existing booking by valid ID            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-002 | Verify booking response required properties      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-003 | Verify booking response property data types      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-004 | Verify retrieved booking matches created booking | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-005 | Retrieve non-existing booking ID                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-006 | Retrieve booking ID zero                         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-007 | Retrieve negative booking ID                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-008 | Retrieve booking using alphabetic ID             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-009 | Retrieve booking using special-character ID      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-GET-010 | Retrieve booking using very large ID             | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    10 |

---

# 12. Create Booking Test Execution

**Test Case Group:** `TC-CREATE-*`
**Total Test Cases:** 39

| TC ID         | Test Case                                      | Status         | Actual Result | Defect ID |
| ------------- | ---------------------------------------------- | -------------- | ------------- | --------- |
| TC-CREATE-001 | Create booking with complete valid payload     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-002 | Create booking without additionalneeds         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-003 | Verify booking creation response structure     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-004 | Verify generated bookingid is numeric          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-005 | Verify returned booking matches submitted data | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-006 | Create booking without firstname               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-007 | Create booking without lastname                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-008 | Create booking without totalprice              | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-009 | Create booking without depositpaid             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-010 | Create booking without bookingdates            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-011 | Create booking without checkin                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-012 | Create booking without checkout                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-013 | Create booking with null firstname             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-014 | Create booking with null lastname              | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-015 | Create booking with null totalprice            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-016 | Create booking with null depositpaid           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-017 | Create booking with null bookingdates          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-018 | Create booking with empty firstname            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-019 | Create booking with empty lastname             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-020 | Create booking with empty additionalneeds      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-021 | Create booking with numeric firstname          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-022 | Create booking with boolean lastname           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-023 | Create booking with string totalprice          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-024 | Create booking with string depositpaid         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-025 | Create booking with array bookingdates         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-026 | Create booking with numeric checkin            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-027 | Create booking with boolean checkout           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-028 | Create booking with object additionalneeds     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-029 | Create booking with negative totalprice        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-030 | Create booking with zero totalprice            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-031 | Create booking with very large totalprice      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-032 | Create booking with one-character firstname    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-033 | Create booking with 255-character firstname    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-034 | Create booking with 256-character firstname    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-035 | Create booking with invalid date format        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-036 | Create booking with check-in equal to checkout | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-037 | Create booking with checkout before check-in   | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-038 | Create booking with unexpected JSON property   | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-CREATE-039 | Create booking with malformed JSON             | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    39 |

---

# 13. Update Booking Test Execution

**Test Case Group:** `TC-PUT-*`
**Total Test Cases:** 23

| TC ID      | Test Case                                            | Status         | Actual Result | Defect ID |
| ---------- | ---------------------------------------------------- | -------------- | ------------- | --------- |
| TC-PUT-001 | Update booking with valid token and complete payload | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-002 | Update booking using valid Basic authentication      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-003 | Verify PUT response structure                        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-004 | Verify PUT response data types                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-005 | Verify fully updated data persists after GET         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-006 | Update booking without authentication                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-007 | Update booking with invalid token                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-008 | Update booking with modified valid token             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-009 | Update booking without firstname                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-010 | Update booking without lastname                      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-011 | Update booking without totalprice                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-012 | Update booking without depositpaid                   | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-013 | Update booking without bookingdates                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-014 | Update booking with null firstname                   | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-015 | Update booking with empty firstname                  | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-016 | Update booking with numeric firstname                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-017 | Update booking with string totalprice                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-018 | Update booking with string depositpaid               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-019 | Update booking with malformed JSON                   | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-020 | Update booking with empty request body               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-021 | Update non-existing booking ID                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-022 | Update booking using invalid alphabetic ID           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PUT-023 | Update booking with unsupported Content-Type         | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    23 |

---

# 14. Partial Update Booking Test Execution

**Test Case Group:** `TC-PATCH-*`
**Total Test Cases:** 20

| TC ID        | Test Case                                  | Status         | Actual Result | Defect ID |
| ------------ | ------------------------------------------ | -------------- | ------------- | --------- |
| TC-PATCH-001 | Update firstname only                      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-002 | Update lastname only                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-003 | Update totalprice only                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-004 | Update depositpaid only                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-005 | Update additionalneeds only                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-006 | Update multiple booking properties         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-007 | Update complete bookingdates object        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-008 | Verify PATCH response contract             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-009 | Verify patched values persist after GET    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-010 | Verify omitted properties remain unchanged | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-011 | PATCH booking without authentication       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-012 | PATCH booking with invalid token           | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-013 | PATCH booking with modified token          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-014 | PATCH booking with empty JSON object       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-015 | PATCH booking with empty request body      | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-016 | PATCH firstname with null value            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-017 | PATCH firstname using numeric value        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-018 | PATCH totalprice using string value        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-019 | PATCH booking with unexpected property     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-PATCH-020 | PATCH non-existing booking ID              | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    20 |

---

# 15. Delete Booking Test Execution

**Test Case Group:** `TC-DELETE-*`
**Total Test Cases:** 12

| TC ID         | Test Case                                         | Status         | Actual Result | Defect ID |
| ------------- | ------------------------------------------------- | -------------- | ------------- | --------- |
| TC-DELETE-001 | Delete existing booking with valid token          | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-002 | Delete existing booking with Basic authentication | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-003 | Verify deleted booking is not retrievable         | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-004 | Delete booking without authentication             | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-005 | Delete booking with invalid token                 | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-006 | Delete booking with modified token                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-007 | Delete non-existing booking                       | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-008 | Delete the same booking twice                     | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-009 | Delete booking ID zero                            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-010 | Delete negative booking ID                        | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-011 | Delete booking using alphabetic ID                | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-DELETE-012 | Verify documented DELETE success status           | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |    12 |

---

# 16. End-to-End Workflow Test Execution

**Test Case Group:** `TC-E2E-*`
**Total Test Cases:** 7

| TC ID      | Test Case                                                        | Status         | Actual Result | Defect ID |
| ---------- | ---------------------------------------------------------------- | -------------- | ------------- | --------- |
| TC-E2E-001 | Execute complete authenticated booking CRUD lifecycle            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-002 | Reuse dynamically generated token across protected operations    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-003 | Reuse dynamically generated booking ID across booking operations | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-004 | Verify create-to-GET booking data consistency                    | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-005 | Verify booking state transition through PUT and PATCH            | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-006 | Verify final deleted booking state                               | ⬜ NOT EXECUTED | Not executed  | —         |
| TC-E2E-007 | Execute workflow without hardcoded token or booking ID           | ⬜ NOT EXECUTED | Not executed  | —         |

## Execution Summary

| Status       | Count |
| ------------ | ----: |
| PASS         |     0 |
| FAIL         |     0 |
| BLOCKED      |     0 |
| NOT EXECUTED |     7 |

---

# 17. Defect Execution Summary

No confirmed API defects have been reported because test execution has not started.

| Metric                  | Count |
| ----------------------- | ----: |
| Total Confirmed Defects |     0 |
| Critical Defects        |     0 |
| High Defects            |     0 |
| Medium Defects          |     0 |
| Low Defects             |     0 |

## Defect Linkage Format

When a failed test case identifies a confirmed defect, the execution record will use:

```text
BUG-API-001
BUG-API-002
BUG-API-003
```

Example:

| TC ID         | Status | Defect ID   |
| ------------- | ------ | ----------- |
| TC-CREATE-006 | ❌ FAIL | BUG-API-001 |

A failed test case may remain without a defect ID temporarily while the unexpected behaviour is being investigated.

---

# 18. Blocked Test Analysis

No test cases are currently blocked.

Potential blocking conditions include:

```text
Authentication endpoint unavailable
        ↓
PUT / PATCH / DELETE tests blocked
```

```text
Booking creation unavailable
        ↓
GET / PUT / PATCH / DELETE workflow tests blocked
```

```text
Public API environment unavailable
        ↓
API execution blocked
```

```text
Environment reset during workflow
        ↓
Dependent booking tests may be blocked
```

Blocked tests must document:

* Blocking reason
* Dependency
* Date observed
* Re-execution requirement

A blocked test is not classified as a failed test.

---

# 19. Re-test and Regression Execution

Failed test cases linked to confirmed defects should be re-tested when:

* API behaviour changes
* The test environment is restored
* A suspected environment issue is resolved
* The defect is reported as fixed

## Re-test Flow

```text
FAIL
  ↓
Defect Confirmed
  ↓
BUG-API-XXX
  ↓
Fix / Behaviour Change
  ↓
Re-test
  ↓
PASS or FAIL
```

## Regression Flow

Regression execution should validate that existing API functionality remains operational after relevant changes.

Primary regression candidates are documented in:

```text
04_Test_Cases/API_Test_Cases.md
```

Planned regression execution methods:

```text
Postman Collection Runner
        ↓
Newman CLI
        ↓
GitHub Actions
```

Regression execution results will be added after the automated collection is implemented.

---

# 20. Execution Evidence

Execution evidence may include:

* Postman response screenshots
* Postman test result screenshots
* Collection Runner result screenshots
* Newman CLI reports
* GitHub Actions workflow results
* Response body evidence
* Response header evidence

Evidence should be stored in the project evidence directory.

Recommended structure:

```text
10_Evidence/
│
├── Postman/
├── Newman/
└── CI_CD/
```

## Evidence Naming Convention

Recommended format:

```text
[TC-ID]_[Short_Description].png
```

Examples:

```text
TC-AUTH-001_Valid_Token.png
TC-CREATE-006_Missing_Firstname.png
TC-PATCH-011_Missing_Authentication.png
TC-E2E-001_CRUD_Workflow.png
```

Evidence is primarily required for:

* Failed test cases
* Confirmed defects
* Important workflow validation
* Automated execution results

A screenshot is not required for every successful API request.

---

# 21. Execution Risks and Limitations

## Shared Public Environment

Restful Booker uses a public shared test environment.

Other users may create, update, or delete bookings.

This may affect:

* Booking list results
* Hardcoded booking IDs
* Filter results
* Resource availability

## Periodic Environment Reset

The API periodically resets stored booking data.

A dynamically created booking may become unavailable if the environment resets during a long execution period.

## Negative Response Contract

The API documentation does not define every negative response status or error body.

For some negative tests:

```text
Exact expected error response
        ↓
Not explicitly documented
```

Observed behaviour must be analyzed against the published contract and API data model.

## Boundary Definitions

Explicit limits are not documented for:

* String length
* Maximum total price
* Minimum total price
* Booking ID range

Boundary tests in these areas are exploratory.

Acceptance of an undocumented boundary value is not automatically classified as a defect.

## Public API Performance

Response times may vary because of:

* Shared hosting
* Network conditions
* Public API traffic

Performance observations in this project are informational.

The project is not a formal performance test.

---

# 22. Execution Completion Criteria

API test execution is considered complete when:

* All 153 documented test cases have an execution status.
* No test case remains NOT EXECUTED.
* Blocked test cases contain documented blocking reasons.
* Failed test cases have been investigated.
* Confirmed defects are linked to defect reports.
* Critical API workflows have been executed.
* The CRUD E2E workflow has been executed.
* Dynamic token extraction has been validated.
* Dynamic booking ID extraction has been validated.
* Execution evidence has been collected where required.
* Final execution metrics have been calculated.

The final execution state should satisfy:

```text
PASS
  +
FAIL
  +
BLOCKED
  =
153
```

and:

```text
NOT EXECUTED
=
0
```

---

# 23. Test Execution Summary

The API test execution scope contains **153 detailed test cases** across nine functional areas.

Current execution status:

```text
Total Test Cases:     153
Executed:               0
Passed:                 0
Failed:                 0
Blocked:                0
Not Executed:         153
Execution Progress:   0.0%
```

Test execution has not started.

The execution process will use:

```text
Postman Request
      ↓
HTTP Response
      ↓
JavaScript Assertions
      ↓
Expected vs Actual Result
      ↓
PASS / FAIL / BLOCKED
      ↓
Defect Analysis
```

Test results will be recorded only after actual API execution.

The final execution document will provide:

* Complete test execution metrics
* Functional area execution results
* Pass rate
* Fail rate
* Blocked test analysis
* Defect linkage
* Re-test status
* Regression execution results

The next project stage is the implementation and execution of API test cases in Postman.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** Not Started
