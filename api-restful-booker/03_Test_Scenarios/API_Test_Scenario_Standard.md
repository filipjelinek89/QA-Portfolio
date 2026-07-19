# API Test Scenarios

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Scenarios
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Testing Type:** REST API Testing
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Test Scenario Design Approach](#2-test-scenario-design-approach)
* [3. Scenario ID Convention](#3-scenario-id-convention)
* [4. Scenario Priority Classification](#4-scenario-priority-classification)
* [5. Scenario Coverage Summary](#5-scenario-coverage-summary)
* [6. Health Check Test Scenarios](#6-health-check-test-scenarios)
* [7. Authentication Test Scenarios](#7-authentication-test-scenarios)
* [8. Get Booking IDs Test Scenarios](#8-get-booking-ids-test-scenarios)
* [9. Get Booking by ID Test Scenarios](#9-get-booking-by-id-test-scenarios)
* [10. Create Booking Test Scenarios](#10-create-booking-test-scenarios)
* [11. Update Booking Test Scenarios](#11-update-booking-test-scenarios)
* [12. Partial Update Booking Test Scenarios](#12-partial-update-booking-test-scenarios)
* [13. Delete Booking Test Scenarios](#13-delete-booking-test-scenarios)
* [14. Cross-Endpoint and E2E Test Scenarios](#14-cross-endpoint-and-e2e-test-scenarios)
* [15. Scenario Technique Coverage](#15-scenario-technique-coverage)
* [16. Requirement Coverage Mapping](#16-requirement-coverage-mapping)
* [17. Scenario Dependency Analysis](#17-scenario-dependency-analysis)
* [18. Regression Scenario Candidates](#18-regression-scenario-candidates)
* [19. Scenario Execution Considerations](#19-scenario-execution-considerations)
* [20. Test Scenario Summary](#20-test-scenario-summary)

---

# 1. Purpose

The purpose of this document is to define high-level API test scenarios for the **Restful Booker API Testing Project**.

The test scenarios are derived from:

* API Requirements Analysis
* Endpoint Inventory
* Published API documentation
* Identified API dependencies
* Authentication requirements
* CRUD operations
* Request and response structures
* Identified requirement gaps
* Positive testing conditions
* Negative testing conditions
* Boundary testing opportunities

The scenarios provide the test-design layer between API requirements and detailed API test cases.

The relationship is:

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
Defect
```

This document defines **what API behaviour should be tested**.

Detailed test steps, request data, expected results, and execution status will be documented in the API Test Cases and Test Execution documentation.

---

# 2. Test Scenario Design Approach

Test scenarios are designed using a combination of:

* Requirements-based testing
* Endpoint-based testing
* Positive testing
* Negative testing
* Equivalence partitioning
* Boundary value analysis
* Data type validation
* Authentication testing
* Authorization testing
* State transition testing
* CRUD lifecycle testing
* Error handling analysis
* Exploratory API testing

The primary design principle is:

```text
One Scenario
     ↓
One High-Level API Behaviour or Test Objective
     ↓
One or More Detailed Test Cases
```

For example:

```text
TS-AUTH-002
Verify API behaviour with invalid authentication credentials
        ↓
TC-AUTH-002
Invalid username

TC-AUTH-003
Invalid password

TC-AUTH-004
Invalid username and password
```

Test scenarios are intentionally broader than individual test cases.

This prevents duplication between the Test Scenarios and Test Cases documentation.

---

# 3. Scenario ID Convention

Test scenarios use a functional ID structure.

```text
TS-[FUNCTION]-[NUMBER]
```

Example:

```text
TS-AUTH-001
```

## Functional Prefixes

| Prefix      | Functional Area                  |
| ----------- | -------------------------------- |
| `TS-PING`   | API Health Check                 |
| `TS-AUTH`   | Authentication                   |
| `TS-GETIDS` | Get Booking IDs                  |
| `TS-GET`    | Get Booking by ID                |
| `TS-CREATE` | Create Booking                   |
| `TS-PUT`    | Full Booking Update              |
| `TS-PATCH`  | Partial Booking Update           |
| `TS-DELETE` | Delete Booking                   |
| `TS-E2E`    | Cross-Endpoint and E2E Workflows |

Example:

```text
TS-CREATE-004
```

represents:

```text
Test Scenario
Create Booking
Scenario 004
```

Scenario IDs remain stable throughout the project.

---

# 4. Scenario Priority Classification

The following priority model is used.

| Priority | Definition                                                          |
| -------- | ------------------------------------------------------------------- |
| Critical | Core API behaviour required for authentication or CRUD lifecycle    |
| High     | Important functional, validation, or security-related API behaviour |
| Medium   | Secondary validation, error handling, or boundary behaviour         |
| Low      | Minor compatibility or low-risk exploratory behaviour               |

Priority is assigned based on:

* Endpoint criticality
* Business impact
* API dependency
* CRUD workflow impact
* Authentication impact
* Regression value
* Probability of failure
* Defect detection value

Priority does not represent defect severity.

A high-priority test scenario may identify a low-severity defect.

---

# 5. Scenario Coverage Summary

| Functional Area          | Scenario Count |
| ------------------------ | -------------: |
| Health Check             |              3 |
| Authentication           |              9 |
| Get Booking IDs          |             10 |
| Get Booking by ID        |              7 |
| Create Booking           |             16 |
| Update Booking           |             12 |
| Partial Update Booking   |             13 |
| Delete Booking           |              9 |
| Cross-Endpoint / E2E     |              7 |
| **Total Test Scenarios** |         **86** |

## Scenario Distribution

| Scenario Type  | Primary Coverage                  |
| -------------- | --------------------------------- |
| Positive       | Valid API functionality           |
| Negative       | Invalid request behaviour         |
| Boundary       | Input limits and transitions      |
| Authentication | Credential and token validation   |
| Contract       | Response structure and data types |
| Workflow       | API operation dependencies        |
| E2E            | Complete booking lifecycle        |

The scenario count represents high-level test objectives.

The final number of detailed test cases is expected to be greater because one scenario may produce multiple test cases.

---

# 6. Health Check Test Scenarios

**Endpoint:** `GET /ping`
**API ID:** `API-001`

| Scenario ID | Test Scenario                                                                             | Test Type | Priority |
| ----------- | ----------------------------------------------------------------------------------------- | --------- | -------- |
| TS-PING-001 | Verify API health-check endpoint responds to a valid GET request                          | Positive  | High     |
| TS-PING-002 | Verify health-check response status and response metadata                                 | Contract  | High     |
| TS-PING-003 | Verify API behaviour when an unsupported HTTP method is used on the health-check endpoint | Negative  | Medium   |

## Scenario Focus

The health-check scenarios validate:

```text
API availability
HTTP method handling
Documented status code
Response metadata
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-PING-001
REQ-PING-002
REQ-PING-003
REQ-PING-004
REQ-PING-005
```

---

# 7. Authentication Test Scenarios

**Endpoint:** `POST /auth`
**API ID:** `API-002`

| Scenario ID | Test Scenario                                                                     | Test Type   | Priority |
| ----------- | --------------------------------------------------------------------------------- | ----------- | -------- |
| TS-AUTH-001 | Verify authentication token creation using valid credentials                      | Positive    | Critical |
| TS-AUTH-002 | Verify API behaviour with invalid authentication credentials                      | Negative    | High     |
| TS-AUTH-003 | Verify API behaviour when authentication credentials are missing                  | Negative    | High     |
| TS-AUTH-004 | Verify API behaviour with null or empty authentication credential values          | Negative    | High     |
| TS-AUTH-005 | Verify API behaviour when authentication credential data types are invalid        | Negative    | Medium   |
| TS-AUTH-006 | Verify API behaviour with malformed or empty authentication request payloads      | Negative    | High     |
| TS-AUTH-007 | Verify authentication request Content-Type handling                               | Negative    | Medium   |
| TS-AUTH-008 | Verify successful authentication response contract                                | Contract    | Critical |
| TS-AUTH-009 | Verify generated authentication token can be used by protected booking operations | Integration | Critical |

## Scenario Focus

Authentication testing validates:

```text
Valid credentials
Invalid credentials
Missing credentials
Null credentials
Empty credentials
Incorrect data types
Malformed JSON
Content-Type behaviour
Token response contract
Token usability
```

## Detailed Test Case Expansion Example

`TS-AUTH-002` may produce:

```text
Invalid username + valid password
Valid username + invalid password
Invalid username + invalid password
```

`TS-AUTH-003` may produce:

```text
Missing username
Missing password
Missing username and password
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-AUTH-001
REQ-AUTH-002
REQ-AUTH-003
REQ-AUTH-004
REQ-AUTH-005
REQ-AUTH-006
REQ-AUTH-007
REQ-AUTH-008
REQ-AUTH-009
REQ-AUTH-010
```

---

# 8. Get Booking IDs Test Scenarios

**Endpoint:** `GET /booking`
**API ID:** `API-003`

| Scenario ID   | Test Scenario                                                                                     | Test Type              | Priority |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------------- | -------- |
| TS-GETIDS-001 | Verify retrieval of booking IDs without query filters                                             | Positive               | High     |
| TS-GETIDS-002 | Verify booking ID list response contract                                                          | Contract               | High     |
| TS-GETIDS-003 | Verify booking filtering by firstname                                                             | Positive / Exploratory | High     |
| TS-GETIDS-004 | Verify booking filtering by lastname                                                              | Positive / Exploratory | High     |
| TS-GETIDS-005 | Verify booking filtering by check-in date                                                         | Positive / Exploratory | High     |
| TS-GETIDS-006 | Verify booking filtering by checkout date                                                         | Positive / Exploratory | High     |
| TS-GETIDS-007 | Verify booking filtering using multiple query parameters                                          | Positive / Integration | High     |
| TS-GETIDS-008 | Verify booking filter behaviour with empty, non-matching, and invalid values                      | Negative               | Medium   |
| TS-GETIDS-009 | Verify booking filter behaviour with special characters, Unicode, whitespace, and case variations | Exploratory            | Medium   |
| TS-GETIDS-010 | Verify API behaviour with unknown query parameters                                                | Negative / Exploratory | Medium   |

## Scenario Focus

Booking ID retrieval testing validates:

```text
Booking ID list retrieval
Array response structure
Booking ID property
Booking ID data type
Firstname filtering
Lastname filtering
Date filtering
Combined filtering
Invalid filter values
Undocumented matching behaviour
```

## Known Test Design Challenge

The public environment is shared and periodically reset.

Reliable filter testing should use a booking created with known test data where possible.

Example:

```text
Create Booking
firstname = FilipAPI
lastname = QAFilter
        ↓
Store bookingId
        ↓
Filter by firstname
        ↓
Verify bookingId is returned
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-GETIDS-001
REQ-GETIDS-002
REQ-GETIDS-003
REQ-GETIDS-004
REQ-GETIDS-005
REQ-GETIDS-006
REQ-GETIDS-007
REQ-GETIDS-008
REQ-GETIDS-009
```

---

# 9. Get Booking by ID Test Scenarios

**Endpoint:** `GET /booking/{id}`
**API ID:** `API-004`

| Scenario ID | Test Scenario                                                         | Test Type           | Priority |
| ----------- | --------------------------------------------------------------------- | ------------------- | -------- |
| TS-GET-001  | Verify retrieval of an existing booking using a valid booking ID      | Positive            | Critical |
| TS-GET-002  | Verify individual booking response contract and data types            | Contract            | Critical |
| TS-GET-003  | Verify retrieved booking data matches previously created booking data | Integration         | Critical |
| TS-GET-004  | Verify API behaviour when a non-existing booking ID is requested      | Negative            | High     |
| TS-GET-005  | Verify API behaviour with zero and negative booking IDs               | Negative / Boundary | Medium   |
| TS-GET-006  | Verify API behaviour with invalid booking ID data formats             | Negative            | Medium   |
| TS-GET-007  | Verify API behaviour with a very large booking ID                     | Boundary            | Medium   |

## Scenario Focus

Individual booking retrieval validates:

```text
Existing resource retrieval
Response contract
Data types
Created and retrieved data consistency
Non-existing resources
Invalid path parameters
Boundary booking IDs
```

## Dynamic Test Dependency

Primary positive scenarios should use:

```text
POST /booking
      ↓
{{bookingId}}
      ↓
GET /booking/{{bookingId}}
```

This reduces dependency on public default booking records.

## Requirement Coverage

Primary requirement coverage:

```text
REQ-GET-001
REQ-GET-002
REQ-GET-003
REQ-GET-004
REQ-GET-005
REQ-GET-006
REQ-GET-007
```

---

# 10. Create Booking Test Scenarios

**Endpoint:** `POST /booking`
**API ID:** `API-005`

| Scenario ID   | Test Scenario                                                                    | Test Type              | Priority |
| ------------- | -------------------------------------------------------------------------------- | ---------------------- | -------- |
| TS-CREATE-001 | Verify booking creation using a complete valid JSON payload                      | Positive               | Critical |
| TS-CREATE-002 | Verify booking creation without the optional additional needs property           | Positive               | High     |
| TS-CREATE-003 | Verify booking creation response contract and generated booking ID               | Contract               | Critical |
| TS-CREATE-004 | Verify returned booking data matches submitted booking data                      | Data Validation        | Critical |
| TS-CREATE-005 | Verify booking creation when required top-level properties are missing           | Negative               | Critical |
| TS-CREATE-006 | Verify booking creation when required nested booking date properties are missing | Negative               | High     |
| TS-CREATE-007 | Verify booking creation with null property values                                | Negative               | High     |
| TS-CREATE-008 | Verify booking creation with empty string values                                 | Negative               | High     |
| TS-CREATE-009 | Verify booking creation with incorrect property data types                       | Negative               | High     |
| TS-CREATE-010 | Verify booking creation with invalid total price values                          | Negative / Boundary    | High     |
| TS-CREATE-011 | Verify booking creation with boundary string lengths                             | Boundary               | Medium   |
| TS-CREATE-012 | Verify booking creation with invalid or unusual date values                      | Negative / Boundary    | High     |
| TS-CREATE-013 | Verify booking creation when checkout is equal to or earlier than check-in       | Negative / Exploratory | High     |
| TS-CREATE-014 | Verify booking creation with unexpected JSON properties                          | Negative / Exploratory | Medium   |
| TS-CREATE-015 | Verify booking creation with malformed, empty, or missing request body           | Negative               | Critical |
| TS-CREATE-016 | Verify booking creation request Content-Type handling                            | Negative               | High     |

## Scenario Focus

Create Booking is one of the largest testing areas because it accepts the primary booking data model.

Testing validates:

```text
Valid booking creation
Optional field behaviour
Response contract
Generated booking ID
Request-response consistency
Required fields
Nested required fields
Null handling
Empty values
Data types
Numeric boundaries
String boundaries
Date validation
Logical date relationships
Unexpected properties
Malformed payloads
Content-Type behaviour
```

## Required Field Expansion

`TS-CREATE-005` may produce separate test cases for:

```text
Missing firstname
Missing lastname
Missing totalprice
Missing depositpaid
Missing bookingdates
```

`TS-CREATE-006` may produce:

```text
Missing bookingdates.checkin
Missing bookingdates.checkout
```

## Data Type Expansion

`TS-CREATE-009` may produce individual tests for:

```text
firstname as number
lastname as boolean
totalprice as string
depositpaid as string
bookingdates as array
checkin as number
checkout as boolean
additionalneeds as object
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-CREATE-001
REQ-CREATE-002
REQ-CREATE-003
REQ-CREATE-004
REQ-CREATE-005
REQ-CREATE-006
REQ-CREATE-007
REQ-CREATE-008
REQ-CREATE-009
REQ-CREATE-010
REQ-CREATE-011
REQ-CREATE-012
REQ-CREATE-013
REQ-CREATE-014
REQ-CREATE-015
```

---

# 11. Update Booking Test Scenarios

**Endpoint:** `PUT /booking/{id}`
**API ID:** `API-006`

| Scenario ID | Test Scenario                                                                      | Test Type                 | Priority |
| ----------- | ---------------------------------------------------------------------------------- | ------------------------- | -------- |
| TS-PUT-001  | Verify full booking update using a valid authentication token and complete payload | Positive                  | Critical |
| TS-PUT-002  | Verify full booking update using valid Basic authentication                        | Positive / Authentication | High     |
| TS-PUT-003  | Verify updated booking response contract and data types                            | Contract                  | Critical |
| TS-PUT-004  | Verify fully updated booking data persists after retrieval                         | Integration               | Critical |
| TS-PUT-005  | Verify PUT authentication enforcement when authentication is missing               | Authorization             | Critical |
| TS-PUT-006  | Verify PUT authentication enforcement with an invalid or modified token            | Authorization             | Critical |
| TS-PUT-007  | Verify PUT behaviour when required booking properties are missing                  | Negative                  | High     |
| TS-PUT-008  | Verify PUT behaviour with null or empty booking values                             | Negative                  | High     |
| TS-PUT-009  | Verify PUT behaviour with incorrect property data types                            | Negative                  | High     |
| TS-PUT-010  | Verify PUT behaviour with malformed, empty, or missing request payload             | Negative                  | High     |
| TS-PUT-011  | Verify PUT behaviour for a non-existing or invalid booking ID                      | Negative                  | High     |
| TS-PUT-012  | Verify PUT request Content-Type handling                                           | Negative                  | Medium   |

## Scenario Focus

PUT testing validates:

```text
Full resource update
Cookie token authentication
Basic authentication
Response contract
Updated data persistence
Missing authentication
Invalid authentication
Complete payload semantics
Missing properties
Null values
Incorrect data types
Malformed payloads
Invalid resources
Content-Type behaviour
```

## PUT Semantics Analysis

One important exploratory area is:

```text
Does PUT require a complete booking representation?
```

The documentation describes a complete booking payload but does not fully define replacement semantics.

Testing should compare:

```text
Complete PUT Payload
        ↓
Expected Full Update

Incomplete PUT Payload
        ↓
Observe API Behaviour
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-PUT-001
REQ-PUT-002
REQ-PUT-003
REQ-PUT-004
REQ-PUT-005
REQ-PUT-006
REQ-PUT-007
REQ-PUT-008
REQ-PUT-009
```

---

# 12. Partial Update Booking Test Scenarios

**Endpoint:** `PATCH /booking/{id}`
**API ID:** `API-007`

| Scenario ID  | Test Scenario                                                                 | Test Type              | Priority |
| ------------ | ----------------------------------------------------------------------------- | ---------------------- | -------- |
| TS-PATCH-001 | Verify partial update of a single booking property using valid authentication | Positive               | Critical |
| TS-PATCH-002 | Verify partial update of multiple booking properties                          | Positive               | Critical |
| TS-PATCH-003 | Verify partial update of the booking dates object                             | Positive / Integration | High     |
| TS-PATCH-004 | Verify PATCH response contract and data types                                 | Contract               | High     |
| TS-PATCH-005 | Verify updated PATCH values persist after booking retrieval                   | Integration            | Critical |
| TS-PATCH-006 | Verify properties omitted from a PATCH request remain unchanged               | Data Consistency       | Critical |
| TS-PATCH-007 | Verify PATCH authentication enforcement when authentication is missing        | Authorization          | Critical |
| TS-PATCH-008 | Verify PATCH authentication enforcement with an invalid or modified token     | Authorization          | Critical |
| TS-PATCH-009 | Verify PATCH behaviour with an empty JSON object or empty request body        | Negative / Exploratory | High     |
| TS-PATCH-010 | Verify PATCH behaviour with null property values                              | Negative               | High     |
| TS-PATCH-011 | Verify PATCH behaviour with incorrect property data types                     | Negative               | High     |
| TS-PATCH-012 | Verify PATCH behaviour with unexpected JSON properties                        | Negative / Exploratory | Medium   |
| TS-PATCH-013 | Verify PATCH behaviour for a non-existing or invalid booking ID               | Negative               | High     |

## Scenario Focus

PATCH testing validates:

```text
Single-property update
Multiple-property update
Nested object update
Response contract
Updated value persistence
Unchanged property preservation
Authentication enforcement
Empty PATCH behaviour
Null values
Incorrect data types
Unexpected properties
Invalid resources
```

## Critical PATCH Validation

The most important PATCH-specific scenario is:

```text
TS-PATCH-006
```

Example:

```text
Original Booking
firstname = Filip
lastname = Jelinek
totalprice = 500

PATCH Request
{
  "firstname": "UpdatedFilip"
}

Expected
firstname = UpdatedFilip
lastname = Jelinek
totalprice = 500
```

This validates actual partial-update semantics instead of only checking the HTTP status code.

## Requirement Coverage

Primary requirement coverage:

```text
REQ-PATCH-001
REQ-PATCH-002
REQ-PATCH-003
REQ-PATCH-004
REQ-PATCH-005
REQ-PATCH-006
REQ-PATCH-007
REQ-PATCH-008
REQ-PATCH-009
```

---

# 13. Delete Booking Test Scenarios

**Endpoint:** `DELETE /booking/{id}`
**API ID:** `API-008`

| Scenario ID   | Test Scenario                                                              | Test Type                   | Priority |
| ------------- | -------------------------------------------------------------------------- | --------------------------- | -------- |
| TS-DELETE-001 | Verify deletion of an existing booking using a valid authentication token  | Positive                    | Critical |
| TS-DELETE-002 | Verify deletion of an existing booking using valid Basic authentication    | Positive / Authentication   | High     |
| TS-DELETE-003 | Verify deleted booking is no longer retrievable                            | Integration                 | Critical |
| TS-DELETE-004 | Verify DELETE authentication enforcement when authentication is missing    | Authorization               | Critical |
| TS-DELETE-005 | Verify DELETE authentication enforcement with an invalid or modified token | Authorization               | Critical |
| TS-DELETE-006 | Verify API behaviour when deleting a non-existing booking                  | Negative                    | High     |
| TS-DELETE-007 | Verify API behaviour when the same booking is deleted more than once       | Negative / State Transition | High     |
| TS-DELETE-008 | Verify DELETE behaviour with zero, negative, or invalid booking ID values  | Negative / Boundary         | Medium   |
| TS-DELETE-009 | Verify documented DELETE success response status and response metadata     | Contract                    | High     |

## Scenario Focus

DELETE testing validates:

```text
Successful deletion
Cookie token authentication
Basic authentication
Post-deletion verification
Missing authentication
Invalid authentication
Non-existing resource deletion
Repeated deletion
Invalid booking IDs
Documented status code
```

## State Transition

Delete testing includes the following state transition:

```text
BOOKING EXISTS
      ↓
DELETE
      ↓
BOOKING DELETED
      ↓
GET BOOKING
      ↓
RESOURCE NOT RETRIEVABLE
```

Repeated deletion validates:

```text
BOOKING DELETED
      ↓
DELETE AGAIN
      ↓
Observe API Error Behaviour
```

## Requirement Coverage

Primary requirement coverage:

```text
REQ-DELETE-001
REQ-DELETE-002
REQ-DELETE-003
REQ-DELETE-004
REQ-DELETE-005
REQ-DELETE-006
REQ-DELETE-007
```

---

# 14. Cross-Endpoint and E2E Test Scenarios

The following scenarios validate behaviour across multiple API operations.

| Scenario ID | Test Scenario                                                                              | Test Type               | Priority |
| ----------- | ------------------------------------------------------------------------------------------ | ----------------------- | -------- |
| TS-E2E-001  | Verify complete authenticated booking CRUD lifecycle                                       | E2E                     | Critical |
| TS-E2E-002  | Verify dynamically generated authentication token is reusable across protected operations  | Integration             | Critical |
| TS-E2E-003  | Verify dynamically generated booking ID is reusable across booking operations              | Integration             | Critical |
| TS-E2E-004  | Verify booking data remains consistent between create and retrieve operations              | Data Consistency        | Critical |
| TS-E2E-005  | Verify booking data transitions correctly through PUT and PATCH operations                 | State Transition        | Critical |
| TS-E2E-006  | Verify deleted booking cannot be retrieved after completion of the booking lifecycle       | State Transition        | Critical |
| TS-E2E-007  | Verify the primary API workflow can execute without hardcoded runtime resource identifiers | Automation / Regression | Critical |

## Primary E2E Workflow

```text
POST /auth
Create Token
      ↓
Extract token
      ↓
{{authToken}}
      ↓
POST /booking
Create Booking
      ↓
Extract booking ID
      ↓
{{bookingId}}
      ↓
GET /booking/{{bookingId}}
Validate Created Booking
      ↓
PUT /booking/{{bookingId}}
Full Update
      ↓
GET /booking/{{bookingId}}
Validate Full Update
      ↓
PATCH /booking/{{bookingId}}
Partial Update
      ↓
GET /booking/{{bookingId}}
Validate Partial Update
      ↓
DELETE /booking/{{bookingId}}
Delete Booking
      ↓
GET /booking/{{bookingId}}
Verify Deletion
```

## E2E Test Objective

The workflow validates:

```text
Authentication
Dynamic token extraction
Booking creation
Dynamic booking ID extraction
Resource retrieval
Data consistency
Full update
Update persistence
Partial update
Unchanged property preservation
Deletion
Post-deletion verification
Request chaining
```

The workflow should execute sequentially using:

```text
Postman Collection Runner
Newman CLI
GitHub Actions
```

---

# 15. Scenario Technique Coverage

The test scenarios use multiple test-design techniques.

| Test Technique             | Example Scenario Areas                |
| -------------------------- | ------------------------------------- |
| Requirements-Based Testing | All documented API operations         |
| Positive Testing           | Valid authentication, CRUD operations |
| Negative Testing           | Invalid credentials, invalid payloads |
| Equivalence Partitioning   | Booking IDs, data types, credentials  |
| Boundary Value Analysis    | Prices, string lengths, booking IDs   |
| State Transition Testing   | Create, update, delete lifecycle      |
| Data Type Testing          | Booking properties and credentials    |
| Error Guessing             | Malformed JSON, empty payloads        |
| Exploratory Testing        | Undefined filter and PATCH behaviour  |
| Contract Testing           | Response structure and data types     |
| Integration Testing        | Token and booking ID dependencies     |
| E2E Testing                | Complete booking lifecycle            |

## Equivalence Partitioning Example

Booking ID partitions:

```text
Valid Existing Positive Integer
Valid Format but Non-existing Positive Integer
Zero
Negative Integer
Decimal
Alphabetic String
Special Characters
Very Large Integer
```

## Boundary Value Example

`totalprice` exploratory values:

```text
-1
0
1
2147483647
2147483648
```

## State Transition Example

```text
Created
   ↓
Retrieved
   ↓
Fully Updated
   ↓
Partially Updated
   ↓
Deleted
```

---

# 16. Requirement Coverage Mapping

The following matrix maps requirement groups to test scenario groups.

| Requirement Group              | Scenario Group |
| ------------------------------ | -------------- |
| `REQ-PING-*`                   | `TS-PING-*`    |
| `REQ-AUTH-*`                   | `TS-AUTH-*`    |
| `REQ-GETIDS-*`                 | `TS-GETIDS-*`  |
| `REQ-GET-*`                    | `TS-GET-*`     |
| `REQ-CREATE-*`                 | `TS-CREATE-*`  |
| `REQ-PUT-*`                    | `TS-PUT-*`     |
| `REQ-PATCH-*`                  | `TS-PATCH-*`   |
| `REQ-DELETE-*`                 | `TS-DELETE-*`  |
| Cross-requirement dependencies | `TS-E2E-*`     |

## Example Requirement-to-Scenario Mapping

| Requirement ID | Requirement Summary                            | Scenario ID                |
| -------------- | ---------------------------------------------- | -------------------------- |
| REQ-AUTH-005   | Valid credentials produce token                | TS-AUTH-001                |
| REQ-AUTH-006   | Response contains token                        | TS-AUTH-008                |
| REQ-AUTH-008   | Token usable for protected operations          | TS-AUTH-009                |
| REQ-GETIDS-004 | Booking ID response uses array                 | TS-GETIDS-002              |
| REQ-GET-003    | Existing ID returns booking                    | TS-GET-001                 |
| REQ-GET-005    | Returned data corresponds to requested booking | TS-GET-003                 |
| REQ-CREATE-011 | Created booking receives ID                    | TS-CREATE-003              |
| REQ-CREATE-014 | Returned booking matches submitted data        | TS-CREATE-004              |
| REQ-PUT-003    | PUT requires authentication                    | TS-PUT-005, TS-PUT-006     |
| REQ-PUT-008    | Updated data is retrievable                    | TS-PUT-004                 |
| REQ-PATCH-005  | Submitted properties are updated               | TS-PATCH-001, TS-PATCH-002 |
| REQ-PATCH-006  | Omitted properties remain unchanged            | TS-PATCH-006               |
| REQ-DELETE-005 | Deleted booking is not retrievable             | TS-DELETE-003              |

Detailed requirement-to-test-case traceability will be completed after detailed test cases are finalized.

---

# 17. Scenario Dependency Analysis

Some API test scenarios can execute independently.

Other scenarios require dynamic resources.

## Independent Scenario Areas

```text
Health Check
Authentication Request Validation
Get Booking IDs Basic Retrieval
General Negative Request Validation
```

## Authentication-Dependent Scenarios

```text
TS-PUT-*
TS-PATCH-*
TS-DELETE-*
```

Primary dependency:

```text
TS-AUTH-001
      ↓
{{authToken}}
```

## Booking-Dependent Scenarios

```text
TS-GET-001
TS-GET-003
TS-PUT-*
TS-PATCH-*
TS-DELETE-*
```

Primary dependency:

```text
TS-CREATE-001
      ↓
{{bookingId}}
```

## Combined Dependency

```text
Authentication Token
        +
Booking ID
        ↓
Protected Booking Operation
```

Example:

```text
{{authToken}}
        +
{{bookingId}}
        ↓
PUT /booking/{{bookingId}}
```

## Test Design Implication

Automated regression tests should generate required dependencies dynamically.

Hardcoded booking IDs should not be used for critical workflow validation.

---

# 18. Regression Scenario Candidates

Not every exploratory test scenario must execute in the primary CI/CD regression workflow.

The following scenarios are primary regression candidates.

| Scenario ID   | Regression Reason                 |
| ------------- | --------------------------------- |
| TS-PING-001   | API availability                  |
| TS-AUTH-001   | Authentication functionality      |
| TS-AUTH-008   | Authentication response contract  |
| TS-AUTH-009   | Token usability                   |
| TS-GETIDS-001 | Booking list availability         |
| TS-GETIDS-002 | Booking list contract             |
| TS-GET-001    | Booking retrieval                 |
| TS-GET-002    | Booking contract                  |
| TS-CREATE-001 | Booking creation                  |
| TS-CREATE-003 | Creation response contract        |
| TS-CREATE-004 | Data consistency                  |
| TS-PUT-001    | Full update                       |
| TS-PUT-004    | Full update persistence           |
| TS-PUT-005    | PUT authentication enforcement    |
| TS-PATCH-001  | Partial update                    |
| TS-PATCH-005  | PATCH persistence                 |
| TS-PATCH-006  | Unchanged property preservation   |
| TS-PATCH-007  | PATCH authentication enforcement  |
| TS-DELETE-001 | Booking deletion                  |
| TS-DELETE-003 | Post-deletion verification        |
| TS-DELETE-004 | DELETE authentication enforcement |
| TS-E2E-001    | Complete CRUD lifecycle           |
| TS-E2E-007    | Dynamic automated workflow        |

## Primary Regression Objective

The primary regression suite should validate:

```text
API Available
      ↓
Authentication Works
      ↓
Booking Can Be Created
      ↓
Booking Can Be Retrieved
      ↓
Booking Can Be Updated
      ↓
Booking Can Be Partially Updated
      ↓
Booking Can Be Deleted
      ↓
Deleted Booking Is Not Retrievable
```

Highly exploratory scenarios may remain outside the main CI/CD regression workflow if they produce unstable or intentionally variable results.

---

# 19. Scenario Execution Considerations

The following execution constraints must be considered.

## Shared Public Environment

Restful Booker is publicly accessible.

Other users may create, update, or delete booking resources.

## Periodic Environment Reset

The API periodically resets its data.

Long-running test workflows may lose dynamically created booking resources.

## Dynamic Test Resources

Critical test scenarios should create required bookings dynamically.

Example:

```text
Create Test Booking
      ↓
Store bookingId
      ↓
Execute Dependent Test
      ↓
Delete Test Booking
```

## Scenario Isolation

Negative tests should avoid unintentionally modifying the primary booking used by unrelated tests.

Where required:

```text
Create Dedicated Booking
      ↓
Execute Test Condition
      ↓
Verify Result
      ↓
Clean Up
```

## Re-execution

Unexpected failures should be re-executed after reviewing:

```text
Request
Environment Variables
Test Data
Authentication
API Availability
Environment Reset
Assertion Logic
```

A failed automated assertion is not automatically classified as an API defect.

---

# 20. Test Scenario Summary

The Restful Booker API test design contains **86 high-level API test scenarios** across nine functional test areas.

The scenario structure covers:

```text
Health Check
Authentication
Booking ID Retrieval
Booking Retrieval
Booking Creation
Full Booking Update
Partial Booking Update
Booking Deletion
Cross-Endpoint E2E Workflows
```

The scenarios apply multiple API testing techniques:

```text
Positive Testing
Negative Testing
Boundary Value Analysis
Equivalence Partitioning
Contract Testing
Authentication Testing
Authorization Testing
Data Type Testing
State Transition Testing
Integration Testing
E2E Testing
Exploratory Testing
```

The test scenario design establishes a structured relationship between:

```text
API Requirements
      ↓
86 Test Scenarios
      ↓
Detailed API Test Cases
      ↓
Postman Requests
      ↓
JavaScript Assertions
      ↓
Test Execution
      ↓
Defect Reports
      ↓
Requirements Traceability
```

Critical test scenarios focus on:

* Authentication token generation
* Authentication token usability
* Booking creation
* Booking ID generation
* Booking retrieval
* Booking data consistency
* Full booking update
* Update persistence
* Partial booking update
* Unchanged property preservation
* Authentication enforcement
* Booking deletion
* Post-deletion verification
* Complete CRUD lifecycle
* Dynamic request chaining

The next test design stage is to convert these scenarios into detailed API test cases with defined request data, preconditions, execution steps, and expected results.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
