# TC039 – Verify Account Balances Update After Transfer

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** Critical

**Severity:** Critical

**Type:** Functional Test

---

## Objective

Verify that account balances are updated correctly after a successful transfer between two accounts.

---

## Preconditions

- User is logged in with a valid account.
- The user has at least two active accounts.
- Both accounts have known starting balances.
- The **Transfer Funds** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Existing Savings Account |
| Initial Balance (From Account) | Record current balance |
| Initial Balance (To Account) | Record current balance |
| Transfer Amount | 100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Record the current balances of both accounts. |
| 3 | Navigate to **Transfer Funds**. |
| 4 | Select the **From Account**. |
| 5 | Select the **To Account**. |
| 6 | Enter **100.00** as the transfer amount. |
| 7 | Click **Transfer**. |
| 8 | Return to the **Accounts Overview** page. |
| 9 | Verify the updated balances of both accounts. |

---

## Expected Result

- The transfer is completed successfully.
- The balance of the **From Account** is decreased by the transferred amount.
- The balance of the **To Account** is increased by the transferred amount.
- The total amount of money across both accounts remains unchanged.
- The transaction is recorded in the account history.
- A confirmation message is displayed.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- Both account balances are updated immediately after the transfer.
- The transferred amount is accurate to two decimal places.
- The transaction appears in the history of the relevant account(s).
- No duplicate transaction is created.
- No unexpected application or calculation errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
