# TC068 – Verify Browser Refresh During Form Submission

**Module:** Validation & Negative Testing

**Requirement ID:** FR-009

**Priority:** Medium

**Severity:** Medium

**Type:** Negative Test

---

## Objective

Verify that the application handles a browser refresh during form submission without causing duplicate transactions, data corruption, or unexpected application behavior.

---

## Preconditions

- User is logged into ParaBank.
- At least two bank accounts are available for testing.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Account |
| To Account | Different Existing Account |
| Amount | 100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select the source and destination accounts. |
| 4 | Enter a valid transfer amount. |
| 5 | Click **Transfer**. |
| 6 | Immediately refresh the browser (F5 or browser Refresh button). |
| 7 | Observe the application behavior and verify the transaction status. |

---

## Expected Result

- The application handles the refresh gracefully.
- The transfer is processed **only once**.
- No duplicate transaction is created.
- Account balances remain accurate.
- The user receives appropriate feedback regarding the transaction status.
- No application or server errors occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The transfer is not duplicated.
- The transaction history contains only one completed transfer.
- Account balances are updated correctly.
- The application remains stable after the refresh.
- No unexpected error messages or inconsistent states occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
