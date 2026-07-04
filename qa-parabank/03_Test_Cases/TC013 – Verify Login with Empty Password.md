# TC013 – Verify Login with Empty Password

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents login when the **Password** field is left empty.

---

## Preconditions

- A registered user account exists.
- The user is on the ParaBank login page.
- The user is logged out.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | Existing registered username |
| Password | *(Empty)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Enter a valid registered username into the **Username** field. |
| 3 | Leave the **Password** field empty. |
| 4 | Click **Log In**. |

---

## Expected Result

- Login is not successful.
- The user remains on the login page.
- An appropriate validation or authentication message is displayed.
- No user session is created.
- Access to the application is denied.

---

## Actual Result

The user attempted to log in without providing all required login information. The application prevented the authentication process and displayed a validation error message informing the user that a username and password are required. The user was not logged into the application and remained on the login page.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The application correctly handles an empty **Password** field.
- The displayed message clearly informs the user that login cannot be completed.
- The password field is not pre-filled after the failed login attempt.
- No account information is displayed.
- No unexpected application errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
