# TC008 – Verify Registration with Invalid ZIP Code

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** Medium

**Type:** Negative Test

---

## Objective

Verify that the application correctly validates the **ZIP Code** field and prevents registration when an invalid ZIP Code is entered.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | John |
| Last Name | Smith |
| Address | 123 Main Street |
| City | New York |
| State | NY |
| ZIP Code | ABC123 |
| Phone | 1234567890 |
| SSN | 123-45-6789 |
| Username | johnsmith008 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Complete all required registration fields with valid information. |
| 4 | Enter an invalid value (e.g., `ABC123`) into the **ZIP Code** field. |
| 5 | Click **Register**. |

---

## Expected Result

- The application validates the ZIP Code field.
- If the entered ZIP Code format is invalid, registration is not completed.
- An appropriate validation message is displayed.
- No new user account is created.
- The user remains on the registration page.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The ZIP Code field accepts only valid input according to the application's validation rules.
- The validation message is clear and informative.
- No unexpected application errors occur.
- All other valid field values are preserved after validation.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
