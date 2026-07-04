# TC004 – Verify Registration with an Existing Username

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents registration when a username that already exists is used.

---

## Preconditions

- User is on the ParaBank home page.
- A user account with the selected username already exists.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | John |
| Last Name | Doe |
| Address | 456 Oak Street |
| City | Los Angeles |
| State | CA |
| ZIP Code | 90001 |
| Phone | 9876543210 |
| SSN | 987-65-4321 |
| Username | johndoe002 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Complete all required fields using a username that already exists. |
| 4 | Click **Register**. |

---

## Expected Result

- Registration is not completed.
- The user remains on the registration page.
- A clear validation message indicates that the username is already in use.
- No duplicate user account is created.
- The user is prompted to choose a different username.

---

## Actual Result

The user completed the registration form using valid customer information but entered an existing username "johndoe002". After submitting the registration form, the system prevented the creation of a duplicate account and displayed a validation message informing the user that the selected username already exists. The registration was not completed, and no new customer account was created.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The application correctly identifies duplicate usernames.
- The validation message is clear and informative.
- All previously entered data remains in the form except for fields that should be cleared for security reasons (e.g., passwords, if applicable).
- No unexpected system errors occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
