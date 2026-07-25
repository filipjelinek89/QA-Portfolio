# 🏨 Restful Booker API Testing Portfolio

## Project Overview

This repository contains a complete API testing portfolio project built around the **Restful Booker API**. The project demonstrates a structured QA workflow covering API analysis, test design, manual execution, automated validation, reporting, and CI/CD.

Unlike a tutorial project, every document and test artifact was created progressively during implementation.

**Project Status:** ✅ Functional Portfolio Project

| Item | Status |
|------|--------|
| API Analysis | ✅ Complete |
| Test Plan & Strategy | ✅ Complete |
| Test Scenarios | ✅ Complete |
| Test Cases | ✅ Complete |
| Manual API Testing | ✅ Complete |
| Postman Automation | ✅ Complete |
| JavaScript Assertions | ✅ Complete |
| Request Chaining | ✅ Complete |
| JSON Schema Validation | ✅ Complete |
| Newman CLI | ✅ Complete |
| HTML / JSON / JUnit Reports | ✅ Complete |
| GitHub Actions CI/CD | ✅ Complete |

---

# Technology Stack

- Postman
- JavaScript
- JSON
- JSON Schema
- Newman
- Node.js
- Git
- GitHub
- GitHub Actions
- Markdown

---

# API Under Test

**API:** Restful Booker

Endpoints implemented in this project:

- GET /ping
- POST /auth
- GET /booking
- GET /booking/{id}
- POST /booking
- PUT /booking/{id}
- PATCH /booking/{id}
- DELETE /booking/{id}

---

# Repository Structure

```text
api-restful-booker/
│
├── 01_Project_Documentation/
├── 02_API_Analysis/
├── 03_Test_Scenarios/
├── 04_Test_Cases/
├── 05_Postman/
├── 06_Test_Execution/
├── 07_Bug_Reports/
├── 08_JSON_Schema/
├── 09_Newman/
├── 10_Test_Evidence/
├── 11_CI_CD/
└── 12_Project_Progress/
```

---

# Testing Scope

The project validates:

- API availability
- Authentication
- CRUD operations
- Response status codes
- Response headers
- Response body
- JSON structure
- Data types
- Request chaining
- JSON Schema validation
- End-to-end booking workflow
- Negative testing
- Boundary testing
- Basic response time validation

---

# Automation

Automation is implemented using a dedicated Postman collection.

Features include:

- JavaScript assertions
- Collection variables
- Dynamic booking ID extraction
- Authentication token reuse
- End-to-end workflow execution

The automation collection is self-contained and **does not require a Postman environment file**.

---

# Newman

The project can be executed from the command line using Newman.

Generated reports:

- HTML
- JSON
- JUnit XML

These reports are suitable for local execution and CI pipelines.

---

# GitHub Actions CI/CD

A GitHub Actions workflow automatically:

1. Checks out the repository
2. Installs Node.js
3. Installs Newman
4. Executes the Postman collection
5. Generates HTML, JSON and JUnit reports
6. Uploads reports as workflow artifacts

---

# Documentation

Repository includes:

- API Test Plan
- API Test Strategy
- API Requirements Analysis
- Endpoint Inventory
- Test Scenarios
- Test Cases
- Test Execution Report
- Bug Reports
- JSON Schemas
- Test Evidence

---

# Skills Demonstrated

## API Testing

- REST API testing
- CRUD validation
- Authentication testing
- Negative testing
- Boundary testing
- Response validation
- JSON validation

## Test Design

- Test planning
- Test scenarios
- Test cases
- Requirements analysis
- Defect documentation

## Automation

- Postman
- JavaScript assertions
- Request chaining
- Collection variables
- Newman CLI
- GitHub Actions CI/CD

---

# Current Results

Current automation workflow:

- 8 API requests
- 48 automated assertions
- 0 failed assertions
- Successful end-to-end execution
- Automated HTML, JSON and JUnit reporting
- Automated execution through GitHub Actions

---

# Future Improvements

Planned future enhancements:

- Additional negative test scenarios
- Expanded JSON Schema coverage
- Performance-focused API checks
- Integration into a larger QA portfolio

---

# Author

**Filip Jelinek**

QA Manual Testing • API Testing • Postman • Software Quality Assurance

This project demonstrates a complete API testing workflow from analysis and documentation through automation and CI/CD.
