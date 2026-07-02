# TC019 – Verify Account Details Page

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** High

**Severity:** High

**Type:** Functional Test

---

## Objective

Verify that selecting an account from the **Accounts Overview** page opens the correct **Account Details** page and displays the corresponding account information and transaction history.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
- The **Accounts Overview** page is displayed.
- At least one bank account exists.

---

## Test Data

| Field | Value |
|------|------|
| Username | Existing registered username |
| Password | Valid password |
| Account | Any available account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in with valid credentials. |
| 2 | Navigate to the **Accounts Overview** page. |
| 3 | Click on any available account number. |
| 4 | Observe the **Account Details** page. |
| 5 | Verify the displayed account information and transaction history. |

---

## Expected Result

- The **Account Details** page opens successfully.
- The selected account number matches the account chosen from the **Accounts Overview** page.
- The account balance is displayed correctly.
- The transaction history for the selected account is displayed.
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
- The correct account information is displayed.
- The account number matches the selected account.
- The displayed balance is consistent with the **Accounts Overview** page.
- The transaction history belongs to the selected account.
- Navigation between the overview and details pages works correctly.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
