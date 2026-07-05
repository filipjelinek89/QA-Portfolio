# TC056 – Verify Loan Approval or Rejection Message

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** High

**Severity:** Medium

**Type:** Functional Test

---

## Objective

Verify that the application displays the correct loan decision message after a loan request is submitted.

---

## Preconditions

- User is logged into ParaBank.
- The user has at least one existing account.
- The **Request Loan** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | 1000 |
| Down Payment | 100 |
| From Account | Existing Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter a valid loan amount. |
| 4 | Enter a valid down payment. |
| 5 | Select an existing account from the **From Account** list. |
| 6 | Click **Apply Now**. |

---

## Expected Result

- The loan request is processed successfully.
- The application displays a clear decision message indicating whether the loan is **approved** or **denied**.
- If approved, a new loan account is created and displayed.
- If denied, an informative message explaining the rejection is displayed.
- No unexpected application errors occur.

---

## Actual Result

The user attempted to verify that the Loan Request functionality displays the correct approval or rejection message after submitting a loan application. However, the test could not be completed because the Loan Request process failed during submission. The application displayed a generic internal error message: "An internal error has occurred and has been logged." This issue prevents verification of the expected loan decision message.

---

## Status

⏸️ BLOCKED

---

## Notes

Verify that:
- The decision message is clear and understandable.
- The displayed information matches the actual loan request result.
- The application behaves consistently after refreshing the page.
- No duplicate loan accounts are created after repeated submissions.

---

## Execution update:

- TC051 – Verify Loan Request with Zero Amount
- Status: ⏸️ BLOCKED
- Blocked by: BUG012

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
