# Bug Reports

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Bug Report Summary](#2-bug-report-summary)
- [3. Severity Definitions](#3-severity-definitions)
- [4. Priority Definitions](#4-priority-definitions)
- [5. Bug Report List](#5-bug-report-list)
- [6. Bug Report Structure](#6-bug-report-structure)

---

# 1. Purpose

This document serves as the central index of all confirmed defects identified during manual testing of the ParaBank application.

Each defect has been documented in an individual Markdown file containing detailed reproduction steps, expected and actual results, severity, priority, supporting evidence, and QA assessment.

---

# 2. Bug Report Summary

| Metric | Value |
|---------|------:|
| **Total Bugs** | **16** |
| 🔴 Critical | 1 |
| 🟠 High | 4 |
| 🟡 Medium | 7 |
| 🔵 Low | 4 |

---

# 3. Severity Definitions

| Severity | Description |
|-----------|-------------|
| 🔴 **Critical** | Prevents the use of a core banking feature, causes application failure, data corruption, or presents a significant security risk. |
| 🟠 **High** | Major functionality is affected and significantly impacts user experience, although a workaround may exist. |
| 🟡 **Medium** | Functionality behaves incorrectly but does not prevent normal application use. |
| 🔵 **Low** | Minor cosmetic, usability, or non-critical issue with little impact on functionality. |

---

# 4. Priority Definitions

| Priority | Description |
|----------|-------------|
| 🔴 High | Requires immediate attention and should be fixed before release. |
| 🟠 Medium | Should be resolved in an upcoming release. |
| 🔵 Low | Can be addressed when development resources are available. |

---

# 5. Bug Report List

| Bug ID | Title | Severity | Priority | Status | Related Test Case |
|--------|-------|----------|----------|--------|-------------------|
| BUG001 | Registration accepts duplicate username | 🟡 Medium | High | Open | TC005 |
| BUG002 | Registration accepts special characters in First Name | 🟡 Medium | Medium | Open | TC009 |
| BUG003 | Registration accepts numeric values in First Name | 🟡 Medium | Medium | Open | TC010 |
| BUG004 | Transfer accepts zero amount | 🟠 High | High | Open | TC039 |
| BUG005 | Transfer accepts negative amount | 🟠 High | High | Open | TC040 |
| BUG006 | Transfer allows amount exceeding available balance | 🔴 Critical | High | Open | TC041 |
| BUG007 | Empty transfer amount causes Internal Server Error | 🟠 High | High | Open | TC042 |
| BUG008 | Bill payment accepts non-existing account number | 🟠 High | High | Open | TC049 |
| BUG009 | Bill payment accepts negative payment amount | 🟡 Medium | Medium | Open | TC051 |
| BUG010 | Bill payment accepts invalid ZIP code | 🟡 Medium | Medium | Open | TC055 |
| BUG011 | Bill payment accepts invalid phone number | 🟡 Medium | Medium | Open | TC056 |
| BUG012 | Loan request returns Internal Server Error | 🔴 Critical | High | Open | TC061–TC067 |
| BUG013 | Browser Back button allows access after logout | 🟡 Medium | Medium | Open | TC068 |
| BUG014 | HTML input prevents JavaScript injection (Security Test) | 🔵 Low | Low | Closed (Expected Behavior) | TC063 |
| BUG015 | Unicode characters not handled correctly | 🔵 Low | Low | Open | TC064 |
| BUG016 | Multiple browser tabs produce Internal Server Error after logout | 🔵 Low | Low | Open | TC070 |

> **Note:** Several test cases related to the loan request functionality were blocked due to **BUG012**, which prevented successful completion of the workflow.

---

# 6. Bug Report Structure

Each defect is documented in a separate Markdown file using the following naming convention:

```
BUG001_Short_Description.md
BUG002_Short_Description.md
BUG003_Short_Description.md
...
```

Every bug report includes:

- Bug ID
- Title
- Environment
- Browser
- Browser Version
- Operating System
- Related Test Case
- Severity
- Priority
- Status
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Impact
- Attachments (Screenshots)
- QA Assessment
- Test Evidence

---

## Folder Structure

```
04_Bug_Reports/
│
├── 04_Bug_Reports.md
├── BUG001_Registration_Unique_Username_Validation.md
├── BUG002_Registration_Special_Characters_Accepted.md
├── BUG003_Registration_Numeric_Values_Accepted.md
├── BUG004_Transfer_Zero_Amount_Accepted.md
├── BUG005_Transfer_Negative_Amount_Accepted.md
├── BUG006_Transfer_Exceeding_Balance_Accepted.md
├── BUG007_Transfer_Empty_Amount_Internal_Error.md
├── BUG008_Bill_Payment_Non_Existent_Account_Accepted.md
├── BUG009_Bill_Payment_Negative_Amount_Accepted.md
├── BUG010_Bill_Payment_Invalid_ZIP_Code_Accepted.md
├── BUG011_Bill_Payment_Invalid_Phone_Number_Accepted.md
├── BUG012_Loan_Request_Internal_Error.md
├── BUG013_Back_Button_Access_After_Logout.md
├── BUG014_HTML_JavaScript_Input_Security_Block.md
├── BUG015_Unicode_Characters_Not_Handled_Correctly.md
├── BUG016_Multiple_Browser_Tabs_Session_Internal_Error.md
└── BUGXXX_Bug_Template.md
```

---

# Document Version History

| Version | Date | Author | Changes |
|---------|------------|---------------|-----------------------------|
| 1.0 | 2026-07 | Filip Jelinek | Initial completed version |

---

⬅️ **Back to QA ParaBank README**

[QA-ParaBank-README.md](qa-parabank-README.md)
