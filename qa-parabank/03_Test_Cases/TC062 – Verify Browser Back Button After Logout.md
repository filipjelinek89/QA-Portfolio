# TC062 – Verify Browser Back Button After Logout

**Module:** Navigation & Logout

**Requirement ID:** FR-008

**Priority:** High

**Severity:** High

**Type:** Security / Session Management Test

---

## Objective

Verify that the user cannot access authenticated pages by using the browser's **Back** button after logging out.

---

## Preconditions

- User is logged into ParaBank.
- The **Accounts Overview** page is displayed.
- Internet connection is available.

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Click **Log Out**. |
| 2 | Verify that the login page is displayed. |
| 3 | Click the browser's **Back** button. |
| 4 | Observe the displayed page. |
| 5 | Attempt to navigate to any previously visited authenticated page, if accessible. |

---

## Expected Result

- The user remains logged out.
- Authenticated pages are not accessible.
- The application redirects the user to the login page or displays an appropriate access restriction message.
- No sensitive account information is displayed.
- The session remains terminated until the user logs in again.

---

## Actual Result

The user successfully logged out from the ParaBank application and was redirected to the login page. After clicking the browser Back button, the previously authenticated page was displayed again. The application allowed access to account-related information after logout instead of requiring the user to authenticate again.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Browser caching does not expose sensitive account information.
- Refreshing the page does not restore the previous session.
- Direct access to authenticated URLs after logout is not permitted.
- The session is properly invalidated on the server side.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-paragraph/03_Test_Cases.md)
