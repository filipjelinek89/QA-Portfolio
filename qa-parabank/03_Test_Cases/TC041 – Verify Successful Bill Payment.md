# TC041 – Verify Successful Bill Payment

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** Critical

**Severity:** Critical

**Type:** Positive Test

---

## Objective

Verify that a user can successfully submit a bill payment using valid payee information, a valid account, and a valid payment amount.

---

## Preconditions

- User is logged in to the ParaBank application.
- At least one active account with sufficient funds is available.
- The **Bill Pay** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Payee Name | John Smith |
| Address | 123 Main Street |
| City | New York |
| State | NY |
| ZIP Code | 10001 |
| Phone | 1234567890 |
| Account Number | 123456789 |
| Verify Account | 123456789 |
| Amount | 100.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Enter valid payee information. |
| 4 | Enter a valid account number and confirm it. |
| 5 | Enter a valid payment amount. |
| 6 | Select a valid **From Account**. |
| 7 | Click **Send Payment**. |

---

## Expected Result

- The bill payment is processed successfully.
- A confirmation message is displayed.
- The payment details are shown on the confirmation page.
- The payment amount is deducted from the selected account.
- No validation or system errors are displayed.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The confirmation page displays the correct payee information.
- The correct payment amount is shown.
- The selected account is used for the payment.
- The account balance is updated correctly.
- No duplicate payment is created after a single submission.
- The application remains stable throughout the transaction.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
