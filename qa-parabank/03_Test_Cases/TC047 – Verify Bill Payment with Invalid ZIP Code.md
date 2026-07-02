# TC047 – Verify Bill Payment with Invalid ZIP Code

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** Medium

**Severity:** Medium

**Type:** Negative Test

---

## Objective

Verify that the application correctly validates the ZIP Code field during bill payment and prevents payment if an invalid ZIP Code is entered.

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
| ZIP Code | ABC12 |
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
| 3 | Enter valid information in all required fields. |
| 4 | Enter **ABC12** in the **ZIP Code** field. |
| 5 | Enter a valid payment amount. |
| 6 | Select a valid **From Account**. |
| 7 | Click **Send Payment**. |

---

## Expected Result

- The application validates the ZIP Code field.
- If the entered ZIP Code is invalid according to the application's validation rules, the payment is not processed.
- An appropriate validation message is displayed.
- No transaction is created.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The ZIP Code field accepts only supported input formats.
- Appropriate validation is performed before processing the payment.
- The validation message (if any) is clear and informative.
- No payment is processed when validation fails.
- If no ZIP Code validation exists, document the application's behavior and evaluate whether it should be reported as a defect.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
