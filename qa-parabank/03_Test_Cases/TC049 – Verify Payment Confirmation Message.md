# TC049 – Verify Payment Confirmation Message

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** High

**Severity:** Medium

**Type:** Positive Test

---

## Objective

Verify that the application displays a confirmation message after a successful bill payment.

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
| Amount | 100.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Complete all required fields with valid information. |
| 4 | Enter **100.00** in the **Amount** field. |
| 5 | Select a valid **From Account**. |
| 6 | Click **Send Payment**. |

---

## Expected Result

- The bill payment is processed successfully.
- A confirmation page or confirmation message is displayed.
- The confirmation clearly indicates that the payment has been submitted successfully.
- The payment details displayed in the confirmation match the submitted data.
- No error messages are displayed.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The confirmation message is displayed immediately after submission.
- The confirmation message is clear and easy to understand.
- The payee name, payment amount, and source account (if displayed) are correct.
- The user can continue using the application after the payment is confirmed.
- The payment appears in the account activity or transaction history, if applicable.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
