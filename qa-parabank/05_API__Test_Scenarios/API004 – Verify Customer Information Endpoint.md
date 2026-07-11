# API004 – Verify Customer Information Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Customer Information API endpoint successfully returns the authenticated customer's profile information.

---

## Preconditions

- ParaBank application is available.
- Valid customer account exists.
- Postman is installed.
- Valid JSESSIONID session cookie is available.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | GET |
| Endpoint | *To be completed after endpoint discovery* |
| Authentication | Session Cookie (JSESSIONID) |
| Headers | Accept: application/json |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a new GET request. |
| 3 | Enter the Customer Information endpoint URL. |
| 4 | Add the authenticated JSESSIONID cookie. |
| 5 | Add the `Accept: application/json` header. |
| 6 | Send the request. |
| 7 | Verify the response status and JSON payload. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- Customer information is returned.
- Response body contains valid JSON.
- Customer profile fields are populated correctly.
- No unexpected errors are returned.

---

## Actual Result

*To be completed after execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that the returned JSON includes customer information such as:

- Customer ID
- First Name
- Last Name
- Address
- City
- State
- ZIP Code
- Phone Number

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
