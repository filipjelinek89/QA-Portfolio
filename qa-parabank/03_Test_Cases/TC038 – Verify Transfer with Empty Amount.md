# TC038 – Verify Transfer with Empty Amount

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents a fund transfer when the **Amount** field is left empty.

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
| Amount | *(Empty)* |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Leave the **Amount** field empty. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is not completed.
- The application displays a validation message indicating that the **Amount** field is required.
- No funds are transferred.
- Account balances remain unchanged.
- The user remains on the **Transfer Funds** page.

---

## Actual Result

The user accessed the Transfer Funds page and submitted the transfer form without entering any amount value. The application did not process the transfer; however, instead of displaying a user-friendly validation message, the system returned a generic internal error message stating that an internal error occurred and was logged. No clear information was provided to the user explaining that the transfer amount field is required.

---

## Status

❌ FAIL

---

## Notes

Verify that:
- The **Amount** field is validated before processing the transfer.
- The validation message is clear and user-friendly.
- No transaction is created.
- Account balances remain unchanged.
- No unexpected system errors or page refreshes occur.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
