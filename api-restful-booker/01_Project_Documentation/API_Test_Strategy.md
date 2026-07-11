# API Test Strategy

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Strategy
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Testing Type:** REST API Testing
**Automation Level:** Postman JavaScript Assertions and Newman CLI
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Strategy Overview](#2-strategy-overview)
* [3. Testing Principles](#3-testing-principles)
* [4. API Testing Model](#4-api-testing-model)
* [5. Test Layers](#5-test-layers)
* [6. Endpoint-Based Testing Strategy](#6-endpoint-based-testing-strategy)
* [7. HTTP Method Testing Strategy](#7-http-method-testing-strategy)
* [8. Request Validation Strategy](#8-request-validation-strategy)
* [9. Response Validation Strategy](#9-response-validation-strategy)
* [10. HTTP Status Code Strategy](#10-http-status-code-strategy)
* [11. Header Validation Strategy](#11-header-validation-strategy)
* [12. JSON Data Validation Strategy](#12-json-data-validation-strategy)
* [13. Postman Collection Architecture](#13-postman-collection-architecture)
* [14. Request Naming Convention](#14-request-naming-convention)
* [15. Environment and Variable Strategy](#15-environment-and-variable-strategy)
* [16. Dynamic Data Extraction](#16-dynamic-data-extraction)
* [17. Request Chaining Strategy](#17-request-chaining-strategy)
* [18. Test Data Management Strategy](#18-test-data-management-strategy)
* [19. Positive Testing Strategy](#19-positive-testing-strategy)
* [20. Negative Testing Strategy](#20-negative-testing-strategy)
* [21. Boundary Value Strategy](#21-boundary-value-strategy)
* [22. Authentication and Authorization Strategy](#22-authentication-and-authorization-strategy)
* [23. CRUD Validation Strategy](#23-crud-validation-strategy)
* [24. Query Parameter Testing Strategy](#24-query-parameter-testing-strategy)
* [25. Error Handling Validation](#25-error-handling-validation)
* [26. Automated Assertion Strategy](#26-automated-assertion-strategy)
* [27. Assertion Design Standards](#27-assertion-design-standards)
* [28. JSON Schema Validation Strategy](#28-json-schema-validation-strategy)
* [29. Response Time Validation Strategy](#29-response-time-validation-strategy)
* [30. End-to-End Workflow Strategy](#30-end-to-end-workflow-strategy)
* [31. Test Independence and Isolation](#31-test-independence-and-isolation)
* [32. Defect Investigation Strategy](#32-defect-investigation-strategy)
* [33. Regression Testing Strategy](#33-regression-testing-strategy)
* [34. Newman CLI Execution Strategy](#34-newman-cli-execution-strategy)
* [35. CI/CD Execution Strategy](#35-cicd-execution-strategy)
* [36. Test Evidence Strategy](#36-test-evidence-strategy)
* [37. Maintenance Strategy](#37-maintenance-strategy)
* [38. Strategy Risks and Limitations](#38-strategy-risks-and-limitations)
* [39. Success Criteria](#39-success-criteria)
* [40. Strategy Summary](#40-strategy-summary)

---

# 1. Purpose

The purpose of this document is to define the technical testing strategy used for the **Restful Booker API Testing Project**.

The strategy describes how API testing activities are designed, implemented, automated, executed, and maintained.

The document focuses on the practical testing methodology applied to:

* REST API endpoints
* HTTP requests
* HTTP responses
* Authentication
* CRUD operations
* Request parameters
* JSON payloads
* Dynamic test data
* Automated Postman assertions
* JSON Schema validation
* Request chaining
* End-to-end API workflows
* Newman CLI execution
* GitHub Actions integration

The API Test Plan defines the overall testing scope and project-level testing objectives.

This document defines the **technical implementation strategy used to achieve those objectives**.

---

# 2. Strategy Overview

The project uses a layered API testing strategy.

Testing begins with individual endpoint validation and gradually progresses toward automated multi-request workflows.

The strategy follows this model:

```text
API Documentation
        ↓
Endpoint Analysis
        ↓
Individual Request Validation
        ↓
Positive Functional Testing
        ↓
Negative Testing
        ↓
Boundary Testing
        ↓
Automated Response Assertions
        ↓
Dynamic Variable Extraction
        ↓
Request Chaining
        ↓
JSON Schema Validation
        ↓
End-to-End API Workflows
        ↓
Collection-Level Regression
        ↓
Newman CLI Execution
        ↓
CI/CD Automated Execution
```

The objective is to avoid treating API testing as a collection of unrelated HTTP requests.

The final test suite should operate as a structured and repeatable API regression suite.

---

# 3. Testing Principles

The following principles guide API testing throughout the project.

## 3.1 Validate Behaviour, Not Only Status Codes

A successful HTTP status code does not automatically mean the API behaves correctly.

For example:

```text
HTTP 200
```

may still contain:

* Incorrect response data
* Missing properties
* Incorrect data types
* Unexpected null values
* Incorrect nested objects
* Data inconsistent with the request

API responses are therefore validated at multiple levels.

## 3.2 Test the API Contract

The API documentation is treated as the initial contract.

Testing compares:

```text
Documented Behaviour
        ↓
Expected Behaviour
        ↓
Observed API Behaviour
```

Differences are investigated and classified appropriately.

## 3.3 Avoid Hardcoded Dynamic Data

Dynamic values such as authentication tokens and booking IDs should not be manually copied between requests.

Values are extracted from API responses and stored as Postman variables.

## 3.4 Automate Repeatable Validation

Checks that can be evaluated consistently should be implemented as automated assertions.

Manual review is used primarily for:

* Initial API exploration
* Unexpected response analysis
* Defect investigation
* Documentation ambiguity

## 3.5 Test Valid and Invalid Behaviour

Positive testing alone is insufficient.

The API is intentionally tested with invalid, malformed, incomplete, unexpected, and boundary data.

## 3.6 Preserve Test Reproducibility

Requests, test data, expected behaviour, and observed results should be sufficiently documented to allow repeated execution.

## 3.7 Separate API Defects from Test Defects

A failed assertion does not automatically represent an API defect.

The test implementation must first be reviewed.

---

# 4. API Testing Model

The project uses the following API testing model:

```text
REQUEST
   ↓
HTTP Method
Endpoint
Path Parameters
Query Parameters
Headers
Authentication
Request Body
   ↓
SERVER PROCESSING
   ↓
RESPONSE
   ↓
Status Code
Headers
Content-Type
Response Body
JSON Structure
Data Types
Values
Response Time
```

Testing may target any individual component or a combination of components.

Each test case should clearly identify the specific API behaviour being validated.

---

# 5. Test Layers

The API test suite is divided into five logical testing layers.

| Layer   | Purpose                                  |
| ------- | ---------------------------------------- |
| Layer 1 | API availability                         |
| Layer 2 | Individual endpoint functionality        |
| Layer 3 | Input validation and error handling      |
| Layer 4 | Data consistency and API workflows       |
| Layer 5 | Automated regression and CI/CD execution |

## Layer 1 — API Availability

Validates whether the API is accessible.

Primary endpoint:

```text
GET /ping
```

## Layer 2 — Endpoint Functionality

Validates individual API operations.

Examples:

```text
POST /auth
GET /booking
GET /booking/{id}
POST /booking
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

## Layer 3 — Validation and Error Handling

Validates behaviour with invalid requests.

Examples include:

* Invalid data types
* Missing fields
* Invalid authentication
* Malformed JSON
* Invalid path parameters

## Layer 4 — Data Consistency and Workflows

Validates relationships between API operations.

Example:

```text
POST booking
     ↓
GET booking
     ↓
Compare returned data
```

## Layer 5 — Automated Regression

Executes the completed API test suite using:

```text
Postman Collection Runner
Newman CLI
GitHub Actions
```

---

# 6. Endpoint-Based Testing Strategy

Each documented endpoint is analysed independently before test implementation.

The endpoint analysis identifies:

* HTTP method
* Resource path
* Authentication requirements
* Path parameters
* Query parameters
* Request headers
* Request body
* Expected response
* Expected status code
* Potential positive test conditions
* Potential negative test conditions
* Potential boundary conditions
* Dependencies on other endpoints

The analysis is documented in the Endpoint Inventory.

Example analysis structure:

| Attribute      | Example                       |
| -------------- | ----------------------------- |
| Method         | POST                          |
| Endpoint       | `/booking`                    |
| Authentication | Not required                  |
| Request Body   | JSON                          |
| Response Body  | JSON                          |
| Dynamic Output | `bookingid`                   |
| Dependency     | None                          |
| Used By        | GET, PUT, PATCH, DELETE tests |

Endpoint analysis is completed before large-scale test case creation.

---

# 7. HTTP Method Testing Strategy

Testing validates the behaviour of each supported HTTP method.

## GET

GET requests are tested for:

* Successful resource retrieval
* Resource existence
* Response data accuracy
* Query parameter behaviour
* Invalid resource identifiers
* Non-existing resources

## POST

POST requests are tested for:

* Resource creation
* Authentication token creation
* Request body validation
* Required property validation
* Data type validation
* Duplicate or repeated request behaviour where relevant

## PUT

PUT requests are tested for:

* Complete resource updates
* Required authentication
* Complete request payload behaviour
* Missing property behaviour
* Updated data persistence

## PATCH

PATCH requests are tested for:

* Single-property updates
* Multi-property updates
* Partial nested object updates
* Unchanged property preservation
* Authentication enforcement

## DELETE

DELETE requests are tested for:

* Successful resource deletion
* Authentication enforcement
* Non-existing resource behaviour
* Repeated deletion behaviour
* Post-deletion resource retrieval

Unsupported HTTP methods may also be tested where meaningful.

---

# 8. Request Validation Strategy

API requests are analysed as combinations of multiple request components.

The following request components are tested.

## HTTP Method

Verify correct and incorrect method usage.

## Endpoint Path

Verify valid and invalid resource paths.

## Path Parameters

Test:

* Existing IDs
* Non-existing IDs
* Zero
* Negative values
* String values
* Special characters
* Large numeric values

## Query Parameters

Test:

* Valid parameters
* Empty values
* Invalid values
* Unknown parameters
* Combined parameters

## Request Headers

Test:

* Required headers
* Missing headers
* Incorrect values
* Unsupported Content-Type values

## Authentication

Test:

* Valid token
* Missing token
* Invalid token
* Modified token

## Request Body

Test:

* Valid JSON
* Missing fields
* Null values
* Empty values
* Incorrect data types
* Malformed JSON
* Unexpected properties

Request components should be varied independently where possible to isolate API behaviour.

---

# 9. Response Validation Strategy

API responses are validated using multiple validation levels.

```text
Level 1 - Transport Result
Level 2 - HTTP Metadata
Level 3 - Response Structure
Level 4 - Data Types
Level 5 - Business Data
Level 6 - Cross-request Consistency
```

## Level 1 — Transport Result

Validate that a response is received.

## Level 2 — HTTP Metadata

Validate:

* Status code
* Headers
* Content-Type

## Level 3 — Response Structure

Validate:

* JSON object
* JSON array
* Required properties
* Nested objects

## Level 4 — Data Types

Validate:

* String
* Number
* Boolean
* Object
* Array

## Level 5 — Business Data

Validate actual response values.

Example:

```text
Submitted firstname = Filip
Returned firstname = Filip
```

## Level 6 — Cross-request Consistency

Validate data across API operations.

Example:

```text
POST /booking
      ↓
firstname = Filip
      ↓
GET /booking/{id}
      ↓
firstname must still equal Filip
```

---

# 10. HTTP Status Code Strategy

HTTP status codes are validated against documented behaviour and HTTP semantics.

Potential status codes include:

| Status Code | Meaning                |
| ----------- | ---------------------- |
| 200         | OK                     |
| 201         | Created                |
| 400         | Bad Request            |
| 403         | Forbidden              |
| 404         | Not Found              |
| 405         | Method Not Allowed     |
| 415         | Unsupported Media Type |
| 500         | Internal Server Error  |

The exact expected status code is defined per test case.

The testing strategy does not assume that every negative request must return `400 Bad Request`.

Observed behaviour is compared with:

* API documentation
* Endpoint consistency
* HTTP semantics
* Comparable API operations

Unexpected status codes are investigated.

---

# 11. Header Validation Strategy

Relevant HTTP response headers are analysed.

Primary validation areas include:

* `Content-Type`
* Header existence
* Header consistency
* Media type

JSON responses are expected to identify an appropriate JSON media type where applicable.

Example validation:

```text
Content-Type contains application/json
```

Header assertions are only added where the header has meaningful testing value.

The test suite avoids creating assertions for arbitrary headers solely to increase assertion count.

---

# 12. JSON Data Validation Strategy

JSON responses are validated at property, data type, structure, and value levels.

Example booking object:

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-01",
    "checkout": "2026-07-10"
  },
  "additionalneeds": "Breakfast"
}
```

Validation may include:

```text
firstname exists
firstname is a string
firstname equals submitted firstname

lastname exists
lastname is a string
lastname equals submitted lastname

totalprice exists
totalprice is a number

depositpaid exists
depositpaid is a boolean

bookingdates exists
bookingdates is an object

bookingdates.checkin exists
bookingdates.checkin is a string

bookingdates.checkout exists
bookingdates.checkout is a string
```

Validation depth is selected according to the purpose of each test.

---

# 13. Postman Collection Architecture

The Postman collection uses a functional folder structure.

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
Functional API Operations
        +
Specialized Testing Techniques
        +
End-to-End Workflows
```

Functional folders contain endpoint-focused requests.

Negative and Boundary folders contain cross-functional tests where the primary test purpose is input validation rather than basic endpoint functionality.

The E2E folder contains dependent API workflows.

---

# 14. Request Naming Convention

Postman requests use the following naming convention:

```text
METHOD - Operation - Test Condition
```

Examples:

```text
GET - API Health Check - Valid Request
POST - Create Token - Valid Credentials
POST - Create Token - Invalid Password
GET - Booking by ID - Existing Booking
GET - Booking by ID - Non-existing Booking
POST - Create Booking - Valid Data
POST - Create Booking - Missing Firstname
PUT - Update Booking - Valid Token
PUT - Update Booking - Missing Token
PATCH - Update Firstname - Valid Data
DELETE - Booking - Existing Booking
```

The request name should make the test purpose understandable without opening the request.

Generic request names such as:

```text
Test 1
Booking Test
API Request
New Request
```

are not used.

---

# 15. Environment and Variable Strategy

A dedicated Postman environment is used.

Environment name:

```text
Restful Booker - QA
```

Initial variables:

| Variable    | Purpose                        |
| ----------- | ------------------------------ |
| `baseUrl`   | API base URL                   |
| `authToken` | Authentication token           |
| `bookingId` | Dynamically created booking ID |
| `firstname` | Reusable first-name test data  |
| `lastname`  | Reusable last-name test data   |

Requests use variable references.

Example:

```text
{{baseUrl}}/booking/{{bookingId}}
```

instead of:

```text
https://restful-booker.herokuapp.com/booking/12345
```

Variable usage improves:

* Maintainability
* Reusability
* Request chaining
* Environment portability

Dynamic variables are preferred over hardcoded runtime values.

---

# 16. Dynamic Data Extraction

Dynamic values returned by API responses are extracted using Postman JavaScript scripts.

## Authentication Token

Conceptual extraction flow:

```text
POST /auth
      ↓
Parse JSON response
      ↓
Read token property
      ↓
Store token in authToken
```

## Booking ID

Conceptual extraction flow:

```text
POST /booking
      ↓
Parse JSON response
      ↓
Read bookingid property
      ↓
Store booking ID in bookingId
```

Extraction scripts should first confirm that the expected property exists where appropriate.

Dynamic extraction supports repeatable test execution.

---

# 17. Request Chaining Strategy

Dependent API requests are connected using dynamic variables.

Primary request chain:

```text
POST /auth
      ↓
authToken

POST /booking
      ↓
bookingId

GET /booking/{{bookingId}}
      ↓
Validate booking

PUT /booking/{{bookingId}}
      ↓
Validate update

PATCH /booking/{{bookingId}}
      ↓
Validate partial update

DELETE /booking/{{bookingId}}
      ↓
Validate deletion
```

The objective is to remove manual copy-and-paste operations.

A complete workflow should be executable sequentially using the Postman Collection Runner or Newman.

---

# 18. Test Data Management Strategy

Test data is divided into four primary categories.

| Category      | Purpose                                   |
| ------------- | ----------------------------------------- |
| Valid Data    | Verify expected functionality             |
| Invalid Data  | Verify validation and error handling      |
| Boundary Data | Verify behaviour near input limits        |
| Dynamic Data  | Support isolated and repeatable execution |

## Static Test Data

Static values may be used when the value itself is the test condition.

Examples:

```text
Invalid password
Negative price
Empty firstname
Malformed date
```

## Dynamic Test Data

Dynamic data is preferred for resource identifiers and execution-specific values.

Examples:

```text
Authentication token
Booking ID
```

## Unique Test Data

Where useful, test data may include dynamically generated values to reduce conflicts in the shared public API environment.

Example concept:

```text
firstname = QA_<timestamp>
```

Unique data may be generated in pre-request scripts if required.

## Test Data Cleanup

Resources created specifically for E2E workflows should be deleted at the end of the workflow where possible.

---

# 19. Positive Testing Strategy

Positive testing validates expected API functionality using valid requests.

Positive tests establish a functional baseline.

Examples include:

* Health check with valid request
* Authentication with valid credentials
* Retrieve all booking IDs
* Retrieve existing booking
* Create booking with valid data
* Filter bookings using valid parameters
* Fully update booking using valid authentication
* Partially update booking using valid authentication
* Delete booking using valid authentication

Positive tests are generally implemented before deeper negative testing of the same functionality.

---

# 20. Negative Testing Strategy

Negative testing targets API validation and error handling.

The strategy follows a single-condition variation approach where possible.

Baseline valid request:

```json
{
  "firstname": "Filip",
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-01",
    "checkout": "2026-07-10"
  },
  "additionalneeds": "Breakfast"
}
```

Negative variation:

```text
Change firstname only
```

Example:

```json
{
  "firstname": null,
  "lastname": "Jelinek",
  "totalprice": 500,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-07-01",
    "checkout": "2026-07-10"
  },
  "additionalneeds": "Breakfast"
}
```

This approach improves defect isolation.

Negative categories include:

* Missing data
* Null data
* Empty data
* Incorrect data types
* Invalid formats
* Invalid authentication
* Malformed syntax
* Unexpected properties
* Invalid resource identifiers

---

# 21. Boundary Value Strategy

Boundary testing is applied to fields where meaningful limits or transitions can be evaluated.

## Numeric Data

Potential values include:

```text
-1
0
1
999999
2147483647
2147483648
```

## String Length

Potential values include:

```text
0
1
255
256
1000 characters
```

## Dates

Date testing includes logical and calendar boundaries.

Examples:

```text
Past date
Current date
Future date
Leap-year date
Invalid leap date
Check-in = checkout
Checkout < check-in
```

Because the API documentation may not define explicit maximum field lengths or numeric limits, observed API behaviour is documented carefully.

A test result is not automatically classified as a defect solely because the API accepts a large value unless an expected restriction can be reasonably established.

---

# 22. Authentication and Authorization Strategy

Authentication testing is divided into token generation and protected resource access.

## Token Generation

The `/auth` endpoint is tested with credential variations.

```text
Valid username + valid password
Invalid username + valid password
Valid username + invalid password
Empty username
Empty password
Missing username
Missing password
Null username
Null password
Incorrect data types
Malformed JSON
```

## Protected Requests

Protected booking operations are tested using:

```text
Valid token
Missing token
Invalid token
Modified token
```

The test strategy verifies whether protected operations correctly reject unauthorized requests.

Authentication and authorization findings are treated as functional API testing findings.

This project does not perform penetration testing.

---

# 23. CRUD Validation Strategy

CRUD testing validates the complete resource lifecycle.

## Create

Validate:

```text
Booking created
Booking ID returned
Response contains submitted data
```

## Read

Validate:

```text
Created booking can be retrieved
Retrieved data matches created data
```

## Update

Validate:

```text
PUT changes complete booking data
Updated values persist
```

## Partial Update

Validate:

```text
PATCH changes selected properties
Unmodified properties remain consistent
```

## Delete

Validate:

```text
Booking can be deleted
Deleted booking is no longer retrievable
```

The lifecycle is validated both through individual requests and E2E workflows.

---

# 24. Query Parameter Testing Strategy

The booking retrieval endpoint is tested using documented query parameters.

Testing includes:

* Single query parameters
* Multiple query parameters
* Matching values
* Non-matching values
* Empty values
* Special characters
* Unicode values
* Invalid date formats
* Unknown parameters

Combined filter testing follows this model:

```text
Single Filter
      ↓
Verify Result

Second Single Filter
      ↓
Verify Result

Combined Filters
      ↓
Verify Combined Behaviour
```

Returned booking IDs may be retrieved individually to verify whether resources actually satisfy the filter conditions when deeper validation is required.

---

# 25. Error Handling Validation

Error responses are analysed for:

* HTTP status code
* Response body
* Content-Type
* Error message
* Error structure
* Consistency
* Information usefulness

The following patterns are investigated:

```text
Same invalid condition returns different status codes
Server returns 500 for client input error
HTML error response returned by JSON API
Empty error response
Incorrect success status for invalid request
Inconsistent authentication errors
```

The strategy does not require every endpoint to use an identical error response structure unless the API contract defines such a requirement.

However, inconsistencies are documented when they affect API usability, predictability, or contract clarity.

---

# 26. Automated Assertion Strategy

Automated assertions are added to requests after the initial API behaviour is understood.

Assertions are grouped conceptually into:

```text
Protocol Assertions
Contract Assertions
Data Assertions
Workflow Assertions
```

## Protocol Assertions

Examples:

```text
Status code is expected value
Response time is below threshold
```

## Contract Assertions

Examples:

```text
Content-Type is JSON
Required property exists
Property has expected data type
JSON Schema is valid
```

## Data Assertions

Examples:

```text
Firstname matches submitted value
Total price matches expected value
Deposit paid matches expected boolean
```

## Workflow Assertions

Examples:

```text
Created booking can be retrieved
Updated value persists
Deleted booking is not retrievable
```

Assertions are selected based on the purpose of the request.

---

# 27. Assertion Design Standards

Automated assertions should follow these standards.

## Clear Test Names

Preferred:

```text
Status code is 200
Token is a non-empty string
Booking ID is returned
Firstname matches submitted test data
```

Avoid:

```text
Test passed
Check response
Validation
Test 1
```

## One Clear Validation Purpose

Where practical, each `pm.test` block should validate one logical condition.

## Meaningful Expected Values

Expected values should come from:

* Test data
* Environment variables
* Defined API contract
* Previous workflow state

## Avoid False Positives

Weak assertion:

```text
Response body is not empty
```

Stronger assertion:

```text
Response contains firstname property
Firstname is a string
Firstname matches submitted data
```

## Avoid Unnecessary Duplication

The same assertion should not be repeated multiple times in the same request without additional testing value.

---

# 28. JSON Schema Validation Strategy

JSON Schema validation is applied to selected stable API response structures.

Priority responses include:

* Authentication response
* Booking response
* Booking creation response
* Booking ID list response

Schema validation focuses on:

* Root data type
* Required properties
* Property data types
* Nested objects
* Nested required properties

Schema validation complements detailed value assertions.

The strategy is:

```text
Schema Validation
        +
Field-Level Assertions
        +
Value Validation
```

A valid schema does not guarantee correct business data.

Therefore, schema validation is not used as the only response validation method.

---

# 29. Response Time Validation Strategy

Basic response-time assertions are included as lightweight API checks.

Example concept:

```text
Response time < defined threshold
```

The threshold should be reasonable for a public shared testing API.

Response-time failures are re-executed before classification.

The following factors are considered:

* Internet connection
* Public API load
* Shared environment
* Temporary hosting latency

Response-time assertions are not presented as formal load or performance testing.

No conclusions regarding API scalability or production performance are made from these checks.

---

# 30. End-to-End Workflow Strategy

E2E workflows validate API behaviour across dependent operations.

Primary workflow:

```text
AUTHENTICATE
     ↓
CREATE BOOKING
     ↓
STORE BOOKING ID
     ↓
GET BOOKING
     ↓
VALIDATE CREATED DATA
     ↓
PUT BOOKING
     ↓
VALIDATE FULL UPDATE
     ↓
PATCH BOOKING
     ↓
VALIDATE PARTIAL UPDATE
     ↓
DELETE BOOKING
     ↓
VERIFY DELETION
```

Each workflow should:

* Generate required dynamic values
* Store required variables
* Validate intermediate states
* Avoid hardcoded booking IDs
* Clean up created resources where possible

Workflow execution should be possible using the Collection Runner and Newman.

---

# 31. Test Independence and Isolation

Test independence is important because Restful Booker uses a shared public environment.

Where possible:

* Tests create their own required resources
* Dynamic booking IDs are used
* Tests avoid depending on random existing bookings
* E2E workflows clean up created resources
* Hardcoded booking IDs are avoided

Some endpoint tests may intentionally use existing resources during exploratory testing.

Such dependencies should not be used for critical automated regression workflows.

The primary E2E workflow should remain self-contained.

---

# 32. Defect Investigation Strategy

A failed test follows this investigation process:

```text
Assertion Failed
      ↓
Review Assertion Logic
      ↓
Review Environment Variables
      ↓
Review Request Configuration
      ↓
Review Test Data
      ↓
Review API Documentation
      ↓
Repeat Request
      ↓
Compare Response
      ↓
Determine Root Cause Category
```

Possible categories:

```text
API Defect
Test Script Defect
Test Data Issue
Environment Issue
Documentation Issue
Expected Result Issue
Intermittent Behaviour
```

A bug report is created only when API behaviour is sufficiently reproducible and the expected behaviour is supported.

---

# 33. Regression Testing Strategy

The completed Postman collection acts as the API regression suite.

Regression testing includes stable automated checks for:

* API availability
* Authentication
* Booking creation
* Booking retrieval
* Booking update
* Partial booking update
* Booking deletion
* Core response contracts
* Primary E2E workflow

Exploratory negative tests that intentionally create unstable or environment-dependent behaviour may be excluded from the primary regression run if necessary.

The regression suite should prioritize:

```text
Repeatability
Stability
Meaningful Coverage
Clear Failures
```

The objective is not to execute every exploratory request in CI/CD.

---

# 34. Newman CLI Execution Strategy

Newman is used to execute the exported Postman collection from the command line.

The execution strategy includes:

```text
Export Collection
      ↓
Export Environment
      ↓
Review Exported Variables
      ↓
Install Newman
      ↓
Execute Collection
      ↓
Review Assertion Results
      ↓
Investigate Failures
```

Newman execution validates that the API test suite does not depend on the Postman graphical interface.

The collection should execute using environment variables and automated scripts.

CLI execution results are stored as project evidence where appropriate.

---

# 35. CI/CD Execution Strategy

GitHub Actions is used to automate API regression execution.

The planned workflow is:

```text
Push or Pull Request
        ↓
GitHub Actions Trigger
        ↓
Checkout Repository
        ↓
Set Up Node.js
        ↓
Install Newman
        ↓
Execute API Regression Collection
        ↓
Evaluate Newman Exit Code
        ↓
Workflow PASS or FAIL
```

The CI/CD strategy focuses on automated regression execution.

Environment-specific or sensitive values should be handled appropriately and should not be exposed unnecessarily in the repository.

The workflow configuration is stored in the project CI/CD documentation area and implemented as a GitHub Actions workflow.

---

# 36. Test Evidence Strategy

Test evidence is collected selectively.

Evidence priority is given to:

* Confirmed defects
* Failed test cases
* Authentication findings
* Significant negative test results
* Unexpected API behaviour
* JSON Schema validation
* E2E workflow execution
* Newman execution
* GitHub Actions execution

Evidence may include:

```text
Postman screenshots
Request body
Response body
Response headers
Automated assertion results
Newman output
CI/CD workflow results
```

The project does not require a screenshot for every passing automated assertion.

Repeatable automated tests provide execution evidence for routine validations.

---

# 37. Maintenance Strategy

The API test suite is designed for maintainability.

Maintenance principles include:

* Use environment variables for reusable configuration
* Avoid hardcoded booking IDs
* Use clear request names
* Organize requests by functionality
* Use meaningful assertion names
* Keep test scripts readable
* Avoid duplicated logic where practical
* Review JSON Schemas after contract changes
* Update expected results when verified requirements change
* Review regression stability before CI/CD execution

When API behaviour changes, the following sequence is used:

```text
Identify Change
      ↓
Confirm API Behaviour
      ↓
Review Documentation
      ↓
Update Test Analysis
      ↓
Update Test Cases
      ↓
Update Postman Requests
      ↓
Update Assertions
      ↓
Execute Regression
```

Tests are not modified solely to make a failing API response pass.

Expected behaviour must first be reviewed.

---

# 38. Strategy Risks and Limitations

The testing strategy has the following limitations.

## Shared Public Environment

The API is publicly accessible and may be used by multiple users.

This can affect existing resource data.

## API Availability

The hosted API may experience temporary availability or latency issues.

## Undefined Business Rules

The API documentation may not define explicit validation limits for all fields.

Examples include:

```text
Maximum firstname length
Maximum total price
Allowed date range
```

Testing such values may identify observed behaviour without proving a formal requirement violation.

## Limited Backend Visibility

Testing is performed as black-box API testing.

The following are not available:

* Source code
* Database access
* Server logs
* Internal architecture

## Basic Performance Checks Only

Response-time assertions do not represent formal performance testing.

## Functional Security Scope

Authentication and authorization behaviour is tested functionally.

The project does not represent a penetration test.

These limitations are considered during defect classification.

---

# 39. Success Criteria

The API testing strategy is considered successfully implemented when:

* All documented endpoints are analysed
* Requests are organized in a structured Postman collection
* Environment variables are used appropriately
* Dynamic authentication tokens are extracted
* Dynamic booking IDs are extracted
* CRUD operations are validated
* Positive tests are implemented
* Negative tests are implemented
* Boundary tests are implemented where meaningful
* Automated JavaScript assertions validate API responses
* Selected responses use JSON Schema validation
* Dependent requests use request chaining
* A self-contained E2E workflow is implemented
* Confirmed API defects are documented
* The regression suite executes using Newman
* Automated API regression executes through GitHub Actions
* Test documentation reflects actual observed API behaviour

---

# 40. Strategy Summary

The Restful Booker API Testing Project uses a layered and automation-oriented API testing strategy.

The strategy begins with endpoint-level functional validation and progresses through:

```text
Positive Testing
      ↓
Negative Testing
      ↓
Boundary Testing
      ↓
Automated Assertions
      ↓
Dynamic Data Handling
      ↓
Request Chaining
      ↓
Schema Validation
      ↓
E2E Workflows
      ↓
Regression Testing
      ↓
Newman CLI
      ↓
CI/CD Execution
```

The central testing principle is to validate API behaviour at multiple levels rather than relying only on HTTP status codes.

The final test suite is intended to demonstrate practical REST API testing knowledge, structured test design, Postman automation, JavaScript response validation, API workflow testing, and automated regression execution.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
