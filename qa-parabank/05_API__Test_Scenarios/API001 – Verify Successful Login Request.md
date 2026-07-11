# API001 – Verify Successful GET Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the customer accounts endpoint successfully processes a valid GET request and returns the expected account information.

---

## Preconditions

- ParaBank application is running.
- User is authenticated.
- Customer account exists.

---

## Request Information

| Field | Value |
|------|------|
| HTTP Method | GET |
| Endpoint | https://parabank.parasoft.com/parabank/services_proxy/bank/customers/13655/accounts |
| Headers | Accept: */* |
| Authentication | Session Cookie (JSESSIONID) |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open the ParaBank application. |
| 2 | Log in with valid credentials. |
| 3 | Open Chrome Developer Tools (F12). |
| 4 | Navigate to the Network tab and filter by Fetch/XHR. |
| 5 | Open **Accounts Overview**. |
| 6 | Locate the GET request to the customer accounts endpoint. |
| 7 | Verify the request and response. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- Response is returned successfully.
- Response body contains valid JSON.
- Customer account information is displayed.
- No unexpected errors are returned.

---

## Actual Result

The request returned **HTTP 200 OK**.

The response contained valid JSON with the customer's account information.

No errors were observed during execution.

---

## Status

**PASS**

---

## Notes

Verified:

- HTTP Status Code: 200 OK
- Response Format: JSON
- Content-Type: application/json
- Endpoint responded successfully.
