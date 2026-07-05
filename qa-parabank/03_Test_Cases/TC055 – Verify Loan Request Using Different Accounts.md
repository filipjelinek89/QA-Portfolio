# TC055 – Verify Loan Request Using Different Accounts

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** Medium

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that a user can successfully submit a loan request using different eligible accounts as the funding account.

---

## Preconditions

- User is logged into ParaBank.
- The user has at least two eligible accounts.
- User is on the **Request Loan** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | 1000.00 |
| Down Payment | 100.00 |
| From Account | Different eligible accounts (e.g., Checking and Savings) |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter a valid loan amount. |
| 4 | Enter a valid down payment. |
| 5 | Select the first eligible account from the **From Account** list. |
| 6 | Click **Apply Now**. |
| 7 | Repeat the process using another eligible account. |

---

## Expected Result

- The application allows selection of any eligible account.
- The loan request is processed successfully for each eligible account.
- A confirmation or approval/rejection message is displayed after each submission.
- No application errors occur during the process.

---

## Actual Result

The user attempted to verify loan request functionality using different available accounts. However, the test could not be completed because the Loan Request functionality failed during submission. The application displayed a generic internal error message: "An internal error has occurred and has been logged." This issue prevents verification of loan processing behavior with different selected accounts.

---

## Status

⏸️ BLOCKED

---

## Notes

Verify that:
- All eligible accounts are available in the **From Account** drop-down list.
- The selected account is correctly used during the loan request.
- The application behaves consistently regardless of which eligible account is selected.
- No unexpected errors or inconsistencies occur.

---

## Execution update:

- TC051 – Verify Loan Request with Zero Amount
- Status: ⏸️ BLOCKED
- Blocked by: BUG012

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
