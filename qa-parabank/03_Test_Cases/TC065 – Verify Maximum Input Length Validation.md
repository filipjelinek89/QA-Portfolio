# TC065 – Verify Maximum Input Length Validation

**Module:** Validation & Negative Testing

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** Medium

**Type:** Boundary Value Test

---

## Objective

Verify that input fields correctly enforce or validate the maximum allowed number of characters.

---

## Preconditions

- User is on the ParaBank **Registration** page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | Maximum allowed number of characters + 1 |
| Last Name | Maximum allowed number of characters + 1 |
| Address | Maximum allowed number of characters + 1 |
| City | Maximum allowed number of characters + 1 |
| State | Maximum allowed number of characters + 1 |
| ZIP Code | Maximum allowed number of characters + 1 |
| Phone | Maximum allowed number of characters + 1 |
| SSN | Maximum allowed number of characters + 1 |
| Username | Maximum allowed number of characters + 1 |
| Password | Maximum allowed number of characters + 1 |
| Confirm Password | Same as Password |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Enter values that exceed the maximum allowed length in one or more input fields. |
| 4 | Complete the remaining required fields with valid data. |
| 5 | Click **Register**. |

---

## Expected Result

- The application prevents users from entering more than the maximum allowed number of characters **or** displays an appropriate validation message.
- Registration is not completed if invalid input is submitted.
- No unexpected application errors occur.
- The application remains stable and responsive.

---

## Actual Result

The user entered values exceeding the expected maximum character length into the registration form fields. The application did not validate the maximum input length and allowed oversized values to be submitted. Instead of displaying field length validation messages, the application returned a username availability message: "This username already exists." The maximum length validation issue was already identified in a previous registration test case.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Input fields consistently enforce their maximum length.
- Excess characters are either rejected or handled according to the application's validation rules.
- No UI layout issues occur when long values are entered or pasted.
- The application does not truncate data silently without informing the user.

---

## Execution update:

- TC065 – Verify Maximum Input Length Validation
- Status: ❌ FAIL
- Linked Defect: BUG003 (same issue as TC006)

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
