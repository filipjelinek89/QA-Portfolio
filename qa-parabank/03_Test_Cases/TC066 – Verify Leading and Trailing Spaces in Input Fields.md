# TC066 – Verify Leading and Trailing Spaces in Input Fields

**Module:** Validation & Negative Testing

**Requirement ID:** FR-009

**Priority:** Medium

**Severity:** Medium

**Type:** Validation Test

---

## Objective

Verify that the application correctly handles leading and trailing spaces entered into user input fields without causing unexpected behavior or validation issues.

---

## Preconditions

- User is on the ParaBank home page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Username | ` johnsmith ` |
| Password | ` Password123 ` |

> *Note: Values intentionally contain leading and trailing spaces.*

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Enter a username with leading and trailing spaces. |
| 3 | Enter a password with leading and trailing spaces. |
| 4 | Attempt to log in (or submit the relevant form). |

---

## Expected Result

- The application handles leading and trailing spaces appropriately.
- Input is either automatically trimmed or validated according to the application's requirements.
- The application behaves consistently.
- No unexpected errors or system failures occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- Username fields trim or correctly validate surrounding spaces.
- Password fields behave according to the application's security requirements (passwords may or may not preserve spaces).
- Error messages, if displayed, are clear and accurate.
- No unexpected application behavior occurs.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
