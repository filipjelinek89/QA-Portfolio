# TC042 – Verify Bill Payment with Empty Required Fields

**Module:** Bill Payment

**Requirement ID:** FR-006

**Priority:** High

**Severity:** High

**Type:** Negative Test

---

## Objective

Verify that the application prevents bill payment submission when one or more required fields are left empty.

---

## Preconditions

- User is logged in with a valid account.
- The **Bill Pay** page is accessible.
- Internet connection is available.

---

## Test Data

| Field | Value |
|------|------|
| Payee Name | *(Empty)* |
| Address | *(Empty)* |
| City | *(Empty)* |
| State | *(Empty)* |
| ZIP Code | *(Empty)* |
| Phone | *(Empty)* |
| Account Number | *(Empty)* |
| Verify Account | *(Empty)* |
| Amount | *(Empty)* |
| From Account | Select any valid account |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to the ParaBank application. |
| 2 | Navigate to **Bill Pay**. |
| 3 | Leave all required input fields empty. |
| 4 | Select any valid **From Account** (if required). |
| 5 | Click **Send Payment**. |

---

## Expected Result

- The payment is not processed.
- The user remains on the **Bill Pay** page.
- Validation messages are displayed for all required fields.
- No payment transaction is created.
- Account balances remain unchanged.

---

## Actual Result

The user accessed the Bill Pay page and attempted to submit the payment form without entering required payee and payment information. The application prevented the bill payment from being processed and displayed validation messages for the mandatory fields. No payment transaction was created, and the user was informed that the required information must be provided before completing the payment.

---

## Status

✅ PASS

---

## Notes

Verify that:
- Every required field displays an appropriate validation message.
- Validation messages are positioned next to the corresponding field.
- Previously entered values (if any) are preserved after validation.
- No unexpected system errors occur.
- No payment confirmation page is displayed.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
