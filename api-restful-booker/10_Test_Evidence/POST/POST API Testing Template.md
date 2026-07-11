# POST API Testing Template

**Project:** Restful Booker API Testing Project
**Document Type:** POST API Testing Template
**Version:** 1.0
**Prepared by:** Filip Jelinek
**HTTP Method:** POST
**Test Tool:** Postman
**Status:** Template

---

# In-page Navigation

* [1. POST Test Identification](#1-post-test-identification)
* [2. Purpose](#2-purpose)
* [3. POST Method Overview](#3-post-method-overview)
* [4. POST Testing Scope](#4-post-testing-scope)
* [5. POST Endpoints](#5-post-endpoints)
* [6. Test Traceability](#6-test-traceability)
* [7. Test Environment](#7-test-environment)
* [8. Preconditions](#8-preconditions)
* [9. Baseline Test Data](#9-baseline-test-data)
* [10. Request Configuration](#10-request-configuration)
* [11. Positive Resource Creation Testing](#11-positive-resource-creation-testing)
* [12. Creation Response Validation](#12-creation-response-validation)
* [13. Booking ID Validation](#13-booking-id-validation)
* [14. Dynamic Booking ID Extraction](#14-dynamic-booking-id-extraction)
* [15. Request-Response Data Comparison](#15-request-response-data-comparison)
* [16. Resource Persistence Verification](#16-resource-persistence-verification)
* [17. Required Field Testing](#17-required-field-testing)
* [18. Missing Field Testing](#18-missing-field-testing)
* [19. Empty Value Testing](#19-empty-value-testing)
* [20. Null Value Testing](#20-null-value-testing)
* [21. Invalid Data Type Testing](#21-invalid-data-type-testing)
* [22. Numeric Field Testing](#22-numeric-field-testing)
* [23. Boolean Field Testing](#23-boolean-field-testing)
* [24. Date Field Testing](#24-date-field-testing)
* [25. Nested Object Testing](#25-nested-object-testing)
* [26. Additional Needs Testing](#26-additional-needs-testing)
* [27. Extra Property Testing](#27-extra-property-testing)
* [28. Duplicate POST Testing](#28-duplicate-post-testing)
* [29. Malformed JSON Testing](#29-malformed-json-testing)
* [30. Empty Request Body Testing](#30-empty-request-body-testing)
* [31. Content-Type Testing](#31-content-type-testing)
* [32. Special Character Testing](#32-special-character-testing)
* [33. Boundary-Oriented Input Testing](#33-boundary-oriented-input-testing)
* [34. Response Status Validation](#34-response-status-validation)
* [35. Response Header Validation](#35-response-header-validation)
* [36. Response Body Validation](#36-response-body-validation)
* [37. JSON Structure Validation](#37-json-structure-validation)
* [38. JSON Schema Validation](#38-json-schema-validation)
* [39. Data Type Validation](#39-data-type-validation)
* [40. Postman POST Assertions](#40-postman-post-assertions)
* [41. POST Execution Result](#41-post-execution-result)
* [42. POST Defect Analysis](#42-post-defect-analysis)
* [43. Evidence](#43-evidence)
* [44. POST Testing Limitations](#44-post-testing-limitations)
* [45. Maintenance](#45-maintenance)
* [46. POST Testing Summary](#46-post-testing-summary)

---

# 1. POST Test Identification

| Field            | Value                                       |
| ---------------- | ------------------------------------------- |
| POST Test ID     | `POST-TEST-XXX`                             |
| Test Case ID     | `TC-POST-XXX`                               |
| Test Scenario ID | `TS-POST-XXX`                               |
| Requirement ID   | `REQ-POST-XXX`                              |
| HTTP Method      | POST                                        |
| Endpoint         | `[Endpoint]`                                |
| Test Type        | Functional / Contract / Negative / Boundary |
| Test Tool        | Postman                                     |
| Status           | Not Executed / PASS / FAIL / BLOCKED        |
| Prepared By      | Filip Jelinek                               |

## POST Test Naming Convention

POST test records use:

```text
POST-TEST-[NUMBER]
```

Examples:

```text
POST-TEST-001
POST-TEST-002
POST-TEST-015
```

POST-related test cases use:

```text
TC-POST-[NUMBER]
```

Examples:

```text
TC-POST-001
TC-POST-002
TC-POST-025
```

---

# 2. Purpose

The purpose of this document is to define and record testing performed against REST API endpoints using the HTTP `POST` method.

POST testing validates whether the API correctly processes submitted request data and creates the expected server-side resource.

The testing process validates:

* Resource creation
* Request body processing
* HTTP status behaviour
* Response headers
* Response body structure
* Generated resource identifiers
* Required property handling
* Missing property handling
* Empty values
* Null values
* Invalid JSON data types
* Numeric value handling
* Boolean value handling
* Date handling
* Nested object handling
* Optional property behaviour
* Additional property behaviour
* Duplicate request behaviour
* Malformed JSON handling
* Empty request body handling
* Content-Type handling
* Special characters
* Boundary-oriented input behaviour
* JSON Schema compliance
* Request-response consistency
* Resource persistence

The POST testing workflow follows:

```text
API Requirement
      ↓
POST Test Scenario
      ↓
POST Test Case
      ↓
Postman POST Request
      ↓
Request Body Processing
      ↓
API Response
      ↓
Contract Validation
      ↓
Resource ID Extraction
      ↓
GET Resource
      ↓
Persistence Validation
      ↓
PASS / FAIL
```

A successful HTTP response alone does not prove that resource creation was successful.

The complete creation validation model is:

```text
POST Response Validation
          +
Generated ID Validation
          +
GET Persistence Verification
```

---

# 3. POST Method Overview

The HTTP `POST` method is commonly used to submit data to an API and create a new resource.

Conceptual flow:

```text
API Client
    ↓
POST Request
    ↓
Request Body
    ↓
API Validation
    ↓
Resource Creation
    ↓
Generated Resource ID
    ↓
HTTP Response
```

Unlike GET, POST is not treated as a safe or idempotent method.

## Resource Creation

Example:

```text
POST /booking
      ↓
Booking Data
      ↓
Create Booking
      ↓
Generate bookingid
```

## Non-Idempotent Behaviour

Repeated identical POST requests may create multiple resources.

Example:

```text
POST /booking
      ↓
bookingid: 101

POST /booking
      ↓
bookingid: 102
```

The behaviour must be verified against the API contract.

Duplicate resource creation is not automatically a defect for a POST endpoint.

---

# 4. POST Testing Scope

POST testing includes:

* Valid booking creation
* Booking creation response
* Generated booking ID
* Dynamic booking ID extraction
* Request-response data comparison
* Persistence verification
* Missing firstname
* Missing lastname
* Missing totalprice
* Missing depositpaid
* Missing bookingdates
* Missing checkin
* Missing checkout
* Empty string values
* Null values
* Invalid data types
* Negative numeric values
* Zero numeric values
* Decimal numeric values
* Boolean variations
* Invalid date values
* Reversed date ranges
* Invalid nested objects
* Missing nested properties
* Missing optional properties
* Extra JSON properties
* Duplicate POST requests
* Malformed JSON
* Empty request body
* Missing Content-Type
* Unsupported Content-Type
* Special characters
* Long string values
* Response contract validation
* JSON Schema validation
* Resource persistence

## Restful Booker POST Operations

```text
POST /auth
POST /booking
```

Authentication testing for:

```text
POST /auth
```

is documented separately in:

```text
10_Authentication/Authentication_Template.md
```

The primary resource creation scope of this document is:

```text
POST /booking
```

---

# 5. POST Endpoints

## Create Booking

| Field           | Value                 |
| --------------- | --------------------- |
| Method          | POST                  |
| Endpoint        | `/booking`            |
| Full URL        | `{{baseUrl}}/booking` |
| Purpose         | Create a new booking  |
| Authentication  | Not required          |
| Request Format  | JSON                  |
| Response Format | JSON                  |

## Authentication Endpoint

| Field            | Value                         |
| ---------------- | ----------------------------- |
| Method           | POST                          |
| Endpoint         | `/auth`                       |
| Purpose          | Generate authentication token |
| Detailed Testing | Authentication Template       |

## POST Resource Creation Flow

```text
POST /booking
      ↓
Validate Request Body
      ↓
Create Booking
      ↓
Generate bookingid
      ↓
Return Booking Data
```

---

# 6. Test Traceability

| Traceability Level | ID / Reference                            |
| ------------------ | ----------------------------------------- |
| Requirement ID     | `REQ-POST-XXX`                            |
| Test Scenario ID   | `TS-POST-XXX`                             |
| Test Case ID       | `TC-POST-XXX`                             |
| POST Test ID       | `POST-TEST-XXX`                           |
| Postman Request    | `[TC ID] - POST - [Request Name]`         |
| JSON Schema        | `SCHEMA-POST-XXX / N/A`                   |
| Execution Record   | `06_Test_Execution/API_Test_Execution.md` |

## Traceability Chain

```text
REQ-POST-XXX
      ↓
TS-POST-XXX
      ↓
TC-POST-XXX
      ↓
POST-TEST-XXX
      ↓
Postman Request
      ↓
Postman Assertions
      ↓
GET Persistence Verification
      ↓
PASS / FAIL
```

If unexpected behaviour is identified:

```text
POST Test
    ↓
FAIL
    ↓
Request Review
    ↓
Response Review
    ↓
Persistence Verification
    ↓
Reproduction
    ↓
BUG-API-XXX
```

---

# 7. Test Environment

| Attribute           | Value                                  |
| ------------------- | -------------------------------------- |
| API                 | Restful Booker                         |
| Base URL            | `https://restful-booker.herokuapp.com` |
| Environment         | Public Test Environment                |
| Test Tool           | Postman                                |
| Postman Environment | Restful Booker - QA                    |
| Request Format      | JSON                                   |
| Response Format     | JSON                                   |
| Script Language     | JavaScript                             |

## Environment Variables

| Variable    | Purpose                          |
| ----------- | -------------------------------- |
| `baseUrl`   | API base URL                     |
| `bookingId` | Dynamically generated booking ID |
| `firstname` | Reusable firstname test data     |
| `lastname`  | Reusable lastname test data      |

## Environment Validation

* [ ] `baseUrl` configured
* [ ] Correct Postman environment selected
* [ ] API accessible
* [ ] `/booking` endpoint accessible
* [ ] Environment variable scope verified

---

# 8. Preconditions

## General Preconditions

1. Restful Booker API is accessible.
2. Postman is installed and available.
3. The `Restful Booker - QA` environment is selected.
4. `baseUrl` is configured.
5. The POST request body is configured as raw JSON.

## Persistence Verification Preconditions

1. The POST request completes.
2. A booking ID is returned.
3. The booking ID can be extracted.
4. `bookingId` is stored as an environment variable.

## Test-Specific Preconditions

1. `[Precondition 1]`
2. `[Precondition 2]`
3. `[Precondition 3]`

---

# 9. Baseline Test Data

## Valid Booking Request

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

## Request Property Matrix

| Property                | Expected Type | Baseline Value |
| ----------------------- | ------------- | -------------- |
| `firstname`             | String        | `Filip`        |
| `lastname`              | String        | `Jelinek`      |
| `totalprice`            | Number        | `500`          |
| `depositpaid`           | Boolean       | `true`         |
| `bookingdates`          | Object        | Object         |
| `bookingdates.checkin`  | String        | `2026-08-01`   |
| `bookingdates.checkout` | String        | `2026-08-10`   |
| `additionalneeds`       | String        | `Breakfast`    |

## Baseline Strategy

The valid baseline request should be executed before negative test variations.

The workflow is:

```text
Valid Baseline Request
      ↓
Confirm Expected Behaviour
      ↓
Modify One Test Condition
      ↓
Execute Negative Test
      ↓
Compare Behaviour
```

Where practical, change one input condition at a time.

---

# 10. Request Configuration

## HTTP Method

```text
POST
```

## Request URL

```text
{{baseUrl}}/booking
```

## Authentication

```text
None
```

## Headers

```text
Content-Type: application/json
Accept: application/json
```

## Body Type

```text
raw
```

## Body Format

```text
JSON
```

## Baseline Request

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

---

# 11. Positive Resource Creation Testing

## Objective

Verify that a valid POST request creates a new booking.

## Request

```text
POST {{baseUrl}}/booking
```

## Expected Behaviour

The API should:

* Accept the valid request
* Create a booking
* Generate a booking ID
* Return booking data
* Return data consistent with the request
* Persist the created booking

## Validation Flow

```text
Valid POST Request
      ↓
Successful Response
      ↓
Validate HTTP Status
      ↓
Validate Response Contract
      ↓
Validate bookingid
      ↓
Compare Request and Response
      ↓
Store bookingId
      ↓
GET Created Booking
      ↓
Verify Persistence
      ↓
PASS
```

## Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 12. Creation Response Validation

## Expected Response Structure

```json
{
  "bookingid": 123,
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

## Response Validation Matrix

| Property              | Expected |
| --------------------- | -------- |
| Root type             | Object   |
| `bookingid` exists    | Yes      |
| `bookingid` type      | Number   |
| `booking` exists      | Yes      |
| `booking` type        | Object   |
| `firstname` exists    | Yes      |
| `lastname` exists     | Yes      |
| `totalprice` exists   | Yes      |
| `depositpaid` exists  | Yes      |
| `bookingdates` exists | Yes      |

## Validation Objective

The response must be validated at both levels:

```text
Creation Metadata
      ↓
bookingid
```

and:

```text
Created Resource Data
      ↓
booking
```

---

# 13. Booking ID Validation

The API-generated booking identifier is required for dependent CRUD tests.

## Expected Property

```text
bookingid
```

## Expected Type

```text
Number
```

## Property Assertion

```javascript
pm.test("Response contains bookingid", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("bookingid");
});
```

## Data Type Assertion

```javascript
pm.test("bookingid is a number", function () {
    const response = pm.response.json();

    pm.expect(response.bookingid).to.be.a("number");
});
```

## Positive Value Assertion

```javascript
pm.test("bookingid is greater than zero", function () {
    const response = pm.response.json();

    pm.expect(response.bookingid).to.be.above(0);
});
```

## Validation Matrix

| Validation         | Expected       | Actual     | Result      |
| ------------------ | -------------- | ---------- | ----------- |
| `bookingid` exists | Yes            | `[Actual]` | PASS / FAIL |
| Type               | Number         | `[Actual]` | PASS / FAIL |
| Value              | Greater than 0 | `[Actual]` | PASS / FAIL |

---

# 14. Dynamic Booking ID Extraction

The generated booking ID should be extracted automatically.

## Postman Test Script

```javascript
const response = pm.response.json();

pm.environment.set("bookingId", response.bookingid);
```

## Recommended Safe Extraction

```javascript
const response = pm.response.json();

if (response.bookingid) {
    pm.environment.set("bookingId", response.bookingid);
}
```

## Runtime Variable

```text
{{bookingId}}
```

## Dependent Request Example

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

## Extraction Flow

```text
POST /booking
      ↓
Read response.bookingid
      ↓
Store bookingId
      ↓
{{bookingId}}
      ↓
GET /booking/{{bookingId}}
```

## Validation Objective

No manual booking ID copying should be required during the automated CRUD workflow.

---

# 15. Request-Response Data Comparison

The creation response should be compared with the submitted request data.

## Validation Objective

Verify:

```text
Submitted Booking Data
          =
Returned Booking Data
```

## Example Assertions

```javascript
pm.test("Created booking firstname is correct", function () {
    const response = pm.response.json();

    pm.expect(response.booking.firstname).to.eql("Filip");
});
```

```javascript
pm.test("Created booking lastname is correct", function () {
    const response = pm.response.json();

    pm.expect(response.booking.lastname).to.eql("Jelinek");
});
```

```javascript
pm.test("Created booking totalprice is correct", function () {
    const response = pm.response.json();

    pm.expect(response.booking.totalprice).to.eql(500);
});
```

```javascript
pm.test("Created booking depositpaid value is correct", function () {
    const response = pm.response.json();

    pm.expect(response.booking.depositpaid).to.eql(true);
});
```

## Full Comparison Example

```javascript
pm.test("Created booking matches submitted data", function () {
    const response = pm.response.json();
    const booking = response.booking;

    pm.expect(booking.firstname).to.eql("Filip");
    pm.expect(booking.lastname).to.eql("Jelinek");
    pm.expect(booking.totalprice).to.eql(500);
    pm.expect(booking.depositpaid).to.eql(true);
    pm.expect(booking.bookingdates.checkin).to.eql("2026-08-01");
    pm.expect(booking.bookingdates.checkout).to.eql("2026-08-10");
    pm.expect(booking.additionalneeds).to.eql("Breakfast");
});
```

A structurally valid response containing incorrect data should fail data validation.

---

# 16. Resource Persistence Verification

The created booking should be retrieved using GET.

## Verification Request

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

## Persistence Flow

```text
POST /booking
      ↓
bookingid Generated
      ↓
Store {{bookingId}}
      ↓
GET /booking/{{bookingId}}
      ↓
Compare Persisted Data
```

## Required Validation

| Validation                    | Expected |
| ----------------------------- | -------- |
| Created ID generated          | Yes      |
| GET request executable        | Yes      |
| Booking retrievable           | Yes      |
| Persisted firstname correct   | Yes      |
| Persisted lastname correct    | Yes      |
| Persisted totalprice correct  | Yes      |
| Persisted depositpaid correct | Yes      |
| Persisted dates correct       | Yes      |

## Complete Creation Proof

```text
POST Returned Booking
          +
GET Returned Booking
          =
Resource Creation Verified
```

---

# 17. Required Field Testing

Each expected request property should be evaluated individually.

## Booking Properties

```text
firstname
lastname
totalprice
depositpaid
bookingdates
bookingdates.checkin
bookingdates.checkout
additionalneeds
```

## Test Objective

Determine:

* Whether the property is required
* API behaviour when the property is missing
* API behaviour when the property is null
* API behaviour when the property is empty
* Whether a resource is created
* How the created resource is persisted

## Field Validation Matrix

| Property          | Missing | Null | Empty | Invalid Type |
| ----------------- | ------- | ---- | ----- | ------------ |
| `firstname`       | Test    | Test | Test  | Test         |
| `lastname`        | Test    | Test | Test  | Test         |
| `totalprice`      | Test    | Test | N/A   | Test         |
| `depositpaid`     | Test    | Test | N/A   | Test         |
| `bookingdates`    | Test    | Test | N/A   | Test         |
| `checkin`         | Test    | Test | Test  | Test         |
| `checkout`        | Test    | Test | Test  | Test         |
| `additionalneeds` | Test    | Test | Test  | Test         |

The expected result must be based on the API contract where behaviour is documented.

---

# 18. Missing Field Testing

## Missing Firstname

```json
{
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

## Missing Lastname

```json
{
  "firstname": "Filip",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Missing Totalprice

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Missing Depositpaid

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Missing Bookingdates

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "additionalneeds": "Breakfast"
}
```

## Validation Record

| Missing Property | HTTP Status | Resource Created | Result      |
| ---------------- | ----------- | ---------------- | ----------- |
| `firstname`      | `[Actual]`  | Yes / No         | PASS / FAIL |
| `lastname`       | `[Actual]`  | Yes / No         | PASS / FAIL |
| `totalprice`     | `[Actual]`  | Yes / No         | PASS / FAIL |
| `depositpaid`    | `[Actual]`  | Yes / No         | PASS / FAIL |
| `bookingdates`   | `[Actual]`  | Yes / No         | PASS / FAIL |

If a resource is created, retrieve it using GET and inspect the persisted representation.

---

# 19. Empty Value Testing

## Empty Firstname

```json
{
  "firstname": "",
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

## Empty Lastname

```json
{
  "firstname": "Filip",
  "lastname": "",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Empty Additional Needs

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
  "additionalneeds": ""
}
```

## Validation Objective

Verify whether empty strings are:

* Accepted
* Rejected
* Normalized
* Persisted unchanged
* Converted to another value

## Result Matrix

| Property          | Empty Value Accepted | Persisted Value | Result      |
| ----------------- | -------------------- | --------------- | ----------- |
| `firstname`       | Yes / No             | `[Actual]`      | PASS / FAIL |
| `lastname`        | Yes / No             | `[Actual]`      | PASS / FAIL |
| `additionalneeds` | Yes / No             | `[Actual]`      | PASS / FAIL |

---

# 20. Null Value Testing

## Null Firstname

```json
{
  "firstname": null,
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

## Null Totalprice

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": null,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Null Bookingdates

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": null,
  "additionalneeds": "Breakfast"
}
```

## Null Value Matrix

| Property       | HTTP Status | Resource Created | Persisted Value | Result      |
| -------------- | ----------- | ---------------- | --------------- | ----------- |
| `firstname`    | `[Actual]`  | Yes / No         | `[Actual]`      | PASS / FAIL |
| `lastname`     | `[Actual]`  | Yes / No         | `[Actual]`      | PASS / FAIL |
| `totalprice`   | `[Actual]`  | Yes / No         | `[Actual]`      | PASS / FAIL |
| `depositpaid`  | `[Actual]`  | Yes / No         | `[Actual]`      | PASS / FAIL |
| `bookingdates` | `[Actual]`  | Yes / No         | `[Actual]`      | PASS / FAIL |

`null` and a missing property should be tested as separate conditions.

---

# 21. Invalid Data Type Testing

## Data Type Matrix

| Property          | Expected Type | Invalid Type |
| ----------------- | ------------- | ------------ |
| `firstname`       | String        | Number       |
| `lastname`        | String        | Boolean      |
| `totalprice`      | Number        | String       |
| `depositpaid`     | Boolean       | String       |
| `bookingdates`    | Object        | Array        |
| `checkin`         | String        | Number       |
| `checkout`        | String        | Boolean      |
| `additionalneeds` | String        | Object       |

## Numeric Firstname

```json
{
  "firstname": 12345,
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

## String Totalprice

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": "500",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## String Depositpaid

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": "true",
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Validation Objective

Verify whether invalid data types are:

* Rejected
* Accepted
* Coerced
* Transformed
* Persisted unchanged
* Responsible for unexpected server errors

Data type coercion should be documented when observed.

---

# 22. Numeric Field Testing

The primary numeric property is:

```text
totalprice
```

## Test Values

| Condition        |           Value |
| ---------------- | --------------: |
| Positive integer |           `500` |
| Zero             |             `0` |
| Negative integer |            `-1` |
| Decimal          |        `500.50` |
| Large number     | `[large value]` |

## Zero Value

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 0,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Negative Value

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": -1,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Decimal Value

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500.50,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Validation Matrix

| Value    | Accepted | Returned Value | Persisted Value | Result      |
| -------- | -------- | -------------- | --------------- | ----------- |
| `500`    | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| `0`      | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| `-1`     | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| `500.50` | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |

---

# 23. Boolean Field Testing

The boolean property is:

```text
depositpaid
```

## Valid Boolean Values

```text
true
false
```

## Invalid Variations

```text
"true"
"false"
1
0
null
```

## Test Matrix

| Input     | JSON Type | Expected Type                |
| --------- | --------- | ---------------------------- |
| `true`    | Boolean   | Boolean                      |
| `false`   | Boolean   | Boolean                      |
| `"true"`  | String    | Invalid Type                 |
| `"false"` | String    | Invalid Type                 |
| `1`       | Number    | Invalid Type                 |
| `0`       | Number    | Invalid Type                 |
| `null`    | Null      | Invalid / Nullable Behaviour |

## Validation Objective

Verify:

* Type validation
* Type coercion
* Response value
* Persisted value

If the API accepts an invalid type and transforms it, record the transformation.

---

# 24. Date Field Testing

Date properties:

```text
bookingdates.checkin
bookingdates.checkout
```

## Baseline Dates

```json
{
  "checkin": "2026-08-01",
  "checkout": "2026-08-10"
}
```

## Test Variations

| Condition          | Value          |
| ------------------ | -------------- |
| Valid date         | `2026-08-01`   |
| Invalid text       | `invalid-date` |
| Invalid month      | `2026-13-01`   |
| Invalid day        | `2026-02-30`   |
| Empty date         | `""`           |
| Null date          | `null`         |
| Numeric date       | `20260801`     |
| Alternative format | `01-08-2026`   |

## Reversed Date Range

```json
{
  "checkin": "2026-08-10",
  "checkout": "2026-08-01"
}
```

## Validation Objective

Verify:

* Date format handling
* Invalid date handling
* Calendar validity
* Date range validation
* Response transformation
* Persisted date values

## Date Result Matrix

| Condition      | Accepted | Response Value | Persisted Value | Result      |
| -------------- | -------- | -------------- | --------------- | ----------- |
| Valid date     | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| Invalid text   | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| Invalid month  | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| Invalid day    | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |
| Reversed range | Yes / No | `[Actual]`     | `[Actual]`      | PASS / FAIL |

---

# 25. Nested Object Testing

The booking request contains:

```text
bookingdates
```

as a nested JSON object.

## Valid Nested Object

```json
"bookingdates": {
  "checkin": "2026-08-01",
  "checkout": "2026-08-10"
}
```

## Missing Checkin

```json
"bookingdates": {
  "checkout": "2026-08-10"
}
```

## Missing Checkout

```json
"bookingdates": {
  "checkin": "2026-08-01"
}
```

## Empty Object

```json
"bookingdates": {}
```

## Array Instead of Object

```json
"bookingdates": []
```

## String Instead of Object

```json
"bookingdates": "2026-08-01"
```

## Validation Matrix

| Variation        | HTTP Status | Resource Created | Result      |
| ---------------- | ----------- | ---------------- | ----------- |
| Valid object     | `[Actual]`  | Yes / No         | PASS / FAIL |
| Missing checkin  | `[Actual]`  | Yes / No         | PASS / FAIL |
| Missing checkout | `[Actual]`  | Yes / No         | PASS / FAIL |
| Empty object     | `[Actual]`  | Yes / No         | PASS / FAIL |
| Array            | `[Actual]`  | Yes / No         | PASS / FAIL |
| String           | `[Actual]`  | Yes / No         | PASS / FAIL |

Nested object validation should include the persisted resource when creation succeeds.

---

# 26. Additional Needs Testing

The `additionalneeds` property should be tested separately.

## Baseline Value

```json
"additionalneeds": "Breakfast"
```

## Test Variations

```text
Missing property
Empty string
Null
Long string
Special characters
Numeric value
Object value
```

## Missing Additional Needs

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  }
}
```

## Validation Matrix

| Condition    | Resource Created | Property Returned | Persisted Value |
| ------------ | ---------------- | ----------------- | --------------- |
| Valid string | Yes / No         | Yes / No          | `[Actual]`      |
| Missing      | Yes / No         | Yes / No          | `[Actual]`      |
| Empty        | Yes / No         | Yes / No          | `[Actual]`      |
| Null         | Yes / No         | Yes / No          | `[Actual]`      |

This testing helps determine whether the property behaves as optional.

---

# 27. Extra Property Testing

Add an undocumented property to the request.

## Request Example

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
  "additionalneeds": "Breakfast",
  "testProperty": "UnexpectedValue"
}
```

## Validation Objective

Determine whether the extra property is:

* Rejected
* Ignored
* Returned
* Persisted

## Validation Flow

```text
POST with Extra Property
      ↓
Review POST Response
      ↓
Check testProperty
      ↓
GET Created Booking
      ↓
Check Persisted Resource
```

## Result

| Validation               | Actual                 |
| ------------------------ | ---------------------- |
| Request accepted         | Yes / No               |
| Extra property returned  | Yes / No               |
| Extra property persisted | Yes / No               |
| Behaviour                | `[Observed Behaviour]` |

Undocumented extra property handling should be recorded as observed behaviour unless it conflicts with a defined contract.

---

# 28. Duplicate POST Testing

Execute the same valid POST request more than once.

## Execution Flow

```text
Identical POST Request
      ↓
POST Execution 1
      ↓
Record bookingid A
      ↓
POST Execution 2
      ↓
Record bookingid B
      ↓
Compare IDs
```

## Result Record

| Execution | Booking ID      |
| --------- | --------------- |
| POST 1    | `[bookingid A]` |
| POST 2    | `[bookingid B]` |

## Validation

```text
bookingid A [= / ≠] bookingid B
```

## Expected Analysis

POST is generally non-idempotent.

If two identical requests create two resources with different identifiers, this may be expected POST behaviour.

Do not classify duplicate creation as a defect without a requirement preventing duplicate bookings.

---

# 29. Malformed JSON Testing

## Missing Closing Brace

```text
{
  "firstname": "Filip",
  "lastname": "Jelinek"
```

## Missing Comma

```text
{
  "firstname": "Filip"
  "lastname": "Jelinek"
}
```

## Invalid JSON Property Syntax

```text
{
  firstname: "Filip"
}
```

## Validation Objective

Verify:

* HTTP status
* Error response
* Server stability
* Resource creation behaviour

## Required Validation

```text
Malformed JSON
      ↓
POST Request
      ↓
Review Response
      ↓
Verify No Valid bookingid
```

## Result Matrix

| Malformed Condition     | HTTP Status | bookingid Returned | Result      |
| ----------------------- | ----------- | ------------------ | ----------- |
| Missing brace           | `[Actual]`  | Yes / No           | PASS / FAIL |
| Missing comma           | `[Actual]`  | Yes / No           | PASS / FAIL |
| Invalid property syntax | `[Actual]`  | Yes / No           | PASS / FAIL |

Malformed JSON should not result in a valid resource creation response.

---

# 30. Empty Request Body Testing

## Request

```text
POST {{baseUrl}}/booking
```

## Body

```text
[No request body]
```

## Validation Objective

Verify:

* HTTP status
* Response body
* Server behaviour
* Resource creation behaviour

## Result Record

| Field              | Value       |
| ------------------ | ----------- |
| HTTP Status        | `[Actual]`  |
| Response Body      | `[Actual]`  |
| bookingid Returned | Yes / No    |
| Resource Created   | Yes / No    |
| Result             | PASS / FAIL |

If an ID is unexpectedly returned, the created resource should be retrieved and inspected.

---

# 31. Content-Type Testing

## Valid Content-Type

```text
Content-Type: application/json
```

## Missing Content-Type

Remove:

```text
Content-Type
```

## Unsupported Content-Type

Example:

```text
Content-Type: text/plain
```

## Alternative Content-Type

Example:

```text
Content-Type: application/xml
```

when sending a JSON request body.

## Validation Matrix

| Content-Type       | HTTP Status | Resource Created | Result      |
| ------------------ | ----------- | ---------------- | ----------- |
| `application/json` | `[Actual]`  | Yes / No         | PASS / FAIL |
| Missing            | `[Actual]`  | Yes / No         | PASS / FAIL |
| `text/plain`       | `[Actual]`  | Yes / No         | PASS / FAIL |
| `application/xml`  | `[Actual]`  | Yes / No         | PASS / FAIL |

## Validation Objective

Determine whether the API correctly handles request media types.

Content-Type behaviour should be compared with documented API requirements.

---

# 32. Special Character Testing

String properties may be tested using special characters and Unicode.

## Example Values

```text
O'Connor
Anne-Marie
José
Jelínek
Český
日本
测试
@
#
&
<script>
```

## Test Properties

```text
firstname
lastname
additionalneeds
```

## Validation Objective

Verify:

* Request acceptance
* JSON processing
* Unicode handling
* Response value
* Persisted value
* Unexpected transformation

## Validation Flow

```text
POST Special Character Value
      ↓
Review POST Response
      ↓
Compare Returned Value
      ↓
GET Created Booking
      ↓
Compare Persisted Value
```

## Result Matrix

| Input     | Returned Value | Persisted Value | Result      |
| --------- | -------------- | --------------- | ----------- |
| `[value]` | `[Actual]`     | `[Actual]`      | PASS / FAIL |

Special character input testing in this project is functional input handling testing.

It is not presented as penetration testing.

---

# 33. Boundary-Oriented Input Testing

Boundary-oriented testing may be performed on string and numeric values.

## String Length Variations

```text
1 character
Typical value
100 characters
500 characters
1000 characters
```

## Numeric Variations

```text
0
1
-1
Large positive value
Decimal value
```

## Test Matrix

| Property     | Test Value      | HTTP Status | Resource Created | Result      |
| ------------ | --------------- | ----------- | ---------------- | ----------- |
| `firstname`  | 1 character     | `[Actual]`  | Yes / No         | PASS / FAIL |
| `firstname`  | 500 characters  | `[Actual]`  | Yes / No         | PASS / FAIL |
| `lastname`   | 1000 characters | `[Actual]`  | Yes / No         | PASS / FAIL |
| `totalprice` | `0`             | `[Actual]`  | Yes / No         | PASS / FAIL |
| `totalprice` | `-1`            | `[Actual]`  | Yes / No         | PASS / FAIL |

## Important Limitation

If the API documentation does not define minimum or maximum lengths, these tests identify observed behaviour.

An accepted long string is not automatically a defect without a defined constraint or demonstrated negative impact.

---

# 34. Response Status Validation

## Postman Assertion

```javascript
pm.test("HTTP status matches expected result", function () {
    pm.response.to.have.status([expectedStatus]);
});
```

Replace:

```text
[expectedStatus]
```

with the expected HTTP status defined by the individual test case.

## Status Validation Record

| Field           | Value       |
| --------------- | ----------- |
| Expected Status | `[status]`  |
| Actual Status   | `[status]`  |
| Result          | PASS / FAIL |

Do not use the successful POST status assertion for every negative test.

Each test must validate its own expected API behaviour.

---

# 35. Response Header Validation

## Content-Type Header

```javascript
pm.test("Content-Type header is present", function () {
    pm.response.to.have.header("Content-Type");
});
```

## JSON Content-Type

```javascript
pm.test("Response Content-Type is JSON", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});
```

## Header Validation Matrix

| Header         | Expected     | Actual     | Result      |
| -------------- | ------------ | ---------- | ----------- |
| `Content-Type` | `[Expected]` | `[Actual]` | PASS / FAIL |

Only headers relevant to the endpoint contract or test objective should be asserted.

---

# 36. Response Body Validation

## JSON Response

```javascript
pm.test("Response body is valid JSON", function () {
    pm.response.to.be.json;
});
```

## Non-Empty Body

```javascript
pm.test("Response body is not empty", function () {
    pm.expect(pm.response.text()).to.not.be.empty;
});
```

## Root Object

```javascript
pm.test("Response root is an object", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("object");
});
```

## Response Body Matrix

| Validation          | Expected |
| ------------------- | -------- |
| Body present        | Yes      |
| Valid JSON          | Yes      |
| Root type           | Object   |
| `bookingid` present | Yes      |
| `booking` present   | Yes      |

This matrix applies to a successful booking creation request.

Negative POST requests may have a different expected response contract.

---

# 37. JSON Structure Validation

## Expected Successful Response

```text
Root Object
├── bookingid
└── booking
    ├── firstname
    ├── lastname
    ├── totalprice
    ├── depositpaid
    ├── bookingdates
    │   ├── checkin
    │   └── checkout
    └── additionalneeds
```

## Structure Assertion

```javascript
pm.test("Response contains expected creation structure", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("bookingid");
    pm.expect(response).to.have.property("booking");

    pm.expect(response.booking).to.have.property("firstname");
    pm.expect(response.booking).to.have.property("lastname");
    pm.expect(response.booking).to.have.property("totalprice");
    pm.expect(response.booking).to.have.property("depositpaid");
    pm.expect(response.booking).to.have.property("bookingdates");
});
```

## Nested Structure Assertion

```javascript
pm.test("bookingdates contains expected properties", function () {
    const response = pm.response.json();

    pm.expect(response.booking.bookingdates).to.have.property("checkin");
    pm.expect(response.booking.bookingdates).to.have.property("checkout");
});
```

---

# 38. JSON Schema Validation

## Successful Create Booking Schema

```javascript
const schema = {
    type: "object",
    required: [
        "bookingid",
        "booking"
    ],
    properties: {
        bookingid: {
            type: "number"
        },
        booking: {
            type: "object",
            required: [
                "firstname",
                "lastname",
                "totalprice",
                "depositpaid",
                "bookingdates"
            ],
            properties: {
                firstname: {
                    type: "string"
                },
                lastname: {
                    type: "string"
                },
                totalprice: {
                    type: "number"
                },
                depositpaid: {
                    type: "boolean"
                },
                bookingdates: {
                    type: "object",
                    required: [
                        "checkin",
                        "checkout"
                    ],
                    properties: {
                        checkin: {
                            type: "string"
                        },
                        checkout: {
                            type: "string"
                        }
                    }
                },
                additionalneeds: {
                    type: "string"
                }
            }
        }
    }
};
```

## Schema Assertion

```javascript
pm.test("Create booking response matches JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

## Schema Result

```text
[PASS / FAIL]
```

The schema should match the expected response contract for the tested request.

Do not reuse the successful creation schema for negative responses with a different response structure.

---

# 39. Data Type Validation

## Postman Assertion

```javascript
pm.test("Create booking response uses expected data types", function () {
    const response = pm.response.json();
    const booking = response.booking;

    pm.expect(response.bookingid).to.be.a("number");
    pm.expect(booking).to.be.an("object");
    pm.expect(booking.firstname).to.be.a("string");
    pm.expect(booking.lastname).to.be.a("string");
    pm.expect(booking.totalprice).to.be.a("number");
    pm.expect(booking.depositpaid).to.be.a("boolean");
    pm.expect(booking.bookingdates).to.be.an("object");
    pm.expect(booking.bookingdates.checkin).to.be.a("string");
    pm.expect(booking.bookingdates.checkout).to.be.a("string");
});
```

## Data Type Matrix

| Property       | Expected | Actual     | Result      |
| -------------- | -------- | ---------- | ----------- |
| `bookingid`    | Number   | `[Actual]` | PASS / FAIL |
| `booking`      | Object   | `[Actual]` | PASS / FAIL |
| `firstname`    | String   | `[Actual]` | PASS / FAIL |
| `lastname`     | String   | `[Actual]` | PASS / FAIL |
| `totalprice`   | Number   | `[Actual]` | PASS / FAIL |
| `depositpaid`  | Boolean  | `[Actual]` | PASS / FAIL |
| `bookingdates` | Object   | `[Actual]` | PASS / FAIL |
| `checkin`      | String   | `[Actual]` | PASS / FAIL |
| `checkout`     | String   | `[Actual]` | PASS / FAIL |

---

# 40. Postman POST Assertions

## Successful Status

```javascript
pm.test("HTTP status is correct", function () {
    pm.response.to.have.status([expectedStatus]);
});
```

## JSON Response

```javascript
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});
```

## Booking ID Exists

```javascript
pm.test("Response contains bookingid", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("bookingid");
});
```

## Booking ID Data Type

```javascript
pm.test("bookingid is a number", function () {
    const response = pm.response.json();

    pm.expect(response.bookingid).to.be.a("number");
});
```

## Booking Object Exists

```javascript
pm.test("Response contains booking object", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("booking");
    pm.expect(response.booking).to.be.an("object");
});
```

## Store Booking ID

```javascript
const response = pm.response.json();

if (response.bookingid) {
    pm.environment.set("bookingId", response.bookingid);
}
```

## Verify Stored Booking ID

```javascript
pm.test("Booking ID is stored", function () {
    const bookingId = pm.environment.get("bookingId");

    pm.expect(bookingId).to.exist;
});
```

## Compare Booking Data

```javascript
pm.test("Created booking contains expected data", function () {
    const response = pm.response.json();
    const booking = response.booking;

    pm.expect(booking.firstname).to.eql("Filip");
    pm.expect(booking.lastname).to.eql("Jelinek");
    pm.expect(booking.totalprice).to.eql(500);
    pm.expect(booking.depositpaid).to.eql(true);
});
```

Assertions should be selected according to the individual POST test case.

Negative POST tests should not execute scripts that assume `response.booking` or `response.bookingid` always exists.

---

# 41. POST Execution Result

## Execution Information

| Field             | Value                 |
| ----------------- | --------------------- |
| POST Test ID      | `POST-TEST-XXX`       |
| Test Case ID      | `TC-POST-XXX`         |
| Execution Date    | YYYY-MM-DD            |
| Postman Request   | `[Request Name]`      |
| Endpoint          | `[Endpoint]`          |
| HTTP Status       | `[Actual]`            |
| Assertions        | `[Count]`             |
| Failed Assertions | `[Count]`             |
| Schema Result     | PASS / FAIL / N/A     |
| Resource Created  | Yes / No              |
| Booking ID        | `[ID / N/A]`          |
| Defect ID         | `BUG-API-XXX / —`     |
| Result            | PASS / FAIL / BLOCKED |

## Validation Result

| Validation           | Expected           | Actual     | Result            |
| -------------------- | ------------------ | ---------- | ----------------- |
| HTTP Status          | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Response Format      | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Response Structure   | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| JSON Schema          | `[Expected / N/A]` | `[Actual]` | PASS / FAIL / N/A |
| Booking ID           | `[Expected / N/A]` | `[Actual]` | PASS / FAIL / N/A |
| Response Data        | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Resource Persistence | `[Expected / N/A]` | `[Actual]` | PASS / FAIL / N/A |

## Overall Result

```text
[PASS / FAIL / BLOCKED]
```

## Execution Notes

```text
[Document actual POST test observations.]
```

---

# 42. POST Defect Analysis

A failed POST assertion does not automatically confirm an API defect.

## Potential Failure Sources

```text
Incorrect Expected Result
Incorrect Request Body
Invalid JSON Syntax
Incorrect Content-Type
Incorrect Test Data
Incorrect Postman Assertion
Incorrect JSON Schema
Environment Variable Issue
Shared Public Environment Issue
API Contract Deviation
API Defect
```

## Investigation Flow

```text
POST Test FAIL
      ↓
Review HTTP Method
      ↓
Review Request URL
      ↓
Review Headers
      ↓
Review Request Body
      ↓
Review Test Data
      ↓
Review API Documentation
      ↓
Review Response
      ↓
Review Assertions
      ↓
GET Resource if Created
      ↓
Re-execute Request
      ↓
Classify Root Cause
```

## Defect Analysis Record

| Field               | Value               |
| ------------------- | ------------------- |
| Test Case ID        | `TC-POST-XXX`       |
| Failed Validation   | `[Validation]`      |
| Expected            | `[Expected]`        |
| Actual              | `[Actual]`          |
| Resource Created    | Yes / No            |
| Persisted Behaviour | `[Behaviour / N/A]` |
| Reproduced          | Yes / No            |
| Reproduction Rate   | `[Rate]`            |
| Classification      | `[Classification]`  |
| Defect ID           | `BUG-API-XXX / —`   |

## Analysis Conclusion

```text
[Document why the behaviour is or is not classified as an API defect.]
```

---

# 43. Evidence

POST testing evidence may include:

* Postman request configuration
* Request headers
* Request body
* API response
* Generated booking ID
* Postman assertions
* JSON Schema validation
* Environment variable extraction
* GET persistence verification
* Collection Runner result
* Newman result

## Evidence Directory

```text
10_Evidence/Postman/POST/
```

## Evidence Naming Convention

```text
[TC-ID]_POST_[Description].png
```

Examples:

```text
TC-POST-001_POST_Create_Booking.png
TC-POST-005_POST_Missing_Firstname.png
TC-POST-012_POST_Invalid_Totalprice_Type.png
TC-POST-020_POST_Malformed_JSON.png
```

## Evidence Record

| Evidence                 | Path     |
| ------------------------ | -------- |
| Request                  | `[path]` |
| Response                 | `[path]` |
| Assertions               | `[path]` |
| Booking ID Extraction    | `[path]` |
| Persistence Verification | `[path]` |

Evidence should show actual API behaviour.

---

# 44. POST Testing Limitations

This project performs functional and contract-oriented POST API testing.

## Included

```text
Resource Creation
Request Body Validation
Required Field Testing
Missing Field Testing
Empty Value Testing
Null Value Testing
Data Type Testing
Numeric Input Testing
Boolean Input Testing
Date Input Testing
Nested Object Testing
Optional Property Testing
Extra Property Testing
Duplicate POST Testing
Malformed JSON Testing
Content-Type Testing
Special Character Testing
Boundary-Oriented Input Testing
Response Contract Validation
JSON Schema Validation
Resource Persistence Verification
```

## Not Included

```text
Load Testing
Stress Testing
Soak Testing
Mass Resource Creation Testing
Denial-of-Service Testing
Infrastructure Monitoring
Database Validation
Server Log Analysis
Penetration Testing
```

Boundary-oriented POST testing is limited to controlled functional input validation.

---

# 45. Maintenance

POST tests should remain synchronized with:

* API requirements
* API documentation
* Endpoint inventory
* Test scenarios
* Test cases
* JSON Schemas
* Postman collection
* GET persistence verification
* Newman execution
* CI/CD workflow

## POST Test Change Flow

```text
POST Contract Change
      ↓
Requirements Review
      ↓
Endpoint Inventory Review
      ↓
Test Scenario Review
      ↓
Test Case Review
      ↓
Request Body Review
      ↓
JSON Schema Review
      ↓
Postman Assertion Review
      ↓
POST Regression Execution
```

## Maintenance Rules

1. Maintain one valid baseline booking request.
2. Change one primary test condition at a time where practical.
3. Validate response data, not only HTTP status.
4. Validate generated booking IDs.
5. Extract booking IDs dynamically.
6. Verify successful resource creation using GET.
7. Inspect persisted resources after unexpected creation behaviour.
8. Test missing and null values separately.
9. Test JSON data types explicitly.
10. Do not classify undocumented input behaviour as a defect without analysis.
11. Investigate failed assertions before defect classification.
12. Re-run affected POST tests after collection changes.
13. Re-export the collection before Newman regression execution.
14. Keep evidence linked to actual execution results.

The following workflow should be avoided:

```text
POST Returns Success
      ↓
Mark PASS
```

The required creation workflow is:

```text
POST Returns Success
      ↓
Validate Response Contract
      ↓
Validate bookingid
      ↓
Compare Request and Response
      ↓
GET Created Resource
      ↓
Validate Persisted State
      ↓
PASS
```

---

# 46. POST Testing Summary

**Project:** Restful Booker API Testing Project
**HTTP Method:** POST
**Primary Endpoint:** `POST /booking`
**Test Tool:** Postman
**Execution Status:** `[Not Executed / PASS / FAIL]`

POST testing covers:

```text
POST /booking
      ↓
Request Body Processing
      ↓
Resource Creation
      ↓
Generated bookingid
      ↓
Creation Response
      ↓
Dynamic ID Extraction
      ↓
GET Persistence Verification
```

Request body testing covers:

```text
Valid Data
Missing Properties
Empty Values
Null Values
Invalid Data Types
Numeric Values
Boolean Values
Date Values
Nested Objects
Optional Properties
Extra Properties
Malformed JSON
Empty Body
Content-Type Variations
Special Characters
Boundary-Oriented Values
```

Response validation covers:

```text
HTTP Status
      ↓
Response Headers
      ↓
Response Body
      ↓
Root JSON Structure
      ↓
bookingid
      ↓
booking Object
      ↓
Required Properties
      ↓
Data Types
      ↓
JSON Schema
      ↓
Request-Response Comparison
```

The primary resource creation verification model is:

```text
POST /booking
      ↓
Validate Creation Response
      ↓
Extract bookingid
      ↓
Store {{bookingId}}
      ↓
GET /booking/{{bookingId}}
      ↓
Validate Persisted Booking
```

The complete POST validation model is:

```text
Request Validation
        +
Response Contract Validation
        +
Generated ID Validation
        +
Request-Response Comparison
        +
Resource Persistence Verification
```

POST execution results are linked to:

```text
API Test Case
      ↓
Postman POST Request
      ↓
Postman Assertions
      ↓
JSON Schema Validation
      ↓
GET Persistence Verification
      ↓
API Test Execution
      ↓
Defect Report, if required
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
**Status:** Template
