# TC001 – Verify Successful User Registration

**Module:** User Registration

**Requirement ID:** FR-001

**Priority:** High

**Severity:** Critical

**Type:** Positive Test

---

## Objective

Verify that a new user can successfully register with valid information and automatically gain access to the application.

---

## Preconditions

- User is on the ParaBank home page.
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
| Username | johnsmith001 |
| Password | Password123 |
| Confirm Password | Password123 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Open https://parabank.parasoft.com/ |
| 2 | Click **Register**. |
| 3 | Enter valid information into all required fields. |
| 4 | Click **Register**. |

---

## Expected Result

- Registration is completed successfully.
- A new customer account is created.
- The user is automatically logged in.
- A welcome message is displayed.
- The **Accounts Overview** page opens.

---

## Actual Result

The user successfully completed the registration process by entering all required customer information. A new customer account was created successfully, and the user was automatically logged into the application. After registration, a welcome message was displayed, and the user was redirected to the Accounts Overview page where the newly created account was visible.

---

## Status

✅ PASS

---

## Notes

No additional notes.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
