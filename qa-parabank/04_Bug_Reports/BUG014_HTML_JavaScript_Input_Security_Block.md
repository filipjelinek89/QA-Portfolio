# BUG014 – HTML/JavaScript Input Triggers Security Block Instead of Application Validation

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG014                                                  |
| **Title**             | HTML/JavaScript input triggers security block instead of application validation |
| **Related Test Case** | TC064                                                   |
| **Module**            | Validation & Negative Testing                           |
| **Severity**          | Medium                                                  |
| **Priority**          | High                                                    |
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
| Testing Type     | Manual Testing / Security Testing |

---

## Preconditions

* User is on the ParaBank registration page.
* User is not logged into the application.
* Registration functionality is accessible.
* HTML/JavaScript test data is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Open the ParaBank application. |
| 2 | Navigate to the Register page. |
| 3 | Enter HTML/JavaScript input into registration fields. |
| 4 | Enter `<script>alert('Test')</script>` into First Name field. |
| 5 | Enter `<img src=x onerror=alert('Test')>` into Address field. |
| 6 | Complete remaining required fields with valid data. |
| 7 | Submit the registration form. |

---

## Expected Result

The application should safely handle HTML and JavaScript input.

Expected behavior:

* JavaScript code should not execute.
* HTML tags should not be rendered as page elements.
* Input should be escaped, sanitized, or rejected with a clear validation message.
* The application should remain available.
* No unexpected errors or access restrictions should occur.

---

## Actual Result

After submitting registration data containing HTML and JavaScript input, the request triggered a security protection mechanism.

The user was redirected to a blocking page displaying:

"Sorry, you have been blocked. You are unable to access parasoft.com."

The application did not display a standard validation message and the user could no longer continue the registration process.

---

## Impact

This defect affects input handling and user experience during security validation.

Impact:

* User workflow is interrupted.
* Application does not provide clear validation feedback.
* Potentially unsafe input is handled by external protection instead of application validation.
* Users may lose access instead of receiving a controlled error message.

---

## Attachments

### Screenshots

BUG014_TC064_HTML_JavaScript_Input_Security_Block.png

---

### Video

Not attached.

---

## QA Assessment

The application successfully prevented HTML/JavaScript execution; however, the input was not handled gracefully by the application validation layer.

A banking application should validate or sanitize potentially unsafe input and return an appropriate user message instead of allowing the request to trigger a full security block.

Input validation and error handling should be improved.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC064                                      |
| Test Data       | HTML/JavaScript input                      |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during basic security input validation testing.

No JavaScript execution was observed, and no XSS vulnerability was confirmed.

The defect is related to validation handling and user experience because the application relies on external blocking instead of controlled application-level validation.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
