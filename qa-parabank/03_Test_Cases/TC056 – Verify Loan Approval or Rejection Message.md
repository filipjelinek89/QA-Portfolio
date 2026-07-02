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

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The decision message is clear and understandable.
- The displayed information matches the actual loan request result.
- The application behaves consistently after refreshing the page.
- No duplicate loan accounts are created after repeated submissions.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
