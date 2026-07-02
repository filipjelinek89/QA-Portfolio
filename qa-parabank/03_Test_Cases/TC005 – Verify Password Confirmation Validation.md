# TC005 – Verify Password Confirmation Validation

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents user registration when the **Password** and **Confirm Password** fields do not match.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- The username has not been previously registered.
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
| ZIP Code | 10001 |
| Phone | 1234567890 |
| SSN | 123-45-6789 |
| Username | johnsmith005 |
| Password | Password123 |
| Confirm Password | Password321 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Complete all required fields with valid information. |
| 4 | Enter `Password123` in the **Password** field. |
| 5 | Enter `Password321` in the **Confirm Password** field. |
| 6 | Click **Register**. |

---

## Expected Result

- Registration is not completed.
- The user remains on the registration page.
- A validation message indicates that the passwords do not match.
- No new user account is created.
- The user is prompted to correct the password confirmation.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The validation message is clear and easy to understand.
- The password mismatch is detected before account creation.
- No account is created when the passwords differ.
- Sensitive fields are handled appropriately after validation (e.g., password fields may be cleared for security).

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
