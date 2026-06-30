# TC008 – Verify Inventory Page Display

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC008                 |
| **Module**           | Inventory             |
| **Requirement**      | FR-002                |
| **Related Scenario** | TS-006                |
| **Priority**         | High                  |
| **Severity**         | Critical              |
| **Test Type**        | Positive / Functional |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the Inventory page is displayed correctly after a successful login.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `problem_user`.

---

## Test Data

| Username      | Password     |
| ------------- | ------------ |
| problem_user  | secret_sauce |

---

## Test Steps

| Step | Action                                           | Expected Result                                    |
| ---: | ------------------------------------------------ | -------------------------------------------------- |
|    1 | Log in using valid credentials.                  | User is successfully authenticated.                |
|    2 | Observe the displayed page.                      | The Inventory page is displayed.                   |
|    3 | Verify the page title.                           | The title **"Products"** is visible.               |
|    4 | Verify that the product list is displayed.       | All available products are visible.                |
|    5 | Verify that the shopping cart icon is displayed. | Shopping cart icon is visible in the header.       |
|    6 | Verify that the menu button is displayed.        | The navigation (hamburger) menu button is visible. |

---

## Expected Result

- The Inventory page loads successfully.
- The **Products** title is displayed.
- All available products are listed.
- The shopping cart icon is visible.
- The navigation menu button is available.
- No visual or functional issues are observed during page load.

---

## Actual Result

The Inventory page loaded successfully after login. However, all product images displayed the same image regardless of the product. Product names, descriptions, and prices were different, but every product showed an identical image, resulting in incorrect product representation.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The URL contains `/inventory.html`.
- No error messages are displayed.
- The page layout is rendered correctly.
- The product list is fully loaded.
- The Inventory page is accessible only after successful authentication.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
