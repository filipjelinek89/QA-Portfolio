# BUG007 – Transfer Funds Displays Internal Error When Amount Field Is Empty

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG007                                                  |
| **Title**             | Transfer Funds displays internal error when amount field is empty |
| **Related Test Case** | TC038                                                   |
| **Module**            | Transfer Funds                                          |
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

* User is registered in ParaBank.
* User is logged into the application.
* User has at least two active accounts available.
* Transfer Funds page is accessible.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Transfer Funds page. |
| 3 | Leave the Amount field empty. |
| 4 | Select a source account. |
| 5 | Select a destination account. |
| 6 | Click the Transfer button. |

---

## Expected Result

The application should validate the required Amount field before submitting the transfer request.

A clear validation message should be displayed.

Example:

"Amount is required."

or

"Please enter a valid transfer amount."

The transfer should not be processed, and no internal application error should occur.

---

## Actual Result

The user submitted the transfer form without entering an amount value.

The application returned a generic system error message:

"An internal error has occurred and has been logged."

No field validation message was displayed, and the user was not informed that the Amount field is required.

---

## Impact

This defect affects input validation and error handling in the Transfer Funds functionality.

Impact:

* Users receive unclear system error messages.
* Required field validation is missing.
* The application exposes internal error behavior to users.
* User experience is negatively affected.
* Error logs may contain unnecessary avoidable validation errors.

---

## Attachments

### Screenshots

[BUG-007 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG007_TC038_Transfer_Empty_Amount_Internal_Error.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects the application's error handling.

The system should validate user input before processing transfer requests. Empty required fields should return user-friendly validation messages instead of internal application errors.

Input validation should be implemented to prevent unnecessary backend errors.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC038                                      |
| Test Data       | Empty Amount field                         |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during required field validation testing.

The transfer was correctly prevented; however, the application failed to provide appropriate feedback to the user.

Proper client-side or server-side validation should be implemented for the Amount field.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
