# Authentication API Analysis

## Document Information

| Item | Details |
|------|---------|
| Project | Restful Booker API Testing |
| Sprint | Sprint 2 – Authentication |
| Endpoint | POST /auth |
| Version | 1.0 |
| Status | Draft |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

The purpose of this document is to analyze the Authentication endpoint provided by the Restful Booker API. The analysis identifies endpoint behavior, request and response formats, authentication flow, expected HTTP status codes, validation rules, and potential testing risks before creating test scenarios and test cases.

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

The Authentication endpoint validates user credentials.

If the supplied username and password are valid, the API generates and returns an authentication token.

The token is later used to authorize protected operations such as updating or deleting bookings.

---

# Request Analysis

## Required Headers

| Header | Required | Value |
|---------|----------|-------|
| Content-Type | Yes | application/json |

---

## Request Body

```json
{
    "username": "admin",
    "password": "password123"
}