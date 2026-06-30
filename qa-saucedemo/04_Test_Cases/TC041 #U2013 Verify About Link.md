# TC041 – Verify About Link

## Test Information

| Field                | Value                              |
| -------------------- | ---------------------------------- |
| **Test Case ID**     | TC041                              |
| **Module**           | Navigation                         |
| **Requirement**      | FR-007                             |
| **Related Scenario** | TS-022                             |
| **Priority**         | Low                                |
| **Severity**         | Minor                              |
| **Test Type**        | Positive / Functional / Navigation |
| **Execution Type**   | Manual                             |

---

## Objective

Verify that clicking the **About** option in the Burger Menu redirects the user to the Sauce Labs website.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `problem_user`.
- The Inventory page is displayed.

---

## Test Data

N/A

---

## Test Steps

| Step | Action                          | Expected Result                                               |
| ---: | ------------------------------- | ------------------------------------------------------------- |
|    1 | Log in using valid credentials. | User is redirected to the Inventory page.                     |
|    2 | Open the **Burger Menu**.       | The navigation menu is displayed.                             |
|    3 | Click the **About** option.     | The application redirects the user to the Sauce Labs website. |
|    4 | Verify the destination page.    | The Sauce Labs website loads successfully.                    |

---

## Expected Result

- The **About** link redirects the user to the official Sauce Labs website.
- The destination page loads successfully.
- No broken links or error pages are displayed.
- No unexpected browser errors occur.

---

## Actual Result

Clicking the About link redirects the user to a 404 – Page Not Found error page instead of opening the Sauce Labs About page.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The browser is redirected to the Sauce Labs website.
- The destination page loads successfully without HTTP errors (such as **404** or **500**).
- The website displays expected branding and content.
- The original SauceDemo session remains active.
- Returning to the SauceDemo application does not require logging in again (if the session has not expired).
- No unexpected browser warnings or security issues occur during navigation.
- No visual or functional issues are observed after returning to the application.

⬅️ **Back to Test Cases**

[04_Test_Cases.md](04_Test_Cases.md)