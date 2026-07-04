# TC017 – Verify Account Overview Page Displays Correctly

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** High

**Severity:** Critical

**Type:** Functional Test

---

## Objective

Verify that the **Accounts Overview** page is displayed correctly after a successful login and contains the expected account information.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | johnsmith001 |
| Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in with valid credentials. |
| 2 | Observe the **Accounts Overview** page after login. |
| 3 | Verify that account information is displayed. |
| 4 | Verify that account numbers, balances, and available navigation options are visible. |

---

## Expected Result

- The **Accounts Overview** page is displayed successfully.
- The user's account(s) are listed.
- Each account displays its account number, balance, and available balance (if applicable).
- Navigation options for authenticated users are available.
- No error messages or display issues are present.

---

## Actual Result

The user successfully accessed the Accounts Overview page after logging into the ParaBank application. The page loaded correctly and displayed all expected account information, including the account number, account balance, available amount, and total balance. All account details were visible, properly formatted, and accessible to the user.

---

## Status

✅ PASS

---

## Notes

Verify that:
- All displayed account information belongs to the logged-in user.
- Page elements are correctly aligned and readable.
- Links to account details are available and functional.
- No unexpected UI or loading issues occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
