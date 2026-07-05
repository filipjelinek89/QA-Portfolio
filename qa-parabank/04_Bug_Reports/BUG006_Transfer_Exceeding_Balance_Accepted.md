# BUG006 – Transfer Funds Allows Transactions Exceeding Available Account Balance

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                     |
| --------------------- | --------------------------------------------------------- |
| **Bug ID**            | BUG006                                                    |
| **Title**             | Transfer Funds allows transactions exceeding available account balance |
| **Related Test Case** | TC036                                                     |
| **Module**            | Transfer Funds                                            |
| **Severity**          | Critical                                                  |
| **Priority**          | High                                                      |
| **Status**            | New                                                       |
| **Reported On**       | 2026-07-04                                                |

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
* Source account contains a limited available balance.
* Transfer Funds functionality is accessible.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Transfer Funds page. |
| 3 | Enter a transfer amount greater than the available source account balance (example: `$999999999.99`). |
| 4 | Select the source account. |
| 5 | Select the destination account. |
| 6 | Click the Transfer button. |
| 7 | Verify balances of both accounts after the transaction. |

---

## Expected Result

The application should verify the available account balance before completing the transaction.

If the transfer amount exceeds the available balance:

* The transfer should be rejected.
* A validation message should inform the user about insufficient funds.
* No money should be transferred.
* Account balances should remain unchanged.

---

## Actual Result

The application accepted a transfer amount greater than the available account balance.

The transaction was processed successfully, and the full amount was transferred to the destination account.

The source account balance was changed to a negative value:

`-$999999784.99`

No insufficient funds validation message was displayed.

---

## Impact

This defect affects core banking transaction logic and financial data integrity.

Impact:

* Users can transfer more money than they actually have.
* Accounts can incorrectly receive unlimited funds.
* Source accounts can receive invalid negative balances.
* Financial records become inaccurate.
* The application does not enforce basic banking rules.

---

## Attachments

### Screenshots

[BUG-006 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG006_TC036_Transfer_Exceeding_Balance_Accepted.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects a critical banking workflow.

A banking application must verify account balances before processing money transfers. Allowing transactions that exceed the available balance can create incorrect financial data and represents a major business logic failure.

This defect should be fixed before production release.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC036                                      |
| Test Data       | Transfer Amount: $999999999.99             |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during boundary value testing of the Transfer Funds functionality.

The application does not validate whether the source account contains enough available funds before completing the transaction.

Balance verification should be implemented before approving any transfer request.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
