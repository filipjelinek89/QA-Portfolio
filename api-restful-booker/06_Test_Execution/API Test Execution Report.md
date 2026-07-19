# API Test Execution Report

**Project:** Restful Booker API Testing

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# Purpose

This document records the execution results of all manual API tests performed against the Restful Booker API.

Execution results are updated after each completed sprint.

---

# Environment

| Item | Value |
|------|-------|
| Tool | Postman |
| Environment | Restful Booker Environment |
| Tester | Filip Jelinek |

---

# Overall Execution Summary

| Metric | Value |
|---------|-------|
| Planned Test Cases | 1 |
| Executed | 1 |
| Passed | 1 |
| Failed | 0 |
| Blocked | 0 |
| Pass Rate | 100% |
| Fail Rate | 0% |

---

# Execution Results

| TC | Endpoint | Method | Result |
|----|----------|--------|--------|
| TC001 | GET /ping | GET | ✅ PASS |

---

# Detailed Execution

---

## TC001 – Verify API Health Check

### Execution Date

19 July 2026

### Endpoint

GET /ping

### Expected Result

- HTTP 201 Created
- Response Body = Created
- Content-Type = text/plain
- Response Time < 5000 ms

### Actual Result

- HTTP 201 Created
- Response Body = Created
- Content-Type = text/plain
- Response Time = 273 ms

### Result

✅ PASS

### Evidence

```text
10_Test_Evidence/
└── GET/
    └── TC001_GET_Ping_PASS.png
```

---

# Defect Summary

No defects were identified during execution.

---

# Sprint History

| Sprint | Completed Work |
|---------|----------------|
| Sprint #1 | GET /ping |

---

# Overall Progress

| Module | Status |
|---------|--------|
| Health Check | ✅ Completed |
| Authentication | ⏳ Planned |
| Booking | ⏳ Planned |
| Negative Testing | ⏳ Planned |
