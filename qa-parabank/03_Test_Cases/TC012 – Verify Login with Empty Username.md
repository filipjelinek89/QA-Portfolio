# TC012 – Verify Login with Empty Username

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents login when the **Username** field is left empty.

---

## Preconditions

- The user is on the ParaBank login page.
- The user is logged out.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | *(Empty)* |
| Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Leave the **Username** field empty. |
| 3 | Enter a valid password into the **Password** field. |
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

The user attempted to log in without entering a username while the required login information was incomplete. The application rejected the login attempt and displayed a validation message informing the user to enter both a username and password. The user remained on the login page and access to the account was not granted.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The application correctly handles an empty **Username** field.
- The displayed message clearly informs the user that login cannot be completed.
- No account information is displayed.
- No unexpected application errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
