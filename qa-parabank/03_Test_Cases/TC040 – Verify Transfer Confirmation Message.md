# TC040 – Verify Transfer Confirmation Message

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** High

**Severity:** Medium

**Type:** Positive Test

---

## Objective

Verify that the application displays a confirmation message after a successful transfer between accounts.

---

## Preconditions

- User is logged in with a valid account.
- The user has at least two active accounts.
- The source account contains sufficient funds.
- The **Transfer Funds** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Existing Savings Account |
| Amount | 100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select a valid **From Account**. |
| 4 | Select a valid **To Account**. |
| 5 | Enter **100.00** in the **Amount** field. |
| 6 | Click **Transfer**. |

---

## Expected Result

- The transfer is completed successfully.
- A confirmation message is displayed indicating that the transfer has been completed.
- The transferred amount is reflected in both account balances.
- No unexpected errors are displayed.

---

## Actual Result

The user successfully completed a valid transfer between two accounts. After submitting the transfer request, the application displayed a confirmation message indicating that the transfer was completed successfully. The confirmation message included the transferred amount and the source and destination account numbers, providing clear feedback about the completed transaction.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The confirmation message is displayed immediately after the transfer.
- The confirmation message is clear, accurate, and easy to understand.
- The transfer amount and selected accounts match the submitted data.
- The confirmation page or message remains visible until the user navigates away.
- No duplicate confirmation messages are displayed.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
