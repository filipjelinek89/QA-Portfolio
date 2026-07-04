# TC014 – Verify Login with Both Fields Empty

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents login when both the **Username** and **Password** fields are left empty.

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
| Password | *(Empty)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Leave both the **Username** and **Password** fields empty. |
| 3 | Click **Log In**. |

---

## Expected Result

- The login request is rejected.
- The user is not authenticated.
- An appropriate validation or authentication message is displayed.
- No user session is created.
- No account information is displayed.

---

## Actual Result

The user attempted to log in without entering all required authentication information. The application validated the login request and displayed an error message informing the user that both username and password are required. The login process was not completed, and the user remained unauthenticated on the login page.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The application correctly handles empty authentication fields.
- The displayed message is clear and consistent with other failed login scenarios.
- No unexpected application errors occur.
- The application remains stable after the failed login attempt.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-paragraph/03_Test_Cases.md)
