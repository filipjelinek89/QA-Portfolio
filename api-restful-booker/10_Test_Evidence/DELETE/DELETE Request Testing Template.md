# DELETE Request Testing Template

**Project:** Restful Booker API Testing Project
**API:** Restful Booker
**Request Method:** DELETE
**Testing Type:** Manual API Testing
**Tool:** Postman
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. DELETE Request Overview](#2-delete-request-overview)
* [3. Endpoint Information](#3-endpoint-information)
* [4. Authentication Requirements](#4-authentication-requirements)
* [5. Request Headers](#5-request-headers)
* [6. Request Body](#6-request-body)
* [7. Test Data Preparation](#7-test-data-preparation)
* [8. Positive Testing](#8-positive-testing)
* [9. Negative Testing](#9-negative-testing)
* [10. Resource Deletion Validation](#10-resource-deletion-validation)
* [11. GET After DELETE Validation](#11-get-after-delete-validation)
* [12. Repeated DELETE Testing](#12-repeated-delete-testing)
* [13. Booking ID Validation](#13-booking-id-validation)
* [14. Response Validation](#14-response-validation)
* [15. Status Code Validation](#15-status-code-validation)
* [16. Response Header Validation](#16-response-header-validation)
* [17. Response Body Validation](#17-response-body-validation)
* [18. Data Persistence Validation](#18-data-persistence-validation)
* [19. Postman Test Script](#19-postman-test-script)
* [20. Postman Deletion Workflow](#20-postman-deletion-workflow)
* [21. Test Execution Record](#21-test-execution-record)
* [22. Defect Reporting](#22-defect-reporting)
* [23. Testing Checklist](#23-testing-checklist)

---

# 1. Purpose

The purpose of this document is to provide a reusable testing template for validating **DELETE API requests**.

DELETE requests are used to remove an existing resource from the API.

For the Restful Booker API, the DELETE booking endpoint is used to remove an existing booking identified by its booking ID.

The testing process verifies:

* Successful resource deletion
* Authentication requirements
* Request header validation
* Booking ID handling
* HTTP status codes
* Response headers
* Response body behavior
* Resource availability before deletion
* Resource unavailability after deletion
* Repeated DELETE request behavior
* Data persistence
* Error handling
* API behavior with invalid input

A successful DELETE response alone should not be considered sufficient evidence that the resource was permanently deleted.

The deleted resource should be verified using a subsequent GET request.

---

# 2. DELETE Request Overview

The HTTP `DELETE` method is used to remove an existing API resource.

Example:

```http
DELETE /booking/{id}
```

The request attempts to delete a booking identified by the booking ID.

Typical DELETE request flow:

```text
Client
  │
  │ DELETE /booking/{id}
  │ Authentication
  │ Headers
  ▼
API Server
  │
  │ Validate Authentication
  │ Validate Booking ID
  │ Locate Booking
  │ Delete Booking
  ▼
HTTP Response
```

Deletion verification flow:

```text
GET Existing Booking
        │
        ▼
Confirm Resource Exists
        │
        ▼
Send DELETE Request
        │
        ▼
Validate DELETE Response
        │
        ▼
Send GET Request
        │
        ▼
Confirm Resource Is Unavailable
```

The final GET verification is an important part of DELETE request testing.

---

# 3. Endpoint Information

| Field                   | Value                                  |
| ----------------------- | -------------------------------------- |
| API                     | Restful Booker                         |
| HTTP Method             | DELETE                                 |
| Endpoint                | `/booking/{id}`                        |
| Base URL                | `https://restful-booker.herokuapp.com` |
| Authentication          | Token or Basic Authentication          |
| Request Body            | Not required                           |
| Expected Success Status | `201 Created`                          |

Example request:

```http
DELETE https://restful-booker.herokuapp.com/booking/1
```

The `{id}` path parameter represents the booking resource that will be deleted.

> **Note:** Restful Booker may return `201 Created` for a successful DELETE request. This is unusual compared with common REST API conventions, where `200 OK`, `202 Accepted`, or `204 No Content` are frequently used for successful deletion.

The actual API behavior should be recorded during test execution.

---

# 4. Authentication Requirements

The DELETE booking endpoint requires authentication.

Supported authentication methods include:

* Token authentication
* Basic Authentication

Example token header:

```http
Cookie: token={{authToken}}
```

Example Basic Authentication:

```text
Username: admin
Password: password123
```

Authentication testing should verify:

| Test Scenario                | Expected Result  |
| ---------------------------- | ---------------- |
| Valid token                  | Request accepted |
| Valid Basic Authentication   | Request accepted |
| Missing authentication       | Request rejected |
| Invalid token                | Request rejected |
| Expired token                | Request rejected |
| Empty token                  | Request rejected |
| Malformed token              | Request rejected |
| Invalid Basic Authentication | Request rejected |

Authentication failure behavior should be documented during test execution.

The tester should validate both the HTTP status code and whether the booking remains available after an unauthorized DELETE attempt.

---

# 5. Request Headers

Typical DELETE request headers:

```http
Accept: application/json
Cookie: token={{authToken}}
```

If Basic Authentication is used, authentication may be configured directly in Postman.

Header validation should include:

| Test Scenario                 | Expected Result          |
| ----------------------------- | ------------------------ |
| Valid authentication header   | Request accepted         |
| Missing authentication header | Request rejected         |
| Invalid authentication header | Request rejected         |
| Empty authentication token    | Request rejected         |
| Malformed Cookie header       | Request rejected         |
| Valid Accept header           | Request processed        |
| Missing Accept header         | API behavior documented  |
| Invalid Accept header         | Appropriate API behavior |

Unlike POST, PUT, and PATCH requests, DELETE normally does not require:

```http
Content-Type: application/json
```

when no request body is submitted.

---

# 6. Request Body

The Restful Booker DELETE booking endpoint does not normally require a request body.

Standard request:

```http
DELETE /booking/1
```

Request body:

```text
None
```

Testing should verify API behavior when unexpected request bodies are submitted.

Example empty JSON body:

```json
{}
```

Example unexpected JSON body:

```json
{
  "firstname": "Filip"
}
```

Possible test scenarios:

| Test Scenario         | Expected Result                  |
| --------------------- | -------------------------------- |
| No request body       | Request processed                |
| Empty JSON body       | API behavior documented          |
| Unexpected valid JSON | Body ignored or request rejected |
| Malformed JSON        | API behavior documented          |
| Large request body    | API behavior documented          |

The API should not accidentally modify or delete a different resource based on data provided in the request body.

---

# 7. Test Data Preparation

DELETE testing permanently removes the selected booking resource.

For this reason, dedicated test data should be created before DELETE execution.

Recommended workflow:

```text
POST /booking
      │
      ▼
Create Test Booking
      │
      ▼
Store bookingid
      │
      ▼
GET /booking/{id}
      │
      ▼
Confirm Booking Exists
      │
      ▼
DELETE /booking/{id}
```

Example POST request body:

```json
{
  "firstname": "Delete",
  "lastname": "Test",
  "totalprice": 300,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  },
  "additionalneeds": "Breakfast"
}
```

Example Postman test script for storing the created booking ID:

```javascript
const jsonData = pm.response.json();

pm.environment.set("deleteBookingId", jsonData.bookingid);
```

DELETE request:

```http
DELETE /booking/{{deleteBookingId}}
```

This approach prevents accidental deletion of unrelated test resources.

---

# 8. Positive Testing

Positive testing verifies that the API correctly deletes an existing booking when valid request data and authentication are provided.

## Positive Test Scenarios

| Test ID        | Test Scenario                                     | Expected Result            |
| -------------- | ------------------------------------------------- | -------------------------- |
| DELETE_POS_001 | Delete existing booking with valid token          | Booking deleted            |
| DELETE_POS_002 | Delete existing booking with Basic Authentication | Booking deleted            |
| DELETE_POS_003 | Delete newly created test booking                 | Booking deleted            |
| DELETE_POS_004 | Verify successful DELETE status code              | Expected status returned   |
| DELETE_POS_005 | Verify DELETE response body                       | Expected response returned |
| DELETE_POS_006 | Verify booking unavailable after deletion         | GET fails                  |
| DELETE_POS_007 | Delete booking using environment variable ID      | Correct booking deleted    |
| DELETE_POS_008 | Verify unrelated booking remains available        | Other resource unaffected  |

Example request:

```http
DELETE /booking/{{deleteBookingId}}
```

Expected result:

```text
DELETE request accepted
Selected booking deleted
Other bookings remain unaffected
```

A subsequent GET request should confirm that the deleted booking is no longer available.

---

# 9. Negative Testing

Negative testing verifies API behavior when invalid, unauthorized, or unexpected DELETE requests are submitted.

## Negative Test Scenarios

| Test ID        | Test Scenario                       | Expected Result                        |
| -------------- | ----------------------------------- | -------------------------------------- |
| DELETE_NEG_001 | Missing authentication              | Request rejected                       |
| DELETE_NEG_002 | Invalid authentication token        | Request rejected                       |
| DELETE_NEG_003 | Empty authentication token          | Request rejected                       |
| DELETE_NEG_004 | Malformed authentication            | Request rejected                       |
| DELETE_NEG_005 | Invalid Basic Authentication        | Request rejected                       |
| DELETE_NEG_006 | Non-existing booking ID             | Appropriate error response             |
| DELETE_NEG_007 | Alphabetic booking ID               | Request rejected or resource not found |
| DELETE_NEG_008 | Special characters in booking ID    | Request rejected                       |
| DELETE_NEG_009 | Negative booking ID                 | Appropriate error response             |
| DELETE_NEG_010 | Zero booking ID                     | Appropriate error response             |
| DELETE_NEG_011 | Decimal booking ID                  | Appropriate error response             |
| DELETE_NEG_012 | Empty booking ID                    | Appropriate error response             |
| DELETE_NEG_013 | Missing booking ID                  | Appropriate error response             |
| DELETE_NEG_014 | Repeated DELETE request             | Appropriate error response             |
| DELETE_NEG_015 | DELETE with unexpected request body | API behavior documented                |
| DELETE_NEG_016 | DELETE with malformed JSON body     | API behavior documented                |
| DELETE_NEG_017 | Invalid HTTP method                 | Appropriate status code                |

All unexpected API behavior should be evaluated as a potential defect.

For unauthorized deletion tests, a GET request should be executed after the DELETE attempt to confirm that the resource was not deleted.

---

# 10. Resource Deletion Validation

Resource deletion should be validated using a controlled test workflow.

## Step 1 — Create Resource

Create a new booking:

```http
POST /booking
```

Store the booking ID:

```javascript
const jsonData = pm.response.json();

pm.environment.set("deleteBookingId", jsonData.bookingid);
```

---

## Step 2 — Confirm Resource Exists

Send:

```http
GET /booking/{{deleteBookingId}}
```

Expected result:

```text
200 OK
```

The response should contain the created booking data.

---

## Step 3 — Delete Resource

Send:

```http
DELETE /booking/{{deleteBookingId}}
```

Expected Restful Booker response:

```text
201 Created
```

The DELETE response should be recorded.

---

## Step 4 — Verify Resource Is Deleted

Send:

```http
GET /booking/{{deleteBookingId}}
```

Expected result:

```text
Resource is no longer available
```

The actual status code and response body should be documented.

The test should only be marked as PASS when the resource deletion is confirmed.

---

# 11. GET After DELETE Validation

A GET-after-DELETE request verifies that the resource was actually removed.

Example:

```http
GET /booking/{{deleteBookingId}}
```

Before DELETE:

```text
GET /booking/{{deleteBookingId}}
→ Resource available
```

DELETE:

```text
DELETE /booking/{{deleteBookingId}}
→ DELETE accepted
```

After DELETE:

```text
GET /booking/{{deleteBookingId}}
→ Resource unavailable
```

Example Postman test:

```javascript
pm.test("Deleted booking is no longer available", function () {
    pm.expect(pm.response.code).to.not.eql(200);
});
```

A more specific test should be used after the actual API response is confirmed:

```javascript
pm.test("Deleted booking returns 404", function () {
    pm.response.to.have.status(404);
});
```

Do not assume the expected status code before documenting the actual Restful Booker behavior.

---

# 12. Repeated DELETE Testing

Repeated DELETE testing verifies API behavior when the same resource is deleted more than once.

Test workflow:

```text
Create Booking
      │
      ▼
DELETE Booking
      │
      ▼
Confirm Deletion
      │
      ▼
DELETE Same Booking Again
```

First DELETE:

```http
DELETE /booking/{{deleteBookingId}}
```

Expected result:

```text
Booking successfully deleted
```

Second DELETE:

```http
DELETE /booking/{{deleteBookingId}}
```

Expected result:

```text
Resource does not exist
Appropriate error response returned
```

Test validation:

| Request                 | Expected Resource State |
| ----------------------- | ----------------------- |
| First DELETE            | Resource deleted        |
| Second DELETE           | Resource already absent |
| GET after second DELETE | Resource remains absent |

The second DELETE request should not recreate the resource or affect another booking.

The actual HTTP status code should be recorded.

---

# 13. Booking ID Validation

The booking ID is provided as a path parameter.

Example:

```http
DELETE /booking/{id}
```

Booking ID validation should include:

| Test Value            | Validation Type    |
| --------------------- | ------------------ |
| Valid existing ID     | Positive           |
| Valid non-existing ID | Negative           |
| `0`                   | Boundary           |
| `-1`                  | Negative           |
| `1.5`                 | Invalid data type  |
| `abc`                 | Alphabetic         |
| `ABC`                 | Alphabetic         |
| `@#$`                 | Special characters |
| `%20`                 | Encoded space      |
| Very large number     | Boundary           |
| Empty value           | Missing ID         |

Example:

```http
DELETE /booking/-1
```

Example:

```http
DELETE /booking/abc
```

Example:

```http
DELETE /booking/999999999
```

For each request, document:

* HTTP status code
* Response body
* Response headers
* Response time
* Resource state
* Whether another booking was affected

Unexpected resource deletion should be treated as a critical defect.

---

# 14. Response Validation

The API response should be validated after every DELETE request.

Validation areas:

* HTTP status code
* Response time
* Response headers
* Response Content-Type
* Response body
* Authentication behavior
* Deleted resource state
* Unrelated resource state

Example validation workflow:

```text
Send DELETE Request
        │
        ▼
Validate Status Code
        │
        ▼
Validate Response Headers
        │
        ▼
Validate Response Body
        │
        ▼
Send GET Verification
        │
        ▼
Confirm Resource State
```

The DELETE response and the resulting resource state should be evaluated together.

---

# 15. Status Code Validation

Expected HTTP status codes may include:

| Status Code                 | Meaning                 | Test Usage                                |
| --------------------------- | ----------------------- | ----------------------------------------- |
| `200 OK`                    | Successful request      | Possible DELETE behavior                  |
| `201 Created`               | Resource created        | Restful Booker successful DELETE behavior |
| `202 Accepted`              | Request accepted        | Asynchronous deletion                     |
| `204 No Content`            | Successful deletion     | Common REST behavior                      |
| `400 Bad Request`           | Invalid request         | Invalid request data                      |
| `401 Unauthorized`          | Authentication required | Missing authentication                    |
| `403 Forbidden`             | Access denied           | Invalid authentication                    |
| `404 Not Found`             | Resource not found      | Non-existing booking                      |
| `405 Method Not Allowed`    | Unsupported method      | Invalid HTTP method                       |
| `500 Internal Server Error` | Server failure          | Unexpected API error                      |

The actual Restful Booker API response should be compared against the documented API behavior.

An unusual status code is not automatically a functional defect if it matches the API specification.

However, inconsistencies should be documented.

---

# 16. Response Header Validation

Validate the response headers returned by the DELETE request.

Possible headers include:

```http
Content-Type: text/plain
```

or other API-specific response headers.

Validation checklist:

* Response headers are returned
* Content-Type matches response body
* Response encoding is valid
* Authentication-related headers are reviewed
* Unexpected headers are documented

Example Postman test:

```javascript
pm.test("Response contains Content-Type header", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.eql(true);
});
```

If the response contains no body, Content-Type behavior should be documented rather than assumed.

---

# 17. Response Body Validation

DELETE responses may contain:

* Empty response body
* Confirmation text
* JSON confirmation object
* Error message

For Restful Booker, the actual response body should be recorded during test execution.

Example validation:

```javascript
pm.test("Response body is available", function () {
    pm.expect(pm.response.text()).to.not.eql(undefined);
});
```

If an exact response is confirmed, a specific test can be used.

Example:

```javascript
pm.test("Response body matches expected value", function () {
    pm.expect(pm.response.text()).to.eql("Created");
});
```

Error response testing should validate:

* Error message presence
* Error message consistency
* No sensitive information exposure
* No stack trace exposure
* No internal server information exposure

---

# 18. Data Persistence Validation

Deletion persistence verifies that a deleted resource remains unavailable after the DELETE request.

Validation workflow:

```text
1. Create booking
2. Store booking ID
3. Confirm booking exists
4. Delete booking
5. Confirm DELETE response
6. Send GET request
7. Confirm booking unavailable
8. Repeat GET request
9. Confirm booking remains unavailable
```

Example:

```http
GET /booking/{{deleteBookingId}}
```

First GET after DELETE:

```text
Resource unavailable
```

Second GET after DELETE:

```text
Resource remains unavailable
```

If the booking becomes available again unexpectedly, the issue should be investigated as a potential data persistence defect.

---

# 19. Postman Test Script

Example DELETE request test script:

```javascript
pm.test("DELETE request returns expected status", function () {
    pm.response.to.have.status(201);
});

pm.test("Response time is below 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Response body is defined", function () {
    pm.expect(pm.response.text()).to.not.eql(undefined);
});

pm.test("DELETE request completed", function () {
    pm.expect(pm.response.code).to.eql(201);
});
```

Example authentication failure test:

```javascript
pm.test("Unauthorized DELETE request is rejected", function () {
    pm.expect(pm.response.code).to.be.oneOf([401, 403]);
});
```

Example GET-after-DELETE validation:

```javascript
pm.test("Deleted booking is unavailable", function () {
    pm.expect(pm.response.code).to.not.eql(200);
});
```

After the actual API behavior is confirmed, use a specific status code assertion.

Example:

```javascript
pm.test("Deleted booking returns 404", function () {
    pm.response.to.have.status(404);
});
```

---

# 20. Postman Deletion Workflow

Recommended Postman request sequence:

```text
01_Create_Delete_Test_Booking
              │
              ▼
02_Verify_Booking_Exists
              │
              ▼
03_Delete_Booking
              │
              ▼
04_Verify_Booking_Deleted
              │
              ▼
05_Repeat_Delete_Request
```

## Request 1 — Create Test Booking

```http
POST {{baseUrl}}/booking
```

Test script:

```javascript
const jsonData = pm.response.json();

pm.environment.set("deleteBookingId", jsonData.bookingid);

console.log(
    "Delete test booking ID:",
    pm.environment.get("deleteBookingId")
);
```

---

## Request 2 — Verify Booking Exists

```http
GET {{baseUrl}}/booking/{{deleteBookingId}}
```

Test script:

```javascript
pm.test("Booking exists before DELETE", function () {
    pm.response.to.have.status(200);
});
```

---

## Request 3 — Delete Booking

```http
DELETE {{baseUrl}}/booking/{{deleteBookingId}}
```

Test script:

```javascript
pm.test("Booking DELETE request is successful", function () {
    pm.response.to.have.status(201);
});
```

---

## Request 4 — Verify Booking Deleted

```http
GET {{baseUrl}}/booking/{{deleteBookingId}}
```

Test script:

```javascript
pm.test("Booking is unavailable after DELETE", function () {
    pm.expect(pm.response.code).to.not.eql(200);
});
```

---

## Request 5 — Repeat DELETE Request

```http
DELETE {{baseUrl}}/booking/{{deleteBookingId}}
```

Test script:

```javascript
pm.test("Repeated DELETE does not return successful first-delete behavior", function () {
    pm.expect(pm.response.code).to.not.eql(201);
});
```

The assertion should be updated if actual Restful Booker behavior differs.

---

# 21. Test Execution Record

Use the following structure to document DELETE request execution.

| Field                         | Value                 |
| ----------------------------- | --------------------- |
| Test ID                       | DELETE_XXX            |
| Test Date                     | YYYY-MM-DD            |
| Tester                        | Filip Jelinek         |
| HTTP Method                   | DELETE                |
| Endpoint                      | `/booking/{id}`       |
| Booking ID                    |                       |
| Resource Exists Before DELETE | Yes / No              |
| Authentication                |                       |
| Request Headers               |                       |
| Request Body                  | None / Provided       |
| Expected Status               |                       |
| Actual Status                 |                       |
| Expected Result               |                       |
| Actual Result                 |                       |
| GET After DELETE Status       |                       |
| Resource Deleted              | Yes / No              |
| Response Time                 |                       |
| Test Status                   | PASS / FAIL / BLOCKED |
| Bug ID                        |                       |
| Notes                         |                       |

Example:

| Field                         | Value                                       |
| ----------------------------- | ------------------------------------------- |
| Test ID                       | DELETE_POS_001                              |
| Test Date                     | 2026-07-11                                  |
| Tester                        | Filip Jelinek                               |
| HTTP Method                   | DELETE                                      |
| Endpoint                      | `/booking/{{deleteBookingId}}`              |
| Booking ID                    | Environment variable                        |
| Resource Exists Before DELETE | Yes                                         |
| Authentication                | Valid Token                                 |
| Request Headers               | Accept + Cookie                             |
| Request Body                  | None                                        |
| Expected Status               | 201                                         |
| Actual Status                 | 201                                         |
| Expected Result               | Booking deleted successfully                |
| Actual Result                 | DELETE request accepted and booking removed |
| GET After DELETE Status       | 404                                         |
| Resource Deleted              | Yes                                         |
| Response Time                 | 290 ms                                      |
| Test Status                   | PASS                                        |
| Bug ID                        | N/A                                         |
| Notes                         | Deletion confirmed using GET request        |

---

# 22. Defect Reporting

If unexpected behavior is identified during DELETE testing, create a bug report.

Example defect title:

```text
DELETE /booking/{id} returns success but booking remains accessible
```

The bug report should include:

* Bug ID
* Title
* Environment
* API endpoint
* HTTP method
* Preconditions
* Booking ID
* Original resource state
* Authentication method
* Request headers
* Request body
* Steps to reproduce
* Expected result
* Actual result
* DELETE HTTP status code
* DELETE response body
* GET verification status code
* GET verification response
* Severity
* Priority
* Reproducibility
* Evidence
* Related test case

Example:

```text
Bug ID: BUG_API_XXX

Title:
DELETE /booking/{id} returns successful response but booking remains accessible

Endpoint:
DELETE /booking/123

Preconditions:
Booking 123 exists.

Authentication:
Valid token.

Steps to Reproduce:
1. Send GET /booking/123.
2. Confirm the booking exists.
3. Send DELETE /booking/123.
4. Observe the DELETE response.
5. Send GET /booking/123 again.

Expected Result:
The booking should be permanently deleted and unavailable through the GET endpoint.

Actual Result:
The DELETE request returns a successful status code, but GET /booking/123 continues to return the booking data.

DELETE Status:
201 Created

GET Verification Status:
200 OK

Severity:
High

Priority:
High

Reproducibility:
100%
```

A successful DELETE response with no actual resource deletion should be treated as a significant functional defect.

---

# 23. Testing Checklist

## Request Configuration

* [ ] Correct DELETE method selected
* [ ] Correct endpoint configured
* [ ] Booking ID configured
* [ ] Environment variables configured
* [ ] Authentication configured
* [ ] Request headers reviewed
* [ ] Request body removed where not required

## Test Data Preparation

* [ ] Dedicated test booking created
* [ ] Booking ID stored
* [ ] Booking ID verified
* [ ] Resource existence confirmed before DELETE
* [ ] Test resource separated from unrelated bookings

## Positive Testing

* [ ] Existing booking deletion tested
* [ ] Token authentication tested
* [ ] Basic Authentication tested
* [ ] Successful DELETE status validated
* [ ] DELETE response body validated
* [ ] GET-after-DELETE tested
* [ ] Resource deletion confirmed
* [ ] Unrelated booking verified

## Negative Testing

* [ ] Missing authentication tested
* [ ] Invalid token tested
* [ ] Empty token tested
* [ ] Malformed authentication tested
* [ ] Invalid Basic Authentication tested
* [ ] Non-existing booking ID tested
* [ ] Alphabetic booking ID tested
* [ ] Special character booking ID tested
* [ ] Negative booking ID tested
* [ ] Zero booking ID tested
* [ ] Decimal booking ID tested
* [ ] Missing booking ID tested
* [ ] Repeated DELETE tested
* [ ] Unexpected request body tested
* [ ] Malformed JSON body tested

## Response Validation

* [ ] Status code validated
* [ ] Response time validated
* [ ] Response headers validated
* [ ] Content-Type behavior documented
* [ ] Response body validated
* [ ] Error response validated
* [ ] Sensitive information exposure reviewed

## Resource Validation

* [ ] Resource exists before DELETE
* [ ] DELETE request executed
* [ ] DELETE response validated
* [ ] GET request executed after DELETE
* [ ] Resource confirmed unavailable
* [ ] Second GET verification executed
* [ ] Resource remains unavailable
* [ ] Other resources remain unaffected

## Repeated DELETE Testing

* [ ] First DELETE executed
* [ ] First DELETE result validated
* [ ] Resource deletion confirmed
* [ ] Second DELETE executed
* [ ] Second DELETE response documented
* [ ] Resource remains absent

## Documentation

* [ ] Test result recorded
* [ ] Actual status code recorded
* [ ] Response time recorded
* [ ] Evidence captured
* [ ] Failed tests investigated
* [ ] Bug reports created
* [ ] Bug IDs linked to test cases
* [ ] Final test status assigned

---

# Conclusion

This DELETE testing template provides a structured approach for validating resource deletion in the Restful Booker API.

The template covers:

* DELETE request configuration
* Authentication validation
* Test data preparation
* Positive testing
* Negative testing
* Booking ID validation
* Resource deletion validation
* GET-after-DELETE verification
* Repeated DELETE testing
* Response validation
* Data persistence verification
* Postman test automation
* Test execution documentation
* Defect reporting

The primary testing objective is to confirm that an authenticated DELETE request removes the correct booking resource and that the deleted resource remains unavailable after deletion.

A successful HTTP response alone should not be considered sufficient evidence of successful deletion.

The resource state should always be verified using a subsequent GET request.

This template can be reused as a standard reference for DELETE request testing throughout the Restful Booker API Testing Project.
