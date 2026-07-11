# API007 – Verify Transfer Funds Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Transfer Funds API endpoint successfully transfers funds between two customer accounts when a valid authenticated POST request is submitted.

---

## Preconditions

- ParaBank application is available.
- A valid customer account exists.
- At least two customer accounts are available for the transfer.
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
| 2 | Open Chrome Developer Tools (F12). |
| 3 | Navigate to the **Network** tab and filter by **Fetch/XHR**. |
| 4 | Perform a successful funds transfer using the web interface. |
| 5 | Identify the Transfer Funds API endpoint. |
| 6 | Open Postman. |
| 7 | Create a POST request using the discovered endpoint. |
| 8 | Add the authenticated JSESSIONID cookie. |
| 9 | Configure the required transfer parameters. |
| 10 | Send the request. |
| 11 | Verify the response and confirm that the transfer completed successfully. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The transfer request is processed successfully.
- Funds are transferred between the selected accounts.
- The response confirms the successful transaction.
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
- Response Format
- Successful transaction confirmation
- Updated account balances (if returned)

The endpoint URL and request parameters should be identified using Chrome Developer Tools before execution in Postman.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
