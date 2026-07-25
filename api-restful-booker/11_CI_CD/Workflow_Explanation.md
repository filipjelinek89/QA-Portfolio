# Workflow Explanation

## Document Information

| Property | Value |
|----------|-------|
| Project | Restful Booker API Testing Portfolio |
| Document | Workflow Explanation |
| Version | 1.0 |
| Status | Approved |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

This document explains the complete execution workflow of the CI/CD pipeline implemented in the Restful Booker API Testing Portfolio project.

It describes every stage of the workflow, beginning with a developer pushing code to GitHub and ending with the automated generation of test reports.

The purpose of this document is to provide a clear understanding of how GitHub Actions, Newman, and Postman work together to automate API testing.

---

# Workflow Overview

The implemented workflow follows the sequence below.

```text
Developer modifies project
          │
          ▼
git add
          │
          ▼
git commit
          │
          ▼
git push origin main
          │
          ▼
GitHub receives repository update
          │
          ▼
Workflow Triggered
          │
          ▼
Ubuntu Runner Created
          │
          ▼
Repository Downloaded
          │
          ▼
Node.js Installed
          │
          ▼
Newman Installed
          │
          ▼
Automation Collection Executed
          │
          ▼
JavaScript Assertions Executed
          │
          ▼
Reports Generated
          │
          ▼
Artifacts Uploaded
          │
          ▼
Workflow Completed
          │
          ▼
Runner Deleted
```

---

# Step 1 — Local Development

The workflow always begins on the developer's local computer.

Typical activities include:

- Updating documentation
- Modifying Postman requests
- Creating test cases
- Improving JavaScript assertions
- Updating GitHub Actions workflow

At this stage, all changes exist only on the local machine.

---

# Step 2 — Git Commit

After completing changes, they are committed to the local Git repository.

Example:

```bash
git add .
git commit -m "Sprint 11 - Update GitHub Actions workflow"
```

The commit creates a permanent snapshot of the project.

---

# Step 3 — Push to GitHub

The local commit is uploaded to the remote repository.

Example:

```bash
git push origin main
```

Once the push is completed, GitHub immediately detects the repository update.

---

# Step 4 — Workflow Trigger

GitHub checks the repository for workflow definitions.

The file:

```text
.github/workflows/newman.yml
```

contains instructions describing how the workflow should execute.

Since the push targets the **main** branch, GitHub automatically starts the workflow.

---

# Step 5 — Create Runner

GitHub creates a temporary Ubuntu virtual machine.

Characteristics:

- Clean operating system
- Empty environment
- No project files
- No installed dependencies

Every workflow execution starts from the same initial state.

This guarantees consistent and repeatable execution.

---

# Step 6 — Download Repository

The workflow downloads the latest version of the repository.

The runner now contains:

```text
README.md

01_Project_Documentation/

02_API_Analysis/

03_Test_Scenarios/

04_Test_Cases/

05_Postman/

11_CI_CD/
```

The workflow now has access to every project resource.

---

# Step 7 — Install Node.js

Node.js is installed automatically.

Purpose:

Newman is a Node.js application.

Without Node.js, Newman cannot execute.

---

# Step 8 — Install Newman

The workflow installs:

```text
newman
```

Newman allows the Postman collection to run without opening the Postman application.

It becomes the execution engine of the automated API tests.

---

# Step 9 — Install HTML Reporter

The workflow installs:

```text
newman-reporter-htmlextra
```

This package enables detailed HTML report generation.

Additional report formats include:

- JSON
- JUnit XML

---

# Step 10 — Execute Automation Collection

The workflow executes the dedicated automation collection:

```text
RestfulBooker.postman_collection.json
```

The collection performs the complete booking workflow.

Execution sequence:

```text
GET /ping

↓

POST /auth

↓

POST /booking

↓

GET booking

↓

PUT booking

↓

PATCH booking

↓

DELETE booking

↓

Verify deletion
```

The collection uses collection variables and does not require a Postman environment file.

---

# Step 11 — Execute JavaScript Assertions

After each API request, Postman automatically executes JavaScript test scripts.

Examples of validated elements include:

- HTTP status codes
- Response headers
- Response body
- JSON structure
- Data types
- Authentication token
- Booking ID
- Response time
- End-to-end workflow

Every assertion contributes to the final workflow result.

---

# Step 12 — Generate Reports

Once all requests have finished, Newman generates multiple reports.

```text
reports/

├── HTML/
│      newman-report.html
│
├── JSON/
│      newman-report.json
│
└── JUnit/
       newman-report.xml
```

Each report serves a different purpose.

HTML is intended for manual review.

JSON provides machine-readable output.

JUnit XML supports CI/CD integrations.

---

# Step 13 — Upload Artifacts

GitHub uploads every generated report as a workflow artifact.

Artifacts remain available after the workflow finishes.

This allows users to:

- Download reports
- Review execution history
- Share execution evidence
- Investigate failures

---

# Step 14 — Workflow Result

The workflow returns one of two possible outcomes.

## PASS

Requirements:

- Collection executes successfully.
- Every assertion passes.
- Reports are generated.
- Artifacts are uploaded.

GitHub displays a successful workflow.

---

## FAIL

The workflow fails if:

- A request fails
- An assertion fails
- Newman encounters an error
- Dependencies cannot be installed
- Configuration is incorrect

GitHub immediately marks the workflow as failed.

---

# Step 15 — Runner Cleanup

After the workflow completes, GitHub permanently deletes the temporary Ubuntu runner.

Nothing remains on the virtual machine.

The next execution starts with a completely new environment.

This ensures every workflow is independent of previous executions.

---

# Practical Example

The current implementation successfully performs:

- Repository checkout
- Node.js installation
- Newman installation
- HTML Reporter installation
- Collection execution
- JavaScript assertion execution
- HTML report generation
- JSON report generation
- JUnit report generation
- Artifact upload

Every step is executed automatically without manual intervention.

---

# Benefits of the Workflow

The implemented workflow provides several advantages.

## Automation

No manual execution is required.

---

## Repeatability

Every execution uses an identical environment.

---

## Reliability

Automated assertions verify API behaviour after every repository update.

---

## Faster Feedback

Regression issues are detected immediately.

---

## Professional Documentation

Workflow executions provide permanent evidence of successful automated testing.

---

# Summary

The implemented workflow demonstrates a complete Continuous Integration process for automated API testing.

Starting from a simple `git push`, GitHub automatically provisions a clean execution environment, installs the required dependencies, executes the Postman automation collection using Newman, validates the API through JavaScript assertions, generates multiple report formats, uploads the results as workflow artifacts, and finally cleans up the temporary environment.

This automated process ensures consistent, repeatable, and reliable API testing while demonstrating practical experience with GitHub Actions, Newman, and modern CI/CD practices.