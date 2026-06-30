# TC007 – Login with Locked User

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC007                 |
| **Module**           | Login                 |
| **Requirement**      | FR-001                |
| **Related Scenario** | TS-004                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Negative / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a user with a locked account cannot log in and receives the appropriate error message.

---

## Preconditions

- The SauceDemo application is available.
- The user is on the Login page.
- The `locked_out_user` test account is available.

---

## Test Data

| Username        | Password     |
| --------------- | ------------ |
| locked_out_user | secret_sauce |

---

## Test Steps

| Step | Action                                               | Expected Result                                                                       |
| ---: | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    1 | Navigate to the SauceDemo login page.                | Login page is displayed.                                                              |
|    2 | Enter `locked_out_user` into the **Username** field. | Username is accepted.                                                                 |
|    3 | Enter `secret_sauce` into the **Password** field.    | Password is accepted.                                                                 |
|    4 | Click the **Login** button.                          | Login attempt is processed.                                                           |
|    5 | Observe the application response.                    | An account lockout error message is displayed and the user remains on the Login page. |

---

## Expected Result

- The login attempt is rejected.
- The user remains on the Login page.
- The following error message is displayed:

```text
Epic sadface: Sorry, this user has been locked out.
```

- No user session is created.
- The Inventory page is not accessible.

---

## Actual Result

The application rejected the login attempt and displayed a message indicating that the user account is locked. The user remained on the Login page and access to the application was denied.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The correct account lockout message is displayed.
- No unexpected page redirection occurs.
- The user remains on the Login page.
- The Password field remains masked.
- No user session is created.
- The Login button remains available for another login attempt.
- The application distinguishes a locked account from invalid credentials by displaying a different error message.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)