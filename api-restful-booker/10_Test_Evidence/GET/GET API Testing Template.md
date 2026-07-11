# GET API Testing Template

**Project:** Restful Booker API Testing Project
**Document Type:** GET API Testing Template
**Version:** 1.0
**Prepared by:** Filip Jelinek
**HTTP Method:** GET
**Test Tool:** Postman
**Status:** Template

---

# In-page Navigation

* [1. GET Test Identification](#1-get-test-identification)
* [2. Purpose](#2-purpose)
* [3. GET Method Overview](#3-get-method-overview)
* [4. GET Testing Scope](#4-get-testing-scope)
* [5. GET Endpoints](#5-get-endpoints)
* [6. Test Traceability](#6-test-traceability)
* [7. Test Environment](#7-test-environment)
* [8. Preconditions](#8-preconditions)
* [9. Test Data](#9-test-data)
* [10. Request Configuration](#10-request-configuration)
* [11. Positive GET Testing](#11-positive-get-testing)
* [12. Resource Collection Testing](#12-resource-collection-testing)
* [13. Single Resource Testing](#13-single-resource-testing)
* [14. Query Parameter Testing](#14-query-parameter-testing)
* [15. Filter Testing](#15-filter-testing)
* [16. Path Parameter Testing](#16-path-parameter-testing)
* [17. Response Status Validation](#17-response-status-validation)
* [18. Response Header Validation](#18-response-header-validation)
* [19. Response Body Validation](#19-response-body-validation)
* [20. JSON Structure Validation](#20-json-structure-validation)
* [21. JSON Schema Validation](#21-json-schema-validation)
* [22. Data Type Validation](#22-data-type-validation)
* [23. Response Data Validation](#23-response-data-validation)
* [24. Empty Result Testing](#24-empty-result-testing)
* [25. Non-Existing Resource Testing](#25-non-existing-resource-testing)
* [26. Invalid Path Parameter Testing](#26-invalid-path-parameter-testing)
* [27. Invalid Query Parameter Testing](#27-invalid-query-parameter-testing)
* [28. Multiple Filter Testing](#28-multiple-filter-testing)
* [29. Duplicate Query Parameter Testing](#29-duplicate-query-parameter-testing)
* [30. Special Character Testing](#30-special-character-testing)
* [31. Case Sensitivity Testing](#31-case-sensitivity-testing)
* [32. GET Request Body Testing](#32-get-request-body-testing)
* [33. Data Persistence Verification](#33-data-persistence-verification)
* [34. Response Time Observation](#34-response-time-observation)
* [35. Postman GET Assertions](#35-postman-get-assertions)
* [36. GET Execution Result](#36-get-execution-result)
* [37. GET Defect Analysis](#37-get-defect-analysis)
* [38. Evidence](#38-evidence)
* [39. GET Testing Limitations](#39-get-testing-limitations)
* [40. Maintenance](#40-maintenance)
* [41. GET Testing Summary](#41-get-testing-summary)

---

# 1. GET Test Identification

| Field            | Value                                       |
| ---------------- | ------------------------------------------- |
| GET Test ID      | `GET-TEST-XXX`                              |
| Test Case ID     | `TC-GET-XXX`                                |
| Test Scenario ID | `TS-GET-XXX`                                |
| Requirement ID   | `REQ-GET-XXX`                               |
| HTTP Method      | GET                                         |
| Endpoint         | `[Endpoint]`                                |
| Test Type        | Functional / Contract / Negative / Boundary |
| Test Tool        | Postman                                     |
| Status           | Not Executed / PASS / FAIL / BLOCKED        |
| Prepared By      | Filip Jelinek                               |

## GET Test Naming Convention

GET test records use:

```text
GET-TEST-[NUMBER]
```

Examples:

```text
GET-TEST-001
GET-TEST-002
GET-TEST-015
```

GET-related test cases use:

```text
TC-GET-[NUMBER]
```

Examples:

```text
TC-GET-001
TC-GET-002
TC-GET-025
```

---

# 2. Purpose

The purpose of this document is to define and record testing performed against REST API endpoints using the HTTP `GET` method.

GET testing validates whether the API correctly retrieves resources without intentionally modifying server-side resource state.

The testing process validates:

* Endpoint accessibility
* Resource retrieval
* Collection retrieval
* Single resource retrieval
* Path parameter handling
* Query parameter handling
* Filter behaviour
* Multiple filter behaviour
* HTTP status codes
* Response headers
* Response body structure
* JSON response contract
* JSON Schema compliance
* Required properties
* Property data types
* Response data correctness
* Empty result behaviour
* Non-existing resource behaviour
* Invalid input handling
* Data persistence
* Response time observations

The GET testing workflow follows:

```text
API Requirement
      ↓
GET Test Scenario
      ↓
GET Test Case
      ↓
Postman GET Request
      ↓
API Response
      ↓
Status Validation
      ↓
Contract Validation
      ↓
Data Validation
      ↓
PASS / FAIL
```

---

# 3. GET Method Overview

The HTTP `GET` method is used to retrieve a representation of a resource.

Conceptual request flow:

```text
API Client
    ↓
GET Request
    ↓
API Endpoint
    ↓
Resource Lookup
    ↓
HTTP Response
    ↓
Resource Representation
```

A GET request should be treated as a read operation.

## Expected GET Characteristics

GET operations are generally expected to be:

* Read-oriented
* Safe
* Idempotent
* Repeatable without intentional resource modification

## Safe Method

A safe HTTP method is not intended to modify the state of the target resource.

Conceptually:

```text
Resource State Before GET
          =
Resource State After GET
```

## Idempotent Method

Repeating the same GET request should not create additional intended resource state changes.

Example:

```text
GET /booking/123
      ↓
GET /booking/123
      ↓
GET /booking/123
```

The requests should continue to perform resource retrieval rather than resource creation or modification.

GET response data may still change when the underlying resource is modified by another API consumer.

---

# 4. GET Testing Scope

GET testing includes:

* Health check retrieval
* Booking ID collection retrieval
* Booking retrieval by ID
* Firstname filter
* Lastname filter
* Full name filter
* Check-in date filter
* Checkout date filter
* Date range filtering
* Multiple query parameters
* Duplicate query parameters
* Empty query values
* Invalid query values
* Invalid booking IDs
* Non-existing booking IDs
* String path values
* Decimal path values
* Negative path values
* Special characters
* Case sensitivity
* GET request body behaviour
* Response contract validation
* JSON Schema validation
* Response data validation

## Restful Booker GET Endpoints

```text
GET /ping
GET /booking
GET /booking/{id}
```

---

# 5. GET Endpoints

## Health Check

| Field          | Value            |
| -------------- | ---------------- |
| Method         | GET              |
| Endpoint       | `/ping`          |
| Purpose        | API health check |
| Authentication | Not required     |

## Get Booking IDs

| Field          | Value                        |
| -------------- | ---------------------------- |
| Method         | GET                          |
| Endpoint       | `/booking`                   |
| Purpose        | Retrieve booking identifiers |
| Authentication | Not required                 |

## Get Booking

| Field          | Value                    |
| -------------- | ------------------------ |
| Method         | GET                      |
| Endpoint       | `/booking/{id}`          |
| Purpose        | Retrieve a booking by ID |
| Authentication | Not required             |

## Supported Booking Filters

| Query Parameter | Purpose                      |
| --------------- | ---------------------------- |
| `firstname`     | Filter bookings by firstname |
| `lastname`      | Filter bookings by lastname  |
| `checkin`       | Filter by check-in date      |
| `checkout`      | Filter by checkout date      |

Example:

```text
GET /booking?firstname=Filip
```

Example:

```text
GET /booking?firstname=Filip&lastname=Jelinek
```

---

# 6. Test Traceability

| Traceability Level | ID / Reference                            |
| ------------------ | ----------------------------------------- |
| Requirement ID     | `REQ-GET-XXX`                             |
| Test Scenario ID   | `TS-GET-XXX`                              |
| Test Case ID       | `TC-GET-XXX`                              |
| GET Test ID        | `GET-TEST-XXX`                            |
| Postman Request    | `[TC ID] - GET - [Request Name]`          |
| JSON Schema        | `SCHEMA-XXX-XXX / N/A`                    |
| Execution Record   | `06_Test_Execution/API_Test_Execution.md` |

## Traceability Chain

```text
REQ-GET-XXX
      ↓
TS-GET-XXX
      ↓
TC-GET-XXX
      ↓
GET-TEST-XXX
      ↓
Postman Request
      ↓
Postman Assertions
      ↓
PASS / FAIL
```

If unexpected API behaviour is identified:

```text
GET Test
    ↓
FAIL
    ↓
Response Review
    ↓
Contract Review
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
| Request Format      | HTTP                                   |
| Response Format     | JSON / Text                            |
| Script Language     | JavaScript                             |

## Environment Variables

| Variable    | Purpose                          |
| ----------- | -------------------------------- |
| `baseUrl`   | API base URL                     |
| `bookingId` | Dynamically generated booking ID |
| `firstname` | Reusable firstname test data     |
| `lastname`  | Reusable lastname test data      |

---

# 8. Preconditions

Document all conditions required before GET test execution.

## General Preconditions

1. Restful Booker API is accessible.
2. Postman is installed and available.
3. The `Restful Booker - QA` environment is selected.
4. `baseUrl` is configured.

## Resource Retrieval Preconditions

For `GET /booking/{id}`:

1. A booking exists.
2. The booking ID is known.
3. `bookingId` contains the intended booking identifier.

## Filter Test Preconditions

For deterministic filter validation:

1. A dedicated booking is created.
2. Unique test data is used where possible.
3. The generated booking ID is stored.
4. The booking can be retrieved before filter execution.

## Test-Specific Preconditions

1. `[Precondition 1]`
2. `[Precondition 2]`
3. `[Precondition 3]`

---

# 9. Test Data

## Dedicated Booking Data

```json
{
  "firstname": "[unique firstname]",
  "lastname": "[unique lastname]",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-08-01",
    "checkout": "2026-08-10"
  },
  "additionalneeds": "Breakfast"
}
```

## Test Data Matrix

| Field       | Baseline Value    | Test Variation             |
| ----------- | ----------------- | -------------------------- |
| `bookingId` | Valid existing ID | Invalid / Non-existing     |
| `firstname` | Valid firstname   | Empty / Special characters |
| `lastname`  | Valid lastname    | Empty / Different case     |
| `checkin`   | Valid date        | Invalid date               |
| `checkout`  | Valid date        | Invalid date               |

## Unique Test Data Strategy

Where filter validation requires deterministic results, use a unique value.

Example pattern:

```text
FilipAPI[unique value]
```

The actual generated value should be documented in the execution record.

---

# 10. Request Configuration

## HTTP Method

```text
GET
```

## Request URL

```text
{{baseUrl}}/[endpoint]
```

## Authentication

```text
None
```

unless the tested API contract explicitly requires authentication.

## Headers

Example:

```text
Accept: application/json
```

## Request Body

Normally:

```text
Not applicable.
```

GET body behaviour may be investigated separately as an exploratory or negative test.

## Query Parameters

| Key           | Value     | Enabled  |
| ------------- | --------- | -------- |
| `[parameter]` | `[value]` | Yes / No |

---

# 11. Positive GET Testing

## Objective

Verify that a valid GET request retrieves the expected API resource or response.

## Request

```text
GET {{baseUrl}}/[endpoint]
```

## Expected Result

The API should:

* Accept the request
* Return the documented successful HTTP behaviour
* Return the expected response format
* Return the expected resource representation
* Conform to the expected response contract

## Positive Validation Flow

```text
Valid GET Request
      ↓
Successful Response
      ↓
Validate Status
      ↓
Validate Headers
      ↓
Validate JSON Structure
      ↓
Validate Response Data
      ↓
PASS
```

## Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 12. Resource Collection Testing

Collection testing applies to:

```text
GET /booking
```

## Objective

Verify that the endpoint returns a collection of booking identifiers.

## Expected Root Type

```text
Array
```

## Expected Item Structure

```json
{
  "bookingid": 123
}
```

## Expected Collection Structure

```json
[
  {
    "bookingid": 123
  },
  {
    "bookingid": 456
  }
]
```

## Validation Matrix

| Validation         | Expected |
| ------------------ | -------- |
| Root type          | Array    |
| Array item type    | Object   |
| `bookingid` exists | Yes      |
| `bookingid` type   | Number   |

## Collection Assertions

```javascript
pm.test("Response is an array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
});
```

```javascript
pm.test("Booking IDs use the expected structure", function () {
    const response = pm.response.json();

    response.forEach(function (booking) {
        pm.expect(booking).to.have.property("bookingid");
        pm.expect(booking.bookingid).to.be.a("number");
    });
});
```

An empty array may still conform to the response contract.

---

# 13. Single Resource Testing

Single resource testing applies to:

```text
GET /booking/{id}
```

## Request

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

## Expected Response Structure

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

## Required Validation

| Property                | Expected Type |
| ----------------------- | ------------- |
| `firstname`             | String        |
| `lastname`              | String        |
| `totalprice`            | Number        |
| `depositpaid`           | Boolean       |
| `bookingdates`          | Object        |
| `bookingdates.checkin`  | String        |
| `bookingdates.checkout` | String        |

## Validation Objective

Verify that the returned booking corresponds to the requested booking ID.

Where the booking was created during the test workflow, compare the response with the original request data.

---

# 14. Query Parameter Testing

Query parameters are appended to the endpoint URL.

Example:

```text
GET /booking?firstname=Filip
```

## Query Parameter Matrix

| Parameter   | Valid Value     | Invalid Variation          |
| ----------- | --------------- | -------------------------- |
| `firstname` | Valid firstname | Empty / Special characters |
| `lastname`  | Valid lastname  | Empty / Special characters |
| `checkin`   | Valid date      | Invalid date               |
| `checkout`  | Valid date      | Invalid date               |

## Validation Objective

Verify:

* Parameter is accepted
* Filter behaviour is applied
* Returned data satisfies the requested condition
* Empty result behaviour is handled
* Invalid parameter values do not cause unexpected server failure

---

# 15. Filter Testing

## Firstname Filter

```text
GET {{baseUrl}}/booking?firstname=[value]
```

## Lastname Filter

```text
GET {{baseUrl}}/booking?lastname=[value]
```

## Full Name Filter

```text
GET {{baseUrl}}/booking?firstname=[value]&lastname=[value]
```

## Check-in Filter

```text
GET {{baseUrl}}/booking?checkin=[date]
```

## Checkout Filter

```text
GET {{baseUrl}}/booking?checkout=[date]
```

## Filter Validation Flow

```text
Create Known Booking
      ↓
Store bookingId
      ↓
Execute Filter
      ↓
Retrieve Matching Booking IDs
      ↓
Verify bookingId Present
```

## Recommended Assertion

```javascript
pm.test("Created booking ID is present in filtered results", function () {
    const response = pm.response.json();
    const bookingId = Number(pm.environment.get("bookingId"));

    const bookingExists = response.some(function (booking) {
        return booking.bookingid === bookingId;
    });

    pm.expect(bookingExists).to.eql(true);
});
```

This provides stronger evidence than validating only that the response is an array.

---

# 16. Path Parameter Testing

Path parameter testing applies to:

```text
GET /booking/{id}
```

## Test Variations

| Condition          | Example              |
| ------------------ | -------------------- |
| Valid ID           | `/booking/123`       |
| Non-existing ID    | `/booking/999999999` |
| Negative ID        | `/booking/-1`        |
| Decimal ID         | `/booking/1.5`       |
| Alphabetic ID      | `/booking/abc`       |
| Special characters | `/booking/%40%23`    |
| Empty path value   | `/booking/`          |

## Validation Objective

Verify:

* Resource lookup behaviour
* HTTP status behaviour
* Error handling
* Server stability
* Response body behaviour

Each variation should be compared with the documented API behaviour.

---

# 17. Response Status Validation

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

with the expected status defined by the test case.

## Status Validation Record

| Field           | Value       |
| --------------- | ----------- |
| Expected Status | `[status]`  |
| Actual Status   | `[status]`  |
| Result          | PASS / FAIL |

Do not assume `200 OK` for every GET test.

Negative tests should validate their own expected behaviour.

---

# 18. Response Header Validation

## Content-Type Assertion

```javascript
pm.test("Content-Type header is present", function () {
    pm.response.to.have.header("Content-Type");
});
```

## JSON Content-Type Assertion

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

Only headers relevant to the API contract or test objective should be asserted.

---

# 19. Response Body Validation

## JSON Response Assertion

```javascript
pm.test("Response body is valid JSON", function () {
    pm.response.to.be.json;
});
```

## Non-Empty Response Assertion

```javascript
pm.test("Response body is not empty", function () {
    pm.expect(pm.response.text()).to.not.be.empty;
});
```

## Response Body Validation

| Validation             | Expected |
| ---------------------- | -------- |
| Response body present  | Yes / No |
| JSON response          | Yes / No |
| Root structure correct | Yes      |
| Required data present  | Yes      |

A non-empty body should only be required when defined by the expected API behaviour.

---

# 20. JSON Structure Validation

## Object Validation

```javascript
pm.test("Response root is an object", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("object");
});
```

## Array Validation

```javascript
pm.test("Response root is an array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
});
```

## Property Validation

```javascript
pm.test("Response contains expected properties", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("firstname");
    pm.expect(response).to.have.property("lastname");
    pm.expect(response).to.have.property("totalprice");
    pm.expect(response).to.have.property("depositpaid");
    pm.expect(response).to.have.property("bookingdates");
});
```

The assertion must match the endpoint response contract.

---

# 21. JSON Schema Validation

## Booking Response Schema Example

```javascript
const schema = {
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
};
```

## Schema Assertion

```javascript
pm.test("Response matches booking JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

## Schema Result

```text
[PASS / FAIL]
```

A schema assertion failure should be investigated before API defect classification.

---

# 22. Data Type Validation

## Postman Assertion

```javascript
pm.test("Booking properties use expected data types", function () {
    const response = pm.response.json();

    pm.expect(response.firstname).to.be.a("string");
    pm.expect(response.lastname).to.be.a("string");
    pm.expect(response.totalprice).to.be.a("number");
    pm.expect(response.depositpaid).to.be.a("boolean");
    pm.expect(response.bookingdates).to.be.an("object");
    pm.expect(response.bookingdates.checkin).to.be.a("string");
    pm.expect(response.bookingdates.checkout).to.be.a("string");
});
```

## Data Type Matrix

| Property       | Expected | Actual     | Result      |
| -------------- | -------- | ---------- | ----------- |
| `firstname`    | String   | `[Actual]` | PASS / FAIL |
| `lastname`     | String   | `[Actual]` | PASS / FAIL |
| `totalprice`   | Number   | `[Actual]` | PASS / FAIL |
| `depositpaid`  | Boolean  | `[Actual]` | PASS / FAIL |
| `bookingdates` | Object   | `[Actual]` | PASS / FAIL |

---

# 23. Response Data Validation

Response structure validation does not prove that the API returned the correct data.

## Request-Response Comparison

Where expected values are known:

```javascript
pm.test("Booking data matches expected values", function () {
    const response = pm.response.json();

    pm.expect(response.firstname).to.eql("Filip");
    pm.expect(response.lastname).to.eql("Jelinek");
    pm.expect(response.totalprice).to.eql(500);
    pm.expect(response.depositpaid).to.eql(true);
});
```

## Dynamic Comparison

```javascript
pm.test("Firstname matches test data", function () {
    const response = pm.response.json();
    const expectedFirstname = pm.environment.get("firstname");

    pm.expect(response.firstname).to.eql(expectedFirstname);
});
```

## Validation Model

```text
Correct JSON Structure
        ≠
Correct Response Data
```

Complete validation should include:

```text
Contract Validation
        +
Business Data Validation
```

---

# 24. Empty Result Testing

Filter requests may return an empty array.

Example:

```json
[]
```

## Objective

Verify API behaviour when no resources match the filter.

## Expected Validation

| Validation      | Expected |
| --------------- | -------- |
| Request handled | Yes      |
| Server error    | No       |
| Root type       | Array    |
| Result count    | 0        |

## Assertion

```javascript
pm.test("Response is an empty array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
    pm.expect(response.length).to.eql(0);
});
```

An empty array should not automatically be classified as a failed API request.

---

# 25. Non-Existing Resource Testing

## Request

```text
GET {{baseUrl}}/booking/[non-existing-id]
```

## Objective

Verify API behaviour when the requested booking does not exist.

## Validation

Record:

* HTTP status
* Response body
* Content-Type
* Server behaviour

## Result Record

| Field           | Value       |
| --------------- | ----------- |
| Booking ID      | `[value]`   |
| Expected Status | `[status]`  |
| Actual Status   | `[status]`  |
| Response Body   | `[value]`   |
| Result          | PASS / FAIL |

The non-existing ID should be selected carefully.

A high numeric value is not guaranteed to remain non-existing permanently in a shared public environment.

---

# 26. Invalid Path Parameter Testing

## Test Values

```text
abc
-1
1.5
null
%40%23
```

## Request Format

```text
GET {{baseUrl}}/booking/[invalid-value]
```

## Validation Objective

Verify:

* Request handling
* HTTP status
* Response body
* Error handling
* Server stability

## Result Matrix

| Path Value | HTTP Status | Response   | Result      |
| ---------- | ----------- | ---------- | ----------- |
| `abc`      | `[Actual]`  | `[Actual]` | PASS / FAIL |
| `-1`       | `[Actual]`  | `[Actual]` | PASS / FAIL |
| `1.5`      | `[Actual]`  | `[Actual]` | PASS / FAIL |
| `null`     | `[Actual]`  | `[Actual]` | PASS / FAIL |
| `%40%23`   | `[Actual]`  | `[Actual]` | PASS / FAIL |

Unexpected `5xx` responses should receive additional investigation.

---

# 27. Invalid Query Parameter Testing

## Invalid Date

```text
GET /booking?checkin=invalid-date
```

## Invalid Parameter Name

```text
GET /booking?unknown=value
```

## Empty Query Value

```text
GET /booking?firstname=
```

## Validation Objective

Verify:

* Unknown parameter handling
* Invalid value handling
* Empty value handling
* HTTP response behaviour
* Filter behaviour
* Server stability

## Result Matrix

| Condition         | Expected     | Actual     | Result      |
| ----------------- | ------------ | ---------- | ----------- |
| Invalid date      | `[Expected]` | `[Actual]` | PASS / FAIL |
| Unknown parameter | `[Expected]` | `[Actual]` | PASS / FAIL |
| Empty value       | `[Expected]` | `[Actual]` | PASS / FAIL |

---

# 28. Multiple Filter Testing

## Full Name Filter

```text
GET /booking?firstname=[firstname]&lastname=[lastname]
```

## Date Filter Combination

```text
GET /booking?checkin=[date]&checkout=[date]
```

## Validation Objective

Verify whether multiple filters are applied together.

## Recommended Validation

```text
Create Known Booking
      ↓
Execute Combined Filter
      ↓
Find bookingId
      ↓
GET Booking by ID
      ↓
Verify All Filter Conditions
```

## Filter Matrix

| Filter      | Expected Value | Actual Value | Result      |
| ----------- | -------------- | ------------ | ----------- |
| `firstname` | `[value]`      | `[value]`    | PASS / FAIL |
| `lastname`  | `[value]`      | `[value]`    | PASS / FAIL |

The test should verify filter semantics rather than only response status.

---

# 29. Duplicate Query Parameter Testing

Example:

```text
GET /booking?firstname=Filip&firstname=John
```

## Objective

Observe API behaviour when the same query parameter is provided more than once.

## Validation

Record:

* HTTP status
* Response body
* Which value appears to be applied
* Whether both values are applied
* Whether the parameter is rejected

## Result

```text
[Document observed behaviour.]
```

Duplicate parameter behaviour may be undocumented.

Undocumented behaviour should be recorded as an observation unless it conflicts with a defined requirement.

---

# 30. Special Character Testing

## Example Values

```text
O'Connor
Anne-Marie
Test%20User
@
#
&
```

## Objective

Verify query parameter handling for:

* Apostrophes
* Hyphens
* Encoded spaces
* Reserved characters
* URL encoding

## Validation Flow

```text
Prepare Test Value
      ↓
URL Encode if Required
      ↓
Send GET Request
      ↓
Review Filter Behaviour
      ↓
Review Server Response
```

## Result Matrix

| Value     | Encoded   | Status     | Result      |
| --------- | --------- | ---------- | ----------- |
| `[value]` | `[value]` | `[status]` | PASS / FAIL |

---

# 31. Case Sensitivity Testing

Example:

```text
firstname=Filip
```

Variation:

```text
firstname=filip
```

## Objective

Determine whether filter matching is case-sensitive.

## Validation

```text
Baseline Filter
      ↓
Record Results
      ↓
Change Character Case
      ↓
Execute Filter
      ↓
Compare Results
```

## Result

| Request Value | Result Count | Booking Found |
| ------------- | -----------: | ------------- |
| `Filip`       |    `[count]` | Yes / No      |
| `filip`       |    `[count]` | Yes / No      |

## Classification

```text
[Case-Sensitive / Case-Insensitive / Inconsistent]
```

If the API documentation does not define case sensitivity, record the result as observed behaviour.

---

# 32. GET Request Body Testing

GET requests normally do not require a request body for the Restful Booker retrieval endpoints.

## Test Request

```text
GET /booking
```

with body:

```json
{
  "test": "value"
}
```

## Objective

Observe API behaviour when a GET request contains a request body.

## Validation

Record:

* HTTP status
* Response body
* Whether the body appears to influence the response
* Whether the body is ignored
* Whether the request is rejected

## Important Note

This is an exploratory HTTP behaviour test.

The result should not automatically be classified as a defect unless the API contract defines required behaviour.

---

# 33. Data Persistence Verification

GET requests are used to verify data persistence after write operations.

## Create Verification

```text
POST /booking
      ↓
Store bookingId
      ↓
GET /booking/{id}
      ↓
Verify Created Data
```

## PUT Verification

```text
PUT /booking/{id}
      ↓
GET /booking/{id}
      ↓
Verify Full Update
```

## PATCH Verification

```text
PATCH /booking/{id}
      ↓
GET /booking/{id}
      ↓
Verify Selected Fields
```

## DELETE Verification

```text
DELETE /booking/{id}
      ↓
GET /booking/{id}
      ↓
Verify Resource Unavailable
```

GET therefore provides the primary resource-state verification mechanism for CRUD workflow testing.

---

# 34. Response Time Observation

Postman can validate or record response time.

## Observation Assertion

```javascript
pm.test("Response time is recorded", function () {
    pm.expect(pm.response.responseTime).to.be.a("number");
});
```

## Optional Threshold Assertion

```javascript
pm.test("Response time is below defined test threshold", function () {
    pm.expect(pm.response.responseTime).to.be.below([threshold]);
});
```

## Response Time Record

| Attempt | Response Time |
| ------- | ------------: |
| 1       |        `[ms]` |
| 2       |        `[ms]` |
| 3       |        `[ms]` |

## Important Limitation

Restful Booker is a public shared test API.

Response time observations are informational unless a project requirement explicitly defines a performance threshold.

This project should not claim formal performance testing based on Postman response time assertions.

---

# 35. Postman GET Assertions

## HTTP Status

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

## Root Object

```javascript
pm.test("Response root is an object", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("object");
});
```

## Root Array

```javascript
pm.test("Response root is an array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
});
```

## Required Property

```javascript
pm.test("Response contains firstname", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("firstname");
});
```

## Data Type

```javascript
pm.test("totalprice is a number", function () {
    const response = pm.response.json();

    pm.expect(response.totalprice).to.be.a("number");
});
```

## Booking ID Present in Results

```javascript
pm.test("Created booking is present in results", function () {
    const response = pm.response.json();
    const bookingId = Number(pm.environment.get("bookingId"));

    const bookingExists = response.some(function (booking) {
        return booking.bookingid === bookingId;
    });

    pm.expect(bookingExists).to.eql(true);
});
```

Assertions should be selected according to the objective and expected result of each test case.

---

# 36. GET Execution Result

## Execution Information

| Field             | Value                 |
| ----------------- | --------------------- |
| GET Test ID       | `GET-TEST-XXX`        |
| Test Case ID      | `TC-GET-XXX`          |
| Execution Date    | YYYY-MM-DD            |
| Postman Request   | `[Request Name]`      |
| Endpoint          | `[Endpoint]`          |
| HTTP Status       | `[Actual]`            |
| Assertions        | `[Count]`             |
| Failed Assertions | `[Count]`             |
| Schema Result     | PASS / FAIL / N/A     |
| Defect ID         | `BUG-API-XXX / —`     |
| Result            | PASS / FAIL / BLOCKED |

## Validation Result

| Validation      | Expected           | Actual     | Result            |
| --------------- | ------------------ | ---------- | ----------------- |
| HTTP Status     | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Response Format | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Root Structure  | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| JSON Schema     | `[Expected / N/A]` | `[Actual]` | PASS / FAIL / N/A |
| Response Data   | `[Expected]`       | `[Actual]` | PASS / FAIL       |
| Resource State  | `[Expected / N/A]` | `[Actual]` | PASS / FAIL / N/A |

## Overall Result

```text
[PASS / FAIL / BLOCKED]
```

## Execution Notes

```text
[Document actual GET test observations.]
```

---

# 37. GET Defect Analysis

A failed GET assertion does not automatically confirm an API defect.

## Potential Failure Sources

```text
Incorrect Expected Result
Incorrect Booking ID
Deleted Booking
Shared Environment Data Change
Incorrect Query Parameter
Incorrect URL Encoding
Incorrect Postman Assertion
Incorrect JSON Schema
Environment Variable Issue
API Contract Deviation
API Defect
```

## Investigation Flow

```text
GET Test FAIL
      ↓
Review Request URL
      ↓
Review Path Parameters
      ↓
Review Query Parameters
      ↓
Review Test Data
      ↓
Review API Documentation
      ↓
Review Response
      ↓
Review Assertions
      ↓
Re-execute Request
      ↓
Classify Root Cause
```

## Defect Analysis Record

| Field             | Value              |
| ----------------- | ------------------ |
| Test Case ID      | `TC-GET-XXX`       |
| Failed Validation | `[Validation]`     |
| Expected          | `[Expected]`       |
| Actual            | `[Actual]`         |
| Reproduced        | Yes / No           |
| Reproduction Rate | `[Rate]`           |
| Classification    | `[Classification]` |
| Defect ID         | `BUG-API-XXX / —`  |

## Analysis Conclusion

```text
[Document why the behaviour is or is not classified as an API defect.]
```

---

# 38. Evidence

GET testing evidence may include:

* Postman request configuration
* Query parameters
* Path parameters
* API response
* Postman assertions
* JSON Schema validation
* Filter results
* Resource state verification
* Collection Runner results
* Newman results

## Evidence Directory

```text
10_Evidence/Postman/GET/
```

## Evidence Naming Convention

```text
[TC-ID]_GET_[Description].png
```

Examples:

```text
TC-GET-001_GET_Ping.png
TC-GET-005_GET_Booking_IDs.png
TC-GET-012_GET_Booking_By_ID.png
TC-GET-018_GET_Firstname_Filter.png
```

## Evidence Record

| Evidence          | Path     |
| ----------------- | -------- |
| Request           | `[path]` |
| Response          | `[path]` |
| Assertions        | `[path]` |
| Schema Validation | `[path]` |

Evidence should show actual API behaviour.

---

# 39. GET Testing Limitations

This project performs functional and contract-oriented GET API testing.

## Included

```text
Resource Retrieval
Collection Retrieval
Path Parameter Testing
Query Parameter Testing
Filter Testing
Negative Testing
Boundary-Oriented Input Testing
Response Contract Validation
JSON Schema Validation
Response Data Validation
Resource State Verification
Response Time Observation
```

## Not Included

```text
Load Testing
Stress Testing
Soak Testing
Large-Scale Concurrency Testing
Infrastructure Monitoring
Database Validation
Server Log Analysis
Network Protocol Analysis
```

Response time observations are not presented as formal performance test results.

---

# 40. Maintenance

GET tests should remain synchronized with:

* API requirements
* API documentation
* Endpoint inventory
* Test scenarios
* Test cases
* JSON Schemas
* Postman collection
* Newman execution
* CI/CD workflow

## GET Test Change Flow

```text
GET Contract Change
      ↓
Requirements Review
      ↓
Endpoint Inventory Review
      ↓
Test Scenario Review
      ↓
Test Case Review
      ↓
JSON Schema Review
      ↓
Postman Assertion Review
      ↓
GET Regression Execution
```

## Maintenance Rules

1. Use documented endpoint behaviour as the primary contract source.
2. Use dedicated test data for deterministic filter testing.
3. Do not assume shared public booking data remains unchanged.
4. Validate response data, not only HTTP status.
5. Validate resource state after write operations using GET.
6. Review JSON Schemas when response contracts change.
7. Investigate failed assertions before defect classification.
8. Re-run affected GET tests after Postman collection changes.
9. Re-export the collection before Newman regression execution.
10. Keep evidence linked to actual execution results.

---

# 41. GET Testing Summary

**Project:** Restful Booker API Testing Project
**HTTP Method:** GET
**Test Tool:** Postman
**Execution Status:** `[Not Executed / PASS / FAIL]`

GET testing covers:

```text
GET /ping
      ↓
API Health Check

GET /booking
      ↓
Booking ID Collection

GET /booking/{id}
      ↓
Single Booking Retrieval
```

Filter testing covers:

```text
firstname
lastname
checkin
checkout
multiple filters
duplicate parameters
empty values
invalid values
special characters
case sensitivity
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
Required Properties
      ↓
Data Types
      ↓
JSON Schema
      ↓
Response Data
```

GET requests are also used as the primary resource-state verification mechanism:

```text
POST
 ↓
GET
 ↓
Verify Created Resource

PUT
 ↓
GET
 ↓
Verify Full Update

PATCH
 ↓
GET
 ↓
Verify Partial Update

DELETE
 ↓
GET
 ↓
Verify Resource Deletion
```

The complete GET validation model is:

```text
Request Validation
        +
Contract Validation
        +
Response Data Validation
        +
Resource State Verification
```

GET execution results are linked to:

```text
API Test Case
      ↓
Postman GET Request
      ↓
Postman Assertions
      ↓
JSON Schema Validation
      ↓
API Test Execution
      ↓
Defect Report, if required
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
**Status:** Template
