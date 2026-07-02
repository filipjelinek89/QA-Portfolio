# TC021 – Verify Multiple Accounts Are Displayed

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that all bank accounts associated with the logged-in user are displayed correctly in the **Accounts Overview** page.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
- The user has two or more bank accounts.
- The **Accounts Overview** page is displayed.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | Existing registered username |
| Password | Valid password |
| User Account | Two or more bank accounts |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in with valid credentials. |
| 2 | Navigate to the **Accounts Overview** page. |
| 3 | Count the number of displayed accounts. |
| 4 | Verify that each account is listed only once. |
| 5 | Open each account and verify it is accessible. |

---

## Expected Result

- All bank accounts associated with the logged-in user are displayed.
- Each account is listed only once.
- Each account displays the correct account number and balance.
- Every listed account can be opened successfully.
- No application errors occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- No accounts are missing.
- No duplicate accounts are displayed.
- Account balances match the corresponding account details.
- Every account link opens the correct **Account Details** page.
- The page remains responsive when multiple accounts are displayed.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
