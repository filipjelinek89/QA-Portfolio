# API Test Cases

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Cases
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Testing Type:** REST API Testing
**Execution Tool:** Postman
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Test Case Design Approach](#2-test-case-design-approach)
* [3. Test Case ID Convention](#3-test-case-id-convention)
* [4. Test Case Field Definitions](#4-test-case-field-definitions)
* [5. General Preconditions](#5-general-preconditions)
* [6. Common Test Data](#6-common-test-data)
* [7. Test Case Coverage Summary](#7-test-case-coverage-summary)
* [8. Health Check Test Cases](#8-health-check-test-cases)
* [9. Authentication Test Cases](#9-authentication-test-cases)
* [10. Get Booking IDs Test Cases](#10-get-booking-ids-test-cases)
* [11. Get Booking by ID Test Cases](#11-get-booking-by-id-test-cases)
* [12. Create Booking Test Cases](#12-create-booking-test-cases)
* [13. Update Booking Test Cases](#13-update-booking-test-cases)
* [14. Partial Update Booking Test Cases](#14-partial-update-booking-test-cases)
* [15. Delete Booking Test Cases](#15-delete-booking-test-cases)
* [16. End-to-End Workflow Test Cases](#16-end-to-end-workflow-test-cases)
* [17. Test Case Dependency Summary](#17-test-case-dependency-summary)
* [18. Regression Test Candidates](#18-regression-test-candidates)
* [19. Test Execution Preparation](#19-test-execution-preparation)
* [20. Test Case Summary](#20-test-case-summary)

---

# 1. Purpose

The purpose of this document is to define detailed API test cases for the **Restful Booker API Testing Project**.

The test cases are derived from:

* API Requirements Analysis
* Endpoint Inventory
* API Test Scenarios
* Published API documentation
* Identified API dependencies
* CRUD operations
* Authentication requirements
* Request and response contracts
* Requirement gaps
* Positive test conditions
* Negative test conditions
* Boundary test conditions

Each test case defines a specific API test condition that can be implemented and executed using Postman.

The test design follows this traceability model:

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

Test execution status is intentionally excluded from this document.

Actual execution results will be recorded in `API_Test_Execution.md`.

---

# 2. Test Case Design Approach

Test cases are designed using:

* Requirements-based testing
* Positive testing
* Negative testing
* Equivalence partitioning
* Boundary value analysis
* Data type validation
* Authentication testing
* Authorization testing
* Contract testing
* State transition testing
* CRUD testing
* Integration testing
* End-to-end testing
* Error guessing
* Exploratory API testing

The following principle is applied:

```text
One Test Case
      ↓
One Primary Test Condition
```

Where practical, only one significant request variable is changed from the valid baseline.

Example:

```text
Valid Booking Payload
        ↓
Remove firstname only
        ↓
Execute Request
        ↓
Observe API Behaviour
```

This approach improves defect isolation and reproducibility.

---

# 3. Test Case ID Convention

Test cases use the following ID format:

```text
TC-[FUNCTION]-[NUMBER]
```

Examples:

```text
TC-AUTH-001
TC-CREATE-015
TC-PATCH-006
```

## Functional Prefixes

| Prefix      | Functional Area         |
| ----------- | ----------------------- |
| `TC-PING`   | API Health Check        |
| `TC-AUTH`   | Authentication          |
| `TC-GETIDS` | Get Booking IDs         |
| `TC-GET`    | Get Booking by ID       |
| `TC-CREATE` | Create Booking          |
| `TC-PUT`    | Full Booking Update     |
| `TC-PATCH`  | Partial Booking Update  |
| `TC-DELETE` | Delete Booking          |
| `TC-E2E`    | End-to-End API Workflow |

Test case numbering is independent within each functional area.

---

# 4. Test Case Field Definitions

Each detailed test case contains the following fields.

| Field           | Purpose                          |
| --------------- | -------------------------------- |
| Test Case ID    | Unique test identifier           |
| Scenario ID     | Related high-level test scenario |
| Title           | Specific test objective          |
| Endpoint        | API endpoint under test          |
| Method          | HTTP method                      |
| Test Type       | Testing technique or category    |
| Priority        | Test execution priority          |
| Preconditions   | Required state before execution  |
| Test Data       | Input or request variation       |
| Steps           | Test execution procedure         |
| Expected Result | Expected API behaviour           |

## Priority Classification

| Priority | Meaning                                                |
| -------- | ------------------------------------------------------ |
| Critical | Core authentication or CRUD functionality              |
| High     | Important functional or validation behaviour           |
| Medium   | Secondary negative, boundary, or exploratory behaviour |
| Low      | Minor compatibility or low-risk behaviour              |

Priority does not represent defect severity.

---

# 5. General Preconditions

Unless a test case defines different preconditions, the following general conditions apply:

1. Restful Booker API is accessible.
2. Postman is installed and available.
3. The `Restful Booker - QA` Postman environment is selected.
4. `baseUrl` is configured.
5. Requests use the configured environment variable where applicable.
6. Internet connectivity is available.
7. API requests are executed against the public Restful Booker test environment.

## Base URL Variable

```text
{{baseUrl}}
```

## Authentication Variable

```text
{{authToken}}
```

## Booking ID Variable

```text
{{bookingId}}
```

Tests requiring a valid booking should use a dynamically created booking where practical.

Tests requiring authentication should generate a valid token before execution.

---

# 6. Common Test Data

## Valid Authentication Data

```json
{
  "username": "admin",
  "password": "password123"
}
```

## Valid Booking Data

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Valid Full Update Data

```json
{
  "firstname": "FilipUpdated",
  "lastname": "JelinekUpdated",
  "totalprice": 750,
  "depositpaid": false,
  "bookingdates": {
    "checkin": "2026-09-01",
    "checkout": "2026-09-15"
  },
  "additionalneeds": "Late checkout"
}
```

## Valid Partial Update Data

```json
{
  "firstname": "FilipPatched"
}
```

## Invalid Token

```text
invalid-token-12345
```

## Non-existing Booking ID

A large positive booking ID not returned by the API should be selected at execution time.

Example test value:

```text
999999999
```

Because the environment is shared, resource existence must be verified when required.

---

# 7. Test Case Coverage Summary

| Functional Area        | Test Cases |
| ---------------------- | ---------: |
| Health Check           |          4 |
| Authentication         |         20 |
| Get Booking IDs        |         18 |
| Get Booking by ID      |         10 |
| Create Booking         |         39 |
| Update Booking         |         23 |
| Partial Update Booking |         20 |
| Delete Booking         |         12 |
| End-to-End Workflow    |          7 |
| **Total Test Cases**   |    **153** |

The 153 test cases provide detailed coverage of the 86 high-level API test scenarios.

---

# 8. Health Check Test Cases

**Endpoint:** `GET /ping`

| TC ID       | Scenario ID | Test Case                                                 | Type     | Priority |
| ----------- | ----------- | --------------------------------------------------------- | -------- | -------- |
| TC-PING-001 | TS-PING-001 | Verify health-check endpoint with valid GET request       | Positive | High     |
| TC-PING-002 | TS-PING-002 | Verify documented health-check success status             | Contract | High     |
| TC-PING-003 | TS-PING-002 | Verify health-check response metadata                     | Contract | Medium   |
| TC-PING-004 | TS-PING-003 | Verify health-check endpoint with unsupported POST method | Negative | Medium   |

## TC-PING-001 — Verify Health-Check Endpoint with Valid GET Request

**Endpoint:** `/ping`
**Method:** GET
**Priority:** High

**Preconditions:**

* API is accessible.
* `baseUrl` is configured.

**Test Data:**

```text
{{baseUrl}}/ping
```

**Steps:**

1. Create or open the health-check request.
2. Set the HTTP method to GET.
3. Send the request to `{{baseUrl}}/ping`.
4. Review the API response.

**Expected Result:**

* The API responds successfully.
* A server response is returned.
* No authentication is required.

---

## TC-PING-002 — Verify Documented Health-Check Success Status

**Scenario ID:** TS-PING-002
**Method:** GET
**Priority:** High

**Preconditions:**

* API is accessible.

**Steps:**

1. Send `GET {{baseUrl}}/ping`.
2. Review the HTTP status code.

**Expected Result:**

* The API returns the documented HTTP `201 Created` status.

---

## TC-PING-003 — Verify Health-Check Response Metadata

**Scenario ID:** TS-PING-002
**Method:** GET
**Priority:** Medium

**Steps:**

1. Send `GET {{baseUrl}}/ping`.
2. Review response headers.
3. Review response time.

**Expected Result:**

* Response headers are returned.
* The server provides a valid HTTP response.
* Response time is recorded for basic API monitoring.

---

## TC-PING-004 — Verify Health-Check Endpoint with Unsupported POST Method

**Scenario ID:** TS-PING-003
**Method:** POST
**Priority:** Medium

**Steps:**

1. Change the request method to POST.
2. Send the request to `{{baseUrl}}/ping`.
3. Review the response.

**Expected Result:**

* The API does not process the request as a normal GET health check.
* The observed status code and response body are documented.
* No false successful health-check result should be assumed.

---

# 9. Authentication Test Cases

**Endpoint:** `POST /auth`

| TC ID       | Scenario ID | Test Case                                           | Type        | Priority |
| ----------- | ----------- | --------------------------------------------------- | ----------- | -------- |
| TC-AUTH-001 | TS-AUTH-001 | Create token with valid credentials                 | Positive    | Critical |
| TC-AUTH-002 | TS-AUTH-002 | Authenticate with invalid username                  | Negative    | High     |
| TC-AUTH-003 | TS-AUTH-002 | Authenticate with invalid password                  | Negative    | High     |
| TC-AUTH-004 | TS-AUTH-002 | Authenticate with invalid username and password     | Negative    | High     |
| TC-AUTH-005 | TS-AUTH-003 | Authenticate without username                       | Negative    | High     |
| TC-AUTH-006 | TS-AUTH-003 | Authenticate without password                       | Negative    | High     |
| TC-AUTH-007 | TS-AUTH-003 | Authenticate with empty JSON object                 | Negative    | High     |
| TC-AUTH-008 | TS-AUTH-004 | Authenticate with empty username                    | Negative    | High     |
| TC-AUTH-009 | TS-AUTH-004 | Authenticate with empty password                    | Negative    | High     |
| TC-AUTH-010 | TS-AUTH-004 | Authenticate with null username                     | Negative    | High     |
| TC-AUTH-011 | TS-AUTH-004 | Authenticate with null password                     | Negative    | High     |
| TC-AUTH-012 | TS-AUTH-005 | Authenticate with numeric username                  | Negative    | Medium   |
| TC-AUTH-013 | TS-AUTH-005 | Authenticate with boolean password                  | Negative    | Medium   |
| TC-AUTH-014 | TS-AUTH-006 | Authenticate with malformed JSON                    | Negative    | High     |
| TC-AUTH-015 | TS-AUTH-006 | Authenticate with empty request body                | Negative    | High     |
| TC-AUTH-016 | TS-AUTH-007 | Authenticate without Content-Type header            | Negative    | Medium   |
| TC-AUTH-017 | TS-AUTH-007 | Authenticate with unsupported Content-Type          | Negative    | Medium   |
| TC-AUTH-018 | TS-AUTH-008 | Verify successful authentication response structure | Contract    | Critical |
| TC-AUTH-019 | TS-AUTH-008 | Verify token is a non-empty string                  | Contract    | Critical |
| TC-AUTH-020 | TS-AUTH-009 | Verify generated token works on protected endpoint  | Integration | Critical |

## Authentication Test Execution Pattern

For `TC-AUTH-002` through `TC-AUTH-017`:

1. Open `POST {{baseUrl}}/auth`.
2. Configure the specified request variation.
3. Send the request.
4. Record the status code.
5. Record the response body.
6. Verify whether a valid token is returned.

**Primary Expected Result:**

Invalid or incomplete authentication data must not produce a usable valid authentication token.

Exact error behaviour will be recorded because the published API documentation does not define a complete negative-response contract.

## TC-AUTH-001 — Create Token with Valid Credentials

**Test Data:**

```json
{
  "username": "admin",
  "password": "password123"
}
```

**Expected Result:**

* HTTP `200 OK` is returned.
* Response is JSON.
* Response contains `token`.
* `token` is a string.
* Token is not empty.
* Token can be stored as `authToken`.

## TC-AUTH-018 — Verify Successful Authentication Response Structure

**Expected Response Contract:**

```json
{
  "token": "string"
}
```

**Expected Result:**

* Root response is a JSON object.
* `token` property exists.
* `token` uses the expected string data type.

## TC-AUTH-020 — Verify Generated Token Works on Protected Endpoint

**Preconditions:**

* TC-AUTH-001 completed successfully.
* A booking exists.
* `authToken` contains the generated token.
* `bookingId` contains an existing booking ID.

**Steps:**

1. Generate a valid token.
2. Store the token in `authToken`.
3. Send an authenticated PATCH request to the test booking.
4. Review the response.

**Expected Result:**

* The token is accepted.
* The protected operation is not rejected as unauthorized.
* The requested valid update is processed.

---

# 10. Get Booking IDs Test Cases

**Endpoint:** `GET /booking`

| TC ID         | Scenario ID   | Test Case                                              | Type                   | Priority |
| ------------- | ------------- | ------------------------------------------------------ | ---------------------- | -------- |
| TC-GETIDS-001 | TS-GETIDS-001 | Retrieve all booking IDs                               | Positive               | High     |
| TC-GETIDS-002 | TS-GETIDS-002 | Verify booking ID response is an array                 | Contract               | High     |
| TC-GETIDS-003 | TS-GETIDS-002 | Verify each response item contains bookingid           | Contract               | High     |
| TC-GETIDS-004 | TS-GETIDS-002 | Verify bookingid is numeric                            | Contract               | High     |
| TC-GETIDS-005 | TS-GETIDS-003 | Filter bookings by valid firstname                     | Positive               | High     |
| TC-GETIDS-006 | TS-GETIDS-004 | Filter bookings by valid lastname                      | Positive               | High     |
| TC-GETIDS-007 | TS-GETIDS-005 | Filter bookings by valid check-in date                 | Positive               | High     |
| TC-GETIDS-008 | TS-GETIDS-006 | Filter bookings by valid checkout date                 | Positive               | High     |
| TC-GETIDS-009 | TS-GETIDS-007 | Filter bookings by firstname and lastname              | Integration            | High     |
| TC-GETIDS-010 | TS-GETIDS-007 | Filter bookings by check-in and checkout               | Integration            | High     |
| TC-GETIDS-011 | TS-GETIDS-008 | Filter using non-existing firstname                    | Negative               | Medium   |
| TC-GETIDS-012 | TS-GETIDS-008 | Filter using empty firstname                           | Negative               | Medium   |
| TC-GETIDS-013 | TS-GETIDS-008 | Filter using invalid check-in date                     | Negative               | Medium   |
| TC-GETIDS-014 | TS-GETIDS-009 | Filter firstname using different letter case           | Exploratory            | Medium   |
| TC-GETIDS-015 | TS-GETIDS-009 | Filter firstname using leading and trailing whitespace | Exploratory            | Medium   |
| TC-GETIDS-016 | TS-GETIDS-009 | Filter firstname using Unicode characters              | Exploratory            | Medium   |
| TC-GETIDS-017 | TS-GETIDS-009 | Filter firstname using special characters              | Exploratory            | Medium   |
| TC-GETIDS-018 | TS-GETIDS-010 | Send unknown query parameter                           | Negative / Exploratory | Medium   |

## TC-GETIDS-001 — Retrieve All Booking IDs

**Steps:**

1. Send `GET {{baseUrl}}/booking`.
2. Review the response status.
3. Review the response body.

**Expected Result:**

* HTTP `200 OK` is returned.
* Response body is returned.
* Booking IDs are represented using the documented response structure.

## TC-GETIDS-002 to TC-GETIDS-004 — Response Contract

**Expected Contract:**

```json
[
  {
    "bookingid": 1
  }
]
```

**Expected Result:**

* Root response is an array.
* Each returned item is an object.
* Each booking item contains `bookingid`.
* `bookingid` is numeric.

## Filter Validation Preconditions

For reliable positive filter testing:

1. Create a dedicated booking.
2. Use known test values.
3. Store the generated booking ID.

Recommended filter test booking:

```json
{
  "firstname": "FilipAPIFilter",
  "lastname": "JelinekQAFilter",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Filter Test"
}
```

## TC-GETIDS-005 — Filter by Valid Firstname

**Request:**

```text
GET {{baseUrl}}/booking?firstname=FilipAPIFilter
```

**Expected Result:**

* HTTP `200 OK` is returned.
* Response is an array.
* The dynamically created booking ID is included in matching results.

The same verification model applies to valid lastname and date filter tests.

---

# 11. Get Booking by ID Test Cases

**Endpoint:** `GET /booking/{id}`

| TC ID      | Scenario ID | Test Case                                        | Type        | Priority |
| ---------- | ----------- | ------------------------------------------------ | ----------- | -------- |
| TC-GET-001 | TS-GET-001  | Retrieve existing booking by valid ID            | Positive    | Critical |
| TC-GET-002 | TS-GET-002  | Verify booking response required properties      | Contract    | Critical |
| TC-GET-003 | TS-GET-002  | Verify booking response property data types      | Contract    | Critical |
| TC-GET-004 | TS-GET-003  | Verify retrieved booking matches created booking | Integration | Critical |
| TC-GET-005 | TS-GET-004  | Retrieve non-existing booking ID                 | Negative    | High     |
| TC-GET-006 | TS-GET-005  | Retrieve booking ID zero                         | Boundary    | Medium   |
| TC-GET-007 | TS-GET-005  | Retrieve negative booking ID                     | Boundary    | Medium   |
| TC-GET-008 | TS-GET-006  | Retrieve booking using alphabetic ID             | Negative    | Medium   |
| TC-GET-009 | TS-GET-006  | Retrieve booking using special-character ID      | Negative    | Medium   |
| TC-GET-010 | TS-GET-007  | Retrieve booking using very large ID             | Boundary    | Medium   |

## TC-GET-001 — Retrieve Existing Booking by Valid ID

**Preconditions:**

* A booking has been created.
* `bookingId` contains the generated booking ID.

**Request:**

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

**Expected Result:**

* HTTP `200 OK` is returned.
* Booking data is returned.
* The response represents the requested booking.

## TC-GET-002 — Verify Booking Response Required Properties

**Expected Properties:**

```text
firstname
lastname
totalprice
depositpaid
bookingdates
bookingdates.checkin
bookingdates.checkout
```

`additionalneeds` is treated according to the created booking data and documented optional-field model.

## TC-GET-003 — Verify Booking Response Data Types

| Property                | Expected Type |
| ----------------------- | ------------- |
| `firstname`             | String        |
| `lastname`              | String        |
| `totalprice`            | Number        |
| `depositpaid`           | Boolean       |
| `bookingdates`          | Object        |
| `bookingdates.checkin`  | String        |
| `bookingdates.checkout` | String        |

## TC-GET-004 — Verify Retrieved Booking Matches Created Booking

**Expected Result:**

The following retrieved values match the values submitted during booking creation:

* `firstname`
* `lastname`
* `totalprice`
* `depositpaid`
* `bookingdates.checkin`
* `bookingdates.checkout`
* `additionalneeds`, when submitted

---

# 12. Create Booking Test Cases

**Endpoint:** `POST /booking`

| TC ID         | Scenario ID   | Test Case                                      | Type                   | Priority |
| ------------- | ------------- | ---------------------------------------------- | ---------------------- | -------- |
| TC-CREATE-001 | TS-CREATE-001 | Create booking with complete valid payload     | Positive               | Critical |
| TC-CREATE-002 | TS-CREATE-002 | Create booking without additionalneeds         | Positive               | High     |
| TC-CREATE-003 | TS-CREATE-003 | Verify booking creation response structure     | Contract               | Critical |
| TC-CREATE-004 | TS-CREATE-003 | Verify generated bookingid is numeric          | Contract               | Critical |
| TC-CREATE-005 | TS-CREATE-004 | Verify returned booking matches submitted data | Data Validation        | Critical |
| TC-CREATE-006 | TS-CREATE-005 | Create booking without firstname               | Negative               | Critical |
| TC-CREATE-007 | TS-CREATE-005 | Create booking without lastname                | Negative               | Critical |
| TC-CREATE-008 | TS-CREATE-005 | Create booking without totalprice              | Negative               | Critical |
| TC-CREATE-009 | TS-CREATE-005 | Create booking without depositpaid             | Negative               | Critical |
| TC-CREATE-010 | TS-CREATE-005 | Create booking without bookingdates            | Negative               | Critical |
| TC-CREATE-011 | TS-CREATE-006 | Create booking without checkin                 | Negative               | High     |
| TC-CREATE-012 | TS-CREATE-006 | Create booking without checkout                | Negative               | High     |
| TC-CREATE-013 | TS-CREATE-007 | Create booking with null firstname             | Negative               | High     |
| TC-CREATE-014 | TS-CREATE-007 | Create booking with null lastname              | Negative               | High     |
| TC-CREATE-015 | TS-CREATE-007 | Create booking with null totalprice            | Negative               | High     |
| TC-CREATE-016 | TS-CREATE-007 | Create booking with null depositpaid           | Negative               | High     |
| TC-CREATE-017 | TS-CREATE-007 | Create booking with null bookingdates          | Negative               | High     |
| TC-CREATE-018 | TS-CREATE-008 | Create booking with empty firstname            | Negative               | High     |
| TC-CREATE-019 | TS-CREATE-008 | Create booking with empty lastname             | Negative               | High     |
| TC-CREATE-020 | TS-CREATE-008 | Create booking with empty additionalneeds      | Negative / Exploratory | Medium   |
| TC-CREATE-021 | TS-CREATE-009 | Create booking with numeric firstname          | Negative               | High     |
| TC-CREATE-022 | TS-CREATE-009 | Create booking with boolean lastname           | Negative               | High     |
| TC-CREATE-023 | TS-CREATE-009 | Create booking with string totalprice          | Negative               | High     |
| TC-CREATE-024 | TS-CREATE-009 | Create booking with string depositpaid         | Negative               | High     |
| TC-CREATE-025 | TS-CREATE-009 | Create booking with array bookingdates         | Negative               | High     |
| TC-CREATE-026 | TS-CREATE-009 | Create booking with numeric checkin            | Negative               | High     |
| TC-CREATE-027 | TS-CREATE-009 | Create booking with boolean checkout           | Negative               | High     |
| TC-CREATE-028 | TS-CREATE-009 | Create booking with object additionalneeds     | Negative               | Medium   |
| TC-CREATE-029 | TS-CREATE-010 | Create booking with negative totalprice        | Boundary / Exploratory | High     |
| TC-CREATE-030 | TS-CREATE-010 | Create booking with zero totalprice            | Boundary / Exploratory | High     |
| TC-CREATE-031 | TS-CREATE-010 | Create booking with very large totalprice      | Boundary               | Medium   |
| TC-CREATE-032 | TS-CREATE-011 | Create booking with one-character firstname    | Boundary               | Medium   |
| TC-CREATE-033 | TS-CREATE-011 | Create booking with 255-character firstname    | Boundary               | Medium   |
| TC-CREATE-034 | TS-CREATE-011 | Create booking with 256-character firstname    | Boundary               | Medium   |
| TC-CREATE-035 | TS-CREATE-012 | Create booking with invalid date format        | Negative               | High     |
| TC-CREATE-036 | TS-CREATE-013 | Create booking with check-in equal to checkout | Exploratory            | High     |
| TC-CREATE-037 | TS-CREATE-013 | Create booking with checkout before check-in   | Negative / Exploratory | High     |
| TC-CREATE-038 | TS-CREATE-014 | Create booking with unexpected JSON property   | Exploratory            | Medium   |
| TC-CREATE-039 | TS-CREATE-015 | Create booking with malformed JSON             | Negative               | Critical |

## Additional Content-Type Variations

The following request variations are linked to `TS-CREATE-016` and should be implemented as dedicated Postman negative requests if the API behaviour differs materially:

```text
Missing Content-Type
Unsupported Content-Type
```

These variations should receive dedicated TC IDs during execution expansion if separate execution records are required.

## TC-CREATE-001 — Create Booking with Complete Valid Payload

**Request Body:**

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

**Steps:**

1. Open the Create Booking request.
2. Set the method to POST.
3. Set the URL to `{{baseUrl}}/booking`.
4. Set `Content-Type` to `application/json`.
5. Add the valid JSON payload.
6. Send the request.
7. Review the status code.
8. Review the response body.

**Expected Result:**

* HTTP `200 OK` is returned.
* A new booking is created.
* Response contains `bookingid`.
* Response contains `booking`.
* Returned booking data corresponds to submitted data.

## TC-CREATE-003 — Verify Booking Creation Response Structure

**Expected Structure:**

```json
{
  "bookingid": 1,
  "booking": {
    "firstname": "Filip",
    "lastname": "Jelinek",
    "totalprice": 500,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2026-08-01",
      "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast"
  }
}
```

**Expected Result:**

* Root is a JSON object.
* `bookingid` exists.
* `booking` exists.
* `booking` is an object.
* Booking properties use the expected structure.

## Missing Required Property Test Pattern

Applies to `TC-CREATE-006` through `TC-CREATE-012`.

**Steps:**

1. Start with the valid booking payload.
2. Remove only the property specified by the test case.
3. Send `POST {{baseUrl}}/booking`.
4. Record the status code.
5. Record the response body.
6. Verify whether a booking was created.

**Expected Result:**

* The API should not silently create an invalid booking when a documented required property is missing.
* Exact observed behaviour is recorded.
* Unexpected resource creation is investigated.

## Incorrect Data Type Test Pattern

Applies to `TC-CREATE-021` through `TC-CREATE-028`.

**Steps:**

1. Start with the valid booking payload.
2. Change only the target property data type.
3. Send the request.
4. Review the response.
5. Verify whether invalid data is accepted, rejected, or transformed.

**Expected Result:**

* The API should process data according to the documented data model.
* Incorrect data types should not produce misleading successful resource data.
* Actual type coercion or acceptance behaviour is documented.

## Boundary Test Classification

Because the API documentation does not define explicit field-length or numeric boundaries, the following tests are exploratory:

```text
TC-CREATE-029
TC-CREATE-030
TC-CREATE-031
TC-CREATE-032
TC-CREATE-033
TC-CREATE-034
TC-CREATE-036
TC-CREATE-037
```

Acceptance of these values is not automatically classified as a defect.

---

# 13. Update Booking Test Cases

**Endpoint:** `PUT /booking/{id}`

| TC ID      | Scenario ID | Test Case                                            | Type          | Priority |
| ---------- | ----------- | ---------------------------------------------------- | ------------- | -------- |
| TC-PUT-001 | TS-PUT-001  | Update booking with valid token and complete payload | Positive      | Critical |
| TC-PUT-002 | TS-PUT-002  | Update booking using valid Basic authentication      | Positive      | High     |
| TC-PUT-003 | TS-PUT-003  | Verify PUT response structure                        | Contract      | Critical |
| TC-PUT-004 | TS-PUT-003  | Verify PUT response data types                       | Contract      | Critical |
| TC-PUT-005 | TS-PUT-004  | Verify fully updated data persists after GET         | Integration   | Critical |
| TC-PUT-006 | TS-PUT-005  | Update booking without authentication                | Authorization | Critical |
| TC-PUT-007 | TS-PUT-006  | Update booking with invalid token                    | Authorization | Critical |
| TC-PUT-008 | TS-PUT-006  | Update booking with modified valid token             | Authorization | Critical |
| TC-PUT-009 | TS-PUT-007  | Update booking without firstname                     | Negative      | High     |
| TC-PUT-010 | TS-PUT-007  | Update booking without lastname                      | Negative      | High     |
| TC-PUT-011 | TS-PUT-007  | Update booking without totalprice                    | Negative      | High     |
| TC-PUT-012 | TS-PUT-007  | Update booking without depositpaid                   | Negative      | High     |
| TC-PUT-013 | TS-PUT-007  | Update booking without bookingdates                  | Negative      | High     |
| TC-PUT-014 | TS-PUT-008  | Update booking with null firstname                   | Negative      | High     |
| TC-PUT-015 | TS-PUT-008  | Update booking with empty firstname                  | Negative      | High     |
| TC-PUT-016 | TS-PUT-009  | Update booking with numeric firstname                | Negative      | High     |
| TC-PUT-017 | TS-PUT-009  | Update booking with string totalprice                | Negative      | High     |
| TC-PUT-018 | TS-PUT-009  | Update booking with string depositpaid               | Negative      | High     |
| TC-PUT-019 | TS-PUT-010  | Update booking with malformed JSON                   | Negative      | High     |
| TC-PUT-020 | TS-PUT-010  | Update booking with empty request body               | Negative      | High     |
| TC-PUT-021 | TS-PUT-011  | Update non-existing booking ID                       | Negative      | High     |
| TC-PUT-022 | TS-PUT-011  | Update booking using invalid alphabetic ID           | Negative      | Medium   |
| TC-PUT-023 | TS-PUT-012  | Update booking with unsupported Content-Type         | Negative      | Medium   |

## TC-PUT-001 — Update Booking with Valid Token and Complete Payload

**Preconditions:**

* A valid authentication token exists.
* A dedicated booking has been created.
* `authToken` is configured.
* `bookingId` is configured.

**Request:**

```text
PUT {{baseUrl}}/booking/{{bookingId}}
```

**Headers:**

```text
Content-Type: application/json
Cookie: token={{authToken}}
```

**Request Body:**

```json
{
  "firstname": "FilipUpdated",
  "lastname": "JelinekUpdated",
  "totalprice": 750,
  "depositpaid": false,
  "bookingdates": {
    "checkin": "2026-09-01",
    "checkout": "2026-09-15"
  },
  "additionalneeds": "Late checkout"
}
```

**Expected Result:**

* HTTP `200 OK` is returned.
* The booking is updated.
* Response contains the updated booking data.
* Returned values correspond to submitted update data.

## TC-PUT-005 — Verify Fully Updated Data Persists After GET

**Steps:**

1. Execute a successful PUT update.
2. Send `GET /booking/{{bookingId}}`.
3. Compare retrieved values with the PUT request.

**Expected Result:**

* Updated values remain persisted.
* GET returns the values submitted through PUT.

## Authentication Enforcement Pattern

Applies to:

```text
TC-PUT-006
TC-PUT-007
TC-PUT-008
```

**Expected Result:**

* Unauthorized requests must not successfully modify the booking.
* The booking should remain unchanged.
* Authentication rejection behaviour is documented.

## PUT Missing Property Pattern

Applies to:

```text
TC-PUT-009
TC-PUT-010
TC-PUT-011
TC-PUT-012
TC-PUT-013
```

The purpose is to determine whether the API enforces complete-resource semantics for PUT.

Observed behaviour is compared with the documented complete booking payload.

---

# 14. Partial Update Booking Test Cases

**Endpoint:** `PATCH /booking/{id}`

| TC ID        | Scenario ID  | Test Case                                  | Type                   | Priority |
| ------------ | ------------ | ------------------------------------------ | ---------------------- | -------- |
| TC-PATCH-001 | TS-PATCH-001 | Update firstname only                      | Positive               | Critical |
| TC-PATCH-002 | TS-PATCH-001 | Update lastname only                       | Positive               | High     |
| TC-PATCH-003 | TS-PATCH-001 | Update totalprice only                     | Positive               | High     |
| TC-PATCH-004 | TS-PATCH-001 | Update depositpaid only                    | Positive               | High     |
| TC-PATCH-005 | TS-PATCH-001 | Update additionalneeds only                | Positive               | High     |
| TC-PATCH-006 | TS-PATCH-002 | Update multiple booking properties         | Positive               | Critical |
| TC-PATCH-007 | TS-PATCH-003 | Update complete bookingdates object        | Positive               | High     |
| TC-PATCH-008 | TS-PATCH-004 | Verify PATCH response contract             | Contract               | High     |
| TC-PATCH-009 | TS-PATCH-005 | Verify patched values persist after GET    | Integration            | Critical |
| TC-PATCH-010 | TS-PATCH-006 | Verify omitted properties remain unchanged | Data Consistency       | Critical |
| TC-PATCH-011 | TS-PATCH-007 | PATCH booking without authentication       | Authorization          | Critical |
| TC-PATCH-012 | TS-PATCH-008 | PATCH booking with invalid token           | Authorization          | Critical |
| TC-PATCH-013 | TS-PATCH-008 | PATCH booking with modified token          | Authorization          | Critical |
| TC-PATCH-014 | TS-PATCH-009 | PATCH booking with empty JSON object       | Negative / Exploratory | High     |
| TC-PATCH-015 | TS-PATCH-009 | PATCH booking with empty request body      | Negative               | High     |
| TC-PATCH-016 | TS-PATCH-010 | PATCH firstname with null value            | Negative               | High     |
| TC-PATCH-017 | TS-PATCH-011 | PATCH firstname using numeric value        | Negative               | High     |
| TC-PATCH-018 | TS-PATCH-011 | PATCH totalprice using string value        | Negative               | High     |
| TC-PATCH-019 | TS-PATCH-012 | PATCH booking with unexpected property     | Exploratory            | Medium   |
| TC-PATCH-020 | TS-PATCH-013 | PATCH non-existing booking ID              | Negative               | High     |

## TC-PATCH-001 — Update Firstname Only

**Preconditions:**

* Valid authentication token exists.
* Dedicated booking exists.

**Request:**

```text
PATCH {{baseUrl}}/booking/{{bookingId}}
```

**Headers:**

```text
Content-Type: application/json
Cookie: token={{authToken}}
```

**Request Body:**

```json
{
  "firstname": "FilipPatched"
}
```

**Expected Result:**

* HTTP `200 OK` is returned.
* `firstname` is updated to `FilipPatched`.
* Properties not included in the request remain unchanged.

## TC-PATCH-006 — Update Multiple Booking Properties

**Request Body:**

```json
{
  "firstname": "FilipMultiPatch",
  "totalprice": 900,
  "depositpaid": false
}
```

**Expected Result:**

* Submitted properties are updated.
* Unsubmitted properties remain unchanged.
* Response contains the complete updated booking representation.

## TC-PATCH-010 — Verify Omitted Properties Remain Unchanged

**Preconditions:**

Record the original values of:

```text
lastname
totalprice
depositpaid
bookingdates.checkin
bookingdates.checkout
additionalneeds
```

**Steps:**

1. Retrieve the current booking.
2. Record all booking properties.
3. PATCH only `firstname`.
4. Retrieve the booking again.
5. Compare omitted properties.

**Expected Result:**

* `firstname` contains the patched value.
* All properties omitted from the PATCH request retain their previous values.

This is a critical PATCH semantic validation.

## PATCH Authentication Enforcement

For `TC-PATCH-011` through `TC-PATCH-013`:

* The protected operation must not successfully update booking data.
* A subsequent GET request should confirm that the attempted unauthorized change was not persisted.

---

# 15. Delete Booking Test Cases

**Endpoint:** `DELETE /booking/{id}`

| TC ID         | Scenario ID   | Test Case                                         | Type             | Priority |
| ------------- | ------------- | ------------------------------------------------- | ---------------- | -------- |
| TC-DELETE-001 | TS-DELETE-001 | Delete existing booking with valid token          | Positive         | Critical |
| TC-DELETE-002 | TS-DELETE-002 | Delete existing booking with Basic authentication | Positive         | High     |
| TC-DELETE-003 | TS-DELETE-003 | Verify deleted booking is not retrievable         | Integration      | Critical |
| TC-DELETE-004 | TS-DELETE-004 | Delete booking without authentication             | Authorization    | Critical |
| TC-DELETE-005 | TS-DELETE-005 | Delete booking with invalid token                 | Authorization    | Critical |
| TC-DELETE-006 | TS-DELETE-005 | Delete booking with modified token                | Authorization    | Critical |
| TC-DELETE-007 | TS-DELETE-006 | Delete non-existing booking                       | Negative         | High     |
| TC-DELETE-008 | TS-DELETE-007 | Delete the same booking twice                     | State Transition | High     |
| TC-DELETE-009 | TS-DELETE-008 | Delete booking ID zero                            | Boundary         | Medium   |
| TC-DELETE-010 | TS-DELETE-008 | Delete negative booking ID                        | Boundary         | Medium   |
| TC-DELETE-011 | TS-DELETE-008 | Delete booking using alphabetic ID                | Negative         | Medium   |
| TC-DELETE-012 | TS-DELETE-009 | Verify documented DELETE success status           | Contract         | High     |

## TC-DELETE-001 — Delete Existing Booking with Valid Token

**Preconditions:**

* Valid authentication token exists.
* Dedicated booking exists.
* `bookingId` identifies the booking.

**Request:**

```text
DELETE {{baseUrl}}/booking/{{bookingId}}
```

**Header:**

```text
Cookie: token={{authToken}}
```

**Expected Result:**

* The API returns the documented successful deletion response.
* The booking is deleted.

## TC-DELETE-003 — Verify Deleted Booking Is Not Retrievable

**Steps:**

1. Create a booking.
2. Store its booking ID.
3. Delete the booking using valid authentication.
4. Send `GET /booking/{{bookingId}}`.
5. Review the response.

**Expected Result:**

* The deleted booking is no longer returned as an existing booking.
* The API provides a non-successful resource retrieval result.

## TC-DELETE-008 — Delete the Same Booking Twice

**Steps:**

1. Create a dedicated booking.
2. Delete the booking.
3. Confirm the first deletion.
4. Send DELETE again using the same booking ID.
5. Record the second response.

**Expected Result:**

* The second request does not represent another successful deletion of an existing resource.
* The API's non-existing resource behaviour is documented.

## TC-DELETE-012 — Verify Documented DELETE Success Status

**Expected Result:**

The successful deletion returns the documented:

```text
201 Created
```

The unusual status code may be documented as an API design observation but is not automatically classified as an implementation defect when behaviour matches the published API contract.

---

# 16. End-to-End Workflow Test Cases

| TC ID      | Scenario ID | Test Case                                                        | Type             | Priority |
| ---------- | ----------- | ---------------------------------------------------------------- | ---------------- | -------- |
| TC-E2E-001 | TS-E2E-001  | Execute complete authenticated booking CRUD lifecycle            | E2E              | Critical |
| TC-E2E-002 | TS-E2E-002  | Reuse dynamically generated token across protected operations    | Integration      | Critical |
| TC-E2E-003 | TS-E2E-003  | Reuse dynamically generated booking ID across booking operations | Integration      | Critical |
| TC-E2E-004 | TS-E2E-004  | Verify create-to-GET booking data consistency                    | Data Consistency | Critical |
| TC-E2E-005 | TS-E2E-005  | Verify booking state transition through PUT and PATCH            | State Transition | Critical |
| TC-E2E-006 | TS-E2E-006  | Verify final deleted booking state                               | State Transition | Critical |
| TC-E2E-007 | TS-E2E-007  | Execute workflow without hardcoded token or booking ID           | Automation       | Critical |

## TC-E2E-001 — Execute Complete Authenticated Booking CRUD Lifecycle

**Preconditions:**

* API is accessible.
* Postman environment is selected.
* `baseUrl` is configured.

**Workflow:**

```text
1. POST /auth
      ↓
2. Extract authToken
      ↓
3. POST /booking
      ↓
4. Extract bookingId
      ↓
5. GET /booking/{{bookingId}}
      ↓
6. Validate created data
      ↓
7. PUT /booking/{{bookingId}}
      ↓
8. GET /booking/{{bookingId}}
      ↓
9. Validate full update
      ↓
10. PATCH /booking/{{bookingId}}
      ↓
11. GET /booking/{{bookingId}}
      ↓
12. Validate partial update
      ↓
13. DELETE /booking/{{bookingId}}
      ↓
14. GET /booking/{{bookingId}}
      ↓
15. Verify deletion
```

**Expected Result:**

* Authentication token is generated.
* Token is stored dynamically.
* Booking is created.
* Booking ID is stored dynamically.
* Created booking is retrievable.
* Created data is consistent.
* PUT updates the complete booking.
* PUT values persist.
* PATCH updates selected properties.
* Omitted PATCH properties remain unchanged.
* Booking is deleted.
* Deleted booking is no longer retrievable.

## TC-E2E-002 — Reuse Dynamically Generated Token

**Expected Result:**

The same valid `authToken` can authenticate the protected operations used within the workflow:

```text
PUT
PATCH
DELETE
```

subject to the API's active authentication behaviour during the workflow.

## TC-E2E-003 — Reuse Dynamically Generated Booking ID

**Expected Result:**

The `bookingId` extracted from booking creation identifies the same booking across:

```text
GET
PUT
PATCH
DELETE
```

## TC-E2E-004 — Verify Create-to-GET Data Consistency

**Expected Result:**

Data returned by GET corresponds to data submitted during POST booking creation.

## TC-E2E-005 — Verify Booking State Transition Through PUT and PATCH

Expected state sequence:

```text
Created State
      ↓
Full PUT State
      ↓
Partial PATCH State
```

Each state must be validated before moving to the next state.

## TC-E2E-006 — Verify Final Deleted Booking State

Expected state sequence:

```text
Booking Exists
      ↓
DELETE
      ↓
Booking Deleted
      ↓
GET
      ↓
Booking Not Retrievable
```

## TC-E2E-007 — Execute Workflow Without Hardcoded Runtime Identifiers

**Expected Result:**

The workflow executes using:

```text
{{authToken}}
{{bookingId}}
```

Both values are generated and extracted during runtime.

Manual copying of authentication tokens or booking IDs is not required.

---

# 17. Test Case Dependency Summary

## Authentication Dependency

The following test areas require a valid authentication token:

```text
TC-PUT-*
TC-PATCH-*
TC-DELETE-*
TC-E2E-*
```

Primary setup:

```text
TC-AUTH-001
      ↓
Extract token
      ↓
{{authToken}}
```

## Booking Dependency

The following areas require an existing booking:

```text
TC-GET-001 to TC-GET-004
TC-PUT-*
TC-PATCH-*
TC-DELETE-*
TC-E2E-*
```

Primary setup:

```text
TC-CREATE-001
      ↓
Extract bookingid
      ↓
{{bookingId}}
```

## Combined Dependency

Protected booking operations require:

```text
Valid authToken
        +
Existing bookingId
        ↓
Protected API Request
```

## Test Isolation

Destructive tests should use dedicated booking resources.

Examples:

```text
DELETE testing
Unauthorized modification testing
Repeated deletion testing
E2E workflow testing
```

A booking used for one destructive scenario should not be assumed to remain available for another test.

---

# 18. Regression Test Candidates

The following test cases are primary automated regression candidates:

| Test Case     | Regression Purpose           |
| ------------- | ---------------------------- |
| TC-PING-001   | API availability             |
| TC-PING-002   | Health contract              |
| TC-AUTH-001   | Valid authentication         |
| TC-AUTH-018   | Authentication contract      |
| TC-AUTH-019   | Token validation             |
| TC-AUTH-020   | Token usability              |
| TC-GETIDS-001 | Booking list                 |
| TC-GETIDS-002 | List contract                |
| TC-GETIDS-003 | Booking ID property          |
| TC-GET-001    | Booking retrieval            |
| TC-GET-002    | Booking contract             |
| TC-GET-003    | Booking data types           |
| TC-GET-004    | Data consistency             |
| TC-CREATE-001 | Booking creation             |
| TC-CREATE-003 | Creation contract            |
| TC-CREATE-004 | Booking ID validation        |
| TC-CREATE-005 | Request-response consistency |
| TC-PUT-001    | Full update                  |
| TC-PUT-005    | PUT persistence              |
| TC-PUT-006    | PUT authorization            |
| TC-PATCH-001  | Partial update               |
| TC-PATCH-009  | PATCH persistence            |
| TC-PATCH-010  | PATCH preservation           |
| TC-PATCH-011  | PATCH authorization          |
| TC-DELETE-001 | Deletion                     |
| TC-DELETE-003 | Deletion verification        |
| TC-DELETE-004 | DELETE authorization         |
| TC-E2E-001    | Complete CRUD lifecycle      |
| TC-E2E-007    | Dynamic workflow             |

The primary regression collection should prioritize stability and repeatability.

Exploratory boundary tests may remain outside the CI/CD regression workflow.

---

# 19. Test Execution Preparation

Before API test execution begins, the following setup should be completed.

## Postman Environment

Create:

```text
Restful Booker - QA
```

Variables:

| Variable    | Initial Value           | Current Value Purpose        |
| ----------- | ----------------------- | ---------------------------- |
| `baseUrl`   | Restful Booker base URL | API endpoint configuration   |
| `authToken` | Empty                   | Runtime authentication token |
| `bookingId` | Empty                   | Runtime booking ID           |
| `firstname` | `Filip`                 | Reusable test data           |
| `lastname`  | `Jelinek`               | Reusable test data           |

## Postman Collection

Create:

```text
Restful Booker API Testing
```

Folder structure:

```text
Restful Booker API Testing
│
├── 00 - Health Check
├── 01 - Authentication
├── 02 - Booking - GET
├── 03 - Booking - POST
├── 04 - Booking - PUT
├── 05 - Booking - PATCH
├── 06 - Booking - DELETE
├── 07 - Negative Testing
├── 08 - Boundary Testing
└── 09 - E2E Workflows
```

## Execution Approach

Test execution should begin with:

```text
Health Check
      ↓
Authentication
      ↓
Create Booking
      ↓
Get Booking
      ↓
PUT
      ↓
PATCH
      ↓
DELETE
      ↓
Negative Testing
      ↓
Boundary Testing
      ↓
E2E Workflow
```

For each test case:

```text
Execute Request
      ↓
Review Status Code
      ↓
Review Headers
      ↓
Review Response Body
      ↓
Run Assertions
      ↓
Compare Expected vs Actual
      ↓
PASS / FAIL / BLOCKED
      ↓
Create BUG if Required
```

---

# 20. Test Case Summary

The Restful Booker API test design contains **153 detailed API test cases** derived from **86 high-level test scenarios**.

Test coverage includes:

```text
API Health Checking
Authentication
Token Generation
Token Validation
Booking ID Retrieval
Query Parameter Filtering
Booking Retrieval
Booking Creation
Full Booking Update
Partial Booking Update
Booking Deletion
Request Validation
Response Validation
JSON Contract Validation
Data Type Validation
Required Property Validation
Null Value Testing
Empty Value Testing
Malformed JSON Testing
Content-Type Testing
Authentication Enforcement
Authorization Validation
Boundary Value Testing
State Transition Testing
CRUD Testing
Integration Testing
End-to-End Testing
Dynamic Request Chaining
```

The test design follows the project traceability model:

```text
REQ
 ↓
TS
 ↓
TC
 ↓
POSTMAN REQUEST
 ↓
AUTOMATED ASSERTION
 ↓
EXECUTION
 ↓
BUG
```

The 153 test cases are designed to provide both manual API test coverage and a foundation for automated Postman regression testing.

Critical API workflows use dynamically generated values:

```text
POST /auth
      ↓
{{authToken}}

POST /booking
      ↓
{{bookingId}}
```

These values support request chaining across:

```text
GET
PUT
PATCH
DELETE
```

The next project stage is Postman implementation and API test execution.

Actual API behaviour, automated assertion results, execution status, and confirmed defects will be documented during test execution.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
