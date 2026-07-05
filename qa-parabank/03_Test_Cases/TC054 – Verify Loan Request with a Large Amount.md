# TC054 – Verify Loan Request with a Large Amount

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** Medium

**Severity:** Medium

**Type:** Boundary Value Test

---

## Objective

Verify that the application correctly processes or validates a loan request when a very large loan amount is entered.

---

## Preconditions

- User is logged into ParaBank.
- At least one valid account is available.
- User is on the **Request Loan** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | 999999999.99 |
| Down Payment | 1000.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter **999999999.99** in the **Loan Amount** field. |
| 4 | Enter **1000.00** in the **Down Payment** field. |
| 5 | Select a valid **From Account**. |
| 6 | Click **Apply Now**. |

---

## Expected Result

- The application processes the request according to its business rules.
- If the entered amount exceeds the allowed limit, an appropriate validation or rejection message is displayed.
- If the amount is accepted, the loan request is processed correctly.
- The application remains stable and no unexpected system errors occur.

---

## Actual Result

The user attempted to verify loan request behavior using a large loan amount value. However, the test could not be completed because the Loan Request functionality failed during submission. The application displayed a generic internal error message: "An internal error has occurred and has been logged." This issue prevents verification of large loan amount validation and business rule handling.

---

## Status

⏸️ BLOCKED

---

## Notes

Verify that:
- Extremely large numeric values are handled correctly.
- Appropriate validation or business-rule messages are displayed when applicable.
- The application does not crash or become unresponsive.
- No incorrect loan approval or data corruption occurs.

---

## Execution update:

- TC051 – Verify Loan Request with Zero Amount
- Status: ⏸️ BLOCKED
- Blocked by: BUG012

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
