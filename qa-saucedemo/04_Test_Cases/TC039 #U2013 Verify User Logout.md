# TC039 – Verify User Logout

## Test Information

| Field                | Value                            |
| -------------------- | -------------------------------- |
| **Test Case ID**     | TC039                            |
| **Module**           | Navigation                       |
| **Requirement**      | FR-007                           |
| **Related Scenario** | TS-020                           |
| **Priority**         | High                             |
| **Severity**         | Critical                         |
| **Test Type**        | Positive / Functional / Security |
| **Execution Type**   | Manual                           |

---

## Objective

Verify that the user can successfully log out of the application using the **Logout** option from the Burger Menu.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                            | Expected Result                                                    |
| ---: | --------------------------------- | ------------------------------------------------------------------ |
|    1 | Log in using valid credentials.   | User is redirected to the Inventory page.                          |
|    2 | Click the **Burger Menu** button. | The navigation menu opens.                                         |
|    3 | Click the **Logout** option.      | The application processes the logout request.                      |
|    4 | Observe the displayed page.       | The Login page is displayed.                                       |
|    5 | Verify the Login page.            | The Username and Password fields and the Login button are visible. |

---

## Expected Result

- The user is successfully logged out.
- The Login page is displayed.
- The user session is terminated.
- No error messages are displayed.

---

## Actual Result

The user was successfully logged out after selecting the **Logout** option from the Burger Menu. The application redirected the user to the Login page, and access to authenticated pages was terminated.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The URL returns to the login page (`/` or `/index.html`).
- The Username and Password fields are empty.
- The Login button is enabled.
- The user cannot access authenticated pages without logging in again.
- The shopping cart badge is no longer displayed.
- The browser Back button does not restore the authenticated session.
- No visual or functional issues occur after logout.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)