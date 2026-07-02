# TC024 – Verify Opening a New Checking Account

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** High

**Severity:** Critical

**Type:** Positive Test, Functional Test

---

## Objective

Verify that a logged-in user can successfully open a new checking account.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least one existing account available for funding.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Account Type | Checking |
| From Account | Existing user account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Click **Open New Account**. |
| 3 | Select **Checking** as the account type. |
| 4 | Select an existing account from the **From Account** dropdown. |
| 5 | Click **Open New Account**. |

---

## Expected Result

- The request is processed successfully.
- A confirmation message is displayed.
- A new checking account number is generated.
- The new account is created successfully.
- The new account can be accessed from **Accounts Overview**.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- A unique account number is generated.
- The account type is **Checking**.
- The new account appears in **Accounts Overview**.
- No unexpected errors occur during account creation.
- The confirmation page displays accurate account information.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
