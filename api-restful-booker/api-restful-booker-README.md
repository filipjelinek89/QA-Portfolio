# 🏨 Restful Booker API Testing Project

A comprehensive API testing project focused on validating a RESTful hotel booking API.

The objective of this project is to demonstrate practical API testing skills using **Postman**, **JavaScript**, and structured QA documentation while testing authentication, booking management, CRUD operations, request and response validation, negative scenarios, boundary conditions, and end-to-end API workflows.

This project is designed as a hands-on API testing portfolio project where test documentation, automated assertions, execution results, and defect reports are created based on actual API behaviour observed during testing.

---

## 📋 Project Information

**Application:** Restful Booker API
**API Type:** REST API
**Domain:** Hotel Booking
**Project Type:** API Testing Portfolio Project
**Testing Approach:** Manual API Testing and Automated API Assertions
**API Documentation:** Restful Booker API Documentation

---

## 🎯 Project Objectives

The main objectives of this project are to:

* Analyse REST API documentation and available endpoints
* Understand API resources, methods, parameters, headers, and request bodies
* Design structured API test scenarios and test cases
* Validate HTTP methods including GET, POST, PUT, PATCH, and DELETE
* Test authentication and protected API operations
* Validate HTTP status codes and response behaviour
* Verify JSON response data and data types
* Validate response headers and Content-Type
* Perform positive and negative API testing
* Apply boundary value analysis to API input data
* Test invalid, missing, null, and malformed request data
* Use Postman environment variables for reusable test data
* Extract dynamic values from API responses
* Chain API requests using dynamically generated data
* Create automated API assertions using JavaScript
* Perform JSON Schema validation
* Execute API collections from the command line using Newman
* Integrate automated API test execution into a CI/CD workflow
* Document actual test execution results and identified defects

---

## 🧪 Testing Scope

The project focuses on the following API testing areas:

### Functional API Testing

Validation of documented API functionality and expected endpoint behaviour.

### CRUD Testing

Testing the complete booking resource lifecycle:

* Create a booking
* Retrieve a booking
* Update a complete booking
* Partially update a booking
* Delete a booking
* Verify the deleted resource

### Authentication Testing

Validation of authentication behaviour including:

* Valid credentials
* Invalid username
* Invalid password
* Empty credentials
* Missing authentication data
* Invalid authentication token
* Missing authentication token
* Protected endpoint access

### Positive Testing

Validation of API behaviour using valid requests and supported input data.

### Negative Testing

Validation of API behaviour using:

* Invalid values
* Missing fields
* Null values
* Empty values
* Incorrect data types
* Malformed JSON
* Invalid resource identifiers
* Unsupported request data

### Boundary Value Testing

Testing input values at and around identified boundaries, including:

* Numeric values
* String lengths
* Date values
* Large input values
* Zero and negative values

### Response Validation

Validation of:

* HTTP status codes
* Response body
* JSON structure
* Response values
* Data types
* Response headers
* Content-Type
* Response time

### JSON Schema Validation

Validation of API responses against defined JSON Schemas to verify the expected response structure and data types.

### End-to-End API Workflow Testing

Validation of complete API workflows using chained requests and dynamically stored variables.

Example workflow:

```text
Authenticate
    ↓
Create Booking
    ↓
Extract Booking ID
    ↓
Retrieve Booking
    ↓
Update Booking
    ↓
Partially Update Booking
    ↓
Delete Booking
    ↓
Verify Booking Deletion
```

---

## 🔗 API Methods Covered

| HTTP Method | Purpose                               |
| ----------- | ------------------------------------- |
| GET         | Retrieve API resources                |
| POST        | Create resources and authenticate     |
| PUT         | Fully update an existing resource     |
| PATCH       | Partially update an existing resource |
| DELETE      | Remove an existing resource           |

---

## 🛠️ Tools and Technologies

| Tool / Technology | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| Postman           | API request execution and test automation      |
| JavaScript        | Automated API assertions and dynamic scripting |
| JSON              | Request and response data validation           |
| JSON Schema       | API response structure validation              |
| Newman            | Command-line Postman collection execution      |
| GitHub            | Version control and project documentation      |
| GitHub Actions    | Automated API test execution in CI/CD          |

---

## 📁 Project Structure

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

---

## 🌐 API Endpoints

The project covers the main Restful Booker API resources.

| Resource       | Method | Endpoint        | Purpose                          |
| -------------- | ------ | --------------- | -------------------------------- |
| Health Check   | GET    | `/ping`         | Verify API availability          |
| Authentication | POST   | `/auth`         | Generate an authentication token |
| Booking        | GET    | `/booking`      | Retrieve booking IDs             |
| Booking        | GET    | `/booking/{id}` | Retrieve a booking by ID         |
| Booking        | POST   | `/booking`      | Create a new booking             |
| Booking        | PUT    | `/booking/{id}` | Fully update a booking           |
| Booking        | PATCH  | `/booking/{id}` | Partially update a booking       |
| Booking        | DELETE | `/booking/{id}` | Delete a booking                 |

