# API Requirements Analysis

**Project:** Restful Booker API Testing Project
**Document Type:** API Requirements Analysis
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Testing Type:** REST API Testing
**Analysis Source:** Published Restful Booker API Documentation
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Analysis Objective](#2-analysis-objective)
* [3. Source of Requirements](#3-source-of-requirements)
* [4. System Overview](#4-system-overview)
* [5. API Architecture Overview](#5-api-architecture-overview)
* [6. Identified API Resources](#6-identified-api-resources)
* [7. Endpoint Summary](#7-endpoint-summary)
* [8. General API Requirements](#8-general-api-requirements)
* [9. Health Check Requirements](#9-health-check-requirements)
* [10. Authentication Requirements](#10-authentication-requirements)
* [11. Get Booking IDs Requirements](#11-get-booking-ids-requirements)
* [12. Get Booking Requirements](#12-get-booking-requirements)
* [13. Create Booking Requirements](#13-create-booking-requirements)
* [14. Update Booking Requirements](#14-update-booking-requirements)
* [15. Partial Update Booking Requirements](#15-partial-update-booking-requirements)
* [16. Delete Booking Requirements](#16-delete-booking-requirements)
* [17. Booking Data Model Analysis](#17-booking-data-model-analysis)
* [18. Authentication Model Analysis](#18-authentication-model-analysis)
* [19. Path Parameter Analysis](#19-path-parameter-analysis)
* [20. Query Parameter Analysis](#20-query-parameter-analysis)
* [21. Request Header Analysis](#21-request-header-analysis)
* [22. Response Analysis](#22-response-analysis)
* [23. HTTP Status Code Analysis](#23-http-status-code-analysis)
* [24. Data Type Analysis](#24-data-type-analysis)
* [25. Required and Optional Field Analysis](#25-required-and-optional-field-analysis)
* [26. Identified API Dependencies](#26-identified-api-dependencies)
* [27. Identified CRUD Workflow](#27-identified-crud-workflow)
* [28. Identified Positive Test Conditions](#28-identified-positive-test-conditions)
* [29. Identified Negative Test Conditions](#29-identified-negative-test-conditions)
* [30. Identified Boundary Test Conditions](#30-identified-boundary-test-conditions)
* [31. Requirement Ambiguities and Gaps](#31-requirement-ambiguities-and-gaps)
* [32. API Environment Constraints](#32-api-environment-constraints)
* [33. Requirement Risk Analysis](#33-requirement-risk-analysis)
* [34. Requirements Traceability Preparation](#34-requirements-traceability-preparation)
* [35. Analysis Conclusions](#35-analysis-conclusions)

---

# 1. Purpose

The purpose of this document is to analyse the published requirements and documented behaviour of the **Restful Booker API** before detailed API test scenario and test case design.

The analysis identifies:

* Available API resources
* Supported HTTP methods
* API endpoints
* Authentication requirements
* Request headers
* Request bodies
* Path parameters
* Query parameters
* Response structures
* Documented HTTP status codes
* API data types
* API dependencies
* CRUD relationships
* Positive test conditions
* Negative test conditions
* Boundary test opportunities
* Requirement ambiguities
* Documentation gaps
* Public test environment constraints

The analysis provides the requirements baseline used for API test design.

Actual API behaviour will be independently validated during test execution.

---

# 2. Analysis Objective

The objective of the API requirements analysis is to transform the published API documentation into structured and testable QA requirements.

The analysis process follows this model:

```text
Published API Documentation
        ↓
Identify API Resources
        ↓
Identify Endpoints
        ↓
Identify HTTP Methods
        ↓
Analyse Request Requirements
        ↓
Analyse Response Contract
        ↓
Identify Authentication Requirements
        ↓
Identify Endpoint Dependencies
        ↓
Identify Test Conditions
        ↓
Identify Requirement Gaps
        ↓
Create Test Scenarios
        ↓
Create Test Cases
```

The API documentation is treated as the initial specification.

The analysis does not assume that the implemented API behaves correctly.

---

# 3. Source of Requirements

The primary source of requirements is the published **Restful Booker API documentation**.

The documentation describes the following API operations:

```text
Auth - CreateToken
Booking - GetBookingIds
Booking - GetBooking
Booking - CreateBooking
Booking - UpdateBooking
Booking - PartialUpdateBooking
Booking - DeleteBooking
Ping - HealthCheck
```

The published documentation is used to identify the expected API contract.

The public Restful Booker service also describes itself as a CRUD API with authentication functionality designed for API testing practice.

The API is intentionally suitable for exploratory testing and defect investigation.

## Requirement Interpretation

Requirements are derived from:

1. Explicitly documented endpoint behaviour
2. Documented request structures
3. Documented response structures
4. Documented parameter types
5. Documented authentication requirements
6. Documented status codes
7. Standard HTTP semantics where documentation is incomplete
8. Behavioural consistency between related API endpoints

Where the documentation does not define a business rule, the condition is recorded as a requirement gap or ambiguity.

An undocumented assumption is not automatically treated as a confirmed requirement.

---

# 4. System Overview

Restful Booker is a web API that provides hotel booking management functionality.

The primary API resource is:

```text
Booking
```

The API supports operations to:

```text
Create booking
Read booking
Update booking
Partially update booking
Delete booking
```

The API also provides:

```text
Authentication token creation
API health checking
Booking filtering
```

The primary system workflow is:

```text
Client
   ↓
HTTPS Request
   ↓
Restful Booker API
   ↓
Process Request
   ↓
HTTPS Response
   ↓
Client Validates Response
```

Testing is performed as black-box API testing.

No direct access is available to:

* Application source code
* Database
* Server logs
* Internal services
* Infrastructure configuration

---

# 5. API Architecture Overview

## API Type

```text
REST API
```

## Communication Protocol

```text
HTTPS
```

## Primary Data Format

```text
JSON
```

## Base URL

```text
https://restful-booker.herokuapp.com
```

## Primary Resource

```text
/booking
```

## Supporting Resources

```text
/auth
/ping
```

## Identified HTTP Methods

```text
GET
POST
PUT
PATCH
DELETE
```

The API architecture supports CRUD operations on booking resources.

---

# 6. Identified API Resources

Three primary API resource areas were identified.

| Resource       | Endpoint   | Purpose                     |
| -------------- | ---------- | --------------------------- |
| Authentication | `/auth`    | Create authentication token |
| Booking        | `/booking` | Manage booking resources    |
| Health Check   | `/ping`    | Verify API availability     |

## Authentication Resource

The authentication resource creates a token used for protected booking operations.

## Booking Resource

The booking resource supports:

* Booking ID retrieval
* Booking filtering
* Individual booking retrieval
* Booking creation
* Full booking update
* Partial booking update
* Booking deletion

## Health Check Resource

The health-check resource verifies that the API is available.

---

# 7. Endpoint Summary

| ID      | API Operation          | Method | Endpoint        | Authentication |
| ------- | ---------------------- | ------ | --------------- | -------------- |
| API-001 | Health Check           | GET    | `/ping`         | No             |
| API-002 | Create Token           | POST   | `/auth`         | No             |
| API-003 | Get Booking IDs        | GET    | `/booking`      | No             |
| API-004 | Get Booking            | GET    | `/booking/{id}` | No             |
| API-005 | Create Booking         | POST   | `/booking`      | No             |
| API-006 | Update Booking         | PUT    | `/booking/{id}` | Yes            |
| API-007 | Partial Update Booking | PATCH  | `/booking/{id}` | Yes            |
| API-008 | Delete Booking         | DELETE | `/booking/{id}` | Yes            |

Eight documented API operations are included in the analysis baseline.

---

# 8. General API Requirements

The following general API requirements were identified.

| Requirement ID | Requirement                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| REQ-GEN-001    | The API shall be accessible using HTTPS.                                                                             |
| REQ-GEN-002    | The API shall expose documented REST endpoints.                                                                      |
| REQ-GEN-003    | The API shall process supported HTTP methods for the related endpoints.                                              |
| REQ-GEN-004    | The API shall return an HTTP response after processing a request.                                                    |
| REQ-GEN-005    | JSON-based endpoints shall process supported JSON request payloads where a request body is required.                 |
| REQ-GEN-006    | JSON-based responses shall provide response data in a JSON-compatible structure where documented.                    |
| REQ-GEN-007    | API operations requiring authentication shall validate provided authentication credentials.                          |
| REQ-GEN-008    | Booking operations shall operate on booking resources identified by booking IDs.                                     |
| REQ-GEN-009    | API behaviour shall be evaluated against the documented API contract.                                                |
| REQ-GEN-010    | Related API operations should provide behaviour sufficiently consistent to support the documented booking lifecycle. |

These requirements provide a general testing baseline.

Detailed endpoint requirements are defined in the following sections.

---

# 9. Health Check Requirements

## Endpoint

```text
GET /ping
```

## Purpose

The health-check endpoint is intended to verify whether the API is operational.

## Identified Requirements

| Requirement ID | Requirement                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| REQ-PING-001   | The API shall expose the `/ping` endpoint.                                                |
| REQ-PING-002   | The `/ping` endpoint shall support the GET method.                                        |
| REQ-PING-003   | A valid GET request to `/ping` shall return an HTTP response indicating API availability. |
| REQ-PING-004   | The documented successful health-check response status shall be HTTP `201 Created`.       |
| REQ-PING-005   | Authentication shall not be required for the health-check request.                        |

## Identified Test Conditions

```text
Valid GET request
Response status
Response body
Response headers
Response time
Unsupported HTTP method
```

## Analysis Note

The documented use of `201 Created` for a health-check GET request is unusual from an HTTP semantics perspective because the request does not appear to create a resource.

The documented status code will initially be treated as the expected API contract.

The observed behaviour will be recorded during execution.

---

# 10. Authentication Requirements

## Endpoint

```text
POST /auth
```

## Purpose

The authentication endpoint creates an authentication token.

The token is used for protected booking operations.

## Documented Request Body

```json
{
  "username": "admin",
  "password": "password123"
}
```

## Identified Request Fields

| Field      | Documented Type | Required |
| ---------- | --------------- | -------- |
| `username` | String          | Yes      |
| `password` | String          | Yes      |

## Identified Requirements

| Requirement ID | Requirement                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| REQ-AUTH-001   | The API shall expose the `/auth` endpoint.                                         |
| REQ-AUTH-002   | The `/auth` endpoint shall support POST requests.                                  |
| REQ-AUTH-003   | The authentication request shall accept a username.                                |
| REQ-AUTH-004   | The authentication request shall accept a password.                                |
| REQ-AUTH-005   | Valid authentication credentials shall produce an authentication token.            |
| REQ-AUTH-006   | A successful authentication response shall contain a `token` property.             |
| REQ-AUTH-007   | The authentication token shall be returned as a string.                            |
| REQ-AUTH-008   | The generated token shall be usable for protected booking operations.              |
| REQ-AUTH-009   | Invalid authentication credentials shall not produce a valid authentication token. |
| REQ-AUTH-010   | Authentication shall not require a previously generated authentication token.      |

## Successful Response Structure

```json
{
  "token": "abc123"
}
```

## Identified Test Conditions

```text
Valid credentials
Invalid username
Invalid password
Both credentials invalid
Empty username
Empty password
Missing username
Missing password
Null username
Null password
Incorrect username data type
Incorrect password data type
Empty JSON object
Empty request body
Malformed JSON
Missing Content-Type
Incorrect Content-Type
```

## Requirement Gap

The documentation does not clearly define:

* Token lifetime
* Token expiration behaviour
* Token revocation
* Maximum token length
* Authentication rate limits
* Account lockout behaviour
* Detailed invalid credential status codes
* Standardized authentication error schema

These areas must be treated carefully during test design.

---

# 11. Get Booking IDs Requirements

## Endpoint

```text
GET /booking
```

## Purpose

The endpoint returns booking IDs for bookings that exist in the API.

Optional query parameters may be used to filter the returned booking IDs.

## Identified Requirements

| Requirement ID | Requirement                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| REQ-GETIDS-001 | The API shall expose the `/booking` endpoint.                                        |
| REQ-GETIDS-002 | The `/booking` endpoint shall support GET requests.                                  |
| REQ-GETIDS-003 | A valid GET request shall return booking identifiers.                                |
| REQ-GETIDS-004 | The response shall use an array structure.                                           |
| REQ-GETIDS-005 | Each returned booking identifier object shall contain a `bookingid` property.        |
| REQ-GETIDS-006 | The `bookingid` value shall be numeric.                                              |
| REQ-GETIDS-007 | Authentication shall not be required.                                                |
| REQ-GETIDS-008 | The endpoint shall support documented booking filters.                               |
| REQ-GETIDS-009 | Filtered requests shall return booking IDs matching the supported filter conditions. |

## Expected Response Structure

```json
[
  {
    "bookingid": 1
  },
  {
    "bookingid": 2
  }
]
```

## Supported Query Parameters

```text
firstname
lastname
checkin
checkout
```

## Identified Test Conditions

```text
Retrieve all booking IDs
Filter by firstname
Filter by lastname
Filter by checkin
Filter by checkout
Combine firstname and lastname
Combine date filters
Use multiple supported filters
Non-existing firstname
Non-existing lastname
Empty filter value
Invalid date format
Unknown query parameter
Special characters
Unicode characters
```

## Requirement Gap

The documentation does not explicitly define:

* Case sensitivity for name filters
* Partial-match behaviour
* Whitespace handling
* URL encoding expectations
* Behaviour for unknown query parameters
* Behaviour for empty query values
* Result ordering
* Pagination
* Maximum result count

These conditions provide exploratory testing opportunities.

---

# 12. Get Booking Requirements

## Endpoint

```text
GET /booking/{id}
```

## Purpose

The endpoint returns the booking identified by the supplied booking ID.

## Path Parameter

| Parameter | Documented Type | Required |
| --------- | --------------- | -------- |
| `id`      | Number          | Yes      |

## Identified Requirements

| Requirement ID | Requirement                                                             |
| -------------- | ----------------------------------------------------------------------- |
| REQ-GET-001    | The API shall support retrieving an individual booking by booking ID.   |
| REQ-GET-002    | The request shall contain a booking ID in the endpoint path.            |
| REQ-GET-003    | An existing booking ID shall return the related booking data.           |
| REQ-GET-004    | A successful booking response shall contain booking data.               |
| REQ-GET-005    | The returned booking data shall correspond to the requested booking ID. |
| REQ-GET-006    | Authentication shall not be required.                                   |
| REQ-GET-007    | The booking response shall contain the documented booking properties.   |

## Expected Booking Response

```json
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
```

## Identified Test Conditions

```text
Existing booking ID
Non-existing booking ID
Booking ID = 0
Negative booking ID
String booking ID
Decimal booking ID
Special-character booking ID
Very large booking ID
Missing booking ID path segment
```

## Requirement Gap

The documentation does not define a detailed error response schema for an invalid or non-existing booking ID.

This behaviour must be observed during test execution.

---

# 13. Create Booking Requirements

## Endpoint

```text
POST /booking
```

## Purpose

The endpoint creates a new booking.

## Documented Request Body

```json
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
```

## Identified Request Fields

| Field                   | Documented Type | Required |
| ----------------------- | --------------- | -------- |
| `firstname`             | String          | Yes      |
| `lastname`              | String          | Yes      |
| `totalprice`            | Number          | Yes      |
| `depositpaid`           | Boolean         | Yes      |
| `bookingdates`          | Object          | Yes      |
| `bookingdates.checkin`  | Date            | Yes      |
| `bookingdates.checkout` | Date            | Yes      |
| `additionalneeds`       | String          | No       |

## Identified Requirements

| Requirement ID | Requirement                                                               |
| -------------- | ------------------------------------------------------------------------- |
| REQ-CREATE-001 | The API shall support booking creation using POST `/booking`.             |
| REQ-CREATE-002 | A booking creation request shall accept a JSON booking payload.           |
| REQ-CREATE-003 | The booking payload shall support `firstname`.                            |
| REQ-CREATE-004 | The booking payload shall support `lastname`.                             |
| REQ-CREATE-005 | The booking payload shall support `totalprice`.                           |
| REQ-CREATE-006 | The booking payload shall support `depositpaid`.                          |
| REQ-CREATE-007 | The booking payload shall support a `bookingdates` object.                |
| REQ-CREATE-008 | The `bookingdates` object shall support `checkin`.                        |
| REQ-CREATE-009 | The `bookingdates` object shall support `checkout`.                       |
| REQ-CREATE-010 | The booking payload may contain `additionalneeds`.                        |
| REQ-CREATE-011 | A successfully created booking shall receive a booking ID.                |
| REQ-CREATE-012 | The creation response shall contain a `bookingid` property.               |
| REQ-CREATE-013 | The creation response shall contain a `booking` object.                   |
| REQ-CREATE-014 | The returned booking data shall correspond to the submitted booking data. |
| REQ-CREATE-015 | Authentication shall not be required for booking creation.                |

## Expected Successful Response Structure

```json
{
  "bookingid": 1,
  "booking": {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
  }
}
```

## Identified Test Conditions

```text
Valid complete booking
Valid booking without additionalneeds
Missing firstname
Missing lastname
Missing totalprice
Missing depositpaid
Missing bookingdates
Missing checkin
Missing checkout
Null fields
Empty strings
Incorrect data types
Negative totalprice
Zero totalprice
Large totalprice
Invalid boolean values
Invalid date formats
Check-in equals checkout
Checkout before check-in
Unexpected properties
Empty JSON object
Empty request body
Malformed JSON
```

## Requirement Gaps

The documentation does not define:

* Minimum firstname length
* Maximum firstname length
* Minimum lastname length
* Maximum lastname length
* Allowed name characters
* Minimum total price
* Maximum total price
* Decimal price behaviour
* Date range restrictions
* Whether check-in must be before checkout
* Whether past booking dates are allowed
* Maximum additional needs length
* Behaviour for unknown JSON properties

These gaps are significant negative and boundary testing opportunities.

---

# 14. Update Booking Requirements

## Endpoint

```text
PUT /booking/{id}
```

## Purpose

The endpoint performs a full update of an existing booking.

## Authentication

Authentication is required.

The documentation supports authentication using:

```text
Cookie: token=<token>
```

or HTTP Basic authentication.

## Identified Requirements

| Requirement ID | Requirement                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| REQ-PUT-001    | The API shall support full booking updates using PUT.                       |
| REQ-PUT-002    | The request shall identify the booking using a booking ID.                  |
| REQ-PUT-003    | The operation shall require valid authentication.                           |
| REQ-PUT-004    | A valid authenticated request shall update the identified booking.          |
| REQ-PUT-005    | The request shall accept a complete booking payload.                        |
| REQ-PUT-006    | The response shall contain the updated booking data.                        |
| REQ-PUT-007    | Updated values shall correspond to the submitted values.                    |
| REQ-PUT-008    | Updated booking data shall be retrievable after the update.                 |
| REQ-PUT-009    | Unauthorized requests shall not successfully update protected booking data. |

## Expected Request Structure

```json
{
  "firstname": "James",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
```

## Identified Test Conditions

```text
Valid token
Valid Basic authentication
Missing authentication
Invalid token
Modified token
Existing booking ID
Non-existing booking ID
Complete valid payload
Missing firstname
Missing lastname
Missing bookingdates
Empty JSON object
Empty request body
Incorrect data types
Malformed JSON
```

## Requirement Gap

The documentation does not clearly define whether PUT strictly requires every documented booking field.

This must be validated experimentally.

---

# 15. Partial Update Booking Requirements

## Endpoint

```text
PATCH /booking/{id}
```

## Purpose

The endpoint performs a partial update of an existing booking.

## Authentication

Authentication is required.

## Identified Requirements

| Requirement ID | Requirement                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| REQ-PATCH-001  | The API shall support partial booking updates using PATCH.                  |
| REQ-PATCH-002  | The request shall identify the booking using a booking ID.                  |
| REQ-PATCH-003  | The operation shall require valid authentication.                           |
| REQ-PATCH-004  | The request may contain selected booking properties.                        |
| REQ-PATCH-005  | Submitted properties shall be updated.                                      |
| REQ-PATCH-006  | Properties not included in the request should remain unchanged.             |
| REQ-PATCH-007  | The response shall contain the updated booking data.                        |
| REQ-PATCH-008  | Updated data shall remain retrievable after the operation.                  |
| REQ-PATCH-009  | Unauthorized requests shall not successfully modify protected booking data. |

## Documented Partial Request Example

```json
{
  "firstname": "James",
  "lastname": "Brown"
}
```

## Identified Test Conditions

```text
Update firstname only
Update lastname only
Update totalprice only
Update depositpaid only
Update bookingdates
Update additionalneeds
Update multiple properties
Empty JSON object
Empty request body
Null property
Incorrect data type
Unexpected property
Missing authentication
Invalid token
Modified token
Non-existing booking ID
```

## Requirement Gaps

The documentation does not clearly define:

* Behaviour of an empty PATCH object
* Behaviour of null property values
* Behaviour of unknown properties
* Nested partial update semantics for `bookingdates`
* Whether invalid properties are ignored or rejected

These areas require exploratory testing.

---

# 16. Delete Booking Requirements

## Endpoint

```text
DELETE /booking/{id}
```

## Purpose

The endpoint deletes an existing booking.

## Authentication

Authentication is required.

## Identified Requirements

| Requirement ID | Requirement                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| REQ-DELETE-001 | The API shall support booking deletion using DELETE.                            |
| REQ-DELETE-002 | The request shall identify the booking using a booking ID.                      |
| REQ-DELETE-003 | The operation shall require valid authentication.                               |
| REQ-DELETE-004 | A valid authenticated request shall delete the identified booking.              |
| REQ-DELETE-005 | A deleted booking shall no longer be retrievable as an existing booking.        |
| REQ-DELETE-006 | Unauthorized requests shall not successfully delete protected booking data.     |
| REQ-DELETE-007 | The documented successful deletion response status shall be HTTP `201 Created`. |

## Identified Test Conditions

```text
Delete existing booking
Verify deleted booking
Delete without authentication
Delete with invalid token
Delete with modified token
Delete non-existing booking
Delete booking ID = 0
Delete negative booking ID
Delete string booking ID
Delete same booking twice
```

## Analysis Note

The documented `201 Created` response for a DELETE operation is unusual from an HTTP semantics perspective.

The documented value is treated as the initial API contract and will be compared with actual behaviour.

---

# 17. Booking Data Model Analysis

The primary booking data model contains the following properties.

| Property                | Type                       | Structure       | Requirement Status |
| ----------------------- | -------------------------- | --------------- | ------------------ |
| `firstname`             | String                     | Primitive       | Required           |
| `lastname`              | String                     | Primitive       | Required           |
| `totalprice`            | Number                     | Primitive       | Required           |
| `depositpaid`           | Boolean                    | Primitive       | Required           |
| `bookingdates`          | Object                     | Nested object   | Required           |
| `bookingdates.checkin`  | Date/String representation | Nested property | Required           |
| `bookingdates.checkout` | Date/String representation | Nested property | Required           |
| `additionalneeds`       | String                     | Primitive       | Optional           |

## Logical Model

```text
Booking
│
├── firstname
├── lastname
├── totalprice
├── depositpaid
├── bookingdates
│   ├── checkin
│   └── checkout
└── additionalneeds
```

## Identified Validation Areas

```text
Property existence
Data type
Null handling
Empty value handling
Boundary values
Nested object structure
Date format
Date relationship
Unexpected properties
Data persistence
```

---

# 18. Authentication Model Analysis

The API provides a token-generation endpoint.

Authentication workflow:

```text
POST /auth
      ↓
Submit Credentials
      ↓
Receive Token
      ↓
Store Token
      ↓
Send Token with Protected Request
```

Protected operations identified:

```text
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

Unprotected operations identified:

```text
GET /ping
POST /auth
GET /booking
GET /booking/{id}
POST /booking
```

## Cookie Authentication Model

```text
Cookie: token={{authToken}}
```

## Basic Authentication

The documentation also identifies Basic authentication as an option for protected booking operations.

## Testing Implications

Authentication testing must validate:

```text
Valid token
Missing token
Invalid token
Modified token
Valid Basic authentication
Invalid Basic authentication
```

The project should verify authentication independently for PUT, PATCH, and DELETE.

Successful authentication on one protected method does not prove enforcement on another endpoint.

---

# 19. Path Parameter Analysis

The booking resource uses a booking ID as a path parameter.

Example:

```text
/booking/{id}
```

## Documented Parameter

| Parameter | Type   |
| --------- | ------ |
| `id`      | Number |

## Identified Equivalence Classes

```text
Existing positive integer
Non-existing positive integer
Zero
Negative integer
Decimal number
Alphabetic string
Alphanumeric string
Special characters
Very large number
```

## Testing Objective

Validate:

* Resource identification
* Parameter parsing
* Invalid path handling
* Non-existing resource handling
* Error response consistency

---

# 20. Query Parameter Analysis

The Get Booking IDs operation supports optional filters.

## Identified Query Parameters

| Parameter   | Documented Type | Purpose                       |
| ----------- | --------------- | ----------------------------- |
| `firstname` | String          | Filter bookings by first name |
| `lastname`  | String          | Filter bookings by last name  |
| `checkin`   | Date            | Filter by check-in date       |
| `checkout`  | Date            | Filter by checkout date       |

## Query Testing Model

```text
No Filter
   ↓
Single Filter
   ↓
Alternative Single Filter
   ↓
Combined Filters
   ↓
Invalid Filter Value
   ↓
Empty Filter Value
   ↓
Unknown Filter
```

## Identified Test Conditions

```text
Exact name
Different case
Partial name
Leading whitespace
Trailing whitespace
Special characters
Unicode
Valid date
Invalid date
Empty value
Unknown parameter
Multiple parameters
```

The actual matching logic must be verified during execution.

---

# 21. Request Header Analysis

The documentation identifies `Content-Type` for requests containing payload data.

Primary expected value:

```text
Content-Type: application/json
```

The documentation also references:

```text
application/xml
```

for supported payload formats on selected operations.

Protected booking requests may use:

```text
Cookie: token=<token>
```

## Identified Header Test Conditions

```text
Correct Content-Type
Missing Content-Type
Incorrect Content-Type
Unsupported Content-Type
Valid Cookie token
Missing Cookie header
Invalid Cookie token
Modified Cookie token
```

## Requirement Gap

The documentation does not define a standardized response for unsupported media types.

Actual API behaviour must be analysed.

---

# 22. Response Analysis

API responses vary by endpoint.

## Authentication Response

```json
{
  "token": "abc123"
}
```

## Booking ID List Response

```json
[
  {
    "bookingid": 1
  }
]
```

## Booking Response

```json
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
```

## Booking Creation Response

```json
{
  "bookingid": 1,
  "booking": {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
  }
}
```

## Analysis Focus

Responses must be validated for:

```text
Root structure
Required properties
Nested properties
Data types
Property values
Content-Type
Status code
Data consistency
```

---

# 23. HTTP Status Code Analysis

The published API documentation identifies successful status codes for individual operations.

| Operation              | Documented Success Status |
| ---------------------- | ------------------------- |
| Health Check           | `201 Created`             |
| Create Token           | `200 OK`                  |
| Get Booking IDs        | `200 OK`                  |
| Get Booking            | `200 OK`                  |
| Create Booking         | `200 OK`                  |
| Update Booking         | `200 OK`                  |
| Partial Update Booking | `200 OK`                  |
| Delete Booking         | `201 Created`             |

## Analysis Findings

Two documented status-code choices require particular attention:

```text
GET /ping       → 201 Created
DELETE /booking → 201 Created
```

Both are unusual when compared with common HTTP semantics.

However:

```text
Documented API Behaviour ≠ Assumed REST Best Practice
```

The project will initially validate the API against its published contract.

Status-code design observations may be documented separately from functional defects.

## Negative Status Codes

The documentation does not provide a complete endpoint-by-endpoint error status matrix.

Potential responses must therefore be identified through actual execution.

---

# 24. Data Type Analysis

The following documented data types were identified.

| Property / Parameter | Documented Type |
| -------------------- | --------------- |
| `username`           | String          |
| `password`           | String          |
| `token`              | String          |
| `bookingid`          | Number          |
| `id`                 | Number          |
| `firstname`          | String          |
| `lastname`           | String          |
| `totalprice`         | Number          |
| `depositpaid`        | Boolean         |
| `bookingdates`       | Object          |
| `checkin`            | Date            |
| `checkout`           | Date            |
| `additionalneeds`    | String          |

## Data Type Test Strategy

Each field may be tested using:

```text
Expected data type
Alternative primitive type
Null
Array
Object
```

Example for `totalprice`:

```text
Number      → Expected type
String      → Invalid type condition
Boolean     → Invalid type condition
Null        → Null condition
Array       → Invalid structure
Object      → Invalid structure
```

The API's actual type-validation behaviour will be documented.

---

# 25. Required and Optional Field Analysis

## Booking Request

| Field                   | Requirement |
| ----------------------- | ----------- |
| `firstname`             | Required    |
| `lastname`              | Required    |
| `totalprice`            | Required    |
| `depositpaid`           | Required    |
| `bookingdates`          | Required    |
| `bookingdates.checkin`  | Required    |
| `bookingdates.checkout` | Required    |
| `additionalneeds`       | Optional    |

## Authentication Request

| Field      | Requirement |
| ---------- | ----------- |
| `username` | Required    |
| `password` | Required    |

## Testing Approach

Each required property should be tested using:

```text
Property present with valid value
Property missing
Property = null
Property = empty value
Property with incorrect data type
```

Optional field testing should verify:

```text
Field present
Field omitted
Field empty
Field null
```

Observed optional-field behaviour must be compared with the documented model.

---

# 26. Identified API Dependencies

Several endpoint dependencies were identified.

## Authentication Dependency

```text
POST /auth
      ↓
authToken
      ↓
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

## Booking Resource Dependency

```text
POST /booking
      ↓
bookingid
      ↓
GET /booking/{id}
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

## Post-deletion Dependency

```text
DELETE /booking/{id}
      ↓
GET /booking/{id}
      ↓
Verify resource is no longer retrievable
```

## Testing Implication

Dynamic request chaining is required for reliable automated workflows.

Hardcoded booking IDs should not be used for the primary E2E regression workflow.

---

# 27. Identified CRUD Workflow

The booking resource supports a complete CRUD lifecycle.

| CRUD Operation | HTTP Method | Endpoint        |
| -------------- | ----------- | --------------- |
| Create         | POST        | `/booking`      |
| Read           | GET         | `/booking/{id}` |
| Update         | PUT / PATCH | `/booking/{id}` |
| Delete         | DELETE      | `/booking/{id}` |

## Identified Workflow

```text
CREATE
POST /booking
      ↓
bookingid

READ
GET /booking/{id}
      ↓
booking data

UPDATE
PUT /booking/{id}
      ↓
updated booking

PARTIAL UPDATE
PATCH /booking/{id}
      ↓
partially updated booking

DELETE
DELETE /booking/{id}
      ↓
booking removed

VERIFY
GET /booking/{id}
      ↓
resource not retrievable
```

This workflow forms the foundation of the primary E2E API test.

---

# 28. Identified Positive Test Conditions

The requirements analysis identified the following primary positive conditions.

| Area              | Positive Condition                   |
| ----------------- | ------------------------------------ |
| Health            | Valid API health check               |
| Authentication    | Valid credentials                    |
| Booking IDs       | Retrieve all booking IDs             |
| Filtering         | Valid firstname filter               |
| Filtering         | Valid lastname filter                |
| Filtering         | Valid check-in filter                |
| Filtering         | Valid checkout filter                |
| Booking Retrieval | Existing booking ID                  |
| Booking Creation  | Complete valid booking               |
| Booking Creation  | Valid booking without optional field |
| Full Update       | Valid authenticated update           |
| Partial Update    | Valid single-field update            |
| Partial Update    | Valid multi-field update             |
| Delete            | Valid authenticated deletion         |
| Workflow          | Complete booking lifecycle           |

Detailed positive test cases will be created in the API Test Cases documentation.

---

# 29. Identified Negative Test Conditions

The analysis identified the following negative test categories.

## Authentication

```text
Invalid username
Invalid password
Missing username
Missing password
Null credentials
Incorrect credential data types
Malformed JSON
```

## Booking IDs

```text
Non-existing ID
Zero
Negative ID
String ID
Special-character ID
Very large ID
```

## Booking Data

```text
Missing required fields
Null values
Empty strings
Incorrect data types
Malformed JSON
Unexpected properties
Invalid dates
Invalid logical date sequence
```

## Authentication Enforcement

```text
Missing token
Invalid token
Modified token
Invalid Basic authentication
```

## Headers

```text
Missing Content-Type
Incorrect Content-Type
Unsupported Content-Type
```

## Query Parameters

```text
Empty values
Invalid dates
Unknown parameters
Special characters
```

These categories will be expanded into individual test scenarios and test cases.

---

# 30. Identified Boundary Test Conditions

The API documentation does not define explicit numeric or string limits.

Boundary testing will therefore focus on meaningful transitions and common implementation boundaries.

## Numeric Values

```text
-1
0
1
Large positive value
2147483647
2147483648
```

## String Length

```text
0 characters
1 character
Typical valid string
255 characters
256 characters
1000 characters
```

## Dates

```text
Past date
Current date
Future date
Leap-year date
Invalid leap date
Check-in = checkout
Checkout before check-in
```

## Booking IDs

```text
-1
0
1
Existing ID
Non-existing positive ID
Very large ID
```

Because explicit limits are undocumented, acceptance of a boundary value is not automatically considered a defect.

Observed behaviour must be analysed against documented requirements and API consistency.

---

# 31. Requirement Ambiguities and Gaps

The following requirement gaps were identified during documentation analysis.

| Gap ID  | Area             | Missing or Ambiguous Requirement                             |
| ------- | ---------------- | ------------------------------------------------------------ |
| GAP-001 | Authentication   | Token lifetime is not defined                                |
| GAP-002 | Authentication   | Token expiration behaviour is not defined                    |
| GAP-003 | Authentication   | Token revocation behaviour is not defined                    |
| GAP-004 | Authentication   | Invalid credential status behaviour is not fully defined     |
| GAP-005 | Booking          | Maximum firstname length is not defined                      |
| GAP-006 | Booking          | Maximum lastname length is not defined                       |
| GAP-007 | Booking          | Allowed name characters are not defined                      |
| GAP-008 | Booking          | Minimum total price is not defined                           |
| GAP-009 | Booking          | Maximum total price is not defined                           |
| GAP-010 | Booking          | Decimal price behaviour is not defined                       |
| GAP-011 | Dates            | Allowed date range is not defined                            |
| GAP-012 | Dates            | Check-in and checkout relationship is not explicitly defined |
| GAP-013 | Dates            | Past booking date behaviour is not defined                   |
| GAP-014 | Additional Needs | Maximum field length is not defined                          |
| GAP-015 | JSON             | Unknown property behaviour is not defined                    |
| GAP-016 | PATCH            | Empty object behaviour is not defined                        |
| GAP-017 | PATCH            | Nested partial update semantics are not fully defined        |
| GAP-018 | PUT              | Required full replacement semantics are not fully defined    |
| GAP-019 | Query Filters    | Case sensitivity is not defined                              |
| GAP-020 | Query Filters    | Partial matching behaviour is not defined                    |
| GAP-021 | Query Filters    | Unknown parameter behaviour is not defined                   |
| GAP-022 | Query Filters    | Result ordering is not defined                               |
| GAP-023 | Error Handling   | Standard error response schema is not defined                |
| GAP-024 | Error Handling   | Complete negative status-code matrix is not defined          |
| GAP-025 | Media Types      | Unsupported Content-Type behaviour is not fully defined      |

These gaps are documented to prevent unsupported assumptions during defect classification.

---

# 32. API Environment Constraints

The public Restful Booker environment has characteristics that directly affect test execution.

## Shared Public Environment

The API is publicly available and may be accessed by multiple testers or automated tools.

Test data may therefore be affected by external activity.

## Periodic Data Reset

The public API environment is designed to reset to its default state periodically.

The published service information states that the API resets approximately every ten minutes.

## Default Records

The service is pre-loaded with default booking records.

## Dynamic Resource Persistence

Bookings created during testing should not be assumed to remain permanently available.

## Testing Implications

The project should:

```text
Create required test resources dynamically
        ↓
Extract generated booking IDs
        ↓
Execute dependent requests promptly
        ↓
Avoid permanent hardcoded booking IDs
        ↓
Clean up created resources where possible
```

Long-running workflows may be affected by environment reset behaviour.

## Regression Implication

The primary automated regression workflow should be self-contained.

It should create the booking resource required for the test instead of depending on an existing booking ID.

---

# 33. Requirement Risk Analysis

| Risk ID      | Requirement Area   | Risk                            | Testing Response                                                   |
| ------------ | ------------------ | ------------------------------- | ------------------------------------------------------------------ |
| RISK-REQ-001 | Documentation      | Incomplete validation rules     | Record ambiguities before defect classification                    |
| RISK-REQ-002 | Authentication     | Undefined token lifetime        | Avoid unsupported expiration assumptions                           |
| RISK-REQ-003 | Booking Data       | Undefined field boundaries      | Treat boundary results as exploratory unless requirement supported |
| RISK-REQ-004 | Dates              | Undefined business rules        | Separate logical observations from confirmed defects               |
| RISK-REQ-005 | Error Handling     | Missing error contract          | Record exact observed status and body                              |
| RISK-REQ-006 | Public Environment | External data changes           | Create dynamic resources                                           |
| RISK-REQ-007 | Environment Reset  | Booking may disappear           | Execute dependent workflow sequentially                            |
| RISK-REQ-008 | Existing Bookings  | Hardcoded ID may become invalid | Use dynamically generated booking IDs                              |
| RISK-REQ-009 | Status Codes       | Unusual documented status codes | Test against documentation before applying best-practice judgement |
| RISK-REQ-010 | Query Filters      | Matching rules undefined        | Use exploratory and comparative testing                            |

---

# 34. Requirements Traceability Preparation

Requirement IDs defined in this document are designed to support future traceability.

Example:

```text
REQ-CREATE-011
      ↓
API Test Scenario
      ↓
API Test Case
      ↓
Postman Request
      ↓
Automated Assertion
      ↓
Test Execution Result
      ↓
Bug Report if Failed
```

Example traceability chain:

```text
REQ-AUTH-005
Valid authentication credentials shall produce an authentication token.
        ↓
TS-AUTH-001
Verify authentication using valid credentials.
        ↓
TC-AUTH-001
Create token with valid username and password.
        ↓
POST - Create Token - Valid Credentials
        ↓
Token property assertion
        ↓
PASS / FAIL
```

The final project may use the following traceability relationship:

| Requirement | Scenario | Test Case | Postman Request | Execution | Defect |
| ----------- | -------- | --------- | --------------- | --------- | ------ |
| REQ ID      | TS ID    | TC ID     | Request Name    | Status    | BUG ID |

Detailed traceability will be developed after test scenarios and test cases are finalized.

---

# 35. Analysis Conclusions

The requirements analysis identified eight documented API operations across three primary API resource areas:

```text
Authentication
Booking
Health Check
```

The API supports a complete booking CRUD lifecycle:

```text
CREATE
READ
UPDATE
PARTIAL UPDATE
DELETE
```

The analysis identified requirements for:

* API availability
* Authentication
* Booking ID retrieval
* Booking filtering
* Booking retrieval
* Booking creation
* Full booking update
* Partial booking update
* Booking deletion

The API provides sufficient functionality to support:

```text
Functional API Testing
Positive Testing
Negative Testing
Boundary Testing
Authentication Testing
Authorization Testing
CRUD Testing
Query Parameter Testing
Data Validation
Data Type Validation
JSON Schema Validation
Request Chaining
End-to-End Workflow Testing
Automated API Regression
```

The documentation also contains several undefined or ambiguous validation areas.

These gaps create opportunities for exploratory API testing but require careful defect classification.

The public environment reset behaviour and shared test environment are major execution constraints.

The primary automated workflows should therefore use dynamically created resources and avoid permanent hardcoded booking IDs.

The requirements identified in this document form the baseline for:

```text
Endpoint Inventory
        ↓
API Test Scenarios
        ↓
API Test Cases
        ↓
Postman Implementation
        ↓
API Test Execution
        ↓
Defect Reporting
        ↓
Requirements Traceability
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
