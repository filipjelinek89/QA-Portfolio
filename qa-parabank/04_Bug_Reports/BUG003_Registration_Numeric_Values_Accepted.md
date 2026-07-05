# BUG003 – Registration Accepts Numeric Values in Text Fields Without Validation

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG003                                                  |
| **Title**             | Registration accepts numeric values in text fields without validation |
| **Related Test Case** | TC008                                                   |
| **Module**            | User Registration                                       |
| **Severity**          | Medium                                                  |
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
| Testing Type     | Manual Testing                     |

---

## Preconditions

* ParaBank application is accessible.
* User is on the customer registration page.
* No active user session exists.
* Test data containing numeric values for text fields is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Open ParaBank application. |
| 2 | Navigate to the user registration page. |
| 3 | Enter numeric values into text-based fields such as First Name, Last Name, City, and State. |
| 4 | Complete all remaining required registration fields with valid data. |
| 5 | Enter a unique username and matching password values. |
| 6 | Click the Register button. |

---

## Expected Result

The application should validate text-based customer information fields.

Fields such as First Name, Last Name, City, and State should not accept numeric-only values.

A validation message should be displayed informing the user that the entered format is invalid.

The account should not be created until valid customer information is entered.

---

## Actual Result

The application accepted numeric values in text-based customer information fields without displaying any validation messages.

The registration process was completed successfully, a new customer account was created, and the user was automatically logged into the application using invalid customer data.

---

## Impact

This defect affects customer data validation and information quality.

Impact:

* Invalid customer information can be stored in the system.
* Customer profiles may contain incorrect personal data.
* Data accuracy and reliability are reduced.
* Other banking processes depending on customer information may be affected.

---

## Attachments

### Screenshots

[BUG-003 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG003_TC008_Registration_Numeric_Values_Accepted.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects customer registration validation.

A banking application should validate personal information fields to prevent incorrect customer records from being created.

Additional input validation rules should be implemented for text-based registration fields.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC008                                      |
| Test Data       | Numeric values entered into text fields    |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The application allows successful customer registration even when personal information fields contain invalid numeric values.

This issue was discovered during negative input validation testing.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