---

## 🔐 Authentication

The API provides token-based authentication for protected booking operations.

The authentication workflow tested in this project is:

```text
Send Authentication Request
        ↓
Receive Authentication Token
        ↓
Extract Token from JSON Response
        ↓
Store Token in Postman Environment
        ↓
Reuse Token in Protected Requests
```

The authentication token is dynamically extracted using a Postman post-response script and stored as an environment variable.

Example variable:

```text
{{authToken}}
```

---

## 🔄 Dynamic Variables and Request Chaining

Postman environment variables are used to store and reuse dynamic API data.

Planned variables include:

```text
{{baseUrl}}
{{authToken}}
{{bookingId}}
{{firstname}}
{{lastname}}
```

For example, after creating a booking:

```text
POST /booking
        ↓
API returns bookingId
        ↓
JavaScript extracts bookingId
        ↓
bookingId stored as environment variable
        ↓
GET /booking/{{bookingId}}
```

This allows API requests to be dynamically chained without manually copying resource identifiers between requests.

---

## 🤖 Automated API Assertions

Postman JavaScript test scripts are used to automatically validate API responses.

The project covers assertions for:

* HTTP status codes
* Response time
* Response headers
* Content-Type
* JSON response structure
* Response values
* Data types
* Required properties
* Authentication tokens
* Dynamically generated booking IDs
* Request and response data consistency
* JSON Schema compliance

Example assertion:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Example data type validation:

```javascript
pm.test("Total price is a number", function () {
    const response = pm.response.json();

    pm.expect(response.totalprice).to.be.a("number");
});
```

---

## 📐 Test Design Techniques

The following test design techniques are applied during API test design:

* Equivalence Partitioning
* Boundary Value Analysis
* Positive Testing
* Negative Testing
* Error Guessing
* State Transition Testing
* End-to-End Workflow Testing

Test cases are created based on API documentation, endpoint behaviour, input parameters, authentication requirements, and actual observations during test execution.

---

## ⚠️ Defect Reporting

Defects identified during API testing are documented based on actual reproducible API behaviour.

Each defect report may include:

* Bug ID
* Title
* Severity
* Priority
* Environment
* Related endpoint
* HTTP method
* Preconditions
* Request URL
* Request headers
* Request body
* Steps to reproduce
* Expected result
* Actual result
* HTTP status code
* Response body
* Reproducibility
* Test evidence

No fictional defects are intentionally added to the project.

Differences between documented API behaviour and actual observed behaviour may also be documented as API documentation inconsistencies where applicable.

---

## 📊 Test Execution

API test execution results will be documented after the designed test cases are executed.

The execution report will include:

* Total test cases
* Executed test cases
* Passed test cases
* Failed test cases
* Blocked test cases
* Pass rate
* Fail rate
* Defect references

All execution results are based on actual API test runs.

---

## 🖥️ Newman CLI Execution

The Postman collection will be executed from the command line using Newman.

This allows the API test suite to run without manually executing requests through the Postman graphical interface.

The Newman execution will include:

* Postman collection execution
* Environment configuration
* Automated assertion execution
* Command-line test results
* Test execution reporting

---

## 🔁 CI/CD Integration

Automated API test execution will be integrated with GitHub Actions.

The planned workflow is:

```text
Code Push / Workflow Trigger
            ↓
GitHub Actions Starts
            ↓
Node.js Environment Setup
            ↓
Newman Installation
            ↓
Postman Collection Execution
            ↓
Automated Assertions Executed
            ↓
Workflow Pass / Fail Result
```

This demonstrates basic CI/CD integration of automated API tests.

---

## 📸 Test Evidence

Test evidence is organised by API operation and testing area.

Evidence may include:

* Postman request screenshots
* API response screenshots
* Authentication results
* Positive test results
* Negative test results
* Validation failures
* Error responses
* Schema validation results
* Newman execution results
* CI/CD execution results

Evidence is collected from actual test execution.

---

## 🚧 Project Status

**Status:** In Progress

The project is being developed and executed incrementally.

Current and planned project phases:

1. Project setup and documentation
2. API documentation analysis
3. Endpoint inventory
4. Test scenario design
5. API test case design
6. Postman collection development
7. Functional and CRUD testing
8. Authentication testing
9. Negative and boundary testing
10. Automated Postman assertions
11. JSON Schema validation
12. End-to-end workflow testing
13. Test execution documentation
14. Defect reporting
15. Newman CLI execution
16. GitHub Actions CI/CD integration
17. Final test summary and project review

The repository will be updated as testing progresses.

---

## 👤 Author

**Filip Jelinek**

QA Tester focused on manual and API testing, with practical portfolio experience in structured test documentation, test case design, defect reporting, API validation, and QA processes.

This project is part of my QA testing portfolio and demonstrates my ongoing development in API testing and test automation.

