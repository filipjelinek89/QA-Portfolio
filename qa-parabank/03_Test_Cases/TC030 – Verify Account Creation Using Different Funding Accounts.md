# TC030 – Verify Account Creation Using Different Funding Accounts

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that a user can successfully create a new account by selecting different existing accounts as the funding source.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least two existing accounts available.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| New Account Type | Checking or Savings |
| Funding Account | Existing Account #1 |
| Funding Account | Existing Account #2 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Open New Account**. |
| 3 | Select a new account type (Checking or Savings). |
| 4 | Select the first existing account as the funding account. |
| 5 | Click **Open New Account** and verify successful account creation. |
| 6 | Repeat the process using a different existing account as the funding account. |

---

## Expected Result

- The selected funding account can be changed successfully.
- A new account is created regardless of which eligible funding account is selected.
- A unique account number is assigned to each new account.
- The confirmation page is displayed after each successful account creation.
- No application errors occur during the process.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- All eligible accounts appear in the **From Account** dropdown.
- The selected funding account is used correctly.
- The correct account type is created.
- A confirmation message is displayed after account creation.
- No duplicate account numbers are generated.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
