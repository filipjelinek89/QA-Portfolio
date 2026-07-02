# TC048 – Verify Bill Payment with Invalid Phone Number

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** Medium

**Severity:** Medium

**Type:** Negative Test

---

## Objective

Verify that the application validates the **Phone** field and prevents bill payment when an invalid phone number is entered.

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
| Phone | ABC123XYZ |
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
| 3 | Enter valid payee information. |
| 4 | Enter **ABC123XYZ** in the **Phone** field. |
| 5 | Complete all remaining required fields with valid data. |
| 6 | Click **Send Payment**. |

---

## Expected Result

- The application validates the phone number format.
- Bill payment is not processed if the phone number is invalid.
- A clear validation message is displayed.
- The user remains on the **Bill Pay** page.
- No payment transaction is created.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The **Phone** field accepts only valid input according to the application's validation rules.
- Appropriate validation feedback is displayed when invalid data is entered.
- No payment is processed with invalid phone information.
- The account balance remains unchanged.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
