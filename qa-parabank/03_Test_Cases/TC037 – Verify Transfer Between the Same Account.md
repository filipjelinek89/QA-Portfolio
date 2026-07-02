# TC037 – Verify Transfer Between the Same Account

**Module:** Transfer Funds

**Requirement ID:** FR-005

**Priority:** Medium

**Severity:** Medium

**Type:** Business Rule Validation Test

---

## Objective

Verify how the application handles a fund transfer when the same account is selected as both the source and destination account.

---

## Preconditions

- User is logged in with a valid account.
- At least one active account is available.
- The **Transfer Funds** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| From Account | Existing Checking Account |
| To Account | Same Checking Account |
| Amount | 100.00 |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Transfer Funds**. |
| 3 | Select the same account for both **From Account** and **To Account**. |
| 4 | Enter **100.00** as the transfer amount. |
| 5 | Click **Transfer**. |

---

## Expected Result

The application handles the request according to the defined business rules.

If transfers to the same account are **not permitted**:
- The transfer is not completed.
- An appropriate validation or error message is displayed.
- No transaction is recorded.

If transfers to the same account are **permitted**:
- The transfer is processed successfully.
- Account balance remains unchanged.
- The transaction is handled without errors.

In either case:
- The application behaves consistently.
- No unexpected errors or crashes occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:
- The application handles the scenario consistently.
- Appropriate feedback is provided to the user.
- No duplicate or incorrect transaction records are created.
- Account balances remain accurate after the operation.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
