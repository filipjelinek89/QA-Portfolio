# Endpoint Inventory

**Project:** Restful Booker API Testing Project
**Document Type:** API Endpoint Inventory
**Version:** 1.0
**Prepared by:** Filip Jelinek
**API Type:** REST API
**Project Status:** In Progress

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. API Base Information](#2-api-base-information)
* [3. Endpoint Inventory Summary](#3-endpoint-inventory-summary)
* [4. API Resource Map](#4-api-resource-map)
* [5. API-001 - Health Check](#5-api-001---health-check)
* [6. API-002 - Create Authentication Token](#6-api-002---create-authentication-token)
* [7. API-003 - Get Booking IDs](#7-api-003---get-booking-ids)
* [8. API-004 - Get Booking by ID](#8-api-004---get-booking-by-id)
* [9. API-005 - Create Booking](#9-api-005---create-booking)
* [10. API-006 - Update Booking](#10-api-006---update-booking)
* [11. API-007 - Partial Update Booking](#11-api-007---partial-update-booking)
* [12. API-008 - Delete Booking](#12-api-008---delete-booking)
* [13. Authentication Matrix](#13-authentication-matrix)
* [14. Request Body Matrix](#14-request-body-matrix)
* [15. Parameter Matrix](#15-parameter-matrix)
* [16. Response Structure Matrix](#16-response-structure-matrix)
* [17. Documented Success Status Codes](#17-documented-success-status-codes)
* [18. CRUD Mapping](#18-crud-mapping)
* [19. Endpoint Dependency Map](#19-endpoint-dependency-map)
* [20. Postman Folder Mapping](#20-postman-folder-mapping)
* [21. Test Priority Classification](#21-test-priority-classification)
* [22. Identified Testing Focus](#22-identified-testing-focus)
* [23. Inventory Summary](#23-inventory-summary)

---

# 1. Purpose

The purpose of this document is to provide a centralized technical inventory of the documented Restful Booker API endpoints included in the project test scope.

The endpoint inventory identifies:

* API operation
* HTTP method
* Endpoint path
* Resource
* Authentication requirement
* Path parameters
* Query parameters
* Request body requirement
* Request Content-Type
* Expected response structure
* Documented successful status code
* Endpoint dependencies
* Planned Postman location
* Test priority

This document acts as a technical reference between the API requirements analysis and detailed API test design.

The inventory is based on the published API documentation.

Actual endpoint behaviour will be validated during test execution.

---

# 2. API Base Information

| Attribute               | Value                                  |
| ----------------------- | -------------------------------------- |
| API Name                | Restful Booker                         |
| API Type                | REST API                               |
| Protocol                | HTTPS                                  |
| Primary Data Format     | JSON                                   |
| Base URL                | `https://restful-booker.herokuapp.com` |
| Primary Resource        | `/booking`                             |
| Authentication Resource | `/auth`                                |
| Health Resource         | `/ping`                                |
| Testing Model           | Black-box API Testing                  |

## Postman Base URL Variable

The API base URL will be stored as a Postman environment variable:

```text
{{baseUrl}}
```

Configured value:

```text
https://restful-booker.herokuapp.com
```

Requests should use the environment variable instead of repeating the complete base URL.

Example:

```text
{{baseUrl}}/booking
```

---

# 3. Endpoint Inventory Summary

| API ID  | Operation              | Method | Endpoint        | Authentication | Body |
| ------- | ---------------------- | ------ | --------------- | -------------- | ---- |
| API-001 | Health Check           | GET    | `/ping`         | No             | No   |
| API-002 | Create Token           | POST   | `/auth`         | No             | Yes  |
| API-003 | Get Booking IDs        | GET    | `/booking`      | No             | No   |
| API-004 | Get Booking by ID      | GET    | `/booking/{id}` | No             | No   |
| API-005 | Create Booking         | POST   | `/booking`      | No             | Yes  |
| API-006 | Update Booking         | PUT    | `/booking/{id}` | Yes            | Yes  |
| API-007 | Partial Update Booking | PATCH  | `/booking/{id}` | Yes            | Yes  |
| API-008 | Delete Booking         | DELETE | `/booking/{id}` | Yes            | No   |

## Inventory Totals

| Metric                                      | Count |
| ------------------------------------------- | ----: |
| Documented API Operations                   |     8 |
| GET Operations                              |     3 |
| POST Operations                             |     2 |
| PUT Operations                              |     1 |
| PATCH Operations                            |     1 |
| DELETE Operations                           |     1 |
| Authenticated Operations                    |     3 |
| Unauthenticated Operations                  |     5 |
| Operations with Request Body                |     4 |
| Operations with Path Parameter              |     4 |
| Operations with Documented Query Parameters |     1 |

---

# 4. API Resource Map

```text
Restful Booker API
│
├── /ping
│   └── GET    Health Check
│
├── /auth
│   └── POST   Create Authentication Token
│
└── /booking
    │
    ├── GET    Get Booking IDs
    ├── POST   Create Booking
    │
    └── /{id}
        ├── GET       Get Booking
        ├── PUT       Update Booking
        ├── PATCH     Partial Update Booking
        └── DELETE    Delete Booking
```

The API contains three primary resource paths:

```text
/ping
/auth
/booking
```

The booking resource contains the majority of the API functionality.

---

# 5. API-001 - Health Check

## Endpoint Information

| Attribute                 | Value              |
| ------------------------- | ------------------ |
| API ID                    | API-001            |
| Operation                 | Health Check       |
| Documentation Name        | Ping - HealthCheck |
| HTTP Method               | GET                |
| Endpoint                  | `/ping`            |
| Postman URL               | `{{baseUrl}}/ping` |
| Authentication            | Not Required       |
| Path Parameters           | None               |
| Query Parameters          | None               |
| Request Body              | Not Required       |
| Primary Resource          | Ping               |
| Documented Success Status | `201 Created`      |
| Test Priority             | High               |

## Purpose

Verifies whether the Restful Booker API is operational and responding to requests.

## Request Structure

```http
GET /ping
```

No request body is required.

No authentication is required.

## Documented Response

The documentation identifies:

```text
201 Created
```

as the successful health-check response.

## Primary Validation Areas

```text
Endpoint availability
HTTP status code
Response body
Response headers
Response time
Unsupported method behaviour
```

## Primary Test Dependencies

None.

This endpoint can be executed independently.

## Planned Postman Folder

```text
00 - Health Check
```

## Planned Request Name

```text
GET - API Health Check - Valid Request
```

## Analysis Note

The documented `201 Created` response is unusual for a GET health-check operation.

Testing will initially validate the documented API contract.

---

# 6. API-002 - Create Authentication Token

## Endpoint Information

| Attribute                 | Value              |
| ------------------------- | ------------------ |
| API ID                    | API-002            |
| Operation                 | Create Token       |
| Documentation Name        | Auth - CreateToken |
| HTTP Method               | POST               |
| Endpoint                  | `/auth`            |
| Postman URL               | `{{baseUrl}}/auth` |
| Authentication            | Not Required       |
| Path Parameters           | None               |
| Query Parameters          | None               |
| Request Body              | Required           |
| Primary Resource          | Authentication     |
| Documented Success Status | `200 OK`           |
| Test Priority             | Critical           |

## Purpose

Creates an authentication token using valid API credentials.

The generated token is used by protected booking operations.

## Request Headers

Expected request Content-Type:

```text
Content-Type: application/json
```

## Documented Request Body

```json
{
  "username": "admin",
  "password": "password123"
}
```

## Request Properties

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `username` | String | Yes      |
| `password` | String | Yes      |

## Documented Successful Response

```json
{
  "token": "abc123"
}
```

## Response Properties

| Property | Expected Type |
| -------- | ------------- |
| `token`  | String        |

## Dynamic Output

The returned token will be extracted and stored as:

```text
{{authToken}}
```

## Primary Validation Areas

```text
Status code
Content-Type
Response structure
Token property existence
Token data type
Token value
Invalid credential behaviour
Missing credential behaviour
Malformed request behaviour
```

## Primary Test Dependencies

None.

## Dependent Endpoints

The generated authentication token is used by:

```text
API-006 - Update Booking
API-007 - Partial Update Booking
API-008 - Delete Booking
```

## Planned Postman Folder

```text
01 - Authentication
```

## Primary Planned Request

```text
POST - Create Token - Valid Credentials
```

---

# 7. API-003 - Get Booking IDs

## Endpoint Information

| Attribute                 | Value                   |
| ------------------------- | ----------------------- |
| API ID                    | API-003                 |
| Operation                 | Get Booking IDs         |
| Documentation Name        | Booking - GetBookingIds |
| HTTP Method               | GET                     |
| Endpoint                  | `/booking`              |
| Postman URL               | `{{baseUrl}}/booking`   |
| Authentication            | Not Required            |
| Path Parameters           | None                    |
| Query Parameters          | Optional                |
| Request Body              | Not Required            |
| Primary Resource          | Booking                 |
| Documented Success Status | `200 OK`                |
| Test Priority             | High                    |

## Purpose

Returns booking IDs for bookings available within the API.

Optional query parameters can be used to filter the result.

## Documented Query Parameters

| Parameter   | Type   | Required | Purpose                 |
| ----------- | ------ | -------- | ----------------------- |
| `firstname` | String | No       | Filter by first name    |
| `lastname`  | String | No       | Filter by last name     |
| `checkin`   | Date   | No       | Filter by check-in date |
| `checkout`  | Date   | No       | Filter by checkout date |

## Example Request

```http
GET /booking
```

## Example Filtered Requests

```http
GET /booking?firstname=Filip
```

```http
GET /booking?lastname=Jelinek
```

```http
GET /booking?checkin=2026-07-01
```

```http
GET /booking?checkout=2026-07-10
```

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

## Response Structure

| Element     | Expected Type |
| ----------- | ------------- |
| Root        | Array         |
| Array item  | Object        |
| `bookingid` | Number        |

## Primary Validation Areas

```text
Status code
Response Content-Type
Root array structure
Booking ID property
Booking ID data type
Single filter behaviour
Combined filter behaviour
Empty filter values
Invalid date filters
Unknown query parameters
```

## Primary Test Dependencies

Basic booking ID retrieval can execute independently.

Reliable filter validation may depend on a dynamically created booking with known test data.

## Planned Postman Folder

```text
02 - Booking - GET
```

## Primary Planned Requests

```text
GET - Booking IDs - All Bookings
GET - Booking IDs - Filter by Firstname
GET - Booking IDs - Filter by Lastname
GET - Booking IDs - Filter by Checkin
GET - Booking IDs - Filter by Checkout
GET - Booking IDs - Combined Filters
```

---

# 8. API-004 - Get Booking by ID

## Endpoint Information

| Attribute                 | Value                               |
| ------------------------- | ----------------------------------- |
| API ID                    | API-004                             |
| Operation                 | Get Booking                         |
| Documentation Name        | Booking - GetBooking                |
| HTTP Method               | GET                                 |
| Endpoint                  | `/booking/{id}`                     |
| Postman URL               | `{{baseUrl}}/booking/{{bookingId}}` |
| Authentication            | Not Required                        |
| Path Parameters           | `id`                                |
| Query Parameters          | None                                |
| Request Body              | Not Required                        |
| Primary Resource          | Booking                             |
| Documented Success Status | `200 OK`                            |
| Test Priority             | Critical                            |

## Purpose

Returns the booking data associated with a specific booking ID.

## Path Parameter

| Parameter | Documented Type | Required |
| --------- | --------------- | -------- |
| `id`      | Number          | Yes      |

## Example Request

```http
GET /booking/1
```

## Postman Request

```text
{{baseUrl}}/booking/{{bookingId}}
```

## Expected Response Structure

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

## Response Properties

| Property                | Expected Type                |
| ----------------------- | ---------------------------- |
| `firstname`             | String                       |
| `lastname`              | String                       |
| `totalprice`            | Number                       |
| `depositpaid`           | Boolean                      |
| `bookingdates`          | Object                       |
| `bookingdates.checkin`  | String / Date Representation |
| `bookingdates.checkout` | String / Date Representation |
| `additionalneeds`       | String                       |

## Primary Validation Areas

```text
Existing booking retrieval
Status code
Response Content-Type
Booking response structure
Required properties
Data types
Nested bookingdates object
Booking data consistency
Non-existing booking ID
Invalid booking ID
```

## Primary Test Dependency

For repeatable validation, the endpoint should use a booking ID returned by:

```text
API-005 - Create Booking
```

## Dynamic Input

```text
{{bookingId}}
```

## Planned Postman Folder

```text
02 - Booking - GET
```

## Primary Planned Request

```text
GET - Booking by ID - Existing Booking
```

---

# 9. API-005 - Create Booking

## Endpoint Information

| Attribute                 | Value                   |
| ------------------------- | ----------------------- |
| API ID                    | API-005                 |
| Operation                 | Create Booking          |
| Documentation Name        | Booking - CreateBooking |
| HTTP Method               | POST                    |
| Endpoint                  | `/booking`              |
| Postman URL               | `{{baseUrl}}/booking`   |
| Authentication            | Not Required            |
| Path Parameters           | None                    |
| Query Parameters          | None                    |
| Request Body              | Required                |
| Primary Resource          | Booking                 |
| Documented Success Status | `200 OK`                |
| Test Priority             | Critical                |

## Purpose

Creates a new booking resource.

## Request Headers

Expected request Content-Type:

```text
Content-Type: application/json
```

The API documentation also identifies XML as a supported request media type for the operation.

The primary project test implementation uses JSON.

## Documented JSON Request Body

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

## Request Properties

| Property                | Type    | Required |
| ----------------------- | ------- | -------- |
| `firstname`             | String  | Yes      |
| `lastname`              | String  | Yes      |
| `totalprice`            | Number  | Yes      |
| `depositpaid`           | Boolean | Yes      |
| `bookingdates`          | Object  | Yes      |
| `bookingdates.checkin`  | Date    | Yes      |
| `bookingdates.checkout` | Date    | Yes      |
| `additionalneeds`       | String  | No       |

## Expected Successful Response

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

## Response Properties

| Property                        | Expected Type                |
| ------------------------------- | ---------------------------- |
| `bookingid`                     | Number                       |
| `booking`                       | Object                       |
| `booking.firstname`             | String                       |
| `booking.lastname`              | String                       |
| `booking.totalprice`            | Number                       |
| `booking.depositpaid`           | Boolean                      |
| `booking.bookingdates`          | Object                       |
| `booking.bookingdates.checkin`  | String / Date Representation |
| `booking.bookingdates.checkout` | String / Date Representation |
| `booking.additionalneeds`       | String                       |

## Dynamic Output

The generated booking ID will be extracted and stored as:

```text
{{bookingId}}
```

## Primary Validation Areas

```text
Successful resource creation
Booking ID generation
Response structure
Response data types
Submitted and returned data consistency
Required field behaviour
Optional field behaviour
Invalid data types
Null values
Empty values
Malformed JSON
Date validation
```

## Dependent Endpoints

The generated booking ID may be used by:

```text
API-004 - Get Booking
API-006 - Update Booking
API-007 - Partial Update Booking
API-008 - Delete Booking
```

## Planned Postman Folder

```text
03 - Booking - POST
```

## Primary Planned Request

```text
POST - Create Booking - Valid Data
```

---

# 10. API-006 - Update Booking

## Endpoint Information

| Attribute                 | Value                               |
| ------------------------- | ----------------------------------- |
| API ID                    | API-006                             |
| Operation                 | Update Booking                      |
| Documentation Name        | Booking - UpdateBooking             |
| HTTP Method               | PUT                                 |
| Endpoint                  | `/booking/{id}`                     |
| Postman URL               | `{{baseUrl}}/booking/{{bookingId}}` |
| Authentication            | Required                            |
| Path Parameters           | `id`                                |
| Query Parameters          | None                                |
| Request Body              | Required                            |
| Primary Resource          | Booking                             |
| Documented Success Status | `200 OK`                            |
| Test Priority             | Critical                            |

## Purpose

Performs a full update of an existing booking.

## Authentication Options

Documented authentication options:

```text
Cookie Authentication
HTTP Basic Authentication
```

### Cookie Authentication

```text
Cookie: token={{authToken}}
```

## Path Parameter

| Parameter | Documented Type | Required |
| --------- | --------------- | -------- |
| `id`      | Number          | Yes      |

## Request Headers

```text
Content-Type: application/json
Cookie: token={{authToken}}
```

## Documented Request Body

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

## Expected Response

The response contains the updated booking object.

## Primary Validation Areas

```text
Valid full update
Authentication enforcement
Valid token
Missing token
Invalid token
Modified token
Basic authentication
Complete payload behaviour
Missing property behaviour
Data type validation
Updated data persistence
Non-existing booking ID
```

## Primary Dependencies

```text
API-002 - Create Token
API-005 - Create Booking
```

## Dynamic Inputs

```text
{{authToken}}
{{bookingId}}
```

## Planned Postman Folder

```text
04 - Booking - PUT
```

## Primary Planned Request

```text
PUT - Update Booking - Valid Token
```

---

# 11. API-007 - Partial Update Booking

## Endpoint Information

| Attribute                 | Value                               |
| ------------------------- | ----------------------------------- |
| API ID                    | API-007                             |
| Operation                 | Partial Update Booking              |
| Documentation Name        | Booking - PartialUpdateBooking      |
| HTTP Method               | PATCH                               |
| Endpoint                  | `/booking/{id}`                     |
| Postman URL               | `{{baseUrl}}/booking/{{bookingId}}` |
| Authentication            | Required                            |
| Path Parameters           | `id`                                |
| Query Parameters          | None                                |
| Request Body              | Required                            |
| Primary Resource          | Booking                             |
| Documented Success Status | `200 OK`                            |
| Test Priority             | Critical                            |

## Purpose

Updates selected properties of an existing booking.

## Authentication Options

```text
Cookie Authentication
HTTP Basic Authentication
```

## Path Parameter

| Parameter | Documented Type | Required |
| --------- | --------------- | -------- |
| `id`      | Number          | Yes      |

## Request Headers

```text
Content-Type: application/json
Cookie: token={{authToken}}
```

## Documented Partial Request Body

```json
{
  "firstname": "James",
  "lastname": "Brown"
}
```

## Request Body Behaviour

The request may contain selected booking properties.

Potential update targets include:

```text
firstname
lastname
totalprice
depositpaid
bookingdates
additionalneeds
```

## Expected Response

The response contains the updated booking object.

## Primary Validation Areas

```text
Single-property update
Multiple-property update
Updated property persistence
Unchanged property preservation
Nested bookingdates update
Empty object behaviour
Null value behaviour
Incorrect data types
Unexpected properties
Authentication enforcement
Non-existing booking ID
```

## Primary Dependencies

```text
API-002 - Create Token
API-005 - Create Booking
```

## Dynamic Inputs

```text
{{authToken}}
{{bookingId}}
```

## Planned Postman Folder

```text
05 - Booking - PATCH
```

## Primary Planned Requests

```text
PATCH - Update Firstname - Valid Data
PATCH - Update Multiple Fields - Valid Data
```

---

# 12. API-008 - Delete Booking

## Endpoint Information

| Attribute                 | Value                               |
| ------------------------- | ----------------------------------- |
| API ID                    | API-008                             |
| Operation                 | Delete Booking                      |
| Documentation Name        | Booking - DeleteBooking             |
| HTTP Method               | DELETE                              |
| Endpoint                  | `/booking/{id}`                     |
| Postman URL               | `{{baseUrl}}/booking/{{bookingId}}` |
| Authentication            | Required                            |
| Path Parameters           | `id`                                |
| Query Parameters          | None                                |
| Request Body              | Not Required                        |
| Primary Resource          | Booking                             |
| Documented Success Status | `201 Created`                       |
| Test Priority             | Critical                            |

## Purpose

Deletes an existing booking resource.

## Authentication Options

```text
Cookie Authentication
HTTP Basic Authentication
```

## Path Parameter

| Parameter | Documented Type | Required |
| --------- | --------------- | -------- |
| `id`      | Number          | Yes      |

## Request Headers

Cookie authentication example:

```text
Cookie: token={{authToken}}
```

## Example Request

```http
DELETE /booking/1
```

## Primary Validation Areas

```text
Successful deletion
Authentication enforcement
Valid token
Missing token
Invalid token
Modified token
Non-existing booking
Invalid booking ID
Repeated deletion
Post-deletion retrieval
```

## Primary Dependencies

```text
API-002 - Create Token
API-005 - Create Booking
```

## Post-deletion Verification Dependency

```text
API-004 - Get Booking
```

## Dynamic Inputs

```text
{{authToken}}
{{bookingId}}
```

## Planned Postman Folder

```text
06 - Booking - DELETE
```

## Primary Planned Request

```text
DELETE - Booking - Existing Booking
```

## Analysis Note

The documented `201 Created` success status is unusual for a DELETE operation.

The documented status remains the initial expected contract for test design.

---

# 13. Authentication Matrix

| API ID  | Operation              | No Authentication | Cookie Token |   Basic Auth |
| ------- | ---------------------- | ----------------: | -----------: | -----------: |
| API-001 | Health Check           |               Yes | Not Required | Not Required |
| API-002 | Create Token           |               Yes | Not Required | Not Required |
| API-003 | Get Booking IDs        |               Yes | Not Required | Not Required |
| API-004 | Get Booking            |               Yes | Not Required | Not Required |
| API-005 | Create Booking         |               Yes | Not Required | Not Required |
| API-006 | Update Booking         |                No |    Supported |    Supported |
| API-007 | Partial Update Booking |                No |    Supported |    Supported |
| API-008 | Delete Booking         |                No |    Supported |    Supported |

## Protected Operations

```text
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

Each protected operation must be independently tested for authentication enforcement.

---

# 14. Request Body Matrix

| API ID  | Operation              | Request Body | Primary Format |
| ------- | ---------------------- | ------------ | -------------- |
| API-001 | Health Check           | No           | N/A            |
| API-002 | Create Token           | Yes          | JSON           |
| API-003 | Get Booking IDs        | No           | N/A            |
| API-004 | Get Booking            | No           | N/A            |
| API-005 | Create Booking         | Yes          | JSON           |
| API-006 | Update Booking         | Yes          | JSON           |
| API-007 | Partial Update Booking | Yes          | JSON           |
| API-008 | Delete Booking         | No           | N/A            |

## Body-Based Operations

```text
POST /auth
POST /booking
PUT /booking/{id}
PATCH /booking/{id}
```

These operations are primary targets for:

```text
Required field testing
Null testing
Empty value testing
Data type testing
Malformed JSON testing
Content-Type testing
```

---

# 15. Parameter Matrix

| API ID  | Operation              | Path Parameter | Query Parameters                               |
| ------- | ---------------------- | -------------- | ---------------------------------------------- |
| API-001 | Health Check           | None           | None                                           |
| API-002 | Create Token           | None           | None                                           |
| API-003 | Get Booking IDs        | None           | `firstname`, `lastname`, `checkin`, `checkout` |
| API-004 | Get Booking            | `id`           | None                                           |
| API-005 | Create Booking         | None           | None                                           |
| API-006 | Update Booking         | `id`           | None                                           |
| API-007 | Partial Update Booking | `id`           | None                                           |
| API-008 | Delete Booking         | `id`           | None                                           |

## Path Parameter Test Target

```text
id
```

Used by four API operations.

## Query Parameter Test Targets

```text
firstname
lastname
checkin
checkout
```

Used by the Get Booking IDs operation.

---

# 16. Response Structure Matrix

| API ID  | Operation              | Primary Response Structure      |
| ------- | ---------------------- | ------------------------------- |
| API-001 | Health Check           | Non-JSON / health response      |
| API-002 | Create Token           | JSON Object                     |
| API-003 | Get Booking IDs        | JSON Array                      |
| API-004 | Get Booking            | JSON Object                     |
| API-005 | Create Booking         | JSON Object with nested booking |
| API-006 | Update Booking         | JSON Booking Object             |
| API-007 | Partial Update Booking | JSON Booking Object             |
| API-008 | Delete Booking         | Deletion response               |

## JSON Schema Candidates

Priority responses for JSON Schema validation:

```text
Authentication Response
Booking ID List Response
Booking Response
Booking Creation Response
```

PUT and PATCH responses may reuse the booking response schema if the observed response contract is structurally equivalent.

---

# 17. Documented Success Status Codes

| API ID  | Operation              | Method | Documented Status |
| ------- | ---------------------- | ------ | ----------------- |
| API-001 | Health Check           | GET    | `201 Created`     |
| API-002 | Create Token           | POST   | `200 OK`          |
| API-003 | Get Booking IDs        | GET    | `200 OK`          |
| API-004 | Get Booking            | GET    | `200 OK`          |
| API-005 | Create Booking         | POST   | `200 OK`          |
| API-006 | Update Booking         | PUT    | `200 OK`          |
| API-007 | Partial Update Booking | PATCH  | `200 OK`          |
| API-008 | Delete Booking         | DELETE | `201 Created`     |

## Status Code Review Targets

The following documented responses require particular analysis:

```text
GET /ping
201 Created

DELETE /booking/{id}
201 Created
```

The project distinguishes between:

```text
Documented Contract Validation
```

and:

```text
REST / HTTP Design Observation
```

An unusual status code is not automatically classified as an implementation defect when the API behaves according to its published documentation.

---

# 18. CRUD Mapping

| CRUD Operation | API ID  | Method | Endpoint        |
| -------------- | ------- | ------ | --------------- |
| Create         | API-005 | POST   | `/booking`      |
| Read List      | API-003 | GET    | `/booking`      |
| Read Resource  | API-004 | GET    | `/booking/{id}` |
| Update         | API-006 | PUT    | `/booking/{id}` |
| Partial Update | API-007 | PATCH  | `/booking/{id}` |
| Delete         | API-008 | DELETE | `/booking/{id}` |

## Booking Lifecycle

```text
CREATE
API-005
   ↓
READ
API-004
   ↓
UPDATE
API-006
   ↓
PARTIAL UPDATE
API-007
   ↓
DELETE
API-008
   ↓
VERIFY DELETION
API-004
```

The CRUD lifecycle is a primary project test target.

---

# 19. Endpoint Dependency Map

## Authentication Dependency

```text
API-002
POST /auth
    ↓
{{authToken}}
    ├── API-006 PUT
    ├── API-007 PATCH
    └── API-008 DELETE
```

## Booking ID Dependency

```text
API-005
POST /booking
    ↓
{{bookingId}}
    ├── API-004 GET
    ├── API-006 PUT
    ├── API-007 PATCH
    └── API-008 DELETE
```

## Deletion Verification

```text
API-008
DELETE /booking/{{bookingId}}
        ↓
API-004
GET /booking/{{bookingId}}
        ↓
Verify booking is not retrievable
```

## Primary E2E Dependency Chain

```text
API-002
Create Token
    ↓
API-005
Create Booking
    ↓
API-004
Get Booking
    ↓
API-006
Update Booking
    ↓
API-004
Get Updated Booking
    ↓
API-007
Partial Update Booking
    ↓
API-004
Get Partially Updated Booking
    ↓
API-008
Delete Booking
    ↓
API-004
Verify Deletion
```

---

# 20. Postman Folder Mapping

| API ID  | Operation              | Postman Folder          |
| ------- | ---------------------- | ----------------------- |
| API-001 | Health Check           | `00 - Health Check`     |
| API-002 | Create Token           | `01 - Authentication`   |
| API-003 | Get Booking IDs        | `02 - Booking - GET`    |
| API-004 | Get Booking            | `02 - Booking - GET`    |
| API-005 | Create Booking         | `03 - Booking - POST`   |
| API-006 | Update Booking         | `04 - Booking - PUT`    |
| API-007 | Partial Update Booking | `05 - Booking - PATCH`  |
| API-008 | Delete Booking         | `06 - Booking - DELETE` |

## Specialized Test Folders

Cross-endpoint or technique-focused requests are mapped to:

```text
07 - Negative Testing
08 - Boundary Testing
09 - E2E Workflows
```

A request may test an endpoint already represented in a functional folder but be placed in a specialized folder when the primary purpose is a specific test technique or workflow.

---

# 21. Test Priority Classification

The following priority model is used for endpoint-level planning.

| Priority | Definition                                                  |
| -------- | ----------------------------------------------------------- |
| Critical | Core API operation or dependency required for CRUD workflow |
| High     | Important API functionality with significant test coverage  |
| Medium   | Supporting functionality or lower-risk validation area      |
| Low      | Minor or optional test area                                 |

## Endpoint Priority Matrix

| API ID  | Operation              | Priority | Reason                                        |
| ------- | ---------------------- | -------- | --------------------------------------------- |
| API-001 | Health Check           | High     | Confirms API availability                     |
| API-002 | Create Token           | Critical | Required for protected operations             |
| API-003 | Get Booking IDs        | High     | Supports booking discovery and filtering      |
| API-004 | Get Booking            | Critical | Required for resource and workflow validation |
| API-005 | Create Booking         | Critical | Creates resources for dependent testing       |
| API-006 | Update Booking         | Critical | Core CRUD operation                           |
| API-007 | Partial Update Booking | Critical | Core update operation                         |
| API-008 | Delete Booking         | Critical | Core CRUD and cleanup operation               |

## Priority Implication

Critical endpoints receive priority for:

```text
Positive testing
Negative testing
Automated assertions
Regression coverage
E2E workflow coverage
```

---

# 22. Identified Testing Focus

The endpoint inventory identifies the following primary test focus areas.

## API-001 - Health Check

```text
Availability
Documented status code
Response time
```

## API-002 - Authentication

```text
Credential validation
Token generation
Token extraction
Invalid credential behaviour
```

## API-003 - Booking IDs

```text
Array contract
Booking ID data type
Query filtering
Combined filters
```

## API-004 - Booking Retrieval

```text
Resource retrieval
Booking contract
Data consistency
Invalid ID handling
```

## API-005 - Booking Creation

```text
Resource creation
Required fields
Data types
Booking ID generation
Request-response consistency
```

## API-006 - Full Update

```text
Authentication enforcement
Full payload behaviour
Data persistence
PUT semantics
```

## API-007 - Partial Update

```text
Authentication enforcement
Partial field updates
Unchanged field preservation
PATCH semantics
```

## API-008 - Delete Booking

```text
Authentication enforcement
Resource deletion
Repeated deletion
Post-deletion verification
```

## Cross-endpoint Focus

```text
Dynamic variables
Request chaining
Authentication reuse
Booking ID reuse
Data consistency
Resource lifecycle
Environment reset impact
```

---

# 23. Inventory Summary

The Restful Booker API endpoint inventory contains eight documented API operations.

The operations are distributed across three API resource areas:

```text
Ping
Authentication
Booking
```

The booking resource provides a complete CRUD workflow using:

```text
POST
GET
PUT
PATCH
DELETE
```

Three booking operations require authentication:

```text
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

Two critical dynamic values have been identified:

```text
{{authToken}}
{{bookingId}}
```

The authentication token is produced by:

```text
POST /auth
```

The booking ID is produced by:

```text
POST /booking
```

These values create the primary API dependency structure for the automated test suite.

The endpoint inventory establishes the technical mapping required for:

```text
API Test Scenarios
        ↓
API Test Cases
        ↓
Postman Requests
        ↓
Automated Assertions
        ↓
Request Chaining
        ↓
E2E Workflows
        ↓
Newman Regression
        ↓
CI/CD Execution
```

The next test design stage is the creation of detailed API test scenarios based on the endpoint inventory and identified API requirements.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Document Version:** 1.0
**Status:** In Progress
