# TC025 – Verify Opening a New Savings Account

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** High

**Severity:** High

**Type:** Positive Test, Functional Test

---

## Objective

Verify that a logged-in user can successfully open a new savings account.

---

## Preconditions

- The user is logged in to ParaBank.
- At least one existing account is available for funding.
- The **Open New Account** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Savings |
| Existing Account | Any available account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Click **Open New Account**. |
| 3 | Select **Savings** as the account type. |
| 4 | Select an existing account to fund the new account. |
| 5 | Click **Open New Account**. |

---

## Expected Result

- The new savings account is created successfully.
- A confirmation message is displayed.
- A unique account number is assigned to the new account.
- The new savings account appears in the **Accounts Overview** page.
- The user can access the newly created account without errors.

---

## Actual Result

The user successfully accessed the Open New Account page and selected the Savings account type. After submitting the request, the application successfully created a new savings account. A confirmation message was displayed with the new account number. The newly created savings account appeared in the Accounts Overview page and displayed the correct account details.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The account type is displayed as **Savings**.
- The new account number is unique.
- The new account is immediately available in **Accounts Overview**.
- No unexpected errors or warning messages are displayed.
- The application remains responsive throughout the process.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
