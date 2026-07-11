# API Test Plan

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Plan
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Testing Type:** REST API Testing
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Project Overview](#2-project-overview)
* [3. Test Objectives](#3-test-objectives)
* [4. API Under Test](#4-api-under-test)
* [5. Test Scope](#5-test-scope)
* [6. Features In Scope](#6-features-in-scope)
* [7. Features Out of Scope](#7-features-out-of-scope)
* [8. Test Approach](#8-test-approach)
* [9. Testing Types](#9-testing-types)
* [10. API Validation Areas](#10-api-validation-areas)
* [11. Test Design Techniques](#11-test-design-techniques)
* [12. Test Environment](#12-test-environment)
* [13. Test Data Strategy](#13-test-data-strategy)
* [14. Postman Collection Design](#14-postman-collection-design)
* [15. Automated API Assertions](#15-automated-api-assertions)
* [16. Authentication Testing Strategy](#16-authentication-testing-strategy)
* [17. CRUD Testing Strategy](#17-crud-testing-strategy)
* [18. Negative Testing Strategy](#18-negative-testing-strategy)
* [19. Boundary Testing Strategy](#19-boundary-testing-strategy)
* [20. JSON Schema Validation](#20-json-schema-validation)
* [21. End-to-End API Testing](#21-end-to-end-api-testing)
* [22. Test Execution Process](#22-test-execution-process)
* [23. Test Status Definitions](#23-test-status-definitions)
* [24. Defect Management](#24-defect-management)
* [25. Test Evidence](#25-test-evidence)
* [26. Entry Criteria](#26-entry-criteria)
* [27. Exit Criteria](#27-exit-criteria)
* [28. Suspension and Resumption Criteria](#28-suspension-and-resumption-criteria)
* [29. Risks and Mitigation](#29-risks-and-mitigation)
* [30. Test Deliverables](#30-test-deliverables)
* [31. Roles and Responsibilities](#31-roles-and-responsibilities)
* [32. Tools and Technologies](#32-tools-and-technologies)
* [33. Test Completion Criteria](#33-test-completion-criteria)
* [34. Approval](#34-approval)

---

# 1. Purpose

The purpose of this document is to define the testing approach, scope, objectives, resources, techniques, execution process, and completion criteria for the **Restful Booker API Testing Project**.

The project focuses on validating the behaviour of a REST API used to manage hotel bookings.

Testing is performed directly at the API layer by sending HTTP requests and analysing server responses.

The test plan provides a structured framework for:

* API analysis
* Test design
* API request implementation
* Manual API testing
* Automated response validation
* Test execution
* Defect identification
* Test evidence collection
* Command-line test execution
* CI/CD test integration

The document acts as the primary planning reference for the API testing activities performed during the project.

---

# 2. Project Overview

The Restful Booker API Testing Project is a dedicated API testing portfolio project designed to demonstrate practical REST API testing skills.

The system under test provides functionality for:

* API health checking
* Authentication token generation
* Booking creation
* Booking retrieval
* Booking filtering
* Full booking updates
* Partial booking updates
* Booking deletion

The API is tested using Postman.

Manual API exploration is combined with automated JavaScript assertions to validate API responses.

The completed Postman collection will also be executed using Newman and integrated into GitHub Actions.

The project follows the testing workflow:

```text
API Documentation Analysis
        ↓
API Requirements Analysis
        ↓
Endpoint Identification
        ↓
Test Scenario Design
        ↓
Test Case Design
        ↓
Postman Request Implementation
        ↓
Manual API Execution
        ↓
Automated Response Validation
        ↓
Negative and Boundary Testing
        ↓
Defect Investigation
        ↓
Test Evidence Collection
        ↓
Newman CLI Execution
        ↓
CI/CD Integration
        ↓
Test Completion and Summary
```

---

# 3. Test Objectives

The primary objective is to validate the functionality, reliability, data handling, and API contract of the Restful Booker API.

Specific test objectives include:

* Verify documented API endpoints are accessible
* Verify supported HTTP methods behave as expected
* Validate API health-check functionality
* Validate authentication token generation
* Validate booking creation
* Validate booking retrieval
* Validate booking filtering
* Validate full booking updates
* Validate partial booking updates
* Validate booking deletion
* Verify protected operations enforce authentication requirements
* Validate HTTP status codes
* Validate response headers
* Validate JSON response bodies
* Validate response property existence
* Validate JSON data types
* Validate response values
* Validate nested JSON structures
* Validate API error handling
* Validate API behaviour with malformed requests
* Validate API behaviour with invalid data
* Validate boundary values
* Validate logical date combinations
* Validate API response times against defined test thresholds
* Validate complete booking lifecycle workflows
* Implement repeatable automated API assertions
* Execute the API test suite using Newman
* Integrate automated API execution into GitHub Actions
* Identify and document reproducible API defects
* Identify inconsistencies between documented and observed API behaviour

---

# 4. API Under Test

**Application:** Restful Booker API
**API Type:** REST API
**Primary Data Format:** JSON
**Communication Protocol:** HTTPS

## Base URL

```text
https://restful-booker.herokuapp.com
```

## Main API Resources

```text
/ping
/auth
/booking
/booking/{id}
```

## Primary API Functional Areas

| API Area          | Purpose                                     |
| ----------------- | ------------------------------------------- |
| Health Check      | Verify API availability                     |
| Authentication    | Generate authentication token               |
| Booking Retrieval | Retrieve booking resources                  |
| Booking Filtering | Retrieve booking IDs using query parameters |
| Booking Creation  | Create a new booking                        |
| Full Update       | Replace booking data                        |
| Partial Update    | Update selected booking fields              |
| Booking Deletion  | Delete an existing booking                  |

The published API documentation is treated as the initial API contract.

Actual API behaviour is independently validated during test execution.

---

# 5. Test Scope

The test scope includes functional and non-functional validation at the API layer.

Testing focuses on API requests and responses.

The following components are validated:

* HTTP methods
* API endpoints
* Path parameters
* Query parameters
* Request headers
* Request bodies
* Authentication credentials
* Authentication tokens
* HTTP status codes
* Response headers
* Response bodies
* JSON structures
* JSON properties
* JSON data types
* Response values
* Error responses
* Response time
* Data consistency between dependent requests

Testing is performed without relying on a graphical user interface.

---

# 6. Features In Scope

The following API functionality is included in the test scope.

## 6.1 API Health Check

Testing includes:

* Valid health-check request
* Response status validation
* Response body validation
* Response header analysis
* Response time validation
* Unsupported HTTP method behaviour

## 6.2 Authentication

Testing includes:

* Valid credentials
* Invalid username
* Invalid password
* Empty username
* Empty password
* Empty credentials
* Missing username
* Missing password
* Null credential values
* Incorrect credential data types
* Empty request body
* Empty JSON object
* Malformed JSON
* Incorrect Content-Type
* Missing Content-Type
* Authentication token response validation

## 6.3 Booking Retrieval

Testing includes:

* Retrieve all booking IDs
* Retrieve an existing booking by ID
* Retrieve a non-existing booking
* Invalid booking ID
* Zero booking ID
* Negative booking ID
* String booking ID
* Special-character booking ID
* Extremely large booking ID
* Response structure validation
* Response data type validation

## 6.4 Booking Filtering

Testing includes filtering by supported query parameters.

Test areas include:

* First name
* Last name
* Check-in date
* Checkout date
* Combined filters
* Valid filter values
* Non-existing filter values
* Empty filter values
* Special characters
* Unicode characters
* Invalid date formats
* Unknown query parameters

## 6.5 Booking Creation

Testing includes:

* Valid booking creation
* Required field validation
* Optional field behaviour
* Missing properties
* Null values
* Empty strings
* Incorrect data types
* Negative numeric values
* Zero numeric values
* Large numeric values
* Invalid boolean values
* Invalid dates
* Logical date inconsistencies
* Unexpected properties
* Malformed JSON
* Header validation

## 6.6 Full Booking Update

Testing includes:

* Valid full booking update
* Valid authentication
* Missing authentication
* Invalid authentication token
* Modified authentication token
* Non-existing booking
* Invalid booking ID
* Missing request fields
* Invalid data types
* Empty request body
* Malformed JSON
* Response data validation

## 6.7 Partial Booking Update

Testing includes:

* Update a single property
* Update multiple properties
* Update string properties
* Update numeric properties
* Update boolean properties
* Update nested date properties
* Empty request body
* Empty JSON object
* Unexpected properties
* Invalid data types
* Missing authentication
* Invalid authentication token
* Non-existing booking

## 6.8 Booking Deletion

Testing includes:

* Delete an existing booking
* Verify deleted booking is no longer retrievable
* Delete without authentication
* Delete using an invalid authentication token
* Delete a non-existing booking
* Delete an invalid booking ID
* Repeated deletion of the same booking

## 6.9 End-to-End API Workflows

Testing includes complete booking lifecycle workflows involving multiple dependent API requests.

---

# 7. Features Out of Scope

The following areas are outside the current project scope:

* Graphical user interface testing
* Mobile application testing
* Browser compatibility testing
* Accessibility testing
* Database-level validation
* Direct database access
* Source code review
* White-box testing
* Infrastructure testing
* Server configuration testing
* Network penetration testing
* Security penetration testing
* Denial-of-service testing
* High-volume load testing
* Stress testing
* Soak testing
* Production monitoring
* Third-party service validation

Basic authentication and authorization behaviour is tested from a functional QA perspective.

The project does not represent a formal security assessment or penetration test.

Basic response-time assertions are included, but they do not represent formal performance testing.

---

# 8. Test Approach

The project uses a risk-based and structured API testing approach.

Testing is divided into the following stages.

## Stage 1 — API Analysis

The API documentation is reviewed to identify:

* Available endpoints
* Supported HTTP methods
* Request structures
* Response structures
* Authentication requirements
* Path parameters
* Query parameters
* Expected status codes
* Documented API behaviour

## Stage 2 — Test Design

Test scenarios and test cases are created based on:

* API documentation
* Endpoint functionality
* Input parameters
* Request body properties
* Authentication requirements
* Positive data classes
* Negative data classes
* Boundary conditions
* Expected API behaviour

## Stage 3 — Postman Implementation

API requests are implemented in Postman.

Requests are organized into functional folders.

Environment variables are used for reusable and dynamic data.

## Stage 4 — Manual API Exploration

Requests are manually executed to:

* Understand actual API behaviour
* Analyse responses
* Compare actual behaviour with documentation
* Identify unexpected behaviour
* Investigate potential defects

## Stage 5 — Automated Validation

JavaScript assertions are implemented in Postman to automatically validate responses.

## Stage 6 — Negative and Boundary Testing

The API is tested using invalid, malformed, unexpected, and boundary input values.

## Stage 7 — End-to-End Testing

Dependent requests are chained to validate complete booking workflows.

## Stage 8 — Defect Investigation

Unexpected results are reproduced and analysed.

Confirmed defects are documented in bug reports.

## Stage 9 — CLI Execution

The completed Postman collection is executed using Newman.

## Stage 10 — CI/CD Integration

The API test suite is integrated into GitHub Actions for automated execution.

---

# 9. Testing Types

| Testing Type                   | Included |
| ------------------------------ | -------- |
| Functional API Testing         | Yes      |
| Positive Testing               | Yes      |
| Negative Testing               | Yes      |
| CRUD Testing                   | Yes      |
| Authentication Testing         | Yes      |
| Authorization Testing          | Yes      |
| Boundary Value Analysis        | Yes      |
| Equivalence Partitioning       | Yes      |
| Data Validation                | Yes      |
| Data Type Validation           | Yes      |
| Header Validation              | Yes      |
| Status Code Validation         | Yes      |
| JSON Schema Validation         | Yes      |
| Query Parameter Testing        | Yes      |
| Error Handling Testing         | Yes      |
| End-to-End API Testing         | Yes      |
| Basic Response Time Validation | Yes      |
| Automated API Testing          | Yes      |
| Regression Testing             | Yes      |
| CLI Test Execution             | Yes      |
| CI/CD Test Execution           | Yes      |
| Formal Performance Testing     | No       |
| Penetration Testing            | No       |

---

# 10. API Validation Areas

Each API response may be validated against one or more of the following areas.

## HTTP Status Code

Verify the API returns an appropriate HTTP status code.

## Response Headers

Verify relevant response headers and header values.

## Content-Type

Verify the response media type matches the expected response format.

## Response Body

Verify the response body contains the expected data.

## Property Existence

Verify required JSON properties are present.

## Data Types

Verify response values use the expected JSON data types.

Expected data types may include:

```text
string
number
boolean
object
array
```

## Response Values

Verify returned values match expected or submitted data.

## Nested Objects

Verify nested JSON objects contain the expected properties and values.

## Response Structure

Verify the response structure is consistent with the expected API contract.

## Response Time

Verify response time against a defined project-level test threshold.

Response-time assertions are used as basic monitoring checks and are not considered formal performance tests.

## Data Consistency

Verify data remains consistent across dependent CRUD operations.

---

# 11. Test Design Techniques

The following test design techniques are used.

## 11.1 Equivalence Partitioning

Input data is divided into groups expected to produce similar API behaviour.

Example booking ID partitions:

```text
Valid existing ID
Valid non-existing ID
Zero
Negative ID
String value
Special-character value
Extremely large numeric value
```

## 11.2 Boundary Value Analysis

Values at and around identified boundaries are tested.

Example numeric values:

```text
-1
0
1
Large numeric value
Very large numeric value
```

Example string lengths:

```text
0 characters
1 character
Typical valid string
Long string
Very long string
```

## 11.3 Positive Testing

Valid requests are used to verify expected API functionality.

## 11.4 Negative Testing

Invalid and unexpected requests are used to evaluate validation and error handling.

## 11.5 Error Guessing

Testing is influenced by common API defect patterns, including:

* Missing validation
* Weak type validation
* Incorrect status codes
* Missing authentication enforcement
* Inconsistent error responses
* Malformed JSON handling
* Unexpected property acceptance
* Date validation issues

## 11.6 State Transition Testing

The state of a booking resource is validated throughout the booking lifecycle.

```text
Non-existing
     ↓
Created
     ↓
Retrieved
     ↓
Updated
     ↓
Partially Updated
     ↓
Deleted
     ↓
Non-retrievable
```

---

# 12. Test Environment

## API Environment

| Item        | Configuration                  |
| ----------- | ------------------------------ |
| Environment | Public API Testing Environment |
| API         | Restful Booker                 |
| Protocol    | HTTPS                          |
| Data Format | JSON                           |
| API Style   | REST                           |

## Postman Environment

The Postman environment is named:

```text
Restful Booker - QA
```

Initial environment variables include:

| Variable    | Purpose                                           |
| ----------- | ------------------------------------------------- |
| `baseUrl`   | Stores the API base URL                           |
| `authToken` | Stores dynamically generated authentication token |
| `bookingId` | Stores dynamically generated booking ID           |
| `firstname` | Stores reusable first-name test data              |
| `lastname`  | Stores reusable last-name test data               |

Additional variables may be introduced when required by test implementation.

Dynamic values should be extracted from actual API responses where possible.

---

# 13. Test Data Strategy

Test data is designed to cover valid, invalid, boundary, and unexpected input classes.

## Valid Test Data

Examples include:

* Valid first names
* Valid last names
* Positive numeric prices
* Valid boolean values
* Valid ISO-style date strings
* Valid booking date sequences
* Valid authentication credentials

## Invalid Test Data

Examples include:

* Null values
* Empty strings
* Incorrect JSON data types
* Negative numeric values
* Invalid boolean representations
* Invalid date formats
* Malformed JSON
* Missing required fields
* Unexpected object structures

## Boundary Test Data

Boundary data includes:

* Zero
* Negative one
* Minimum positive values
* Large numbers
* Very large numbers
* Empty strings
* Single-character strings
* Long strings
* Very long strings

## Special Test Data

Additional test data may include:

* Special characters
* Unicode characters
* Whitespace-only strings
* Leading spaces
* Trailing spaces
* Numeric strings
* Boolean strings
* Unexpected JSON properties

Test data is documented within the related test cases.

---

# 14. Postman Collection Design

The Postman collection is organized by API functionality.

```text
Restful Booker API Testing
│
├── 00 - Health Check
│
├── 01 - Authentication
│
├── 02 - Booking - GET
│
├── 03 - Booking - POST
│
├── 04 - Booking - PUT
│
├── 05 - Booking - PATCH
│
├── 06 - Booking - DELETE
│
├── 07 - Negative Testing
│
├── 08 - Boundary Testing
│
└── 09 - E2E Workflows
```

Request names should clearly identify:

* HTTP method
* API operation
* Test purpose

Example:

```text
POST - Create Token - Valid Credentials
POST - Create Token - Invalid Password
GET - Booking by ID - Existing Booking
GET - Booking by ID - Non-existing Booking
POST - Create Booking - Valid Data
POST - Create Booking - Missing Firstname
PUT - Update Booking - Missing Authentication
PATCH - Update Firstname - Valid Data
DELETE - Booking - Valid Token
```

The collection structure is designed to support both manual execution and automated collection runs.

---

# 15. Automated API Assertions

JavaScript test scripts are implemented in Postman.

Automated assertions may validate:

* HTTP status code
* Response time
* Content-Type
* Response header existence
* Response body existence
* JSON property existence
* JSON data types
* JSON property values
* Nested object structure
* Authentication token generation
* Booking ID generation
* Request and response data consistency
* JSON Schema compliance

Automated test names should clearly describe the validated condition.

Example naming:

```text
Status code is 200
Response time is below defined threshold
Content-Type contains application/json
Response contains token property
Token is a non-empty string
Booking ID is returned
Firstname matches submitted test data
Total price is a number
Deposit paid is a boolean
Booking dates object is present
```

Assertions should validate meaningful API behaviour rather than artificially increase the automated test count.

---

# 16. Authentication Testing Strategy

Authentication testing focuses on the token-generation endpoint and protected booking operations.

## Token Generation

The authentication endpoint is tested using:

* Valid credentials
* Invalid username
* Invalid password
* Empty username
* Empty password
* Missing username
* Missing password
* Null values
* Incorrect data types
* Empty JSON object
* Empty request body
* Malformed JSON

## Token Validation

The authentication response is validated for:

* HTTP status code
* Response structure
* Token property existence
* Token data type
* Empty token value
* Response headers
* Response time

## Protected Operations

Protected API operations are tested using:

* Valid authentication token
* Missing authentication token
* Invalid authentication token
* Modified authentication token

Observed authentication behaviour is compared with the documented API contract.

---

# 17. CRUD Testing Strategy

The complete CRUD lifecycle is tested.

## Create

```text
POST /booking
```

Validation includes:

* Resource creation
* Booking ID generation
* Submitted data consistency
* Response structure

## Read

```text
GET /booking/{id}
```

Validation includes:

* Resource retrieval
* Booking data consistency
* Response structure
* Response data types

## Update

```text
PUT /booking/{id}
PATCH /booking/{id}
```

Validation includes:

* Full resource update
* Partial resource update
* Updated value persistence
* Unchanged property behaviour
* Authentication requirements

## Delete

```text
DELETE /booking/{id}
```

Validation includes:

* Resource deletion
* Authentication requirements
* Post-deletion retrieval behaviour
* Repeated deletion behaviour

---

# 18. Negative Testing Strategy

Negative testing evaluates API robustness and validation behaviour.

Negative requests may include:

* Missing required properties
* Null values
* Empty strings
* Whitespace-only strings
* Incorrect data types
* Invalid numeric values
* Invalid boolean values
* Invalid date values
* Malformed JSON
* Empty JSON objects
* Empty request bodies
* Invalid path parameters
* Invalid query parameters
* Unknown query parameters
* Missing authentication
* Invalid authentication
* Missing Content-Type
* Incorrect Content-Type
* Unsupported HTTP methods
* Unexpected JSON properties

Expected behaviour is determined from:

* API documentation
* HTTP semantics
* API consistency
* Observed system behaviour

Unexpected results are investigated before being classified as defects.

---

# 19. Boundary Testing Strategy

Boundary Value Analysis is applied where meaningful boundaries can be identified.

## Numeric Boundaries

Example values:

```text
-1
0
1
999999
2147483647
2147483648
```

The exact values used may be adjusted based on observed API behaviour.

## String Boundaries

Example lengths:

```text
0 characters
1 character
Typical valid length
255 characters
256 characters
1000 characters
```

## Date Boundaries and Logical Conditions

Test conditions include:

* Past date
* Current date
* Future date
* Leap-year date
* Invalid leap-year date
* Check-in equals checkout
* Checkout before check-in

Boundary tests are selected based on API fields and meaningful data conditions.

---

# 20. JSON Schema Validation

JSON Schema is used to validate selected API response structures.

Schema validation includes:

* Root object type
* Required properties
* Property data types
* Nested object structure
* Nested required properties

Booking response validation may include:

```text
firstname
lastname
totalprice
depositpaid
bookingdates
additionalneeds
```

The nested `bookingdates` object may include:

```text
checkin
checkout
```

Schema files are stored in:

```text
08_JSON_Schema/
```

Schema validation is used to detect unexpected API contract changes or inconsistent response structures.

---

# 21. End-to-End API Testing

End-to-end API workflows validate multiple dependent operations.

## Primary Booking Lifecycle

```text
Create Authentication Token
        ↓
Create Booking
        ↓
Extract Booking ID
        ↓
Retrieve Created Booking
        ↓
Validate Created Booking Data
        ↓
Fully Update Booking
        ↓
Retrieve Updated Booking
        ↓
Validate Full Update
        ↓
Partially Update Booking
        ↓
Retrieve Partially Updated Booking
        ↓
Validate Partial Update
        ↓
Delete Booking
        ↓
Attempt to Retrieve Deleted Booking
        ↓
Validate Post-deletion Behaviour
```

Dynamic Postman variables are used to transfer data between dependent requests.

The workflow should be executable without manually copying authentication tokens or booking IDs.

---

# 22. Test Execution Process

The test execution process follows these steps:

1. Verify the API is available.
2. Select the correct Postman environment.
3. Verify required environment variables.
4. Execute the relevant API request.
5. Review the HTTP status code.
6. Review response headers.
7. Review the response body.
8. Review response time.
9. Execute automated Postman assertions.
10. Compare actual results with expected results.
11. Assign a test status.
12. Reproduce unexpected behaviour when required.
13. Document confirmed defects.
14. Collect relevant test evidence.
15. Update the API test execution documentation.

After the collection is completed, automated tests are also executed using Newman.

---

# 23. Test Status Definitions

| Status       | Definition                                                                          |
| ------------ | ----------------------------------------------------------------------------------- |
| PASS         | Actual API behaviour matches the expected result                                    |
| FAIL         | Actual API behaviour does not match the expected result                             |
| BLOCKED      | Test execution cannot continue because of an external dependency or blocking defect |
| NOT EXECUTED | Test case has not yet been executed                                                 |

A failed automated assertion does not automatically confirm a software defect.

The result must be analysed to determine whether the issue is caused by:

* API behaviour
* Incorrect expected result
* Incorrect test data
* Incorrect Postman configuration
* Incorrect automated assertion
* Environment instability
* Documentation ambiguity

---

# 24. Defect Management

Unexpected API behaviour is investigated before a bug report is created.

The defect process is:

```text
Unexpected Result Observed
        ↓
Review Request Configuration
        ↓
Review Test Data
        ↓
Review Expected Result
        ↓
Compare with API Documentation
        ↓
Repeat Request
        ↓
Verify Reproducibility
        ↓
Classify Finding
        ↓
Create Bug Report if Confirmed
```

Potential findings may be classified as:

* API functional defect
* Validation defect
* Authentication or authorization defect
* Error-handling defect
* Data consistency defect
* API contract inconsistency
* Documentation inconsistency

Bug reports include:

* Bug ID
* Bug title
* API endpoint
* HTTP method
* Severity
* Priority
* Preconditions
* Request configuration
* Request body
* Steps to reproduce
* Expected result
* Actual result
* Response status
* Response body
* Reproducibility
* Related test case
* Test evidence

Only actual reproducible findings are documented as defects.

---

# 25. Test Evidence

Test evidence is collected for relevant API test results.

Evidence may include:

* Postman request screenshots
* Postman response screenshots
* Request headers
* Request bodies
* Response headers
* Response bodies
* Automated assertion results
* Error responses
* Newman execution results
* GitHub Actions execution results

Test evidence is stored in:

```text
10_Test_Evidence/
```

Evidence is organized by API functionality:

```text
Authentication/
GET/
POST/
PUT/
PATCH/
DELETE/
Negative_Testing/
```

Evidence is primarily collected for:

* Failed tests
* Confirmed defects
* Important workflow validation
* Authentication behaviour
* Significant negative test results
* Schema validation
* CLI execution
* CI/CD execution

Screenshots are not required for every passing assertion when the result is already represented by repeatable automated tests.

---

# 26. Entry Criteria

API testing may begin when:

* The API is publicly accessible
* API documentation is available
* The API base URL is known
* Primary endpoints are identified
* Postman is available
* The Postman test environment is configured
* Initial API analysis is completed
* Test scenarios are available for the relevant test area
* Required test data is available

Individual test execution requires the relevant request configuration and expected result to be understood.

---

# 27. Exit Criteria

Testing may be considered complete when:

* All planned API endpoints have been analysed
* All planned test scenarios have been designed
* All planned test cases have been executed
* Critical CRUD workflows have been validated
* Authentication behaviour has been tested
* Positive testing has been completed
* Negative testing has been completed
* Selected boundary tests have been completed
* Selected responses have JSON Schema validation
* End-to-end workflows have been executed
* All failed tests have been investigated
* Confirmed defects have been documented
* Test evidence has been collected where required
* The Postman collection has been exported
* The Postman environment has been exported
* Newman execution has been completed
* GitHub Actions integration has been implemented
* Final execution statistics have been documented
* Final test results have been summarized

Open defects may remain at project completion if they are documented and clearly reported.

---

# 28. Suspension and Resumption Criteria

## Suspension Criteria

Testing may be temporarily suspended when:

* The API is unavailable
* Repeated server errors prevent meaningful execution
* The test environment is unstable
* A blocking defect prevents dependent test execution
* Required authentication functionality is unavailable
* Required API resources cannot be created
* API documentation or endpoint behaviour is insufficient to determine a meaningful expected result

## Resumption Criteria

Testing may resume when:

* API availability is restored
* Environment stability is sufficient for execution
* Blocking conditions are removed
* Required API resources can be created
* Required dependencies are available
* The affected test area can be meaningfully validated

Blocked tests are documented using the `BLOCKED` status.

---

# 29. Risks and Mitigation

| Risk                               | Impact                                      | Mitigation                                                    |
| ---------------------------------- | ------------------------------------------- | ------------------------------------------------------------- |
| Public API instability             | Tests may fail inconsistently               | Re-execute requests and verify reproducibility                |
| Shared API environment             | External users may affect data              | Create dedicated test resources dynamically                   |
| Dynamic booking IDs                | Hardcoded IDs may become invalid            | Extract and store booking IDs dynamically                     |
| Authentication token changes       | Protected requests may fail                 | Generate and store tokens dynamically                         |
| API data reset                     | Existing test data may disappear            | Create required data during test execution                    |
| Documentation ambiguity            | Expected results may be unclear             | Compare documentation, HTTP semantics, and observed behaviour |
| Inconsistent error responses       | Negative tests may be difficult to evaluate | Document exact observed responses                             |
| Network latency                    | Response time may vary                      | Use reasonable thresholds and repeat abnormal results         |
| Overly strict automated assertions | Valid responses may cause false failures    | Validate meaningful contract requirements                     |
| Shared environment side effects    | Resource state may unexpectedly change      | Use E2E workflows with dynamically created resources          |
| Sensitive data exposure            | Credentials or tokens may be committed      | Review exported environment files and repository content      |

---

# 30. Test Deliverables

The project is expected to produce the following test deliverables:

| Deliverable               | Location                                        |
| ------------------------- | ----------------------------------------------- |
| Project README            | `README.md`                                     |
| API Test Plan             | `01_Project_Documentation/API_Test_Plan.md`     |
| API Test Strategy         | `01_Project_Documentation/API_Test_Strategy.md` |
| API Requirements Analysis | `02_API_Analysis/API_Requirements_Analysis.md`  |
| Endpoint Inventory        | `02_API_Analysis/Endpoint_Inventory.md`         |
| API Test Scenarios        | `03_Test_Scenarios/API_Test_Scenarios.md`       |
| API Test Cases            | `04_Test_Cases/API_Test_Cases.md`               |
| Postman Collection        | `05_Postman/Collection/`                        |
| Postman Environment       | `05_Postman/Environment/`                       |
| API Test Execution        | `06_Test_Execution/API_Test_Execution.md`       |
| Bug Reports               | `07_Bug_Reports/`                               |
| JSON Schemas              | `08_JSON_Schema/`                               |
| Newman Execution Files    | `09_Newman/`                                    |
| Test Evidence             | `10_Test_Evidence/`                             |
| GitHub Actions Workflow   | `11_CI_CD/`                                     |

Additional documentation may be added if required by findings during test execution.

---

# 31. Roles and Responsibilities

This is an individual QA portfolio project.

**QA Tester:** Filip Jelinek

Responsibilities include:

* API documentation analysis
* API requirements analysis
* Test planning
* Test strategy definition
* Test scenario creation
* Test case design
* Test data preparation
* Postman collection implementation
* API request execution
* JavaScript assertion implementation
* Negative testing
* Boundary testing
* JSON Schema creation
* Test execution
* Result analysis
* Defect investigation
* Bug reporting
* Test evidence collection
* Newman execution
* GitHub Actions integration
* Project documentation maintenance

---

# 32. Tools and Technologies

| Tool / Technology | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| Postman           | API request creation and test execution          |
| JavaScript        | Automated Postman assertions and data extraction |
| JSON              | API request and response payloads                |
| JSON Schema       | Response contract validation                     |
| Newman            | Command-line API test execution                  |
| Node.js           | Newman runtime environment                       |
| Git               | Version control                                  |
| GitHub            | Repository and project documentation             |
| GitHub Actions    | Automated CI/CD API test execution               |
| Markdown          | QA documentation                                 |

---

# 33. Test Completion Criteria

The project is considered successfully completed when it demonstrates:

* Structured API test planning
* API requirements analysis
* Professional API test scenario design
* Professional API test case design
* REST API testing knowledge
* HTTP method understanding
* HTTP status code validation
* Request and response analysis
* Authentication testing
* CRUD testing
* Negative testing
* Boundary testing
* Dynamic variable usage
* Request chaining
* JavaScript API assertions
* JSON Schema validation
* End-to-end API workflow testing
* Defect investigation
* Professional bug reporting
* Newman CLI execution
* Automated CI/CD test execution
* Clear QA documentation

Final execution metrics are added only after the planned API test suite has been executed.

---

# 34. Approval

This test plan defines the initial testing approach for the Restful Booker API Testing Project.

The document may be updated during the project if:

* Additional API behaviour is identified
* Test scope changes
* New test risks are discovered
* Additional test techniques are required
* API documentation changes
* Test execution identifies areas requiring deeper validation

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
