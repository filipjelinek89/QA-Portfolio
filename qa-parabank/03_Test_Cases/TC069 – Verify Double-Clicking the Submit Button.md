# TC069 – Verify Double-Clicking the Submit Button

**Module:** Validation & Negative Testing

**Requirement ID:** FR-009

**Priority:** Medium

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application correctly handles multiple rapid clicks on the **Submit/Register** button and prevents duplicate form submissions.

---

## Preconditions

- User is on the ParaBank registration page.
- The user is not currently logged in.
- All required fields are completed with valid information.
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
| Username | johnsmith069 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Complete all required fields with valid information. |
| 4 | Rapidly double-click the **Register** button. |

---

## Expected Result

- Only one registration request is processed.
- Only one user account is created.
- The application does not create duplicate records.
- The user is redirected only once.
- No unexpected errors or duplicate confirmation messages are displayed.

---

## Actual Result

The user double-clicked the submit button during form submission. The application handled the repeated action correctly and did not create duplicate records, duplicate transactions, or unexpected results. No application errors occurred, and the system processed the request successfully.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The **Register** button becomes disabled or ignores additional clicks while the request is being processed.
- Only one account is created in the system.
- The application remains responsive after the action.
- No duplicate requests or duplicate user records are generated.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
