# TC035 – Verify Transfer with Decimal Amount

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** Medium

**Severity:** Medium

**Type:** Boundary Value Test

---

## Objective

Verify that the application correctly processes a fund transfer using a valid decimal amount.

---

## Preconditions

- User is logged in with a valid account.
- The user has at least two active accounts.
- The **Transfer Funds** page is accessible.
- The source account has a sufficient balance.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Existing Savings Account |
| Amount | 100.50 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Enter **100.50** in the **Amount** field. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is completed successfully.
- A confirmation message is displayed.
- The transferred amount is exactly **100.50**.
- The balance of the source account decreases by **100.50**.
- The balance of the destination account increases by **100.50**.
- A transaction record is created for both accounts.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The application preserves decimal precision.
- No rounding errors occur during the transaction.
- Both account balances are updated correctly.
- The transaction appears correctly in the account history.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
