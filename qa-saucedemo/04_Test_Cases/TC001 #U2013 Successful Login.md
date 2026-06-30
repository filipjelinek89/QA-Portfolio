# TC001 – Successful Login

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC001                 |
| **Module**           | Login                 |
| **Requirement**      | FR-001                |
| **Related Scenario** | TS-001                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that a registered user can successfully log in using valid credentials.

---

## Preconditions

* The SauceDemo application is available.
* The user is on the Login page.
* A valid test account exists.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| standard_user | secret_sauce |

---

## Test Steps

| Step | Action                                         | Expected Result                           |
| ---: | ---------------------------------------------- | ----------------------------------------- |
|    1 | Navigate to the SauceDemo login page.          | Login page is displayed.                  |
|    2 | Enter `standard_user` into the Username field. | Username is accepted.                     |
|    3 | Enter `secret_sauce` into the Password field.  | Password is accepted.                     |
|    4 | Click the **Login** button.                    | User is redirected to the Inventory page. |

---

## Expected Result

The user is successfully authenticated and the Inventory page is displayed.

---

## Actual Result

The user successfully logged in using valid credentials and was redirected to the **Products** page as expected.

---

## Status

✅ Pass

---

## Notes

None.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)