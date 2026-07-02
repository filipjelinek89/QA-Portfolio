# TC044 – Verify Bill Payment with Empty Amount

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a bill payment from being submitted when the **Amount** field is left empty.

---

## Preconditions

- User is logged in with a valid account.
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
| Account | 987654321 |
| Verify Account | 987654321 |
| Amount | *(Empty)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Enter valid information in all required payee fields. |
| 4 | Leave the **Amount** field empty. |
| 5 | Click **Send Payment**. |

---

## Expected Result

- The payment is not submitted.
- The user remains on the **Bill Pay** page.
- A validation message is displayed indicating that the **Amount** field is required.
- No payment transaction is created.
- Account balances remain unchanged.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The validation message is displayed next to the **Amount** field or in another clearly visible location.
- The payment is not processed.
- All previously entered payee information remains available after validation.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
