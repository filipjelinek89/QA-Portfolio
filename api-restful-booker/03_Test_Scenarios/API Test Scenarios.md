# API Test Scenarios

**Project:** Restful Booker API Testing

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# Purpose

This document contains high-level test scenarios designed to verify the core functionality of the Restful Booker API.

Test scenarios describe **what should be tested**, without providing detailed execution steps.

---

# Test Scope

The following API areas are included:

- API Availability
- Authentication
- Booking Management (CRUD)
- Data Validation
- Authorization
- Error Handling
- Negative Testing

---

# Scenario Summary

| Scenario ID | Module | Status |
|-------------|--------|--------|
| TS001 | Health Check | ✅ Completed |
| TS002 | Authentication | ⏳ Planned |
| TS003 | Retrieve Booking IDs | ⏳ Planned |
| TS004 | Retrieve Booking by ID | ⏳ Planned |
| TS005 | Create Booking | ⏳ Planned |
| TS006 | Update Booking | ⏳ Planned |
| TS007 | Partial Update Booking | ⏳ Planned |
| TS008 | Delete Booking | ⏳ Planned |
| TS009 | Negative Testing | ⏳ Planned |

---

# Health Check

---

## TS001 – Verify API Availability

### Objective

Verify that the Restful Booker API is available and responding correctly.

### Endpoint

GET /ping

### Expected Behaviour

- API responds successfully.
- Status Code = **201 Created**
- Response Body = **Created**
- Response Time is acceptable.
- Correct response headers are returned.

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

| Module | Progress |
|---------|----------|
| Health Check | ✅ |
| Authentication | ⏳ |
| Booking | ⏳ |
| Negative Testing | ⏳ |
