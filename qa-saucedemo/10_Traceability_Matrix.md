# Traceability Matrix

## 📌 Project Information

**Project:** SauceDemo Manual Testing Project

**Application:** SauceDemo (https://www.saucedemo.com)

**Testing Type:** Manual Functional Testing

**Prepared By:** Filip Jelinek

---

## 📑 In-page Navigation

- [Overview](#overview)
- [Purpose](#purpose)
- [Traceability Matrix](#traceability-matrix)
- [Coverage Summary](#coverage-summary)
- [Summary](#summary)

---

# Overview

The Traceability Matrix provides end-to-end traceability between project requirements, test scenarios, test cases, execution results, and reported defects.

Maintaining a traceability matrix ensures that every requirement has been verified through testing and that any identified defects can be traced back to the affected requirement and corresponding test case.

---

# Purpose

The Traceability Matrix helps to:

- Verify complete requirement coverage
- Link requirements to test scenarios
- Link test scenarios to test cases
- Track execution status
- Associate failed test cases with reported defects
- Improve testing transparency and project documentation

---

# Traceability Matrix

| Requirement                    | Test Scenario        | Test Case | Execution | Bug Report |
| ------------------------------ | -------------------- | --------- | :-------: | ---------- |
| **REQ-001** User Login         | TS-001 Login         | TC-001    |   ❌ Fail  | BUG-001    |
| **REQ-001** User Login         | TS-001 Login         | TC-002    |   ✅ Pass  | —          |
| **REQ-001** User Login         | TS-001 Login         | TC-003    |   ✅ Pass  | —          |
| **REQ-001** User Login         | TS-001 Login         | TC-004    |   ❌ Fail  | BUG-002    |
| **REQ-001** User Login         | TS-001 Login         | TC-005    |   ✅ Pass  | —          |
| **REQ-001** User Login         | TS-001 Login         | TC-006    |   ❌ Fail  | BUG-010    |
| **REQ-001** User Login         | TS-001 Login         | TC-007    |   ✅ Pass  | —          |
| **REQ-002** Inventory          | TS-002 Inventory     | TC-009    |   ✅ Pass  | —          |
| **REQ-002** Inventory          | TS-002 Inventory     | TC-016    |   ❌ Fail  | BUG-007    |
| **REQ-002** Inventory          | TS-002 Inventory     | TC-017    |   ❌ Fail  | BUG-015    |
| **REQ-002** Inventory          | TS-002 Inventory     | TC-018    |   ❌ Fail  | BUG-011    |
| **REQ-003** Shopping Cart      | TS-003 Shopping Cart | TC-021    |   ❌ Fail  | BUG-003    |
| **REQ-003** Shopping Cart      | TS-003 Shopping Cart | TC-022    |   ✅ Pass  | —          |
| **REQ-003** Shopping Cart      | TS-003 Shopping Cart | TC-023    |   ✅ Pass  | —          |
| **REQ-003** Shopping Cart      | TS-003 Shopping Cart | TC-024    |   ✅ Pass  | —          |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-028    |   ✅ Pass  | —          |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-033    |   ❌ Fail  | BUG-004    |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-034    |   ❌ Fail  | BUG-005    |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-036    |   ❌ Fail  | BUG-006    |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-040    |   ❌ Fail  | BUG-008    |
| **REQ-004** Checkout           | TS-004 Checkout      | TC-041    |   ❌ Fail  | BUG-014    |
| **REQ-005** Session Management | TS-005 Logout        | TC-029    |   ❌ Fail  | BUG-009    |
| **REQ-006** Navigation         | TS-006 Navigation    | TC-015    |   ❌ Fail  | BUG-013    |
| **REQ-007** External Links     | TS-007 Footer        | TC-042    |   ❌ Fail  | BUG-012    |

---

# Coverage Summary

| Item                | Count |
| ------------------- | ----: |
| Requirements        |     7 |
| Test Scenarios      |     7 |
| Test Cases          |    42 |
| Executed Test Cases |    42 |
| Passed              |    27 |
| Failed              |    15 |
| Reported Bugs       |    15 |

---

# Summary

The Traceability Matrix confirms that all documented requirements were covered by one or more test scenarios and corresponding test cases.

Every failed test case has been linked to an associated bug report, providing complete traceability throughout the testing lifecycle. This approach improves transparency, simplifies impact analysis, and demonstrates structured QA documentation practices.

---

⬅️ **Back to Portfolio**

[qa-saucedemo-README.md](qa-saucedemo-README.md)
