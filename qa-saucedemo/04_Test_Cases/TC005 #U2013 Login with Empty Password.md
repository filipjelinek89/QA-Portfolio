# TC005 – Login with Empty Password

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC005                 |
| **Module**           | Login                 |
| **Requirement**      | FR-001                |
| **Related Scenario** | TS-003                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Negative / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the application displays an appropriate validation message when the Password field is left empty.

---

## Preconditions

- The SauceDemo application is available.
- The user is on the Login page.

---

## Test Data

| Username      | Password  |
| ------------- | --------- |
| standard_user | *(empty)* |

---

## Test Steps

| Step | Action                                             | Expected Result                                                                 |
| ---: | -------------------------------------------------- | ------------------------------------------------------------------------------- |
|    1 | Navigate to the SauceDemo login page.              | Login page is displayed.                                                        |
|    2 | Enter `standard_user` into the **Username** field. | Username is accepted.                                                           |
|    3 | Leave the **Password** field empty.                | Password field remains empty.                                                   |
|    4 | Click the **Login** button.                        | Login attempt is processed.                                                     |
|    5 | Observe the application response.                  | A validation error message is displayed and the user remains on the Login page. |

---

## Expected Result

- The login attempt is rejected.
- The user remains on the Login page.
- The following validation message is displayed:

```text
Epic sadface: Password is required
```

- No user session is created.
- The Inventory page is not accessible.

---

## Actual Result

The application prevented the login attempt and displayed a validation message indicating that the Password field is required. The user remained on the Login page.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The validation message is clearly visible.
- The Username field retains the entered value.
- The Password field remains empty and masked.
- No unexpected page refresh occurs.
- The Login button remains available for another login attempt.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
