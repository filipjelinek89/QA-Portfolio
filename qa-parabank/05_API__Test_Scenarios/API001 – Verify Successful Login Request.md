# API001 – Verify Successful Login Request

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that a valid user can successfully authenticate using the ParaBank login endpoint and that the server returns a successful response with an authenticated session.

---

## Preconditions

- ParaBank application is available.
- Valid user credentials exist.
- Postman is installed.

---

## Request Information

| Field | Value |
|------|------|
| HTTP Method | POST |
| Endpoint | *To be identified* |
| Authentication | None (credentials sent in request) |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a POST request. |
| 3 | Enter the login endpoint URL. |
| 4 | Enter a valid username and password. |
| 5 | Send the request. |
| 6 | Verify the response. |

---

## Expected Result

- HTTP Status **200 OK**
- Login succeeds.
- Session cookie (JSESSIONID) is returned.
- No errors are displayed.

---

## Actual Result

*To be completed during execution.*

---

## Status

Not Executed
