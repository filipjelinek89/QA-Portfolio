# Postman Collection

**Project:** Restful Booker API Testing Project
**Component:** Postman Collection
**Collection Name:** Restful Booker API Testing
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Collection Overview](#2-collection-overview)
* [3. Collection File](#3-collection-file)
* [4. Collection Architecture](#4-collection-architecture)
* [5. Folder Structure](#5-folder-structure)
* [6. Request Naming Convention](#6-request-naming-convention)
* [7. Test Case Traceability](#7-test-case-traceability)
* [8. Environment Dependencies](#8-environment-dependencies)
* [9. Dynamic Variable Management](#9-dynamic-variable-management)
* [10. Authentication Handling](#10-authentication-handling)
* [11. Request Configuration](#11-request-configuration)
* [12. Postman Test Scripts](#12-postman-test-scripts)
* [13. Assertion Strategy](#13-assertion-strategy)
* [14. Negative Test Implementation](#14-negative-test-implementation)
* [15. Boundary Test Implementation](#15-boundary-test-implementation)
* [16. Request Chaining](#16-request-chaining)
* [17. E2E Workflow Implementation](#17-e2e-workflow-implementation)
* [18. Collection Execution](#18-collection-execution)
* [19. Collection Export](#19-collection-export)
* [20. Collection Maintenance](#20-collection-maintenance)
* [21. Collection Summary](#21-collection-summary)

---

# 1. Purpose

The purpose of this directory is to store the exported Postman collection used for API test implementation and execution within the **Restful Booker API Testing Project**.

The Postman collection translates documented API test cases into executable API requests and automated assertions.

The implementation follows the project traceability model:

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

The collection is designed to demonstrate:

* REST API request configuration
* HTTP method testing
* Environment variable usage
* Dynamic variable extraction
* Authentication token handling
* Request chaining
* Response validation
* Automated assertions
* Positive API testing
* Negative API testing
* Boundary testing
* CRUD workflow testing
* End-to-end API testing
* Regression test execution

The exported collection file represents the actual Postman implementation used during project execution.

---

# 2. Collection Overview

| Attribute               | Value                               |
| ----------------------- | ----------------------------------- |
| Collection Name         | Restful Booker API Testing          |
| API                     | Restful Booker                      |
| API Type                | REST API                            |
| Primary Data Format     | JSON                                |
| Test Tool               | Postman                             |
| Script Language         | JavaScript                          |
| Authentication          | Cookie Token / Basic Authentication |
| Environment             | Restful Booker - QA                 |
| Test Design Source      | API Test Cases                      |
| Primary Execution Type  | Manual and Automated                |
| Planned CLI Execution   | Newman                              |
| Planned CI/CD Execution | GitHub Actions                      |

The collection covers the following API resources:

```text
/ping
/auth
/booking
/booking/{id}
```

The collection implements requests for:

```text
GET
POST
PUT
PATCH
DELETE
```

---

# 3. Collection File

The final exported Postman collection will be stored as:

```text
Restful_Booker_API_Testing.postman_collection.json
```

Expected directory structure:

```text
05_Postman/
│
└── Collection/
    ├── README.md
    └── Restful_Booker_API_Testing.postman_collection.json
```

The JSON collection file will be added after Postman request implementation and test execution preparation are completed.

The collection file must be exported directly from Postman.

The collection JSON should not be manually created or modified solely for portfolio presentation.

This ensures that the repository contains the actual executable test collection used during the project.

---

# 4. Collection Architecture

The collection is organized by API operation and test purpose.

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

The architecture separates:

```text
Functional API Testing
        ↓
Negative Testing
        ↓
Boundary Testing
        ↓
E2E Workflow Testing
```

This structure supports both manual request review and automated collection execution.

---

# 5. Folder Structure

## 00 - Health Check

Primary endpoint:

```text
GET /ping
```

Testing focus:

* API availability
* Health-check response
* Documented status code
* Response metadata
* HTTP method handling

Primary test case group:

```text
TC-PING-*
```

---

## 01 - Authentication

Primary endpoint:

```text
POST /auth
```

Testing focus:

* Valid credentials
* Token generation
* Response contract
* Token extraction
* Token validation
* Authentication behaviour

Primary test case group:

```text
TC-AUTH-*
```

---

## 02 - Booking - GET

Primary endpoints:

```text
GET /booking
GET /booking/{id}
```

Testing focus:

* Booking ID retrieval
* Response contract
* Query parameter filtering
* Individual booking retrieval
* Booking data validation
* Resource lookup behaviour

Primary test case groups:

```text
TC-GETIDS-*
TC-GET-*
```

---

## 03 - Booking - POST

Primary endpoint:

```text
POST /booking
```

Testing focus:

* Booking creation
* Request body validation
* Response contract
* Booking ID generation
* Request-response consistency
* Dynamic booking ID extraction

Primary test case group:

```text
TC-CREATE-*
```

---

## 04 - Booking - PUT

Primary endpoint:

```text
PUT /booking/{id}
```

Testing focus:

* Full booking update
* Authentication
* PUT request payload
* Response contract
* Updated data persistence

Primary test case group:

```text
TC-PUT-*
```

---

## 05 - Booking - PATCH

Primary endpoint:

```text
PATCH /booking/{id}
```

Testing focus:

* Partial booking update
* Single-property update
* Multiple-property update
* Authentication
* Updated property persistence
* Unchanged property preservation

Primary test case group:

```text
TC-PATCH-*
```

---

## 06 - Booking - DELETE

Primary endpoint:

```text
DELETE /booking/{id}
```

Testing focus:

* Booking deletion
* Authentication
* Resource state transition
* Repeated deletion
* Post-deletion verification

Primary test case group:

```text
TC-DELETE-*
```

---

## 07 - Negative Testing

Testing focus:

* Invalid credentials
* Missing properties
* Null values
* Empty values
* Incorrect data types
* Malformed JSON
* Invalid booking IDs
* Missing authentication
* Invalid authentication
* Unsupported Content-Type values
* Unexpected request data

Negative requests may target endpoints already represented in functional folders.

Requests are placed in this folder when the primary purpose is negative API validation.

---

## 08 - Boundary Testing

Testing focus:

* Numeric boundaries
* String-length boundaries
* Booking ID boundaries
* Zero values
* Negative values
* Very large values
* Date boundaries
* Logical date relationships

Examples:

```text
totalprice = -1
totalprice = 0
totalprice = 2147483647
totalprice = 2147483648
bookingId = 0
bookingId = -1
```

Boundary tests are separated from the primary functional workflow to improve collection organization.

---

## 09 - E2E Workflows

Testing focus:

* Authentication
* Dynamic token extraction
* Booking creation
* Dynamic booking ID extraction
* Booking retrieval
* Full update
* Partial update
* Data persistence
* Booking deletion
* Post-deletion verification

Primary test case group:

```text
TC-E2E-*
```

The E2E folder contains sequential requests designed for Postman Collection Runner and Newman execution.

---

# 6. Request Naming Convention

Postman requests use the following naming convention:

```text
[TC ID] - [HTTP Method] - [Test Objective]
```

Examples:

```text
TC-PING-001 - GET - Valid Health Check

TC-AUTH-001 - POST - Valid Credentials

TC-GETIDS-001 - GET - Retrieve All Booking IDs

TC-GET-001 - GET - Existing Booking

TC-CREATE-001 - POST - Complete Valid Booking

TC-PUT-001 - PUT - Valid Full Update

TC-PATCH-001 - PATCH - Update Firstname Only

TC-DELETE-001 - DELETE - Existing Booking

TC-E2E-001 - Complete CRUD Lifecycle
```

The test case ID is placed at the beginning of the request name.

This allows direct traceability between Postman and project documentation.

Example:

```text
API_Test_Cases.md
TC-CREATE-001
        ↓
Postman
TC-CREATE-001 - POST - Complete Valid Booking
```

---

# 7. Test Case Traceability

Each Postman request should map to a documented test case.

Example:

| Test Case     | Postman Request                               |
| ------------- | --------------------------------------------- |
| TC-PING-001   | TC-PING-001 - GET - Valid Health Check        |
| TC-AUTH-001   | TC-AUTH-001 - POST - Valid Credentials        |
| TC-GET-001    | TC-GET-001 - GET - Existing Booking           |
| TC-CREATE-001 | TC-CREATE-001 - POST - Complete Valid Booking |
| TC-PUT-001    | TC-PUT-001 - PUT - Valid Full Update          |
| TC-PATCH-001  | TC-PATCH-001 - PATCH - Update Firstname Only  |
| TC-DELETE-001 | TC-DELETE-001 - DELETE - Existing Booking     |

The intended traceability chain is:

```text
REQ-CREATE-001
      ↓
TS-CREATE-001
      ↓
TC-CREATE-001
      ↓
TC-CREATE-001 - POST - Complete Valid Booking
      ↓
Postman Assertions
      ↓
Execution Result
```

If a confirmed defect is identified:

```text
TC-CREATE-001
      ↓
FAIL
      ↓
BUG-API-XXX
```

---

# 8. Environment Dependencies

The collection uses the Postman environment:

```text
Restful Booker - QA
```

The environment is stored separately from the collection.

Primary environment variables:

| Variable    | Purpose                                    |
| ----------- | ------------------------------------------ |
| `baseUrl`   | API base URL                               |
| `authToken` | Dynamically generated authentication token |
| `bookingId` | Dynamically generated booking ID           |
| `firstname` | Reusable booking test data                 |
| `lastname`  | Reusable booking test data                 |

Requests should use environment variables instead of hardcoded runtime values where practical.

Example:

```text
{{baseUrl}}/booking/{{bookingId}}
```

Authentication example:

```text
Cookie: token={{authToken}}
```

The collection depends on the correct Postman environment being selected before execution.

---

# 9. Dynamic Variable Management

Dynamic variables are used to support request chaining and repeatable execution.

## Authentication Token

Source request:

```text
POST /auth
```

Response example:

```json
{
  "token": "abc123"
}
```

The token is extracted using a Postman test script.

Example implementation:

```javascript
const response = pm.response.json();

pm.environment.set("authToken", response.token);
```

The value is stored as:

```text
{{authToken}}
```

The token is reused by protected API operations.

---

## Booking ID

Source request:

```text
POST /booking
```

Response example:

```json
{
  "bookingid": 123,
  "booking": {}
}
```

The booking ID is extracted using:

```javascript
const response = pm.response.json();

pm.environment.set("bookingId", response.bookingid);
```

The value is stored as:

```text
{{bookingId}}
```

The booking ID is reused by:

```text
GET /booking/{{bookingId}}
PUT /booking/{{bookingId}}
PATCH /booking/{{bookingId}}
DELETE /booking/{{bookingId}}
```

---

# 10. Authentication Handling

Protected booking operations require authentication.

Protected methods:

```text
PUT
PATCH
DELETE
```

The primary automated workflow uses cookie token authentication.

Header example:

```text
Cookie: token={{authToken}}
```

The token is dynamically generated by:

```text
POST {{baseUrl}}/auth
```

The collection also includes Basic authentication testing where defined by the API test cases.

Authentication tests cover:

* Valid token
* Missing authentication
* Invalid token
* Modified token
* Valid Basic authentication

Unauthorized modification tests should verify both:

```text
Authentication Response
        +
Booking State After Request
```

A rejected response alone is not sufficient when testing modification protection.

Example:

```text
GET Original Booking
        ↓
Attempt Unauthorized PATCH
        ↓
GET Booking Again
        ↓
Compare Data
```

The booking must remain unchanged.

---

# 11. Request Configuration

## Base URL

Requests should use:

```text
{{baseUrl}}
```

Example:

```text
{{baseUrl}}/booking
```

Hardcoded base URLs should be avoided in collection requests.

---

## JSON Requests

JSON request bodies should use:

```text
Content-Type: application/json
```

Primary JSON operations:

```text
POST /auth
POST /booking
PUT /booking/{id}
PATCH /booking/{id}
```

---

## Path Parameters

Booking resource requests use:

```text
{{bookingId}}
```

Example:

```text
{{baseUrl}}/booking/{{bookingId}}
```

---

## Query Parameters

Booking filtering tests use Postman query parameter configuration.

Supported documented parameters:

```text
firstname
lastname
checkin
checkout
```

Example:

```text
{{baseUrl}}/booking?firstname={{firstname}}
```

Where practical, query parameters should be configured using the Postman **Params** interface instead of manually concatenating all query strings.

---

# 12. Postman Test Scripts

Postman test scripts are written in JavaScript using the `pm` API.

Scripts are used to validate:

* HTTP status codes
* Response structure
* Response data types
* Required properties
* Response values
* Request-response consistency
* Authentication token generation
* Booking ID generation
* Data persistence
* State transitions
* Response time

Example status assertion:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Example JSON response assertion:

```javascript
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});
```

Example property assertion:

```javascript
pm.test("Response contains bookingid", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("bookingid");
});
```

Example data type assertion:

```javascript
pm.test("bookingid is a number", function () {
    const response = pm.response.json();

    pm.expect(response.bookingid).to.be.a("number");
});
```

Example value assertion:

```javascript
pm.test("Firstname matches expected value", function () {
    const response = pm.response.json();

    pm.expect(response.booking.firstname).to.eql("Filip");
});
```

Test scripts should validate meaningful API behaviour instead of only checking that a response was returned.

---

# 13. Assertion Strategy

The collection uses multiple assertion levels.

## Level 1 - HTTP Validation

Examples:

```text
Status code
Response availability
Response time
```

Example:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

## Level 2 - Response Format Validation

Examples:

```text
JSON response
Root object
Root array
```

Example:

```javascript
pm.test("Response is an array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
});
```

---

## Level 3 - Contract Validation

Examples:

```text
Required properties
Nested objects
Data types
```

Example:

```javascript
pm.test("Booking contains required properties", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("firstname");
    pm.expect(response).to.have.property("lastname");
    pm.expect(response).to.have.property("totalprice");
    pm.expect(response).to.have.property("depositpaid");
    pm.expect(response).to.have.property("bookingdates");
});
```

---

## Level 4 - Data Validation

Examples:

```text
Submitted value equals returned value
Updated value persisted
Booking ID consistency
```

Example:

```javascript
pm.test("Returned firstname matches submitted firstname", function () {
    const response = pm.response.json();

    pm.expect(response.booking.firstname).to.eql("Filip");
});
```

---

## Level 5 - Workflow Validation

Examples:

```text
Token can authenticate protected request
Created booking can be retrieved
PUT values persist
PATCH omitted values remain unchanged
Deleted booking cannot be retrieved
```

Workflow validation requires multiple API requests.

The collection should not rely only on isolated status-code assertions.

---

# 14. Negative Test Implementation

Negative test requests are designed by modifying a valid baseline request.

Example baseline:

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

Negative variation:

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

Primary changed condition:

```text
firstname removed
```

This supports defect isolation.

Negative tests should record:

* Request variation
* HTTP status code
* Response body
* Whether a resource was created or modified
* Whether invalid data was persisted

Where the API documentation does not define exact error behaviour, test results should be classified using documented requirements and observed API behaviour.

---

# 15. Boundary Test Implementation

Boundary tests are implemented separately from the primary valid workflow.

Example numeric values:

```text
-1
0
1
2147483647
2147483648
```

Example booking ID values:

```text
-1
0
999999999
```

Example string lengths:

```text
1 character
255 characters
256 characters
```

Boundary tests are primarily exploratory where the API documentation does not define explicit limits.

Acceptance of an undocumented boundary value is not automatically classified as a defect.

The observed behaviour must be analyzed against:

```text
Published API Contract
        +
Data Model
        +
HTTP Behaviour
        +
Resource Integrity
```

---

# 16. Request Chaining

The collection uses dynamic request chaining.

Primary dependency chain:

```text
POST /auth
      ↓
Extract token
      ↓
{{authToken}}
      ↓
POST /booking
      ↓
Extract booking ID
      ↓
{{bookingId}}
      ↓
GET /booking/{{bookingId}}
      ↓
PUT /booking/{{bookingId}}
      ↓
PATCH /booking/{{bookingId}}
      ↓
DELETE /booking/{{bookingId}}
```

Request chaining reduces:

* Hardcoded values
* Manual data copying
* Dependency on default public records
* Execution preparation time

It improves:

* Repeatability
* Regression execution
* Newman compatibility
* CI/CD compatibility

Dynamic chaining is a primary technical objective of the project.

---

# 17. E2E Workflow Implementation

The E2E workflow is implemented in:

```text
09 - E2E Workflows
```

Recommended request sequence:

```text
01 - Create Authentication Token
02 - Create Booking
03 - Get Created Booking
04 - Full Update Booking
05 - Get Fully Updated Booking
06 - Partial Update Booking
07 - Get Partially Updated Booking
08 - Delete Booking
09 - Verify Booking Deletion
```

## E2E Variables

The workflow uses:

```text
{{authToken}}
{{bookingId}}
```

Both values must be generated during runtime.

## E2E Execution Objective

The workflow should execute from beginning to end without:

* Manually copying a token
* Manually copying a booking ID
* Editing request URLs during execution
* Editing authentication headers during execution

Expected execution flow:

```text
RUN COLLECTION
      ↓
Generate Token
      ↓
Create Booking
      ↓
Store Booking ID
      ↓
Validate Booking
      ↓
Update Booking
      ↓
Validate Update
      ↓
Patch Booking
      ↓
Validate Patch
      ↓
Delete Booking
      ↓
Verify Deletion
      ↓
WORKFLOW COMPLETE
```

The E2E workflow is a primary regression and CI/CD candidate.

---

# 18. Collection Execution

The Postman collection can be executed using:

* Individual request execution
* Postman Collection Runner
* Newman CLI
* GitHub Actions

## Individual Request Execution

Used primarily for:

* Initial test implementation
* Exploratory testing
* Defect investigation
* Assertion debugging

## Collection Runner

Used for:

* Folder execution
* Regression testing
* Sequential workflow validation
* Execution summary review

## Newman

Planned command-line execution:

```bash
newman run Restful_Booker_API_Testing.postman_collection.json \
  -e Restful_Booker_QA.postman_environment.json
```

The exact command and reporter configuration will be documented in the Newman section of the project after implementation.

## GitHub Actions

The exported collection and environment will later be used for automated CI/CD execution.

The planned workflow is:

```text
GitHub Push
      ↓
GitHub Actions
      ↓
Install Newman
      ↓
Execute Postman Collection
      ↓
Generate Test Result
      ↓
Pass / Fail Workflow
```

---

# 19. Collection Export

The collection should be exported after the required requests and test scripts are implemented.

Export process:

1. Open Postman.
2. Locate `Restful Booker API Testing`.
3. Open the collection options.
4. Select **Export**.
5. Export the collection as a supported Postman collection JSON format.
6. Save the exported file as:

```text
Restful_Booker_API_Testing.postman_collection.json
```

7. Add the file to:

```text
05_Postman/Collection/
```

The exported file should be reviewed before being committed to GitHub.

Review should confirm:

* No personal secrets are included.
* No sensitive credentials are included.
* No unintended local values are included.
* Environment-specific runtime values are not unnecessarily hardcoded.
* Request names contain correct TC IDs.
* Test scripts are included.
* Collection folder structure is correct.

The public Restful Booker demonstration credentials may be used according to the project API documentation.

Runtime authentication tokens should not be intentionally committed as reusable credentials.

---

# 20. Collection Maintenance

The Postman collection should remain synchronized with project test documentation.

If a test case is added:

```text
API_Test_Cases.md
      ↓
Postman Request Added
      ↓
Assertions Added
      ↓
Execution Result Added
```

If a test case is removed:

```text
Test Case Review
      ↓
Postman Request Review
      ↓
Traceability Review
```

If a request identifies a confirmed defect:

```text
Postman Request
      ↓
Failed Assertion / Unexpected Behaviour
      ↓
Manual Verification
      ↓
Re-execution
      ↓
Defect Analysis
      ↓
BUG-API-XXX
```

Postman assertion failures are not automatically classified as API defects.

Possible causes include:

* Incorrect expected result
* Incorrect test data
* Environment reset
* Expired or invalid runtime state
* Incorrect variable scope
* Request dependency failure
* Incorrect assertion logic
* API defect

Each unexpected result must be analyzed before defect classification.

---

# 21. Collection Summary

The Postman collection is the executable API testing layer of the **Restful Booker API Testing Project**.

It implements test cases documented in:

```text
04_Test_Cases/API_Test_Cases.md
```

The collection architecture contains:

```text
00 - Health Check
01 - Authentication
02 - Booking - GET
03 - Booking - POST
04 - Booking - PUT
05 - Booking - PATCH
06 - Booking - DELETE
07 - Negative Testing
08 - Boundary Testing
09 - E2E Workflows
```

The collection demonstrates:

```text
REST API Testing
HTTP Method Testing
Postman Request Configuration
Environment Variables
Dynamic Token Extraction
Dynamic Booking ID Extraction
Request Chaining
JavaScript Assertions
Response Contract Validation
Data Type Validation
Data Consistency Validation
Authentication Testing
Authorization Testing
Negative Testing
Boundary Testing
CRUD Testing
State Transition Testing
E2E Testing
Regression Testing
```

The primary automated workflow uses:

```text
POST /auth
      ↓
{{authToken}}
      ↓
POST /booking
      ↓
{{bookingId}}
      ↓
GET
      ↓
PUT
      ↓
PATCH
      ↓
DELETE
      ↓
GET Deletion Verification
```

The final exported collection will be added to this directory after the Postman implementation is completed.

The collection will later be used as the execution source for:

```text
Postman Collection Runner
        ↓
Newman CLI
        ↓
GitHub Actions CI/CD
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
