# CI_CD API Test Execution Template

**Project:** Restful Booker API Testing Project
**API:** Restful Booker
**CI/CD Platform:** GitHub Actions
**API Test Runner:** Newman
**Collection Tool:** Postman
**Version Control:** GitHub
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. CI/CD Testing Overview](#2-cicd-testing-overview)
* [3. Testing Objectives](#3-testing-objectives)
* [4. CI/CD Architecture](#4-cicd-architecture)
* [5. Project Requirements](#5-project-requirements)
* [6. Repository Structure](#6-repository-structure)
* [7. Postman Collection Preparation](#7-postman-collection-preparation)
* [8. Postman Environment Preparation](#8-postman-environment-preparation)
* [9. Newman Configuration](#9-newman-configuration)
* [10. GitHub Actions Workflow](#10-github-actions-workflow)
* [11. Workflow Trigger Configuration](#11-workflow-trigger-configuration)
* [12. Environment Variables and Secrets](#12-environment-variables-and-secrets)
* [13. API Test Execution](#13-api-test-execution)
* [14. Pipeline Validation](#14-pipeline-validation)
* [15. Failed Test Handling](#15-failed-test-handling)
* [16. Test Report Generation](#16-test-report-generation)
* [17. Artifact Management](#17-artifact-management)
* [18. CI/CD Negative Testing](#18-cicd-negative-testing)
* [19. Troubleshooting](#19-troubleshooting)
* [20. Test Execution Record](#20-test-execution-record)
* [21. Defect Reporting](#21-defect-reporting)
* [22. CI/CD Testing Checklist](#22-cicd-testing-checklist)

---

# 1. Purpose

The purpose of this document is to provide a reusable template for integrating automated API test execution into a **CI/CD pipeline**.

The Restful Booker Postman collection is executed using **Newman** within **GitHub Actions**.

The pipeline automatically runs API tests when configured repository events occur.

The CI/CD testing process verifies:

* Postman collection execution
* Newman command execution
* GitHub Actions workflow configuration
* Automated API test execution
* Environment variable handling
* Secret management
* Pipeline status reporting
* Failed test detection
* Test report generation
* Test artifact storage

The objective is to demonstrate how API tests can be automatically executed as part of a software delivery workflow.

---

# 2. CI/CD Testing Overview

CI/CD stands for:

```text
Continuous Integration
Continuous Delivery / Continuous Deployment
```

Continuous Integration automatically validates code or test changes when changes are added to a shared repository.

A typical API testing pipeline:

```text
Developer / QA
      │
      ▼
Git Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions Trigger
      │
      ▼
Create CI Runner
      │
      ▼
Install Node.js
      │
      ▼
Install Newman
      │
      ▼
Execute Postman Collection
      │
      ▼
Validate API Tests
      │
      ▼
Generate Test Report
      │
      ▼
Upload Test Artifact
      │
      ▼
PASS / FAIL Pipeline
```

The API test suite becomes part of the automated repository validation process.

---

# 3. Testing Objectives

The primary objectives of CI/CD API testing are to verify:

* API tests can run without manual Postman execution
* The Postman collection is compatible with Newman
* The CI environment can execute the API test suite
* Required environment variables are available
* Sensitive values are handled securely
* Failed Postman assertions fail the pipeline
* Successful tests produce a successful workflow
* Test reports are generated
* Test artifacts are available after execution
* Pipeline results are visible in GitHub Actions

The CI/CD pipeline should provide repeatable and consistent API test execution.

---

# 4. CI/CD Architecture

The project CI/CD architecture:

```text
Postman Collection
        │
        ▼
Export Collection JSON
        │
        ▼
GitHub Repository
        │
        ▼
GitHub Actions Workflow
        │
        ▼
Ubuntu CI Runner
        │
        ▼
Node.js Runtime
        │
        ▼
Newman
        │
        ▼
Restful Booker API
        │
        ▼
Postman Assertions
        │
        ▼
Newman Test Result
        │
        ├── PASS → Pipeline Success
        │
        └── FAIL → Pipeline Failure
```

Technology stack:

| Component       | Technology               |
| --------------- | ------------------------ |
| API Testing     | Postman                  |
| API Test Runner | Newman                   |
| Runtime         | Node.js                  |
| Version Control | Git                      |
| Repository      | GitHub                   |
| CI/CD Platform  | GitHub Actions           |
| Workflow Format | YAML                     |
| Test Collection | Postman Collection JSON  |
| Environment     | Postman Environment JSON |

---

# 5. Project Requirements

The CI/CD pipeline requires:

* GitHub repository
* Postman collection
* Postman environment file
* Newman-compatible test scripts
* GitHub Actions workflow
* Node.js
* Newman
* Newman HTML reporter

Local tools:

```text
Git
Node.js
npm
Newman
Postman
```

CI runner requirements:

```text
Ubuntu
Node.js
npm
Newman
newman-reporter-htmlextra
```

Verify Node.js locally:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Newman:

```bash
newman --version
```

---

# 6. Repository Structure

Recommended repository structure:

```text
Restful-Booker-API-Testing/
│
├── 01_Project_Documentation/
├── 02_Requirements/
├── 03_Test_Scenarios/
├── 04_Test_Cases/
├── 05_Postman/
├── 06_Test_Execution/
├── 07_Bug_Reports/
├── 08_JSON_Schema/
├── 09_Newman/
├── 10_Authentication/
├── 11_CI_CD/
│   ├── CI_CD_Testing_Template.md
│   └── Screenshots/
│
├── postman/
│   ├── Restful_Booker_API.postman_collection.json
│   └── Restful_Booker.postman_environment.json
│
├── reports/
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
└── README.md
```

CI/CD workflow files must be stored in:

```text
.github/workflows/
```

Example:

```text
.github/workflows/api-tests.yml
```

GitHub automatically detects workflow files stored in this directory.

---

# 7. Postman Collection Preparation

The Postman collection should be exported before CI execution.

Example collection file:

```text
Restful_Booker_API.postman_collection.json
```

The collection should contain:

* Authentication requests
* GET requests
* POST requests
* PUT requests
* PATCH requests
* DELETE requests
* Positive tests
* Negative tests
* Postman assertions

Example Postman test:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Example response time test:

```javascript
pm.test("Response time is below 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
```

Before CI integration, execute the complete collection locally.

Example:

```bash
newman run Restful_Booker_API.postman_collection.json
```

Expected result:

```text
Collection executed successfully
Assertions executed
Test summary displayed
```

The collection should be stable before adding it to the CI pipeline.

---

# 8. Postman Environment Preparation

Example environment file:

```text
Restful_Booker.postman_environment.json
```

Possible variables:

| Variable        | Purpose                 |
| --------------- | ----------------------- |
| baseUrl         | API base URL            |
| authToken       | Authentication token    |
| bookingId       | Booking resource ID     |
| deleteBookingId | DELETE test resource ID |

Example base URL:

```text
https://restful-booker.herokuapp.com
```

Example Postman request:

```http
GET {{baseUrl}}/booking/{{bookingId}}
```

Sensitive values should not be committed directly to the repository.

Examples of sensitive values:

```text
Password
Authentication Token
API Key
Secret Key
Private Credential
```

These values should be managed using GitHub Secrets when appropriate.

---

# 9. Newman Configuration

Install Newman:

```bash
npm install -g newman
```

Verify installation:

```bash
newman --version
```

Install HTML Extra reporter:

```bash
npm install -g newman-reporter-htmlextra
```

Basic collection execution:

```bash
newman run postman/Restful_Booker_API.postman_collection.json
```

Execute with environment:

```bash
newman run postman/Restful_Booker_API.postman_collection.json \
  -e postman/Restful_Booker.postman_environment.json
```

Execute with CLI and HTML report:

```bash
newman run postman/Restful_Booker_API.postman_collection.json \
  -e postman/Restful_Booker.postman_environment.json \
  -r cli,htmlextra \
  --reporter-htmlextra-export reports/newman-report.html
```

Expected result:

```text
API collection executed
CLI results displayed
HTML report generated
```

If a Postman assertion fails, Newman should return a failed execution result.

---

# 10. GitHub Actions Workflow

Example GitHub Actions workflow:

```yaml
name: Restful Booker API Tests

on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

  workflow_dispatch:

jobs:
  api-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install Newman
        run: npm install -g newman

      - name: Install Newman HTML Extra Reporter
        run: npm install -g newman-reporter-htmlextra

      - name: Create reports directory
        run: mkdir -p reports

      - name: Run Restful Booker API Tests
        run: |
          newman run postman/Restful_Booker_API.postman_collection.json \
            -e postman/Restful_Booker.postman_environment.json \
            -r cli,htmlextra \
            --reporter-htmlextra-export reports/newman-report.html

      - name: Upload Newman Test Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: newman-api-test-report
          path: reports/newman-report.html
```

Workflow file:

```text
.github/workflows/api-tests.yml
```

The workflow automatically executes the Postman API test collection.

---

# 11. Workflow Trigger Configuration

GitHub Actions workflows can use different triggers.

## Push Trigger

```yaml
on:
  push:
```

The workflow executes after a repository push.

---

## Pull Request Trigger

```yaml
on:
  pull_request:
```

The workflow executes when a pull request event occurs.

---

## Manual Trigger

```yaml
on:
  workflow_dispatch:
```

The workflow can be manually started from GitHub Actions.

---

## Combined Trigger

```yaml
on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

  workflow_dispatch:
```

Recommended project configuration:

```text
Push to main
Pull request to main
Manual workflow execution
```

Manual execution is particularly useful for portfolio demonstration.

---

# 12. Environment Variables and Secrets

Sensitive values should be stored using GitHub Secrets.

Example secret names:

```text
API_USERNAME
API_PASSWORD
```

Secrets can be referenced in GitHub Actions:

```yaml
${{ secrets.API_USERNAME }}
```

Example Newman command:

```yaml
- name: Run API Tests
  run: |
    newman run postman/Restful_Booker_API.postman_collection.json \
      -e postman/Restful_Booker.postman_environment.json \
      --env-var "username=${{ secrets.API_USERNAME }}" \
      --env-var "password=${{ secrets.API_PASSWORD }}"
```

Recommended rules:

* Do not commit passwords
* Do not commit active tokens
* Do not expose secrets in screenshots
* Do not print credentials to logs
* Do not store secrets in README files
* Use repository secrets for sensitive values

Example unsafe environment file:

```json
{
  "key": "password",
  "value": "password123"
}
```

Sensitive environment values should be reviewed before committing exported Postman files.

---

# 13. API Test Execution

CI test execution begins after the configured workflow trigger.

Execution process:

```text
Workflow Triggered
        │
        ▼
Runner Started
        │
        ▼
Repository Checked Out
        │
        ▼
Node.js Configured
        │
        ▼
Newman Installed
        │
        ▼
Reporter Installed
        │
        ▼
Postman Collection Executed
        │
        ▼
Assertions Evaluated
        │
        ▼
Report Generated
        │
        ▼
Artifact Uploaded
```

Example Newman output:

```text
iterations     1
requests       25
test-scripts   25
prerequests    5
assertions     80

failed         0
```

Successful pipeline:

```text
PASS
```

Failed assertion:

```text
AssertionError
expected response to have status code 200
but got 500
```

Failed tests should cause the Newman execution step to fail.

---

# 14. Pipeline Validation

The CI/CD workflow itself should be tested.

Validation scenarios:

| Test ID  | Test Scenario                    | Expected Result         |
| -------- | -------------------------------- | ----------------------- |
| CICD_001 | Push valid collection            | Workflow starts         |
| CICD_002 | Manual workflow execution        | Workflow starts         |
| CICD_003 | Valid API tests                  | Pipeline passes         |
| CICD_004 | Failed Postman assertion         | Pipeline fails          |
| CICD_005 | Invalid collection path          | Pipeline fails          |
| CICD_006 | Missing environment file         | Pipeline fails          |
| CICD_007 | Newman installation succeeds     | Tests execute           |
| CICD_008 | Report directory created         | Report can be generated |
| CICD_009 | HTML report generated            | Report file exists      |
| CICD_010 | Report artifact uploaded         | Artifact available      |
| CICD_011 | Failed tests still upload report | Artifact available      |
| CICD_012 | Secrets available to workflow    | Variables resolved      |

The pipeline should correctly distinguish between successful and failed API test execution.

---

# 15. Failed Test Handling

A failed Postman assertion should cause Newman to return a non-zero exit code.

Example failed assertion:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Actual response:

```text
500 Internal Server Error
```

Newman result:

```text
AssertionError
```

Expected CI behavior:

```text
Newman Test Failure
        │
        ▼
GitHub Actions Step Fails
        │
        ▼
Workflow Marked Failed
        │
        ▼
Test Report Uploaded
```

The report upload step should use:

```yaml
if: always()
```

Example:

```yaml
- name: Upload Newman Test Report
  if: always()
  uses: actions/upload-artifact@v4
```

This allows the report to be uploaded even when API tests fail.

Do not configure the Newman execution step with:

```yaml
continue-on-error: true
```

unless the project specifically requires the pipeline to continue after test failures.

Using `continue-on-error` can hide failed API test execution.

---

# 16. Test Report Generation

The pipeline can generate an HTML test report using Newman HTML Extra Reporter.

Install reporter:

```bash
npm install -g newman-reporter-htmlextra
```

Newman command:

```bash
newman run postman/Restful_Booker_API.postman_collection.json \
  -e postman/Restful_Booker.postman_environment.json \
  -r cli,htmlextra \
  --reporter-htmlextra-export reports/newman-report.html
```

Generated report:

```text
reports/newman-report.html
```

The report may contain:

* Collection name
* Execution date
* Request count
* Assertion count
* Passed assertions
* Failed assertions
* Request details
* Response details
* Response time
* Failure messages

The report should be reviewed after pipeline execution.

---

# 17. Artifact Management

GitHub Actions artifacts can store generated test reports.

Example:

```yaml
- name: Upload Newman Test Report
  if: always()
  uses: actions/upload-artifact@v4
  with:
    name: newman-api-test-report
    path: reports/newman-report.html
```

Artifact name:

```text
newman-api-test-report
```

Artifact content:

```text
newman-report.html
```

Artifact validation:

* Artifact is created
* Artifact contains report
* Report can be opened
* Test results are visible
* Failed assertions are visible
* Report corresponds to the correct workflow run

Generated reports normally should not be manually committed after every test execution.

The CI pipeline should generate reports dynamically.

---

# 18. CI/CD Negative Testing

The pipeline should also be tested using intentionally incorrect configurations.

## Invalid Collection Path

Example:

```yaml
newman run postman/invalid_collection.json
```

Expected result:

```text
Newman execution fails
Pipeline fails
```

---

## Missing Environment File

Example:

```yaml
-e postman/missing_environment.json
```

Expected result:

```text
Environment file cannot be loaded
Pipeline fails
```

---

## Failed API Assertion

Example:

```javascript
pm.test("Status code is 999", function () {
    pm.response.to.have.status(999);
});
```

Expected result:

```text
Assertion fails
Newman returns failure
Pipeline fails
Report uploaded
```

---

## Invalid Newman Command

Example:

```bash
newman invalid-command
```

Expected result:

```text
Command fails
Pipeline fails
```

---

## Missing Secret

Example:

```yaml
${{ secrets.API_PASSWORD }}
```

Secret not configured.

Expected result:

```text
Authentication request fails
API assertions fail
Pipeline fails
```

The workflow should fail visibly rather than silently reporting successful test execution.

---

# 19. Troubleshooting

## Newman Command Not Found

Error:

```text
newman: command not found
```

Verify:

```yaml
- name: Install Newman
  run: npm install -g newman
```

---

## Collection File Not Found

Error:

```text
unable to read data from file
```

Verify the repository path:

```text
postman/Restful_Booker_API.postman_collection.json
```

Check filename capitalization.

Linux CI runners use case-sensitive file paths.

---

## Environment File Not Found

Verify:

```text
postman/Restful_Booker.postman_environment.json
```

Check the Newman `-e` argument.

---

## HTML Reporter Not Found

Error:

```text
could not find "htmlextra" reporter
```

Install:

```bash
npm install -g newman-reporter-htmlextra
```

---

## Report Directory Does Not Exist

Create the directory:

```yaml
- name: Create reports directory
  run: mkdir -p reports
```

---

## Tests Pass Locally but Fail in CI

Review:

* Environment variables
* File paths
* Filename capitalization
* Secrets
* API availability
* Test data dependencies
* Request execution order
* Hardcoded booking IDs
* Dynamic tokens
* Shared API state

CI execution should not depend on manually prepared local Postman data.

---

## Authentication Fails in CI

Review:

* GitHub Secrets
* Secret names
* Newman environment variables
* Authentication request
* Token extraction script
* Token variable scope

Example token storage:

```javascript
const jsonData = pm.response.json();

pm.environment.set("authToken", jsonData.token);
```

The authentication request should execute before protected API requests.

---

# 20. Test Execution Record

Use the following structure to document CI/CD test execution.

| Field             | Value                        |
| ----------------- | ---------------------------- |
| Execution ID      | CICD_RUN_XXX                 |
| Execution Date    | YYYY-MM-DD                   |
| Tester            | Filip Jelinek                |
| Repository        |                              |
| Branch            |                              |
| Workflow          |                              |
| Trigger           | Push / Pull Request / Manual |
| Runner            | ubuntu-latest                |
| Node.js Version   |                              |
| Newman Version    |                              |
| Collection        |                              |
| Environment       |                              |
| Total Requests    |                              |
| Total Assertions  |                              |
| Passed Assertions |                              |
| Failed Assertions |                              |
| Workflow Status   | PASS / FAIL                  |
| Report Generated  | Yes / No                     |
| Artifact Uploaded | Yes / No                     |
| Related Bug ID    |                              |
| Notes             |                              |

Example:

| Field             | Value                                                       |
| ----------------- | ----------------------------------------------------------- |
| Execution ID      | CICD_RUN_001                                                |
| Execution Date    | 2026-07-11                                                  |
| Tester            | Filip Jelinek                                               |
| Repository        | Restful Booker API Testing                                  |
| Branch            | main                                                        |
| Workflow          | Restful Booker API Tests                                    |
| Trigger           | Manual                                                      |
| Runner            | ubuntu-latest                                               |
| Node.js Version   | 20                                                          |
| Newman Version    | Recorded from workflow                                      |
| Collection        | Restful_Booker_API.postman_collection.json                  |
| Environment       | Restful_Booker.postman_environment.json                     |
| Total Requests    | 25                                                          |
| Total Assertions  | 80                                                          |
| Passed Assertions | 80                                                          |
| Failed Assertions | 0                                                           |
| Workflow Status   | PASS                                                        |
| Report Generated  | Yes                                                         |
| Artifact Uploaded | Yes                                                         |
| Related Bug ID    | N/A                                                         |
| Notes             | API test collection executed successfully in GitHub Actions |

---

# 21. Defect Reporting

CI/CD pipeline defects should be documented when the workflow behaves differently from the expected configuration.

Example defect title:

```text
GitHub Actions workflow reports success when Newman API assertions fail
```

Bug report structure:

```text
Bug ID: BUG_CICD_XXX

Title:
GitHub Actions workflow reports success when Newman API assertions fail

Environment:
GitHub Actions

Workflow:
Restful Booker API Tests

Branch:
main

Trigger:
Manual workflow execution

Preconditions:
Postman collection contains an intentionally failing assertion.

Steps to Reproduce:
1. Add a failing Postman assertion.
2. Export the updated collection.
3. Commit the collection to the repository.
4. Run the GitHub Actions workflow.
5. Review the Newman execution result.
6. Review the final workflow status.

Expected Result:
Newman should return a failed execution result and the GitHub Actions workflow should be marked as failed.

Actual Result:
Newman displays a failed assertion, but the GitHub Actions workflow is marked as successful.

Severity:
High

Priority:
High

Reproducibility:
100%
```

Potential CI/CD defect indicators:

* Workflow does not trigger
* Newman tests do not execute
* Failed assertions do not fail pipeline
* Successful tests fail pipeline
* Environment variables are not resolved
* Secrets are exposed in logs
* Report is not generated
* Artifact is not uploaded
* Failed test report is unavailable
* Wrong collection is executed
* Wrong environment is used

---

# 22. CI/CD Testing Checklist

## Repository Preparation

* [ ] GitHub repository available
* [ ] Postman collection committed
* [ ] Postman environment reviewed
* [ ] Sensitive values removed
* [ ] Repository paths verified
* [ ] Filename capitalization verified
* [ ] `.github/workflows/` directory created
* [ ] Workflow YAML file created

## Postman Collection

* [ ] Collection exported
* [ ] Collection executes locally
* [ ] Authentication request included
* [ ] Token extraction configured
* [ ] Dynamic booking creation configured
* [ ] Booking ID extraction configured
* [ ] GET tests included
* [ ] POST tests included
* [ ] PUT tests included
* [ ] PATCH tests included
* [ ] DELETE tests included
* [ ] Postman assertions configured
* [ ] Hardcoded resource dependencies reviewed

## Newman

* [ ] Node.js installed
* [ ] npm available
* [ ] Newman installed
* [ ] Newman version verified
* [ ] Collection executes using Newman
* [ ] Environment file loads correctly
* [ ] CLI reporter works
* [ ] HTML Extra reporter installed
* [ ] HTML report generated locally

## GitHub Actions Workflow

* [ ] Workflow name configured
* [ ] Workflow triggers configured
* [ ] Push trigger tested
* [ ] Pull request trigger reviewed
* [ ] Manual trigger configured
* [ ] Runner configured
* [ ] Repository checkout configured
* [ ] Node.js setup configured
* [ ] Newman installation configured
* [ ] Reporter installation configured
* [ ] Reports directory created
* [ ] Newman execution step configured
* [ ] Report upload step configured
* [ ] `if: always()` configured for report upload

## Secrets and Variables

* [ ] Sensitive values identified
* [ ] Passwords removed from repository
* [ ] Active tokens removed from repository
* [ ] GitHub Secrets configured
* [ ] Secret names verified
* [ ] Workflow secret references verified
* [ ] Secrets not printed to logs
* [ ] Postman environment file reviewed before commit

## Pipeline Execution

* [ ] Workflow triggers successfully
* [ ] CI runner starts
* [ ] Repository checkout succeeds
* [ ] Node.js setup succeeds
* [ ] Newman installation succeeds
* [ ] Reporter installation succeeds
* [ ] Collection file found
* [ ] Environment file found
* [ ] API collection executes
* [ ] Authentication succeeds
* [ ] Assertions execute
* [ ] Test result displayed
* [ ] Workflow status matches test result

## Failure Handling

* [ ] Intentionally failed assertion tested
* [ ] Newman returns failure
* [ ] Newman step fails
* [ ] Workflow marked failed
* [ ] Report still generated
* [ ] Report still uploaded
* [ ] Failure message visible
* [ ] `continue-on-error` not hiding test failures

## Reporting and Artifacts

* [ ] HTML report generated
* [ ] Report contains execution summary
* [ ] Request results visible
* [ ] Assertion results visible
* [ ] Failed assertions visible
* [ ] Artifact uploaded
* [ ] Artifact name verified
* [ ] Artifact contains correct report
* [ ] Report corresponds to workflow execution

## Negative CI/CD Testing

* [ ] Invalid collection path tested
* [ ] Missing environment file tested
* [ ] Failed assertion tested
* [ ] Invalid Newman command tested
* [ ] Missing secret behavior reviewed
* [ ] Pipeline fails visibly for configuration errors

## Documentation

* [ ] Workflow execution documented
* [ ] GitHub Actions screenshot captured
* [ ] Successful pipeline evidence captured
* [ ] Failed pipeline evidence captured
* [ ] Newman report evidence captured
* [ ] Artifact evidence captured
* [ ] Execution record completed
* [ ] CI/CD defects documented
* [ ] Final pipeline status recorded

---

# Conclusion

This CI/CD API testing template provides a structured approach for integrating the Restful Booker Postman API test collection into an automated GitHub Actions workflow.

The template covers:

* Postman collection preparation
* Postman environment preparation
* Newman configuration
* GitHub Actions workflow configuration
* Workflow triggers
* Environment variables
* GitHub Secrets
* Automated API test execution
* Pipeline validation
* Failed test handling
* Newman HTML report generation
* GitHub Actions artifacts
* CI/CD negative testing
* Troubleshooting
* Test execution documentation
* Defect reporting

The primary objective is to demonstrate that the Restful Booker API test suite can be executed automatically and consistently outside the Postman graphical interface.

The CI/CD pipeline should correctly identify failed API assertions, mark unsuccessful test executions as failed, generate a test report, and preserve the report as a GitHub Actions artifact.

This template can be reused as a standard CI/CD API testing reference throughout the Restful Booker API Testing Project.
