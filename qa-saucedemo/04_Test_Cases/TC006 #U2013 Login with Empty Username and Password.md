# TC006 – Login with Empty Username and Password

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC006                 |
| **Module**           | Login                 |
| **Requirement**      | FR-001                |
| **Related Scenario** | TS-003                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Negative / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the application displays the appropriate validation message when both the Username and Password fields are left empty.

---

## Preconditions

- The SauceDemo application is available.
- The user is on the Login page.

---

## Test Data

| Username  | Password  |
| --------- | --------- |
| *(empty)* | *(empty)* |

---

## Test Steps

| Step | Action                                | Expected Result                                                                 |
| ---: | ------------------------------------- | ------------------------------------------------------------------------------- |
|    1 | Navigate to the SauceDemo login page. | Login page is displayed.                                                        |
|    2 | Leave the **Username** field empty.   | Username field remains empty.                                                   |
|    3 | Leave the **Password** field empty.   | Password field remains empty.                                                   |
|    4 | Click the **Login** button.           | Login attempt is processed.                                                     |
|    5 | Observe the application response.     | A validation error message is displayed and the user remains on the Login page. |

---

## Expected Result

- The login attempt is rejected.
- The user remains on the Login page.
- The following validation message is displayed:

```text
Epic sadface: Username is required
```

- No user session is created.
- The Inventory page is not accessible.

---

## Actual Result

The application prevented the login attempt and displayed a validation message indicating that the Username field is required. The user remained on the Login page and access to the application was denied.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The validation message is clearly visible.
- Both input fields remain empty.
- No unexpected page refresh occurs.
- No user session is created.
- The Login button remains available for another login attempt.
- The Username field is validated before the Password field.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)