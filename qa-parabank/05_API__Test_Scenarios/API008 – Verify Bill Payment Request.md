# API008 – Verify Bill Payment Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Bill Payment API endpoint successfully processes a bill payment request for an authenticated customer.

---

## Preconditions

- ParaBank application is available.
- A valid customer account exists.
- Sufficient funds are available in the source account.
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
| 4 | Open the **Bill Pay** page. |
| 5 | Complete the Bill Payment form with valid data. |
| 6 | Submit the payment request. |
| 7 | Identify the Bill Payment API endpoint. |
| 8 | Open Postman. |
| 9 | Create a POST request using the discovered endpoint. |
| 10 | Add the authenticated JSESSIONID cookie. |
| 11 | Configure the required request parameters. |
| 12 | Send the request. |
| 13 | Verify the response and confirm that the payment was processed successfully. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The bill payment request is processed successfully.
- Payment confirmation is returned.
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
- Successful payment confirmation
- Returned transaction information (if available)

The endpoint URL and request parameters should be identified using Chrome Developer Tools before execution in Postman.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
