# TC036 – Verify Transfer with a Large Amount

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** Medium

**Severity:** Medium

**Type:** Boundary Value Test

---

## Objective

Verify that the application correctly handles a transfer request with a very large amount and enforces any applicable transaction limits or validation rules.

---

## Preconditions

- User is logged in with a valid account.
- The user has at least two active accounts.
- The **Transfer Funds** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Existing Savings Account |
| Amount | 999999999.99 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Enter **999999999.99** in the **Amount** field. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The application validates the transfer amount according to business rules.
- If the amount exceeds the available balance or any transaction limit, the transfer is rejected with an appropriate validation or error message.
- If the amount is valid and permitted, the transfer is completed successfully.
- The application remains stable and no unexpected errors occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The application properly validates unusually large transfer amounts.
- Appropriate validation or error messages are displayed when necessary.
- No incorrect transaction is processed.
- Account balances remain accurate.
- No application crashes or unexpected behavior occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
