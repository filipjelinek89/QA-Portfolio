# Environment

**Project:** Restful Booker API Testing Project
**Document Type:** Postman Environment Documentation
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Test Tool:** Postman
**Environment Name:** Restful Booker - QA
**Status:** Template

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Environment Overview](#2-environment-overview)
* [3. Environment Scope](#3-environment-scope)
* [4. Environment Configuration](#4-environment-configuration)
* [5. Environment Variables](#5-environment-variables)
* [6. Variable Naming Convention](#6-variable-naming-convention)
* [7. Variable Classification](#7-variable-classification)
* [8. Base URL Configuration](#8-base-url-configuration)
* [9. Authentication Variables](#9-authentication-variables)
* [10. Dynamic Booking ID](#10-dynamic-booking-id)
* [11. Test Data Variables](#11-test-data-variables)
* [12. Variable Lifecycle](#12-variable-lifecycle)
* [13. Dynamic Variable Extraction](#13-dynamic-variable-extraction)
* [14. Variable Usage in Requests](#14-variable-usage-in-requests)
* [15. Environment Validation](#15-environment-validation)
* [16. Environment Security](#16-environment-security)
* [17. Environment Export](#17-environment-export)
* [18. Newman Environment Usage](#18-newman-environment-usage)
* [19. CI/CD Environment Usage](#19-cicd-environment-usage)
* [20. Troubleshooting](#20-troubleshooting)
* [21. Maintenance](#21-maintenance)
* [22. Environment Summary](#22-environment-summary)

---

# 1. Purpose

The purpose of this document is to define the Postman environment configuration used for the Restful Booker API Testing Project.

The Postman environment provides reusable and dynamically managed variables for API test execution.

The environment supports:

* Base URL management
* Authentication data management
* Authentication token storage
* Dynamic booking ID storage
* Reusable test data
* CRUD workflow execution
* Postman Collection Runner execution
* Newman execution
* CI/CD integration

The environment removes the need to manually replace repeated values in individual API requests.

Environment workflow:

```text
Environment Variable
        ↓
Postman Request
        ↓
API Execution
        ↓
Dynamic Response Data
        ↓
Postman Test Script
        ↓
Environment Variable Updated
        ↓
Dependent Request
```

---

# 2. Environment Overview

The Postman environment used by this project is:

```text
Restful Booker - QA
```

## Environment Purpose

The environment provides a centralized configuration layer between the Postman collection and the Restful Booker API.

```text
Postman Collection
        ↓
Environment Variables
        ↓
Restful Booker API
```

Requests use variables instead of hardcoded values.

Example hardcoded request:

```text
https://restful-booker.herokuapp.com/booking/123
```

Environment-based request:

```text
{{baseUrl}}/booking/{{bookingId}}
```

The environment-based approach improves:

* Reusability
* Maintainability
* Test execution consistency
* Dynamic workflow execution
* Collection portability

---

# 3. Environment Scope

The environment is used by requests in:

```text
05_Postman/
└── Collection/
```

The environment supports testing of:

```text
POST /auth
GET /ping
GET /booking
GET /booking/{id}
POST /booking
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

## Supported Test Workflows

```text
Authentication Workflow
CRUD Workflow
Positive Testing
Negative Testing
Contract Validation
JSON Schema Validation
Collection Runner Execution
Newman Execution
CI/CD Execution
```

## Environment Boundary

The environment stores test execution configuration and runtime values.

It does not define:

* API requirements
* Test scenarios
* Test cases
* Expected results
* JSON Schemas
* Defect classification

These are maintained in their respective project documentation.

---

# 4. Environment Configuration

## Environment Name

```text
Restful Booker - QA
```

## Environment Type

```text
Postman Environment
```

## Target API

```text
Restful Booker
```

## Target Environment

```text
Public Test Environment
```

## Base URL

```text
https://restful-booker.herokuapp.com
```

## Postman Configuration

| Configuration       | Value                   |
| ------------------- | ----------------------- |
| Environment Name    | Restful Booker - QA     |
| API                 | Restful Booker          |
| Environment         | Public Test Environment |
| Request Format      | HTTP                    |
| Primary Data Format | JSON                    |
| Script Language     | JavaScript              |
| Variable Syntax     | `{{variableName}}`      |

---

# 5. Environment Variables

The following variables are used by the project.

| Variable          | Purpose                        | Value Type | Management       |
| ----------------- | ------------------------------ | ---------- | ---------------- |
| `baseUrl`         | API base URL                   | String     | Static           |
| `username`        | Authentication username        | String     | Static           |
| `password`        | Authentication password        | String     | Static           |
| `token`           | Authentication token           | String     | Dynamic          |
| `bookingId`       | Created booking identifier     | Number     | Dynamic          |
| `firstname`       | Reusable firstname test data   | String     | Static / Dynamic |
| `lastname`        | Reusable lastname test data    | String     | Static / Dynamic |
| `totalprice`      | Reusable booking price         | Number     | Static           |
| `depositpaid`     | Deposit status                 | Boolean    | Static           |
| `checkin`         | Booking check-in date          | String     | Static           |
| `checkout`        | Booking checkout date          | String     | Static           |
| `additionalneeds` | Additional booking requirement | String     | Static           |

## Recommended Environment Table

| Variable          | Initial Value                          | Current / Local Value  |
| ----------------- | -------------------------------------- | ---------------------- |
| `baseUrl`         | `https://restful-booker.herokuapp.com` | Same                   |
| `username`        | `[Configured locally]`                 | `[Configured locally]` |
| `password`        | `[Configured locally]`                 | `[Configured locally]` |
| `token`           | Empty                                  | Dynamic                |
| `bookingId`       | Empty                                  | Dynamic                |
| `firstname`       | `Filip`                                | `Filip`                |
| `lastname`        | `Jelinek`                              | `Jelinek`              |
| `totalprice`      | `500`                                  | `500`                  |
| `depositpaid`     | `true`                                 | `true`                 |
| `checkin`         | `2026-08-01`                           | `2026-08-01`           |
| `checkout`        | `2026-08-10`                           | `2026-08-10`           |
| `additionalneeds` | `Breakfast`                            | `Breakfast`            |

Dynamic variables should not require manual runtime configuration.

---

# 6. Variable Naming Convention

Environment variables use:

```text
camelCase
```

Examples:

```text
baseUrl
bookingId
firstname
lastname
totalprice
depositpaid
checkin
checkout
additionalneeds
```

## Naming Rules

1. Use descriptive variable names.
2. Use camelCase for multi-word variables.
3. Do not use spaces.
4. Do not use unnecessary abbreviations.
5. Use the same variable name across the entire collection.
6. Avoid duplicate variables with similar purposes.
7. Use API terminology where possible.

## Correct Examples

```text
baseUrl
bookingId
additionalneeds
```

## Avoid

```text
BASE_URL
booking_id
BookingID
id1
testValue
temp
```

Consistency improves request readability and collection maintenance.

---

# 7. Variable Classification

Environment variables are classified as static or dynamic.

## Static Variables

Static variables are configured before test execution and normally remain unchanged during a collection run.

```text
baseUrl
username
password
firstname
lastname
totalprice
depositpaid
checkin
checkout
additionalneeds
```

## Dynamic Variables

Dynamic variables are generated or extracted during API execution.

```text
token
bookingId
```

## Variable Classification Flow

```text
Static Configuration
        ↓
Start Collection
        ↓
POST /auth
        ↓
token Generated
        ↓
POST /booking
        ↓
bookingId Generated
        ↓
Dependent CRUD Requests
```

## Classification Table

| Variable    | Classification   | Source                               |
| ----------- | ---------------- | ------------------------------------ |
| `baseUrl`   | Static           | Environment configuration            |
| `username`  | Static           | Test credentials                     |
| `password`  | Static           | Test credentials                     |
| `token`     | Dynamic          | `POST /auth` response                |
| `bookingId` | Dynamic          | `POST /booking` response             |
| Test data   | Static / Dynamic | Environment configuration or scripts |

---

# 8. Base URL Configuration

The API base URL is stored in:

```text
baseUrl
```

## Value

```text
https://restful-booker.herokuapp.com
```

## Request Usage

```text
{{baseUrl}}/ping
```

```text
{{baseUrl}}/booking
```

```text
{{baseUrl}}/booking/{{bookingId}}
```

```text
{{baseUrl}}/auth
```

## Benefits

Using `baseUrl` prevents duplication of the API host across the Postman collection.

Without a variable:

```text
https://restful-booker.herokuapp.com/booking
https://restful-booker.herokuapp.com/booking/123
https://restful-booker.herokuapp.com/auth
```

With a variable:

```text
{{baseUrl}}/booking
{{baseUrl}}/booking/{{bookingId}}
{{baseUrl}}/auth
```

If the target environment changes, only the environment variable requires modification.

---

# 9. Authentication Variables

Authentication requires:

```text
username
password
token
```

## Username

Variable:

```text
{{username}}
```

Purpose:

```text
Authentication username
```

## Password

Variable:

```text
{{password}}
```

Purpose:

```text
Authentication password
```

## Token

Variable:

```text
{{token}}
```

Purpose:

```text
Dynamically stored authentication token
```

## Authentication Request

```json
{
  "username": "{{username}}",
  "password": "{{password}}"
}
```

## Token Extraction

```javascript
const response = pm.response.json();

if (response.token) {
    pm.environment.set("token", response.token);
}
```

## Authentication Flow

```text
username + password
        ↓
POST /auth
        ↓
Authentication Response
        ↓
Extract token
        ↓
Store {{token}}
        ↓
Authenticated Requests
```

## Token Usage

Example Cookie authentication:

```text
Cookie: token={{token}}
```

The exact authentication method should match the Restful Booker API documentation and the tested endpoint.

---

# 10. Dynamic Booking ID

The `bookingId` variable stores the identifier of a booking created during test execution.

## Variable

```text
bookingId
```

## Source

```text
POST /booking
```

## Example Response

```json
{
  "bookingid": 123,
  "booking": {
    "firstname": "Filip",
    "lastname": "Jelinek"
  }
}
```

## Extraction Script

```javascript
const response = pm.response.json();

if (response.bookingid) {
    pm.environment.set("bookingId", response.bookingid);
}
```

## Variable Usage

```text
{{bookingId}}
```

## Dependent Requests

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

```text
PUT {{baseUrl}}/booking/{{bookingId}}
```

```text
PATCH {{baseUrl}}/booking/{{bookingId}}
```

```text
DELETE {{baseUrl}}/booking/{{bookingId}}
```

## Booking ID Lifecycle

```text
Collection Start
        ↓
bookingId Empty
        ↓
POST /booking
        ↓
bookingid Returned
        ↓
bookingId Stored
        ↓
GET
        ↓
PUT
        ↓
PATCH
        ↓
DELETE
```

The dynamic booking ID removes manual resource identifier management from the CRUD workflow.

---

# 11. Test Data Variables

Reusable booking data may be stored as environment variables.

## Variables

```text
firstname
lastname
totalprice
depositpaid
checkin
checkout
additionalneeds
```

## Example Request Body

```json
{
  "firstname": "{{firstname}}",
  "lastname": "{{lastname}}",
  "totalprice": {{totalprice}},
  "depositpaid": {{depositpaid}},
  "bookingdates": {
    "checkin": "{{checkin}}",
    "checkout": "{{checkout}}"
  },
  "additionalneeds": "{{additionalneeds}}"
}
```

## Important JSON Type Handling

String variables require quotation marks:

```json
"firstname": "{{firstname}}"
```

Numeric variables should not use quotation marks:

```json
"totalprice": {{totalprice}}
```

Boolean variables should not use quotation marks:

```json
"depositpaid": {{depositpaid}}
```

Incorrect:

```json
"totalprice": "{{totalprice}}"
```

This converts the value into a JSON string.

Incorrect:

```json
"depositpaid": "{{depositpaid}}"
```

This converts the boolean value into a JSON string.

## Test Data Flow

```text
Environment Test Data
        ↓
POST Request Body
        ↓
Create Booking
        ↓
API Response
        ↓
Data Validation
```

---

# 12. Variable Lifecycle

Environment variables follow a defined lifecycle.

## Collection Start

```text
baseUrl = Configured
username = Configured
password = Configured
token = Empty or Previous Value
bookingId = Empty or Previous Value
```

## Authentication

```text
POST /auth
      ↓
token Generated
      ↓
token Updated
```

## Booking Creation

```text
POST /booking
      ↓
bookingid Generated
      ↓
bookingId Updated
```

## CRUD Execution

```text
GET
 ↓
PUT
 ↓
PATCH
 ↓
DELETE
```

All requests use:

```text
{{bookingId}}
```

## Collection End

The environment may contain:

```text
token = Last generated token
bookingId = Last generated booking ID
```

## Optional Cleanup

Runtime variables may be cleared after execution.

Example:

```javascript
pm.environment.unset("bookingId");
```

Token cleanup:

```javascript
pm.environment.unset("token");
```

Cleanup should only be performed after all dependent requests have completed.

---

# 13. Dynamic Variable Extraction

Dynamic values are extracted from API responses using Postman test scripts.

## Token Extraction

```javascript
const response = pm.response.json();

if (response.token) {
    pm.environment.set("token", response.token);
}
```

## Booking ID Extraction

```javascript
const response = pm.response.json();

if (response.bookingid) {
    pm.environment.set("bookingId", response.bookingid);
}
```

## Safe Extraction with Assertion

```javascript
const response = pm.response.json();

pm.test("Response contains bookingid", function () {
    pm.expect(response).to.have.property("bookingid");
});

if (response.bookingid) {
    pm.environment.set("bookingId", response.bookingid);
}
```

## Extraction Validation

```javascript
pm.test("bookingId environment variable is stored", function () {
    const bookingId = pm.environment.get("bookingId");

    pm.expect(bookingId).to.exist;
});
```

## Dynamic Extraction Flow

```text
API Response
      ↓
Parse JSON
      ↓
Locate Response Property
      ↓
Validate Property
      ↓
Store Environment Variable
      ↓
Use in Dependent Request
```

---

# 14. Variable Usage in Requests

## Authentication Request

```text
POST {{baseUrl}}/auth
```

Body:

```json
{
  "username": "{{username}}",
  "password": "{{password}}"
}
```

## Create Booking

```text
POST {{baseUrl}}/booking
```

Body:

```json
{
  "firstname": "{{firstname}}",
  "lastname": "{{lastname}}",
  "totalprice": {{totalprice}},
  "depositpaid": {{depositpaid}},
  "bookingdates": {
    "checkin": "{{checkin}}",
    "checkout": "{{checkout}}"
  },
  "additionalneeds": "{{additionalneeds}}"
}
```

## Get Booking

```text
GET {{baseUrl}}/booking/{{bookingId}}
```

## Update Booking

```text
PUT {{baseUrl}}/booking/{{bookingId}}
```

Header:

```text
Cookie: token={{token}}
```

## Partial Update

```text
PATCH {{baseUrl}}/booking/{{bookingId}}
```

Header:

```text
Cookie: token={{token}}
```

## Delete Booking

```text
DELETE {{baseUrl}}/booking/{{bookingId}}
```

Header:

```text
Cookie: token={{token}}
```

---

# 15. Environment Validation

The environment should be validated before collection execution.

## Pre-Execution Checklist

* [ ] Correct environment selected
* [ ] `baseUrl` exists
* [ ] `baseUrl` is not empty
* [ ] `username` configured
* [ ] `password` configured
* [ ] Test data variables configured
* [ ] Dynamic variables use expected names
* [ ] No duplicate environment variables
* [ ] Request variable names match environment variable names

## Base URL Assertion

```javascript
pm.test("baseUrl environment variable is configured", function () {
    const baseUrl = pm.environment.get("baseUrl");

    pm.expect(baseUrl).to.exist;
    pm.expect(baseUrl).to.not.be.empty;
});
```

## Credential Variable Validation

```javascript
pm.test("Authentication variables are configured", function () {
    const username = pm.environment.get("username");
    const password = pm.environment.get("password");

    pm.expect(username).to.exist;
    pm.expect(password).to.exist;
});
```

## Booking ID Validation

For dependent requests:

```javascript
pm.test("bookingId is available", function () {
    const bookingId = pm.environment.get("bookingId");

    pm.expect(bookingId).to.exist;
});
```

## Token Validation

For authenticated requests:

```javascript
pm.test("Authentication token is available", function () {
    const token = pm.environment.get("token");

    pm.expect(token).to.exist;
    pm.expect(token).to.not.be.empty;
});
```

---

# 16. Environment Security

Authentication data should be handled carefully.

## Sensitive Variables

```text
username
password
token
```

## Security Rules

1. Do not expose authentication credentials in screenshots.
2. Do not publish real private credentials in GitHub.
3. Do not hardcode passwords in Postman test scripts.
4. Do not hardcode tokens in requests.
5. Use environment variables for authentication data.
6. Review exported environment files before GitHub publication.
7. Remove sensitive runtime values before committing files.
8. Use CI/CD secrets for credentials when automation is implemented.

## GitHub Environment Example

Safe documentation:

```json
{
  "username": "[CONFIGURE LOCALLY]",
  "password": "[CONFIGURE LOCALLY]",
  "token": ""
}
```

Avoid publishing:

```json
{
  "username": "real-user",
  "password": "real-password",
  "token": "real-runtime-token"
}
```

## Important Project Context

Restful Booker uses public test credentials documented for the API.

However, this project still demonstrates secure credential-handling practices because the same environment design should remain suitable for real-world API testing.

---

# 17. Environment Export

The Postman environment may be exported for project execution.

## Recommended Export Name

```text
Restful_Booker_QA.postman_environment.json
```

## Recommended Directory

```text
05_Postman/
└── Environment/
    ├── Postman_Environment.md
    └── Restful_Booker_QA.postman_environment.json
```

## Before Export

Verify:

* Variable names
* Base URL
* Test data
* Dynamic variables
* Credential values
* Token values

## Before GitHub Commit

Review:

```text
username
password
token
bookingId
```

Sensitive or runtime-specific values should be removed where appropriate.

## Export Review Flow

```text
Postman Environment
        ↓
Export JSON
        ↓
Review Variables
        ↓
Remove Sensitive Values
        ↓
Validate JSON
        ↓
Commit to GitHub
```

---

# 18. Newman Environment Usage

The exported environment file can be used with Newman.

## Environment File

```text
Restful_Booker_QA.postman_environment.json
```

## Conceptual Newman Execution

```text
Newman
   ↓
Postman Collection
   +
Postman Environment
   ↓
API Test Execution
```

## Example Command Structure

```text
newman run [collection-file] -e [environment-file]
```

Project-specific execution commands should be documented in:

```text
09_Newman/
```

## Dynamic Variables in Newman

During execution:

```text
POST /auth
      ↓
token Stored
      ↓
POST /booking
      ↓
bookingId Stored
      ↓
CRUD Workflow Continues
```

Postman test scripts responsible for dynamic variable extraction are executed by Newman.

---

# 19. CI/CD Environment Usage

When CI/CD integration is implemented, environment configuration should separate public configuration from sensitive values.

## Public Configuration

Examples:

```text
baseUrl
firstname
lastname
totalprice
depositpaid
checkin
checkout
additionalneeds
```

## Sensitive Configuration

Examples:

```text
username
password
```

## Runtime Values

```text
token
bookingId
```

## CI/CD Flow

```text
GitHub Actions
      ↓
Load Collection
      ↓
Load Environment Configuration
      ↓
Inject Secrets
      ↓
Run Newman
      ↓
Generate token
      ↓
Generate bookingId
      ↓
Execute API Tests
```

## CI/CD Security Model

```text
Repository
   ↓
Public Test Configuration

GitHub Secrets
   ↓
Credentials

API Runtime
   ↓
token + bookingId
```

Credentials should not be stored directly in the CI/CD workflow file.

---

# 20. Troubleshooting

## Variable Is Unresolved

Displayed request:

```text
{{baseUrl}}/booking
```

Possible causes:

* Environment not selected
* Variable does not exist
* Variable name mismatch
* Incorrect variable scope

## bookingId Is Empty

Possible causes:

* POST request failed
* `bookingid` missing from response
* Extraction script failed
* Incorrect property name
* Environment variable not stored

Investigation:

```text
Review POST Response
      ↓
Check response.bookingid
      ↓
Review Test Script
      ↓
Check Environment
```

## Token Is Empty

Possible causes:

* Authentication failed
* Incorrect credentials
* Token extraction failed
* Incorrect response property
* Environment variable scope issue

## JSON Request Is Invalid

Possible cause:

```json
"totalprice": {{totalprice}}
```

when the variable contains an invalid numeric value.

Another possible cause:

```json
"depositpaid": {{depositpaid}}
```

when the variable contains a non-JSON boolean value.

Review the resolved request body in the Postman Console.

## Incorrect Variable Type

Postman environment variables are stored as variable values.

The final JSON data type is determined by the resolved request body syntax.

Example:

```json
"totalprice": "{{totalprice}}"
```

produces a JSON string.

Example:

```json
"totalprice": {{totalprice}}
```

produces a JSON number when the resolved value is numeric.

---

# 21. Maintenance

The Postman environment should remain synchronized with:

* Postman collection
* Authentication workflow
* API test cases
* HTTP method tests
* Newman execution
* CI/CD workflow

## Environment Change Flow

```text
API or Collection Change
        ↓
Variable Review
        ↓
Environment Update
        ↓
Request Validation
        ↓
Collection Execution
        ↓
Environment Export
        ↓
GitHub Update
```

## Maintenance Rules

1. Use consistent variable names.
2. Remove unused variables.
3. Avoid duplicate variables.
4. Do not hardcode dynamic booking IDs.
5. Do not hardcode authentication tokens.
6. Extract runtime values automatically.
7. Review exported environment files before publication.
8. Keep sensitive values out of GitHub.
9. Validate dependent variables before CRUD requests.
10. Update Newman configuration after environment file changes.
11. Review CI/CD secret handling before automated execution.
12. Keep environment documentation synchronized with the exported JSON file.

---

# 22. Environment Summary

**Project:** Restful Booker API Testing Project
**Environment:** Restful Booker - QA
**Test Tool:** Postman
**Status:** Template

The Postman environment provides:

```text
baseUrl
   ↓
Centralized API URL

username + password
   ↓
Authentication Input

token
   ↓
Authenticated Request Support

bookingId
   ↓
Dynamic CRUD Resource Tracking

Test Data Variables
   ↓
Reusable Request Data
```

The primary dynamic environment workflow is:

```text
POST /auth
      ↓
Extract token
      ↓
Store {{token}}
      ↓
POST /booking
      ↓
Extract bookingid
      ↓
Store {{bookingId}}
      ↓
GET /booking/{{bookingId}}
      ↓
PUT /booking/{{bookingId}}
      ↓
PATCH /booking/{{bookingId}}
      ↓
DELETE /booking/{{bookingId}}
```

The environment supports:

```text
Manual Postman Execution
        +
Collection Runner
        +
Newman
        +
CI/CD
```

The environment design reduces hardcoded test data and supports reusable API test execution.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Environment Version:** 1.0
**Status:** Template
