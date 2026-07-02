# TC018 – Verify Account Balances Are Displayed Correctly

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** High

**Severity:** Critical

**Type:** Functional Test

---

## Objective

Verify that the account balance information is displayed accurately for all available user accounts.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
- The **Accounts Overview** page is displayed.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | Existing registered username |
| Password | Valid password |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in with valid credentials. |
| 2 | Navigate to the **Accounts Overview** page (if not displayed automatically). |
| 3 | Review the balance information for all listed accounts. |
| 4 | Verify that each account displays its current balance. |

---

## Expected Result

- The balance is displayed for every listed account.
- Balance values are clearly formatted and readable.
- Each balance corresponds to the correct account.
- No missing, duplicated, or incorrect balance information is displayed.
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
- Currency formatting is consistent across all accounts.
- Balance values are displayed with the correct number of decimal places.
- No negative or unexpected balance values are displayed unless intentionally supported by the application.
- The displayed balances remain consistent after refreshing the page.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
