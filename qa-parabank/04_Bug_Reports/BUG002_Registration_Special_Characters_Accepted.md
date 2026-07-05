# BUG002 – Registration Accepts Special Characters Without Input Validation

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG002                                                  |
| **Title**             | Registration accepts special characters without input validation |
| **Related Test Case** | TC007                                                   |
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
* Test data containing special characters is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Open ParaBank application. |
| 2 | Navigate to the user registration page. |
| 3 | Enter special characters into registration input fields (First Name, Last Name, Address, etc.). |
| 4 | Complete Username, Password, and Confirm Password fields. |
| 5 | Click the Register button. |

---

## Expected Result

The application should validate user input and prevent unsupported special characters from being accepted.

A validation message should be displayed informing the user about invalid characters.

The account should not be created until valid information is entered.

---

## Actual Result

The application accepted special characters in the registration fields without displaying any validation message.

The registration process was completed successfully, a new customer account was created, and the user was automatically logged into the application with invalid customer data.

---

## Impact

This defect affects user data quality and input validation.

Impact:

* Invalid customer information can be stored in the system.
* Customer records may contain incorrect data.
* Data processing or integrations may be affected.
* Reduces reliability of customer information.

---

## Attachments

### Screenshots

[BUG-002 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG002_TC007_Registration_Special_Characters_Accepted.png.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects registration data validation.

A banking application should validate customer information before account creation to prevent invalid data from being stored.

Input validation rules should be implemented for customer registration fields.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC007                                      |
| Test Data       | Registration fields with special characters |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The application successfully creates customer accounts even when registration fields contain unsupported special characters.

This issue was discovered during negative input validation testing.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
