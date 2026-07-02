# TC006 – Verify Registration with Maximum Field Lengths

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** Medium

**Type:** Boundary Value Test

---

## Objective

Verify that the registration form correctly accepts or validates input values entered at the maximum allowed length for each applicable field.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | Maximum allowed number of characters |
| Last Name | Maximum allowed number of characters |
| Address | Maximum allowed number of characters |
| City | Maximum allowed number of characters |
| State | Maximum allowed number of characters |
| ZIP Code | Maximum allowed number of characters |
| Phone | Maximum allowed number of characters |
| SSN | Maximum allowed number of characters |
| Username | Maximum allowed number of characters |
| Password | Maximum allowed number of characters |
| Confirm Password | Same as Password |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Enter the maximum allowed number of characters into each field. |
| 4 | Complete all remaining required fields with valid data. |
| 5 | Click **Register**. |

---

## Expected Result

- The application accepts valid input at the maximum allowed length for each field.
- Registration is completed successfully if all entered values comply with the application's limits.
- No unexpected validation errors or application errors occur.
- Input values are displayed correctly without truncation or corruption.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- Text fields correctly enforce or accept their maximum length.
- Input is not unexpectedly truncated.
- The application remains responsive.
- No layout or formatting issues occur when long values are entered.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
