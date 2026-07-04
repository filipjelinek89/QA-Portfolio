# TC033 – Verify Transfer with Zero Amount

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** High

**Severity:** High

**Type:** Boundary Value Test, Negative Test

---

## Objective

Verify that the application prevents a fund transfer when the transfer amount is zero.

---

## Preconditions

- The user is logged in to ParaBank.
- At least two active bank accounts are available.
- Both accounts are displayed in the **Transfer Funds** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Account |
| To Account | Different Existing Account |
| Amount | 0.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Enter **0** as the transfer amount. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is not processed.
- The user remains on the **Transfer Funds** page.
- A clear validation message is displayed indicating that the transfer amount must be greater than zero.
- No funds are transferred.
- Account balances remain unchanged.

---

## Actual Result

The user accessed the Transfer Funds page and entered $0.00 as the transfer amount. After selecting valid source and destination accounts, the transfer request was submitted successfully. The application processed the transaction and displayed a confirmation message showing that $0.00 was transferred between accounts. No validation message was displayed to prevent a zero-value transfer.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- The application validates the transfer amount before processing the request.
- No transaction is recorded in the transaction history.
- No account balances are modified.
- The validation message is clear, accurate, and displayed in an appropriate location.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
