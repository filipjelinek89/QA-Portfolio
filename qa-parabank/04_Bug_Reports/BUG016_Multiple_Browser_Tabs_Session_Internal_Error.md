# BUG016 – Expired Session in Another Browser Tab Causes Internal Application Error

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG016                                                  |
| **Title**             | Expired session in another browser tab causes internal application error |
| **Related Test Case** | TC070                                                   |
| **Module**            | Session Management / Multi-Tab Handling                 |
| **Severity**          | Medium                                                  |
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
| Testing Type     | Manual Testing / Session Testing  |

---

## Preconditions

* User is registered in ParaBank.
* User is logged into the application.
* User has an active authenticated session.
* Application is opened in multiple browser tabs.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Open another browser tab with the same active session. |
| 3 | Verify that authenticated pages are accessible in both tabs. |
| 4 | Log out from ParaBank in the first browser tab. |
| 5 | Return to the second browser tab. |
| 6 | Refresh the second tab using the browser refresh button or F5 key. |
| 7 | Observe the application response. |

---

## Expected Result

The application should correctly handle session expiration across multiple browser tabs.

Expected behavior:

* User session should be invalidated after logout.
* Other browser tabs should detect the expired session.
* User should be redirected to the login page.

OR

* A clear session expiration message should be displayed.

Example:

"Your session has expired. Please log in again."

No internal application errors should occur.

---

## Actual Result

After logging out from the first browser tab, the user refreshed the second browser tab that contained the previous authenticated session.

The application failed to handle the expired session correctly and displayed the following error message:

"An internal error has occurred and has been logged."

The user was not provided with a clear explanation that the session had expired.

---

## Impact

This defect affects session handling and user experience.

Impact:

* Users receive unclear technical error messages.
* Session expiration is not handled gracefully.
* Multi-tab usage can trigger application errors.
* Application reliability appears reduced.
* Error handling does not meet expected banking application behavior.

---

## Attachments

### Screenshots

BUG016_TC070_Multiple_Tabs_Session_Internal_Error.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects session management behavior.

The application correctly invalidates the user session after logout; however, it does not properly handle another browser tab attempting to access the expired session.

The system should provide controlled session expiration handling instead of displaying a generic internal error.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC070                                      |
| Test Data       | Valid authenticated user session           |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during multi-tab session testing.

The defect is related to session expiration handling and application error management.

Session validation and expired session response handling should be reviewed.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
