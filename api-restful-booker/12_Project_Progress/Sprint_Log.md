# Project Progress

**Project:** Restful Booker API Testing Project  
**Document Type:** Project Progress  
**Version:** 3.0  
**Prepared by:** Filip Jelinek

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Project Roadmap](#2-project-roadmap)
- [3. Overall Progress](#3-overall-progress)
- [4. Sprint Overview](#4-sprint-overview)
- [5. Skills Acquired](#5-skills-acquired)
- [6. Sprint Log](#6-sprint-log)
- [7. Next Milestones](#7-next-milestones)

---

# 1. Purpose

This document records the development progress of the Restful Booker API Testing Project.

It serves as a project journal documenting the completion of each sprint, newly acquired technical skills, documentation updates, implementation progress, and future objectives.

The purpose is to provide a chronological overview of the project's evolution from the initial Health Check endpoint to a complete API testing portfolio.

---

# 2. Project Roadmap

| Sprint | Module | Status | Progress |
|---------|---------------------------|--------|----------|
| Sprint 1 | Health Check | ✅ Completed | 100% |
| Sprint 2 | Authentication | ✅ Completed | 100% |
| Sprint 3 | Retrieve Booking IDs | ⏳ Planned | 0% |
| Sprint 4 | Retrieve Booking | ⏳ Planned | 0% |
| Sprint 5 | Create Booking | ⏳ Planned | 0% |
| Sprint 6 | Update Booking | ⏳ Planned | 0% |
| Sprint 7 | Partial Update Booking | ⏳ Planned | 0% |
| Sprint 8 | Delete Booking | ⏳ Planned | 0% |
| Sprint 9 | End-to-End Workflow | ⏳ Planned | 0% |

---

# 3. Overall Progress

| Area | Status |
|------|--------|
| Project Documentation | ✅ Completed |
| API Analysis | ✅ Completed |
| Test Scenarios | ✅ Completed |
| Test Cases | ✅ Completed |
| Postman Collection | ✅ Completed |
| Test Execution | ✅ Completed |
| Test Evidence | ✅ Completed |
| Authentication Testing | ✅ Completed |
| Bug Reports | ⏳ Planned |
| JSON Schema Validation | ⏳ Planned |
| Newman CLI | ⏳ Planned |
| CI/CD Pipeline | ⏳ Planned |

---

# 4. Sprint Overview

| Sprint | Main Topics | Documentation | Evidence | Git |
|---------|-------------|---------------|----------|-----|
| Sprint 1 | Health Check, REST Fundamentals, Postman, API Assertions | ✅ | ✅ | ✅ |
| Sprint 2 | Authentication, Token Generation, Negative Testing, Input Validation | ✅ | ✅ | ✅ |
| Sprint 3 | Retrieve Booking IDs | ⏳ | ⏳ | ⏳ |
| Sprint 4 | Retrieve Booking | ⏳ | ⏳ | ⏳ |
| Sprint 5 | Create Booking | ⏳ | ⏳ | ⏳ |
| Sprint 6 | Update Booking | ⏳ | ⏳ | ⏳ |
| Sprint 7 | Partial Update Booking | ⏳ | ⏳ | ⏳ |
| Sprint 8 | Delete Booking | ⏳ | ⏳ | ⏳ |
| Sprint 9 | End-to-End Workflow | ⏳ | ⏳ | ⏳ |

---

# 5. Skills Acquired

| Skill | Status |
|--------|--------|
| REST API Fundamentals | ✅ |
| HTTP Methods | ✅ |
| API Endpoints | ✅ |
| Request & Response Validation | ✅ |
| Postman Collections | ✅ |
| Postman Test Scripts | ✅ |
| Environment Variables | ✅ |
| API Contract Validation | ✅ |
| Negative Testing | ✅ |
| Authentication | ✅ |
| Token Management | ✅ |
| Input Validation Testing | ✅ |
| Boundary Value Testing | ✅ |
| Data Type Validation | ✅ |
| CRUD Operations | ⏳ |
| JSON Schema Validation | ⏳ |
| Newman CLI | ⏳ |
| CI/CD Integration | ⏳ |

---

# 6. Sprint Log

---

# Sprint 1 – Health Check

**Completion Date:** 19 July 2026

### Goal

Build the foundation for the API testing project by learning Postman, REST API concepts, and validating the Health Check endpoint.

---

### Knowledge Gained

- REST API fundamentals
- HTTP methods
- Base URLs and endpoints
- Request and response lifecycle
- HTTP status codes
- Response headers
- Response body validation
- Response time validation
- API contract validation
- Positive testing
- Negative testing
- Postman scripting
- Environment variables

---

### Test Scenarios Completed

- TS-PING-001 – Verify successful Health Check request (GET)
- TS-PING-002 – Verify Health Check response headers and response body
- TS-PING-003 – Verify unsupported HTTP methods are rejected

---

### Test Cases Executed

- TC-PING-001
- TC-PING-002
- TC-PING-003

Execution Result

- Total Test Cases: **3**
- Passed: **3**
- Failed: **0**
- Blocked: **0**

Pass Rate

**100%**

---

### Documentation Updated

- API Analysis
- API Test Scenario Standard
- API Test Scenarios
- API Test Case Standard
- API Test Cases
- API Test Execution Standard
- API Test Execution
- Test Evidence
- Project README

---

### Repository Updates

- Created Sprint 1 Postman Collection
- Implemented automated Postman assertions
- Added execution evidence
- Updated project documentation
- Published Sprint 1 to GitHub

---

### Lessons Learned

During Sprint 1 I learned how to approach API testing using a structured QA workflow.

Instead of validating only status codes, I learned to verify API contracts, document evidence, design reusable Test Cases, and maintain complete traceability between requirements, Test Scenarios, Test Cases, Postman requests, execution records, and documentation.

---

### Sprint Result

✅ Sprint 1 successfully completed.

---

# Sprint 2 – Authentication

**Completion Date:** 23 July 2026

### Goal

Validate the Authentication endpoint by performing positive and extensive negative testing while implementing reusable Postman automation and environment management.

---

### Knowledge Gained

- Authentication workflow
- Token generation
- Environment variables
- Automatic token storage
- Authentication request chaining
- JSON request body validation
- Data type validation
- Boundary value analysis
- Required field validation
- Negative API testing
- Defensive Postman scripting
- Reusable test scripts

---

### Test Scenarios Completed

- TS-AUTH-001 – Valid Authentication
- TS-AUTH-002 – Invalid Credentials
- TS-AUTH-003 – Required Fields Validation
- TS-AUTH-004 – Data Type Validation
- TS-AUTH-005 – Boundary Value Validation

---

### Test Cases Executed

- TC-AUTH-001 through TC-AUTH-022

Execution Result

- Total Test Cases: **22**
- Passed: **22**
- Failed: **0**
- Blocked: **0**

Pass Rate

**100%**

---

### Documentation Updated

- API Test Scenarios
- API Test Cases
- API Test Execution
- Authentication Documentation
- Test Evidence
- Sprint Progress
- Project Progress

---

### Repository Updates

- Created Authentication Postman Collection
- Implemented reusable Postman test scripts
- Configured automatic token management
- Added execution screenshots
- Updated repository documentation
- Published Sprint 2 to GitHub

---

### Lessons Learned

Sprint 2 introduced real-world authentication testing techniques.

I learned how to validate positive and negative authentication flows, design reusable Postman scripts, manage authentication tokens through environment variables, perform boundary value analysis, validate different JSON data types, and create comprehensive API documentation while maintaining a structured QA workflow.

---

### Sprint Result

✅ Sprint 2 successfully completed.

---

### Next Sprint

Sprint 3 – Retrieve Booking IDs

Planned topics

- GET requests
- Query parameters
- Response validation
- JSON arrays
- Filtering booking IDs
- Collection assertions

---

# 7. Next Milestones

Upcoming work includes

- Retrieve Booking IDs
- Retrieve Booking Details
- Create Booking
- Update Booking
- Partial Update Booking
- Delete Booking
- JSON Schema validation
- Newman CLI execution
- GitHub Actions CI/CD
- End-to-End API workflow
- Final portfolio review

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial version | Project progress tracking |
| 2.0 | Sprint 1 completed | Redesigned project journal, updated roadmap, completed Sprint 1 documentation, added lessons learned and future milestones |
| 3.0 | Sprint 2 completed | Added Authentication sprint, updated roadmap, progress tracking, acquired skills, execution statistics, documentation updates, repository changes, lessons learned and next milestones |