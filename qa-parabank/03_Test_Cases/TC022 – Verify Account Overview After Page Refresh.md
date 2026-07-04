# TC022 – Verify Account Overview After Page Refresh

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that refreshing the **Accounts Overview** page does not affect the user's active session and that account information remains accurate and accessible.

---

## Preconditions

- User is successfully logged into ParaBank.
- At least one bank account exists.
- The **Accounts Overview** page is open.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | johnsmith001 |
| Password | Password123 |
| Account | John Smith |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the **Accounts Overview** page. |
| 3 | Verify that account information is displayed. |
| 4 | Refresh the browser page (F5 or browser Refresh button). |
| 5 | Observe the page after it reloads. |

---

## Expected Result

- The page reloads successfully.
- The user remains logged in.
- The **Accounts Overview** page is displayed.
- Account numbers, balances, and other account information remain accurate.
- No errors or unexpected redirects occur.

---

## Actual Result

The user successfully accessed the Accounts Overview page and refreshed the browser page. After the refresh was completed, the user session remained active, and the Accounts Overview page loaded correctly. All customer account information, including account numbers, balances, available amounts, and total balance, remained visible and unchanged.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The user session remains active after the refresh.
- No duplicate data is displayed.
- Account balances remain unchanged.
- The page loads without visual or functional issues.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
