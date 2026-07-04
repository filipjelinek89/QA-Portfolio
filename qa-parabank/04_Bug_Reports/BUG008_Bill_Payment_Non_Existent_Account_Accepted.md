# BUG008 – Bill Payment Allows Payments to Non-Existent Account Numbers

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **Bug ID**            | BUG008                                                  |
| **Title**             | Bill Payment allows payments to non-existent account numbers |
| **Related Test Case** | TC043                                                   |
| **Module**            | Bill Payment                                            |
| **Severity**          | High                                                    |
| **Priority**          | High                                                    |
| **Status**            | New                                                     |
| **Reported On**       | 2026-07-04                                              |

---

## Environment

| Item             | Value                              |
| ---------------- | ---------------------------------- |
| Application      | ParaBank                           |
| URL              | https://parabank.parasoft.com/     |
| Browser          | Google Chrome                      |
| Browser Version  | 149.0.7827.197                     |
| Operating System | Windows 11                         |
| Testing Type     | Manual Testing                     |

---

## Preconditions

* User is registered in ParaBank.
* User is logged into the application.
* User has an active account with available balance.
* Bill Payment functionality is accessible.
* A non-existent payee account number is prepared for testing.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Bill Pay page. |
| 3 | Enter valid payee information (name, address, city, state, zip code, phone number). |
| 4 | Enter a non-existent account number into the Account field. |
| 5 | Confirm the same non-existent account number. |
| 6 | Enter a valid payment amount. |
| 7 | Select the funding account. |
| 8 | Click the Send Payment button. |

---

## Expected Result

The application should validate the destination account number before processing the payment.

If the account number does not exist:

* The payment should not be completed.
* A validation message should be displayed.
* No money should be deducted from the user's account.
* No transaction should be created.

Example message:

"The entered account number does not exist."

---

## Actual Result

The application accepted a non-existent account number as a valid payment destination.

The bill payment was processed successfully, and the application displayed a confirmation message indicating that the payment was completed.

No validation message was displayed to inform the user that the entered account number does not exist.

---

## Impact

This defect affects payment validation and transaction reliability.

Impact:

* Users can send payments to invalid account numbers.
* Incorrect payment records may be created.
* Money may be deducted without a valid recipient.
* Financial transaction integrity is affected.
* Core banking validation rules are not enforced.

---

## Attachments

### Screenshots

BUG008_TC043_Bill_Payment_Non_Existent_Account_Accepted.png

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects an important banking workflow.

A banking application should verify the existence of the destination account before completing any payment operation.

Allowing payments to non-existent accounts can create invalid transactions and should be prevented by proper validation.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC043                                      |
| Test Data       | Non-existent payee account number          |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during negative testing of the Bill Payment functionality.

The application validates required fields but does not verify whether the entered destination account actually exists.

Account validation should be performed before completing the payment request.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
