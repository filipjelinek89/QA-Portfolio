# TC010 – Verify Login with Invalid Password

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents login when a registered user enters an incorrect password.

---

## Preconditions

- A registered user account exists.
- The user is logged out.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | johnsmith001 |
| Password | Password123aaa |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Enter a valid registered username into the **Username** field. |
| 3 | Enter an incorrect password into the **Password** field. |
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

The user attempted to log in using a valid username but entered an incorrect password. The application rejected the login attempt and displayed an error message informing the user that the username and password could not be verified. The user remained logged out, and access to the account was not granted.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The authentication error message is clear and informative.
- No account information is displayed.
- The application remains stable after the failed login attempt.
- The username field retains its value (if designed to do so), while the password field is handled securely.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
