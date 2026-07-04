# BUG005 – Transfer Funds Allows Negative Amount Transactions

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                          |
| --------------------- | ---------------------------------------------- |
| **Bug ID**            | BUG005                                         |
| **Title**             | Transfer Funds allows negative amount transactions |
| **Related Test Case** | TC034                                          |
| **Module**            | Transfer Funds                                 |
| **Severity**          | High                                           |
| **Priority**          | High                                           |
| **Status**            | New                                            |
| **Reported On**       | 2026-07-04                                     |

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
| 2 | Navigate to the Transfer Funds page. |
| 3 | Enter a negative transfer amount (example: `-$100.00`). |
| 4 | Select a source account. |
| 5 | Select a destination account. |
| 6 | Click the Transfer button. |

---

## Expected Result

The application should reject negative transfer amounts.

A validation message should be displayed informing the user that the transfer amount must be greater than $0.00.

The transaction should not be processed, and account balances should remain unchanged.

---

## Actual Result

The application accepted a negative transfer amount as a valid transaction.

The transfer was processed successfully, and the system displayed a confirmation message:

"-$100.00 has been transferred from account #14121 to account #15231."

No validation error message was displayed, and the invalid transaction was completed.

---

## Impact

This defect affects financial transaction validation and account balance integrity.

Impact:

* Users can submit invalid financial transactions.
* Negative transfers may incorrectly modify account balances.
* Banking transaction rules are not properly enforced.
* Financial data accuracy can be affected.
* Users may manipulate account balances using negative values.

---

## Attachments

### Screenshots

BUG005_TC034_Transfer_Negative_Amount_Accepted.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects a critical banking workflow.

A banking application must prevent invalid financial operations such as negative money transfers. Allowing negative amounts can create incorrect account balances and compromise transaction reliability.

This issue should be investigated before production release.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC034                                      |
| Test Data       | Transfer Amount: -$100.00                  |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during negative value validation testing of the Transfer Funds functionality.

The application successfully completes transactions even when the transfer amount violates expected banking rules.

Negative amount validation should be implemented before processing any transfer request.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
