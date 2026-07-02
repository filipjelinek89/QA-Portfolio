# TC064 – Verify HTML/JavaScript Input is Handled Safely  

**Module:** Validation & Negative Testing

**Requirement ID:** FR-001

**Priority:** Medium

**Severity:** High

**Type:** Security / Negative Test

---

## Objective

Verify that the application safely handles HTML and JavaScript input entered into text fields and does not execute or render malicious code.

---

## Preconditions

- User is on the ParaBank registration page.
- The user is not currently logged in.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| First Name | `<script>alert('Test')</script>` |
| Last Name | `<b>Smith</b>` |
| Address | `<img src=x onerror=alert('Test')>` |
| City | `<h1>New York</h1>` |
| State | NY |
| ZIP Code | 10001 |
| Phone | 1234567890 |
| SSN | 123-45-6789 |
| Username | htmltest001 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/. |
| 2 | Click **Register**. |
| 3 | Enter the HTML/JavaScript test data into the applicable text fields. |
| 4 | Complete the remaining required fields with valid data. |
| 5 | Click **Register**. |

---

## Expected Result

- The application does not execute any HTML or JavaScript code.
- No pop-ups or unexpected browser behavior occur.
- User input is either safely escaped, treated as plain text, or rejected with an appropriate validation message.
- The application remains stable and responsive.
- No application errors or security-related issues are observed.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- HTML tags are not rendered as formatted content.
- JavaScript code is not executed.
- No browser alerts or unexpected redirects occur.
- The application handles potentially malicious input safely without affecting functionality.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
