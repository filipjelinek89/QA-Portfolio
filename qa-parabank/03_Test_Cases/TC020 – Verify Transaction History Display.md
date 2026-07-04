# TC020 – Verify Transaction History Display

**Module:** Account Overview

**Requirement ID:** FR-003

**Priority:** High

**Severity:** High

**Type:** Functional Test

---

## Objective

Verify that the transaction history for the selected account is displayed correctly and contains accurate transaction information.

---

## Preconditions

- A registered user account exists.
- The user is successfully logged in.
- The **Account Details** page is displayed.
- The selected account contains one or more transactions.

---

## Test Data

| Field | Value |
|------|------|
| Username | johnsmith001 |
| Password | Password123 |
| Account | John Smith |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in with valid credentials. |
| 2 | Navigate to the **Accounts Overview** page. |
| 3 | Select an account that contains transaction history. |
| 4 | Review the list of displayed transactions. |
| 5 | Verify the transaction details. |

---

## Expected Result

- The transaction history is displayed successfully.
- All transactions belong to the selected account.
- Each transaction displays relevant information (e.g., date, type, amount).
- Transaction data is presented in a clear and consistent format.
- No application errors occur.

---

## Actual Result

The user successfully opened the Account Details page and accessed the transaction history section. The application displayed the account transaction information correctly, including transaction details such as date, description, transaction type, and amount. All available transactions were visible and properly formatted for the selected account.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The transaction list is not empty (when transactions exist).
- Transaction amounts are displayed correctly.
- Credits and debits are distinguishable (if applicable).
- Transactions are displayed in the expected chronological order.
- No duplicate or missing transactions are present.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
