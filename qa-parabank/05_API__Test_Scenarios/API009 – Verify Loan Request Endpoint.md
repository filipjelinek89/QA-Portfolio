# API009 – Verify Loan Request Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the Loan Request API endpoint successfully processes a valid loan application for an authenticated customer.

---

## Preconditions

- ParaBank application is available.
- A valid customer account exists.
- User is authenticated.
- A valid source account is available.
- Postman is installed.
- A valid JSESSIONID session cookie is available.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | POST |
| Endpoint | Loan Request endpoint identified using Chrome Developer Tools |
| Authentication | Session Cookie (JSESSIONID) |
| Content-Type | Request parameters configured according to the identified API request |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open the ParaBank application. |
| 2 | Open Chrome Developer Tools (F12). |
| 3 | Navigate to the **Network** tab and filter by **Fetch/XHR**. |
| 4 | Open the **Request Loan** page. |
| 5 | Enter a valid loan amount and down payment. |
| 6 | Select a valid source account. |
| 7 | Submit the loan request. |
| 8 | Identify the Loan Request API endpoint and request parameters. |
| 9 | Open Postman. |
| 10 | Create a POST request using the discovered endpoint. |
| 11 | Add the authenticated JSESSIONID cookie. |
| 12 | Configure the required loan request parameters. |
| 13 | Send the request. |
| 14 | Verify the HTTP response and response payload. |
| 15 | Confirm that the loan request was processed successfully. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- The loan request is processed successfully.
- The API returns a valid response.
- The response contains the loan request result.
- The loan approval or denial status is returned.
- No unexpected server errors are returned.

---

## Actual Result

The Loan Request API was successfully executed using Postman.

The API returned **HTTP 200 OK**.

A valid response was returned containing the loan request result.

The request was processed successfully and no unexpected server error occurred during direct API execution.

---

## Status

**PASS**

---

## Notes

The Loan Request endpoint successfully processed the request when executed directly through Postman.

During previous manual UI testing, the Loan Request workflow produced an **Internal Server Error**, documented as **BUG012 – Loan Request Internal Error**.

The successful direct API execution indicates that the Loan Request backend endpoint is operational under the tested conditions. The difference between UI and direct API behavior may indicate an issue related to the web workflow, request construction, frontend-backend integration, or application state.

Further investigation would be required to determine the exact root cause of the inconsistent behavior.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
