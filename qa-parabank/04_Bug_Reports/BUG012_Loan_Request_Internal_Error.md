# BUG012 – Loan Request Functionality Returns Internal Error During Valid Submission

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG012                                                  |
| **Title**             | Loan Request functionality returns internal error during valid submission |
| **Related Test Case** | TC050                                                   |
| **Module**            | Request Loan                                            |
| **Severity**          | High                                                    |
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
| Testing Type     | Manual Testing                     |

---

## Preconditions

* User is registered in ParaBank.
* User is logged into the application.
* User has an active account.
* Request Loan functionality is accessible.
* Valid loan request test data is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Request Loan page. |
| 3 | Enter a valid loan amount. |
| 4 | Enter a valid down payment amount. |
| 5 | Select an existing account. |
| 6 | Click the Apply Now button. |

---

## Expected Result

The application should process the loan request successfully.

After submission:

* The loan request should be evaluated.
* The application should display a loan decision.
* The user should receive an approval or denial message.
* No system errors should occur.

Example:

"Congratulations, your loan has been approved."

or

"Your loan request has been denied."

---

## Actual Result

The user submitted a loan request using valid input data.

The application failed to process the request and displayed the following error message:

"An internal error has occurred and has been logged."

No loan decision was displayed, and the user did not receive any information about the request result.

---

## Impact

This defect affects the core Loan Request functionality.

Impact:

* Users cannot complete loan applications.
* Loan approval workflow is unavailable.
* Customers receive unclear technical error messages.
* Banking service functionality is interrupted.
* User experience is negatively affected.

---

## Attachments

### Screenshots

BUG012_TC050_Loan_Request_Internal_Error.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects a major banking feature.

The Request Loan functionality should process valid customer requests and provide a clear result. Displaying an internal error prevents users from completing the expected workflow.

This issue should be investigated before production release.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC050                                      |
| Test Data       | Valid loan request data                    |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during functional testing of the Loan Request module.

The application does not handle a valid loan request correctly and returns a system-level error instead of a business response.

Error handling and loan request processing should be investigated.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
