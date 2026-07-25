# GitHub Actions

## Document Information

| Property | Value |
|----------|-------|
| Project | Restful Booker API Testing Portfolio |
| Document | GitHub Actions |
| Version | 1.0 |
| Status | Approved |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

This document describes the GitHub Actions workflow implemented in the Restful Booker API Testing Portfolio project.

The workflow automatically executes the API automation test suite after repository updates and generates execution reports without requiring any manual interaction.

The implementation demonstrates practical Continuous Integration (CI) using GitHub Actions and Newman.

---

# What is GitHub Actions?

GitHub Actions is GitHub's built-in automation platform.

It allows workflows to execute automatically when predefined events occur within a repository.

Instead of manually running API tests after every code change, GitHub performs the execution automatically.

Typical workflow events include:

- Push
- Pull Request
- Schedule
- Manual execution
- Release creation

This project currently uses **Push** and **Pull Request** events.

---

# Workflow File Location

GitHub automatically searches for workflow definitions in the following directory:

```text
.github/
└── workflows/
    └── newman.yml
```

Every YAML file placed inside this folder is recognized as an executable workflow.

---

# Workflow Overview

The implemented workflow performs the following sequence:

```text
Developer pushes code
        │
        ▼
GitHub detects repository update
        │
        ▼
Start Ubuntu Runner
        │
        ▼
Download repository
        │
        ▼
Install Node.js
        │
        ▼
Install Newman
        │
        ▼
Install HTML Reporter
        │
        ▼
Execute Postman Collection
        │
        ▼
Run JavaScript Assertions
        │
        ▼
Generate Reports
        │
        ▼
Upload Artifacts
        │
        ▼
Workflow Finished
```

---

# Workflow Trigger

The workflow starts automatically after specific repository events.

Current configuration:

```yaml
on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main
```

Meaning:

- Every push to the **main** branch starts the workflow.
- Every pull request targeting **main** also starts the workflow.

No manual execution is required.

---

# Job Configuration

The workflow contains a single job.

Example:

```yaml
jobs:
  newman-tests:
```

A job represents a complete execution process.

This project uses one job because the API testing process is executed as a single pipeline.

---

# Runner

The workflow executes on:

```yaml
runs-on: ubuntu-latest
```

GitHub creates a temporary Ubuntu Linux virtual machine.

Characteristics:

- Clean environment
- Fresh operating system
- No previous project files
- Automatically deleted after execution

This ensures identical execution conditions for every workflow.

---

# Step 1 — Repository Checkout

```yaml
uses: actions/checkout@v4
```

Purpose:

Download the latest repository contents into the GitHub runner.

Without this step the runner would not have access to:

- README
- Postman Collection
- Documentation
- Workflow resources

---

# Step 2 — Install Node.js

```yaml
uses: actions/setup-node@v4
```

Purpose:

Install Node.js.

Node.js is required because Newman is distributed as a Node package.

---

# Step 3 — Install Newman

```yaml
npm install -g newman
```

Purpose:

Install the Newman command-line runner.

Newman executes the Postman collection without opening the Postman application.

---

# Step 4 — Install HTML Reporter

```yaml
npm install -g newman-reporter-htmlextra
```

Purpose:

Generate detailed HTML execution reports.

Without this package Newman would only produce console output.

---

# Step 5 — Create Report Directories

Before execution the workflow creates directories for generated reports.

```text
reports/
├── HTML/
├── JSON/
└── JUnit/
```

Separating reports by format improves project organization.

---

# Step 6 — Execute the Automation Collection

The workflow executes:

```text
RestfulBooker.postman_collection.json
```

The collection contains the complete automation workflow including:

- Health Check
- Authentication
- Create Booking
- Retrieve Booking
- Update Booking
- Partial Update
- Delete Booking
- Verify Deletion

The collection is self-contained.

It uses collection variables and therefore does not require a Postman environment file.

---

# Automated Assertions

Every request executes JavaScript tests.

Validation includes:

- HTTP Status Codes
- Response Headers
- Response Time
- Content-Type
- JSON Structure
- Data Types
- Required Fields
- Authentication Token
- Booking ID
- Request Chaining
- End-to-End Validation

These assertions determine whether the workflow succeeds or fails.

---

# Report Generation

After execution Newman generates multiple report formats.

| Report | Purpose |
|---------|---------|
| HTML | Human-readable report |
| JSON | Machine-readable output |
| JUnit XML | CI/CD reporting |

Each report contains detailed execution results.

---

# Artifact Upload

The generated reports are uploaded automatically.

Artifacts remain available after the workflow finishes.

Benefits include:

- Downloadable reports
- Historical execution records
- Easier debugging
- CI documentation

---

# Workflow Result

The workflow ends with one of two possible outcomes.

## Successful Execution

Requirements:

- Collection executes successfully
- All assertions pass
- Reports generated
- Artifacts uploaded

GitHub displays a green workflow status.

---

## Failed Execution

Possible reasons:

- Assertion failure
- Invalid request
- Missing dependency
- Configuration issue
- Newman execution error

GitHub immediately reports the failure.

---

# Current Project Implementation

The current workflow successfully performs:

✅ Checkout Repository

✅ Install Node.js

✅ Install Newman

✅ Install Newman HTML Reporter

✅ Execute Postman Collection

✅ Run JavaScript Assertions

✅ Generate HTML Report

✅ Generate JSON Report

✅ Generate JUnit Report

✅ Upload Reports as Artifacts

---

# Advantages of GitHub Actions

The implemented solution provides several benefits.

## Automation

No manual execution is required.

---

## Repeatability

Every workflow executes in the same clean environment.

---

## Early Regression Detection

API failures are detected immediately after code changes.

---

## Documentation

Workflow executions become part of the project history.

---

## Professional Portfolio

The implementation demonstrates practical knowledge of:

- Git
- GitHub
- CI
- API Automation
- Newman
- GitHub Actions

These are commonly requested skills for Junior QA Engineers.

---

# Best Practices Applied

The project follows several CI/CD best practices.

- Version-controlled workflow
- Dedicated automation collection
- Automated report generation
- Organized report structure
- Repeatable execution
- Clean runner environment
- Collection variables instead of hardcoded values
- Standardized artifact storage

---

# Future Enhancements

Potential improvements include:

- Scheduled nightly execution
- Matrix builds
- Parallel execution
- Secrets management
- Email or Slack notifications
- Performance testing integration
- Multiple deployment environments

These enhancements are outside the scope of the current portfolio project.

---

# Conclusion

GitHub Actions provides an automated Continuous Integration pipeline for this project.

Every repository update automatically executes the Postman automation collection using Newman, validates API behavior through JavaScript assertions, generates execution reports, uploads workflow artifacts, and returns a clear PASS or FAIL result.

The implementation demonstrates practical experience with modern CI/CD workflows and automated API testing while improving the reliability, repeatability, and maintainability of the test suite.