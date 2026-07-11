# TC038 – Verify Burger Menu Opens

## Test Information

| Field                | Value                      |
| -------------------- | -------------------------- |
| **Test Case ID**     | TC038                      |
| **Module**           | Navigation                 |
| **Requirement**      | FR-007                     |
| **Related Scenario** | TS-019                     |
| **Priority**         | Medium                     |
| **Severity**         | Major                      |
| **Test Type**        | Positive / Functional / UI |
| **Execution Type**   | Manual                     |

---

## Objective

Verify that clicking the **Burger Menu** button opens the navigation menu and displays all available menu options.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- The Inventory page is displayed.

---

## Test Data

N/A

---

## Test Steps

| Step | Action                                                    | Expected Result                           |
| ---: | --------------------------------------------------------- | ----------------------------------------- |
|    1 | Log in using valid credentials.                           | User is redirected to the Inventory page. |
|    2 | Locate the **Burger Menu** button in the top-left corner. | The button is visible.                    |
|    3 | Click the **Burger Menu** button.                         | The navigation menu opens.                |
|    4 | Verify the displayed menu options.                        | All expected menu items are visible.      |

---

## Expected Result

The navigation menu opens successfully and displays the following options:

- All Items
- About
- Logout
- Reset App State

The menu is fully visible and ready for interaction.

---

## Actual Result

The **Burger Menu** opened successfully after clicking the menu button. All available menu options were displayed correctly, and the menu was fully accessible without any visual or functional issues.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The navigation menu opens without delay.
- All four menu options are displayed.
- Menu text is readable and correctly aligned.
- The menu does not overlap or hide important page elements unexpectedly.
- The Inventory page remains visible behind the navigation menu.
- The shopping cart badge remains visible and unchanged.
- No visual or functional issues occur while opening the menu.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
