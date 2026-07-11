# API Negative Testing Template

**Project:** Restful Booker API Testing Project
**API:** Restful Booker
**Testing Type:** Negative API Testing
**Tool:** Postman
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Negative API Testing Overview](#2-negative-api-testing-overview)
* [3. Testing Objectives](#3-testing-objectives)
* [4. Negative Testing Strategy](#4-negative-testing-strategy)
* [5. Endpoint and Method Testing](#5-endpoint-and-method-testing)
* [6. Authentication Negative Testing](#6-authentication-negative-testing)
* [7. Authorization Negative Testing](#7-authorization-negative-testing)
* [8. Request Header Negative Testing](#8-request-header-negative-testing)
* [9. Path Parameter Negative Testing](#9-path-parameter-negative-testing)
* [10. Query Parameter Negative Testing](#10-query-parameter-negative-testing)
* [11. Request Body Negative Testing](#11-request-body-negative-testing)
* [12. Required Field Testing](#12-required-field-testing)
* [13. Data Type Validation](#13-data-type-validation)
* [14. Null and Empty Value Testing](#14-null-and-empty-value-testing)
* [15. String Field Negative Testing](#15-string-field-negative-testing)
* [16. Numeric Field Negative Testing](#16-numeric-field-negative-testing)
* [17. Boolean Field Negative Testing](#17-boolean-field-negative-testing)
* [18. Date Field Negative Testing](#18-date-field-negative-testing)
* [19. Nested Object Negative Testing](#19-nested-object-negative-testing)
* [20. JSON Structure Testing](#20-json-structure-testing)
* [21. Content-Type Negative Testing](#21-content-type-negative-testing)
* [22. HTTP Method Negative Testing](#22-http-method-negative-testing)
* [23. Resource State Negative Testing](#23-resource-state-negative-testing)
* [24. Response Validation](#24-response-validation)
* [25. Status Code Validation](#25-status-code-validation)
* [26. Error Message Validation](#26-error-message-validation)
* [27. Security-Oriented Negative Testing](#27-security-oriented-negative-testing)
* [28. Postman Test Scripts](#28-postman-test-scripts)
* [29. Negative Test Execution Record](#29-negative-test-execution-record)
* [30. Defect Reporting](#30-defect-reporting)
* [31. Negative Testing Checklist](#31-negative-testing-checklist)

---

# 1. Purpose

The purpose of this document is to provide a reusable template for performing **negative API testing**.

Negative testing verifies how an API behaves when it receives:

* Invalid input
* Missing input
* Malformed requests
* Incorrect data types
* Invalid authentication
* Unauthorized requests
* Invalid resource identifiers
* Unsupported HTTP methods
* Invalid headers
* Unexpected request structures
* Boundary-breaking values

The objective is not only to confirm that the API rejects invalid requests.

The tester should also verify that the API:

* Returns an appropriate HTTP status code
* Provides a controlled error response
* Does not modify application data unexpectedly
* Does not expose sensitive system information
* Remains available after invalid requests
* Maintains resource integrity

This template can be reused across all tested Restful Booker API endpoints.

---

# 2. Negative API Testing Overview

Negative API testing intentionally sends requests that violate expected API behavior or input requirements.

Example valid request:

```json id="f0j8ue"
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 450,
  "depositpaid": true
}
```

Example invalid request:

```json id="x1yd98"
{
  "firstname": 12345,
  "lastname": null,
  "totalprice": "invalid",
  "depositpaid": "yes"
}
```

Negative testing workflow:

```text id="rq8g4n"
Identify Valid Request
        │
        ▼
Identify Input Rules
        │
        ▼
Modify One Test Condition
        │
        ▼
Send Invalid Request
        │
        ▼
Validate Error Response
        │
        ▼
Verify Resource State
        │
        ▼
Document Actual Behavior
```

Whenever possible, only **one test condition should be changed per test case**.

This improves defect isolation and makes test results easier to analyze.

---

# 3. Testing Objectives

The primary objectives of negative API testing are to verify:

* Invalid requests are rejected
* Missing required data is handled correctly
* Invalid data types are detected
* Invalid authentication is rejected
* Unauthorized operations are prevented
* Malformed JSON does not crash the API
* Invalid IDs are handled correctly
* Unsupported HTTP methods are handled correctly
* Invalid headers are handled correctly
* Error responses are consistent
* Error messages do not expose sensitive data
* Invalid requests do not corrupt stored resources
* API availability is maintained

Negative testing should evaluate both:

```text id="z7lg29"
API Response
+
Resource State
```

A rejected request should not unexpectedly modify existing data.

---

# 4. Negative Testing Strategy

The recommended negative testing strategy is based on controlled request modification.

Start with a valid request:

```json id="3q8fmk"
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 450,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  },
  "additionalneeds": "Breakfast"
}
```

Modify one condition:

```json id="8y82vf"
{
  "firstname": 12345,
  "lastname": "Jelinek",
  "totalprice": 450,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  },
  "additionalneeds": "Breakfast"
}
```

Test condition:

```text id="v3ewd4"
firstname contains Number instead of String
```

Recommended execution process:

```text id="y34fq3"
1. Prepare valid request
2. Confirm valid request succeeds
3. Change one request condition
4. Send invalid request
5. Record HTTP status code
6. Record response body
7. Validate error handling
8. Verify resource state
9. Assign PASS or FAIL
10. Create bug report if required
```

---

# 5. Endpoint and Method Testing

Negative testing should be performed against each tested endpoint.

Example endpoints:

| HTTP Method | Endpoint        |
| ----------- | --------------- |
| POST        | `/auth`         |
| GET         | `/booking`      |
| GET         | `/booking/{id}` |
| POST        | `/booking`      |
| PUT         | `/booking/{id}` |
| PATCH       | `/booking/{id}` |
| DELETE      | `/booking/{id}` |

Endpoint negative testing scenarios:

| Test Scenario                     | Expected Result                        |
| --------------------------------- | -------------------------------------- |
| Invalid endpoint                  | Appropriate error response             |
| Misspelled endpoint               | Resource not found                     |
| Missing endpoint path             | Appropriate API behavior               |
| Extra path segment                | Appropriate error response             |
| Incorrect endpoint capitalization | API behavior documented                |
| Invalid resource ID               | Resource not found or request rejected |
| Missing resource ID               | Appropriate error response             |

Examples:

```http id="e87g2p"
GET /bookings
```

```http id="t50g54"
GET /Booking/1
```

```http id="lhqplj"
GET /booking/1/invalid
```

The actual API behavior should be documented.

---

# 6. Authentication Negative Testing

Authentication negative testing verifies that protected endpoints reject invalid authentication.

Test scenarios:

| Test ID      | Test Scenario                 | Expected Result         |
| ------------ | ----------------------------- | ----------------------- |
| AUTH_NEG_001 | Missing authentication        | Request rejected        |
| AUTH_NEG_002 | Invalid token                 | Request rejected        |
| AUTH_NEG_003 | Empty token                   | Request rejected        |
| AUTH_NEG_004 | Malformed token               | Request rejected        |
| AUTH_NEG_005 | Expired token                 | Request rejected        |
| AUTH_NEG_006 | Modified token                | Request rejected        |
| AUTH_NEG_007 | Token with leading spaces     | Appropriate behavior    |
| AUTH_NEG_008 | Token with trailing spaces    | Appropriate behavior    |
| AUTH_NEG_009 | Invalid username              | Authentication rejected |
| AUTH_NEG_010 | Invalid password              | Authentication rejected |
| AUTH_NEG_011 | Empty username                | Authentication rejected |
| AUTH_NEG_012 | Empty password                | Authentication rejected |
| AUTH_NEG_013 | Null username                 | Authentication rejected |
| AUTH_NEG_014 | Null password                 | Authentication rejected |
| AUTH_NEG_015 | Incorrect authentication type | Request rejected        |

Example invalid token:

```http id="ipqqcz"
Cookie: token=invalidtoken123
```

Example empty token:

```http id="th9uyj"
Cookie: token=
```

Example malformed authentication:

```http id="k79cza"
Cookie: invalid
```

The tester should verify that protected resources remain unchanged after unauthorized requests.

---

# 7. Authorization Negative Testing

Authorization testing verifies whether an authenticated client is permitted to perform a specific operation.

Potential scenarios:

* Authenticated user attempts restricted operation
* Invalid credentials used for resource modification
* Unauthorized PUT request
* Unauthorized PATCH request
* Unauthorized DELETE request
* Authentication removed after valid session
* Modified authentication data

Example:

```http id="ljil3a"
DELETE /booking/123
```

Without valid authentication.

Expected result:

```text id="36nx21"
Request rejected
Booking remains available
```

Verification:

```http id="biv05p"
GET /booking/123
```

The resource should remain unchanged.

---

# 8. Request Header Negative Testing

Request headers should be tested with invalid, missing, and unexpected values.

Test scenarios:

| Test Scenario                 | Expected Result                     |
| ----------------------------- | ----------------------------------- |
| Missing Content-Type          | Appropriate API behavior            |
| Invalid Content-Type          | Request rejected                    |
| Empty Content-Type            | Request rejected or documented      |
| Unsupported Content-Type      | Appropriate error response          |
| Missing Accept header         | API behavior documented             |
| Invalid Accept header         | Appropriate API behavior            |
| Duplicate Content-Type        | API behavior documented             |
| Invalid authentication header | Request rejected                    |
| Unexpected custom header      | Should not affect resource behavior |

Example invalid Content-Type:

```http id="s9wyc2"
Content-Type: text/plain
```

Example unsupported Content-Type:

```http id="38ugwn"
Content-Type: application/xml
```

Example invalid Accept header:

```http id="61ln3g"
Accept: image/png
```

Document both the API response and resource state.

---

# 9. Path Parameter Negative Testing

Path parameters should be tested using invalid values.

Example endpoint:

```http id="w1mxtu"
GET /booking/{id}
```

Test values:

| Value       | Test Type          |
| ----------- | ------------------ |
| `0`         | Boundary           |
| `-1`        | Negative           |
| `1.5`       | Decimal            |
| `abc`       | Alphabetic         |
| `ABC`       | Alphabetic         |
| `@#$`       | Special characters |
| `%20`       | Encoded space      |
| `null`      | String value       |
| `undefined` | String value       |
| `999999999` | Large number       |
| Empty value | Missing parameter  |

Examples:

```http id="jjp9s4"
GET /booking/-1
```

```http id="lj02s1"
GET /booking/abc
```

```http id="y3o5vw"
GET /booking/999999999
```

Validate:

* Status code
* Response body
* Response time
* Server stability
* Error consistency

---

# 10. Query Parameter Negative Testing

Query parameters should be tested using invalid names, values, and combinations.

Example:

```http id="qk3csm"
GET /booking?firstname=Filip
```

Negative scenarios:

| Test Scenario                   | Example                    |
| ------------------------------- | -------------------------- |
| Invalid parameter name          | `?invalid=test`            |
| Empty parameter value           | `?firstname=`              |
| Null-like value                 | `?firstname=null`          |
| Numeric value for string filter | `?firstname=123`           |
| Special characters              | `?firstname=@#$`           |
| Very long value                 | Long string                |
| Duplicate parameter             | `?firstname=A&firstname=B` |
| Invalid date                    | `?checkin=invalid`         |
| Invalid date range              | Checkout before check-in   |
| Unsupported parameter           | Unknown query field        |

Examples:

```http id="4faknh"
GET /booking?invalid=test
```

```http id="mng4tq"
GET /booking?firstname=
```

```http id="0vpeyk"
GET /booking?checkin=invalid-date
```

The API should not return unrelated or corrupted data due to invalid filters.

---

# 11. Request Body Negative Testing

Request body negative testing verifies how the API handles invalid payloads.

Test scenarios:

* Missing request body
* Empty request body
* Empty JSON object
* Malformed JSON
* JSON array instead of object
* String instead of object
* Number instead of object
* Boolean instead of object
* Duplicate fields
* Unknown fields
* Unexpected nested objects
* Excessive request data

Examples:

Empty JSON object:

```json id="74xx8j"
{}
```

JSON array:

```json id="nbvepf"
[
  "firstname",
  "lastname"
]
```

String body:

```json id="ctop1j"
"invalid request"
```

Number body:

```json id="hm6f4h"
12345
```

Malformed JSON:

```text id="v59u08"
{
  "firstname": "Filip",
  "lastname": "Jelinek"
```

The API should handle malformed input without exposing internal server errors.

---

# 12. Required Field Testing

Each required field should be removed individually.

Example valid request:

```json id="5o0azb"
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 450,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  }
}
```

Test scenarios:

| Test ID     | Missing Field         |
| ----------- | --------------------- |
| REQ_NEG_001 | firstname             |
| REQ_NEG_002 | lastname              |
| REQ_NEG_003 | totalprice            |
| REQ_NEG_004 | depositpaid           |
| REQ_NEG_005 | bookingdates          |
| REQ_NEG_006 | bookingdates.checkin  |
| REQ_NEG_007 | bookingdates.checkout |

Example missing firstname:

```json id="z3p0hm"
{
  "lastname": "Jelinek",
  "totalprice": 450,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  }
}
```

Only one required field should be removed per test case.

---

# 13. Data Type Validation

Each field should be tested with an incorrect data type.

Expected booking field types:

| Field           | Expected Type |
| --------------- | ------------- |
| firstname       | String        |
| lastname        | String        |
| totalprice      | Number        |
| depositpaid     | Boolean       |
| bookingdates    | Object        |
| checkin         | String        |
| checkout        | String        |
| additionalneeds | String        |

Negative test matrix:

| Field           | Invalid Type |
| --------------- | ------------ |
| firstname       | Number       |
| firstname       | Boolean      |
| firstname       | Object       |
| lastname        | Number       |
| totalprice      | String       |
| totalprice      | Boolean      |
| depositpaid     | String       |
| depositpaid     | Number       |
| bookingdates    | String       |
| bookingdates    | Array        |
| checkin         | Number       |
| checkout        | Boolean      |
| additionalneeds | Object       |

Example:

```json id="j99fxq"
{
  "firstname": 12345
}
```

Example:

```json id="zj69p7"
{
  "totalprice": "450"
}
```

Example:

```json id="j2r6xq"
{
  "depositpaid": "true"
}
```

Actual API type coercion behavior should be documented.

---

# 14. Null and Empty Value Testing

Null and empty values should be tested separately.

These values are not equivalent:

```json id="alw5hg"
{
  "firstname": null
}
```

```json id="7ltxk6"
{
  "firstname": ""
}
```

```json id="nnftfk"
{
  "firstname": " "
}
```

Test values:

| Value         | Description           |
| ------------- | --------------------- |
| `null`        | Null value            |
| `""`          | Empty string          |
| `" "`         | Single space          |
| `"   "`       | Multiple spaces       |
| Missing field | Property not provided |

Test each required field independently.

Validate whether the API:

* Rejects the value
* Accepts the value
* Converts the value
* Stores the value
* Returns an error

Unexpected acceptance should be documented.

---

# 15. String Field Negative Testing

String fields should be tested with unusual and potentially invalid input.

Test values:

* Empty string
* Space-only string
* Very long string
* Numeric characters
* Special characters
* Unicode characters
* Emoji
* Newline characters
* Tab characters
* Leading spaces
* Trailing spaces
* HTML-like content
* Script-like content

Examples:

```json id="78c1ly"
{
  "firstname": ""
}
```

```json id="n0x2v3"
{
  "firstname": "   "
}
```

```json id="wd8jcr"
{
  "firstname": "!@#$%^&*()"
}
```

```json id="a8i8av"
{
  "firstname": "测试"
}
```

```json id="cq33zr"
{
  "firstname": "😀"
}
```

```json id="uhwrf8"
{
  "firstname": "<script>alert('test')</script>"
}
```

The purpose is to validate input handling and response behavior.

---

# 16. Numeric Field Negative Testing

Example numeric field:

```text id="dz4d4w"
totalprice
```

Test values:

| Value       | Test Type      |
| ----------- | -------------- |
| `0`         | Boundary       |
| `-1`        | Negative       |
| `-999999`   | Large negative |
| `999999999` | Large positive |
| `1.5`       | Decimal        |
| `"450"`     | String         |
| `"abc"`     | Invalid string |
| `true`      | Boolean        |
| `null`      | Null           |

Examples:

```json id="t5dx02"
{
  "totalprice": -1
}
```

```json id="rrr3fo"
{
  "totalprice": "invalid"
}
```

Validate whether the API performs unexpected type conversion.

---

# 17. Boolean Field Negative Testing

Example Boolean field:

```text id="cyyxcm"
depositpaid
```

Expected values:

```text id="46z1v8"
true
false
```

Negative values:

```text id="64zwn5"
"true"
"false"
1
0
"yes"
"no"
null
[]
{}
```

Example:

```json id="axf8lv"
{
  "depositpaid": "yes"
}
```

Validate:

* HTTP status code
* Response value
* Stored value
* Type conversion behavior

If the API accepts an invalid type, verify how the value is stored.

---

# 18. Date Field Negative Testing

Booking date fields:

```text id="3n04zt"
bookingdates.checkin
bookingdates.checkout
```

Test scenarios:

| Test Scenario            | Example            |
| ------------------------ | ------------------ |
| Invalid format           | `15-07-2026`       |
| Invalid text             | `invalid-date`     |
| Impossible date          | `2026-02-30`       |
| Invalid month            | `2026-13-10`       |
| Invalid day              | `2026-07-32`       |
| Empty date               | `""`               |
| Space-only date          | `" "`              |
| Null date                | `null`             |
| Numeric date             | `20260715`         |
| Checkout before check-in | Invalid date range |
| Same dates               | Boundary           |
| Extremely old date       | Historical value   |
| Extremely future date    | Future boundary    |

Example:

```json id="n85m1b"
{
  "bookingdates": {
    "checkin": "invalid-date",
    "checkout": "2026-07-20"
  }
}
```

Example invalid range:

```json id="mxrllk"
{
  "bookingdates": {
    "checkin": "2026-07-20",
    "checkout": "2026-07-15"
  }
}
```

Document actual validation behavior.

---

# 19. Nested Object Negative Testing

The `bookingdates` object should be tested separately.

Valid structure:

```json id="o04fc6"
{
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  }
}
```

Negative structures:

Missing nested object:

```json id="qz5xou"
{
  "bookingdates": null
}
```

String instead of object:

```json id="dxqztj"
{
  "bookingdates": "2026-07-15"
}
```

Array instead of object:

```json id="du76sp"
{
  "bookingdates": []
}
```

Missing check-in:

```json id="3j25bs"
{
  "bookingdates": {
    "checkout": "2026-07-20"
  }
}
```

Missing check-out:

```json id="uw4iwc"
{
  "bookingdates": {
    "checkin": "2026-07-15"
  }
}
```

Unknown nested field:

```json id="fkr4io"
{
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20",
    "invalid": "test"
  }
}
```

Nested object validation is particularly important for POST, PUT, and PATCH requests.

---

# 20. JSON Structure Testing

JSON syntax and structure should be tested using malformed payloads.

Examples:

Missing closing brace:

```text id="avmgx4"
{
  "firstname": "Filip"
```

Missing comma:

```text id="pucuej"
{
  "firstname": "Filip"
  "lastname": "Jelinek"
}
```

Single quotes:

```text id="2qqipm"
{
  'firstname': 'Filip'
}
```

Duplicate field:

```json id="6ozc0c"
{
  "firstname": "Filip",
  "firstname": "James"
}
```

Incorrect nesting:

```json id="11fem4"
{
  "firstname": {
    "lastname": "Jelinek"
  }
}
```

Validate:

* API does not crash
* Controlled response returned
* Error response does not expose stack traces
* Resource is not created or modified unexpectedly

---

# 21. Content-Type Negative Testing

Content-Type validation should be performed on endpoints accepting request bodies.

Valid header:

```http id="b3o0o6"
Content-Type: application/json
```

Negative values:

```http id="2y9lg1"
Content-Type: text/plain
```

```http id="zydk3s"
Content-Type: application/xml
```

```http id="eclskk"
Content-Type: text/html
```

```http id="x52bgv"
Content-Type: image/png
```

Test scenarios:

| Test Scenario        | Expected Result      |
| -------------------- | -------------------- |
| Missing Content-Type | Appropriate response |
| Empty Content-Type   | Appropriate response |
| text/plain           | Request rejected     |
| application/xml      | Request rejected     |
| text/html            | Request rejected     |
| Invalid custom value | Request rejected     |

Document whether the API incorrectly processes JSON data with an unsupported Content-Type.

---

# 22. HTTP Method Negative Testing

Each endpoint should be tested with unsupported HTTP methods.

Example endpoint:

```http id="yx6rv0"
/booking/{id}
```

Test:

```text id="hw6p65"
GET
POST
PUT
PATCH
DELETE
HEAD
OPTIONS
```

Example:

```http id="z3hdzr"
POST /booking/1
```

If the endpoint does not support POST for a booking ID, an appropriate error response should be returned.

Possible expected status:

```text id="2hcr5e"
405 Method Not Allowed
```

The actual Restful Booker behavior should be documented.

---

# 23. Resource State Negative Testing

Negative testing should verify that failed requests do not modify application data.

Example workflow:

```text id="nv5q1d"
GET Original Resource
        │
        ▼
Store Original Data
        │
        ▼
Send Invalid PUT / PATCH / DELETE
        │
        ▼
Receive Error Response
        │
        ▼
Send GET Request
        │
        ▼
Compare Resource Data
```

Expected result:

```text id="mt3p10"
Original Resource = Resource After Failed Request
```

Validate:

* firstname unchanged
* lastname unchanged
* totalprice unchanged
* depositpaid unchanged
* bookingdates unchanged
* additionalneeds unchanged

This validation is especially important for:

* Unauthorized PUT
* Unauthorized PATCH
* Unauthorized DELETE
* Invalid PUT
* Invalid PATCH

---

# 24. Response Validation

Every negative test should validate the API response.

Validation areas:

* HTTP status code
* Response time
* Response headers
* Content-Type
* Error response body
* Error message
* Response structure
* Sensitive data exposure
* Stack trace exposure
* Internal server information
* Resource state

Example validation workflow:

```text id="3v4m7a"
Send Invalid Request
        │
        ▼
Validate Status Code
        │
        ▼
Validate Error Response
        │
        ▼
Review Sensitive Information
        │
        ▼
Verify Resource State
        │
        ▼
Record Test Result
```

---

# 25. Status Code Validation

Common negative API status codes:

| Status Code                  | Meaning                 | Typical Usage             |
| ---------------------------- | ----------------------- | ------------------------- |
| `400 Bad Request`            | Invalid request         | Invalid payload           |
| `401 Unauthorized`           | Authentication required | Missing credentials       |
| `403 Forbidden`              | Access denied           | Invalid credentials       |
| `404 Not Found`              | Resource not found      | Invalid ID                |
| `405 Method Not Allowed`     | Unsupported HTTP method | Invalid method            |
| `409 Conflict`               | Resource conflict       | State conflict            |
| `415 Unsupported Media Type` | Invalid Content-Type    | Unsupported body format   |
| `422 Unprocessable Entity`   | Validation failure      | Semantically invalid data |
| `429 Too Many Requests`      | Rate limit exceeded     | Excessive requests        |
| `500 Internal Server Error`  | Server failure          | Unexpected server error   |

A `500 Internal Server Error` returned for simple invalid user input should be investigated.

The expected result should be based on API requirements and documented behavior.

---

# 26. Error Message Validation

Error responses should be evaluated for quality and consistency.

Validate:

* Error message exists
* Message is understandable
* Message matches the failure condition
* Error structure is consistent
* Sensitive data is not exposed
* Stack traces are not exposed
* Database information is not exposed
* Internal file paths are not exposed
* Server configuration is not exposed

Potential problematic response:

```text id="z40zy6"
NullPointerException at BookingService.java:142
```

Potential problematic response:

```text id="d9x1by"
SQL syntax error near booking_table
```

Potential problematic response:

```text id="mx8h5m"
C:\server\application\booking\service.js
```

Such responses may expose internal implementation details.

---

# 27. Security-Oriented Negative Testing

Negative API testing can include basic security-oriented input validation checks.

The purpose is to evaluate API robustness and error handling within the authorized test environment.

Test input examples:

HTML-like input:

```json id="vy2df8"
{
  "firstname": "<b>Filip</b>"
}
```

Script-like input:

```json id="q0q16j"
{
  "firstname": "<script>alert('test')</script>"
}
```

SQL-like text:

```json id="8cq3a2"
{
  "firstname": "' OR '1'='1"
}
```

Path-like text:

```json id="q3btce"
{
  "firstname": "../../test"
}
```

Test objectives:

* Verify controlled API response
* Verify server stability
* Verify input storage behavior
* Verify response encoding
* Verify no internal error exposure
* Verify unrelated resources remain unaffected

Only test systems and APIs for which testing is authorized.

---

# 28. Postman Test Scripts

## Validate Request Is Rejected

```javascript id="01u9m6"
pm.test("Invalid request is rejected", function () {
    pm.expect(pm.response.code).to.be.oneOf([
        400,
        401,
        403,
        404,
        405,
        415,
        422
    ]);
});
```

---

## Validate Response Is Not Successful

```javascript id="gtb2xe"
pm.test("Response is not successful", function () {
    pm.expect(pm.response.code).to.not.be.within(200, 299);
});
```

---

## Validate Server Does Not Return 500

```javascript id="3p5hzy"
pm.test("Server does not return Internal Server Error", function () {
    pm.expect(pm.response.code).to.not.eql(500);
});
```

---

## Validate Response Time

```javascript id="f9n0ct"
pm.test("Response time is below 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
```

---

## Validate Error Response Exists

```javascript id="nxeb29"
pm.test("Error response body is returned", function () {
    pm.expect(pm.response.text()).to.not.be.empty;
});
```

---

## Validate No Stack Trace Exposure

```javascript id="3xl4kj"
pm.test("Response does not expose stack trace", function () {
    const responseText = pm.response.text().toLowerCase();

    pm.expect(responseText).to.not.include("exception at");
    pm.expect(responseText).to.not.include("stack trace");
});
```

---

## Validate No SQL Error Exposure

```javascript id="d84x93"
pm.test("Response does not expose SQL errors", function () {
    const responseText = pm.response.text().toLowerCase();

    pm.expect(responseText).to.not.include("sql syntax");
    pm.expect(responseText).to.not.include("database error");
});
```

---

## Validate Unauthorized Request

```javascript id="ksf0bz"
pm.test("Unauthorized request is rejected", function () {
    pm.expect(pm.response.code).to.be.oneOf([
        401,
        403
    ]);
});
```

---

# 29. Negative Test Execution Record

Use the following structure to document negative API test execution.

| Field                   | Value                 |
| ----------------------- | --------------------- |
| Test ID                 | NEG_XXX               |
| Test Date               | YYYY-MM-DD            |
| Tester                  | Filip Jelinek         |
| HTTP Method             |                       |
| Endpoint                |                       |
| Negative Test Category  |                       |
| Test Condition          |                       |
| Authentication          |                       |
| Request Headers         |                       |
| Request Body            |                       |
| Expected Status         |                       |
| Actual Status           |                       |
| Expected Result         |                       |
| Actual Result           |                       |
| Resource State Verified | Yes / No / N/A        |
| Response Time           |                       |
| Test Status             | PASS / FAIL / BLOCKED |
| Bug ID                  |                       |
| Evidence                |                       |
| Notes                   |                       |

Example:

| Field                   | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| Test ID                 | NEG_001                                                 |
| Test Date               | 2026-07-11                                              |
| Tester                  | Filip Jelinek                                           |
| HTTP Method             | POST                                                    |
| Endpoint                | `/booking`                                              |
| Negative Test Category  | Data Type Validation                                    |
| Test Condition          | totalprice contains String instead of Number            |
| Authentication          | N/A                                                     |
| Request Headers         | Content-Type: application/json                          |
| Request Body            | `"totalprice": "invalid"`                               |
| Expected Status         | 400                                                     |
| Actual Status           | 500                                                     |
| Expected Result         | Invalid data type rejected with controlled client error |
| Actual Result           | API returns Internal Server Error                       |
| Resource State Verified | Yes                                                     |
| Response Time           | 310 ms                                                  |
| Test Status             | FAIL                                                    |
| Bug ID                  | BUG_API_XXX                                             |
| Evidence                | Postman response screenshot                             |
| Notes                   | Server error returned for invalid client input          |

---

# 30. Defect Reporting

Unexpected negative testing behavior should be documented in a bug report.

Example defect title:

```text id="9ahf3j"
POST /booking returns 500 Internal Server Error when totalprice contains invalid data type
```

Bug report structure:

```text id="u78d3q"
Bug ID: BUG_API_XXX

Title:
POST /booking returns 500 Internal Server Error when totalprice contains invalid data type

Environment:
Restful Booker API

Endpoint:
POST /booking

Test Category:
Negative Testing - Data Type Validation

Request Headers:
Content-Type: application/json
Accept: application/json

Request Body:
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": "invalid",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  },
  "additionalneeds": "Breakfast"
}

Steps to Reproduce:
1. Open Postman.
2. Create a POST request to /booking.
3. Configure Content-Type as application/json.
4. Set totalprice to a String value.
5. Send the request.
6. Observe the response.

Expected Result:
The API should reject the invalid data type and return a controlled client error response.

Actual Result:
The API returns 500 Internal Server Error.

Severity:
Medium

Priority:
Medium

Reproducibility:
100%
```

Potential defect indicators include:

* Invalid request accepted unexpectedly
* `500 Internal Server Error` caused by simple invalid input
* Unauthorized resource modification
* Unauthorized resource deletion
* Incorrect resource modified
* Invalid data stored
* Resource corruption
* Sensitive system information exposed
* Inconsistent error responses
* Successful status returned for failed operation

---

# 31. Negative Testing Checklist

## Test Preparation

* [ ] Valid baseline request prepared
* [ ] Valid request successfully executed
* [ ] Test resource identified
* [ ] Original resource state recorded
* [ ] Environment variables configured
* [ ] One negative condition selected per test

## Endpoint Testing

* [ ] Invalid endpoint tested
* [ ] Misspelled endpoint tested
* [ ] Incorrect capitalization tested
* [ ] Extra path segment tested
* [ ] Missing path parameter tested

## Authentication and Authorization

* [ ] Missing authentication tested
* [ ] Invalid token tested
* [ ] Empty token tested
* [ ] Malformed token tested
* [ ] Modified token tested
* [ ] Invalid username tested
* [ ] Invalid password tested
* [ ] Empty credentials tested
* [ ] Null credentials tested
* [ ] Unauthorized PUT tested
* [ ] Unauthorized PATCH tested
* [ ] Unauthorized DELETE tested
* [ ] Resource state verified after unauthorized request

## Header Testing

* [ ] Missing Content-Type tested
* [ ] Invalid Content-Type tested
* [ ] Empty Content-Type tested
* [ ] Unsupported Content-Type tested
* [ ] Missing Accept header tested
* [ ] Invalid Accept header tested
* [ ] Invalid authentication header tested
* [ ] Unexpected header tested

## Path Parameter Testing

* [ ] Zero ID tested
* [ ] Negative ID tested
* [ ] Decimal ID tested
* [ ] Alphabetic ID tested
* [ ] Special characters tested
* [ ] Encoded space tested
* [ ] Null-like value tested
* [ ] Undefined-like value tested
* [ ] Large ID tested
* [ ] Empty ID tested

## Query Parameter Testing

* [ ] Invalid parameter name tested
* [ ] Empty parameter value tested
* [ ] Null-like value tested
* [ ] Invalid data type tested
* [ ] Special characters tested
* [ ] Long value tested
* [ ] Duplicate parameter tested
* [ ] Invalid date tested
* [ ] Invalid date range tested
* [ ] Unsupported parameter tested

## Request Body Testing

* [ ] Missing body tested
* [ ] Empty body tested
* [ ] Empty JSON object tested
* [ ] Malformed JSON tested
* [ ] JSON array tested
* [ ] String body tested
* [ ] Number body tested
* [ ] Boolean body tested
* [ ] Duplicate fields tested
* [ ] Unknown fields tested
* [ ] Unexpected nested object tested

## Required Fields

* [ ] Missing firstname tested
* [ ] Missing lastname tested
* [ ] Missing totalprice tested
* [ ] Missing depositpaid tested
* [ ] Missing bookingdates tested
* [ ] Missing checkin tested
* [ ] Missing checkout tested

## Data Type Validation

* [ ] firstname invalid type tested
* [ ] lastname invalid type tested
* [ ] totalprice invalid type tested
* [ ] depositpaid invalid type tested
* [ ] bookingdates invalid type tested
* [ ] checkin invalid type tested
* [ ] checkout invalid type tested
* [ ] additionalneeds invalid type tested

## Null and Empty Values

* [ ] Null values tested
* [ ] Empty strings tested
* [ ] Single spaces tested
* [ ] Multiple spaces tested
* [ ] Missing fields compared with null values

## String Validation

* [ ] Empty string tested
* [ ] Space-only string tested
* [ ] Long string tested
* [ ] Numeric characters tested
* [ ] Special characters tested
* [ ] Unicode tested
* [ ] Emoji tested
* [ ] Leading spaces tested
* [ ] Trailing spaces tested
* [ ] HTML-like input tested
* [ ] Script-like input tested

## Numeric Validation

* [ ] Zero tested
* [ ] Negative number tested
* [ ] Large negative number tested
* [ ] Large positive number tested
* [ ] Decimal tested
* [ ] Numeric string tested
* [ ] Invalid string tested
* [ ] Boolean tested
* [ ] Null tested

## Boolean Validation

* [ ] true tested
* [ ] false tested
* [ ] String `"true"` tested
* [ ] String `"false"` tested
* [ ] Numeric `1` tested
* [ ] Numeric `0` tested
* [ ] `"yes"` tested
* [ ] `"no"` tested
* [ ] Null tested
* [ ] Array tested
* [ ] Object tested

## Date Validation

* [ ] Invalid date format tested
* [ ] Invalid text tested
* [ ] Impossible date tested
* [ ] Invalid month tested
* [ ] Invalid day tested
* [ ] Empty date tested
* [ ] Space-only date tested
* [ ] Null date tested
* [ ] Numeric date tested
* [ ] Checkout before check-in tested
* [ ] Same check-in and check-out tested
* [ ] Historical date tested
* [ ] Far future date tested

## Nested Object Testing

* [ ] Null bookingdates tested
* [ ] String bookingdates tested
* [ ] Array bookingdates tested
* [ ] Missing checkin tested
* [ ] Missing checkout tested
* [ ] Unknown nested field tested
* [ ] Invalid nested field types tested

## HTTP Method Testing

* [ ] Unsupported GET tested
* [ ] Unsupported POST tested
* [ ] Unsupported PUT tested
* [ ] Unsupported PATCH tested
* [ ] Unsupported DELETE tested
* [ ] HEAD behavior documented
* [ ] OPTIONS behavior documented

## Response Validation

* [ ] HTTP status validated
* [ ] Response time validated
* [ ] Response headers validated
* [ ] Content-Type validated
* [ ] Error response body validated
* [ ] Error message reviewed
* [ ] Error consistency reviewed
* [ ] Stack trace exposure reviewed
* [ ] SQL error exposure reviewed
* [ ] Internal path exposure reviewed
* [ ] Sensitive information exposure reviewed

## Resource Integrity

* [ ] Original resource state recorded
* [ ] Invalid request executed
* [ ] GET verification executed
* [ ] Resource data compared
* [ ] Unauthorized modification excluded
* [ ] Unauthorized deletion excluded
* [ ] Unrelated resources remain unaffected

## Documentation

* [ ] Actual response recorded
* [ ] Actual status code recorded
* [ ] Response time recorded
* [ ] Evidence captured
* [ ] Unexpected behavior investigated
* [ ] Failed test linked to bug report
* [ ] Bug ID recorded
* [ ] Final test status assigned

---

# Conclusion

This negative testing template provides a structured approach for evaluating API behavior when invalid, malformed, unauthorized, or unexpected requests are submitted to the Restful Booker API.

The template covers:

* Endpoint validation
* Authentication and authorization testing
* Header validation
* Path parameter validation
* Query parameter validation
* Request body validation
* Required field testing
* Data type validation
* Null and empty value testing
* String validation
* Numeric validation
* Boolean validation
* Date validation
* Nested object validation
* JSON structure testing
* Content-Type validation
* HTTP method testing
* Resource integrity verification
* Error response validation
* Basic security-oriented negative testing
* Postman test automation
* Test execution documentation
* Defect reporting

The primary objective of negative testing is to confirm that invalid requests are handled in a controlled and predictable manner without causing unauthorized data changes, resource corruption, sensitive information exposure, or API instability.

Whenever possible, each negative test case should modify only one test condition from a confirmed valid baseline request.

This approach improves defect isolation, reproducibility, and test result analysis.

This template can be reused as a standard negative testing reference throughout the Restful Booker API Testing Project.
