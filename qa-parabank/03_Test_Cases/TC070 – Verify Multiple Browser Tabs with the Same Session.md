# TC070 – Verify Multiple Browser Tabs with the Same Session

**Module:** Validation & Negative Testing

**Requirement ID:** FR-009

**Priority:** Medium

**Severity:** Medium

**Type:** Session Management Test

---

## Objective

Verify that the application correctly maintains the user session when the application is opened in multiple browser tabs and behaves consistently across all tabs.

---

## Preconditions

- User has a valid ParaBank account.
- User is successfully logged in.
- Internet connection is available.
- Google Chrome is open.

---

## Test Data

| Field | Value |
|------|------|
| Username | Valid registered username |
| Password | Valid password |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Open a second browser tab using the same session. |
| 3 | Navigate to a different page (e.g., **Transfer Funds**) in the second tab. |
| 4 | Return to the first tab and navigate to **Accounts Overview**. |
| 5 | Log out from the first tab. |
| 6 | Switch back to the second tab. |
| 7 | Refresh the page or attempt to perform an action. |

---

## Expected Result

- Both browser tabs share the same authenticated session.
- Logging out in one tab invalidates the session in all open tabs.
- After refreshing or performing an action in the second tab, the user is redirected to the login page or prompted to log in again.
- No protected information remains accessible after the session is terminated.
- No unexpected errors or inconsistent behavior occur.

---

## Actual Result

The user opened the ParaBank application in multiple browser tabs using the same authenticated session. After logging out from the first tab, the user refreshed the second tab. Instead of redirecting the user to the login page or displaying a proper session expiration message, the application displayed a generic internal error message: "An internal error has occurred and has been logged." The application did not handle the expired session correctly.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Session synchronization works correctly across all browser tabs.
- Protected pages cannot be accessed after logout.
- Browser navigation (Back/Forward) does not restore an authenticated session.
- No sensitive information is exposed after the session has ended.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
