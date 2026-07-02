# TC053 – Verify Loan Request with Empty Required Fields

**Module:** Request Loan

**Requirement ID:** FR-007

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a loan request from being submitted when one or more required fields are left empty.

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
| Loan Amount | *(Empty)* |
| Down Payment | *(Empty)* |
| From Account | *(Not Selected)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to **Request Loan**. |
| 3 | Leave all required fields empty. |
| 4 | Do not select a **From Account** (if possible). |
| 5 | Click **Apply Now**. |

---

## Expected Result

- The loan request is not submitted.
- The user remains on the **Request Loan** page.
- Validation messages are displayed for all required fields.
- No loan application is created.
- The user is prompted to complete the missing information.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- All required fields are validated.
- Validation messages are clear and displayed next to the appropriate fields.
- No loan request is processed.
- No unexpected system errors occur.
- Previously entered values (if any) are preserved after validation where appropriate.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
