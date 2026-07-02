# TC015 – Verify Session Persists After Page Refresh

**Module:** Login

**Requirement ID:** FR-002

**Priority:** Medium

**Severity:** Medium

**Type:** Session Management Test

---

## Objective

Verify that the user's authenticated session remains active after refreshing the browser page.

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
| 2 | Verify that the **Accounts Overview** page is displayed. |
| 3 | Refresh the browser page (F5 or browser Refresh button). |
| 4 | Observe the application behavior after the page reloads. |

---

## Expected Result

- The user remains authenticated.
- The **Accounts Overview** page reloads successfully.
- Account information is displayed correctly.
- No additional login is required.
- No application errors occur after the refresh.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The session remains valid after refreshing the page.
- No data is lost during the refresh.
- The application reloads correctly without displaying error messages.
- The user continues to have access to authorized banking features.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
