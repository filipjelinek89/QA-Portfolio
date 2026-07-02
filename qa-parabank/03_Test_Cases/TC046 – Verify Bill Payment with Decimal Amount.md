# TC046 – Verify Bill Payment with Decimal Amount

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** Medium

**Severity:** Medium

**Type:** Positive Test

---

## Objective

Verify that the application successfully processes a bill payment when a valid decimal amount is entered.

---

## Preconditions

- User is logged into ParaBank.
- At least one account with sufficient funds is available.
- User is on the **Bill Pay** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Payee Name | John Utilities |
| Address | 123 Main Street |
| City | New York |
| State | NY |
| ZIP Code | 10001 |
| Phone | 1234567890 |
| Account Number | 12345678 |
| Verify Account | 12345678 |
| Amount | **100.50** |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Enter valid payee information. |
| 4 | Enter **100.50** in the **Amount** field. |
| 5 | Select a valid **From Account**. |
| 6 | Click **Send Payment**. |

---

## Expected Result

- The payment is processed successfully.
- A payment confirmation message is displayed.
- The payment amount is recorded accurately, including the decimal value.
- The account balance is reduced by the correct amount.
- The transaction appears in the account history.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The application accepts decimal values in the payment amount field.
- The amount is displayed with the correct precision.
- No rounding or calculation errors occur.
- The transaction history records the exact payment amount.
- The account balance is updated correctly.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
