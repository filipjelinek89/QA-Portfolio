# TC001 - Verify API Health Check

## Test Information

| Field | Value |
|-------|-------|
| Test Case ID | TC001 |
| Module | Health Check |
| Endpoint | GET /ping |
| Priority | High |
| Severity | Critical |
| Type | Positive |

---

## Preconditions

- Restful Booker API is available.
- Base URL is configured correctly.

---

## Test Steps

1. Open Postman.
2. Select **GET /ping** request.
3. Click **Send**.

---

## Expected Result

- HTTP Status Code = **201 Created**
- Response body = **Created**
- Content-Type = **text/plain**
- Response time is within acceptable limits.

---

## Actual Result

API returned:

- Status Code: **201 Created**
- Response Body: **Created**
- Content-Type: **text/plain**

---

## Test Result

✅ PASS
