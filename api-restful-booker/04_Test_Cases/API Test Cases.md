# API Test Cases

**Project:** Restful Booker API Testing

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# Purpose

This document contains detailed manual API test cases executed against the Restful Booker API.

Each test case includes:

- Preconditions
- Test Steps
- Expected Result
- Execution Status

---

# Test Case Summary

| Module | Planned | Executed |
|---------|----------|-----------|
| Health Check | 1 | 1 |
| Authentication | 0 | 0 |
| Booking | 0 | 0 |
| Negative Testing | 0 | 0 |

---

# Health Check

---

## TC001 – Verify API Health Check

| Field | Value |
|------|-------|
| Test Case ID | TC001 |
| Scenario | TS001 |
| Module | Health Check |
| Method | GET |
| Endpoint | /ping |
| Priority | High |
| Severity | Critical |
| Type | Positive |

### Preconditions

- API is online.
- Base URL is configured.

### Test Steps

1. Open Postman.
2. Select **GET /ping**.
3. Click **Send**.

### Expected Result

- HTTP Status Code = **201 Created**
- Response Body = **Created**
- Content-Type = **text/plain**
- Response Time < 5000 ms

---

# Authentication

*(Will be updated during Sprint #2.)*

---

# Booking

*(Will be updated during future sprints.)*

---

# Negative Testing

*(Will be updated during future sprints.)*

---

# Progress

| Test Case | Status |
|------------|--------|
| TC001 | ✅ PASS |
| TC002 | ⏳ Planned |
| TC003 | ⏳ Planned |
| TC004 | ⏳ Planned |
| TC005 | ⏳ Planned |
| TC006 | ⏳ Planned |
| TC007 | ⏳ Planned |
| TC008 | ⏳ Planned |
