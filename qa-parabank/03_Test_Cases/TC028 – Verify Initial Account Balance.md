# TC028 – Verify Initial Account Balance

**Module:** Open New Account

**Requirement ID:** FR-004

**Priority:** High

**Severity:** High

**Type:** Business Rule Test

---

## Objective

Verify that a newly created account receives the correct initial balance according to ParaBank account opening rules.

---

## Preconditions

* The user is logged in to ParaBank.
* The user has at least one existing account with sufficient funds.
* Internet connection is available.

---

## Test Data

| Field | Value |
|---|---|
| Account Type | Checking or Savings |
| Funding Account | Existing Account |
| Required Opening Deposit | $100.00 |
| Expected Initial Balance | $100.00 |

---

## Test Steps

| Step | Action |
|---|---|
| 1 | Log in to ParaBank. |
| 2 | Navigate to Open New Account. |
| 3 | Select Checking or Savings account type. |
| 4 | Select the existing account used to fund the new account. |
| 5 | Click Open New Account. |
| 6 | Verify that the account is created successfully. |
| 7 | Open the newly created account from Accounts Overview. |
| 8 | Verify the initial account balance. |

---

## Expected Result

* The new account is created successfully.
* The account is visible in Accounts Overview.
* The new account receives the required initial deposit of $100.00.
* The balance is displayed as $100.00 after account creation.
* The transferred amount is deducted from the selected funding account.
* No incorrect or unexpected balance is displayed.

---

## Actual Result

The user successfully created a new account using the Open New Account functionality. The application automatically transferred the required minimum opening deposit of $100.00 from the selected funding account into the newly created account. The new account appeared in Accounts Overview, and the displayed initial balance matched the expected application business rule. The funding account balance was updated correctly after the transfer.

---

## Status

✅ PASS

---

## Notes

Verify that:

* The required opening deposit follows the application rule:  
  "A minimum of $100.00 must be deposited into this account at the time of opening."
* The balance uses the correct currency format.
* The transfer between accounts is processed correctly.
* Account balances are updated consistently across all pages.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](../03_Test_Cases.md)
