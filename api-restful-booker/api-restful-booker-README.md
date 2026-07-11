# 🏨 Restful Booker API Testing Project

A comprehensive REST API testing project focused on validating the functionality, reliability, data integrity, and API contract of a hotel booking system.

The objective of this project is to demonstrate professional API testing techniques using **Postman**, **JavaScript**, **JSON Schema validation**, **Newman**, and **GitHub Actions**.

The project covers the complete API testing lifecycle, including API analysis, test planning, test scenario design, test case creation, manual API execution, automated response validation, negative testing, boundary value testing, authentication testing, CRUD operations, request chaining, schema validation, command-line test execution, and CI/CD integration.

**API Under Test:** Restful Booker API
**API Type:** REST API
**Data Format:** JSON
**Project Type:** API Testing Portfolio Project
**Testing Approach:** Manual and Automated API Testing
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Project Overview](#1-project-overview)
* [2. Project Objectives](#2-project-objectives)
* [3. API Under Test](#3-api-under-test)
* [4. Testing Scope](#4-testing-scope)
* [5. Testing Types](#5-testing-types)
* [6. Tools and Technologies](#6-tools-and-technologies)
* [7. API Methods Covered](#7-api-methods-covered)
* [8. API Test Architecture](#8-api-test-architecture)
* [9. Postman Collection Structure](#9-postman-collection-structure)
* [10. Automated API Validation](#10-automated-api-validation)
* [11. Dynamic Variables and Request Chaining](#11-dynamic-variables-and-request-chaining)
* [12. JSON Schema Validation](#12-json-schema-validation)
* [13. Negative and Boundary Testing](#13-negative-and-boundary-testing)
* [14. End-to-End API Workflows](#14-end-to-end-api-workflows)
* [15. Test Execution and Evidence](#15-test-execution-and-evidence)
* [16. Newman CLI Execution](#16-newman-cli-execution)
* [17. CI/CD Integration](#17-cicd-integration)
* [18. Project Structure](#18-project-structure)
* [19. Skills Demonstrated](#19-skills-demonstrated)
* [20. Project Status](#20-project-status)

---

# Project Documentation Navigation

| Section                  | Documentation                                                             |
| ------------------------ | ------------------------------------------------------------------------- |
| 📋 Project Documentation | [API Test Plan](01_Project_Documentation/API_Test_Plan.md)                |
| 📋 Project Documentation | [API Test Strategy](01_Project_Documentation/API_Test_Strategy.md)        |
| 🔍 API Analysis          | [API Requirements Analysis](02_API_Analysis/API_Requirements_Analysis.md) |
| 🔍 API Analysis          | [Endpoint Inventory](02_API_Analysis/Endpoint_Inventory.md)               |
| 🧪 Test Design           | [API Test Scenarios](03_Test_Scenarios/API_Test_Scenarios.md)             |
| 📝 Test Cases            | [API Test Cases](04_Test_Cases/API_Test_Cases.md)                         |
| 📮 Postman               | [Postman Collection](05_Postman/Collection.md/)                              |
| 🌍 Postman               | [Postman Environment](05_Postman/Environment.md/)                            |
| 📊 Test Execution        | [API Test Execution](06_Test_Execution/API_Test_Execution.md)             |
| 🐞 Defects               | [Bug Reports](07_Bug_Reports/)                                            |
| 📐 Schema Validation     | [JSON Schemas](08_JSON_Schema/)                                           |
| ⚙️ CLI Execution         | [Newman](09_Newman/)                                                      |
| 📸 Test Evidence         | [Test Evidence](10_Test_Evidence/)                                        |
| 🔄 CI/CD                 | [GitHub Actions](11_CI_CD/)                                               |

> **Note:** Project documentation is developed progressively based on API analysis, test design, and actual test execution. Test results and defects are documented only after they are observed during testing.

---

# 1. Project Overview

The **Restful Booker API Testing Project** is a dedicated API testing portfolio project designed to demonstrate practical REST API testing skills.

The project focuses on testing a hotel booking API that provides endpoints for authentication and booking management.

Unlike UI-focused testing projects, this project concentrates on direct communication between a client and an API server.

The API is tested by sending HTTP requests and validating server responses, including:

* HTTP status codes
* Response bodies
* Response headers
* JSON data structures
* Data types
* Required fields
* Response values
* Authentication behaviour
* Error handling
* API response time
* API contract consistency

The project combines **manual API exploration** with **automated API assertions** written in JavaScript.

---

# 2. Project Objectives

The primary objectives of this project are to:

* Analyse REST API documentation and identify available endpoints
* Understand the API request and response structure
* Design API-focused test scenarios and test cases
* Validate CRUD operations
* Test API authentication and authorization behaviour
* Perform positive and negative API testing
* Apply Boundary Value Analysis
* Apply Equivalence Partitioning
* Validate HTTP status codes
* Validate response headers
* Validate JSON response bodies
* Validate API response data types
* Implement automated Postman assertions
* Use dynamic Postman variables
* Extract data from API responses
* Chain dependent API requests
* Validate API responses against JSON Schemas
* Execute API tests from the command line using Newman
* Integrate automated API tests into GitHub Actions
* Document actual API defects and inconsistencies
* Create a professional API testing portfolio project

---

# 3. API Under Test

The application under test is the **Restful Booker API**.

Restful Booker is a REST API designed for API testing practice.

The API provides functionality for:

* API health checking
* Authentication token creation
* Booking creation
* Booking retrieval
* Booking filtering
* Full booking updates
* Partial booking updates
* Booking deletion

The API communicates primarily using JSON request and response payloads.

### Base URL

```text
https://restful-booker.herokuapp.com
```

### Main API Resources

```text
/ping
/auth
/booking
/booking/{id}
```

The API documentation is used as the initial API contract and reference during test analysis.

Actual API behaviour is verified independently through test execution.

---

# 4. Testing Scope

The project covers the following API areas:

### Health Check

Validation of API availability and health-check behaviour.

### Authentication

Validation of authentication token creation and authentication-related error handling.

### Booking Retrieval

Validation of booking retrieval by booking ID and booking filtering.

### Booking Creation

Validation of new booking creation using valid and invalid request payloads.

### Full Booking Update

Validation of complete booking updates using the PUT HTTP method.

### Partial Booking Update

Validation of selected booking field updates using the PATCH HTTP method.

### Booking Deletion

Validation of booking deletion and post-deletion resource behaviour.

### API Validation

Validation of:

* Status codes
* Headers
* Response bodies
* JSON structure
* Data types
* Response values
* Response time

### Negative Testing

Validation of API behaviour when receiving invalid, incomplete, malformed, or unauthorized requests.

### Boundary Testing

Validation of API behaviour around numeric, string, and date boundaries.

### End-to-End API Testing

Validation of complete booking workflows across multiple dependent API requests.

---

# 5. Testing Types

The following testing types and techniques are included in the project:

| Testing Type                 | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Functional API Testing       | Verify API functionality against expected behaviour                  |
| CRUD Testing                 | Validate Create, Read, Update, and Delete operations                 |
| Positive Testing             | Validate API behaviour with valid input data                         |
| Negative Testing             | Validate API behaviour with invalid input data                       |
| Authentication Testing       | Validate token creation and protected operations                     |
| Authorization Testing        | Verify access behaviour with valid, invalid, and missing credentials |
| Boundary Value Analysis      | Test values at and around input boundaries                           |
| Equivalence Partitioning     | Divide input data into valid and invalid classes                     |
| Data Validation              | Validate response values and data consistency                        |
| Data Type Validation         | Verify expected JSON data types                                      |
| Header Validation            | Validate HTTP response headers                                       |
| Status Code Validation       | Verify HTTP response status codes                                    |
| JSON Schema Validation       | Validate API response structure against defined schemas              |
| Query Parameter Testing      | Validate API filtering and query behaviour                           |
| Error Handling Testing       | Analyse API responses to invalid requests                            |
| End-to-End API Testing       | Validate complete multi-request workflows                            |
| Basic Performance Validation | Validate API response time thresholds                                |
| Automated API Testing        | Execute JavaScript assertions in Postman                             |
| Regression Testing           | Re-execute API test suites after changes                             |
| CI/CD Test Execution         | Execute automated API tests through GitHub Actions                   |

---

# 6. Tools and Technologies

| Tool / Technology | Usage                                                     |
| ----------------- | --------------------------------------------------------- |
| Postman           | API request creation, execution, and automated validation |
| JavaScript        | Post-response test scripts and dynamic data handling      |
| JSON              | API request and response data                             |
| JSON Schema       | API response contract validation                          |
| Newman            | Command-line Postman collection execution                 |
| Node.js           | Runtime environment for Newman                            |
| Git               | Version control                                           |
| GitHub            | Project repository and documentation                      |
| GitHub Actions    | CI/CD API test execution                                  |
| Markdown          | QA documentation                                          |

---

# 7. API Methods Covered

The project covers the main HTTP methods used by the Restful Booker API.

| HTTP Method | Purpose                                   |
| ----------- | ----------------------------------------- |
| GET         | Retrieve API resources                    |
| POST        | Create resources or authentication tokens |
| PUT         | Fully update an existing resource         |
| PATCH       | Partially update an existing resource     |
| DELETE      | Delete an existing resource               |

### CRUD Mapping

| CRUD Operation | HTTP Method |
| -------------- | ----------- |
| Create         | POST        |
| Read           | GET         |
| Update         | PUT / PATCH |
| Delete         | DELETE      |

The project validates both the functional behaviour and response contract of these operations.

---

# 8. API Test Architecture

The API testing process follows a structured workflow:

```text
API Documentation Analysis
        ↓
Endpoint Identification
        ↓
API Requirements Analysis
        ↓
Test Scenario Design
        ↓
Test Case Creation
        ↓
Postman Request Implementation
        ↓
Manual API Execution
        ↓
Automated Assertion Implementation
        ↓
Negative and Boundary Testing
        ↓
Defect Investigation
        ↓
Test Evidence Collection
        ↓
Newman CLI Execution
        ↓
CI/CD Integration
        ↓
Final Test Summary
```

This approach separates **test design**, **test implementation**, and **test execution**.

Test results are based on actual API responses observed during execution.

---

# 9. Postman Collection Structure

The Postman collection is organized by API functionality and testing purpose.

```text
Restful Booker API Testing
│
├── 00 - Health Check
│
├── 01 - Authentication
│
├── 02 - Booking - GET
│
├── 03 - Booking - POST
│
├── 04 - Booking - PUT
│
├── 05 - Booking - PATCH
│
├── 06 - Booking - DELETE
│
├── 07 - Negative Testing
│
├── 08 - Boundary Testing
│
└── 09 - E2E Workflows
```

Each folder contains API requests related to a specific testing area.

Post-response scripts are used to automatically validate API behaviour.

---

# 10. Automated API Validation

Postman JavaScript test scripts are used to automatically validate API responses.

Automated assertions include:

* Status code validation
* Response time validation
* Content-Type validation
* Response body validation
* Property existence validation
* Data type validation
* Response value validation
* Header validation
* JSON Schema validation
* Dynamic variable validation

Example validation areas:

```text
HTTP status code is correct
Response time is within the defined threshold
Content-Type contains application/json
Required JSON properties are present
Returned data types match the API contract
Response values match the submitted request data
Authentication token is returned
Booking ID is dynamically generated
Deleted resources are no longer retrievable
```

The objective is to move beyond manually reviewing API responses and create repeatable automated API checks.

---

# 11. Dynamic Variables and Request Chaining

Postman environment variables are used to store and reuse dynamic values.

Planned environment variables include:

```text
baseUrl
authToken
bookingId
firstname
lastname
```

Dynamic values are extracted from API responses using JavaScript.

### Authentication Flow

```text
POST /auth
      ↓
Receive authentication token
      ↓
Extract token
      ↓
Store token as authToken
      ↓
Reuse token in protected API requests
```

### Booking Flow

```text
POST /booking
      ↓
Create booking
      ↓
Receive booking ID
      ↓
Extract booking ID
      ↓
Store ID as bookingId
      ↓
Reuse bookingId in GET, PUT, PATCH, and DELETE requests
```

Request chaining reduces manual data handling and enables automated API workflows.

---

# 12. JSON Schema Validation

JSON Schema validation is used to verify that API responses follow the expected structural contract.

Schema validation focuses on:

* Required properties
* JSON object structure
* Nested object structure
* Data types
* Boolean values
* Numeric values
* String values

Example booking properties include:

```text
firstname
lastname
totalprice
depositpaid
bookingdates
additionalneeds
```

The `bookingdates` object contains nested properties:

```text
checkin
checkout
```

JSON Schema validation helps identify unexpected changes to the API response contract.

---

# 13. Negative and Boundary Testing

Negative testing is a major focus of this project.

The API is tested using invalid and unexpected input data.

### Negative Test Areas

* Missing required fields
* Empty request body
* Empty JSON object
* Null values
* Empty strings
* Incorrect data types
* Malformed JSON
* Invalid booking IDs
* Non-existing booking IDs
* Invalid authentication tokens
* Missing authentication tokens
* Invalid credentials
* Missing headers
* Incorrect Content-Type
* Unsupported HTTP methods
* Unexpected JSON properties
* Invalid date formats
* Invalid logical date combinations

### Boundary Test Areas

Numeric values:

```text
Negative values
Zero
Minimum positive values
Large values
Very large values
```

String values:

```text
Empty string
Single character
Long string
Very long string
Special characters
Unicode characters
```

Date values:

```text
Past dates
Current date
Future dates
Leap-year dates
Invalid leap-year dates
Check-in equals checkout
Checkout before check-in
```

Boundary Value Analysis and Equivalence Partitioning are used when designing test data.

---

# 14. End-to-End API Workflows

The project includes complete API workflows that combine multiple dependent requests.

### Booking Lifecycle Workflow

```text
Create Authentication Token
        ↓
Create Booking
        ↓
Extract Booking ID
        ↓
Retrieve Created Booking
        ↓
Validate Booking Data
        ↓
Fully Update Booking
        ↓
Validate Updated Data
        ↓
Partially Update Booking
        ↓
Validate Partial Update
        ↓
Delete Booking
        ↓
Verify Booking Is Deleted
```

The workflow validates data consistency across the complete booking lifecycle.

Additional end-to-end workflows may be added based on API behaviour identified during testing.

---

# 15. Test Execution and Evidence

API test execution results are documented in the project test execution documentation.

Execution records include:

* Test Case ID
* Test Case Title
* Expected Result
* Actual Result
* Test Status
* Related Defect ID
* Test Evidence

Test statuses include:

```text
PASS
FAIL
BLOCKED
NOT EXECUTED
```

Test evidence may include:

* Postman request screenshots
* Postman response screenshots
* Automated assertion results
* Error responses
* Response payloads
* Newman execution reports
* GitHub Actions execution results

Only actual observed test results are documented.

---

# 16. Newman CLI Execution

Newman is used to execute the Postman collection from the command line.

This allows the API test suite to run without manually opening Postman.

The planned execution workflow is:

```text
Export Postman Collection
        ↓
Export Postman Environment
        ↓
Install Newman
        ↓
Execute Collection from CLI
        ↓
Review Test Results
        ↓
Generate Execution Report
```

Newman execution provides repeatable automated API test execution and prepares the project for CI/CD integration.

---

# 17. CI/CD Integration

GitHub Actions is used to integrate the automated API tests into a CI/CD workflow.

The planned pipeline is:

```text
Code Push / Pull Request
        ↓
GitHub Actions Workflow Triggered
        ↓
Set Up Node.js
        ↓
Install Newman
        ↓
Execute Postman Collection
        ↓
Run Automated API Assertions
        ↓
Report PASS / FAIL Result
```

The CI/CD workflow demonstrates how API regression tests can be automatically executed as part of a development pipeline.

Sensitive or environment-specific values should not be hardcoded into the repository when secret management is required.

---

# 18. Project Structure

```text
api-restful-booker/
│
├── README.md
│
├── 01_Project_Documentation/
│   ├── API_Test_Plan.md
│   └── API_Test_Strategy.md
│
├── 02_API_Analysis/
│   ├── API_Requirements_Analysis.md
│   └── Endpoint_Inventory.md
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

The repository structure separates test planning, API analysis, test design, implementation, execution, defects, evidence, and automation components.

---

# 19. Skills Demonstrated

This project demonstrates practical knowledge of:

### API Testing

* REST API testing
* HTTP methods
* HTTP status codes
* API endpoints
* Request and response analysis
* Request headers
* Response headers
* JSON request bodies
* JSON response bodies
* Query parameters
* Path parameters

### Test Design

* API test scenario creation
* API test case design
* Positive testing
* Negative testing
* Boundary Value Analysis
* Equivalence Partitioning
* End-to-end workflow testing

### Postman

* Collection organization
* Environment management
* Environment variables
* Dynamic variables
* JavaScript assertions
* Response parsing
* Variable extraction
* Request chaining
* Automated response validation

### API Contract Validation

* JSON structure validation
* Data type validation
* Required property validation
* JSON Schema validation

### Test Automation and CI/CD

* Newman CLI
* Automated collection execution
* Node.js tooling
* GitHub Actions
* CI/CD API test execution

### QA Documentation

* API Test Plan
* API Test Strategy
* API Requirements Analysis
* Endpoint Inventory
* Test Scenarios
* Test Cases
* Test Execution
* Bug Reports
* Test Evidence

---

# 20. Project Status

🚧 **Project In Progress**

The project is being developed incrementally through actual API analysis and test execution.

Current planned project phases:

```text
Phase 1  - Project Setup
Phase 2  - API Analysis
Phase 3  - Test Planning
Phase 4  - Test Scenario Design
Phase 5  - Test Case Design
Phase 6  - Postman Collection Implementation
Phase 7  - API Test Execution
Phase 8  - Negative and Boundary Testing
Phase 9  - JSON Schema Validation
Phase 10 - End-to-End Workflow Testing
Phase 11 - Newman CLI Execution
Phase 12 - GitHub Actions Integration
Phase 13 - Final Test Summary
```

Test execution statistics and defect metrics will be added after the API test suite has been executed.

---

## Author

**Filip Jelinek**

QA Manual Tester | API Testing | Postman | Software Quality Assurance

This project is part of my QA testing portfolio and demonstrates practical API testing, test design, automated response validation, and QA documentation skills.
