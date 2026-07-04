# TC034 – Verify Transfer with Negative Amount

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents users from transferring a negative amount between accounts.

---

## Preconditions

- User is logged in with a valid account.
- The user has at least two active accounts.
- The **Transfer Funds** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Existing Savings Account |
| Amount | -100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Enter **-100.00** in the **Amount** field. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is not completed.
- The application displays an appropriate validation or error message.
- No funds are transferred between accounts.
- Account balances remain unchanged.
- The user remains on the **Transfer Funds** page.

---

## Actual Result

The user accessed the Transfer Funds page and entered a negative amount value for the transfer. After selecting valid source and destination accounts, the transfer request was submitted successfully. The application processed the transaction and displayed a confirmation message showing that a negative amount was transferred between accounts. No validation message was displayed to prevent the invalid transaction.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Negative values are rejected before the transfer is processed.
- The validation message is clear and informative.
- No transaction record is created.
- Account balances remain unchanged.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
