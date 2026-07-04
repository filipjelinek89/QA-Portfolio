# TC045 – Verify Bill Payment with Negative Amount

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a bill payment when a negative payment amount is entered.

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
| Amount | **-100.00** |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Enter valid payee information. |
| 4 | Enter **-100.00** in the **Amount** field. |
| 5 | Select a valid **From Account**. |
| 6 | Click **Send Payment**. |

---

## Expected Result

- The payment is not processed.
- The user remains on the **Bill Pay** page.
- A validation message is displayed indicating that the payment amount must be greater than zero.
- No transaction is created.
- The account balance remains unchanged.

---

## Actual Result

The user accessed the Bill Pay page and entered a negative amount value for the payment. After completing all required payee information and submitting the request, the application accepted the negative amount and displayed a successful bill payment confirmation message. The account balance remained unchanged; however, no validation message was displayed to prevent the invalid payment amount.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Negative numeric values cannot be submitted.
- The validation message is clear and informative.
- No payment confirmation page is displayed.
- No transaction appears in the account history.
- The account balance remains unchanged after the attempt.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
