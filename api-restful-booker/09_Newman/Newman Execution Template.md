# Newman Execution Template

**Project:** Restful Booker API Testing Project
**Document Type:** Newman CLI Execution Template
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Execution Tool:** Newman
**Collection Source:** Postman
**Status:** Template

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Newman Overview](#2-newman-overview)
* [3. Execution Scope](#3-execution-scope)
* [4. Prerequisites](#4-prerequisites)
* [5. Project Files](#5-project-files)
* [6. Newman Installation](#6-newman-installation)
* [7. Installation Verification](#7-installation-verification)
* [8. Collection Preparation](#8-collection-preparation)
* [9. Environment Preparation](#9-environment-preparation)
* [10. Basic Collection Execution](#10-basic-collection-execution)
* [11. Environment-Based Execution](#11-environment-based-execution)
* [12. Folder Execution](#12-folder-execution)
* [13. Reporter Configuration](#13-reporter-configuration)
* [14. CLI Execution Command](#14-cli-execution-command)
* [15. Execution Result](#15-execution-result)
* [16. Assertion Result Analysis](#16-assertion-result-analysis)
* [17. Failed Execution Analysis](#17-failed-execution-analysis)
* [18. Exit Code Validation](#18-exit-code-validation)
* [19. Dynamic Variable Validation](#19-dynamic-variable-validation)
* [20. E2E Workflow Execution](#20-e2e-workflow-execution)
* [21. Regression Execution](#21-regression-execution)
* [22. Newman Report](#22-newman-report)
* [23. Execution Evidence](#23-execution-evidence)
* [24. Troubleshooting](#24-troubleshooting)
* [25. CI/CD Preparation](#25-cicd-preparation)
* [26. Maintenance](#26-maintenance)
* [27. Newman Execution Summary](#27-newman-execution-summary)

---

# 1. Purpose

The purpose of this document is to record the configuration, execution, and analysis of automated API tests using **Newman CLI** within the **Restful Booker API Testing Project**.

Newman is used to execute the exported Postman collection from the command line.

The Newman execution layer extends the API testing workflow:

```text
API Requirements
      ↓
Test Scenarios
      ↓
Test Cases
      ↓
Postman Collection
      ↓
Postman Assertions
      ↓
Newman CLI
      ↓
Automated Test Execution
      ↓
Execution Report
      ↓
CI/CD
```

The Newman implementation demonstrates:

* Command-line API test execution
* Postman collection execution outside the Postman GUI
* Environment file usage
* Automated assertion execution
* Dynamic variable handling
* Request chaining
* End-to-end workflow execution
* Regression test execution
* CLI result analysis
* Process exit code validation
* Test report generation
* CI/CD preparation

Only actual Newman execution results should be recorded as final execution evidence.

---

# 2. Newman Overview

Newman is the command-line collection runner for Postman collections.

It allows Postman collections to be executed from:

```text
Terminal
Command Prompt
PowerShell
CI/CD Pipeline
GitHub Actions
```

The primary project execution flow is:

```text
Postman Collection
        +
Postman Environment
        ↓
Newman CLI
        ↓
Execute Requests
        ↓
Execute JavaScript Assertions
        ↓
Collect Results
        ↓
Return Exit Code
        ↓
Generate Report
```

## Project Usage

Newman is used in this project for:

* Automated collection execution
* Folder-level execution
* E2E workflow execution
* Regression testing
* Assertion validation
* CLI reporting
* CI/CD integration preparation

Newman does not replace Postman during initial test development.

The intended workflow is:

```text
Develop Request in Postman
        ↓
Debug Request
        ↓
Add Assertions
        ↓
Execute in Postman
        ↓
Export Collection
        ↓
Execute with Newman
```

---

# 3. Execution Scope

Newman execution uses the exported Restful Booker Postman collection.

## Collection

```text
Restful_Booker_API_Testing.postman_collection.json
```

## Environment

```text
Restful_Booker_QA.postman_environment.json
```

## API Operations

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/ping`         |
| POST   | `/auth`         |
| GET    | `/booking`      |
| GET    | `/booking/{id}` |
| POST   | `/booking`      |
| PUT    | `/booking/{id}` |
| PATCH  | `/booking/{id}` |
| DELETE | `/booking/{id}` |

## Testing Areas

Newman execution may include:

* Health Check
* Authentication
* Get Booking IDs
* Get Booking by ID
* Create Booking
* Update Booking
* Partial Update Booking
* Delete Booking
* Negative Testing
* Boundary Testing
* End-to-End Workflow Testing

## Automated Validation

The collection may validate:

```text
HTTP Status Codes
Response Format
Response Headers
JSON Structure
Required Properties
Data Types
JSON Schema
Response Values
Request-Response Consistency
Dynamic Token Generation
Dynamic Booking ID Generation
Data Persistence
Resource State Transitions
Authentication Behaviour
Authorization Behaviour
```

---

# 4. Prerequisites

The following prerequisites are required before Newman execution.

| Requirement                  | Status   |
| ---------------------------- | -------- |
| Node.js installed            | Yes / No |
| npm available                | Yes / No |
| Newman installed             | Yes / No |
| Postman collection exported  | Yes / No |
| Postman environment exported | Yes / No |
| Collection reviewed          | Yes / No |
| Environment reviewed         | Yes / No |
| API accessible               | Yes / No |

## Required Tools

```text
Node.js
npm
Newman
Postman
Terminal / PowerShell
```

## Required Project Files

```text
Restful_Booker_API_Testing.postman_collection.json

Restful_Booker_QA.postman_environment.json
```

Newman execution should not begin until the Postman collection can execute successfully in Postman Collection Runner.

---

# 5. Project Files

Recommended Newman directory structure:

```text
09_Newman/
│
├── Newman_Execution_Template.md
├── README.md
│
├── Reports/
│   ├── CLI/
│   └── HTML/
│
└── Evidence/
```

The Postman source files remain stored in:

```text
05_Postman/
│
├── Collection/
│   └── Restful_Booker_API_Testing.postman_collection.json
│
└── Environment/
    └── Restful_Booker_QA.postman_environment.json
```

Newman should execute the exported collection and environment files.

The source collection should not be duplicated unnecessarily in the Newman directory.

## Expected Relative Paths

Example:

```text
../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json
```

Environment:

```text
../05_Postman/Environment/Restful_Booker_QA.postman_environment.json
```

Report:

```text
./Reports/HTML/newman-report.html
```

---

# 6. Newman Installation

Newman is installed using npm.

## Installation Command

```bash
npm install -g newman
```

## Expected Result

The Newman package is installed globally.

The terminal should complete the installation without a fatal npm error.

## Installation Record

| Field               | Value       |
| ------------------- | ----------- |
| Installation Date   | YYYY-MM-DD  |
| Node.js Version     | `[version]` |
| npm Version         | `[version]` |
| Newman Version      | `[version]` |
| Installation Result | PASS / FAIL |

## Installation Notes

```text
[Document installation observations or issues.]
```

---

# 7. Installation Verification

After installation, verify that Newman is available.

## Command

```bash
newman --version
```

## Expected Result

The terminal returns the installed Newman version.

Example execution format:

```text
[newman version]
```

## Verification Result

| Validation                | Expected | Actual     | Result      |
| ------------------------- | -------- | ---------- | ----------- |
| Newman command recognized | Yes      | `[Actual]` | PASS / FAIL |
| Version returned          | Yes      | `[Actual]` | PASS / FAIL |

## Overall Result

```text
[PASS / FAIL]
```

If the `newman` command is not recognized, the npm global installation and system PATH configuration should be investigated.

---

# 8. Collection Preparation

The Postman collection must be exported before Newman execution.

## Collection File

```text
05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json
```

## Collection Validation Checklist

* [ ] Collection exported directly from Postman
* [ ] Correct collection selected
* [ ] All required folders included
* [ ] All required requests included
* [ ] Postman test scripts included
* [ ] Request names contain test case IDs
* [ ] Dynamic variable scripts included
* [ ] Hardcoded runtime token removed
* [ ] Hardcoded runtime booking ID removed where applicable
* [ ] No sensitive private credentials included
* [ ] Collection executes successfully in Postman

## Collection Name

```text
Restful Booker API Testing
```

## Collection Version

```text
[Postman Collection Format / Version]
```

## Preparation Result

```text
[READY / NOT READY]
```

---

# 9. Environment Preparation

The Postman environment must be exported before Newman execution.

## Environment File

```text
05_Postman/Environment/Restful_Booker_QA.postman_environment.json
```

## Expected Variables

| Variable    | Purpose              | Runtime Behaviour     |
| ----------- | -------------------- | --------------------- |
| `baseUrl`   | API base URL         | Static                |
| `authToken` | Authentication token | Dynamic               |
| `bookingId` | Booking resource ID  | Dynamic               |
| `firstname` | Reusable test data   | Static / Configurable |
| `lastname`  | Reusable test data   | Static / Configurable |

## Environment Validation Checklist

* [ ] `baseUrl` is configured
* [ ] `baseUrl` points to the correct API
* [ ] `authToken` is not dependent on a manually copied token
* [ ] `bookingId` is not dependent on a manually copied booking ID
* [ ] Dynamic variables are generated during execution
* [ ] No private credentials are exposed
* [ ] Environment file is valid JSON

## Expected Base URL

```text
https://restful-booker.herokuapp.com
```

## Preparation Result

```text
[READY / NOT READY]
```

---

# 10. Basic Collection Execution

The basic Newman command executes the Postman collection without an external environment file.

## Command

```bash
newman run Restful_Booker_API_Testing.postman_collection.json
```

## Project Path Example

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json
```

## Execution Objective

The basic execution verifies:

* Newman can read the collection file
* The collection JSON is valid
* Requests can be loaded
* Test scripts can be executed

## Expected Result

```text
Collection loaded
      ↓
Requests executed
      ↓
Assertions executed
      ↓
Execution summary displayed
```

## Execution Result

| Field               | Value       |
| ------------------- | ----------- |
| Execution Date      | YYYY-MM-DD  |
| Collection Loaded   | Yes / No    |
| Requests Executed   | `[count]`   |
| Assertions Executed | `[count]`   |
| Failed Assertions   | `[count]`   |
| Result              | PASS / FAIL |

## Notes

```text
[Document actual basic execution observations.]
```

---

# 11. Environment-Based Execution

The primary Newman execution uses the exported Postman environment.

## Command

```bash
newman run Restful_Booker_API_Testing.postman_collection.json \
  -e Restful_Booker_QA.postman_environment.json
```

## Project Relative Path Command

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e ../05_Postman/Environment/Restful_Booker_QA.postman_environment.json
```

## Windows PowerShell Example

```powershell
newman run "../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json" `
  -e "../05_Postman/Environment/Restful_Booker_QA.postman_environment.json"
```

## Execution Flow

```text
Load Collection
      ↓
Load Environment
      ↓
Resolve {{baseUrl}}
      ↓
Execute Authentication
      ↓
Generate {{authToken}}
      ↓
Create Booking
      ↓
Generate {{bookingId}}
      ↓
Execute Dependent Requests
      ↓
Execute Assertions
      ↓
Display Summary
```

## Expected Result

The collection executes without requiring manual modification of runtime variables.

## Execution Result

```text
[PASS / FAIL / PARTIAL FAILURE]
```

---

# 12. Folder Execution

Newman can execute a specific Postman collection folder.

This is useful for:

* Functional area testing
* Test debugging
* Targeted regression testing
* E2E workflow execution

## Command Format

```bash
newman run [collection] \
  -e [environment] \
  --folder "[folder name]"
```

## Authentication Folder Example

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e ../05_Postman/Environment/Restful_Booker_QA.postman_environment.json \
  --folder "01 - Authentication"
```

## E2E Folder Example

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e ../05_Postman/Environment/Restful_Booker_QA.postman_environment.json \
  --folder "09 - E2E Workflows"
```

## Folder Execution Record

| Field             | Value           |
| ----------------- | --------------- |
| Folder            | `[Folder Name]` |
| Execution Date    | YYYY-MM-DD      |
| Requests          | `[count]`       |
| Assertions        | `[count]`       |
| Failed Assertions | `[count]`       |
| Result            | PASS / FAIL     |

## Notes

```text
[Document folder execution observations.]
```

---

# 13. Reporter Configuration

Newman supports reporters for execution result output.

## CLI Reporter

The CLI reporter displays execution results directly in the terminal.

Example:

```bash
newman run [collection] -e [environment] -r cli
```

## Reporter Strategy

The project uses:

```text
CLI Reporter
      ↓
Immediate Execution Review
```

and:

```text
HTML Reporter
      ↓
Persistent Execution Evidence
```

## Reporter Matrix

| Reporter | Purpose                         | Status   |
| -------- | ------------------------------- | -------- |
| CLI      | Terminal execution result       | Planned  |
| HTML     | Human-readable execution report | Planned  |
| JSON     | Machine-readable result         | Optional |
| JUnit    | CI/CD test result integration   | Optional |

## Selected Reporters

```text
[CLI / HTML / JSON / JUnit]
```

## Reporter Notes

```text
[Document reporter configuration.]
```

Third-party Newman reporters should be documented separately when installed.

---

# 14. CLI Execution Command

## Final CLI Command

Record the actual Newman command used for project execution.

```bash
[Insert final Newman execution command]
```

## Example

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e ../05_Postman/Environment/Restful_Booker_QA.postman_environment.json \
  -r cli
```

## Command Parameters

| Parameter       | Purpose                            |
| --------------- | ---------------------------------- |
| `newman run`    | Starts Newman collection execution |
| Collection path | Defines the Postman collection     |
| `-e`            | Defines the Postman environment    |
| `-r`            | Defines the reporter               |

## Additional Parameters

| Parameter           | Purpose                           | Used     |
| ------------------- | --------------------------------- | -------- |
| `--folder`          | Execute selected folder           | Yes / No |
| `--iteration-count` | Repeat execution                  | Yes / No |
| `--delay-request`   | Delay between requests            | Yes / No |
| `--timeout-request` | Request timeout                   | Yes / No |
| `--bail`            | Stop execution on defined failure | Yes / No |

Only parameters actually used during project execution should be documented as active configuration.

---

# 15. Execution Result

## Execution Information

| Field          | Value                                       |
| -------------- | ------------------------------------------- |
| Execution ID   | `NEWMAN-RUN-XXX`                            |
| Execution Date | YYYY-MM-DD                                  |
| Execution Time | HH:MM                                       |
| Collection     | Restful Booker API Testing                  |
| Environment    | Restful Booker - QA                         |
| Newman Version | `[version]`                                 |
| Execution Type | Full Collection / Folder / E2E / Regression |
| Result         | PASS / FAIL                                 |

## Newman Execution Summary

| Metric              | Count |
| ------------------- | ----: |
| Iterations          |     0 |
| Requests            |     0 |
| Test Scripts        |     0 |
| Pre-request Scripts |     0 |
| Assertions          |     0 |
| Failed Requests     |     0 |
| Failed Assertions   |     0 |

Replace the values with the actual Newman execution output.

## Execution Duration

```text
[duration]
```

## Data Received

```text
[data size]
```

## Average Response Time

```text
[response time]
```

Performance metrics are informational in this project.

The project is not a formal performance testing project.

## Overall Result

```text
[PASS / FAIL]
```

---

# 16. Assertion Result Analysis

Newman executes Postman JavaScript assertions defined in the collection.

## Assertion Summary

| Assertion Category  | Total |  Pass |  Fail |
| ------------------- | ----: | ----: | ----: |
| HTTP Status         |     0 |     0 |     0 |
| Response Format     |     0 |     0 |     0 |
| Response Contract   |     0 |     0 |     0 |
| Data Type           |     0 |     0 |     0 |
| Data Validation     |     0 |     0 |     0 |
| JSON Schema         |     0 |     0 |     0 |
| Workflow Validation |     0 |     0 |     0 |
| **TOTAL**           | **0** | **0** | **0** |

Update the table using actual execution results where assertion categorization is maintained.

## Failed Assertions

| Request     | Test Case ID | Assertion     | Result |
| ----------- | ------------ | ------------- | ------ |
| `[Request]` | `TC-XXX-XXX` | `[Assertion]` | FAIL   |

If no assertions fail:

```text
No failed assertions were identified during this execution.
```

## Assertion Analysis

```text
[Document important assertion execution observations.]
```

---

# 17. Failed Execution Analysis

A failed Newman execution does not automatically confirm an API defect.

Potential failure sources include:

```text
API Defect
Postman Assertion Error
Incorrect Expected Result
Incorrect Request Configuration
Environment Variable Issue
Request Dependency Failure
Dynamic Variable Extraction Failure
Public API Reset
Network Failure
Newman Configuration Error
```

## Failure Investigation Flow

```text
Newman Failure
      ↓
Identify Failed Request
      ↓
Identify Failed Assertion
      ↓
Review Request Configuration
      ↓
Review Environment Variables
      ↓
Review Previous Request Dependencies
      ↓
Re-execute in Postman
      ↓
Re-execute in Newman
      ↓
Classify Root Cause
```

## Failure Record

| Field            | Value              |
| ---------------- | ------------------ |
| Failed Request   | `[Request Name]`   |
| Test Case ID     | `TC-XXX-XXX`       |
| Failed Assertion | `[Assertion Name]` |
| Expected         | `[Expected]`       |
| Actual           | `[Actual]`         |
| Root Cause       | `[Classification]` |
| Defect ID        | `BUG-API-XXX / —`  |

## Investigation Notes

```text
[Document failure investigation.]
```

---

# 18. Exit Code Validation

Newman returns a process exit code after execution.

The exit code is important for CI/CD integration.

## Expected Behaviour

```text
Successful Execution
      ↓
Exit Code 0
```

```text
Failed Execution
      ↓
Non-zero Exit Code
```

## Exit Code Record

| Field              | Value            |
| ------------------ | ---------------- |
| Execution ID       | `NEWMAN-RUN-XXX` |
| Expected Exit Code | `[value]`        |
| Actual Exit Code   | `[value]`        |
| Result             | PASS / FAIL      |

## PowerShell Exit Code Verification

After Newman execution:

```powershell
$LASTEXITCODE
```

## Expected Successful Result

```text
0
```

## Validation Objective

The project validates that Newman execution can provide a machine-readable process result for CI/CD workflow control.

The intended CI/CD logic is:

```text
Newman Exit Code 0
      ↓
GitHub Actions Job PASS
```

```text
Newman Non-Zero Exit Code
      ↓
GitHub Actions Job FAIL
```

---

# 19. Dynamic Variable Validation

Newman must execute the collection without manually copied runtime values.

## Authentication Token

Source:

```text
POST /auth
```

Dynamic extraction:

```javascript
const response = pm.response.json();

pm.environment.set("authToken", response.token);
```

Runtime variable:

```text
{{authToken}}
```

## Booking ID

Source:

```text
POST /booking
```

Dynamic extraction:

```javascript
const response = pm.response.json();

pm.environment.set("bookingId", response.bookingid);
```

Runtime variable:

```text
{{bookingId}}
```

## Dynamic Variable Validation Matrix

| Variable    | Generated | Reused   | Manual Copy Required | Result      |
| ----------- | --------- | -------- | -------------------- | ----------- |
| `authToken` | Yes / No  | Yes / No | Yes / No             | PASS / FAIL |
| `bookingId` | Yes / No  | Yes / No | Yes / No             | PASS / FAIL |

## Expected Result

```text
Start Newman
      ↓
Generate authToken
      ↓
Reuse authToken
      ↓
Generate bookingId
      ↓
Reuse bookingId
      ↓
Complete Workflow
```

No manual token or booking ID copying should be required.

---

# 20. E2E Workflow Execution

The E2E workflow is a primary Newman execution candidate.

## Postman Folder

```text
09 - E2E Workflows
```

## Execution Command

```bash
newman run ../05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e ../05_Postman/Environment/Restful_Booker_QA.postman_environment.json \
  --folder "09 - E2E Workflows" \
  -r cli
```

## E2E Request Sequence

```text
01 - Create Authentication Token
      ↓
02 - Create Booking
      ↓
03 - Get Created Booking
      ↓
04 - Full Update Booking
      ↓
05 - Get Fully Updated Booking
      ↓
06 - Partial Update Booking
      ↓
07 - Get Partially Updated Booking
      ↓
08 - Delete Booking
      ↓
09 - Verify Booking Deletion
```

## E2E Validation Matrix

| Workflow Stage     | Expected                 | Result      |
| ------------------ | ------------------------ | ----------- |
| Token generated    | Valid token              | PASS / FAIL |
| Booking created    | Booking ID generated     | PASS / FAIL |
| Booking retrieved  | Created data returned    | PASS / FAIL |
| Full update        | Updated data returned    | PASS / FAIL |
| PUT persistence    | Updated data persists    | PASS / FAIL |
| Partial update     | Selected fields updated  | PASS / FAIL |
| PATCH preservation | Omitted fields unchanged | PASS / FAIL |
| Booking deleted    | DELETE succeeds          | PASS / FAIL |
| Deletion verified  | Booking unavailable      | PASS / FAIL |

## E2E Result

```text
[PASS / FAIL]
```

## E2E Notes

```text
[Document actual workflow observations.]
```

---

# 21. Regression Execution

Newman is used to execute automated regression tests after the Postman collection is stabilized.

## Regression Scope

Regression execution may cover:

```text
Health Check
Authentication
Booking Retrieval
Booking Creation
Booking Update
Partial Booking Update
Booking Deletion
JSON Schema Validation
E2E Workflow
```

## Regression Command

```bash
[Insert actual regression execution command]
```

## Regression Execution Record

| Field             | Value            |
| ----------------- | ---------------- |
| Execution ID      | `NEWMAN-REG-XXX` |
| Execution Date    | YYYY-MM-DD       |
| Regression Scope  | `[Scope]`        |
| Requests          | `[count]`        |
| Assertions        | `[count]`        |
| Failed Assertions | `[count]`        |
| Result            | PASS / FAIL      |

## Regression Result

```text
[PASS / FAIL]
```

## Regression Notes

```text
[Document regression observations.]
```

---

# 22. Newman Report

Newman execution results may be stored as persistent reports.

## Report Types

```text
CLI Output
HTML Report
JSON Report
JUnit Report
```

## Primary Project Report

```text
[Selected report format]
```

## Report File

```text
09_Newman/Reports/[report file]
```

Example:

```text
09_Newman/Reports/HTML/newman-report.html
```

## Report Naming Convention

```text
Newman_[Execution-Type]_[YYYY-MM-DD].[extension]
```

Examples:

```text
Newman_Full_Collection_2026-07-11.html
Newman_E2E_2026-07-11.html
Newman_Regression_2026-07-11.html
```

## Report Validation

| Validation                  | Result      |
| --------------------------- | ----------- |
| Report generated            | PASS / FAIL |
| Report file accessible      | PASS / FAIL |
| Collection name displayed   | PASS / FAIL |
| Request results displayed   | PASS / FAIL |
| Assertion results displayed | PASS / FAIL |
| Failures displayed          | PASS / FAIL |

## Report Notes

```text
[Document report observations.]
```

---

# 23. Execution Evidence

Newman execution evidence may include:

* Terminal screenshot
* CLI execution output
* HTML report
* Failed assertion output
* Exit code evidence
* E2E execution result
* Regression execution result

## Evidence Directory

```text
09_Newman/Evidence/
```

## Evidence Naming Convention

```text
NEWMAN_[Execution-ID]_[Description].png
```

Examples:

```text
NEWMAN_RUN_001_Full_Collection.png
NEWMAN_RUN_002_Failed_Assertion.png
NEWMAN_RUN_003_Exit_Code.png
NEWMAN_E2E_001_CRUD_Workflow.png
```

## Evidence Record

| Evidence          | Path     |
| ----------------- | -------- |
| CLI Execution     | `[path]` |
| Execution Summary | `[path]` |
| Exit Code         | `[path]` |
| HTML Report       | `[path]` |

Evidence should represent actual Newman execution.

CLI output should not be manually recreated for portfolio presentation.

---

# 24. Troubleshooting

## Newman Command Not Recognized

Possible cause:

```text
Newman not installed
        or
npm global path unavailable
```

Verification:

```bash
newman --version
```

Investigation:

```bash
npm list -g newman
```

---

## Collection File Not Found

Possible cause:

```text
Incorrect collection path
```

Review:

```text
Collection filename
Current terminal directory
Relative path
```

---

## Environment File Not Found

Possible cause:

```text
Incorrect environment path
```

Verify:

```text
05_Postman/Environment/
```

and the exported environment filename.

---

## baseUrl Not Resolved

Observed request may contain:

```text
{{baseUrl}}
```

Possible causes:

* Environment not loaded
* Incorrect environment file
* Variable missing
* Variable name mismatch

Expected variable:

```text
baseUrl
```

---

## authToken Missing

Possible causes:

```text
Authentication request failed
        ↓
Token extraction script not executed
        ↓
authToken unavailable
```

Investigation flow:

```text
Review POST /auth
      ↓
Review response body
      ↓
Review extraction script
      ↓
Review variable scope
```

---

## bookingId Missing

Possible causes:

```text
POST /booking failed
        ↓
bookingid unavailable
        ↓
Extraction script failed
        ↓
Dependent requests fail
```

Investigation flow:

```text
Review Create Booking
      ↓
Review response body
      ↓
Verify bookingid property
      ↓
Review extraction script
      ↓
Review variable scope
```

---

## Assertion Passes in Postman but Fails in Newman

Possible causes:

* Different environment file
* Stale exported collection
* Collection changes not re-exported
* Different request order
* Runtime variable dependency
* Public API environment reset

Investigation flow:

```text
Compare Postman Collection
        ↓
Compare Exported Collection
        ↓
Compare Environment
        ↓
Review Request Order
        ↓
Re-run Newman
```

---

# 25. CI/CD Preparation

Newman execution is used as the test execution layer for planned GitHub Actions integration.

## Planned CI/CD Flow

```text
GitHub Push
      ↓
GitHub Actions Workflow
      ↓
Checkout Repository
      ↓
Install Node.js
      ↓
Install Newman
      ↓
Execute Postman Collection
      ↓
Evaluate Newman Exit Code
      ↓
PASS / FAIL Workflow
```

## Planned Newman Command

```bash
newman run 05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json \
  -e 05_Postman/Environment/Restful_Booker_QA.postman_environment.json \
  -r cli
```

The final CI/CD command may change based on the GitHub Actions workflow configuration.

## CI/CD Readiness Checklist

* [ ] Collection exported
* [ ] Environment exported
* [ ] Collection executes locally with Newman
* [ ] Dynamic token generation works
* [ ] Dynamic booking ID generation works
* [ ] E2E workflow executes
* [ ] Newman exit code validated
* [ ] No private secrets committed
* [ ] Relative file paths verified
* [ ] Regression execution stabilized

## CI/CD Readiness Status

```text
[NOT READY / READY]
```

---

# 26. Maintenance

The Newman execution configuration must remain synchronized with the Postman collection.

## Collection Change Flow

```text
Postman Request Changed
      ↓
Postman Test Script Reviewed
      ↓
Collection Re-executed
      ↓
Collection Re-exported
      ↓
Newman Re-executed
      ↓
Execution Result Reviewed
```

## Environment Change Flow

```text
Environment Variable Changed
      ↓
Environment Reviewed
      ↓
Environment Re-exported
      ↓
Newman Re-executed
```

## Maintenance Rules

1. Develop and debug API requests in Postman.
2. Execute changed requests before collection export.
3. Re-export the Postman collection after relevant changes.
4. Re-export the environment after relevant environment changes.
5. Re-run Newman after collection changes.
6. Investigate failed assertions before defect classification.
7. Do not modify assertions only to force a successful Newman run.
8. Keep Newman commands synchronized with repository paths.
9. Verify dynamic variables after workflow changes.
10. Re-run regression tests before CI/CD execution changes.

The following workflow should be avoided:

```text
Newman FAIL
      ↓
Remove Failed Assertion
      ↓
Newman PASS
```

The required workflow is:

```text
Newman FAIL
      ↓
Investigate Failure
      ↓
Identify Root Cause
      ↓
Correct Test or Report Defect
      ↓
Re-execute
```

---

# 27. Newman Execution Summary

**Project:** Restful Booker API Testing Project
**Execution Tool:** Newman
**Collection:** Restful Booker API Testing
**Environment:** Restful Booker - QA
**Execution Status:** `[Not Executed / PASS / FAIL]`

The Newman execution layer validates that the Postman API test collection can execute outside the Postman GUI.

The implementation covers:

```text
Postman Collection Export
        ↓
Postman Environment Export
        ↓
Newman Installation
        ↓
CLI Collection Execution
        ↓
Environment Variable Resolution
        ↓
Dynamic Token Generation
        ↓
Dynamic Booking ID Generation
        ↓
Request Chaining
        ↓
JavaScript Assertion Execution
        ↓
JSON Schema Validation
        ↓
E2E Workflow Execution
        ↓
Regression Execution
        ↓
Exit Code Validation
        ↓
Execution Reporting
```

The intended automation architecture is:

```text
Postman
   ↓
Newman
   ↓
GitHub Actions
```

Current Newman execution result:

```text
Execution ID:        [NEWMAN-RUN-XXX]
Requests:            [count]
Assertions:          [count]
Failed Assertions:   [count]
Exit Code:           [value]
Overall Result:      [PASS / FAIL / NOT EXECUTED]
```

The final execution values will be added after the Postman collection is implemented, exported, and executed using Newman CLI.

Newman execution results will provide the command-line automation foundation for the GitHub Actions CI/CD implementation.

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
**Status:** Template
