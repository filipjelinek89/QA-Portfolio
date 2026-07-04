# TC011 – Verify Login with Invalid Username

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents login when an unregistered or invalid username is entered.

---

## Preconditions

- No account exists with the specified username.
- The user is logged out.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | Invalid or non-existent username |
| Password | Valid password |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Enter an unregistered or invalid username into the **Username** field. |
| 3 | Enter a valid password into the **Password** field. |
| 4 | Click **Log In**. |

---

## Expected Result

- Login is not successful.
- The user remains on the login page.
- An appropriate authentication error message is displayed.
- Access to the application is denied.
- No user session is created.

---

## Actual Result

The user attempted to log in without entering username and password credentials. The application rejected the login attempt and displayed an error message informing the user that the username and password could not be verified. The user remained on the login page and access to the account was not granted.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The application correctly rejects invalid usernames.
- The error message is clear and does not reveal whether the username or password was incorrect.
- No account information is displayed.
- The application remains stable after the failed login attempt.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
