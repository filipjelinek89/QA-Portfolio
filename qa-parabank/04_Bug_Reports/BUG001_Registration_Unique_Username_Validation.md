# BUG001 – Registration Incorrectly Rejects Unique Usernames as Existing

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                       |
| --------------------- | ----------------------------------------------------------- |
| **Bug ID**            | BUG001                                                      |
| **Title**             | Registration incorrectly rejects unique usernames as existing |
| **Related Test Case** | TC006                                                       |
| **Module**            | User Registration                                           |
| **Severity**          | Critical                                                    |
| **Priority**          | High                                                        |
| **Status**            | New                                                         |
| **Reported On**       | 2026-07-04                                                  |

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
* The username used for registration does not already exist.
* Valid customer information is entered.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Open ParaBank application. |
| 2 | Navigate to the user registration page. |
| 3 | Complete all required registration fields with valid data. |
| 4 | Enter a new unique username: `filiptest20260704001`. |
| 5 | Enter password and password confirmation. |
| 6 | Click the Register button. |

---

## Expected Result

The application should accept a new unique username and complete the registration process successfully.

A new customer account should be created, the user should be automatically logged in, and the Accounts Overview page should be displayed.

---

## Actual Result

The application incorrectly rejects the new unique username and displays the validation message:

"This username already exists."

The issue occurs even when using a username that has not been previously registered. The user cannot complete the registration process.

---

## Impact

This defect prevents new customers from creating accounts.

Impact:

* New users cannot complete registration.
* Account creation functionality is blocked.
* The main customer onboarding workflow is unavailable.
* Users may incorrectly believe their selected username is already taken.

---

## Attachments

### Screenshots

[BUG-001 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG001_TC006_Registration_Unique_Username_Error.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects a critical user workflow.

Registration is one of the main functions of the banking application. The system incorrectly validates unique usernames as existing, preventing new customers from creating accounts.

This issue should be investigated before production release.

---

## Test Evidence

| Item            | Value                                    |
| --------------- | ---------------------------------------- |
| Test Case       | TC006                                    |
| Test Data       | Username: filiptest20260704001           |
| Reproducibility | Always                                   |
| Frequency       | 100%                                     |

---

## Notes

During boundary testing with maximum field length values, registration could not be completed because the username validation incorrectly blocked account creation.

The issue was reproduced again using a normal unique username.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
