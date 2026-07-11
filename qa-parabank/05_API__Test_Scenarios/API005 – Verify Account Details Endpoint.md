# API005 – Verify Account Details Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Account Details API endpoint successfully returns detailed information for a specific customer account when a valid authenticated GET request is sent.

---

## Preconditions

- ParaBank application is available.
- A valid customer account exists.
- Postman is installed.
- A valid authenticated session (JSESSIONID) is available.
- The account ID is known.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | GET |
| Endpoint | `https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/{accountId}` |
| Authentication | Session Cookie (JSESSIONID) |
| Headers | Accept: application/json |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a new GET request. |
| 3 | Enter the Account Details endpoint URL. |
| 4 | Add the authenticated JSESSIONID cookie. |
| 5 | Add the `Accept: application/json` header. |
| 6 | Replace `{accountId}` with a valid account ID. |
| 7 | Send the request. |
| 8 | Verify the response status and JSON payload. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The response is returned successfully.
- Response body contains valid JSON.
- The returned account ID matches the requested account.
- Account balance and account type are displayed correctly.
- No unexpected errors are returned.

---

## Actual Result

*To be completed after execution.*

---

## Status

**Not Executed**

---

## Notes

Verify the following response fields:

- Account ID
- Customer ID
- Account Type
- Account Balance

Confirm that the account information belongs to the authenticated customer.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
