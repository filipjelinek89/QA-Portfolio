# API Authentication Testing Template

**Project:** Restful Booker API Testing Project
**Document Type:** API Authentication Testing Template
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Test Tool:** Postman
**Status:** Template

---

# In-page Navigation

* [1. Authentication Identification](#1-authentication-identification)
* [2. Purpose](#2-purpose)
* [3. Authentication Overview](#3-authentication-overview)
* [4. Authentication vs Authorization](#4-authentication-vs-authorization)
* [5. Authentication Scope](#5-authentication-scope)
* [6. Authentication Endpoints](#6-authentication-endpoints)
* [7. Test Traceability](#7-test-traceability)
* [8. Authentication Test Environment](#8-authentication-test-environment)
* [9. Authentication Test Data](#9-authentication-test-data)
* [10. Token Authentication](#10-token-authentication)
* [11. Token Generation](#11-token-generation)
* [12. Dynamic Token Extraction](#12-dynamic-token-extraction)
* [13. Token Storage](#13-token-storage)
* [14. Token Reuse](#14-token-reuse)
* [15. Cookie Authentication](#15-cookie-authentication)
* [16. Basic Authentication](#16-basic-authentication)
* [17. Protected Endpoint Validation](#17-protected-endpoint-validation)
* [18. Positive Authentication Testing](#18-positive-authentication-testing)
* [19. Negative Credential Testing](#19-negative-credential-testing)
* [20. Missing Credential Testing](#20-missing-credential-testing)
* [21. Invalid Data Type Testing](#21-invalid-data-type-testing)
* [22. Malformed Request Testing](#22-malformed-request-testing)
* [23. Token Manipulation Testing](#23-token-manipulation-testing)
* [24. Missing Authentication Testing](#24-missing-authentication-testing)
* [25. Authentication State Verification](#25-authentication-state-verification)
* [26. Postman Authentication Assertions](#26-postman-authentication-assertions)
* [27. Authentication Execution Result](#27-authentication-execution-result)
* [28. Authentication Defect Analysis](#28-authentication-defect-analysis)
* [29. Authentication Evidence](#29-authentication-evidence)
* [30. Security Testing Limitations](#30-security-testing-limitations)
* [31. Authentication Maintenance](#31-authentication-maintenance)
* [32. Authentication Summary](#32-authentication-summary)

---

# 1. Authentication Identification

| Field                   | Value                                 |
| ----------------------- | ------------------------------------- |
| Authentication Test ID  | `AUTH-TEST-XXX`                       |
| Authentication Type     | Token / Cookie / Basic Authentication |
| Authentication Endpoint | `/auth`                               |
| Protected Endpoint      | `[Endpoint]`                          |
| HTTP Method             | `[POST / PUT / PATCH / DELETE]`       |
| Test Case ID            | `TC-AUTH-XXX`                         |
| Test Tool               | Postman                               |
| Status                  | Not Executed / PASS / FAIL / BLOCKED  |
| Prepared By             | Filip Jelinek                         |

## Authentication Test Naming Convention

Authentication test records use:

```text
AUTH-TEST-[NUMBER]
```

Examples:

```text
AUTH-TEST-001
AUTH-TEST-002
AUTH-TEST-003
```

Authentication-related test cases use:

```text
TC-AUTH-[NUMBER]
```

Examples:

```text
TC-AUTH-001
TC-AUTH-002
TC-AUTH-020
```

---

# 2. Purpose

The purpose of this document is to define and record authentication testing performed against the **Restful Booker API**.

Authentication testing validates:

* Valid credential handling
* Invalid credential handling
* Missing credential handling
* Authentication token generation
* Authentication response structure
* Token data type
* Token extraction
* Dynamic token storage
* Token reuse
* Cookie-based authentication
* Basic authentication
* Missing authentication
* Invalid token handling
* Modified token handling
* Protected endpoint behaviour
* Resource state after unauthorized requests

The authentication testing process follows:

```text
Authentication Requirement
        ↓
Authentication Test Scenario
        ↓
Authentication Test Case
        ↓
Postman Request
        ↓
Authentication Response
        ↓
Token Extraction
        ↓
Protected Request
        ↓
State Verification
        ↓
PASS / FAIL
```

The objective is not limited to verifying that a token is returned.

The project also validates whether generated authentication credentials can successfully authorize protected API operations.

---

# 3. Authentication Overview

Restful Booker provides an authentication endpoint:

```text
POST /auth
```

The endpoint accepts authentication credentials and returns an authentication token after successful credential validation.

## Authentication Flow

```text
Username + Password
        ↓
POST /auth
        ↓
Credential Validation
        ↓
Token Response
        ↓
Extract Token
        ↓
Store {{authToken}}
        ↓
Use Token on Protected Endpoint
```

## Protected Operations

The following API operations require authentication:

| Method | Endpoint        | Operation              |
| ------ | --------------- | ---------------------- |
| PUT    | `/booking/{id}` | Full booking update    |
| PATCH  | `/booking/{id}` | Partial booking update |
| DELETE | `/booking/{id}` | Booking deletion       |

Authentication is not required for the documented public booking retrieval and creation operations.

---

# 4. Authentication vs Authorization

Authentication and authorization are treated as separate testing concepts.

## Authentication

Authentication verifies identity.

```text
Who is the API consumer?
```

Example:

```text
Username
   +
Password
   ↓
Credential Validation
   ↓
Authentication Token
```

## Authorization

Authorization determines whether an authenticated consumer can perform a protected operation.

```text
Is the authenticated consumer allowed to perform this operation?
```

Example:

```text
Valid Token
      ↓
PATCH /booking/{id}
      ↓
Protected Operation Allowed
```

## Project Testing Model

```text
Authentication
      ↓
Generate Valid Token
      ↓
Authorization
      ↓
Use Token on Protected Endpoint
```

A successful authentication response does not independently prove that protected API operations accept the generated token.

Therefore, the project validates both:

```text
Token Generation
        +
Protected Endpoint Usage
```

---

# 5. Authentication Scope

Authentication testing includes:

* Valid credentials
* Invalid username
* Invalid password
* Invalid username and password
* Missing username
* Missing password
* Empty request object
* Empty username
* Empty password
* Null username
* Null password
* Numeric username
* Boolean password
* Malformed JSON
* Empty request body
* Missing Content-Type
* Unsupported Content-Type
* Authentication response contract
* Token value validation
* Generated token usage

Protected endpoint authentication testing includes:

* Valid token
* Invalid token
* Modified valid token
* Missing authentication
* Valid Basic authentication

## Out of Scope

The following activities are outside the scope of this project:

* Credential brute-force testing
* Password cracking
* Credential stuffing
* Denial-of-service testing
* Token theft simulation
* Session hijacking
* Exploit development
* Infrastructure penetration testing

The project focuses on functional API authentication and authorization behaviour.

---

# 6. Authentication Endpoints

## Authentication Endpoint

| Field                   | Value              |
| ----------------------- | ------------------ |
| Method                  | POST               |
| Endpoint                | `/auth`            |
| Full URL                | `{{baseUrl}}/auth` |
| Authentication Required | No                 |
| Request Format          | JSON               |
| Response Format         | JSON               |

## Protected Endpoints

| Method | Endpoint        | Authentication                |
| ------ | --------------- | ----------------------------- |
| PUT    | `/booking/{id}` | Token or Basic Authentication |
| PATCH  | `/booking/{id}` | Token or Basic Authentication |
| DELETE | `/booking/{id}` | Token or Basic Authentication |

## Authentication Relationship

```text
POST /auth
      ↓
Generate Token
      ↓
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

---

# 7. Test Traceability

| Traceability Level     | ID / Reference                            |
| ---------------------- | ----------------------------------------- |
| Requirement ID         | `REQ-AUTH-XXX`                            |
| Test Scenario ID       | `TS-AUTH-XXX`                             |
| Test Case ID           | `TC-AUTH-XXX`                             |
| Authentication Test ID | `AUTH-TEST-XXX`                           |
| Postman Request        | `[TC ID] - [METHOD] - [Request Name]`     |
| Execution Record       | `06_Test_Execution/API_Test_Execution.md` |

## Traceability Chain

```text
REQ-AUTH-XXX
      ↓
TS-AUTH-XXX
      ↓
TC-AUTH-XXX
      ↓
AUTH-TEST-XXX
      ↓
Postman Request
      ↓
Authentication Assertion
      ↓
PASS / FAIL
```

For protected endpoint validation:

```text
REQ-AUTH-XXX
      ↓
TC-AUTH-020
      ↓
POST /auth
      ↓
{{authToken}}
      ↓
Protected API Request
      ↓
Authorization Result
```

If unexpected authentication behaviour is confirmed:

```text
Authentication Test
      ↓
FAIL
      ↓
Manual Verification
      ↓
Reproduction
      ↓
BUG-API-XXX
```

---

# 8. Authentication Test Environment

| Attribute           | Value                                  |
| ------------------- | -------------------------------------- |
| API                 | Restful Booker                         |
| Base URL            | `https://restful-booker.herokuapp.com` |
| Environment         | Public Test Environment                |
| Test Tool           | Postman                                |
| Postman Environment | Restful Booker - QA                    |
| Request Format      | JSON                                   |
| Response Format     | JSON                                   |
| Script Language     | JavaScript                             |

## Required Environment Variables

| Variable    | Purpose                                    |
| ----------- | ------------------------------------------ |
| `baseUrl`   | API base URL                               |
| `authToken` | Dynamically generated authentication token |
| `bookingId` | Dynamically generated booking ID           |

## Environment Validation

* [ ] `baseUrl` configured
* [ ] Correct Postman environment selected
* [ ] API accessible
* [ ] Authentication endpoint accessible
* [ ] Environment variable scope verified

---

# 9. Authentication Test Data

## Valid Authentication Data

```json
{
  "username": "[valid username]",
  "password": "[valid password]"
}
```

## Invalid Username

```json
{
  "username": "[invalid username]",
  "password": "[valid password]"
}
```

## Invalid Password

```json
{
  "username": "[valid username]",
  "password": "[invalid password]"
}
```

## Invalid Username and Password

```json
{
  "username": "[invalid username]",
  "password": "[invalid password]"
}
```

## Test Data Matrix

| Test Condition      | Username     | Password     |
| ------------------- | ------------ | ------------ |
| Valid credentials   | Valid        | Valid        |
| Invalid username    | Invalid      | Valid        |
| Invalid password    | Valid        | Invalid      |
| Invalid credentials | Invalid      | Invalid      |
| Missing username    | Missing      | Valid        |
| Missing password    | Valid        | Missing      |
| Empty username      | Empty string | Valid        |
| Empty password      | Valid        | Empty string |
| Null username       | null         | Valid        |
| Null password       | Valid        | null         |
| Numeric username    | Number       | Valid        |
| Boolean password    | Valid        | Boolean      |

Actual public demonstration credentials should be configured according to the Restful Booker API documentation.

Private credentials must not be committed to the repository.

---

# 10. Token Authentication

The primary automated authentication workflow uses a generated authentication token.

## Token Authentication Flow

```text
POST /auth
      ↓
Valid Credentials
      ↓
Authentication Response
      ↓
Extract token
      ↓
{{authToken}}
      ↓
Cookie Header
      ↓
Protected Endpoint
```

## Expected Authentication Response

```json
{
  "token": "[generated token]"
}
```

## Expected Token Characteristics

The token should:

* Be present in the successful authentication response
* Use the documented `token` property
* Be a string
* Not be empty
* Be reusable on documented protected operations

## Token Validation

```text
Property Exists
      ↓
Type = String
      ↓
Value Not Empty
      ↓
Store Token
      ↓
Use Token
      ↓
Protected Request Accepted
```

---

# 11. Token Generation

## Request

```text
POST {{baseUrl}}/auth
```

## Headers

```text
Content-Type: application/json
Accept: application/json
```

## Request Body

```json
{
  "username": "[valid username]",
  "password": "[valid password]"
}
```

## Expected Result

The API accepts valid credentials and returns an authentication response containing a token.

## Expected Response Contract

```json
{
  "token": "string"
}
```

## Token Generation Validation

| Validation              | Expected  |
| ----------------------- | --------- |
| Request accepted        | Yes       |
| Response is JSON        | Yes       |
| Root type               | Object    |
| `token` property exists | Yes       |
| `token` type            | String    |
| `token` value           | Non-empty |

## Execution Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 12. Dynamic Token Extraction

The authentication token should be extracted automatically from the API response.

## Postman Test Script

```javascript
const response = pm.response.json();

pm.environment.set("authToken", response.token);
```

## Recommended Safe Extraction

```javascript
const response = pm.response.json();

if (response.token) {
    pm.environment.set("authToken", response.token);
}
```

## Extraction Validation

```javascript
pm.test("Authentication token is returned", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("token");
});
```

```javascript
pm.test("Authentication token is a string", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.be.a("string");
});
```

```javascript
pm.test("Authentication token is not empty", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.not.be.empty;
});
```

## Expected Flow

```text
Authentication Response
      ↓
Parse JSON
      ↓
Read response.token
      ↓
Store Environment Variable
      ↓
authToken Available
```

---

# 13. Token Storage

The generated token is stored as a Postman environment variable.

## Variable

```text
authToken
```

## Postman Reference

```text
{{authToken}}
```

## Variable Scope

```text
Environment
```

## Environment

```text
Restful Booker - QA
```

## Token Storage Validation

| Validation            | Expected    | Actual     | Result      |
| --------------------- | ----------- | ---------- | ----------- |
| Token extracted       | Yes         | `[Actual]` | PASS / FAIL |
| Variable created      | Yes         | `[Actual]` | PASS / FAIL |
| Correct variable name | `authToken` | `[Actual]` | PASS / FAIL |
| Token value available | Yes         | `[Actual]` | PASS / FAIL |

## Security Note

Runtime authentication tokens should not be manually added to project documentation as reusable credentials.

The exported environment should be reviewed before being committed to GitHub.

---

# 14. Token Reuse

The dynamically generated token is reused by protected requests.

## Protected Request Example

```text
PATCH {{baseUrl}}/booking/{{bookingId}}
```

## Authentication Header

```text
Cookie: token={{authToken}}
```

## Token Reuse Flow

```text
POST /auth
      ↓
Generate Token
      ↓
Store {{authToken}}
      ↓
PATCH /booking/{{bookingId}}
      ↓
Resolve Environment Variable
      ↓
Send Cookie Authentication
```

## Validation Objective

The protected request must execute without:

* Manually copying the token
* Editing the Cookie header
* Replacing `{{authToken}}`
* Hardcoding a generated token

## Expected Result

```text
Dynamic Token Generated
      ↓
Dynamic Token Reused
      ↓
Protected Request Authenticated
```

---

# 15. Cookie Authentication

Cookie token authentication uses:

```text
Cookie: token={{authToken}}
```

## Request Example

```text
PATCH {{baseUrl}}/booking/{{bookingId}}
```

## Headers

```text
Content-Type: application/json
Accept: application/json
Cookie: token={{authToken}}
```

## Expected Behaviour

A valid generated token should authenticate the protected operation.

## Cookie Authentication Validation

| Validation                 | Expected |
| -------------------------- | -------- |
| Cookie header included     | Yes      |
| Token variable resolved    | Yes      |
| Token valid                | Yes      |
| Protected request accepted | Yes      |

## Execution Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 16. Basic Authentication

Restful Booker also documents Basic authentication for protected booking operations.

## Authentication Type

```text
Basic Auth
```

## Postman Configuration

```text
Authorization
      ↓
Auth Type: Basic Auth
      ↓
Username: [valid username]
Password: [valid password]
```

## HTTP Authentication Model

```text
Username + Password
      ↓
Basic Authentication Header
      ↓
Protected Endpoint
      ↓
Authentication Validation
```

## Basic Authentication Test

| Field           | Value                        |
| --------------- | ---------------------------- |
| HTTP Method     | `[PUT / PATCH / DELETE]`     |
| Endpoint        | `/booking/{{bookingId}}`     |
| Authentication  | Basic Authentication         |
| Credentials     | Valid documented credentials |
| Expected Result | Protected operation accepted |

## Validation Objective

Verify that documented Basic authentication can authenticate protected booking operations.

## Execution Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 17. Protected Endpoint Validation

A generated token must be validated against a protected endpoint.

## Recommended Protected Test Request

```text
PATCH /booking/{id}
```

PATCH is suitable because a controlled property can be modified and then verified using GET.

## Validation Flow

```text
Create Booking
      ↓
Store bookingId
      ↓
Generate Token
      ↓
Store authToken
      ↓
PATCH Booking
      ↓
GET Booking
      ↓
Verify Updated Value
```

## Example PATCH Request

```json
{
  "firstname": "AuthenticatedUpdate"
}
```

## Expected Result

1. The authenticated PATCH request is accepted.
2. The selected property is updated.
3. The updated value is returned.
4. A subsequent GET confirms the persisted value.

## Validation Matrix

| Validation              | Expected |
| ----------------------- | -------- |
| Token generated         | Yes      |
| Token reused            | Yes      |
| PATCH accepted          | Yes      |
| Updated value returned  | Yes      |
| Updated value persisted | Yes      |

This test proves functional token usage more strongly than validating the `/auth` response alone.

---

# 18. Positive Authentication Testing

## Test Objective

Verify that valid authentication data produces a usable authentication token.

## Request

```text
POST {{baseUrl}}/auth
```

## Valid Request Body

```json
{
  "username": "[valid username]",
  "password": "[valid password]"
}
```

## Expected Result

The API returns a JSON authentication response containing a non-empty string token.

## Positive Authentication Assertions

```javascript
pm.test("Authentication response is JSON", function () {
    pm.response.to.be.json;
});
```

```javascript
pm.test("Authentication response contains token", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("token");
});
```

```javascript
pm.test("Authentication token is a string", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.be.a("string");
});
```

```javascript
pm.test("Authentication token is not empty", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.not.be.empty;
});
```

## Execution Result

```text
[NOT EXECUTED / PASS / FAIL]
```

---

# 19. Negative Credential Testing

Negative credential testing validates authentication behaviour when invalid credentials are submitted.

## Invalid Username

```json
{
  "username": "[invalid username]",
  "password": "[valid password]"
}
```

## Invalid Password

```json
{
  "username": "[valid username]",
  "password": "[invalid password]"
}
```

## Invalid Username and Password

```json
{
  "username": "[invalid username]",
  "password": "[invalid password]"
}
```

## Validation Objectives

Verify that:

* Invalid credentials do not generate a valid authentication token.
* The response does not incorrectly contain a usable `token`.
* The API returns the documented authentication failure behaviour.
* Invalid authentication data cannot be used on protected endpoints.

## Negative Authentication Matrix

| Condition                     | Valid Token Expected |
| ----------------------------- | -------------------- |
| Invalid username              | No                   |
| Invalid password              | No                   |
| Invalid username and password | No                   |

## Important Validation

Do not validate only the response message.

The test should verify:

```text
Invalid Credentials
      ↓
No Valid Token
      ↓
No Authenticated Protected Operation
```

---

# 20. Missing Credential Testing

Authentication requests should be tested with missing credential properties.

## Missing Username

```json
{
  "password": "[valid password]"
}
```

## Missing Password

```json
{
  "username": "[valid username]"
}
```

## Empty JSON Object

```json
{}
```

## Validation Objectives

Verify:

* API response behaviour
* HTTP status
* Response body
* Token property absence
* No usable authentication token generated

## Result Matrix

| Test Condition   | HTTP Status | Token Generated | Result      |
| ---------------- | ----------- | --------------- | ----------- |
| Missing username | `[Actual]`  | Yes / No        | PASS / FAIL |
| Missing password | `[Actual]`  | Yes / No        | PASS / FAIL |
| Empty JSON       | `[Actual]`  | Yes / No        | PASS / FAIL |

The exact negative response should be compared with the documented API behaviour.

---

# 21. Invalid Data Type Testing

Credential fields should be tested with unexpected JSON data types.

## Numeric Username

```json
{
  "username": 12345,
  "password": "[valid password]"
}
```

## Boolean Password

```json
{
  "username": "[valid username]",
  "password": true
}
```

## Null Username

```json
{
  "username": null,
  "password": "[valid password]"
}
```

## Null Password

```json
{
  "username": "[valid username]",
  "password": null
}
```

## Validation Matrix

| Property   | Expected Type | Test Type |
| ---------- | ------------- | --------- |
| `username` | String        | Number    |
| `username` | String        | Null      |
| `password` | String        | Boolean   |
| `password` | String        | Null      |

## Validation Objective

Verify whether invalid credential data types:

* Are rejected
* Generate an error response
* Produce a normal authentication failure response
* Cause unexpected server behaviour
* Incorrectly generate a valid token

Acceptance of an undocumented input type should be analyzed against the API contract before being classified as a defect.

---

# 22. Malformed Request Testing

## Malformed JSON

Example:

```text
{
  "username": "[valid username]",
  "password": "[valid password]"
```

The closing JSON brace is intentionally missing.

## Empty Request Body

```text
[No request body]
```

## Missing Content-Type

The request is sent without:

```text
Content-Type: application/json
```

## Unsupported Content-Type

Example:

```text
Content-Type: text/plain
```

## Validation Objectives

Verify:

* HTTP status
* Error handling
* Response body
* Server stability
* Token generation behaviour

## Result Matrix

| Condition                | Status     | Token Generated | Result      |
| ------------------------ | ---------- | --------------- | ----------- |
| Malformed JSON           | `[Actual]` | Yes / No        | PASS / FAIL |
| Empty body               | `[Actual]` | Yes / No        | PASS / FAIL |
| Missing Content-Type     | `[Actual]` | Yes / No        | PASS / FAIL |
| Unsupported Content-Type | `[Actual]` | Yes / No        | PASS / FAIL |

A malformed request must not generate a valid authentication token.

---

# 23. Token Manipulation Testing

Token manipulation testing validates protected endpoint behaviour when the authentication token is invalid or modified.

## Invalid Token

```text
Cookie: token=invalidtoken
```

## Modified Token

Original token:

```text
abc123xyz
```

Modified test token:

```text
abc123xyA
```

The actual generated token should not be documented as a reusable credential.

## Validation Flow

```text
Generate Valid Token
      ↓
Create Modified Token Value
      ↓
Send Protected Request
      ↓
Review Authentication Response
      ↓
GET Resource
      ↓
Verify Resource State
```

## Expected Result

The modified or invalid token should not authenticate the protected request.

The protected resource should remain unchanged.

## Required Validation

```text
Unauthorized Response
        +
Resource State Unchanged
```

A rejected response alone is not the complete validation when the attempted request modifies or deletes data.

---

# 24. Missing Authentication Testing

Protected endpoints should be tested without authentication.

## Request Configuration

Remove:

```text
Cookie: token={{authToken}}
```

Do not configure Basic authentication.

## Protected Operations

```text
PUT /booking/{id}
PATCH /booking/{id}
DELETE /booking/{id}
```

## Validation Flow

```text
GET Original Resource State
      ↓
Send Protected Request
Without Authentication
      ↓
Review Response
      ↓
GET Resource Again
      ↓
Compare Resource State
```

## Expected Result

The protected operation should not be authorized.

The resource should remain unchanged.

## State Comparison

| Property     | Before Request | After Request | Expected  |
| ------------ | -------------- | ------------- | --------- |
| `[property]` | `[value]`      | `[value]`     | Unchanged |

For DELETE testing:

```text
Booking Exists
      ↓
Unauthorized DELETE
      ↓
GET Booking
      ↓
Booking Still Exists
```

---

# 25. Authentication State Verification

Authentication testing must verify the resulting resource state where applicable.

## Why State Verification Is Required

An API may return an authentication failure response while incorrectly processing a protected operation.

Therefore:

```text
HTTP Response Validation
        ≠
Complete Authorization Validation
```

The complete test is:

```text
HTTP Response Validation
        +
Resource State Validation
```

## PUT / PATCH Verification

```text
GET Original Booking
      ↓
Unauthorized Update Attempt
      ↓
GET Booking Again
      ↓
Compare Booking Data
```

## DELETE Verification

```text
Create Booking
      ↓
Unauthorized DELETE Attempt
      ↓
GET Booking
      ↓
Verify Booking Still Exists
```

## State Verification Result

| Validation                        | Result      |
| --------------------------------- | ----------- |
| Unauthorized response observed    | PASS / FAIL |
| Resource state checked            | PASS / FAIL |
| Resource remained unchanged       | PASS / FAIL |
| Overall authentication protection | PASS / FAIL |

---

# 26. Postman Authentication Assertions

## Successful Authentication Response

```javascript
pm.test("Authentication response contains token", function () {
    const response = pm.response.json();

    pm.expect(response).to.have.property("token");
});
```

## Token Data Type

```javascript
pm.test("Token is a string", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.be.a("string");
});
```

## Token Not Empty

```javascript
pm.test("Token is not empty", function () {
    const response = pm.response.json();

    pm.expect(response.token).to.not.be.empty;
});
```

## Authentication Response Schema

```javascript
const schema = {
    type: "object",
    required: [
        "token"
    ],
    properties: {
        token: {
            type: "string"
        }
    }
};

pm.test("Authentication response matches JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

## Store Authentication Token

```javascript
const response = pm.response.json();

if (response.token) {
    pm.environment.set("authToken", response.token);
}
```

## Verify Environment Token

```javascript
pm.test("Authentication token is stored", function () {
    const authToken = pm.environment.get("authToken");

    pm.expect(authToken).to.exist;
    pm.expect(authToken).to.not.be.empty;
});
```

## Negative Authentication Token Check

```javascript
pm.test("Valid authentication token is not returned", function () {
    const response = pm.response.json();

    pm.expect(response).to.not.have.property("token");
});
```

Assertions should be selected according to the expected behaviour of the individual test case.

A valid-authentication assertion must not be reused blindly for negative authentication tests.

---

# 27. Authentication Execution Result

## Execution Information

| Field                  | Value                 |
| ---------------------- | --------------------- |
| Authentication Test ID | `AUTH-TEST-XXX`       |
| Test Case ID           | `TC-AUTH-XXX`         |
| Execution Date         | YYYY-MM-DD            |
| Postman Request        | `[Request Name]`      |
| Authentication Type    | `[Type]`              |
| HTTP Status            | `[Actual Status]`     |
| Assertions             | `[Count]`             |
| Failed Assertions      | `[Count]`             |
| Defect ID              | `BUG-API-XXX / —`     |
| Result                 | PASS / FAIL / BLOCKED |

## Validation Result

| Validation               | Expected           | Actual     | Result      |
| ------------------------ | ------------------ | ---------- | ----------- |
| HTTP behaviour           | `[Expected]`       | `[Actual]` | PASS / FAIL |
| Response format          | `[Expected]`       | `[Actual]` | PASS / FAIL |
| Token behaviour          | `[Expected]`       | `[Actual]` | PASS / FAIL |
| Authentication behaviour | `[Expected]`       | `[Actual]` | PASS / FAIL |
| Resource state           | `[Expected / N/A]` | `[Actual]` | PASS / FAIL |

## Overall Result

```text
[PASS / FAIL / BLOCKED]
```

## Execution Notes

```text
[Document actual authentication test observations.]
```

---

# 28. Authentication Defect Analysis

A failed authentication assertion does not automatically confirm an API defect.

## Potential Failure Sources

```text
Incorrect Credentials
Incorrect Expected Result
Incorrect Request Body
Incorrect Content-Type
Incorrect Postman Assertion
Incorrect Variable Scope
Stale authToken
Token Extraction Failure
Public API Environment Issue
API Authentication Defect
API Authorization Defect
```

## Investigation Flow

```text
Authentication Test FAIL
      ↓
Review Request
      ↓
Review Test Data
      ↓
Review API Documentation
      ↓
Review Response
      ↓
Review Assertions
      ↓
Review Environment Variables
      ↓
Re-execute Request
      ↓
Verify Protected Resource State
      ↓
Classify Root Cause
```

## Defect Analysis Record

| Field                     | Value              |
| ------------------------- | ------------------ |
| Test Case ID              | `TC-AUTH-XXX`      |
| Failed Validation         | `[Validation]`     |
| Expected                  | `[Expected]`       |
| Actual                    | `[Actual]`         |
| Reproduced                | Yes / No           |
| Reproduction Rate         | `[Rate]`           |
| Root Cause Classification | `[Classification]` |
| Defect ID                 | `BUG-API-XXX / —`  |

## Analysis Conclusion

```text
[Document why the behaviour is or is not classified as an API defect.]
```

---

# 29. Authentication Evidence

Authentication evidence may include:

* Postman authentication response
* Token assertion result
* Environment variable evidence
* Protected request result
* Unauthorized request result
* Resource state verification
* Collection Runner result
* Newman result

## Evidence Directory

```text
10_Evidence/Postman/Authentication/
```

## Evidence Naming Convention

```text
[TC-ID]_[Authentication-Test].png
```

Examples:

```text
TC-AUTH-001_Valid_Token.png
TC-AUTH-002_Invalid_Username.png
TC-AUTH-014_Malformed_JSON.png
TC-AUTH-020_Token_Protected_Endpoint.png
```

## Evidence Record

| Evidence                    | Path     |
| --------------------------- | -------- |
| Authentication Response     | `[path]` |
| Postman Assertions          | `[path]` |
| Protected Request           | `[path]` |
| Resource State Verification | `[path]` |

Runtime token values should be treated as temporary execution data.

Evidence should focus on test behaviour rather than intentionally exposing reusable authentication values.

---

# 30. Security Testing Limitations

This project performs functional authentication and authorization testing.

It is not a penetration testing project.

## Included

```text
Valid Credential Testing
Invalid Credential Testing
Missing Credential Testing
Input Type Testing
Malformed Request Testing
Token Validation
Invalid Token Testing
Modified Token Testing
Missing Authentication Testing
Protected Endpoint Validation
Resource State Verification
```

## Not Included

```text
Brute Force Attacks
Credential Stuffing
Password Cracking
Token Theft
Session Hijacking
Cryptographic Analysis
Network Interception
Denial-of-Service Testing
Exploit Development
Infrastructure Penetration Testing
```

Authentication observations should be reported within the defined project scope.

Potential security-impacting behaviour may be documented as a defect, but the project should not claim to be a formal security assessment.

---

# 31. Authentication Maintenance

Authentication tests should remain synchronized with:

* API requirements
* API documentation
* Test scenarios
* Test cases
* Postman requests
* Postman environment
* Newman execution
* CI/CD workflow

## Authentication Change Flow

```text
Authentication Behaviour Change
      ↓
Requirements Review
      ↓
Test Scenario Review
      ↓
Test Case Review
      ↓
Postman Request Review
      ↓
Assertion Review
      ↓
Authentication Re-test
      ↓
Regression Execution
```

## Maintenance Rules

1. Do not hardcode generated authentication tokens in dependent requests.
2. Generate the token during the execution workflow.
3. Store the token using the intended variable scope.
4. Verify token extraction before protected requests.
5. Test protected operations with valid authentication.
6. Test protected operations without authentication.
7. Test protected operations with invalid authentication.
8. Verify resource state after unauthorized modification attempts.
9. Investigate failed assertions before defect classification.
10. Re-execute authentication regression tests after workflow changes.

The following workflow should be avoided:

```text
Protected Request FAIL
      ↓
Copy Token Manually
      ↓
Hardcode Token
      ↓
Request PASS
```

The correct workflow is:

```text
Protected Request FAIL
      ↓
Review Authentication Request
      ↓
Review Token Extraction
      ↓
Review Variable Scope
      ↓
Review Cookie Header
      ↓
Correct Root Cause
      ↓
Re-execute Workflow
```

---

# 32. Authentication Summary

**Project:** Restful Booker API Testing Project
**Authentication Endpoint:** `POST /auth`
**Primary Automated Authentication:** Cookie Token
**Alternative Authentication:** Basic Authentication
**Test Tool:** Postman
**Execution Status:** `[Not Executed / PASS / FAIL]`

The authentication testing workflow validates:

```text
Credentials
      ↓
POST /auth
      ↓
Authentication Response
      ↓
Token Contract Validation
      ↓
Dynamic Token Extraction
      ↓
{{authToken}}
      ↓
Cookie Authentication
      ↓
Protected Endpoint
      ↓
Resource State Verification
```

Authentication testing covers:

```text
Valid Credentials
Invalid Credentials
Missing Credentials
Empty Values
Null Values
Invalid Data Types
Malformed JSON
Content-Type Behaviour
Token Generation
Token Data Type
Token Extraction
Token Storage
Token Reuse
Cookie Authentication
Basic Authentication
Invalid Token
Modified Token
Missing Authentication
Protected Endpoint Validation
Resource State Verification
```

The primary automation objective is:

```text
Run Authentication Request
      ↓
Generate Token Automatically
      ↓
Store Token Automatically
      ↓
Reuse Token Automatically
      ↓
Execute Protected Request
```

No manual token copying should be required during the automated E2E or Newman execution workflow.

Authentication results are linked to:

```text
API Test Case
      ↓
Postman Request
      ↓
Authentication Assertion
      ↓
API Test Execution
      ↓
Defect Report, if required
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
**Status:** Template
