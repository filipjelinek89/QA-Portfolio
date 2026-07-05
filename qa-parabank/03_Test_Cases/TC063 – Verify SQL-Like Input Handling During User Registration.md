# TC063 – Verify SQL-Like Input Handling During User Registration

**Module:** Validation & Negative Testing

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the registration form safely handles SQL-like input entered into text fields without causing application errors or allowing unintended behavior.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | `' OR '1'='1` |
| Last Name | Test |
| Address | 123 Test Street |
| City | Test City |
| State | TS |
| ZIP Code | 10001 |
| Phone | 1234567890 |
| SSN | 123-45-6789 |
| Username | `test'--` |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Enter SQL-like strings into one or more text fields. |
| 4 | Complete the remaining required fields with valid data. |
| 5 | Click **Register**. |

---

## Expected Result

- The application safely processes or rejects the input.
- No application error, crash, or unexpected behavior occurs.
- No database-related information is exposed.
- Registration follows the application's normal validation rules.

---

## Actual Result

The user entered SQL-like input values into the registration form fields and submitted the registration request. The application processed the input successfully, created a new user account, and displayed the account confirmation page. No application error, crash, database error message, or unexpected behavior occurred. The application remained stable and continued functioning normally after processing the SQL-like input.

---

## Status

✅ PASS

---

## Notes

Verify that:
- No SQL errors or stack traces are displayed.
- The application remains stable.
- Error messages (if displayed) do not reveal internal system or database information.
- The application continues to function normally after the test.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
