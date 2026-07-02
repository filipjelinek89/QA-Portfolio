# TC032 – Verify Transfer of Entire Account Balance

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** High

**Severity:** Critical

**Type:** Boundary Value Test

---

## Objective

Verify that a user can successfully transfer the entire available balance from one account to another.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least two active accounts.
- The source account contains a positive available balance.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Active account with available balance |
| To Account | Different active account |
| Transfer Amount | Entire available balance of the source account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select the source account. |
| 4 | Select a different destination account. |
| 5 | Enter the entire available balance as the transfer amount. |
| 6 | Click **Transfer**. |
| 7 | Navigate to **Accounts Overview** and verify the balances of both accounts. |

---

## Expected Result

- The transfer is completed successfully.
- A confirmation message is displayed.
- The source account balance is updated to **0.00** (or the minimum allowed balance, if applicable).
- The destination account balance increases by the transferred amount.
- The transaction is recorded in the transaction history for both accounts.
- No calculation or rounding errors occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The transferred amount exactly matches the available balance.
- Both account balances are updated correctly.
- The transaction appears in the history of both accounts.
- No duplicate transactions are created.
- The transfer is processed only once.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
