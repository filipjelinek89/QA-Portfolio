# Screenshots

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Screenshot Categories](#2-screenshot-categories)
- [3. Screenshot Index](#3-screenshot-index)
- [4. Naming Convention](#4-naming-convention)
- [5. Folder Structure](#5-folder-structure)

---

# 1. Purpose

This document provides an index of screenshots captured during manual testing of the ParaBank application.

Screenshots serve as supporting evidence for executed test cases and confirmed defects. They provide visual documentation of application behavior and are referenced throughout the test execution and bug reports.

Screenshots are used for:

- Test execution evidence
- Bug report documentation
- Validation of application behavior
- UI verification
- Functional verification

---

# 2. Screenshot Categories

The screenshots included in this project cover the following functional areas:

- User Registration
- Transfer Funds
- Bill Payment
- Loan Request
- Session Management
- Input Validation
- Security Testing
- Unicode Testing
- Browser Session Handling

---

# 3. Screenshot Index

| Screenshot ID | Description | Related Test Case | Related Bug |
|--------------|-------------|-------------------|-------------|
| SS001 | Registration accepts duplicate username | TC006 | BUG001 |
| SS002 | Registration accepts special characters | TC007 | BUG002 |
| SS003 | Registration accepts numeric values | TC008 | BUG003 |
| SS004 | Transfer accepts zero amount | TC033 | BUG004 |
| SS005 | Transfer accepts negative amount | TC034 | BUG005 |
| SS006 | Transfer exceeds available balance | TC036 | BUG006 |
| SS007 | Empty transfer amount causes Internal Server Error | TC038 | BUG007 |
| SS008 | Bill payment accepts non-existent account | TC043 | BUG008 |
| SS009 | Bill payment accepts negative amount | TC045 | BUG009 |
| SS010 | Bill payment accepts invalid ZIP code | TC047 | BUG010 |
| SS011 | Bill payment accepts invalid phone number | TC048 | BUG011 |
| SS012 | Loan request returns Internal Server Error | TC050 | BUG012 |
| SS013 | HTML input blocks JavaScript injection | TC064 | BUG014 |
| SS014 | Unicode characters displayed incorrectly | TC067 | BUG015 |
| SS015 | Multiple browser tabs produce Internal Server Error | TC070 | BUG016 |

> Every confirmed defect documented in this project includes at least one supporting screenshot.

---

# 4. Naming Convention

Screenshots follow the naming convention:

```text
BUGXXX_TCXXX_Short_Description.png
```

Examples:

```text
BUG001_TC006_Registration_Unique_Username_Error.png
BUG006_TC036_Transfer_Exceeding_Balance_Accepted.png
BUG012_TC050_Loan_Request_Internal_Error.png
```

Benefits:

- Consistent file naming.
- Easy traceability between screenshots, test cases, and bug reports.
- Simplified repository navigation.
- Professional documentation structure.

---

# 5. Folder Structure

```text
08_Screenshots/
│
├── 08_Screenshots.md
├── BUG001_TC006_Registration_Unique_Username_Error.png
├── BUG002_TC007_Registration_Special_Characters_Accepted.png
├── BUG003_TC008_Registration_Numeric_Values_Accepted.png
├── BUG004_TC033_Transfer_Zero_Amount_Accepted.png
├── BUG005_TC034_Transfer_Negative_Amount_Accepted.png
├── BUG006_TC036_Transfer_Exceeding_Balance_Accepted.png
├── BUG007_TC038_Transfer_Empty_Amount_Internal_Error.png
├── BUG008_TC043_Bill_Payment_Non_Existent_Account_Accepted.png
├── BUG009_TC045_Bill_Payment_Negative_Amount_Accepted.png
├── BUG010_TC047_Bill_Payment_Invalid_ZIP_Code_Accepted.png
├── BUG011_TC048_Bill_Payment_Invalid_Phone_Number_Accepted.png
├── BUG012_TC050_Loan_Request_Internal_Error.png
├── BUG014_TC064_HTML_JavaScript_Input_Security_Block.png
├── BUG015_TC067_Unicode_Characters_Display_Incorrectly.png
└── BUG016_TC070_Multiple_Tabs_Session_Internal_Error.png
```

---

# Notes

- Every confirmed defect is supported by at least one screenshot.
- Screenshots were captured during manual execution of the corresponding test cases.
- Images do not contain any sensitive or personal information.
- Screenshot filenames directly correspond to the associated bug reports and test cases for full traceability.

---

# Document Version History

| Version | Date | Author | Changes |
|---------|------------|---------------|-----------------------------|
| 1.0 | 2026-07 | Filip Jelinek | Initial completed version |

---

⬅️ **Back to QA ParaBank README**

[QA-ParaBank-README.md](qa-parabank-README.md)
