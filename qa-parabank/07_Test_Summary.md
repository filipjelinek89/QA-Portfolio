# Test Summary Report

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Purpose](#1-purpose)
* [2. Testing Overview](#2-testing-overview)
* [3. Test Execution Summary](#3-test-execution-summary)
* [4. Defect Summary](#4-defect-summary)
* [5. Test Coverage](#5-test-coverage)
* [6. Risks & Observations](#6-risks--observations)
* [7. Conclusion](#7-conclusion)

---

# 1. Purpose

The purpose of this Test Summary Report is to summarize the manual testing activities performed on the ParaBank application, present the overall execution results, provide an overview of identified defects, and evaluate the quality and stability of the application after completion of the testing cycle.

---

# 2. Testing Overview

| Item                    | Details                   |
| ----------------------- | ------------------------- |
| **Application**         | ParaBank                  |
| **Testing Type**        | Manual Functional Testing |
| **Test Cases**          | 70                        |
| **Executed Test Cases** | 70                        |
| **Test Environment**    | Windows 11, Google Chrome |
| **Tester**              | Filip Jelinek             |
| **Test Period**         | July 2026                 |

---

# 3. Test Execution Summary

| Status         |  Count |
| -------------- | -----: |
| ✅ Passed       |     47 |
| ❌ Failed       |     16 |
| 🚫 Blocked     |      7 |
| ⏳ Not Executed |      0 |
| **Total**      | **70** |

## Execution Metrics

| Metric             | Value |
| ------------------ | ----: |
| Pass Rate          | 67.1% |
| Fail Rate          | 22.9% |
| Blocked Rate       | 10.0% |
| Execution Progress |  100% |

---

# 4. Defect Summary

A total of **16 defects** were identified during the execution of the test suite. Additionally, **7 test cases** were blocked due to an existing application defect that prevented further validation of the loan request functionality.

| Severity          |  Count |
| ----------------- | -----: |
| 🔴 Critical       |      1 |
| 🟠 High           |      4 |
| 🟡 Medium         |      7 |
| 🔵 Low            |      4 |
| **Total Defects** | **16** |

---

# 5. Test Coverage

The following functional areas were included in the testing scope:

* ✅ User Registration
* ✅ User Login
* ✅ Account Overview
* ✅ Open New Account
* ✅ Transfer Funds
* ✅ Bill Payment
* ✅ Request Loan
* ✅ Navigation & Logout
* ✅ Validation & Negative Testing
* ✅ Exploratory Testing

### Not Included

* API Testing (planned for a future project)
* Performance Testing
* Security Testing
* Cross-browser Compatibility Testing
* Mobile Testing

---

# 6. Risks & Observations

The following observations were made during the testing cycle:

* Most core banking features functioned correctly under normal conditions.
* Several defects were identified in edge cases and validation scenarios.
* One application defect prevented complete verification of the loan request workflow, resulting in seven blocked test cases.
* The application demonstrated generally stable behavior during manual testing.
* Additional regression testing is recommended after fixing the reported defects.
* Future testing should include API, performance, security, and cross-browser testing to improve overall test coverage.

---

# 7. Conclusion

The manual testing cycle has been successfully completed with all **70 planned test cases executed**.

### Overall Results

* **47** test cases passed successfully.
* **16** test cases failed due to confirmed application defects.
* **7** test cases were blocked because of an existing defect affecting loan processing.

The overall quality of the application is acceptable for demonstration purposes; however, several defects should be resolved before considering the application production-ready. A complete regression test is recommended after defect fixes have been implemented to verify system stability and ensure no new issues have been introduced.

---

# Document Version History

| Version | Date    | Author        | Changes                   |
| ------- | ------- | ------------- | ------------------------- |
| 1.0     | 2026-07 | Filip Jelinek | Initial completed version |

---

⬅️ **Back to QA ParaBank README**

[QA-ParaBank-README.md](qa-parabank-README.md)
