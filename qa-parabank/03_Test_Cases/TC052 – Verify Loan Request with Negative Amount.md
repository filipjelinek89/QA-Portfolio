# TC052 – Verify Loan Request with Negative Amount

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a loan request when a negative loan amount is entered.

---

## Preconditions

- User is logged into ParaBank.
- At least one valid account exists.
- User is on the **Request Loan** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | **-5000.00** |
| Down Payment | 1000.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter **-5000.00** in the **Loan Amount** field. |
| 4 | Enter a valid **Down Payment**. |
| 5 | Select an existing account. |
| 6 | Click **Apply Now**. |

---

## Expected Result

- The loan request is not submitted.
- The user remains on the **Request Loan** page.
- A validation message indicates that the loan amount must be greater than zero.
- No loan application is created.
- No changes are made to the selected account.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- Negative values cannot be submitted.
- A clear validation message is displayed.
- No loan request confirmation page is shown.
- No new loan account is created.
- Existing account balances remain unchanged.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
