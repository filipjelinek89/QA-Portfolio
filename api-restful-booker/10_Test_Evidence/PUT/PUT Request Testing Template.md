# PUT Request Testing Template

**Project:** Restful Booker API Testing Project
**API:** Restful Booker
**Request Method:** PUT
**Testing Type:** Manual API Testing
**Tool:** Postman
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. PUT Request Overview](#2-put-request-overview)
* [3. Endpoint Information](#3-endpoint-information)
* [4. Authentication Requirements](#4-authentication-requirements)
* [5. Request Headers](#5-request-headers)
* [6. Request Body](#6-request-body)
* [7. Positive Testing](#7-positive-testing)
* [8. Negative Testing](#8-negative-testing)
* [9. Boundary and Validation Testing](#9-boundary-and-validation-testing)
* [10. Response Validation](#10-response-validation)
* [11. Status Code Validation](#11-status-code-validation)
* [12. Response Header Validation](#12-response-header-validation)
* [13. Response Body Validation](#13-response-body-validation)
* [14. JSON Schema Validation](#14-json-schema-validation)
* [15. Data Persistence Validation](#15-data-persistence-validation)
* [16. Postman Test Script](#16-postman-test-script)
* [17. Test Execution Record](#17-test-execution-record)
* [18. Defect Reporting](#18-defect-reporting)
* [19. Testing Checklist](#19-testing-checklist)

---

# 1. Purpose

The purpose of this document is to provide a reusable testing template for validating **PUT API requests**.

PUT requests are typically used to **fully update or replace an existing resource**.

The testing process verifies:

* Correct resource update
* Authentication requirements
* Request header validation
* Request body validation
* HTTP status codes
* Response structure
* Response data
* JSON schema compliance
* Data persistence
* Error handling
* API behavior with invalid input

This template can be reused for PUT endpoints within the Restful Booker API Testing Project.

---

# 2. PUT Request Overview

The HTTP `PUT` method is used to update an existing API resource.

Unlike `PATCH`, which normally performs a partial update, `PUT` generally sends the complete resource representation.

Example:

```http
PUT /booking/{id}
```

The request updates an existing booking identified by the booking ID.

Typical PUT request flow:

```text
Client
  │
  │ PUT /booking/{id}
  │ Headers
  │ Authentication
  │ JSON Request Body
  ▼
API Server
  │
  │ Validate Authentication
  │ Validate Booking ID
  │ Validate Request Body
  │ Update Booking
  ▼
HTTP Response
```

The response should confirm that the resource was updated successfully.

---

# 3. Endpoint Information

| Field                   | Value                                  |
| ----------------------- | -------------------------------------- |
| API                     | Restful Booker                         |
| HTTP Method             | PUT                                    |
| Endpoint                | `/booking/{id}`                        |
| Base URL                | `https://restful-booker.herokuapp.com` |
| Authentication          | Token or Basic Authentication          |
| Content Type            | `application/json`                     |
| Expected Success Status | `200 OK`                               |

Example request:

```http
PUT https://restful-booker.herokuapp.com/booking/1
```

The `{id}` path parameter represents the booking resource that will be updated.

---

# 4. Authentication Requirements

The PUT booking endpoint requires authentication.

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

---

# 5. Request Headers

Typical PUT request headers:

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

The actual API behavior should be documented during test execution.

---

# 6. Request Body

Example valid PUT request body:

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

Expected data structure:

| Field           | Data Type   | Required |
| --------------- | ----------- | -------- |
| firstname       | String      | Yes      |
| lastname        | String      | Yes      |
| totalprice      | Number      | Yes      |
| depositpaid     | Boolean     | Yes      |
| bookingdates    | Object      | Yes      |
| checkin         | Date/String | Yes      |
| checkout        | Date/String | Yes      |
| additionalneeds | String      | No       |

The PUT request should contain the complete booking resource.

---

# 7. Positive Testing

Positive testing verifies that the API correctly processes valid PUT requests.

## Positive Test Scenarios

| Test ID     | Test Scenario                             | Expected Result                |
| ----------- | ----------------------------------------- | ------------------------------ |
| PUT_POS_001 | Update booking with valid data            | `200 OK`                       |
| PUT_POS_002 | Update firstname                          | Updated firstname returned     |
| PUT_POS_003 | Update lastname                           | Updated lastname returned      |
| PUT_POS_004 | Update total price                        | Updated price returned         |
| PUT_POS_005 | Update deposit status                     | Updated boolean value returned |
| PUT_POS_006 | Update check-in date                      | Updated date returned          |
| PUT_POS_007 | Update check-out date                     | Updated date returned          |
| PUT_POS_008 | Update additional needs                   | Updated value returned         |
| PUT_POS_009 | Update all booking fields                 | Complete booking updated       |
| PUT_POS_010 | Update booking using valid token          | Request accepted               |
| PUT_POS_011 | Update booking using Basic Authentication | Request accepted               |

Example expected response:

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

---

# 8. Negative Testing

Negative testing verifies API behavior when invalid or unauthorized requests are submitted.

## Negative Test Scenarios

| Test ID     | Test Scenario                | Expected Result            |
| ----------- | ---------------------------- | -------------------------- |
| PUT_NEG_001 | Missing authentication       | Request rejected           |
| PUT_NEG_002 | Invalid authentication token | Request rejected           |
| PUT_NEG_003 | Invalid Basic Authentication | Request rejected           |
| PUT_NEG_004 | Invalid booking ID           | Appropriate error response |
| PUT_NEG_005 | Non-existing booking ID      | Resource not updated       |
| PUT_NEG_006 | Missing request body         | Request rejected           |
| PUT_NEG_007 | Empty JSON body              | Request rejected           |
| PUT_NEG_008 | Malformed JSON               | Request rejected           |
| PUT_NEG_009 | Missing required field       | Validation error           |
| PUT_NEG_010 | Invalid field data type      | Validation error           |
| PUT_NEG_011 | Invalid date format          | Validation error           |
| PUT_NEG_012 | Invalid HTTP method          | Appropriate status code    |
| PUT_NEG_013 | Invalid Content-Type         | Request rejected           |
| PUT_NEG_014 | Null required field          | Validation error           |
| PUT_NEG_015 | Invalid boolean value        | Validation error           |

All unexpected API behavior should be documented and evaluated as a potential defect.

---

# 9. Boundary and Validation Testing

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

Expected behavior:

The API should validate the value according to the defined requirements.

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

The API response should be documented for each value.

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

The actual API behavior should be recorded during test execution.

---

# 10. Response Validation

The API response should be validated after every PUT request.

Validation areas:

* HTTP status code
* Response time
* Response headers
* Response Content-Type
* JSON structure
* Field names
* Field data types
* Updated field values
* Missing fields
* Unexpected fields

Example validation workflow:

```text
Send PUT Request
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
Validate Updated Values
      │
      ▼
Verify Data Persistence
```

---

# 11. Status Code Validation

Expected HTTP status codes may include:

| Status Code                  | Meaning                 | Test Usage                 |
| ---------------------------- | ----------------------- | -------------------------- |
| `200 OK`                     | Request successful      | Valid booking update       |
| `400 Bad Request`            | Invalid request         | Invalid request data       |
| `401 Unauthorized`           | Authentication required | Missing authentication     |
| `403 Forbidden`              | Access denied           | Invalid authentication     |
| `404 Not Found`              | Resource not found      | Invalid booking ID         |
| `405 Method Not Allowed`     | Invalid HTTP method     | Unsupported method         |
| `415 Unsupported Media Type` | Invalid Content-Type    | Unsupported request format |
| `500 Internal Server Error`  | Server error            | Unexpected API failure     |

The actual Restful Booker API response should be compared against expected REST API behavior.

Any inconsistent or unexpected status code should be documented.

---

# 12. Response Header Validation

Validate the response headers.

Expected headers may include:

```http
Content-Type: application/json
```

Validation checklist:

* Content-Type exists
* Content-Type is correct
* Response encoding is valid
* Server headers are documented
* Unexpected headers are reviewed

Example Postman test:

```javascript
pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});
```

---

# 13. Response Body Validation

The response body should contain the updated booking resource.

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

Validate:

| Validation                   | Expected Result  |
| ---------------------------- | ---------------- |
| firstname exists             | Field returned   |
| lastname exists              | Field returned   |
| totalprice exists            | Field returned   |
| depositpaid exists           | Field returned   |
| bookingdates exists          | Object returned  |
| checkin exists               | Field returned   |
| checkout exists              | Field returned   |
| Updated values match request | Values identical |
| Data types are correct       | Schema compliant |

Example Postman test:

```javascript
pm.test("Updated firstname is correct", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.firstname).to.eql("Filip");
});
```

---

# 14. JSON Schema Validation

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

# 15. Data Persistence Validation

A successful PUT response does not automatically confirm that the updated data was permanently stored.

Data persistence should be verified using a GET request.

## Validation Process

```text
1. Send PUT /booking/{id}
2. Validate 200 OK
3. Validate PUT response body
4. Send GET /booking/{id}
5. Compare GET response with PUT request
6. Confirm updated values are stored
```

Example:

```http
PUT /booking/1
```

Updated firstname:

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

```json
{
  "firstname": "Filip"
}
```

The GET response should contain the updated data.

If the PUT response returns the updated value but the subsequent GET request returns the original value, the issue should be investigated as a potential data persistence defect.

---

# 16. Postman Test Script

Example complete Postman test script:

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

pm.test("Lastname is updated correctly", function () {
    pm.expect(jsonData.lastname).to.eql("Jelinek");
});

pm.test("Total price is updated correctly", function () {
    pm.expect(jsonData.totalprice).to.eql(450);
});

pm.test("Deposit status is correct", function () {
    pm.expect(jsonData.depositpaid).to.eql(true);
});

pm.test("Booking dates object exists", function () {
    pm.expect(jsonData).to.have.property("bookingdates");
});

pm.test("Check-in date is correct", function () {
    pm.expect(jsonData.bookingdates.checkin)
        .to.eql("2026-07-15");
});

pm.test("Check-out date is correct", function () {
    pm.expect(jsonData.bookingdates.checkout)
        .to.eql("2026-07-20");
});

pm.test("Additional needs are correct", function () {
    pm.expect(jsonData.additionalneeds)
        .to.eql("Breakfast");
});
```

---

# 17. Test Execution Record

Use the following structure to document PUT request execution.

| Field           | Value                 |
| --------------- | --------------------- |
| Test ID         | PUT_XXX               |
| Test Date       | YYYY-MM-DD            |
| Tester          | Filip Jelinek         |
| HTTP Method     | PUT                   |
| Endpoint        | `/booking/{id}`       |
| Booking ID      |                       |
| Authentication  |                       |
| Request Body    |                       |
| Expected Status |                       |
| Actual Status   |                       |
| Expected Result |                       |
| Actual Result   |                       |
| Response Time   |                       |
| Test Status     | PASS / FAIL / BLOCKED |
| Bug ID          |                       |
| Notes           |                       |

Example:

| Field           | Value                                |
| --------------- | ------------------------------------ |
| Test ID         | PUT_POS_001                          |
| Test Date       | 2026-07-11                           |
| Tester          | Filip Jelinek                        |
| HTTP Method     | PUT                                  |
| Endpoint        | `/booking/1`                         |
| Booking ID      | 1                                    |
| Authentication  | Valid Token                          |
| Request Body    | Valid complete booking JSON          |
| Expected Status | 200                                  |
| Actual Status   | 200                                  |
| Expected Result | Booking successfully updated         |
| Actual Result   | Booking successfully updated         |
| Response Time   | 320 ms                               |
| Test Status     | PASS                                 |
| Bug ID          | N/A                                  |
| Notes           | Response values matched request data |

---

# 18. Defect Reporting

If unexpected behavior is identified during PUT request testing, create a bug report.

Example defect title:

```text
PUT /booking/{id} accepts invalid totalprice data type
```

The bug report should include:

* Bug ID
* Title
* Environment
* API endpoint
* HTTP method
* Preconditions
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
PUT /booking/{id} accepts invalid totalprice data type

Endpoint:
PUT /booking/1

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

Expected Result:
The API should reject the request because totalprice contains an invalid data type.

Actual Result:
The API accepts the request and updates the booking.

Severity:
Medium

Priority:
Medium
```

---

# 19. Testing Checklist

## Request Configuration

* [ ] Correct PUT method selected
* [ ] Correct endpoint configured
* [ ] Valid booking ID used
* [ ] Environment variables configured
* [ ] Authentication configured
* [ ] Request headers configured
* [ ] Content-Type configured
* [ ] Complete request body provided

## Positive Testing

* [ ] Valid booking update tested
* [ ] Firstname update tested
* [ ] Lastname update tested
* [ ] Total price update tested
* [ ] Deposit status update tested
* [ ] Check-in date update tested
* [ ] Check-out date update tested
* [ ] Additional needs update tested
* [ ] Complete resource update tested

## Negative Testing

* [ ] Missing authentication tested
* [ ] Invalid authentication tested
* [ ] Invalid booking ID tested
* [ ] Non-existing booking ID tested
* [ ] Missing request body tested
* [ ] Empty JSON body tested
* [ ] Malformed JSON tested
* [ ] Missing required fields tested
* [ ] Invalid data types tested
* [ ] Null values tested
* [ ] Invalid date formats tested
* [ ] Invalid Content-Type tested

## Response Validation

* [ ] Status code validated
* [ ] Response time validated
* [ ] Response headers validated
* [ ] Content-Type validated
* [ ] JSON structure validated
* [ ] Required fields validated
* [ ] Data types validated
* [ ] Updated values validated
* [ ] JSON schema validated

## Data Persistence

* [ ] PUT request executed
* [ ] PUT response validated
* [ ] GET verification request executed
* [ ] Updated values confirmed
* [ ] Data persistence verified

## Documentation

* [ ] Test result recorded
* [ ] Evidence captured
* [ ] Failed tests investigated
* [ ] Bug reports created
* [ ] Bug IDs linked to test cases
* [ ] Final test status assigned

---

# Conclusion

This PUT testing template provides a structured approach for validating complete resource updates in the Restful Booker API.

The template covers:

* Request configuration
* Authentication validation
* Positive testing
* Negative testing
* Boundary testing
* Response validation
* JSON schema validation
* Data persistence verification
* Postman test automation
* Test execution documentation
* Defect reporting

The template can be reused as a standard reference for PUT request testing throughout the Restful Booker API Testing Project.
