# TC016 – Verify User Can Log In After Logout

**Module:** Login

**Requirement ID:** FR-002

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that a user can successfully log in again after logging out of the application.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
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
| 3 | Click **Log Out**. |
| 4 | Verify that the user is returned to the login page. |
| 5 | Enter the same valid username and password. |
| 6 | Click **Log In**. |

---

## Expected Result

- The user is successfully logged out.
- The previous session is terminated.
- The user can log in again using the same valid credentials.
- The **Accounts Overview** page is displayed after the second login.
- No application errors occur during the logout or subsequent login.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The logout process completes successfully.
- A new authenticated session is created after logging in again.
- Account information is displayed correctly after the second login.
- No session-related errors or unexpected behavior occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
