# TC042 – Verify Direct Access to Inventory Without Authentication

## Test Information

| Field                | Value                                |
| -------------------- | ------------------------------------ |
| **Test Case ID**     | TC042                                |
| **Module**           | Session Management                   |
| **Requirement**      | FR-001                               |
| **Related Scenario** | TS-023                               |
| **Priority**         | High                                 |
| **Severity**         | Critical                             |
| **Test Type**        | Negative / Security / Access Control |
| **Execution Type**   | Manual                               |

---

## Objective

Verify that an unauthenticated user cannot access the Inventory page directly by entering its URL into the browser.

---

## Preconditions

- The SauceDemo application is available.
- The user is **not logged in**.
- No active authenticated session exists (or the user has logged out).

---

## Test Data

| URL               |
| ----------------- |
| `/inventory.html` |

---

## Test Steps

| Step | Action                                                         | Expected Result                                                                     |
| ---: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    1 | Open the SauceDemo Login page.                                 | The Login page is displayed.                                                        |
|    2 | Ensure that no user is logged in.                              | The Login page remains displayed.                                                   |
|    3 | Manually enter `/inventory.html` into the browser address bar. | The application processes the request.                                              |
|    4 | Press **Enter**.                                               | The application validates the user's session.                                       |
|    5 | Observe the displayed page.                                    | The user is redirected to the Login page or access to the Inventory page is denied. |

---

## Expected Result

- Unauthenticated users cannot access the Inventory page.
- The application redirects the user to the Login page or otherwise blocks access.
- No Inventory information is displayed.
- No sensitive application data is exposed.
- The following error message is displayed:

```text
Epic sadface: You can only access '/inventory.html' when you are logged in
```

---

## Actual Result

The application prevented unauthorized access to the Inventory page. When attempting to access the Inventory URL without an authenticated session, the user was redirected to the Login page and access to protected content was denied.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The Inventory page is not accessible without authentication.
- The Login page is displayed after the access attempt.
- No product information is visible.
- The browser Back button does not bypass authentication.
- Refreshing the page does not grant access.
- No session data is restored automatically.
- No visual, functional, or security-related issues occur during the access attempt.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)