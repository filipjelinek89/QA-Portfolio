# API010 – Verify Invalid Customer ID Handling

**Module:** API Testing

**Priority:** Medium

**Severity:** Medium

**Type:** Negative API Test

---

## Objective

Verify that the Customer Accounts API endpoint safely handles a request containing an invalid or unsupported customer ID value.

---

## Preconditions

- ParaBank application is available.
- Postman is installed.
- A valid authenticated session (JSESSIONID) is available.
- The Customer Accounts API endpoint is known.

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

## Test Data

| Parameter | Value |
|-----------|-------|
| Customer ID | 999999999 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a GET request for the Customer Accounts endpoint. |
| 3 | Replace `{customerId}` with the invalid customer ID `999999999`. |
| 4 | Add the authenticated JSESSIONID cookie. |
| 5 | Add the `Accept: application/json` header. |
| 6 | Send the request. |
| 7 | Verify the HTTP status code and response body. |
| 8 | Confirm that no customer account information is returned. |

---

## Expected Result

- The API safely rejects the invalid customer ID value.
- A controlled client error response is returned.
- No customer account information is returned.
- No unexpected Internal Server Error occurs.

---

## Actual Result

The request was executed using Postman with the customer ID `999999999`.

The API returned **HTTP 400 Bad Request**.

The response body contained a structured JSON error response:

```json
{
  "type": "about:blank",
  "title": "Bad Request",
  "status": 400,
  "detail": "Failed to convert 'id' with value: '999999999'",
  "instance": "/parabank/services_proxy/bank/customers/999999999/accounts"
}
```

The request was rejected and no customer account information was returned.

The API handled the invalid customer ID using a controlled client error response without producing an Internal Server Error.

---

## Status

**PASS**

---

## Notes

The API returned **HTTP 400 Bad Request** because the supplied customer ID could not be converted to the required identifier type.

The response contained a structured JSON error with the HTTP status, error title, technical detail, and affected endpoint.

The observed behavior demonstrates controlled error handling for an unsupported customer ID value.

No customer account data was exposed.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
