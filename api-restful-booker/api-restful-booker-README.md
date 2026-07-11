# 🏨 Restful Booker API Testing Project

A comprehensive REST API testing project focused on validating the functionality, reliability, data integrity, and error handling of a hotel booking API.

The objective of this project is to demonstrate professional API testing techniques using **Postman**, **JavaScript assertions**, **JSON Schema validation**, **Newman CLI**, and **GitHub Actions**.

The project covers the complete API testing lifecycle, including API analysis, test planning, test design, manual request execution, automated response validation, negative testing, boundary testing, CRUD operations, authentication testing, end-to-end API workflows, defect reporting, and CI/CD test execution.

---

# 📑 In-page Navigation

* [1. Project Information](#1-project-information)
* [2. Project Objectives](#2-project-objectives)
* [3. Application Under Test](#3-application-under-test)
* [4. Testing Scope](#4-testing-scope)
* [5. API Operations Covered](#5-api-operations-covered)
* [6. Testing Types](#6-testing-types)
* [7. Tools and Technologies](#7-tools-and-technologies)
* [8. Project Structure](#8-project-structure)
* [9. API Test Workflow](#9-api-test-workflow)
* [10. Automated API Validation](#10-automated-api-validation)
* [11. Project Documentation Navigation](#11-project-documentation-navigation)
* [12. Test Execution Status](#12-test-execution-status)
* [13. Skills Demonstrated](#13-skills-demonstrated)
* [14. Project Status](#14-project-status)
* [15. Author](#15-author)

---

# 1. Project Information

| Item                    | Details                            |
| ----------------------- | ---------------------------------- |
| **Project Name**        | Restful Booker API Testing Project |
| **Application**         | Restful Booker                     |
| **Project Type**        | REST API Testing                   |
| **Testing Approach**    | Manual and Automated API Testing   |
| **API Architecture**    | REST                               |
| **Data Format**         | JSON                               |
| **Primary Tool**        | Postman                            |
| **Automation Language** | JavaScript                         |
| **CLI Test Runner**     | Newman                             |
| **CI/CD Platform**      | GitHub Actions                     |
| **Repository**          | api-restful-booker                 |
| **Project Status**      | In Progress                        |

---

# 2. Project Objectives

The main objective of this project is to demonstrate practical REST API testing skills through structured analysis, test design, execution, automation, and reporting.

The project focuses on:

* Understanding REST API architecture and HTTP communication
* Analysing API documentation and endpoint behaviour
* Designing API test scenarios and detailed test cases
* Testing CRUD operations
* Validating authentication and authorization behaviour
* Testing request headers, parameters, and JSON payloads
* Validating HTTP status codes
* Validating response bodies and returned data
* Performing positive and negative API testing
* Applying Boundary Value Analysis
* Applying Equivalence Partitioning
* Testing invalid and malformed requests
* Creating automated Postman assertions using JavaScript
* Using dynamic variables and request chaining
* Validating API responses against JSON Schemas
* Executing automated collections using Newman CLI
* Integrating API test execution into GitHub Actions
* Reporting actual defects discovered during testing
* Maintaining structured QA documentation and test evidence

The project is designed to simulate the responsibilities of a **Junior QA Engineer performing API testing on a REST-based backend system**.

---

# 3. Application Under Test

**Restful Booker** is a REST API designed for API testing practice.

The API provides hotel booking functionality and supports authentication and booking management operations.

The main API resources covered by this project are:

* Health Check
* Authentication
* Booking Retrieval
* Booking Creation
* Full Booking Update
* Partial Booking Update
* Booking Deletion

The API communicates primarily using JSON request and response payloads.

### Base URL

```text
https://restful-booker.herokuapp.com
```

### Main Resources

```text
/ping
/auth
/booking
/booking/{id}
```

---

# 4. Testing Scope

The project covers the following API areas:

### Health Check

Validation of API availability and health check behaviour.

### Authentication

Validation of token creation using valid and invalid authentication data.

### Booking Retrieval

Testing booking ID retrieval, individual booking retrieval, and query parameter filtering.

### Booking Creation

Testing valid and invalid booking creation requests.

### Full Booking Update

Testing complete booking resource updates using the PUT HTTP method.

### Partial Booking Update

Testing individual and multiple field updates using the PATCH HTTP method.

### Booking Deletion

Testing booking deletion and post-deletion resource validation.

### Negative Testing

Testing invalid requests, unsupported data, malformed payloads, missing fields, and invalid authentication.

### Boundary Testing

Testing numerical limits, string lengths, date values, and other input boundaries.

### End-to-End API Workflows

Testing complete booking lifecycles using dynamically generated booking IDs and authentication tokens.

---

# 5. API Operations Covered

The following HTTP methods are included in the project:

| HTTP Method | Purpose                                       |
| ----------- | --------------------------------------------- |
| **GET**     | Retrieve API resources and booking data       |
| **POST**    | Create authentication tokens and new bookings |
| **PUT**     | Fully update an existing booking              |
| **PATCH**   | Partially update an existing booking          |
| **DELETE**  | Delete an existing booking                    |

The project also validates:

* Base URLs
* API endpoints
* Path parameters
* Query parameters
* Request headers
* Content-Type
* Accept headers
* Authentication tokens
* Cookies
* Request bodies
* Response bodies
* HTTP status codes
* Response times
* JSON data types

---

# 6. Testing Types

The following testing techniques and API testing approaches are used:

* Functional API Testing
* REST API Testing
* CRUD Testing
* Authentication Testing
* Authorization Testing
* Positive Testing
* Negative Testing
* Boundary Value Analysis
* Equivalence Partitioning
* Data Validation
* Response Body Validation
* HTTP Status Code Validation
* Header Validation
* Content-Type Validation
* Query Parameter Testing
* Path Parameter Testing
* JSON Payload Validation
* JSON Schema Validation
* Data Type Validation
* Error Handling Validation
* Basic Response Time Validation
* Request Chaining
* Dynamic Variable Testing
* End-to-End API Workflow Testing
* Automated API Testing
* Regression Test Execution
* CI/CD API Test Execution

---

# 7. Tools and Technologies

| Tool / Technology  | Purpose                                       |
| ------------------ | --------------------------------------------- |
| **Postman**        | API request execution and test automation     |
| **JavaScript**     | Automated Postman assertions and scripting    |
| **JSON**           | API request and response data                 |
| **JSON Schema**    | API response structure validation             |
| **Newman**         | Command-line Postman collection execution     |
| **Node.js / npm**  | Newman installation and execution environment |
| **GitHub**         | Version control and project documentation     |
| **GitHub Actions** | Automated CI/CD API test execution            |
| **Markdown**       | QA documentation                              |
| **REST**           | API architecture under test                   |
| **HTTP / HTTPS**   | Client-server communication                   |

---

# 8. Project Structure

```text
api-restful-booker/
│
├── api-restful-booker-README.md
│
├── 01_Project_Documentation/
│   ├── API_Test_Plan.md
│   └── API_Test_Strategy.md
│
├── 02_API_Analysis/
│   ├── API_Requirements_Analysis.md
│   ├── Endpoint_Inventory.md
│   └── HTTP_Status_Code_Analysis.md
│
├── 03_Test_Scenarios/
│   └── API_Test_Scenarios.md
│
├── 04_Test_Cases/
│   └── API_Test_Cases.md
│
├── 05_Postman/
│   ├── Collection/
│   └── Environment/
│
├── 06_Test_Execution/
│   └── API_Test_Execution.md
│
├── 07_Bug_Reports/
│
├── 08_JSON_Schema/
│
├── 09_Newman/
│
├── 10_Test_Evidence/
│   ├── Authentication/
│   ├── GET/
│   ├── POST/
│   ├── PUT/
│   ├── PATCH/
│   ├── DELETE/
│   └── Negative_Testing/
│
└── 11_CI_CD/
```

The project structure separates API analysis, test design, Postman assets, execution results, defect reports, schemas, automated execution, test evidence, and CI/CD configuration.

---

# 9. API Test Workflow

The project follows a structured API testing workflow:

```text
API Documentation Review
        ↓
API Requirements Analysis
        ↓
Endpoint Identification
        ↓
HTTP Method Analysis
        ↓
Test Scenario Design
        ↓
Test Case Design
        ↓
Postman Request Creation
        ↓
Manual API Execution
        ↓
Response Analysis
        ↓
JavaScript Assertion Creation
        ↓
Negative and Boundary Testing
        ↓
Defect Identification
        ↓
Bug Reporting
        ↓
JSON Schema Validation
        ↓
End-to-End Workflow Testing
        ↓
Newman CLI Execution
        ↓
GitHub Actions Integration
        ↓
Final Test Execution Summary
```

Actual test results are documented only after requests are executed against the API.

Defects are reported based on reproducible API behaviour discovered during test execution.

---

# 10. Automated API Validation

Postman test scripts are used to automatically validate API responses.

The automated validation scope includes:

* HTTP status codes
* Response time
* Response headers
* Content-Type
* JSON response structure
* Required response properties
* Response values
* JSON data types
* Authentication token presence
* Booking ID generation
* Request and response data consistency
* JSON Schema compliance
* Deleted resource behaviour

Example validation areas:

```text
Status Code Validation
Response Time Validation
Content-Type Validation
Response Body Validation
Data Type Validation
Required Property Validation
Dynamic Variable Extraction
JSON Schema Validation
```

Dynamic Postman variables are used to store runtime data such as:

```text
{{baseUrl}}
{{authToken}}
{{bookingId}}
{{firstname}}
{{lastname}}
```

This allows API requests to be dynamically chained into complete end-to-end workflows.

Example workflow:

```text
Create Authentication Token
        ↓
Create Booking
        ↓
Extract Booking ID
        ↓
Retrieve Created Booking
        ↓
Update Booking
        ↓
Partially Update Booking
        ↓
Delete Booking
        ↓
Verify Booking Is Deleted
```

---

# 11. Project Documentation Navigation

The following documentation files provide detailed information about each stage of the API testing process.

## 01 — Project Documentation

* [API Test Plan](01_Project_Documentation/API_Test_Plan.md)
* [API Test Strategy](01_Project_Documentation/API_Test_Strategy.md)

## 02 — API Analysis

* [API Requirements Analysis](02_API_Analysis/API_Requirements_Analysis.md)
* [Endpoint Inventory](02_API_Analysis/Endpoint_Inventory.md)
* [HTTP Status Code Analysis](02_API_Analysis/HTTP_Status_Code_Analysis.md)

## 03 — Test Scenarios

* [API Test Scenarios](03_Test_Scenarios/API_Test_Scenarios.md)

## 04 — Test Cases

* [API Test Cases](04_Test_Cases/API_Test_Cases.md)

## 05 — Postman

The Postman directory contains exported API testing assets.

* Postman Collection
* Postman Environment

```text
05_Postman/
├── Collection/
└── Environment/
```

## 06 — Test Execution

* [API Test Execution](06_Test_Execution/API_Test_Execution.md)

## 07 — Bug Reports

The Bug Reports directory contains defects identified during actual API test execution.

```text
07_Bug_Reports/
```

Bug reports are created only for reproducible defects discovered during testing.

## 08 — JSON Schema

The JSON Schema directory contains schemas used for automated API response structure validation.

```text
08_JSON_Schema/
```

## 09 — Newman

The Newman directory contains command-line API test execution results and reports.

```text
09_Newman/
```

## 10 — Test Evidence

The Test Evidence directory contains execution evidence organised by API operation and testing area.

```text
10_Test_Evidence/
├── Authentication/
├── GET/
├── POST/
├── PUT/
├── PATCH/
├── DELETE/
└── Negative_Testing/
```

## 11 — CI/CD

The CI/CD directory contains configuration and documentation related to automated API test execution using GitHub Actions.

```text
11_CI_CD/
```

---

# 12. Test Execution Status

> 🚧 **API testing is currently in progress.**

Test execution statistics will be updated after the planned API test cases have been designed and executed.

| Metric              | Result |
| ------------------- | ------ |
| Total Test Cases    | TBD    |
| Executed Test Cases | TBD    |
| Passed              | TBD    |
| Failed              | TBD    |
| Blocked             | TBD    |
| Not Executed        | TBD    |

### Defect Status

| Metric                  | Result |
| ----------------------- | ------ |
| Total Defects Reported  | TBD    |
| Critical Defects        | TBD    |
| High Severity Defects   | TBD    |
| Medium Severity Defects | TBD    |
| Low Severity Defects    | TBD    |

No artificial or fictional defects are included in the project.

All reported defects must be based on actual, reproducible API behaviour observed during test execution.

---

# 13. Skills Demonstrated

This project demonstrates practical knowledge of:

### API Testing

* REST API architecture
* HTTP methods
* API endpoints
* Request and response structure
* JSON payloads
* HTTP status codes
* Request headers
* Path parameters
* Query parameters

### Test Design

* Test scenario creation
* Test case design
* Positive testing
* Negative testing
* Boundary Value Analysis
* Equivalence Partitioning
* Error handling validation

### Postman

* Collection organisation
* Environment configuration
* Environment variables
* Dynamic variables
* JavaScript test scripts
* Automated assertions
* Request chaining
* Token extraction
* Booking ID extraction
* Response validation

### API Automation

* JavaScript assertions
* JSON Schema validation
* Automated collection execution
* Newman CLI
* Regression execution

### CI/CD

* GitHub Actions
* Automated API test execution
* Pipeline-based test validation

### QA Documentation

* API Test Plan
* API Test Strategy
* API Requirements Analysis
* Endpoint Inventory
* HTTP Status Code Analysis
* Test Scenarios
* Test Cases
* Test Execution
* Bug Reports
* Test Evidence

---

# 14. Project Status

🚧 **In Progress**

The project is being developed and executed incrementally.

Current planned project phases:

```text
Phase 1  — Project Setup
Phase 2  — API Analysis
Phase 3  — Test Planning
Phase 4  — Test Scenario Design
Phase 5  — Test Case Design
Phase 6  — Postman Request Creation
Phase 7  — Functional API Testing
Phase 8  — Negative and Boundary Testing
Phase 9  — Automated Postman Assertions
Phase 10 — JSON Schema Validation
Phase 11 — End-to-End API Workflows
Phase 12 — Newman CLI Execution
Phase 13 — GitHub Actions Integration
Phase 14 — Final Test Execution Summary
```

The repository will be updated as API testing progresses and actual test execution results become available.

---

# 15. Author

**Filip Jelinek**

Junior QA / Manual Software Tester focused on practical software testing, API testing, structured QA documentation, and continuous development of test automation skills.

This project is part of my QA portfolio and demonstrates my practical approach to REST API testing, test design, defect investigation, and automated API validation.
