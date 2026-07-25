# CI/CD Architecture

## Document Information

| Property | Value |
|----------|-------|
| Project | Restful Booker API Testing Portfolio |
| Document | CI/CD Architecture |
| Version | 1.0 |
| Status | Approved |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

This document describes the Continuous Integration and Continuous Delivery (CI/CD) architecture implemented in the Restful Booker API Testing Portfolio project.

The objective of the CI/CD pipeline is to automate API test execution after every code change, ensuring that the automated test suite remains stable and that regressions are detected immediately.

The implementation uses **GitHub Actions** together with **Newman** to execute the Postman automation collection and generate test reports.

---

# Objectives

The CI/CD architecture has the following objectives:

- Automate API test execution
- Eliminate manual execution after every repository update
- Detect failures immediately
- Generate standardized execution reports
- Demonstrate CI/CD knowledge within a QA portfolio
- Support repeatable automated regression testing

---

# Technology Stack

| Component | Purpose |
|-----------|---------|
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD platform |
| Ubuntu Runner | Execution environment |
| Node.js | Runtime environment |
| Newman | Postman Collection Runner |
| Postman | API automation |
| JavaScript | Automated assertions |

---

# High-Level Architecture

```text
                    Developer

                        │
                        │
                  git commit
                        │
                        ▼
                   git push main
                        │
                        ▼
             GitHub Repository Updated
                        │
                        ▼
          GitHub Actions Workflow Triggered
                        │
                        ▼
           Ubuntu Virtual Machine Created
                        │
                        ▼
              Repository Checkout
                        │
                        ▼
               Node.js Installation
                        │
                        ▼
             Newman Installation
                        │
                        ▼
      Newman HTML Reporter Installation
                        │
                        ▼
      Execute Postman Automation Collection
                        │
                        ▼
       Execute JavaScript Assertions
                        │
                        ▼
        Generate HTML / JSON / JUnit Reports
                        │
                        ▼
          Upload Reports as Artifacts
                        │
                        ▼
          Workflow Status (PASS / FAIL)
                        │
                        ▼
        Temporary Runner Automatically Deleted
```

---

# Workflow Trigger

The pipeline starts automatically whenever one of the configured events occurs.

Current triggers:

- Push to the **main** branch
- Pull Request targeting the **main** branch

Example:

```text
Developer
      │
      ▼
git push origin main
      │
      ▼
GitHub detects repository update
      │
      ▼
Workflow starts automatically
```

No manual execution is required.

---

# Runner Environment

Every workflow execution starts on a clean virtual machine provided by GitHub.

Runner:

```text
ubuntu-latest
```

Characteristics:

- Fresh environment
- No cached project files
- No installed dependencies
- Automatically destroyed after execution

This guarantees reproducible execution for every workflow run.

---

# Repository Checkout

The first execution step downloads the latest repository contents.

```yaml
uses: actions/checkout@v4
```

Repository structure becomes available to the workflow.

Example:

```text
README.md

05_Postman/

11_CI_CD/

.github/

reports/
```

---

# Dependency Installation

The workflow installs the required software before executing the API tests.

Installed components:

- Node.js
- Newman
- Newman HTML Extra Reporter

These dependencies are installed automatically during every workflow execution.

No manual installation is required on the GitHub runner.

---

# Test Execution

The workflow executes the dedicated automation collection.

```text
RestfulBooker.postman_collection.json
```

The collection performs automated validation of:

- Health Check
- Authentication
- Booking Creation
- Booking Retrieval
- Full Update
- Partial Update
- Booking Deletion
- Deletion Verification

The collection uses collection variables and therefore does not require a Postman Environment file.

---

# Automated Validation

During execution, JavaScript assertions validate:

- HTTP Status Codes
- Response Headers
- Content-Type
- Response Time
- Response Body
- JSON Structure
- Required Properties
- Data Types
- Request Chaining
- Booking ID Generation
- Authentication Token
- End-to-End Workflow

Every assertion contributes to the final workflow result.

---

# Reporting

After execution, Newman generates multiple report formats.

| Report | Purpose |
|---------|---------|
| HTML | Human-readable execution report |
| JSON | Machine-readable report |
| JUnit XML | CI/CD integration and test reporting |

Reports are stored in:

```text
reports/

HTML/

JSON/

JUnit/
```

---

# Artifact Upload

Generated reports are uploaded automatically as GitHub Actions artifacts.

Benefits:

- Reports remain available after workflow completion.
- Reports can be downloaded directly from GitHub.
- Historical workflow executions retain their associated reports.

---

# Workflow Result

The pipeline returns one of two possible results.

## PASS

All requests execute successfully.

All assertions pass.

Reports are generated.

Artifacts are uploaded.

Workflow completes successfully.

---

## FAIL

The workflow fails when:

- A request fails
- An assertion fails
- Newman encounters an execution error
- Dependency installation fails
- Configuration issues occur

GitHub immediately reports the failed workflow.

---

# Benefits of the Architecture

The implemented CI/CD architecture provides several advantages.

## Automation

Every code change automatically triggers API testing.

---

## Consistency

Every execution uses the same environment.

Results remain reproducible.

---

## Early Defect Detection

Regression issues are detected immediately after code changes.

---

## Traceability

Every workflow execution is stored in GitHub.

Historical executions remain accessible.

---

## Reporting

Standardized reports simplify result analysis.

---

## Portfolio Value

The implementation demonstrates practical experience with:

- API Automation
- Newman
- CI/CD
- GitHub Actions
- Automated Reporting

These are commonly requested skills for Junior QA Automation and API Testing positions.

---

# Current Implementation Status

| Component | Status |
|-----------|--------|
| GitHub Repository | ✅ Implemented |
| GitHub Actions | ✅ Implemented |
| Newman | ✅ Implemented |
| HTML Reports | ✅ Implemented |
| JSON Reports | ✅ Implemented |
| JUnit Reports | ✅ Implemented |
| Automated Assertions | ✅ Implemented |
| Artifact Upload | ✅ Implemented |

---

# Future Improvements

Potential future enhancements include:

- Scheduled nightly workflow execution
- Multiple environment support
- Secret management for protected APIs
- Parallel test execution
- Slack or Microsoft Teams notifications
- Code coverage reporting
- Performance testing integration

These improvements are outside the scope of the current portfolio project.

---

# Conclusion

The implemented CI/CD architecture automates the execution of the Restful Booker API test suite using GitHub Actions and Newman.

Every repository update triggers a clean workflow execution, performs automated API validation, generates execution reports, uploads artifacts, and returns a clear PASS or FAIL status.

This implementation demonstrates practical knowledge of Continuous Integration principles and modern API test automation workflows while supporting repeatable, maintainable, and reliable regression testing.