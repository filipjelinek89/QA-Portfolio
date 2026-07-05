# BUG010 – Bill Payment Accepts Invalid ZIP Code Format Without Validation

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| **Bug ID**            | BUG010                                     |
| **Title**             | Bill Payment accepts invalid ZIP Code format without validation |
| **Related Test Case** | TC047                                      |
| **Module**            | Bill Payment                               |
| **Severity**          | Medium                                     |
| **Priority**          | Medium                                     |
| **Status**            | New                                        |
| **Reported On**       | 2026-07-04                                 |

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
* Invalid ZIP Code test data is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Bill Pay page. |
| 3 | Enter valid payee information in all required fields. |
| 4 | Enter an invalid ZIP Code format into the ZIP Code field. |
| 5 | Enter valid account information and payment amount. |
| 6 | Select the funding account. |
| 7 | Click the Send Payment button. |

---

## Expected Result

The application should validate the ZIP Code field before processing the payment.

If an invalid ZIP Code format is entered:

* The payment should not be processed.
* A validation message should be displayed.
* The user should be informed that the ZIP Code format is invalid.

Example validation message:

"Please enter a valid ZIP Code."

---

## Actual Result

The application accepted an invalid ZIP Code format in the payee information form.

The bill payment was processed successfully, and the system displayed a payment confirmation message.

No validation message was displayed to inform the user that the entered ZIP Code format was invalid.

---

## Impact

This defect affects payee information validation and data quality.

Impact:

* Invalid address information can be submitted.
* Incorrect payee records may be created.
* Customer/payment information reliability is reduced.
* External payment processing or integrations may be affected.
* Input validation rules are not properly enforced.

---

## Attachments

### Screenshots

[BUG-010 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG010_TC047_Bill_Payment_Invalid_ZIP_Code_Accepted.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects data validation in the Bill Payment workflow.

A banking application should validate address information before accepting payment requests. Allowing invalid ZIP Code formats may result in incorrect customer or payee records.

Additional input validation should be implemented for address-related fields.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC047                                      |
| Test Data       | Invalid ZIP Code format                    |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during negative input validation testing.

The application successfully processes bill payments even when the payee address contains invalid ZIP Code information.

ZIP Code format validation should be added before submitting payment requests.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
