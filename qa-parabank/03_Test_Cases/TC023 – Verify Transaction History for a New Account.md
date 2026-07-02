# TC023 – Verify Transaction History for a New Account

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** Medium

**Severity:** Medium

**Type:** Positive Test

---

## Objective

Verify that a newly created bank account displays an empty transaction history before any transactions have been performed.

---

## Preconditions

- The user is logged in to ParaBank.
- A new bank account has been successfully created.
- No deposits, withdrawals, transfers, or bill payments have been performed using the new account.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Checking or Savings |
| Transaction History | No transactions |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Accounts Overview**. |
| 3 | Select the newly created account. |
| 4 | Review the **Transaction History** section. |

---

## Expected Result

- The selected account details are displayed successfully.
- The transaction history is empty or displays an appropriate message indicating that no transactions are available.
- No unexpected transactions are listed.
- The page loads without errors.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The correct account is opened.
- The account balance matches the initial balance.
- No transaction records are displayed for the new account.
- Any "No transactions found" or similar message is clear and informative.
- The page layout remains consistent when no transaction history exists.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
