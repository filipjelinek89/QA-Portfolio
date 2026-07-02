## TC001 – Verify Successful User Registration

**Requirement ID:** FR-001

**Module:** User Registration

**Priority:** High

**Type:** Functional Testing

---

### Objective

Verify that a new customer can successfully register using valid information.

---

### Preconditions

- User is not registered.
- ParaBank application is accessible.
- User is on the Registration page.

---

### Test Data

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

### Test Steps

1. Open https://parabank.parasoft.com/.
2. Click **Register**.
3. Enter valid information into all required fields.
4. Click **Register**.

---

### Expected Result

- Registration completes successfully.
- A welcome message is displayed.
- The user is automatically logged in.
- The Account Overview page is displayed.

---

### Actual Result

_To be completed during execution._

---

### Status

Not Executed

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
