# TC029 – Verify Opening Multiple Accounts

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that a logged-in user can successfully open multiple bank accounts and that each newly created account is assigned a unique account number.

---

## Preconditions

- The user is logged in to ParaBank.
- At least one existing account is available to fund the new accounts.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Checking / Savings |
| Funding Account | Existing customer account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Open New Account**. |
| 3 | Select an account type. |
| 4 | Choose an existing account for funding. |
| 5 | Click **Open New Account**. |
| 6 | Repeat the process to create an additional account. |
| 7 | Navigate to **Accounts Overview**. |

---

## Expected Result

- Both account creation requests are completed successfully.
- Each newly created account is assigned a unique account number.
- All newly created accounts are displayed in the **Accounts Overview** page.
- No duplicate account numbers are generated.
- The application remains stable throughout the process.

---

## Actual Result

The user successfully created multiple new accounts using the Open New Account functionality. Each account was created successfully and received a unique account number. All newly created accounts were displayed correctly in the Accounts Overview page with their corresponding balances and available amounts. The application allowed multiple accounts to be associated with the same customer profile without any issues.

---

## Status

✅ PASS

---

## Notes

Verify that:
- Each account appears only once in the account list.
- Account numbers are unique.
- The correct account type is assigned to each new account.
- The funding account remains available after multiple account creations.
- No unexpected errors or duplicate records occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
