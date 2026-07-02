# TC027 – Verify New Account Receives a Unique Account Number

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** Medium

**Severity:** High

**Type:** Functional Test

---

## Objective

Verify that each newly created bank account is assigned a unique account number that does not duplicate any existing account number.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least one existing bank account.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Checking or Savings |
| Funding Account | Existing account selected from the list |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Open New Account**. |
| 3 | Select an account type. |
| 4 | Select a funding account. |
| 5 | Click **Open New Account**. |
| 6 | Record the newly assigned account number. |
| 7 | Compare the new account number with the user's existing account numbers. |

---

## Expected Result

- A new bank account is created successfully.
- The application assigns a unique account number to the new account.
- The new account number does not match any existing account number belonging to the user.
- The new account appears in the **Accounts Overview** page.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The account number is generated automatically.
- The generated account number is unique.
- The new account is immediately available in **Accounts Overview**.
- No duplicate account numbers are created after opening multiple accounts.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
