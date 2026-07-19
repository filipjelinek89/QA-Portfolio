# API Test Scenarios

**Project:** Restful Booker API Testing Project
**Document Type:** API Test Scenarios
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Project Status:** Sprint 1 In Progress

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Sprint Overview](#2-sprint-overview)
- [3. Scenario Summary](#3-scenario-summary)
- [4. Health Check Test Scenarios](#4-health-check-test-scenarios)
- [5. Sprint Progress](#5-sprint-progress)

---

# 1. Purpose

This document contains the high-level API Test Scenarios executed during the Restful Booker API Testing Project.

The project is developed incrementally using a sprint-based approach.

Each sprint introduces new API functionality together with its associated test scenarios.

Detailed execution steps are documented separately in **API Test Cases.md**.

---

# 2. Sprint Overview

| Sprint | Module | Status |
|---------|---------|--------|
| Sprint 1 | Health Check | 🟡 In Progress |
| Sprint 2 | Authentication | ⏳ Planned |
| Sprint 3 | Retrieve Booking IDs | ⏳ Planned |
| Sprint 4 | Retrieve Booking by ID | ⏳ Planned |
| Sprint 5 | Create Booking | ⏳ Planned |
| Sprint 6 | Update Booking | ⏳ Planned |
| Sprint 7 | Partial Update Booking | ⏳ Planned |
| Sprint 8 | Delete Booking | ⏳ Planned |
| Sprint 9 | End-to-End Workflow | ⏳ Planned |

---

# 3. Scenario Summary

| Scenario ID | Title | Priority | Type | Status |
|-------------|-------|----------|------|--------|
| TS-PING-001 | Verify API Health Check endpoint responds successfully | High | Positive | ⏳ Planned |
| TS-PING-002 | Verify Health Check response contract | High | Contract | ⏳ Planned |
| TS-PING-003 | Verify unsupported HTTP methods | Medium | Negative | ⏳ Planned |
| TS-PING-004 | Verify Health Check response performance | Medium | Performance | ⏳ Planned |

---

# 4. Health Check Test Scenarios

---

## TS-PING-001 – Verify API Health Check endpoint responds successfully

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| Priority | High |
| Test Type | Positive |
| Related Requirement | REQ-PING-001 |

### Objective

Verify that the Health Check endpoint is available and responds successfully to a valid GET request.

---

## TS-PING-002 – Verify Health Check response contract

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| Priority | High |
| Test Type | Contract |
| Related Requirement | REQ-PING-002 |

### Objective

Verify that the endpoint returns the expected HTTP status code, response body and response headers according to the API documentation.

---

## TS-PING-003 – Verify unsupported HTTP methods

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | /ping |
| Priority | Medium |
| Test Type | Negative |
| Related Requirement | REQ-PING-003 |

### Objective

Verify that unsupported HTTP methods are handled correctly and do not behave as a valid Health Check request.

Methods covered:

- POST
- PUT
- PATCH
- DELETE

---

## TS-PING-004 – Verify Health Check response performance

| Field | Value |
|------|-------|
| Module | Health Check |
| Endpoint | GET /ping |
| Priority | Medium |
| Test Type | Performance |
| Related Requirement | REQ-PING-004 |

### Objective

Verify that the Health Check endpoint responds within an acceptable response time under normal testing conditions.

---

# 5. Sprint Progress

| Sprint | Scenarios | Completed |
|---------|-----------|-----------|
| Sprint 1 | 4 | 0 / 4 |

---

## Revision History

| Version | Description |
|----------|-------------|
| 1.0 | Initial Sprint 1 scenarios |