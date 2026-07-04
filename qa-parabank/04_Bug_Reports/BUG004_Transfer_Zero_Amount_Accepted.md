# BUG004 – Transfer Funds Allows Zero Amount Transactions

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| **Bug ID**            | BUG004                                     |
| **Title**             | Transfer Funds allows zero amount transactions |
| **Related Test Case** | TC033                                      |
| **Module**            | Transfer Funds                             |
| **Severity**          | Medium                                     |
| **Priority**          | Medium                                     |
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
* User has at least two active accounts available.
* Transfer Funds functionality is accessible.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to Transfer Funds page. |
| 3 | Enter transfer amount `$0.00`. |
| 4 | Select a source account. |
| 5 | Select a destination account. |
| 6 | Click the Transfer button. |

---

## Expected Result

The application should reject transfers with a zero amount.

A validation message should be displayed informing the user that the transfer amount must be greater than $0.00.

The transaction should not be processed or recorded.

---

## Actual Result

The application accepted `$0.00` as a valid transfer amount.

The transfer was processed successfully, and the system displayed a confirmation message:

"$0.00 has been transferred from account #14121 to account #15120."

No validation message was displayed, and the transaction was allowed.

---

## Impact

This defect affects transaction validation and business rules.

Impact:

* Users can create invalid zero-value transactions.
* Transaction history may contain unnecessary records.
* Financial reports or account activity logs may include meaningless transactions.
* Transfer validation does not correctly enforce banking rules.

---

## Attachments

### Screenshots

BUG004_TC033_Transfer_Zero_Amount_Accepted.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects the Transfer Funds business logic.

A banking application should validate transfer amounts before processing transactions. Zero-value transfers should be rejected because they do not represent a valid financial operation.

Amount validation should be implemented to accept only values greater than zero.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC033                                      |
| Test Data       | Transfer Amount: $0.00                     |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during boundary value testing of the Transfer Funds functionality.

The application successfully completes a transfer even though the entered amount does not meet expected financial transaction rules.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
