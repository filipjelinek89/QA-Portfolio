# TC009 – Verify Login with Valid Credentials

**Module:** Login

**Requirement ID:** FR-002

**Priority:** High

**Severity:** Critical

**Type:** Positive Test

---

## Objective

Verify that a registered user can successfully log in using valid credentials and access their bank account.

---

## Preconditions

- The user has successfully completed the registration process.
- A valid username and password are available.
- The user is logged out.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | johnsmith001 |
| Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Enter a valid username into the **Username** field. |
| 3 | Enter the corresponding password into the **Password** field. |
| 4 | Click **Log In**. |

---

## Expected Result

- Login is completed successfully.
- The user is redirected to the **Accounts Overview** page.
- The user's account information is displayed.
- The navigation menu for authenticated users is available.
- No error messages are displayed.

---

## Actual Result

The user successfully completed the registration process and was redirected to the Accounts Overview page. The application displayed the newly created customer account with the account number, current balance, and available amount information. The account details were visible and correctly presented to the user.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The login process completes without errors.
- The correct user account is displayed.
- The session is created successfully.
- The user has access to all authorized banking features.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
