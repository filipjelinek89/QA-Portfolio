# TC067 – Verify Unicode Characters in Text Fields

**Module:** Validation & Negative Testing

**Requirement ID:** FR-009

**Priority:** Low

**Severity:** Low

**Type:** Validation Test

---

## Objective

Verify that the application correctly handles Unicode characters entered into text fields without causing validation issues, data corruption, or unexpected application behavior.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | Filip |
| Last Name | Jelínek |
| Address | Černá 125 |
| City | České Budějovice |
| State | Jihočeský |
| Username | filip_jelinek |
| Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Navigate to the appropriate form (e.g., Registration). |
| 3 | Enter Unicode characters into applicable text fields. |
| 4 | Complete all remaining required fields with valid data. |
| 5 | Submit the form. |

---

## Expected Result

- The application processes Unicode characters according to its requirements.
- If Unicode characters are supported, the data is stored and displayed correctly.
- If Unicode characters are not supported, a clear validation message is displayed.
- No application errors, crashes, or data corruption occur.

---

## Actual Result

The user entered Unicode characters containing Czech accents into the registration form fields. After submitting the registration request, the application did not correctly handle or display the Unicode characters. Special characters were converted into incorrect symbols and HTML entity codes, causing data corruption. No validation message was displayed informing the user that Unicode characters are not supported.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- Unicode characters are displayed correctly after submission.
- The application handles accented characters consistently across all applicable fields.
- Validation messages (if any) are clear and informative.
- No encoding issues (e.g., `?`, `�`, or corrupted characters) are observed.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
