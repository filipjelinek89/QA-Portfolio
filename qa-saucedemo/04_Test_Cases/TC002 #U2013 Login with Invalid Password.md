# TC002 – Login with Invalid Password

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC002                 |
| **Module**           | Login                 |
| **Requirement**      | FR-001                |
| **Related Scenario** | TS-002                |
| **Priority**         | High                  |
| **Severity**         | Major                 |
| **Test Type**        | Negative / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the application prevents login when a valid username is used with an invalid password.

---

## Preconditions

- The SauceDemo application is available.
- The user is on the Login page.
- A valid user account exists.

---

## Test Data

| Username      | Password         |
| ------------- | ---------------- |
| standard_user | invalid_password |

---

## Test Steps

| Step | Action                                                | Expected Result                                                                      |
| ---: | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
|    1 | Navigate to the SauceDemo login page.                 | Login page is displayed.                                                             |
|    2 | Enter `standard_user` into the **Username** field.    | Username is accepted.                                                                |
|    3 | Enter `invalid_password` into the **Password** field. | Password is accepted.                                                                |
|    4 | Click the **Login** button.                           | Login attempt is processed.                                                          |
|    5 | Observe the application response.                     | An authentication error message is displayed and the user remains on the Login page. |

---

## Expected Result

- The login attempt is rejected.
- The user remains on the Login page.
- The following error message is displayed:

```text
Epic sadface: Username and password do not match any user in this service
```

- No user session is created.
- The Inventory page is not accessible.

---

## Actual Result

The application rejected the login attempt and displayed an appropriate error message. The user remained on the Login page and was not granted access to the application.

---

## Status

✅ Pass

---

## Notes

Verify that:

- No unexpected page redirection occurs.
- The password field remains masked.
- No sensitive information is displayed in the error message.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)