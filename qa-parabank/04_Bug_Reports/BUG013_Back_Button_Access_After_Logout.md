# BUG013 – Authenticated Pages Accessible Using Browser Back Button After Logout

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG013                                                  |
| **Title**             | Authenticated pages accessible using browser Back button after logout |
| **Related Test Case** | TC062                                                   |
| **Module**            | Logout / Session Management                            |
| **Severity**          | High                                                    |
| **Priority**          | High                                                    |
| **Status**            | New                                                     |
| **Reported On**       | 2026-07-04                                              |

---

## Environment

| Item             | Value                              |
| ---------------- | ---------------------------------- |
| Application      | ParaBank                           |
| URL              | https://parabank.parasoft.com/     |
| Browser          | Google Chrome                      |
| Browser Version  | 149.0.7827.197                     |
| Operating System | Windows 11                         |
| Testing Type     | Manual Testing                     |

---

## Preconditions

* User is registered in ParaBank.
* User is logged into the application.
* User has access to authenticated account pages.
* Browser navigation buttons are available.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to an authenticated page (for example Accounts Overview). |
| 3 | Click the Logout button. |
| 4 | Verify that the user is redirected to the login page. |
| 5 | Click the browser Back button. |
| 6 | Observe the displayed page. |

---

## Expected Result

After logout, the user session should be completely terminated.

When clicking the browser Back button:

* Authenticated pages should not be accessible.
* The user should remain logged out.
* The application should redirect the user to the login page.
* Sensitive account information should not be displayed.

---

## Actual Result

The user successfully logged out from the application.

After clicking the browser Back button, the previously authenticated page was displayed again.

The application allowed access to account-related information after logout without requiring the user to authenticate again.

---

## Impact

This defect affects application session security and user data protection.

Impact:

* Sensitive banking information may remain visible after logout.
* Unauthorized users using the same browser session may access previous account pages.
* Logout functionality does not fully protect authenticated content.
* Session handling does not follow expected security behavior.

---

## Attachments

### Screenshots

Not attached.

---

### Video

BUG013_TC062_Back_Button_Access_After_Logout.mp4

---

## QA Assessment

The defect is consistently reproducible and affects user session security.

A banking application should prevent access to authenticated pages after logout. Browser navigation should not expose sensitive account information once the user session has ended.

Session invalidation and cache control should be reviewed.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC062                                      |
| Test Data       | Valid user account                         |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during logout and session management testing.

The defect was captured using a screen recording showing that authenticated content can be accessed after logout by using the browser Back button.

Proper session termination and browser cache protection should be implemented.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
