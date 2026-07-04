# TC031 – Verify Successful Transfer Between Accounts

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** Critical

**Severity:** Critical

**Type:** Positive Test, Functional Test

---

## Objective

Verify that a user can successfully transfer funds between two of their own bank accounts and that the account balances are updated correctly.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least two active bank accounts.
- The source account contains sufficient funds to complete the transfer.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Active Account A |
| To Account | Active Account B |
| Transfer Amount | 100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Click **Transfer Funds**. |
| 3 | Select the source account from the **From Account** dropdown. |
| 4 | Select the destination account from the **To Account** dropdown. |
| 5 | Enter **100.00** in the **Amount** field. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is completed successfully.
- A confirmation message is displayed.
- The transferred amount is deducted from the source account.
- The transferred amount is added to the destination account.
- Both account balances are updated correctly.
- No unexpected errors occur during the transaction.

---

## Actual Result

The user successfully accessed the Transfer Funds page and entered a valid transfer amount. After selecting the source and destination accounts, the transfer request was submitted successfully. The application displayed a transfer confirmation message, the money was moved between the selected accounts, and both account balances were updated correctly according to the completed transaction.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The confirmation message contains the correct transfer details.
- The transferred amount is accurate.
- Both account balances reflect the completed transaction.
- The transaction appears in the history of both accounts (if applicable).
- No duplicate transfer is created after a single click on the **Transfer** button.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
