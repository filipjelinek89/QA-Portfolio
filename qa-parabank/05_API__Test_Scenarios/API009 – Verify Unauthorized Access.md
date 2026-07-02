# API009 – Verify Unauthorized Access

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Security API Test

---

## Objective

Verify that the API denies access to protected resources when a request is sent without valid authentication.

---

## Preconditions

* The ParaBank application is accessible.
* A protected API endpoint has been identified.
* No authenticated user session is active.

---

## Request Information

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| HTTP Method    | GET                                    |
| Endpoint       | *To be identified during API analysis* |
| Headers        | *To be completed during testing*       |
| Authentication | None                                   |

---

## Test Data

| Field          | Value                          |
| -------------- | ------------------------------ |
| Authentication | None (Unauthenticated request) |

---

## Test Steps

| Step | Action                                                                       |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Open Postman.                                                                |
| 2    | Configure a request to a protected API endpoint.                             |
| 3    | Ensure no authentication token, session cookie, or credentials are included. |
| 4    | Send the request.                                                            |
| 5    | Review the response.                                                         |

---

## Expected Result

* Access to the protected resource is denied.
* The API returns an appropriate HTTP status code (such as **401 Unauthorized** or **403 Forbidden**, depending on the application's implementation).
* No protected customer or account information is returned.
* The response contains an appropriate error message or indication that authentication is required.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:

* No sensitive information is exposed.
* The API consistently blocks unauthenticated requests.
* The response status code matches the application's authentication strategy.
* Error messages do not reveal unnecessary implementation details.
* The application behaves consistently across repeated requests.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
