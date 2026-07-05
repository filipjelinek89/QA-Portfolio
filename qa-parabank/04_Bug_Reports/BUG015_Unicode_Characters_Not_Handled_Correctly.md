# BUG015 – Unicode Characters Are Not Handled Correctly in Registration Fields

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG015                                                  |
| **Title**             | Unicode characters are not handled correctly in registration fields |
| **Related Test Case** | TC067                                                   |
| **Module**            | Validation & Negative Testing / User Registration       |
| **Severity**          | Low                                                     |
| **Priority**          | Medium                                                  |
| **Status**            | New                                                     |
| **Reported On**       | 2026-07-04                                              |

---

## Environment

| Item             | Value                              |
| ---------------- | ---------------------------------- |
| Application      | ParaBank                           |
| URL              | https://parabank.parasoft.com/     |
| Browser          | Google Chrome                      |
| Browser Version  | 149.0.7827.197                     |
| Operating System | Windows 11                         |
| Testing Type     | Manual Testing / Validation Testing |

---

## Preconditions

* User is on the ParaBank registration page.
* User is not logged into the application.
* Registration form is available.
* Unicode character test data is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Open the ParaBank application. |
| 2 | Navigate to the Register page. |
| 3 | Enter Unicode characters into registration fields. |
| 4 | Enter Last Name: Jelínek. |
| 5 | Enter Address: Černá 125. |
| 6 | Enter City: České Budějovice. |
| 7 | Enter State: Jihočeský. |
| 8 | Complete remaining fields with valid data. |
| 9 | Submit the registration form. |
| 10 | Verify displayed field values after submission. |

---

## Expected Result

The application should correctly handle Unicode characters.

Expected behavior:

* Accented characters should be stored and displayed correctly.

Examples:

- Jelínek
- Černá 125
- České Budějovice
- Jihočeský

OR

* If Unicode characters are not supported, the application should display a clear validation message.

No data corruption or encoding issues should occur.

---

## Actual Result

After submitting registration data containing Unicode characters, the application did not display the characters correctly.

Entered values were converted into incorrect characters and HTML entity codes.

Examples:

Expected:

- Jelínek
- Černá 125
- České Budějovice
- Jihočeský

Displayed:

- Jel?n?ek
- &#268;ern? 125
- &#268;esk? Bud&#283;jovice
- Jiho&#269;esk?

No validation message was displayed informing the user that Unicode characters are unsupported.

---

## Impact

This defect affects international users and customer data quality.

Impact:

* Customer names may be stored incorrectly.
* Address information may become corrupted.
* Users from countries using accented characters may experience incorrect personal data display.
* Data consistency and readability are reduced.

---

## Attachments

### Screenshots

BUG015_TC067_Unicode_Characters_Display_Incorrectly.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects Unicode character handling.

Applications supporting international users should correctly process common Unicode characters or clearly inform users when such characters are not supported.

Input encoding and character handling should be reviewed.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC067                                      |
| Test Data       | Czech Unicode characters                   |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during validation and internationalization testing.

The application remained functional, but user input data was corrupted due to incorrect Unicode handling.

Character encoding configuration should be reviewed to ensure proper support for international text.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
