# TC043 – Verify Bill Payment with Non-Existent Account Number

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a bill payment when a non-existent account number is entered.

---

## Preconditions

- User is logged in with a valid account.
- The **Bill Pay** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Payee Name | John Electric Company |
| Address | 456 Business Street |
| City | New York |
| State | NY |
| ZIP Code | 10001 |
| Phone | 1234567890 |
| Account Number | 999999999 |
| Verify Account | 999999999 |
| Amount | 100.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Complete all required payee information with valid data. |
| 4 | Enter a **non-existent account number**. |
| 5 | Re-enter the same account number in **Verify Account**. |
| 6 | Enter a valid payment amount. |
| 7 | Select a valid **From Account**. |
| 8 | Click **Send Payment**. |

---

## Expected Result

- The payment is not processed.
- The application displays an appropriate validation or error message indicating that the account number is invalid or cannot be found.
- No payment confirmation is displayed.
- No transaction is created.
- The user remains on the **Bill Pay** page.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The application validates the destination account before processing the payment.
- The validation message is clear and informative.
- No payment is recorded in the transaction history.
- Account balances remain unchanged.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
