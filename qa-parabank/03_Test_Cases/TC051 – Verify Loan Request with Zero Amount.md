# TC051 – Verify Loan Request with Zero Amount

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a loan request when the requested loan amount is zero.

---

## Preconditions

- User is logged into ParaBank.
- User has at least one eligible account.
- User is on the **Request Loan** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | 0 |
| Down Payment | 100 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter **0** in the **Loan Amount** field. |
| 4 | Enter a valid down payment (e.g., **100**). |
| 5 | Select an existing account. |
| 6 | Click **Apply Now**. |

---

## Expected Result

- The loan request is not submitted.
- The user remains on the **Request Loan** page.
- A validation message indicates that the loan amount must be greater than zero.
- No loan is created or approved.
- No changes are made to the selected account.

---

## Actual Result

The user attempted to verify loan request validation with a zero loan amount. However, the test could not be completed because the Loan Request functionality returned a generic internal error during submission. The application displayed "An internal error has occurred and has been logged", preventing verification of zero amount validation behavior.

---

## Status

⏸️ BLOCKED

---

## Notes

Verify that:
- The application validates the loan amount before processing the request.
- A clear validation message is displayed.
- No loan approval page is shown.
- No new loan account is created.
- The selected account balance remains unchanged.

---

## Execution update:
- TC051 – Verify Loan Request with Zero Amount
- Status: ⏸️ BLOCKED
- Blocked by: BUG012

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
