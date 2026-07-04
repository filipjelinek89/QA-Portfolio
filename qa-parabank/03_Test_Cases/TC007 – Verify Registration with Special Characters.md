# TC007 – Verify Registration with Special Characters

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** Medium

**Type:** Negative Test

---

## Objective

Verify that the registration form correctly handles special characters entered into user input fields and validates the input according to the application's rules.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | John@ |
| Last Name | Doe# |
| Address | 123 Main St. #5 |
| City | New@York |
| State | NY |
| ZIP Code | 10001 |
| Phone | 123-456-7890 |
| SSN | 123-45-6789 |
| Username | john!doe |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Enter special characters into one or more applicable input fields. |
| 4 | Complete the remaining required fields with valid data. |
| 5 | Click **Register**. |

---

## Expected Result

- The application validates all input fields according to the defined input rules.
- Fields that do not allow certain special characters display appropriate validation messages.
- Fields that permit special characters accept them correctly.
- No unexpected application errors occur.
- No user account is created if the entered data is invalid.

---

## Actual Result

The user completed the registration form using special characters in the input fields. The application accepted the entered values without displaying any validation message or input restriction. The account was created successfully, and the user was automatically logged into the application even though invalid characters were used during registration.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Validation messages are displayed where appropriate.
- Input validation is consistent across all fields.
- No unexpected application behavior occurs.
- The application remains stable when processing special characters.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
