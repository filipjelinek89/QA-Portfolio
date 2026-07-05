# TC061 – Verify Successful Logout

**Module:** Navigation & Logout

**Requirement ID:** FR-008

**Priority:** High

**Severity:** High

**Type:** Functional Test

---

## Objective

Verify that a logged-in user can successfully log out of the application and that the active session is terminated.

---

## Preconditions

- User is logged in to ParaBank.
- The **Accounts Overview** page is displayed.
- Internet connection is available.

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Verify that the user is logged in. |
| 2 | Click the **Log Out** link. |

---

## Expected Result

- The user is successfully logged out.
- The application redirects the user to the login page (home page).
- The user's authenticated session is terminated.
- Login fields are displayed.
- The user can no longer access authenticated features without logging in again.

---

## Actual Result

The user successfully logged out from the ParaBank application by selecting the Logout option. The active user session was ended, and the application redirected the user to the login page. Account information and authenticated features were no longer accessible without logging in again.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The **Log Out** link is visible only when the user is logged in.
- No account information remains visible after logout.
- The application does not display any unexpected errors during logout.
- The session is properly terminated before another login attempt.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
