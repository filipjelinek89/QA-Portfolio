# API003 – Verify Invalid Authentication

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Negative API Test

---

## Objective

Verify that the Customer Accounts API endpoint rejects requests made without valid authentication and returns the appropriate HTTP status code.

---

## Preconditions

- ParaBank application is available.
- Postman is installed.
- Customer Accounts endpoint is known.
- No valid JSESSIONID session cookie is provided.

---

## Request Information

| Field | Value |
|------|------|
| Tool | Postman |
| HTTP Method | GET |
| Endpoint | `https://parabank.parasoft.com/parabank/services_proxy/bank/customers/{customerId}/accounts` |
| Authentication | None (or invalid JSESSIONID) |
| Headers | Accept: application/json |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open Postman. |
| 2 | Create a GET request for the Customer Accounts endpoint. |
| 3 | Do not provide the JSESSIONID cookie (or provide an invalid value). |
| 4 | Add the `Accept: application/json` header. |
| 5 | Send the request. |
| 6 | Verify the response status and error message. |

---

## Expected Result

- The request is rejected.
- HTTP Status Code is **401 Unauthorized**.
- The response contains an appropriate authentication error message.
- No customer account information is returned.

---

## Actual Result

The request was sent without a valid authenticated session.

The API returned **HTTP 401 Unauthorized**.

The response body contained the following message:

```json
{
    "message": "User login required",
    "status": 401
}
```

No customer account information was returned.

---

## Status

**PASS**

---

## Notes

This test confirms that the endpoint correctly protects customer data by requiring authentication before access is granted.

The observed behavior is expected and demonstrates proper access control.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
