# API001 – Verify Successful GET Request

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the customer accounts API endpoint successfully processes a valid GET request and returns the expected HTTP response and JSON payload.

---

## Preconditions

- ParaBank application is running.
- User is logged in through the web application.
- Chrome Developer Tools is available.

---

## Request Information

| Field | Value |
|------|------|
| HTTP Method | GET |
| Endpoint | https://parabank.parasoft.com/parabank/services_proxy/bank/customers/13655/accounts |
| Tool Used | Chrome Developer Tools (Network → Fetch/XHR) |
| Authentication | Authenticated browser session (JSESSIONID) |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open the ParaBank application. |
| 2 | Log in using valid user credentials. |
| 3 | Open Chrome Developer Tools (F12). |
| 4 | Navigate to the **Network** tab and select **Fetch/XHR**. |
| 5 | Open **Accounts Overview**. |
| 6 | Locate the GET request to the customer accounts endpoint. |
| 7 | Verify the request details and response. |

---

## Expected Result

- HTTP Status Code is **200 OK**.
- Response is successfully returned.
- Response body contains valid JSON.
- Customer account information is returned.
- No unexpected errors are displayed.

---

## Actual Result

The GET request was successfully captured using Chrome Developer Tools.

The endpoint returned **HTTP 200 OK**.

The response contained valid JSON with the customer's account information.

No unexpected errors were observed.

---

## Status

**PASS**

---

## Notes

This endpoint was verified using **Chrome Developer Tools** during an authenticated browser session.

Direct execution in **Postman** was not performed as part of this project because the endpoint requires authentication (JSESSIONID). Comprehensive API execution and authentication testing will be covered in a dedicated API Testing project.

---

⬅️ Back to API Testing

[05_API_Testing.md](../05_API_Testing.md)
