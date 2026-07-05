# TC050 – Verify Successful Loan Request

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** High

**Severity:** Critical

**Type:** Positive Test

---

## Objective

Verify that a logged-in user can successfully submit a valid loan request and receive an approval or appropriate response from the application.

---

## Preconditions

- User is logged into ParaBank.
- At least one valid account exists.
- The account has sufficient balance to meet the application's loan approval criteria (if applicable).
- User is on the **Request Loan** page.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Loan Amount | 1000.00 |
| Down Payment | 200.00 |
| From Account | Existing Checking Account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Enter **1000.00** in the **Loan Amount** field. |
| 4 | Enter **200.00** in the **Down Payment** field. |
| 5 | Select a valid account from the **From Account** dropdown. |
| 6 | Click **Apply Now**. |

---

## Expected Result

- The loan request is submitted successfully.
- The application processes the request.
- A confirmation page is displayed showing the loan status (e.g., approved or denied).
- If approved, a new loan account is created and displayed in **Accounts Overview**.
- No unexpected errors occur during the process.

---

## Actual Result

The user accessed the Request Loan page and submitted a loan request using valid loan information. After submitting the request, the application failed to process the loan application and displayed a generic error message stating that an internal error occurred and was logged. No loan approval, denial, or detailed user feedback was provided.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- The confirmation page displays the correct loan amount.
- The loan status is clearly communicated to the user.
- If a new loan account is created, it appears in **Accounts Overview**.
- The application behaves consistently after refreshing the confirmation page.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
