# TC002 – Verify Registration with Required Fields Only

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** High

**Severity:** High

**Type:** Positive Test

---

## Objective

Verify that a new user can successfully register by completing all required registration fields with valid information.

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
| Last Name | Doe |
| Address | 456 Oak Street |
| City | Los Angeles |
| State | CA |
| ZIP Code | 90001 |
| Phone |  |
| SSN | 987-65-4321 |
| Username | johndoe002 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/ |
| 2 | Click **Register**. |
| 3 | Complete all required registration fields with valid data. |
| 4 | Leave any optional fields empty (if available). |
| 5 | Click **Register**. |

---

## Expected Result

- Registration is completed successfully.
- The user account is created.
- The user is automatically logged in.
- The **Accounts Overview** page is displayed.
- No validation errors are shown.

---

## Actual Result

The user completed the registration form using only the required fields and left the optional Phone Number field empty. The registration was processed successfully, a new customer account was created, and the user was automatically logged into the application. A welcome message was displayed, and the Accounts Overview page opened successfully.

---

## Status

✅ PASS

---

## Notes

During execution, verify which fields are actually required. If the application does not contain optional fields, consider replacing this test case with a more appropriate positive registration scenario.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
