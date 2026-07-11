# API002 – Verify Customer Accounts GET Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Customer Accounts API endpoint successfully returns customer account information when a valid authenticated GET request is sent using Postman.

---

## Preconditions

- ParaBank application is available.
- A valid user account exists.
- Postman is installed.
- The Customer Accounts endpoint has been identified (API001).
- A valid authenticated session (JSESSIONID) is available.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | GET |
| Endpoint | `https://parabank.parasoft.com/parabank/services_proxy/bank/customers/{customerId}/accounts` |
| Authentication | Session Cookie (JSESSIONID) |
| Headers | Accept: application/json |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a new GET request. |
| 3 | Enter the Customer Accounts endpoint URL. |
| 4 | Add the authenticated JSESSIONID cookie. |
| 5 | Add the `Accept: application/json` header. |
| 6 | Send the request. |
| 7 | Verify the response status, headers and JSON payload. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The response is returned successfully.
- Response body contains valid JSON.
- Customer account information is returned.
- Response time is acceptable.
- No unexpected errors are returned.

---

## Actual Result

The GET request was successfully executed using Postman.

The API returned **HTTP 200 OK**.

The response body contained valid JSON with the authenticated customer's account information.

The response format and returned data matched the expected structure.

No unexpected errors were observed during execution.

---

## Status

**PASS**

---

## Notes

Authentication was performed using the **JSESSIONID** session cookie obtained from an authenticated browser session.

Without a valid session cookie, the endpoint returns **HTTP 401 Unauthorized**.

This authentication behavior will be verified separately in **API003 – Verify Unauthorized Access**.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
