# TC003 – Verify Registration with Empty Required Fields

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents user registration when required fields are left empty and displays appropriate validation messages.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | *(Empty)* |
| Last Name | *(Empty)* |
| Address | *(Empty)* |
| City | *(Empty)* |
| State | *(Empty)* |
| ZIP Code | *(Empty)* |
| Phone | *(Empty)* |
| SSN | *(Empty)* |
| Username | *(Empty)* |
| Password | *(Empty)* |
| Confirm Password | *(Empty)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Leave all required fields empty. |
| 4 | Click **Register**. |

---

## Expected Result

- Registration is not completed.
- The user remains on the registration page.
- Validation messages are displayed for all required fields.
- No new user account is created.
- The application clearly indicates which fields require input.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- Each required field displays an appropriate validation message.
- Validation messages are clear, accurate, and positioned next to the corresponding field.
- Previously entered values (if any) are preserved after validation.
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
