# API010 – Verify Unauthorized Access

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Security API Test

---

## Objective

Verify that protected API endpoints reject requests made without valid authentication and return the appropriate HTTP status code.

---

## Preconditions

- The ParaBank application is accessible.
- A protected API endpoint has been identified.
- No valid authentication credentials or session are provided.

---

## Request Information

| Field | Value |
|------|------|
| HTTP Method | *To be identified during API analysis* |
| Endpoint | *Protected endpoint to be identified* |
| Headers | None or invalid authentication |
| Authentication | None |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a request to a protected API endpoint. |
| 3 | Do not include authentication credentials (or use invalid credentials). |
| 4 | Send the request. |
| 5 | Review the response. |

---

## Expected Result

- The request is rejected.
- The API returns an appropriate authentication error (e.g., **401 Unauthorized** or **403 Forbidden**, depending on the API design).
- No sensitive customer or account information is returned.
- The response contains an appropriate error message.
- The application remains stable.

---

## Actual Result

*To be completed during execution.*

---

## Status

**Not Executed**

---

## Notes

Verify:

- Correct HTTP status code is returned.
- No sensitive information is exposed in the response body.
- Response headers do not leak unnecessary information.
- The error message is appropriate and does not reveal internal implementation details.
- The behavior is consistent across protected endpoints.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
