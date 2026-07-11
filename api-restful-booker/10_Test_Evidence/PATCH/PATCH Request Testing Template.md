# PATCH Request Testing Template

**Project:** Restful Booker API Testing Project
**API:** Restful Booker
**Request Method:** PATCH
**Testing Type:** Manual API Testing
**Tool:** Postman
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. PATCH Request Overview](#2-patch-request-overview)
* [3. PATCH vs PUT](#3-patch-vs-put)
* [4. Endpoint Information](#4-endpoint-information)
* [5. Authentication Requirements](#5-authentication-requirements)
* [6. Request Headers](#6-request-headers)
* [7. Request Body](#7-request-body)
* [8. Positive Testing](#8-positive-testing)
* [9. Negative Testing](#9-negative-testing)
* [10. Partial Update Validation](#10-partial-update-validation)
* [11. Unchanged Field Validation](#11-unchanged-field-validation)
* [12. Boundary and Validation Testing](#12-boundary-and-validation-testing)
* [13. Response Validation](#13-response-validation)
* [14. Status Code Validation](#14-status-code-validation)
* [15. Response Header Validation](#15-response-header-validation)
* [16. Response Body Validation](#16-response-body-validation)
* [17. JSON Schema Validation](#17-json-schema-validation)
* [18. Data Persistence Validation](#18-data-persistence-validation)
* [19. Postman Test Script](#19-postman-test-script)
* [20. Test Execution Record](#20-test-execution-record)
* [21. Defect Reporting](#21-defect-reporting)
* [22. Testing Checklist](#22-testing-checklist)

---

# 1. Purpose

The purpose of this document is to provide a reusable testing template for validating **PATCH API requests**.

PATCH requests are typically used to **partially update an existing resource**.

Unlike PUT requests, a PATCH request should only modify the fields included in the request body.

The testing process verifies:

* Correct partial resource update
* Authentication requirements
* Request header validation
* Request body validation
* HTTP status codes
* Response structure
* Updated field values
* Unchanged field preservation
* JSON schema compliance
* Data persistence
* Error handling
* API behavior with invalid input

This template can be reused for PATCH endpoints within the Restful Booker API Testing Project.

---

# 2. PATCH Request Overview

The HTTP `PATCH` method is used to partially modify an existing API resource.

Example:

```http
PATCH /booking/{id}
```

The request updates selected booking fields without requiring the complete booking resource.

Example request body:

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek"
}
```

Only the `firstname` and `lastname` fields should be updated.

All other booking fields should remain unchanged.

Typical PATCH request flow:

```text
Client
  │
  │ PATCH /booking/{id}
  │ Headers
  │ Authentication
  │ Partial JSON Request Body
  ▼
API Server
  │
  │ Validate Authentication
  │ Validate Booking ID
  │ Validate Request Body
  │ Identify Provided Fields
  │ Update Selected Fields
  ▼
HTTP Response
```

The response should contain the updated booking resource.

---

# 3. PATCH vs PUT

PATCH and PUT are both used to update API resources, but their expected behavior is different.

| Feature                    | PUT                         | PATCH                   |
| -------------------------- | --------------------------- | ----------------------- |
| Update Type                | Full update                 | Partial update          |
| Complete Resource Required | Usually yes                 | No                      |
| Selected Fields Updated    | All resource fields         | Provided fields only    |
| Missing Fields             | May be replaced or rejected | Should remain unchanged |
| Typical Request Size       | Larger                      | Smaller                 |
| Main Testing Focus         | Complete replacement        | Partial modification    |

Example PUT request:

```json
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

Example PATCH request:

```json
{
  "firstname": "Filip"
}
```

Expected PATCH behavior:

```text
firstname       → UPDATED
lastname        → UNCHANGED
totalprice      → UNCHANGED
depositpaid     → UNCHANGED
bookingdates    → UNCHANGED
additionalneeds → UNCHANGED
```

The preservation of fields not included in the PATCH request is a critical validation area.

---

# 4. Endpoint Information

| Field                   | Value                                  |
| ----------------------- | -------------------------------------- |
| API                     | Restful Booker                         |
| HTTP Method             | PATCH                                  |
| Endpoint                | `/booking/{id}`                        |
| Base URL                | `https://restful-booker.herokuapp.com` |
| Authentication          | Token or Basic Authentication          |
| Content Type            | `application/json`                     |
| Expected Success Status | `200 OK`                               |

Example request:

```http
PATCH https://restful-booker.herokuapp.com/booking/1
```

The `{id}` path parameter represents the booking resource that will be partially updated.

---

# 5. Authentication Requirements

The PATCH booking endpoint requires authentication.

Supported authentication methods may include:

* Token authentication
* Basic authentication

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

| Test Scenario              | Expected Result  |
| -------------------------- | ---------------- |
| Valid token                | Request accepted |
| Valid Basic Authentication | Request accepted |
| Missing authentication     | Request rejected |
| Invalid token              | Request rejected |
| Expired token              | Request rejected |
| Malformed authentication   | Request rejected |

Authentication failures should return an appropriate HTTP error response.

The actual API behavior should be documented during test execution.

---

# 6. Request Headers

Typical PATCH request headers:

```http
Content-Type: application/json
Accept: application/json
Cookie: token={{authToken}}
```

Header validation should include:

| Test Scenario                 | Expected Result                       |
| ----------------------------- | ------------------------------------- |
| Valid Content-Type            | Request processed                     |
| Missing Content-Type          | Request rejected or handled correctly |
| Invalid Content-Type          | Appropriate error response            |
| Valid Accept header           | JSON response returned                |
| Invalid Accept header         | Appropriate API behavior              |
| Valid authentication header   | Request accepted                      |
| Missing authentication header | Request rejected                      |
| Invalid authentication header | Request rejected                      |

Unexpected header handling should be documented.

---

# 7. Request Body

A PATCH request body should contain only the fields that need to be updated.

Example single-field update:

```json
{
  "firstname": "Filip"
}
```

Example multiple-field update:

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek"
}
```

Example price and deposit update:

```json
{
  "totalprice": 450,
  "depositpaid": true
}
```

Example nested object update:

```json
{
  "bookingdates": {
    "checkin": "2026-07-15",
    "checkout": "2026-07-20"
  }
}
```

Available booking fields:

| Field           | Data Type   |
| --------------- | ----------- |
| firstname       | String      |
| lastname        | String      |
| totalprice      | Number      |
| depositpaid     | Boolean     |
| bookingdates    | Object      |
| checkin         | Date/String |
| checkout        | Date/String |
| additionalneeds | String      |

Unlike PUT requests, the complete resource should not be required.

---

# 8. Positive Testing

Positive testing verifies that the API correctly processes valid partial update requests.

## Positive Test Scenarios

| Test ID       | Test Scenario                         | Expected Result          |
| ------------- | ------------------------------------- | ------------------------ |
| PATCH_POS_001 | Update firstname only                 | Firstname updated        |
| PATCH_POS_002 | Update lastname only                  | Lastname updated         |
| PATCH_POS_003 | Update total price only               | Price updated            |
| PATCH_POS_004 | Update deposit status only            | Deposit status updated   |
| PATCH_POS_005 | Update booking dates                  | Booking dates updated    |
| PATCH_POS_006 | Update additional needs only          | Additional needs updated |
| PATCH_POS_007 | Update firstname and lastname         | Both fields updated      |
| PATCH_POS_008 | Update price and deposit status       | Both fields updated      |
| PATCH_POS_009 | Update multiple booking fields        | Selected fields updated  |
| PATCH_POS_010 | PATCH using valid token               | Request accepted         |
| PATCH_POS_011 | PATCH using Basic Authentication      | Request accepted         |
| PATCH_POS_012 | Update field with same existing value | Resource remains valid   |

Example request:

```json
{
  "firstname": "Filip"
}
```

Expected result:

```text
HTTP Status: 200 OK

firstname → Filip
All other fields → Unchanged
```

---

# 9. Negative Testing

Negative testing verifies API behavior when invalid or unauthorized PATCH requests are submitted.

## Negative Test Scenarios

| Test ID       | Test Scenario                        | Expected Result                     |
| ------------- | ------------------------------------ | ----------------------------------- |
| PATCH_NEG_001 | Missing authentication               | Request rejected                    |
| PATCH_NEG_002 | Invalid authentication token         | Request rejected                    |
| PATCH_NEG_003 | Invalid Basic Authentication         | Request rejected                    |
| PATCH_NEG_004 | Invalid booking ID                   | Appropriate error response          |
| PATCH_NEG_005 | Non-existing booking ID              | Resource not updated                |
| PATCH_NEG_006 | Missing request body                 | Request rejected                    |
| PATCH_NEG_007 | Empty JSON body                      | Request rejected or no modification |
| PATCH_NEG_008 | Malformed JSON                       | Request rejected                    |
| PATCH_NEG_009 | Invalid field data type              | Validation error                    |
| PATCH_NEG_010 | Invalid date format                  | Validation error                    |
| PATCH_NEG_011 | Null field value                     | Appropriate validation              |
| PATCH_NEG_012 | Unknown field                        | Appropriate API behavior            |
| PATCH_NEG_013 | Invalid Content-Type                 | Request rejected                    |
| PATCH_NEG_014 | Invalid boolean value                | Validation error                    |
| PATCH_NEG_015 | Nested object with invalid structure | Validation error                    |

All unexpected API behavior should be evaluated as a potential defect.

---

# 10. Partial Update Validation

Partial update validation is the primary testing focus for PATCH requests.

Before executing the PATCH request, retrieve the existing resource.

Example:

```http
GET /booking/1
```

Original response:

```json
{
  "firstname": "James",
  "lastname": "Brown",
  "totalprice": 300,
  "depositpaid": false,
  "bookingdates": {
    "checkin": "2026-07-10",
    "checkout": "2026-07-15"
  },
  "additionalneeds": "Lunch"
}
```

Send PATCH request:

```json
{
  "firstname": "Filip"
}
```

Expected response:

```json
{
  "firstname": "Filip",
  "lastname": "Brown",
  "totalprice": 300,
  "depositpaid": false,
  "bookingdates": {
    "checkin": "2026-07-10",
    "checkout": "2026-07-15"
  },
  "additionalneeds": "Lunch"
}
```

Validation:

| Field           | Original       | PATCH Value  | Expected Result |
| --------------- | -------------- | ------------ | --------------- |
| firstname       | James          | Filip        | Updated         |
| lastname        | Brown          | Not provided | Unchanged       |
| totalprice      | 300            | Not provided | Unchanged       |
| depositpaid     | false          | Not provided | Unchanged       |
| bookingdates    | Existing dates | Not provided | Unchanged       |
| additionalneeds | Lunch          | Not provided | Unchanged       |

Only fields explicitly included in the PATCH request should be modified.

---

# 11. Unchanged Field Validation

A PATCH test should verify both:

1. Updated fields contain the new values.
2. Fields excluded from the request retain their original values.

Example validation process:

```text
GET Original Resource
        │
        ▼
Store Original Values
        │
        ▼
Send PATCH Request
        │
        ▼
Validate Updated Fields
        │
        ▼
Validate Unchanged Fields
        │
        ▼
Send GET Verification Request
```

Example Postman test:

```javascript
const jsonData = pm.response.json();

pm.test("Firstname was updated", function () {
    pm.expect(jsonData.firstname).to.eql("Filip");
});

pm.test("Lastname remains unchanged", function () {
    pm.expect(jsonData.lastname)
        .to.eql(pm.environment.get("originalLastname"));
});

pm.test("Total price remains unchanged", function () {
    pm.expect(jsonData.totalprice)
        .to.eql(Number(pm.environment.get("originalTotalPrice")));
});
```

Original resource values can be stored using a GET request before PATCH execution.

Example:

```javascript
const jsonData = pm.response.json();

pm.environment.set("originalFirstname", jsonData.firstname);
pm.environment.set("originalLastname", jsonData.lastname);
pm.environment.set("originalTotalPrice", jsonData.totalprice);
pm.environment.set("originalDepositPaid", jsonData.depositpaid);
pm.environment.set("originalCheckin", jsonData.bookingdates.checkin);
pm.environment.set("originalCheckout", jsonData.bookingdates.checkout);
pm.environment.set("originalAdditionalNeeds", jsonData.additionalneeds);
```

---

# 12. Boundary and Validation Testing

Boundary testing verifies API behavior with minimum, maximum, empty, and unusual input values.

## String Fields

Test:

* Empty string
* Single character
* Very long string
* Numeric characters
* Special characters
* Unicode characters
* Leading spaces
* Trailing spaces
* HTML content
* Script-like input

Example:

```json
{
  "firstname": ""
}
```

Example special characters:

```json
{
  "firstname": "!@#$%^&*()"
}
```

Example Unicode value:

```json
{
  "firstname": "Filip测试"
}
```

The actual API behavior should be documented.

---

## Numeric Fields

Example field:

```text
totalprice
```

Test values:

| Test Value  | Validation Type          |
| ----------- | ------------------------ |
| `0`         | Minimum value            |
| `1`         | Valid low value          |
| `-1`        | Negative value           |
| `999999999` | Large value              |
| `1.50`      | Decimal value            |
| `"450"`     | String instead of number |
| `null`      | Null value               |

Example:

```json
{
  "totalprice": -1
}
```

The API response should be recorded for each tested value.

---

## Boolean Fields

Example field:

```text
depositpaid
```

Test values:

```text
true
false
"true"
"false"
1
0
null
```

Example:

```json
{
  "depositpaid": "true"
}
```

The API should correctly validate the expected Boolean data type.

---

## Date Fields

Test:

* Valid date
* Invalid date format
* Past date
* Future date
* Check-out before check-in
* Same check-in and check-out date
* Empty date
* Null date
* Non-date string

Example invalid date:

```json
{
  "bookingdates": {
    "checkin": "invalid-date",
    "checkout": "2026-07-20"
  }
}
```

The actual API response should be documented.

---

# 13. Response Validation

The API response should be validated after every PATCH request.

Validation areas:

* HTTP status code
* Response time
* Response headers
* Response Content-Type
* JSON structure
* Field names
* Field data types
* Updated field values
* Unchanged field values
* Missing fields
* Unexpected fields

Example validation workflow:

```text
Send PATCH Request
        │
        ▼
Validate Status Code
        │
        ▼
Validate Response Headers
        │
        ▼
Validate JSON Structure
        │
        ▼
Validate Updated Fields
        │
        ▼
Validate Unchanged Fields
        │
        ▼
Verify Data Persistence
```

---

# 14. Status Code Validation

Expected HTTP status codes may include:

| Status Code                  | Meaning                 | Test Usage                 |
| ---------------------------- | ----------------------- | -------------------------- |
| `200 OK`                     | Request successful      | Valid partial update       |
| `400 Bad Request`            | Invalid request         | Invalid request data       |
| `401 Unauthorized`           | Authentication required | Missing authentication     |
| `403 Forbidden`              | Access denied           | Invalid authentication     |
| `404 Not Found`              | Resource not found      | Invalid booking ID         |
| `405 Method Not Allowed`     | Invalid HTTP method     | Unsupported method         |
| `415 Unsupported Media Type` | Invalid Content-Type    | Unsupported request format |
| `500 Internal Server Error`  | Server error            | Unexpected API failure     |

The actual Restful Booker API response should be compared against expected REST API behavior.

Unexpected status codes should be documented.

---

# 15. Response Header Validation

Validate response headers.

Expected header:

```http
Content-Type: application/json
```

Validation checklist:

* Content-Type exists
* Content-Type is correct
* Response encoding is valid
* Unexpected headers are reviewed

Example Postman test:

```javascript
pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});
```

---

# 16. Response Body Validation

The PATCH response should contain the updated booking resource.

Expected fields:

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

Validation areas:

| Validation                    | Expected Result          |
| ----------------------------- | ------------------------ |
| Updated field exists          | Field returned           |
| Updated value matches request | Value identical          |
| Unchanged fields exist        | Fields returned          |
| Unchanged values preserved    | Original values retained |
| Data types are correct        | Schema compliant         |
| Booking dates object exists   | Object returned          |

Example:

```javascript
const jsonData = pm.response.json();

pm.test("Updated firstname is correct", function () {
    pm.expect(jsonData.firstname).to.eql("Filip");
});

pm.test("Response contains bookingdates", function () {
    pm.expect(jsonData).to.have.property("bookingdates");
});
```

---

# 17. JSON Schema Validation

Example JSON schema:

```json
{
  "type": "object",
  "required": [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates"
  ],
  "properties": {
    "firstname": {
      "type": "string"
    },
    "lastname": {
      "type": "string"
    },
    "totalprice": {
      "type": "number"
    },
    "depositpaid": {
      "type": "boolean"
    },
    "bookingdates": {
      "type": "object",
      "required": [
        "checkin",
        "checkout"
      ],
      "properties": {
        "checkin": {
          "type": "string"
        },
        "checkout": {
          "type": "string"
        }
      }
    },
    "additionalneeds": {
      "type": "string"
    }
  }
}
```

Example Postman schema validation:

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

pm.test("Response matches JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

---

# 18. Data Persistence Validation

Data persistence should be verified after a successful PATCH request.

## Validation Process

```text
1. Send GET /booking/{id}
2. Store original resource data
3. Send PATCH /booking/{id}
4. Validate 200 OK
5. Validate PATCH response
6. Send GET /booking/{id}
7. Verify updated fields
8. Verify unchanged fields
```

Example PATCH request:

```http
PATCH /booking/1
```

Request body:

```json
{
  "firstname": "Filip"
}
```

Verification request:

```http
GET /booking/1
```

Expected result:

```text
firstname → Filip
lastname → Original value
totalprice → Original value
depositpaid → Original value
bookingdates → Original values
additionalneeds → Original value
```

If the PATCH response returns an updated value but a subsequent GET request returns the original value, the issue should be investigated as a potential data persistence defect.

---

# 19. Postman Test Script

Example Postman test script for a firstname PATCH update:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is below 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});

const jsonData = pm.response.json();

pm.test("Firstname is updated correctly", function () {
    pm.expect(jsonData.firstname).to.eql("Filip");
});

pm.test("Lastname remains unchanged", function () {
    pm.expect(jsonData.lastname)
        .to.eql(pm.environment.get("originalLastname"));
});

pm.test("Total price remains unchanged", function () {
    pm.expect(jsonData.totalprice)
        .to.eql(Number(pm.environment.get("originalTotalPrice")));
});

pm.test("Deposit status remains unchanged", function () {
    pm.expect(jsonData.depositpaid)
        .to.eql(
            pm.environment.get("originalDepositPaid") === "true"
        );
});

pm.test("Check-in date remains unchanged", function () {
    pm.expect(jsonData.bookingdates.checkin)
        .to.eql(pm.environment.get("originalCheckin"));
});

pm.test("Check-out date remains unchanged", function () {
    pm.expect(jsonData.bookingdates.checkout)
        .to.eql(pm.environment.get("originalCheckout"));
});

pm.test("Additional needs remain unchanged", function () {
    pm.expect(jsonData.additionalneeds)
        .to.eql(pm.environment.get("originalAdditionalNeeds"));
});
```

---

# 20. Test Execution Record

Use the following structure to document PATCH request execution.

| Field                     | Value                 |
| ------------------------- | --------------------- |
| Test ID                   | PATCH_XXX             |
| Test Date                 | YYYY-MM-DD            |
| Tester                    | Filip Jelinek         |
| HTTP Method               | PATCH                 |
| Endpoint                  | `/booking/{id}`       |
| Booking ID                |                       |
| Authentication            |                       |
| Updated Fields            |                       |
| Request Body              |                       |
| Expected Status           |                       |
| Actual Status             |                       |
| Expected Result           |                       |
| Actual Result             |                       |
| Unchanged Fields Verified | Yes / No              |
| Response Time             |                       |
| Test Status               | PASS / FAIL / BLOCKED |
| Bug ID                    |                       |
| Notes                     |                       |

Example:

| Field                     | Value                                         |
| ------------------------- | --------------------------------------------- |
| Test ID                   | PATCH_POS_001                                 |
| Test Date                 | 2026-07-11                                    |
| Tester                    | Filip Jelinek                                 |
| HTTP Method               | PATCH                                         |
| Endpoint                  | `/booking/1`                                  |
| Booking ID                | 1                                             |
| Authentication            | Valid Token                                   |
| Updated Fields            | firstname                                     |
| Request Body              | `{"firstname":"Filip"}`                       |
| Expected Status           | 200                                           |
| Actual Status             | 200                                           |
| Expected Result           | Firstname updated; all other fields unchanged |
| Actual Result             | Firstname updated; all other fields unchanged |
| Unchanged Fields Verified | Yes                                           |
| Response Time             | 285 ms                                        |
| Test Status               | PASS                                          |
| Bug ID                    | N/A                                           |
| Notes                     | Partial update behavior confirmed             |

---

# 21. Defect Reporting

If unexpected behavior is identified during PATCH testing, create a bug report.

Example defect title:

```text
PATCH /booking/{id} modifies fields not included in the request body
```

The bug report should include:

* Bug ID
* Title
* Environment
* API endpoint
* HTTP method
* Preconditions
* Original resource data
* Authentication method
* Request headers
* Request body
* Steps to reproduce
* Expected result
* Actual result
* HTTP status code
* Response body
* Severity
* Priority
* Reproducibility
* Evidence
* Related test case

Example:

```text
Bug ID: BUG_API_XXX

Title:
PATCH /booking/{id} modifies lastname when only firstname is updated

Endpoint:
PATCH /booking/1

Original Data:
firstname: James
lastname: Brown

Request Body:
{
  "firstname": "Filip"
}

Expected Result:
The firstname field should be updated to "Filip".
The lastname field should remain "Brown".

Actual Result:
The firstname field is updated to "Filip".
The lastname field is modified unexpectedly.

Severity:
High

Priority:
High
```

---

# 22. Testing Checklist

## Request Configuration

* [ ] Correct PATCH method selected
* [ ] Correct endpoint configured
* [ ] Valid booking ID used
* [ ] Environment variables configured
* [ ] Authentication configured
* [ ] Request headers configured
* [ ] Content-Type configured
* [ ] Partial request body provided

## Positive Testing

* [ ] Firstname-only update tested
* [ ] Lastname-only update tested
* [ ] Total price-only update tested
* [ ] Deposit status-only update tested
* [ ] Booking dates update tested
* [ ] Additional needs update tested
* [ ] Multiple field update tested
* [ ] Same-value update tested
* [ ] Token authentication tested
* [ ] Basic Authentication tested

## Negative Testing

* [ ] Missing authentication tested
* [ ] Invalid authentication tested
* [ ] Invalid booking ID tested
* [ ] Non-existing booking ID tested
* [ ] Missing request body tested
* [ ] Empty JSON body tested
* [ ] Malformed JSON tested
* [ ] Invalid data types tested
* [ ] Null values tested
* [ ] Unknown fields tested
* [ ] Invalid date formats tested
* [ ] Invalid Content-Type tested

## Partial Update Validation

* [ ] Original resource retrieved
* [ ] Original values stored
* [ ] PATCH request executed
* [ ] Updated fields validated
* [ ] Unchanged fields validated
* [ ] Nested object behavior validated

## Response Validation

* [ ] Status code validated
* [ ] Response time validated
* [ ] Response headers validated
* [ ] Content-Type validated
* [ ] JSON structure validated
* [ ] Updated values validated
* [ ] Unchanged values validated
* [ ] Data types validated
* [ ] JSON schema validated

## Data Persistence

* [ ] GET request executed before PATCH
* [ ] Original data recorded
* [ ] PATCH request executed
* [ ] GET verification request executed
* [ ] Updated values persisted
* [ ] Unchanged values preserved

## Documentation

* [ ] Test result recorded
* [ ] Evidence captured
* [ ] Failed tests investigated
* [ ] Bug reports created
* [ ] Bug IDs linked to test cases
* [ ] Final test status assigned

---

# Conclusion

This PATCH testing template provides a structured approach for validating partial resource updates in the Restful Booker API.

The template covers:

* PATCH request configuration
* PATCH and PUT differences
* Authentication validation
* Positive testing
* Negative testing
* Partial update validation
* Unchanged field validation
* Boundary testing
* Response validation
* JSON schema validation
* Data persistence verification
* Postman test automation
* Test execution documentation
* Defect reporting

The primary testing objective is to confirm that **only fields included in the PATCH request are modified while all other resource data remains unchanged**.

This template can be reused as a standard reference for PATCH request testing throughout the Restful Booker API Testing Project.
