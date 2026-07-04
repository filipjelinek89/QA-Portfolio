# Test Execution

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Test Execution Status](#2-test-execution-status)
* [3. Execution Summary by Module](#3-execution-summary-by-module)
* [4. Test Execution Log](#4-test-execution-log)
* [5. Notes](#5-notes)

---

# 1. Purpose

This document records the execution results of all manual test cases created for the ParaBank Manual Testing Project.

The execution status will be updated throughout the testing process, and all failed test cases will be linked to the corresponding bug reports.

---

# 2. Test Execution Status

## Current Progress

| Status         |  Count |
| -------------- | -----: |
| ✅ Passed       |      0 |
| ❌ Failed       |      0 |
| 🚫 Blocked     |      0 |
| ⏳ Not Executed |     70 |
| **Total**      | **70** |

---

# 3. Execution Summary by Module

| Module                        |  Total | Passed | Failed | Blocked | Not Executed |
| ----------------------------- | -----: | -----: | -----: | ------: | -----------: |
| User Registration             |      8 |      0 |      0 |       0 |            8 |
| Login                         |      8 |      0 |      0 |       0 |            8 |
| Account Overview              |      7 |      0 |      0 |       0 |            7 |
| Open New Account              |      7 |      0 |      0 |       0 |            7 |
| Transfer Funds                |     10 |      0 |      0 |       0 |           10 |
| Bill Payment                  |      9 |      0 |      0 |       0 |            9 |
| Request Loan                  |      7 |      0 |      0 |       0 |            7 |
| Navigation & Logout           |      6 |      0 |      0 |       0 |            6 |
| Validation & Negative Testing |      8 |      0 |      0 |       0 |            8 |
| **Total**                     | **70** |  **0** |  **0** |   **0** |       **70** |

---

# 4. Test Execution Log

| Test Case | Title                                              | Status         | Bug ID | Comments |
| --------- | -------------------------------------------------- | -------------- | ------ | -------- |
| TC001     | Verify Successful User Registration                | ⏳ Not Executed | —      | —        |
| TC002     | Verify Registration with Required Fields Only      | ⏳ Not Executed | —      | —        |
| TC003     | Verify Registration with Empty Required Fields     | ⏳ Not Executed | —      | —        |
| ...       | ...                                                | ...            | ...    | ...      |
| TC070     | Verify Multiple Browser Tabs with the Same Session | ⏳ Not Executed | —      | —        |

> Update each row after executing the corresponding test case. If a defect is identified, replace **Bug ID** with the appropriate reference (e.g., BUG001).

---

# 5. Notes

* All test cases are initially marked as **Not Executed**.
* Failed test cases should have a corresponding bug report in the **04_Bug_Reports** folder.
* Update the execution statistics after each testing session to keep this document current.
* Ensure all defects are reproducible before reporting them.

---

# Document Version History

| Version | Date       | Author        | Changes         |
| ------- | ---------- | ------------- | --------------- |
| 1.0     | YYYY-MM-DD | Filip Jelinek | Initial version |

---

⬅️ Back to QA ParaBank README

[QA-ParaBank-README.md](qa-parabank-README.md)
