# BUG009 – Bill Payment Allows Negative Amount Values

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| **Bug ID**            | BUG009                                     |
| **Title**             | Bill Payment allows negative amount values |
| **Related Test Case** | TC045                                      |
| **Module**            | Bill Payment                               |
| **Severity**          | High                                       |
| **Priority**          | High                                       |
| **Status**            | New                                        |
| **Reported On**       | 2026-07-04                                 |

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
* Bill Payment functionality is accessible.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Bill Pay page. |
| 3 | Complete all required payee information fields. |
| 4 | Enter a negative amount value (example: `-$100.00`) into the Amount field. |
| 5 | Select the funding account. |
| 6 | Click the Send Payment button. |
| 7 | Verify the displayed confirmation message and account balance. |

---

## Expected Result

The application should validate the payment amount before processing the request.

If a negative amount is entered:

* The payment should not be processed.
* A validation message should be displayed.
* No payment confirmation should appear.
* No transaction should be created.

Example validation message:

"Payment amount must be greater than $0.00."

---

## Actual Result

The application accepted a negative amount value as a valid bill payment.

The system displayed a successful payment confirmation message even though the entered amount was invalid.

The account balance remained unchanged, but no validation message was shown to inform the user that negative payment amounts are not allowed.

---

## Impact

This defect affects payment validation and transaction reliability.

Impact:

* Users can submit invalid payment requests.
* The application displays incorrect success confirmations.
* Users may believe an invalid payment was completed.
* Payment history and transaction records may contain incorrect data.
* Business validation rules are not properly enforced.

---

## Attachments

### Screenshots

BUG009_TC045_Bill_Payment_Negative_Amount_Accepted.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects the Bill Payment workflow.

A banking application should reject invalid payment amounts before processing. Negative values should never trigger a successful payment confirmation because it provides incorrect feedback to users.

Amount validation should be implemented before completing bill payment requests.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC045                                      |
| Test Data       | Payment Amount: -$100.00                   |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during negative value testing of the Bill Payment functionality.

Although the account balance was not modified, the application incorrectly confirmed that the invalid payment was successful.

The system should prevent negative values before payment submission.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
