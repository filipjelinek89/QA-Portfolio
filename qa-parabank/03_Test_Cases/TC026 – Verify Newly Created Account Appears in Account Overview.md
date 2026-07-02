# TC026 – Verify Newly Created Account Appears in Account Overview

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** High

**Severity:** High

**Type:** Functional Test

---

## Objective

Verify that a newly created bank account is automatically displayed in the **Accounts Overview** page after successful account creation.

---

## Preconditions

- The user is logged in to ParaBank.
- The user has at least one existing account.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| New Account Type | Checking or Savings |
| Existing Funding Account | Any valid account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Open New Account**. |
| 3 | Select the desired account type. |
| 4 | Select an existing account to fund the new account (if applicable). |
| 5 | Click **Open New Account**. |
| 6 | Navigate to **Accounts Overview**. |
| 7 | Verify that the newly created account is listed. |

---

## Expected Result

- The new account is successfully created.
- The newly created account appears in the **Accounts Overview** page.
- A unique account number is assigned to the new account.
- The account is available for further banking operations.
- No application errors occur during the process.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The account appears immediately without requiring the user to log out and back in.
- The displayed account number matches the number shown on the account creation confirmation page.
- The account type (Checking or Savings) is correct.
- The account can be selected and opened successfully from the **Accounts Overview** page.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
