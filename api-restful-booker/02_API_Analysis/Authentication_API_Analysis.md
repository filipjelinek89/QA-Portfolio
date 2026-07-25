# Authentication API Analysis

## Document Information

| Item | Details |
|------|---------|
| Project | Restful Booker API Testing |
| Sprint | Sprint 2 – Authentication |
| Endpoint | POST /auth |
| Version | 1.1 |
| Status | Completed |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

The purpose of this document is to analyze the Authentication endpoint of the Restful Booker API before designing test scenarios, test cases, and Postman requests.

The analysis identifies:

- Endpoint purpose
- HTTP method
- Request requirements
- Response structure
- Authentication workflow
- Validation opportunities
- Potential risks
- Requirement gaps
- Test design considerations

This document serves as the technical foundation for Sprint 2.

---

# Endpoint Information

| Property | Value |
|----------|-------|
| Endpoint | `/auth` |
| HTTP Method | POST |
| Authentication Required | No |
| Content-Type | application/json |
| Response Format | application/json |

---

# Endpoint Purpose

The endpoint authenticates a user using a username and password.

If the credentials are valid, the API returns an authentication token.

The generated token is later used to authorize protected endpoints:

- PUT /booking/{id}
- PATCH /booking/{id}
- DELETE /booking/{id}

---

# Request Analysis

## Required Headers

| Header | Required | Expected Value |
|---------|----------|----------------|
| Content-Type | Yes | application/json |

---

## Request Body

```json
{
  "username": "admin",
  "password": "password123"
}
```

---

## Request Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| username | String | Yes | User login name |
| password | String | Yes | User password |

---

# Successful Response

Example:

```json
{
  "token": "abc123456789"
}
```

---

## Response Properties

| Property | Type | Description |
|----------|------|-------------|
| token | String | Authentication token used for protected requests |

---

# Authentication Flow

```text
Client
    │
    ▼
POST /auth
    │
    ▼
Validate Credentials
    │
    ▼
Generate Token
    │
    ▼
Return Token
    │
    ▼
Store Token
    │
    ▼
Use Token for Protected Requests
```

---

# Functional Requirements

The endpoint should:

- Accept valid credentials
- Reject invalid credentials
- Return a token for valid credentials
- Return JSON responses
- Require Content-Type: application/json
- Return meaningful HTTP status codes

---

# Input Validation Analysis

The endpoint should be tested with:

## Valid Input

- Valid username
- Valid password

## Invalid Credentials

- Invalid username
- Invalid password
- Both invalid

## Missing Data

- Missing username
- Missing password
- Empty request body
- Empty JSON object

## Invalid Values

- Null username
- Null password
- Empty username
- Empty password
- Incorrect data types

## Invalid Request Format

- Malformed JSON
- Missing Content-Type
- Incorrect Content-Type

---

# Expected Response Validation

The response should be validated for:

- HTTP status code
- Content-Type
- Response time
- Response body
- Token property existence
- Token data type
- Token value

---

# HTTP Status Code Analysis

Expected successful response:

```text
200 OK
```

Negative responses should be documented during testing because the public documentation does not define every error condition.

---

# Authentication Token Analysis

The generated token is expected to:

- Be returned as a string
- Be non-empty
- Be usable in protected requests

The documentation does not define:

- Token expiration
- Token lifetime
- Token revocation
- Token format
- Maximum token length

These represent exploratory testing opportunities.

---

# Risks

Potential risks include:

- Invalid credentials accepted
- Empty token returned
- Missing token property
- Incorrect status codes
- Missing Content-Type validation
- Inconsistent error responses
- Authentication bypass

---

# Requirement Gaps

The published documentation does not specify:

- Token expiration
- Token lifetime
- Account lockout
- Authentication rate limits
- Error response schema
- Invalid credential status codes
- Maximum token length

These gaps should be documented during execution instead of assumed.

---

# Test Design Implications

The endpoint requires:

- Positive testing
- Negative testing
- Header validation
- Data validation
- Response validation
- Authentication workflow testing
- Response contract validation
- Automated Postman assertions

The generated authentication token should be extracted dynamically and stored as an environment or collection variable for subsequent protected requests.

---

# Dependencies

```text
POST /auth
        │
        ▼
Generate Token
        │
        ▼
Store Token
        │
        ▼
PUT /booking/{id}

PATCH /booking/{id}

DELETE /booking/{id}
```

---

# Conclusion

The Authentication endpoint is the entry point for all protected operations within the Restful Booker API.

Although the endpoint itself is relatively simple, it introduces one of the project's most important dependencies because the generated authentication token is required for subsequent update and delete operations.

The endpoint should therefore be validated not only for successful authentication but also for response structure, token usability, input validation, and consistency with the documented API contract.

---

**Prepared by:** Filip Jelinek

**Role:** QA Tester

**Version:** 1.1

**Status:** Completed