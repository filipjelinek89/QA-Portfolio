# GitHub Actions Screenshots

## Document Information

| Property | Value |
|----------|-------|
| Project | Restful Booker API Testing Portfolio |
| Document | GitHub Actions Screenshots |
| Version | 1.0 |
| Status | Approved |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

This document provides visual evidence of the Continuous Integration (CI) pipeline implemented in this project.

The screenshots included here demonstrate successful execution of the GitHub Actions workflow, automated API testing with Newman, report generation, and artifact publication.

The purpose of these screenshots is to verify that the CI/CD pipeline is fully functional and operates as expected.

---

# Screenshot Overview

| Screenshot | Description |
|------------|-------------|
| Screenshot 01 | GitHub Actions Workflow |
| Screenshot 02 | Successful Workflow Run |
| Screenshot 03 | Workflow Execution Steps |
| Screenshot 04 | Newman Console Output |
| Screenshot 05 | Generated Artifacts |
| Screenshot 06 | HTML Report |
| Screenshot 07 | JSON Report |
| Screenshot 08 | JUnit Report |
| Screenshot 09 | Workflow Logs |
| Screenshot 10 | Repository Actions Tab |

---

# Screenshot 01 – GitHub Actions Workflow

**Purpose**

Demonstrates that the repository contains an active GitHub Actions workflow.

**Expected Result**

The repository displays the configured workflow under the **Actions** tab.

**Evidence**

> Insert Screenshot Here

```text
GitHub Repository

Actions

✔ Restful Booker API Automation
```

---

# Screenshot 02 – Successful Workflow Run

**Purpose**

Demonstrates successful execution of the workflow.

**Expected Result**

Workflow status is displayed as **Successful**.

**Evidence**

> Insert Screenshot Here

```text
✔ Workflow completed successfully
```

---

# Screenshot 03 – Workflow Execution Steps

**Purpose**

Shows each execution stage of the CI pipeline.

Typical workflow steps include:

- Checkout Repository
- Setup Node.js
- Install Newman
- Install HTML Reporter
- Create Report Directories
- Execute Collection
- Upload Artifacts

**Expected Result**

Every step completes successfully.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 04 – Newman Console Output

**Purpose**

Demonstrates execution of the Postman automation collection.

The output should display:

- Requests executed
- Assertions executed
- Passed tests
- Failed tests
- Execution duration

Example:

```text
Iterations: 1

Requests: 8

Assertions: 48

Failed Assertions: 0
```

**Expected Result**

All assertions pass successfully.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 05 – Workflow Artifacts

**Purpose**

Demonstrates automatic publication of execution reports.

Artifacts should include:

- HTML Report
- JSON Report
- JUnit Report

**Expected Result**

All reports are available for download.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 06 – HTML Report

**Purpose**

Shows the generated HTML execution report.

The report should contain:

- Request summary
- Execution statistics
- Passed assertions
- Failed assertions
- Response times

Example:

```text
Execution Summary

Requests

Assertions

Failures

Execution Time
```

**Expected Result**

Report opens correctly and displays complete execution details.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 07 – JSON Report

**Purpose**

Demonstrates machine-readable execution results.

The JSON report is primarily intended for automated processing and CI/CD integrations.

**Expected Result**

The report contains structured execution data.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 08 – JUnit Report

**Purpose**

Demonstrates compatibility with CI/CD reporting tools.

The JUnit XML report enables integration with build servers and test reporting platforms.

**Expected Result**

JUnit XML file generated successfully.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 09 – Workflow Logs

**Purpose**

Shows detailed execution logs produced during the workflow.

Typical log sections include:

- Dependency installation
- Collection execution
- Assertion results
- Report generation

Logs provide valuable information during troubleshooting.

**Expected Result**

Workflow logs complete without errors.

**Evidence**

> Insert Screenshot Here

---

# Screenshot 10 – GitHub Repository Actions Tab

**Purpose**

Shows the history of workflow executions.

The Actions page should display:

- Workflow name
- Execution status
- Commit reference
- Execution time
- Workflow duration

**Expected Result**

The workflow history shows successful executions.

**Evidence**

> Insert Screenshot Here

---

# Verification Checklist

| Verification Item | Status |
|-------------------|--------|
| Workflow Created | ✅ |
| Workflow Triggered | ✅ |
| Repository Checkout | ✅ |
| Node.js Installed | ✅ |
| Newman Installed | ✅ |
| HTML Reporter Installed | ✅ |
| Collection Executed | ✅ |
| JavaScript Assertions Executed | ✅ |
| HTML Report Generated | ✅ |
| JSON Report Generated | ✅ |
| JUnit Report Generated | ✅ |
| Reports Uploaded | ✅ |
| Workflow Completed Successfully | ✅ |

---

# Evidence Summary

The screenshots included in this document provide visual confirmation that:

- The GitHub Actions workflow is correctly configured.
- The workflow executes automatically after repository updates.
- Newman successfully runs the API automation collection.
- JavaScript assertions validate API behavior.
- HTML, JSON, and JUnit reports are generated successfully.
- Reports are uploaded as downloadable GitHub Actions artifacts.
- The workflow completes successfully without manual intervention.

---

# Best Practices

The following practices were applied during implementation:

- Automated execution on every push to the `main` branch.
- Version-controlled workflow configuration.
- Standardized report generation.
- Artifact retention for execution history.
- Structured workflow logging.
- Consistent repository organization.

---

# Conclusion

The screenshots presented in this document serve as execution evidence for the implemented Continuous Integration pipeline.

They demonstrate successful automation of the API test suite using GitHub Actions and Newman, including automated report generation and artifact publication.

Together with the accompanying documentation, these screenshots provide clear evidence that the CI/CD solution has been successfully implemented and is fully operational.