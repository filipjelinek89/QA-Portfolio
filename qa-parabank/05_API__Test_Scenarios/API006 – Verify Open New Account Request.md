# API006 – Verify Open New Account Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Open New Account API endpoint successfully creates a new bank account for an authenticated customer.

---

## Preconditions

- ParaBank application is available.
- A valid customer account exists.
- User is authenticated.
- Postman is installed.
- A valid JSESSIONID session cookie is available.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | POST |
| Endpoint | *To be identified during endpoint discovery* |
| Authentication | Session Cookie (JSESSIONID) |
| Content-Type | application/x-www-form-urlencoded (or as required) |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open the ParaBank application. |
| 2 | Create a new account using the web interface while monitoring Network requests in Chrome Developer Tools. |
| 3 | Identify the Open New Account API endpoint. |
| 4 | Open Postman. |
| 5 | Create a POST request using the identified endpoint. |
| 6 | Add the authenticated JSESSIONID cookie. |
| 7 | Configure the required request parameters. |
| 8 | Send the request. |
| 9 | Verify the response and confirm that the new account was successfully created. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The request is processed successfully.
- A new account is created.
- The response contains the newly created account information.
- No unexpected errors are returned.

---

## Actual Result

*To be completed after execution.*

---

## Status

**Not Executed**

---

## Notes

Verify the following:

- HTTP Status Code
- Response Time
- Response Headers
- JSON Response
- Newly created Account ID
- Account Type
- Successful account creation

The endpoint URL and request parameters should be identified using Chrome Developer Tools before execution in Postman.

---

⬅️ Back to API Testing

[05_API_Testing.md](qa-parabank/05_API_Testing.md)
