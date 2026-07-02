# TC028 – Verify Initial Account Balance

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** High

**Severity:** High

**Type:** Business Rule Test

---

## Objective

Verify that a newly created account is assigned the correct initial balance according to the application's business rules.

---

## Preconditions

- The user is logged in to ParaBank.
- At least one existing account is available to fund the new account (if required).
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Checking or Savings |
| Funding Account | Existing Account |
| Expected Initial Balance | According to application business rules |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Open New Account**. |
| 3 | Select an account type. |
| 4 | Select the funding account (if applicable). |
| 5 | Click **Open New Account**. |
| 6 | Open the newly created account from **Accounts Overview**. |
| 7 | Verify the displayed account balance. |

---

## Expected Result

- The new account is created successfully.
- The account is visible in **Accounts Overview**.
- The displayed balance matches the expected initial balance according to the application's business rules.
- No incorrect or unexpected balance is shown.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The balance is displayed in the correct currency format.
- The initial balance is consistent with the application's expected behavior.
- No unexpected transactions are present immediately after account creation.
- The balance is displayed consistently across all relevant pages.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
